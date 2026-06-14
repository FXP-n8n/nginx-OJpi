# Workshops Site

Part of the multi-site 4-Eyes web presence. This directory serves `www.4-eyes.eu` from the shared Railway nginx container (`nginx-4Eyes`).

## Domain

`www.4-eyes.eu`

## Purpose

AI literacy workshops, resources, and consulting for European lobbying associations, trade associations, and policy teams in Brussels.

## Design language

Uses the shared 4-Eyes outbound design language (`../design.md`):

- **Deep Ink** `#1B2D4F` — primary dark (hero, footer, primary buttons)
- **Signal Amber** `#E8A020` — accent/CTA (buttons, numbers, underlines, hover states)
- **Slate** `#4A5568` — secondary text
- **Mist** `#F4F6F9` — alternating section backgrounds
- **Paper** `#FFFFFF` — cards and surfaces
- **Coral** `#D95F4B` — errors and urgency
- **Typography:** Inter 400/500/600/700 + JetBrains Mono for data/tags

## Project structure

```
workshops/
├── index.html          # Homepage
├── workshops.html      # Full workshop catalog
├── about.html          # About 4-Eyes
├── contact.html        # Contact / booking form
├── resources.html      # Resources and downloads
├── privacy.html        # Privacy policy
├── imprint.html        # Legal imprint
├── thank-you.html      # Post-form confirmation
├── css/
│   ├── styles.css      # Shared design tokens + layout
│   └── pages.css       # Page-specific styles
├── js/
│   └── main.js         # Mobile nav, active links, counters, form helpers
├── nginx.conf          # Local nginx routing reference
├── robots.txt          # Search crawler directives
└── README.md           # This file
```

## Local development

```bash
cd workshops
python -m http.server 8081
```

Open `http://localhost:8081`.

## Production context

The parent `Dockerfile` copies this directory to `/usr/share/nginx/workshops`. `nginx.conf` routes `www.4-eyes.eu` to that root, with `try_files` for clean `.html`-less URLs.

## Forms and backend

- `/api/contact` — workshop inquiry/booking form (handled by n8n/Railway in production)
- `/api/guide` — AI Adoption Guide download request

These endpoints are not implemented by this static site; they rely on the Railway/n8n stack.

## Support

- **Email**: francois-xavier.peers@4-eyes.eu
- **Repo**: `github.com/FXP-n8n/nginx-OJpi`
