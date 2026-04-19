# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static portfolio website for a data science / AI-ML engineer. Deployed to GitHub Pages at `amruthpai.github.io`. No backend, no build pipeline, no package.json.

## Development

- **Dev server:** Open in VSCode and use Live Server extension (configured on port 5501 in `.vscode/settings.json`)
- **SCSS compilation:** SCSS sources live in `assets/sass/`, compiled output goes to `assets/css/main.css`. No automated build script exists — compile manually with a SASS CLI tool (e.g., `sass assets/sass/main.scss assets/css/main.css`)

## Architecture

- **`index.html`** — Main single-page portfolio (sections: About, Projects, Experience, Education, Skills)
- **`assets/sass/`** — Modular SCSS: `base/` (reset, typography), `components/` (buttons, spotlights, modals), `layout/` (header, nav, footer), `libs/` (variables, mixins, breakpoints)
- **`assets/js/main.js`** — App logic: modal dialogs for project details, scroll behavior
- **`assets/js/matrix.js`** — Canvas-based matrix rain background animation
- **`assets/js/util.js`** — Utility functions used by main.js
- **Vendor JS** (committed, not via npm): jQuery 3.7.1, ScrollEx, ScrollY, breakpoints, browser detection

## Tech Stack

HTML5, SCSS → CSS, vanilla JS + jQuery 3.7.1, Bootstrap 3.4.1 (CDN), Font Awesome 6 (CDN), Google Fonts (Source Sans Pro).

## Key Patterns

- Project cards use modal popups — each has a click handler in `main.js` toggling visibility
- Responsive breakpoints defined in `assets/sass/libs/_breakpoints.scss` (xxsmall 360px through xlarge 1680px)
- SCSS variables for colors/fonts centralized in `assets/sass/libs/_vars.scss`

## Known Issues

- Typo in `index.html`: `ckass="container"` should be `class="container"`
- Large GIF assets in `assets/css/images/` (some ~100MB) — avoid committing more large binaries
