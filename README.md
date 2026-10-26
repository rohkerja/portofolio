# rohportofolio

A minimal, dark personal portfolio page: round profile photo, short intro, and
a simple list of projects. No frameworks, no build step.

**Live site:** https://rohkerja.github.io/rohportofolio/

## Structure

```
.
├── index.html      # Page markup
├── styles.css      # All styling
├── assets/
│   └── avatar.jpg  # Profile photo (square image)
├── .nojekyll       # Lets GitHub Pages serve files as-is
└── README.md
```

## Customize

- **Photo:** replace `assets/avatar.jpg` with your own image. A square photo
  (at least 400×400) works best; it is cropped into a circle.
- **Name / role / bio:** edit the text in `index.html`.
- **Email:** replace `hello@example.com` in `index.html`.
- **Projects:** edit the three rows in the Projects list. For a live project,
  turn the row into an `<a>` link; for upcoming ones, use the "Soon" style.
- **Links:** update the GitHub URLs throughout `index.html`.
- **Colors:** adjust the CSS variables at the top of `styles.css`.

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# http://localhost:8000
```

## Deployment

GitHub Pages publishes directly from the `main` branch — every push triggers a
new deployment automatically.

---

Built and maintained by [rohkerja](https://github.com/rohkerja).
