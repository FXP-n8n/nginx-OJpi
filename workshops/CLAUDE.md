# 4-Eyes Workshops — CLAUDE.md

## What this directory is

`workshops/` is the source for `www.4-eyes.eu`, one of three sites served by the Railway nginx container `nginx-4Eyes`.

## Design language

All styling must follow the shared 4-Eyes outbound design language defined in `../design.md`:

| Token | Hex | Usage |
|---|---|---|
| Deep Ink | `#1B2D4F` | Hero, footer, primary buttons, dark sections |
| Signal Amber | `#E8A020` | CTAs, accent tags, dividers, hover states, workshop numbers |
| Slate | `#4A5568` | Secondary text, subtle borders |
| Mist | `#F4F6F9` | Alternating section backgrounds |
| Paper | `#FFFFFF` | Cards, form surfaces |
| Coral | `#D95F4B` | Errors, urgency markers |

- **Typography:** Inter 400/500/600/700 for all text; JetBrains Mono for data and tags.
- **Layout:** Left-aligned section headings, dark hero with amber accents, generous whitespace.
- **Tone:** British English, Oxford comma, active voice, conclusions first.

## Files

- `index.html` — homepage
- `workshops.html` — catalog page
- `about.html`, `contact.html`, `resources.html`, `privacy.html`, `imprint.html`, `thank-you.html` — supporting pages
- `css/styles.css` — shared design tokens and layout
- `css/pages.css` — page-specific overrides
- `js/main.js` — mobile nav, active link highlighting, counters, form helpers
- `nginx.conf` — local nginx config reference (not used in production; root `nginx.conf` is)

## How to change things

### Shared styles

Edit `css/styles.css`. All pages share the same `:root` variables.

### Page-specific styles

Add overrides in `css/pages.css`. Keep page-specific CSS scoped to a class on `<body>`.

### Navigation

The shared nav is repeated in each HTML file. Update all pages if you add/remove a link. `js/main.js` highlights the active page based on `window.location.pathname`.

### Forms

- `/api/contact` — workshop booking/inquiry
- `/api/guide` — AI Adoption Guide download

These endpoints are handled by n8n/Railway in production. They will 404 when testing locally unless you mock them.

## Deployment

This site is deployed as part of the multi-site repo:

```bash
cd ..
git add .
git commit -m "refactor(workshops): update workshops site"
git push origin main
# Railway auto-deploys
```

## Common mistakes

- Don't hardcode hex colors in HTML/JS — use the CSS variables.
- Don't forget to update the nav in all 8 HTML files when adding a page.
- Don't test form endpoints locally without an n8n mock — they will 404.
