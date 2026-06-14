# nginx-OJpi

Multi-site 4-Eyes web presence served from a single nginx Docker container on Railway.

## Sites

| Domain | Local directory | Purpose | Audience |
|---|---|---|---|
| `chatbot.4-eyes.eu` | `site/` | AI receptionist landing page for luxury spas | Spa/wellness operators |
| `www.4-eyes.eu` | `workshops/` | AI literacy workshops and resources for European lobbying associations | Policy teams, trade associations |
| `dashboard.4-eyes.eu` | `dashboard/` + `website-monitor/` | Internal fleet health dashboard, website monitor, and GA4 analytics dashboard | 4-Eyes operations |

The `website-monitor/` directory is served under both `dashboard.4-eyes.eu/monitor/` and `dashboard.4-eyes.eu/analytics/` (via an nginx alias).

## Design language

All three sites share the outbound **4-Eyes design language** defined in `design.md`:

- **Deep Ink** `#1B2D4F` — primary dark color
- **Signal Amber** `#E8A020` — accent/CTA
- **Slate** `#4A5568` — secondary text
- **Mist** `#F4F6F9` — light backgrounds
- **Paper** `#FFFFFF` — surface
- **Coral** `#D95F4B` — errors/urgency
- **Typography:** Inter 400/500/600/700 + JetBrains Mono for data/tags

## Local development

Each site is plain static HTML/CSS/JS. From the repo root:

```bash
cd site        # chatbot.4-eyes.eu
npm install
npm start

# In separate terminals:
cd workshops && python -m http.server 8081
cd dashboard && python -m http.server 8082
cd website-monitor && python -m http.server 8083
```

Then open:
- `http://localhost:8080` for chatbot
- `http://localhost:8081` for workshops
- `http://localhost:8082` for fleet dashboard
- `http://localhost:8083` for website monitor (standalone)

## Docker / Railway deploy

The `Dockerfile` copies each site to its nginx document root:

```dockerfile
FROM nginx:alpine
COPY site        /usr/share/nginx/html
COPY workshops   /usr/share/nginx/workshops
COPY dashboard   /usr/share/nginx/dashboard
COPY website-monitor /usr/share/nginx/dashboard/monitor
COPY nginx.conf  /etc/nginx/nginx.conf
```

`nginx.conf` routes by `server_name` to the correct root and aliases `/monitor/` and `/analytics/` to the `website-monitor/` files. Deploy via GitHub → Railway.

## Important: source of truth

This repo is the source of truth for the three sites above. Previously, the workshops and dashboard files existed only on the Railway volume. Do not edit files directly on the volume without committing them back here, or the changes will be overwritten on the next deploy.

## Repository structure

```
.
├── site/             # chatbot.4-eyes.eu
│   ├── index.html
│   ├── css/
│   ├── js/
│   └── assets/
├── workshops/        # www.4-eyes.eu
│   ├── index.html
│   ├── workshops.html
│   ├── about.html
│   ├── contact.html
│   ├── resources.html
│   ├── privacy.html
│   ├── imprint.html
│   ├── thank-you.html
│   ├── sitemap.xml
│   ├── robots.txt
│   ├── css/
│   └── js/
├── dashboard/        # dashboard.4-eyes.eu root
│   ├── index.html    # Fleet health dashboard
│   └── sciencebusiness.html
├── website-monitor/  # served at dashboard.4-eyes.eu/monitor/ and /analytics/
│   ├── index.html    # Website monitor UI
│   ├── monitor.js    # Browser-side probes
│   ├── styles.css
│   ├── analytics.html  # GA4 / Looker Studio dashboard
│   ├── analytics.css
│   └── analytics.js
├── nginx.conf        # Multi-site nginx routing
├── Dockerfile
└── design.md         # 4-Eyes outbound design language
```

## 2026-06-14 changes

- **Website monitor** (`website-monitor/`): browser-based uptime/SEO checks for public 4-Eyes properties.
- **GA4 analytics dashboard** (`website-monitor/analytics.html`): embedded Looker Studio report for the `4-eyes website` GA4 property.
- **Fleet dashboard** (`dashboard/index.html`): updated with live cron/freshness data and navigation to monitor, analytics, and all public services.
- **CORS headers** added to nginx so `dashboard.4-eyes.eu` can run browser-based monitoring checks against `www.4-eyes.eu` and `chatbot.4-eyes.eu`.
- **Canonical contact/URL updates** across workshops: `francois-xavier.peers@4-eyes.eu` and `https://www.4-eyes.eu`.
- **SEO package** deployed: sitemap, robots.txt, canonical links, Open Graph, Twitter Cards, JSON-LD structured data, security headers, and a `noindex, follow` thank-you page.
