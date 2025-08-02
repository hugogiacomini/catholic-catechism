@echo off
REM Windows deployment script for Catholic Catechism website to AWS S3
REM Usage: deploy.bat [bucket-name]

setlocal enabledelayedexpansion

REM Default values
set DEFAULT_BUCKET=catholic-catechism-website
set DEFAULT_REGION=us-east-1

REM Get parameters
set BUCKET_NAME=%1
if "%BUCKET_NAME%"=="" set BUCKET_NAME=%DEFAULT_BUCKET%

echo [INFO] Starting deployment of Catholic Catechism website...
echo [INFO] Bucket name: %BUCKET_NAME%

REM Check if AWS CLI is installed
aws --version >nul 2>&1
if errorlevel 1 (
    echo [ERROR] AWS CLI is not installed. Please install it first.
    exit /b 1
)

REM Check if AWS credentials are configured
aws sts get-caller-identity >nul 2>&1
if errorlevel 1 (
    echo [ERROR] AWS credentials are not configured. Please run 'aws configure' first.
    exit /b 1
)

REM Deploy CloudFormation stack if CloudFront distribution ID is not provided
if "%CLOUDFRONT_DISTRIBUTION_ID%"=="" (
    echo [INFO] Deploying CloudFormation stack...
    
    aws cloudformation deploy ^
        --template-file cloudformation-template.yaml ^
        --stack-name catholic-catechism-stack ^
        --parameter-overrides BucketName=%BUCKET_NAME% ^
        --capabilities CAPABILITY_IAM ^
        --region %DEFAULT_REGION%
    
    if errorlevel 1 (
        echo [ERROR] Failed to deploy CloudFormation stack!
        exit /b 1
    )
    
    echo [INFO] CloudFormation stack deployed successfully!
    
    REM Get outputs
    for /f "tokens=*" %%i in ('aws cloudformation describe-stacks --stack-name catholic-catechism-stack --query "Stacks[0].Outputs[?OutputKey==`WebsiteURL`].OutputValue" --output text --region %DEFAULT_REGION%') do set WEBSITE_URL=%%i
    
    REM Save to environment file
    echo WEBSITE_URL=!WEBSITE_URL! > .env
    echo S3_BUCKET_NAME=%BUCKET_NAME% >> .env
    
    echo [INFO] Website URL: !WEBSITE_URL!
)

REM Upload files to S3
echo [INFO] Uploading files to S3 bucket: %BUCKET_NAME%

REM Upload HTML files
aws s3 cp index.html s3://%BUCKET_NAME%/ ^
    --content-type "text/html" ^
    --cache-control "max-age=3600"

REM Upload CSS files
aws s3 sync styles/ s3://%BUCKET_NAME%/styles/ ^
    --content-type "text/css" ^
    --cache-control "max-age=86400" ^
    --exclude "*" ^
    --include "*.css"

REM Upload JavaScript files
aws s3 sync js/ s3://%BUCKET_NAME%/js/ ^
    --content-type "application/javascript" ^
    --cache-control "max-age=86400" ^
    --exclude "*" ^
    --include "*.js"

REM Upload any additional assets
if exist "assets" (
    aws s3 sync assets/ s3://%BUCKET_NAME%/assets/ ^
        --cache-control "max-age=604800"
)

echo [INFO] Files uploaded successfully!

REM Load environment variables if available
if exist ".env" (
    for /f "tokens=1,2 delims==" %%a in (.env) do (
        if "%%a"=="WEBSITE_URL" set WEBSITE_URL=%%b
    )
    
    echo [INFO] Deployment completed successfully!
    echo [INFO] Your website is available at: !WEBSITE_URL!
) else (
    echo [INFO] Deployment completed!
)

echo [INFO] Deployment process finished.
pause
