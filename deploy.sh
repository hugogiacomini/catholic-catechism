#!/bin/bash

# Deployment script for Catholic Catechism website to AWS S3
# Usage: ./deploy.sh [bucket-name]

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Default values
DEFAULT_BUCKET="catholic-catechism-website"
DEFAULT_REGION="us-east-1"

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to check if AWS CLI is installed
check_aws_cli() {
    if ! command -v aws &> /dev/null; then
        print_error "AWS CLI is not installed. Please install it first."
        exit 1
    fi
}

# Function to check if AWS credentials are configured
check_aws_credentials() {
    if ! aws sts get-caller-identity &> /dev/null; then
        print_error "AWS credentials are not configured. Please run 'aws configure' first."
        exit 1
    fi
}

# Function to validate bucket name
validate_bucket_name() {
    local bucket_name=$1
    if [[ ! $bucket_name =~ ^[a-z0-9][a-z0-9-]*[a-z0-9]$ ]]; then
        print_error "Invalid bucket name. Bucket names must be lowercase, alphanumeric, and may contain hyphens."
        exit 1
    fi
}

# Function to deploy CloudFormation stack
deploy_infrastructure() {
    local bucket_name=$1
    local stack_name="catholic-catechism-stack"
    
    print_status "Deploying CloudFormation stack..."
    
    aws cloudformation deploy \
        --template-file cloudformation-template.yaml \
        --stack-name $stack_name \
        --parameter-overrides BucketName=$bucket_name \
        --capabilities CAPABILITY_IAM \
        --region $DEFAULT_REGION
    
    if [ $? -eq 0 ]; then
        print_status "CloudFormation stack deployed successfully!"
        
        # Get outputs
        local website_url=$(aws cloudformation describe-stacks \
            --stack-name $stack_name \
            --query 'Stacks[0].Outputs[?OutputKey==`WebsiteURL`].OutputValue' \
            --output text \
            --region $DEFAULT_REGION)
        
        echo "WEBSITE_URL=$website_url" > .env
        echo "S3_BUCKET_NAME=$bucket_name" >> .env
        
        print_status "Website URL: $website_url"
        print_status "CloudFront Distribution ID: $cloudfront_id"
    else
        print_error "Failed to deploy CloudFormation stack!"
        exit 1
    fi
}

# Function to upload files to S3
upload_to_s3() {
    local bucket_name=$1
    
    print_status "Uploading files to S3 bucket: $bucket_name"
    
    # Upload HTML files
    aws s3 cp index.html s3://$bucket_name/ \
        --content-type "text/html" \
        --cache-control "max-age=3600"
    
    # Upload CSS files
    aws s3 sync styles/ s3://$bucket_name/styles/ \
        --content-type "text/css" \
        --cache-control "max-age=86400" \
        --exclude "*" \
        --include "*.css"
    
    # Upload JavaScript files
    aws s3 sync js/ s3://$bucket_name/js/ \
        --content-type "application/javascript" \
        --cache-control "max-age=86400" \
        --exclude "*" \
        --include "*.js"
    
    # Upload any additional assets
    if [ -d "assets" ]; then
        aws s3 sync assets/ s3://$bucket_name/assets/ \
            --cache-control "max-age=604800"
    fi
    
    print_status "Files uploaded successfully!"
}

# Function to verify deployment
verify_deployment() {
    local website_url=$1
    
    print_status "Verifying deployment..."
    
    if command -v curl &> /dev/null; then
        local status_code=$(curl -s -o /dev/null -w "%{http_code}" $website_url)
        if [ "$status_code" -eq 200 ]; then
            print_status "Website is accessible and returning HTTP 200!"
        else
            print_warning "Website returned HTTP status code: $status_code"
        fi
    else
        print_warning "curl not found. Please manually verify the website at: $website_url"
    fi
}

# Main deployment function
main() {
    local bucket_name=${1:-$DEFAULT_BUCKET}
    
    print_status "Starting deployment of Catholic Catechism website..."
    print_status "Bucket name: $bucket_name"
    
    # Validate inputs
    validate_bucket_name $bucket_name
    
    # Check prerequisites
    check_aws_cli
    check_aws_credentials
    
    # Deploy infrastructure
    deploy_infrastructure $bucket_name
    
    # Upload files
    upload_to_s3 $bucket_name
    
    # Load website URL for verification
    if [ -f ".env" ]; then
        source .env
        verify_deployment $WEBSITE_URL
        print_status "Deployment completed successfully!"
        print_status "Your website is available at: $WEBSITE_URL"
    else
        print_status "Deployment completed!"
    fi
}

# Show usage if help is requested
if [ "$1" = "--help" ] || [ "$1" = "-h" ]; then
    echo "Usage: $0 [bucket-name]"
    echo ""
    echo "Parameters:"
    echo "  bucket-name              S3 bucket name (default: $DEFAULT_BUCKET)"
    echo ""
    echo "Examples:"
    echo "  $0                                    # Deploy with default bucket name"
    echo "  $0 my-catechism-bucket               # Deploy with custom bucket name"
    echo ""
    echo "Prerequisites:"
    echo "  - AWS CLI installed and configured"
    echo "  - Appropriate AWS permissions for S3 and CloudFormation"
    exit 0
fi

# Run main function
main "$@"
