# 4-Eyes — AI Chatbot for Luxury Spa & Wellness Centers

Part of the multi-site 4-Eyes web presence. This directory serves `chatbot.4-eyes.eu` from the shared Railway nginx container (`nginx-4Eyes`).

## Domain

`chatbot.4-eyes.eu`

## Purpose

Marketing site for the 4-Eyes dual-personality AI chatbot designed for luxury spa and wellness centers.

## Design language

Uses the shared 4-Eyes outbound design language (`../design.md`):

- **Deep Ink** `#1B2D4F` — primary dark
- **Signal Amber** `#E8A020` — accent/CTA
- **Slate** `#4A5568` — secondary text
- **Mist** `#F4F6F9` — light backgrounds
- **Paper** `#FFFFFF` — surface
- **Coral** `#D95F4B` — errors/urgency
- **Typography:** Inter 400/500/600/700 + JetBrains Mono for data and tags

## Project structure

```
site/
├── index.html          # Main landing page (single-page application)
├── css/
│   └── styles.css      # Design-token-driven styles
├── js/
│   └── script.js       # Interactions, chatbot widget, form handling
├── assets/
│   └── images/         # Hero, benefits, social share images
├── package.json        # Dev server config
├── robots.txt          # Search crawler directives
├── sitemap.xml         # Sitemap for SEO
├── README.md           # This file
├── CLAUDE.md           # AI assistant guidance
└── IMAGE_GUIDE.md      # Image placement and optimization guide
```

## Local development

```bash
cd site
npm install
npm start
```

Opens at `http://localhost:8080`.

## Production context

The parent `Dockerfile` copies this directory to `/usr/share/nginx/html` and `nginx.conf` routes `chatbot.4-eyes.eu` to that root. Do not edit files directly on the Railway volume — commit changes here and let Railway redeploy.

## Contact form

Submissions are sent to the n8n webhook configured in `js/script.js`. If the webhook fails, the form falls back to a `mailto:` link.

## Support

- **Email**: francois-xavier.peers@4-eyes.eu
- **Repo**: `github.com/FXP-n8n/nginx-OJpi`
