# 4-Eyes — AI for Luxury Spa & Wellness

## What this directory is

`site/` is the source for `chatbot.4-eyes.eu`, one of three sites served by the Railway nginx container `nginx-4Eyes`.

## Design language

All styling must follow the shared 4-Eyes outbound design language defined in `../design.md`:

| Token | Hex | Usage |
|---|---|---|
| Deep Ink | `#1B2D4F` | Hero, footer, primary buttons, dark sections |
| Signal Amber | `#E8A020` | CTAs, accent tags, dividers, hover states |
| Slate | `#4A5568` | Secondary text, subtle borders |
| Mist | `#F4F6F9` | Alternating section backgrounds |
| Paper | `#FFFFFF` | Cards, form surfaces |
| Coral | `#D95F4B` | Errors, urgency markers |

- **Typography:** Inter 400/500/600/700 for all body and headings; JetBrains Mono for data, tags, and counters.
- **Layout:** Left-aligned section headings, dark hero, amber accents, generous whitespace.
- **Tone:** British English, Oxford comma, active voice, conclusions first.

## Files

- `index.html` — single-page marketing site
- `css/styles.css` — design tokens and component styles
- `js/script.js` — mobile nav, scroll animations, counters, modal, chatbot widget, form handling
- `assets/images/` — hero, benefit, and social-share images

## How to change things

### Colors

Update CSS variables in `css/styles.css` at the `:root` block. Do not hardcode hex values elsewhere.

### Content

Edit `index.html` directly. Sections are marked with clear comments.

### Images

See `IMAGE_GUIDE.md` for dimensions, formats, and placement.

### Form webhook

The contact form posts to an n8n webhook URL in `js/script.js`. Update that URL if the webhook endpoint changes.

## Deployment

This site is deployed as part of the multi-site repo:

```bash
cd ..
git add .
git commit -m "refactor(site): update chatbot site"
git push origin main
# Railway auto-deploys
```

## Common mistakes

- Don't use teal/gold/sage colors from earlier versions — the brand palette is Deep Ink + Signal Amber.
- Don't center-align large section headings unless `design.md` explicitly calls for it.
- Don't add new fonts; stick to Inter and JetBrains Mono.
