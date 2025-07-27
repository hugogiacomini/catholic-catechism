# Catholic Catechism Interactive Platform

A modern, responsive website for studying the Catechism of the Catholic Church with age-appropriate content adaptation and multi-language support.

## Features

### 🎯 Age-Appropriate Content
- **Children (6-12)**: Simple language, interactive activities, colorful design
- **Teens (13-17)**: Engaging content with discussion questions and contemporary examples
- **Adults (18+)**: Complete theological content with cross-references and study materials

### 🌍 Multi-Language Support
- **English**: Complete content and interface
- **Portuguese (Português)**: Full translation support
- **Latin**: Traditional prayers and key texts

### 📚 Structured Content
The platform organizes the Catechism into its four main parts:
1. **The Profession of Faith** - What we believe
2. **The Celebration of the Christian Mystery** - How we worship
3. **Life in Christ** - How we live
4. **Christian Prayer** - How we pray

### 🎨 Modern Design
- Responsive design for all devices
- Accessibility features (WCAG 2.1 compliant)
- Dark mode support
- Print-friendly styling
- Smooth animations and transitions

### ☁️ Cloud-Ready
- AWS S3 static hosting
- CloudFront CDN for global performance
- WAF protection against common attacks
- Lambda functions for enhanced functionality

## Getting Started

### Prerequisites
- AWS CLI installed and configured
- AWS account with appropriate permissions
- Modern web browser

### Local Development

1. **Clone or download the project files**
2. **Open `index.html` in a web browser** to test locally
3. **Modify content in `js/data.js`** to add more sections
4. **Update translations in `js/translations.js`** for additional languages

### AWS Deployment

#### Option 1: Automated Deployment (Recommended)

**Linux/Mac:**
```bash
chmod +x deploy.sh
./deploy.sh [bucket-name]
```

**Windows:**
```batch
deploy.bat [bucket-name]
```

#### Option 2: Manual CloudFormation Deployment

1. **Deploy the infrastructure:**
```bash
aws cloudformation deploy \
  --template-file cloudformation-template.yaml \
  --stack-name catholic-catechism-stack \
  --parameter-overrides BucketName=your-unique-bucket-name \
  --capabilities CAPABILITY_IAM
```

2. **Upload website files:**
```bash
aws s3 sync . s3://your-bucket-name --exclude "*.yaml" --exclude "*.sh" --exclude "*.bat" --exclude "*.md"
```

3. **Create CloudFront invalidation:**
```bash
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
```

## Architecture

### Frontend
- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **Vanilla JavaScript**: No dependencies, lightweight and fast
- **Progressive Enhancement**: Works without JavaScript

### Backend (AWS)
- **S3**: Static file hosting with versioning
- **CloudFront**: Global CDN with edge caching
- **WAF**: Web Application Firewall for security
- **Lambda**: Optional form processing and API functions
- **CloudWatch**: Monitoring and logging

### Security Features
- HTTPS enforcement
- Content Security Policy headers
- Rate limiting via WAF
- DDoS protection through CloudFront
- Input validation and sanitization

## Content Structure

### Data Organization
Content is organized in `js/data.js` with the following structure:

```javascript
catechismData = {
  parts: {
    1: {
      title: { en: "Title", pt: "Título", la: "Titulus" },
      description: { en: "Description", pt: "Descrição", la: "Descriptio" },
      sections: [
        {
          id: "unique-id",
          title: { en: "Section Title", pt: "Título da Seção", la: "Titulus Sectionis" },
          content: {
            adults: { en: "Adult content", pt: "Conteúdo adulto", la: "Contentum adultorum" },
            teens: { en: "Teen content", pt: "Conteúdo adolescente", la: "Contentum adolescentium" },
            children: { en: "Children content", pt: "Conteúdo infantil", la: "Contentum puerorum" }
          }
        }
      ]
    }
  }
}
```

### Adding New Content

1. **Add sections to existing parts** in `js/data.js`
2. **Create new translations** in `js/translations.js`
3. **Update the content rendering** in `js/main.js` if needed

## Customization

### Styling
- Modify `styles/main.css` for general styling
- Edit `styles/enhanced.css` for age-specific and activity styles
- Update CSS custom properties (variables) for easy theming

### Languages
- Add new language codes to the language selector in `index.html`
- Create translation objects in `js/translations.js`
- Update content objects in `js/data.js`

### Age Groups
- Modify age ranges in the age selector
- Add new age-specific styling in CSS
- Create content variations in the data structure

## Performance Optimization

### Caching Strategy
- **HTML**: 1 hour cache
- **CSS/JS**: 24 hours cache
- **Images**: 7 days cache
- **CloudFront**: Edge caching with proper invalidation

### Loading Optimization
- Minified and compressed assets
- Progressive image loading
- Font optimization with preloading
- Service Worker for offline functionality (can be added)

## Browser Support

- **Modern Browsers**: Full functionality
- **IE 11**: Basic functionality (with polyfills)
- **Mobile Browsers**: Responsive design
- **Screen Readers**: Full accessibility support

## Contributing

### Content Guidelines
1. **Faithful to Church Teaching**: All content must align with official Catholic doctrine
2. **Age-Appropriate**: Content should be suitable for the target age group
3. **Accessible Language**: Use clear, understandable language
4. **Cultural Sensitivity**: Consider cultural differences in translations

### Technical Guidelines
1. **Code Quality**: Follow established coding standards
2. **Performance**: Optimize for fast loading
3. **Accessibility**: Maintain WCAG 2.1 AA compliance
4. **Security**: Follow security best practices

## License and Attribution

This project is based on the official **Catechism of the Catholic Church** published by the Vatican. The original text is:
- Copyright © Libreria Editrice Vaticana
- Available at: https://www.vatican.va/archive/ENG0015/_INDEX.HTM

### Platform License
The website platform code is available for educational and religious purposes. Please ensure any derivative works maintain:
- Attribution to the original Catechism source
- Fidelity to Catholic teaching
- Appropriate permissions for commercial use

## Support and Maintenance

### Monitoring
- CloudWatch logs for error tracking
- Performance monitoring via CloudFront metrics
- User experience analytics (optional)

### Updates
- Content updates can be deployed via S3 sync
- Infrastructure changes via CloudFormation updates
- Security patches applied automatically via managed services

### Troubleshooting

**Common Issues:**

1. **Deployment Fails**
   - Check AWS credentials and permissions
   - Verify bucket name uniqueness
   - Ensure CloudFormation template is valid

2. **Content Not Loading**
   - Check S3 bucket permissions
   - Verify CloudFront distribution status
   - Clear browser cache

3. **Language Switching Issues**
   - Verify translation keys exist
   - Check browser console for JavaScript errors
   - Ensure proper language codes

## Roadmap

### Future Enhancements
- [ ] Audio readings for accessibility
- [ ] Interactive quizzes and assessments
- [ ] Study guides and lesson plans
- [ ] Integration with Catholic education curricula
- [ ] Advanced search functionality
- [ ] User accounts for progress tracking
- [ ] Mobile app development
- [ ] Additional language support
- [ ] Integration with Catholic calendar
- [ ] Prayer reminders and notifications

## Contact

For questions about Catholic doctrine, please consult:
- Your local parish priest
- Official Catholic resources
- The Vatican website: https://www.vatican.va/

For technical issues with this platform:
- Check the troubleshooting section above
- Review AWS documentation
- Consult web development resources

---

*"The task of interpreting the Word of God authentically has been entrusted solely to the Magisterium of the Church, that is, to the Pope and to the bishops in communion with him."* - Catechism of the Catholic Church, 100