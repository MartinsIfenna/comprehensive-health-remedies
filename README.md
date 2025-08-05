# Comprehensive Health & Natural Remedies Website

A modern, responsive website aggregating health information and natural remedies from multiple WordPress health expert sites.

## Overview

This website combines information from three specialized health WordPress sites:
- Nigeria Health Expert (Women's Health)
- Cancer Health Expert (Cancer Treatment)
- Hearty Health Expert (Cardiovascular Health)

## Features

### Health Conditions Covered
- **Women's Health**: Fallopian tube blockage, bacterial vaginosis, infertility
- **Cancer Treatment**: All types of cancer, brain tumors, breast cancer
- **Cardiovascular Health**: Hypertension, heart disease, stroke prevention

### Natural Remedies
- Propolis Lecithin Capsules
- Green Spirulina
- Nouri-pad Anion Sanitary Pantyliner

### Website Features
- Responsive design for all devices
- Smooth scrolling navigation
- Interactive order form with WhatsApp integration
- Customer testimonials
- Detailed condition information
- Modern UI/UX design

## File Structure

```
comprehensive-health-remedies/
├── index.html          # Main website file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## How to Use

1. **Local Development**: Open `index.html` in a web browser
2. **Web Server**: Serve files through any web server (Apache, Nginx, etc.)
3. **WordPress Integration**: Content can be easily migrated to WordPress

## Running the Website

### Option 1: Direct File Access
```bash
open index.html
```

### Option 2: Local Web Server
```bash
# Using Python
python3 -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Then visit http://localhost:8000
```

## Contact Integration

The website includes a contact form that integrates with WhatsApp for order processing. Orders are sent to: +2348079001128

## Customization

### Colors
- Primary Green: #4CAF50
- Dark Green: #2c5530
- Background: #f8f9fa

### Fonts
- Primary: Inter (Google Fonts)
- Icons: Font Awesome 6

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## WordPress Migration

To convert this to a WordPress theme:

1. Split `index.html` into WordPress template files:
   - `header.php`
   - `index.php`
   - `footer.php`
   - `functions.php`

2. Enqueue styles and scripts in `functions.php`
3. Create custom post types for health conditions
4. Set up contact form plugin integration

## License

This project is created for educational and business purposes. All health information is aggregated from the source websites provided by the user.

## Disclaimer

This website provides information about natural health remedies. Always consult with healthcare professionals before starting any treatment regimen.
