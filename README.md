# nginx-OJpi

Multi-site 4-Eyes web presence served from a single nginx Docker container on Railway.

## Sites

| Domain | Local directory | Purpose | Audience |
|---|---|---|---|
| `chatbot.4-eyes.eu` | `site/` | AI receptionist landing page for luxury spas | Spa/wellness operators |
| `www.4-eyes.eu` | `workshops/` | AI literacy workshops and resources for European lobbying associations | Policy teams, trade associations |
| `dashboard.4-eyes.eu` | `dashboard/` | Internal fleet health dashboard | 4-Eyes operations |

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
```

Then open:
- `http://localhost:8080` for chatbot
- `http://localhost:8081` for workshops
- `http://localhost:8082` for dashboard

## Docker / Railway deploy

The `Dockerfile` copies each site to its nginx document root:

```dockerfile
FROM nginx:alpine
COPY site        /usr/share/nginx/html
COPY workshops   /usr/share/nginx/workshops
COPY dashboard   /usr/share/nginx/dashboard
COPY nginx.conf  /etc/nginx/nginx.conf
```

`nginx.conf` routes by `server_name` to the correct root. Deploy via GitHub → Railway.

## Important: source of truth

This repo is now the source of truth for the three sites above. Previously, the workshops and dashboard files existed only on the Railway volume. Do not edit files directly on the volume without committing them back here, or the changes will be overwritten on the next deploy.

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
│   ├── css/
│   └── js/
├── dashboard/        # dashboard.4-eyes.eu
│   ├── index.html
│   └── sciencebusiness.html
├── nginx.conf        # Multi-site nginx routing
├── Dockerfile
└── design.md         # 4-Eyes outbound design language
```
