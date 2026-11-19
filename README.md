# Ramm Enterprises Product Website

Static product catalog site (HTML, CSS, JavaScript). No build step. Works on GitHub Pages.

## Files

- `index.html`: page layout (header, hero, products, about, contact)
- `css/style.css`: brand styling (Red #E10600, Navy #002D72, slab serif headings)
- `js/products.js`: **all product data**. Edit this file to add, remove or correct products, specs and images.
- `js/app.js`: filters, search and product detail pop-up
- `images/`: logo and product photos

## Review mode

Open the site with `?review` at the end of the URL (for example `index.html?review`) to see an orange "check" flag on products that need verification, plus the note explaining what to check. Normal visitors do not see these notes.

## Publish on GitHub Pages

1. Create a new repository on GitHub (for example `ramm-enterprises`).
2. Upload everything in this folder (keep the folder structure).
3. Go to **Settings > Pages**, set Source to **Deploy from a branch**, branch **main**, folder **/ (root)**, then Save.
4. The site will be live at `https://<your-username>.github.io/ramm-enterprises/` in a minute or two.

## Preview locally

Double-click `index.html`, or run `python -m http.server` in this folder and open http://localhost:8000.
