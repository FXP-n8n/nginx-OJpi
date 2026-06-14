# 4-Eyes Website Monitoring

Standalone monitoring dashboard for the three public 4-Eyes web properties.

## What it monitors

- HTTP status, response time, and content-length for:
  - `https://www.4-eyes.eu/`
  - `https://www.4-eyes.eu/workshops`
  - `https://www.4-eyes.eu/about`
  - `https://www.4-eyes.eu/resources`
  - `https://www.4-eyes.eu/contact`
  - `https://www.4-eyes.eu/sitemap.xml`
  - `https://chatbot.4-eyes.eu/`
  - `https://dashboard.4-eyes.eu/`
- SEO smoke tests:
  - `robots.txt` present and allows indexing
  - `sitemap.xml` present and parseable
  - Canonical, Open Graph, JSON-LD presence on `www.4-eyes.eu`
  - No old-brand hex literals (`#0075de`, etc.)
  - Charset `UTF-8` header
- Security/performance headers
- SSL/TLS certificate expiry (via `ssl-info`)
- Core Web Vitals Lighthouse field approximation (via optional `lighthouse` run)

## Files

- `index.html` — dark 4-Eyes-branded dashboard UI
- `monitor.js` — browser-side fetch of public endpoints and SEO checks
- `styles.css` — dashboard styling using design.md tokens

## How it runs

Deployed as part of `dashboard.4-eyes.eu` or served standalone. All checks run from the browser against public endpoints, so no server-side proxy is required.

## Configuration

Edit the `ENDPOINTS` array in `monitor.js` to add/remove URLs or expected checks.

## Deployment

This dashboard lives in `C:\Users\AIserver\Documents\GitHub\nginx-OJpi\website-monitor\`. To deploy it, add it to the multi-site repo and expose it under a path or subdomain (recommended: `monitor.4-eyes.eu` or `dashboard.4-eyes.eu/monitor/`).

## Notes

- The dashboard performs CORS-safe checks only (status, headers, body text). Some header values require `mode: no-cors` if the target does not expose `Access-Control-Expose-Headers`.
- SSL expiry check uses a third-party API fallback because browsers cannot read certificate metadata from JavaScript directly.
