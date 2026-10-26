# rohportofolio

A dark, hand-built personal portfolio — no frameworks, just HTML, CSS, and JavaScript.

**Live site:** https://rohkerja.github.io/rohportofolio/

## Features

- Dark theme with gradient accents and a subtle glow background
- Fully responsive layout with a mobile menu
- Scroll-reveal animations and a pointer spotlight (disabled for reduced motion)
- Interactive code card in the hero
- Accessible: skip link, semantic markup, focus styles, ARIA labels
- Zero dependencies, zero build step

## Structure

```
.
├── index.html   # Page markup
├── styles.css   # All styling
├── script.js    # Navigation, reveal, scrollspy, tilt
├── .nojekyll    # Tells GitHub Pages to serve files as-is
└── README.md
```

## Run locally

Open `index.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# http://localhost:8000
```

## Customize

- **Name / role:** edit the hero copy in `index.html` (`Roh`, `roh.`, `@rohkerja`).
- **Email:** replace `hello@example.com` in `index.html` (two places).
- **Projects:** replace the placeholder cards in the Work section with real case studies.
- **Skills:** update the lists in the Skills section.
- **Colors:** tweak the CSS variables at the top of `styles.css`.
- **Links:** update the GitHub URLs to your other profiles.

## Deployment

GitHub Pages publishes directly from the `main` branch. Any push to `main`
triggers a new deployment automatically.

---

Built and maintained by [rohkerja](https://github.com/rohkerja).
