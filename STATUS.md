# MCU Status

> **For Claude**: Read this file at the start of every session. It's your bootstrap context (~1100 tokens, budget: 2000).
>
> **MCU** = My Claude Universe - the complete system for AI-human collaboration.
>
> **Error format**: All errors use "Guru Meditation: [description]"

---

## Quick Reference

| Field | Value |
|-------|-------|
| **MCU Version** | v1 |
| **User** | Micke |
| **MCU** | KomplyOne Universe |
| **Current Focus** | komplyone-web |
| **Mode** | Act |
| **Last Session** | 2026-01-20 |

---

## Current State

### Active Focus
```
Project: komplyone-web (Corporate Website)
Component: main
Mode: act
```

### What's Happening
- **Velador Website CREATED** - Complete marketing site with Astro + Tailwind
- Amber/gold theme distinct from Recoger's cyan
- Key message: "GRC reimagined — understand, know and control your own security"

### Recent Progress (This Session - 2026-01-20)

1. **Velador Website** ✅
   - **Tech**: Astro + Tailwind CSS (same stack as Recoger)
   - **Theme**: Amber/gold primary color, shield logo
   - **Pages**: Homepage, Features, Pricing, About, Security, Contact, Early Access
   - **Key Message**: "We don't hide compliance behind 'helpful' integrations"
   - **Differentiators**: Software + implementation support, understanding over automation
   - **Integration**: References Recoger for device compliance evidence
   - **Build**: Successful (7 pages, 788ms)

### Open Threads
- User reviewing website locally (`npm run dev` on port 4321)

---

## Today's Context

### Pending Decisions
_None_

### Waiting On
- User feedback on Velador website design/content

### Blockers
_None_

---

## Projects Overview

| Project | Status | Priority | Description |
|---------|--------|----------|-------------|
| **recoger** | development | primary | Endpoint compliance platform |
| **velador** | development | secondary | GRC platform (website in progress) |
| **aimigas** | development | secondary | Human-AI collaboration research |
| **komplyone-web** | planned | low | Corporate website |
| **komplyone-studios** | concept | low | Experimental projects |

---

## Next Steps

1. **Velador Website** (current)
   - [ ] Review and refine based on user feedback
   - [ ] Deploy to Cloudflare Pages
   - [ ] Set up domain (velador.app)

2. **Recoger** (on hold)
   - [ ] Verify Plan Configuration UI
   - [ ] OpenTelemetry instrumentation
   - [ ] CI/CD pipeline for Go API

---

## Quick Commands

```
/load-status     Load current state
/focus [p] [c]   Switch project/component
/save            Save session progress
/plan            Plan mode (no changes)
/act             Act mode (make changes)
/ask             Ask mode (read-only)
/help            Show all commands
```

---

## Files Modified This Session

**Velador Website** (NEW - `/Users/micke/Documents/rnd/komplyone/velador-website/`):
- `package.json`, `astro.config.mjs`, `tsconfig.json` - Project setup
- `tailwind.config.mjs` - Amber color palette
- `src/styles/global.css` - Global styles
- `src/config.ts` - Site configuration
- `src/layouts/BaseLayout.astro` - Base layout
- `src/components/ShieldLogo.astro` - Shield logo (animated)
- `src/components/Header.astro` - Navigation header
- `src/components/Footer.astro` - Site footer
- `src/components/GRCDashboardMockup.astro` - Dashboard preview
- `src/pages/index.astro` - Homepage
- `src/pages/features.astro` - Features page
- `src/pages/pricing.astro` - Pricing tiers
- `src/pages/about.astro` - About page
- `src/pages/security.astro` - Security page
- `src/pages/contact.astro` - Contact form
- `src/pages/early-access.astro` - Waitlist signup
- `public/favicon.svg` - Shield favicon

**MCU**:
- `projects/velador/project.yaml` - Added website component

---

**Last Updated**: 2026-01-20
**Updated By**: Claude (Velador website creation)
