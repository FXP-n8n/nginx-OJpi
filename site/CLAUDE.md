# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a professional static website for **4-Eyes**, a company providing dual-personality AI chatbot solutions for luxury spa and wellness centers. The website is built with vanilla HTML, CSS, and JavaScript (no frameworks) and follows a single-page application design with smooth scrolling navigation.

**Key Product Details:**
- Two operational modes: Pre-sales Q&A Personality and Post-sales Operational Officer
- Target audience: Decision-makers at luxury spa and wellness centers
- Brand positioning: Professional, sophisticated, trustworthy, innovative
- Contact: francois-xavier.peers@4-eyes.eu

## Development Commands

### Running the Website Locally

```bash
# Install dependencies (first time only)
npm install

# Start development server with live reload
npm start
# Opens at http://localhost:8080 with auto-refresh

# Alternative: Python server
npm run serve
# or: python -m http.server 8080
```

### File Structure

```
├── index.html          # Single-page HTML (all content in one file)
├── css/styles.css      # Complete styling with CSS variables
├── js/script.js        # All interactive functionality
├── assets/
│   ├── images/         # Add images here (see IMAGE_GUIDE.md)
│   └── fonts/          # Custom fonts (if needed)
├── package.json        # Node dependencies and scripts
├── README.md           # User-facing documentation
└── IMAGE_GUIDE.md      # Image placement guide
```

## Code Architecture

### HTML Structure (index.html)

The website is a **single-page application** with these sections in order:

1. **Navigation** (line 16): Fixed navbar with smooth scroll links
2. **Hero** (line 39): Full-screen introduction with CTA and stats
3. **Problem/Solution** (line 76): Grid of 4 pain points
4. **Product** (line 111): Dual-personality showcase with divider
5. **Features** (line 171): 6-column grid of capabilities
6. **Benefits** (line 219): 4 alternating text/image layouts
7. **How It Works** (line 299): 4-step implementation process
8. **Pricing** (line 347): Custom pricing card
9. **Contact** (line 377): Two-column layout with form
10. **Footer** (line 450): Brand info and links

**Important HTML Patterns:**

- All sections use `<section>` with `id` attributes for navigation
- Consistent use of `.section-intro`, `.section-label`, `.section-title`
- Semantic HTML throughout (header, nav, main, section, footer)
- Forms use proper labels and required attributes

### CSS Architecture (css/styles.css)

**Organization:**
1. CSS Variables (lines 9-50): Colors, typography, spacing, etc.
2. Reset & Base Styles (lines 52-109)
3. Component Styles (buttons, navigation, forms, etc.)
4. Section-Specific Styles (hero, product, benefits, etc.)
5. Animations (lines 1050-1080)
6. Responsive Media Queries (lines 1082-1214)

**Key CSS Patterns:**

- **CSS Variables** for all colors, spacing, and transitions
  - Primary color: `#2C5F5D` (Deep Teal)
  - Secondary: `#C9A468` (Gold)
  - Accent: `#8B9F8E` (Sage Green)

- **Responsive approach**: Mobile-first with breakpoints at 768px, 1024px
- **Grid layouts**: Used extensively for cards, features, benefits
- **Animations**: Fade-in, slide-up effects using CSS animations and JS intersection observer

**When modifying styles:**
- Always use CSS variables instead of hard-coded values
- Maintain the luxury aesthetic: spacious, elegant, calming
- Test on mobile (< 768px), tablet (768-1024px), desktop (> 1024px)

### JavaScript Architecture (js/script.js)

**Module Pattern:**
- All code runs after DOMContentLoaded
- Individual `init*()` functions for each feature
- Utility functions at bottom (debounce, throttle)

**Core Features:**

1. **Mobile Menu** (line 18): Toggle navigation on mobile
2. **Smooth Scrolling** (line 53): Scroll to sections with offset for navbar
3. **Active Nav Tracking** (line 86): Updates nav links based on scroll position
4. **Navbar Scroll Effect** (line 113): Adds shadow when scrolled
5. **Contact Form** (line 134): Sends submissions to n8n webhook
6. **Scroll Animations** (line 230): Intersection Observer for fade-in effects

**When adding new features:**
- Create a new `init*()` function
- Call it from the DOMContentLoaded listener
- Use event delegation for dynamic elements
- Always check if elements exist before adding listeners

## Common Modifications

### 1. Updating Content

All content is in `index.html`. Use the line numbers in "HTML Structure" above to locate sections.

**To update text:**
- Edit directly in HTML
- Maintain the luxury, professional tone
- Keep benefits focused on ROI and practical value

### 2. Changing Colors

Edit CSS variables in `css/styles.css` (lines 10-23):

```css
:root {
    --color-primary: #2C5F5D;        /* Main brand color */
    --color-primary-light: #3A7B78;  /* Lighter variant */
    --color-primary-dark: #1F4644;   /* Darker variant */
    --color-secondary: #C9A468;      /* Gold accent */
    --color-accent: #8B9F8E;         /* Sage green */
}
```

All colors automatically update throughout the site.

### 3. Adding Images

See `IMAGE_GUIDE.md` for detailed instructions. Quick summary:

**Hero background:**
- Add image to `assets/images/hero-bg.jpg`
- Update CSS line 292 in `css/styles.css`

**Benefit visuals:**
- Replace `.visual-placeholder` divs (lines 238, 255, 272, 289)
- Use `<img>` tags with `loading="lazy"` attribute

### 4. Updating Contact Email

Current: francois-xavier.peers@4-eyes.eu

**Files to update:**
- `index.html`: lines 394, 478
- `js/script.js`: line 176 (error message fallback)

### 5. Contact Form Configuration

The contact form is configured to send data to an **n8n webhook**:

**Current webhook URL:**
```
https://www.n8n.4-eyes.eu/webhook/97e2b3b9-e0e4-4104-b5c7-e1689e40fb0f
```

**Form data sent (JSON):**
```json
{
  "name": "User's Name",
  "business": "Spa/Business Name",
  "email": "user@example.com",
  "phone": "Phone number or 'Not provided'",
  "message": "User's message or 'No message provided'"
}
```

**To change the webhook:**
- Update the URL in `js/script.js` line 159

**Alternative form services:**
- FormSpree: https://formspree.io
- Getform: https://getform.io
- FormSubmit: https://formsubmit.co

### 6. Adding Analytics

Add Google Analytics before `</head>` in `index.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

Event tracking hooks already exist in `js/script.js` (lines 282-297).

## Design Philosophy & Constraints

### Visual Style

**Do:**
- Maintain spacious, clean layouts with generous white space
- Use the established color palette (teal, gold, sage, grays)
- Keep typography hierarchy (Cormorant Garamond for headings, Inter for body)
- Ensure professional, sophisticated aesthetic appropriate for luxury spa industry
- Use smooth, subtle animations (not flashy or distracting)

**Don't:**
- Add bright, loud colors that clash with the spa aesthetic
- Use aggressive animations or rapid transitions
- Clutter the layout with too many elements
- Use casual or unprofessional language

### Content Tone

- Professional yet warm and approachable
- Focus on business value and ROI
- Use luxury spa industry terminology appropriately
- Emphasize trust, innovation, and ease of implementation
- Avoid technical jargon when speaking to spa owners

### Responsive Behavior

- Mobile: Single column, stacked sections, hamburger menu
- Tablet: Some two-column layouts, simplified grids
- Desktop: Full multi-column layouts, all features visible

Test all changes at these breakpoints: 480px, 768px, 1024px, 1920px

## Deployment

### Quick Deploy Options

1. **GitHub Pages**: Free, simple, works with custom domains
   ```bash
   git init
   git add .
   git commit -m "Deploy 4-Eyes website"
   # Push to GitHub and enable Pages in Settings
   ```

2. **Netlify Drop**: Drag & drop folder to https://app.netlify.com/drop

3. **Vercel**: `vercel --prod` (install vercel CLI first)

### Pre-Deployment Checklist

- [ ] Test on mobile, tablet, desktop
- [ ] Verify all links work (especially email links)
- [ ] Check contact form functionality
- [ ] Validate HTML: https://validator.w3.org
- [ ] Test page speed: https://pagespeed.web.dev
- [ ] Compress images (TinyPNG or ImageOptim)
- [ ] Update meta description and title if needed
- [ ] Add favicon if available

## Performance Optimization

Current optimizations:
- CSS variables reduce file size and improve maintainability
- Throttled scroll event listeners (100ms)
- Intersection Observer for scroll animations (lazy loading)
- Reduced motion support for accessibility
- Minimal external dependencies (only Google Fonts)

**When adding features:**
- Use `debounce()` for resize/input events
- Use `throttle()` for scroll events
- Lazy load images with `loading="lazy"`
- Minimize DOM queries - cache selectors when possible

## Troubleshooting

### Mobile menu not working
- Check `js/script.js` initMobileMenu() function (line 18)
- Verify `.mobile-menu-toggle` and `.nav-links` elements exist
- Check responsive CSS at line 1134-1166 in `css/styles.css`

### Smooth scrolling not working
- Ensure sections have `id` attributes matching nav `href` values
- Check navbar height offset calculation (line 72 in `js/script.js`)
- Verify `scroll-behavior: smooth` in CSS (line 62)

### Contact form not submitting
- Default behavior uses `mailto:` - requires email client
- For production, implement FormSubmit as described above
- Check browser console for JavaScript errors

### Animations not appearing
- Verify Intersection Observer support (modern browsers only)
- Check if user has "prefers-reduced-motion" enabled
- Ensure elements have proper classes (`.problem-card`, `.feature-card`, etc.)

## Brand Guidelines

**4-Eyes Brand Identity:**
- Company name: Always "4-Eyes" (with hyphen, capital E)
- Tagline: "AI for Wellness"
- Key message: Dual-personality AI specifically for luxury spas
- Differentiation: Not a generic chatbot, built for wellness industry
- Value props: Save time, enhance guest experience, capture more bookings, 24/7 availability

**Contact Information:**
- Email: francois-xavier.peers@4-eyes.eu
- No phone number or physical address currently listed

## Best Practices for Future Development

1. **Maintain single-page structure**: Keep all content in `index.html` for simplicity
2. **Use semantic HTML**: Continue pattern of proper sectioning and ARIA labels
3. **Test accessibility**: Keyboard navigation, screen readers, color contrast
4. **Optimize images**: Compress before adding, use WebP format when possible
5. **Document changes**: Update this file if architecture changes significantly
6. **Follow existing patterns**: Match current code style and organization

## Additional Resources

- README.md: User-facing documentation and deployment guide
- IMAGE_GUIDE.md: Comprehensive image placement instructions
- package.json: Scripts and dependencies

For questions about the 4-Eyes product or brand, refer to the content in `index.html` which accurately represents their offering.
