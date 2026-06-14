# Dashboard Site

Part of the multi-site 4-Eyes web presence. This directory serves `dashboard.4-eyes.eu` from the shared Railway nginx container (`nginx-4Eyes`).

## Domain

`dashboard.4-eyes.eu`

## Purpose

Internal fleet health dashboard and the public ScienceBusiness tracker page.

## Pages

- `index.html` — fleet dashboard (cron job health, agent freshness)
- `sciencebusiness.html` — ScienceBusiness tracker

## Design language

Uses the shared 4-Eyes outbound design language (`../design.md`):

- **Deep Ink** `#1B2D4F` — page background and card backgrounds
- **Signal Amber** `#E8A020` — headings, links, dashboard accents
- **Slate** `#4A5568` — secondary text
- **Mist** `#F4F6F9` — light accents
- **Typography:** Inter 400/500/600/700 + JetBrains Mono for data

## Local development

```bash
cd dashboard
python -m http.server 8082
```

Open `http://localhost:8082`.

## Production context

The parent `Dockerfile` copies this directory to `/usr/share/nginx/dashboard`. `nginx.conf` routes `dashboard.4-eyes.eu` to that root and disables caching.

The `sciencebusiness.html` page is also copied to `/usr/share/nginx/html/sciencebusiness.html` so it can be served from `dashboard.4-eyes.eu/sciencebusiness.html`.

## Data source

The fleet dashboard is updated by cron jobs that write fresh HTML to the Railway volume. The tracked page here is a snapshot; the live version is regenerated automatically.

## Support

- **Repo**: `github.com/FXP-n8n/nginx-OJpi`
