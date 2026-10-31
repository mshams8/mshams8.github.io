# Mohamed Shamseldein — personal website

A responsive, dependency-free portfolio for engineering employers and research collaborators. The site is in `dist/`. Both PDF downloads are bundled locally, so the site does not depend on Google Drive or another file host.

## Preview

Open `dist/index.html` directly, or run `python -m http.server 4173 --bind 127.0.0.1 --directory dist` and visit http://127.0.0.1:4173.

## Publish on GitHub Pages

1. Create a public repository named `mshams8.github.io` in the `mshams8` account. Keep the repository empty initially.
2. Upload this project's files, preserving `dist/` and `.github/workflows/pages.yml`, or push this directory using Git. Do not upload `qa/`.
3. In the repository's **Settings → Pages → Build and deployment**, select **GitHub Actions** as the source.
4. In **Actions**, run **Deploy personal website to GitHub Pages** if the initial push has already occurred.
5. After the workflow succeeds, open https://mshams8.github.io/.

The included workflow follows GitHub's static Pages deployment documentation: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages

No package installation or build command is needed. Only `dist/` is deployed. All internal assets use relative paths, so a project repository also works.

## Edit content

- Text, publication links, and download labels: `dist/index.html`.
- Colours, spacing, typography, and responsive layouts: `dist/assets/styles.css`.
- Mobile navigation and active navigation state: `dist/assets/site.js`.
- Replace the PDFs in `dist/downloads/` without changing their names. Update the displayed page counts if necessary.

The website includes a keyboard skip link, visible focus indicators, semantic landmarks, a mobile menu with Escape support, reduced-motion support, and a no-JavaScript navigation fallback. No analytics, external fonts, cookies, or tracking libraries are included.

## Content provenance

Website copy is adapted from the CV-derived draft approved in the conversation. Download files are unchanged copies of the two-page industry résumé (BBA_3249_20261029) and seven-page academic CV (AUS_20261024_Research_Themes_Final). The academic PDF's opening research summary differs slightly from the plain-text CV used for the earlier draft; the four research areas on the website are supported by both. Publication status and appointment descriptions follow the supplied CVs as of October 2026; they were not independently re-audited for this website build.

PDFs retain the contact details present in the supplied originals. This package contains no application cover letters or references' contact details.
