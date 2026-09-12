# CLAUDE.md — 4-Eyes Multi-Site Web Repository

## What this repo is

This is the single GitHub source of truth for the public websites served by the Railway nginx Docker container `nginx-4Eyes`.

| Domain | Directory | Purpose |
|---|---|---|
| `chatbot.4-eyes.eu` | `site/` | Spa AI receptionist marketing site |
| `www.4-eyes.eu` | `workshops/` | AI literacy workshops for European lobbying associations |
| `dashboard.4-eyes.eu` | `dashboard/` + `website-monitor/` | Internal fleet health dashboard, website monitor, and GA4 analytics dashboard |

The `website-monitor/` directory is mounted at `/usr/share/nginx/dashboard/monitor/` inside the container and exposed under:
- `dashboard.4-eyes.eu/monitor/` — uptime/SEO dashboard
- `dashboard.4-eyes.eu/analytics/` — GA4 / Looker Studio dashboard (via nginx alias)

## How to work here

1. **Design language is canonical.** `design.md` at the repo root defines the palette, typography, tone, and layout rules. All edits across all sites must stay within those tokens.
2. **One change, one deploy.** The `Dockerfile` copies `site/`, `workshops/`, and `dashboard/` into their respective nginx roots. A single Railway deploy updates all three sites.
3. **Don't edit the live volume directly.** The Railway volume `/usr/share/nginx/{html,workshops,dashboard}` is a runtime copy. Edit files here, commit, push, and redeploy. If you must hot-fix on the volume, mirror the change back into this repo immediately.

## Per-site notes

### chatbot.4-eyes.eu (`site/`)

- Entry point: `site/index.html`
- Uses `css/styles.css` and `js/script.js`
- Includes a chatbot widget script
- Hero is full-width dark (Deep Ink) with left-aligned text and Signal Amber tag

### www.4-eyes.eu (`workshops/`)

- Entry point: `workshops/index.html`
- Static multi-page site: index, services, board-advisory, proof, approach, contact, privacy, thank-you, plus `insights/`. Old URLs (`/workshops`, `/about`, `/resources`, `/imprint`) are 301s in `nginx.conf`.
- Uses `assets/styles.css` + `assets/site.js`. There is no build step.
- Assets carry a query-string version (`styles.css?v=N`) and nginx serves them `immutable, max-age=31536000`. **Bump `?v=N` in all 12 pages whenever the CSS changes**, or returning visitors keep the old file for a year.
- `contact.html` posts natively to `https://www.n8n.4-eyes.eu/webhook/website_form`, which replies `303 → https://www.4-eyes.eu/thank-you` (nginx resolves it to `thank-you.html` via `try_files $uri $uri.html`). There is no JS submit handler and none is needed.
- `assets/site.js` wires only the mobile nav toggle and a first-party pageview ping to `.../webhook/website_analytics`.
- The hidden `company` field (`.hp-field`, `aria-hidden="true"`) is the spam honeypot.
- The mobile nav dropdown is `position:absolute` under a sticky 66px header. Keep a `max-height`/`overflow-y` bound on it, otherwise it is unreachable on short (landscape) viewports.
- SEO assets: `sitemap.xml`, `robots.txt`, canonical tags, Open Graph, Twitter Cards
- Canonical contact: `francois-xavier.peers@4-eyes.eu`
- Canonical URL: `https://www.4-eyes.eu`
- No GA4 tag or consent banner is present here: the repositioned site replaced the GA4 build, and analytics is now the first-party ping above.

### dashboard.4-eyes.eu

#### Fleet dashboard (`dashboard/index.html`)

- Lightweight dark dashboard with inline styles
- Reads live data from Hermes cron/freshness state (via `4eyes_dashboard_update.py` on the volume)
- Also serves `sciencebusiness.html` tracker
- No caching headers are set in nginx
- Navigation links open Website monitor, Analytics, Vikunja, Hermes Agent, n8n, Twenty CRM, and the 4-Eyes Web-Sites section

#### Website monitor (`website-monitor/index.html`)

- Browser-based probes of public 4-Eyes properties
- Runs from `monitor.js` against live endpoints
- Requires CORS headers on target domains (configured in `nginx.conf`)
- 250 ms stagger between checks to avoid nginx rate limiting

#### Analytics dashboard (`website-monitor/analytics.html`)

- Embeds a Looker Studio report connected to the GA4 property `4-eyes website`
- Measurement ID: `G-XT17SQ4RRL`
- Iframe loads directly from `analytics.js` with the embed URL
- A fallback link appears if the report is blocked by browser privacy settings

## Common tasks

### Add a new page to `www.4-eyes.eu`

1. Create HTML in `workshops/`, copying an existing page for the head, header and footer
2. Add the link to `#nav-links` and the footer on every page, marking the current page with `class="active"`
3. Add styles to `assets/styles.css` and bump `styles.css?v=N` across all pages
4. Update `sitemap.xml` if relevant

### Update the shared design language

1. Edit `design.md`
2. Map new tokens into each site's CSS variables
3. Rebuild/redeploy

### Test locally

```bash
cd site && npm install && npm start      # chatbot on :8080
cd workshops && python -m http.server 8081   # workshops on :8081
cd dashboard && python -m http.server 8082   # fleet dashboard on :8082
cd website-monitor && python -m http.server 8083   # monitor on :8083
```

Note: `nginx.conf` server_name routing requires port 8080 and matching host headers. For quick visual checks, use the local dev servers above or run the container locally.

## Deployment

```bash
git add .
git commit -m "refactor(sites): apply design.md across site, workshops, dashboard"
git push origin main
# Railway auto-deploys from GitHub
```

## Infrastructure notes

### CORS

The monitor runs in the browser on `dashboard.4-eyes.eu` and fetches `www.4-eyes.eu` and `chatbot.4-eyes.eu`. `nginx.conf` adds these headers:

```nginx
add_header Access-Control-Allow-Origin "https://dashboard.4-eyes.eu" always;
add_header Access-Control-Allow-Methods "GET, HEAD, OPTIONS" always;
add_header Access-Control-Allow-Headers "Origin, Accept, Content-Type" always;
```

They are added at server level and inside `location` blocks that override server-level headers (e.g. `/sitemap.xml`, `/robots.txt`, `.html$`, `/`). `add_header` inside `if` blocks is not used because this nginx version rejects it.

### Rate limiting

`nginx.conf` defines `limit_req_zone $binary_remote_addr zone=general:10m rate=30r/m;`. The monitor staggers checks by 250 ms to stay under this limit.

### 2026-06-14 changes

- Added `website-monitor/` with uptime/SEO dashboard and GA4 analytics page.
- Updated `dashboard/index.html` with fresh fleet data and navigation to all public services.
- Added CORS headers so cross-origin monitoring works.
- Added canonical URL/contact updates, SEO package, and GA4 consent-aware loader across `workshops/`.

## Things that used to be undocumented

- The three-site nginx routing lived only on the Railway volume until 2026-06-14.
- The workshops site was authored directly on the Railway volume and was not under version control.
- The dashboard pages were generated by cron jobs and also lived only on the volume.
- The analytics dashboard and website monitor did not exist before 2026-06-14.

This file exists so future edits don't rediscover those facts the hard way.
