# 4-Eyes - AI Chatbot for Luxury Spa & Wellness Centers

A professional, production-ready static website showcasing 4-Eyes' dual-personality AI chatbot solution for luxury spa and wellness centers.

## Overview

4-Eyes provides an intelligent chatbot with two distinct operational modes:
1. **Pre-Sales Q&A Personality**: Answers questions about spa services, treatments, and packages
2. **Post-Sales Operational Officer**: Handles booking modifications, status updates, and operational queries

This website is designed to attract and convert luxury spa decision-makers with a sophisticated, professional aesthetic.

## Project Structure

```
my-first-claude-project/
├── index.html              # Main HTML file (single-page application)
├── css/
│   └── styles.css          # Professional luxury spa styling
├── js/
│   └── script.js           # Interactive features and form handling
├── assets/
│   ├── images/             # Image files (add your images here)
│   └── fonts/              # Custom fonts (if needed)
├── package.json            # Project configuration
├── .gitignore              # Git ignore rules
├── README.md               # This file
├── CLAUDE.md               # AI assistant guidance
└── IMAGE_GUIDE.md          # Image placement and optimization guide
```

## Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Smooth Animations**: Professional transitions and scroll effects
- **Interactive Navigation**: Sticky navbar with smooth scrolling
- **Working Contact Form**: Sends submissions to n8n webhook for automated processing
- **SEO Optimized**: Proper meta tags, semantic HTML, fast loading
- **Accessibility**: ARIA labels, keyboard navigation, reduced motion support
- **Performance**: Lazy loading, throttled scroll events, optimized animations

## Getting Started

### Option 1: Using Node.js & Live Server (Recommended)

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm start
   ```

3. **Open in browser**:
   - Automatically opens at http://localhost:8080
   - Live reload enabled - changes appear instantly

### Option 2: Using Python

If you have Python installed:

```bash
# Python 3
npm run serve
# or
python -m http.server 8080
```

Then open http://localhost:8080 in your browser.

### Option 3: Direct File Opening

Simply open `index.html` in your web browser. Note: Contact form mailto functionality works best on a server.

## Deployment

### Deploy to GitHub Pages

1. **Initialize Git** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: 4-Eyes website"
   ```

2. **Create GitHub repository** and push:
   ```bash
   git remote add origin <your-repo-url>
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: Deploy from branch `main`
   - Folder: `/` (root)
   - Save and wait 1-2 minutes

4. **Your site will be live at**:
   `https://<username>.github.io/<repository-name>/`

### Deploy to Netlify

1. **Via Netlify Drop**:
   - Drag and drop your project folder to https://app.netlify.com/drop
   - Instant deployment!

2. **Via Git**:
   ```bash
   # Install Netlify CLI
   npm install -g netlify-cli

   # Deploy
   netlify deploy --prod
   ```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### Deploy to Any Web Host

Upload these files via FTP/SFTP to your web server:
- `index.html`
- `css/` folder
- `js/` folder
- `assets/` folder

## Customization

### Update Contact Email

**Current email**: francois-xavier.peers@4-eyes.eu

To update:
1. Search and replace in `index.html` (lines 394, 478)
2. Update in `js/script.js` (line 176 - error message fallback)

### Contact Form Configuration

The contact form is **already configured** to send submissions to an n8n webhook:

**Webhook URL:**
```
https://www.n8n.4-eyes.eu/webhook/97e2b3b9-e0e4-4104-b5c7-e1689e40fb0f
```

**Form Data Sent:**
All form fields are sent as JSON: name, business, email, phone, and message.

**To change the webhook:**
Edit the URL in `js/script.js` at line 159.

**Alternative form services:**
- FormSpree: https://formspree.io
- Getform: https://getform.io
- FormSubmit: https://formsubmit.co

### Add Images

See `IMAGE_GUIDE.md` for detailed instructions on:
- Hero background image
- Benefit section visuals
- Favicon and logo
- Image optimization tips
- Recommended sources

### Modify Colors

Update CSS variables in `css/styles.css` (lines 9-23):

```css
:root {
    --color-primary: #2C5F5D;     /* Your brand color */
    --color-secondary: #C9A468;   /* Accent color */
    /* ... other colors ... */
}
```

### Update Content

All content is in `index.html`. Sections are clearly labeled:
- Hero (line 39)
- Problem/Solution (line 76)
- Product (line 111)
- Features (line 171)
- Benefits (line 219)
- How It Works (line 299)
- Pricing (line 347)
- Contact (line 377)

## SEO Optimization

### Update Meta Tags

In `index.html` (lines 6-7):
```html
<meta name="description" content="Your description here">
<meta name="keywords" content="your, keywords, here">
```

### Add Google Analytics

Add before closing `</head>` tag:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

Current optimizations:
- Minified and optimized CSS
- Throttled scroll events
- Lazy loading animations
- Reduced motion support
- Fast Google Fonts loading

For further optimization:
- Minify JavaScript: `npm install -g terser` → `terser js/script.js -o js/script.min.js`
- Compress images: Use TinyPNG or ImageOptim
- Enable Gzip on your web server

## Accessibility

- ARIA labels on interactive elements
- Keyboard navigation support
- Focus indicators
- Semantic HTML
- Color contrast meets WCAG AA standards
- Reduced motion preference support

## Tech Stack

- **HTML5**: Semantic, accessible markup
- **CSS3**: Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript**: No frameworks, modern ES6+
- **Google Fonts**: Cormorant Garamond (serif) + Inter (sans-serif)

## Support & Contact

For questions or consultation requests:
- **Email**: francois-xavier.peers@4-eyes.eu
- **Website**: [Your deployed URL]

## License

MIT

---

Built with attention to luxury spa aesthetics and modern web standards.
