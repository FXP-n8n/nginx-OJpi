# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an **NGINX-based static site deployment** project that serves the 4-Eyes website (a luxury spa AI chatbot landing page). The repository uses Docker to containerize NGINX and serve static content from the `site/` directory.

**Deployment Platform:** Configured for Railway with one-click deployment support.

## Repository Structure

```
nginx-OJpi/
├── Dockerfile              # NGINX Alpine container configuration
├── README.md               # Deployment instructions (Railway focus)
├── LICENSE                 # MIT License
└── site/                   # Static website content (served by NGINX)
    ├── index.html          # Single-page application
    ├── css/styles.css      # All styling
    ├── js/script.js        # All interactive features
    ├── assets/             # Images, fonts
    ├── package.json        # Dev server dependencies
    ├── CLAUDE.md           # Website development guide (detailed)
    ├── README.md           # Website user documentation
    └── IMAGE_GUIDE.md      # Image optimization guide
```

## Architecture

**Deployment Model:**
1. Docker builds container using `nginx:alpine` base image
2. Entire `site/` directory is copied to `/usr/share/nginx/html`
3. NGINX serves static content using default configuration
4. Container exposes port 80

**Key Design Decision:** Uses default NGINX configuration for simplicity. Can be overridden by adding `COPY nginx.conf /etc/nginx/nginx.conf` to Dockerfile if custom configuration is needed.

## Development Commands

### Local Development (Without Docker)

```bash
cd site

# Install development dependencies (first time only)
npm install

# Start local development server with live reload
npm start
# Opens at http://localhost:8080 with auto-refresh

# Alternative: Python server
npm run serve
# or: python -m http.server 8080
```

### Docker Development

```bash
# Build Docker image
docker build -t nginx-site .

# Run container locally
docker run -p 8080:80 nginx-site

# Test at http://localhost:8080
```

### Testing Changes

```bash
# Test the site locally first (faster iteration)
cd site && npm start

# When ready, test with Docker
docker build -t nginx-site . && docker run -p 8080:80 nginx-site
```

## Deployment

### Railway Deployment (Primary Method)

This project is configured for Railway deployment:

1. **One-click deploy:** Use the Railway button in README.md
2. **Or connect Git repo:**
   - Railway auto-detects Dockerfile
   - Automatically builds and deploys on push
   - Exposes service on Railway subdomain

**Railway Configuration:**
- Build: Uses Dockerfile automatically
- Port: 80 (NGINX default)
- No environment variables required

### Manual Deployment (Other Platforms)

**Docker-based platforms (Render, Fly.io, etc.):**
```bash
# These platforms detect Dockerfile automatically
# Just connect your Git repository
```

**Traditional hosting:**
```bash
# Upload contents of site/ directory to web server
# No NGINX/Docker needed - just static files
```

## Modifying the Site

**For website content/style changes:** See `site/CLAUDE.md` for comprehensive development guidance covering:
- HTML structure and sections
- CSS architecture and variables
- JavaScript features and patterns
- Common modifications (colors, content, images)
- Contact form configuration
- Performance optimization

**For deployment changes:**
- Modify `Dockerfile` for build configuration
- Update `README.md` for deployment instructions

## Custom NGINX Configuration

If you need custom NGINX settings (custom headers, redirects, caching, etc.):

1. Create `nginx.conf` in repository root
2. Add to Dockerfile before the final line:
   ```dockerfile
   COPY nginx.conf /etc/nginx/nginx.conf
   ```

Example use cases:
- Custom caching headers
- URL redirects/rewrites
- Security headers (CSP, X-Frame-Options)
- Gzip compression settings
- Custom error pages

## Common Workflows

### Adding New Content to Website

1. Edit files in `site/` directory (see `site/CLAUDE.md` for guidance)
2. Test locally: `cd site && npm start`
3. Commit changes
4. Push to trigger automatic Railway deployment

### Changing Docker Base Image

Current: `nginx:alpine` (lightweight, recommended)

Alternatives:
- `nginx:stable-alpine` - More stable, less frequent updates
- `nginx:mainline-alpine` - Latest features
- `nginx:latest` - Full Debian-based (larger)

Update line 1 in `Dockerfile` to change base image.

### Adding Static Assets

1. Add files to `site/assets/` directory
2. Reference in HTML/CSS with relative paths: `assets/images/example.jpg`
3. Docker automatically includes them in build (entire `site/` copied)

## Troubleshooting

### Docker build fails
- Check Dockerfile syntax
- Ensure Docker daemon is running
- Verify all referenced files exist in `site/`

### Site not loading in Docker container
- Verify container is running: `docker ps`
- Check port mapping: `-p HOST_PORT:80`
- Test NGINX logs: `docker logs <container_id>`

### Railway deployment fails
- Check Railway build logs for errors
- Ensure Dockerfile is in repository root
- Verify no syntax errors in Dockerfile

### Changes not appearing after deployment
- Hard refresh browser (Ctrl+Shift+R / Cmd+Shift+R)
- Check if Railway build completed successfully
- Verify correct branch is deployed

## Performance & Security

**Current optimizations:**
- Alpine Linux base (minimal attack surface, small image size)
- Static content only (fast, secure, no server-side processing)
- NGINX default config (battle-tested, performant)

**Recommended additions for production:**
- Add security headers via custom `nginx.conf`
- Enable Gzip compression for text assets
- Add caching headers for static assets
- Consider CDN for global distribution (Cloudflare, etc.)

## Git Workflow

This repository is managed with Git. Current branch: `claude/init-project-011CUdxUGo2DidqDNTmoCknZ`

**Standard workflow:**
```bash
# Make changes to site/ files
git add .
git commit -m "Description of changes"
git push -u origin <branch-name>
```

## Documentation Resources

- **Root README.md:** Deployment instructions and Railway setup
- **site/CLAUDE.md:** Comprehensive website development guide (HTML/CSS/JS)
- **site/README.md:** User-facing website documentation
- **site/IMAGE_GUIDE.md:** Image optimization and placement guide
- **NGINX docs:** https://nginx.org/en/docs/

## Key Concepts

**Why NGINX?**
- Industry-standard web server
- Excellent performance for static content
- Minimal resource usage
- Simple configuration
- Well-supported on all platforms

**Why Alpine Linux?**
- Tiny image size (~5-10MB base)
- Security-focused (minimal packages)
- Fast container startup
- Ideal for static site serving

**Static vs Dynamic:**
This project serves static files only. No server-side processing, databases, or backend APIs. The contact form uses client-side JavaScript to POST to an external n8n webhook (see `site/CLAUDE.md` for details).
