# Image Guide for 4-Eyes Website

This guide explains where to add images to enhance the 4-Eyes luxury spa website.

## Image Locations

### 1. Hero Background (`assets/images/hero-bg.jpg`)
- **Purpose**: Main hero section background
- **Recommended**: Luxury spa interior, serene wellness environment, or abstract calming imagery
- **Dimensions**: 1920x1080px (Full HD)
- **Style**: High-quality, professional, calming atmosphere
- **Sources**: Unsplash, Pexels, or professional photography
- **Search terms**: "luxury spa interior", "wellness center", "modern spa lobby"

**To implement**: Update CSS in `css/styles.css` line 292:
```css
background: linear-gradient(135deg, rgba(31, 70, 68, 0.9) 0%, rgba(44, 95, 93, 0.85) 50%, rgba(58, 123, 120, 0.9) 100%),
            url('../assets/images/hero-bg.jpg') center/cover no-repeat;
```

### 2. Benefit Section Images (4 images)

#### `assets/images/conversion-graph.jpg`
- **Location**: Benefits section - "Capture More Bookings"
- **Recommended**: Graph showing upward trend, analytics dashboard, or booking increase visualization
- **Dimensions**: 800x600px
- **Replace**: Line 238 in `index.html`

#### `assets/images/staff-time.jpg`
- **Location**: Benefits section - "Free Your Staff's Time"
- **Recommended**: Spa staff providing treatment, team collaboration, or zen workspace
- **Dimensions**: 800x600px
- **Replace**: Line 255 in `index.html`

#### `assets/images/guest-satisfaction.jpg`
- **Location**: Benefits section - "Enhance Guest Satisfaction"
- **Recommended**: Happy spa guest, 5-star review visual, or peaceful treatment room
- **Dimensions**: 800x600px
- **Replace**: Line 272 in `index.html`

#### `assets/images/analytics-dashboard.jpg`
- **Location**: Benefits section - "Gain Business Intelligence"
- **Recommended**: Modern analytics dashboard, data visualization, or insights graph
- **Dimensions**: 800x600px
- **Replace**: Line 289 in `index.html`

## Optional Enhancements

### Favicon
**Location**: `assets/images/favicon.png`
- **Dimensions**: 32x32px or 512x512px (SVG preferred)
- **Content**: Simple "4-Eyes" logo or stylized eye icon
- **Add to HTML**: `<link rel="icon" type="image/png" href="assets/images/favicon.png">`

### Logo Image (Optional)
If you want to replace text logo with image:
- **Location**: `assets/images/logo.svg` or `logo.png`
- **Dimensions**: Flexible (SVG preferred for scalability)
- **Update**: Lines 18-21 in `index.html`

## Image Optimization Tips

1. **Compress images** before uploading:
   - Use TinyPNG (https://tinypng.com/) or ImageOptim
   - Target file sizes: < 200KB per image

2. **Use WebP format** for better performance:
   - Convert JPG/PNG to WebP
   - Use `<picture>` element for fallbacks

3. **Lazy loading** (already implemented via CSS):
   - Images load as user scrolls
   - Improves initial page load time

4. **Responsive images**:
   - Consider creating multiple sizes (small, medium, large)
   - Use `srcset` attribute for different screen sizes

## Recommended Image Sources

### Free Stock Photos
- **Unsplash**: https://unsplash.com/s/photos/luxury-spa
- **Pexels**: https://www.pexels.com/search/wellness%20spa/
- **Pixabay**: https://pixabay.com/images/search/spa/

### Suggested Search Terms
- "luxury spa interior"
- "wellness center modern"
- "spa treatment room"
- "zen wellness space"
- "analytics dashboard"
- "business intelligence"
- "customer satisfaction"
- "professional spa staff"

### Premium Options (if budget allows)
- **Shutterstock**: High-quality professional photography
- **Adobe Stock**: Premium spa and wellness imagery
- **Getty Images**: Exclusive luxury spa photos

## Color Palette Reference

When selecting images, ensure they complement the website's color scheme:
- **Primary**: Deep Teal (#2C5F5D)
- **Secondary**: Gold (#C9A468)
- **Accent**: Sage Green (#8B9F8E)
- **Neutrals**: Warm grays and whites

Images with natural tones, spa environments, and calming colors work best.

## Implementation Example

Once you have images, update the HTML:

```html
<!-- Before (current) -->
<div class="visual-placeholder">
    <span>📈 Conversion Rate Graph</span>
</div>

<!-- After (with image) -->
<img src="assets/images/conversion-graph.jpg"
     alt="Increased booking conversion rates with 4-Eyes AI chatbot"
     loading="lazy">
```

## Contact

For questions about image selection or implementation, refer to the CLAUDE.md file or contact the development team.
