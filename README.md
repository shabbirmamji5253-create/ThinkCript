# Neon Frame Studio Portfolio

A premium, motion-heavy, dark portfolio website for a marketing and video editing agency. Built with React, Vite, Tailwind CSS, Framer Motion, React Router, and Lucide icons.

## Features

- Fullscreen animated hero with particle motion, glow effects, and founder preview
- Sticky glass navbar with smooth section links
- Editable content in `src/config/content.js`
- Masonry-style work grid with image/video support and modal viewer
- Pricing cards with monthly/per-project toggle
- Animated process timeline
- Separate `/founders` page with alternating founder layouts
- Behind-the-scenes horizontal media gallery with lightbox
- Contact form layout plus WhatsApp, Instagram, and email links
- Lazy-loaded images/videos and responsive mobile-first layouts
- SEO basics in `index.html`

## Run Locally

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite, usually:

```text
http://localhost:5173
```

## Build

```bash
npm run build
npm run preview
```

## Customize Content

Most content lives in:

```text
src/config/content.js
```

Update the arrays for:

- `founders`
- `projects`
- `plans`
- `processSteps`
- `behindScenes`
- `site.socials`

Images and videos can be swapped by replacing the `image`, `media`, or `poster` URLs. Local media can be placed in `src/assets` and imported into the config if preferred.

## Project Structure

```text
src/
  assets/
  components/
  config/
    content.js
  pages/
    Founders.jsx
    Home.jsx
  App.jsx
  main.jsx
  styles.css
```
