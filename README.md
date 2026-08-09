# My Home Sweet Home — Website

Static, front-end-only website for **My Home Sweet Home Adult Foster Care** (Farmington Hills, MI).

Designed to match the cream / forest-green / soft-gold brochure theme. No backend, no database, no build step — just open the files or drop them on free static hosting.

## What’s included

| Path | Purpose |
|------|---------|
| `index.html` | Full one-page site (welcome, about, services, why us, living, contact) |
| `css/styles.css` | Brochure-inspired styles |
| `js/main.js` | Mobile menu + sticky header (tiny, no dependencies) |
| `assets/images/` | Photos cropped from your brochure + favicon |

## Preview locally

From this folder:

```bash
# Option A — open directly
open index.html

# Option B — simple local server (recommended)
python3 -m http.server 8080
# then visit http://localhost:8080
```

## Free / low-cost hosting (recommended)

Because everything is static HTML/CSS/JS, hosting can be **$0**:

1. **Cloudflare Pages** — free, fast CDN  
2. **Netlify** — free tier, drag-and-drop the `website` folder  
3. **GitHub Pages** — free if you put the repo on GitHub  
4. **Any shared host** — upload the contents of `website/` via FTP

No Node server, PHP, or database required.

### Contact without a backend

Phone and maps links use `tel:` and Google Maps. There is **no contact form** that needs a server — keeps cost and maintenance low. If you later want email submissions, add a free Formspree / Netlify Forms endpoint without building a backend yourself.

## Brand content source

Copy and imagery follow your brochure:

- **Name:** My Home Sweet Home Adult Foster Care  
- **Address:** 24290 Farmington Rd, Farmington Hills, MI 48336  
- **Phone:** 248-860-1402  
- **Values:** Compassion · Dignity · Respect · Family  

## Customizing later

- Edit text directly in `index.html`
- Colors live in CSS variables at the top of `css/styles.css` (`:root`)
- Swap photos in `assets/images/` (keep the same filenames, or update `src` in HTML)
