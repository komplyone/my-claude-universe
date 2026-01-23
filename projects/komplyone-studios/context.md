# KomplyOne Studios — Project Context

> Build trust beautifully.

---

## Overview

KomplyOne Studios is the product studio arm of KomplyOne, showcasing all products under the shared philosophy of making technology that feels human.

**Site**: https://studios.komplyone.com
**Source**: `/Users/micke/Documents/rnd/komplyone/komplyone-studios-website/`

---

## Philosophy

> Products that feel human. AI that collaborates. Tools that just work.
> Crafted for humans and machines alike.

---

## Products

### Recoger
- **Meaning**: "to collect" (Spanish)
- **Color**: Orange (#FF6B35)
- **Focus**: Endpoint security that doesn't treat people like problems
- **Status**: Coming Soon
- **Site**: https://recoger.co

### Velador
- **Meaning**: "the guardian" (Spanish)
- **Color**: Pink (#FF1B6B)
- **Focus**: GRC reimagined - compliance done right
- **Status**: In Development
- **Site**: https://velador.co

### Aimigas
- **Meaning**: "friends" (Spanish, AI + amigas)
- **Color**: Purple (#A855F7)
- **Focus**: Exploring human-AI collaboration
- **Status**: Experimental
- **Site**: https://aimigas.app

---

## Tech Stack

| Component | Technology |
|-----------|------------|
| Framework | Astro 5.x |
| UI | React 19 |
| Styling | Tailwind CSS 3.x |
| Fonts | Syne, Instrument Serif |
| Hosting | Cloudflare Pages (planned) |

---

## Design System

### Colors

| Name | Hex | Usage |
|------|-----|-------|
| Studio Dark | #060606 | Dark theme background |
| Studio Light | #FAFAFA | Light theme background |
| Accent Orange | #FF6B35 | Recoger brand |
| Accent Pink | #FF1B6B | Velador brand |
| Accent Purple | #A855F7 | Aimigas brand |

### Typography
- **Syne**: Bold, modern sans-serif for headings
- **Instrument Serif**: Elegant italic for accents

### Animations
- Morphing gradient blobs
- Fade-up entrance animations
- Gradient text flow
- Parallax product cards

---

## Project Structure

```
komplyone-studios-website/
├── src/
│   ├── components/
│   │   └── KomplyOneStudios.tsx   # Main React component
│   ├── layouts/
│   │   └── BaseLayout.astro       # HTML wrapper
│   ├── pages/
│   │   └── index.astro            # Home page
│   └── styles/
│       └── global.css             # Animations & utilities
├── public/
│   └── favicon.svg
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

---

## Commands

```bash
cd /Users/micke/Documents/rnd/komplyone/komplyone-studios-website

npm run dev      # Start dev server (localhost:4321)
npm run build    # Build for production
npm run preview  # Preview production build
```

---

## Deployment

- **Target**: Cloudflare Pages
- **Domain**: studios.komplyone.com
- **Status**: Pending deployment

---

*Last Updated: January 2026*
