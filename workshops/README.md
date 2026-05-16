# 4-Eyes Website — Production Build

Static HTML/CSS website for 4-Eyes, a consultancy providing AI literacy workshops to European lobbying associations.

## Site Structure

```
4eyes-website/
├── index.html          # Homepage
├── workshops.html      # Workshops catalog page
├── about.html          # About page
├── contact.html        # Contact form page
├── resources.html      # Resources/downloads page
├── privacy.html        # Privacy policy (GDPR compliant)
├── imprint.html        # Legal imprint (EU requirement)
├── css/
│   ├── styles.css      # Main stylesheet
│   └── pages.css       # Page-specific styles
├── js/
│   └── main.js         # Mobile menu, smooth scroll
└── images/             # (Add logo and images here)
```

## Design System

- **Font:** Inter (Google Fonts)
- **Colors:**
  - Primary Blue: `#0075de`
  - Background Warm: `#f6f5f4`
  - Text Secondary: `#615d59`
- **Style:** Warm Consultancy — approachable, professional, executive-friendly

## Deployment to Railway with Nginx

### Option 1: Railway Static Site (Recommended — Simplest)

Railway now supports static sites directly without needing Nginx:

1. **Push to GitHub:**
   ```bash
   cd /home/user/4eyes-website
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/4eyes-website.git
   git push -u origin main
   ```

2. **Deploy on Railway:**
   - Go to [railway.app](https://railway.app)
   - Click "New Project" → "Deploy from GitHub repo"
   - Select `4eyes-website`
   - Railway will auto-detect it as a static site
   - Add a custom domain: `4-eyes.eu`

3. **Configure Domain:**
   - In Railway dashboard: Settings → Domains
   - Add `4-eyes.eu` and `www.4-eyes.eu`
   - Update DNS records at your domain registrar:
     ```
     Type: CNAME
     Name: www
     Value: [Railway-provided domain]
     
     Type: A (or CNAME for root)
     Name: @
     Value: [Railway-provided IP or domain]
     ```

### Option 2: Railway with Nginx (If you need custom config)

If you need custom Nginx configuration (redirects, headers, etc.):

1. **Create a Dockerfile:**
   ```dockerfile
   FROM nginx:alpine
   COPY . /usr/share/nginx/html/
   COPY nginx.conf /etc/nginx/nginx.conf
   EXPOSE 80
   CMD ["nginx", "-g", "daemon off;"]
   ```

2. **Add nginx.conf** (see separate file)

3. **Deploy:**
   - Push to GitHub
   - Deploy on Railway from GitHub
   - Railway will build the Docker image

## Form Handling

The contact form uses [Formspree](https://formspree.io) for static site form handling:

1. Go to Formspree and create a free account
2. Create a new form for `contact@4-eyes.eu`
3. Replace `FORM_ID` in `contact.html` and `resources.html` with your actual Formspree form ID
4. Formspree will forward submissions to your Google Workspace email

Alternative: Use a backend service or Google Forms embed if preferred.

## Google Workspace Integration

For contact form submissions to go directly to Google Workspace:

1. **Option A:** Use Formspree (above) and forward to your Gmail
2. **Option B:** Use Google Apps Script with a Web App endpoint
3. **Option C:** Integrate with the `google-workspace` skill for direct Gmail API sending

## Analytics (Privacy-Compliant)

Recommended analytics tools for GDPR compliance:

- **Plausible Analytics** — Privacy-friendly, EU-hosted
- **Fathom Analytics** — GDPR compliant, no cookie banner needed
- **Matomo** — Self-hosted, full control

Add the tracking script to all HTML pages before `</head>`.

## Next Steps

1. **Logo:** Add a text-based wordmark logo to `/images/`
2. **Formspree:** Replace `FORM_ID` placeholders with actual form ID
3. **Domain:** Configure DNS for `4-eyes.eu`
4. **Deploy:** Push to GitHub and deploy on Railway
5. **Test:** Verify all pages, forms, and mobile responsiveness
6. **Launch:** Announce to your network

## License

© 2026 4-Eyes. All rights reserved.
