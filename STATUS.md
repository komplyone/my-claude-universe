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
| **Last Session** | 2026-01-23 |

---

## Current State

### Active Focus
```
Project: komplyone-web
Component: komplyone-web
Mode: act
```

### What's Happening
- KomplyOne web deployed to Cloudflare Pages at komply.one
- Created OG images for all product sites
- Contact form API converted to Astro API route

### Recent Progress (This Session - 2026-01-23)

1. **OG Images Created** ✅
   - **Velador**: Shield with checkmark logo, "GRC reimagined."
   - **KomplyOne**: K logo on light stone background, "Compliance for companies going places."
   - **Aimigas**: Amber ampersand, "Your partner in everything."
   - **KomplyOne Studios**: Gradient &K logo with Syne font, "Build trust beautifully."

2. **Contact Form Fix** ✅
   - Converted from Cloudflare Pages Function (`functions/api/contact.js`) to Astro API route (`src/pages/api/contact.ts`)
   - Fixed deployment issue where functions weren't being included
   - Deployed via Wrangler CLI

3. **Swedish Copy Update** ✅
   - Changed CTA: "Redo att göra compliance på ett nytt sätt?" → "Redo för compliance på ett nytt och smartare sätt?"

4. **Earlier: KomplyOne Web** ✅
   - Deployed to Cloudflare Pages at `https://komply.one`
   - Set Mailjet secrets (MAILJET_API_KEY, MAILJET_SECRET_KEY)
   - Updated CORS_ORIGIN to komply.one

5. **Earlier: Version Bumps & URL Updates** ✅
   - **Recoger**: 1.0.7 -> 1.0.8 (pushed)
   - **Velador**: 0.0.1 -> 0.1.0 (updated velador.app -> velador.co, pushed)
   - **KomplyOne Studios**: 1.0.0 -> 1.0.1 (pushed)
   - **Aimigas**: 1.0.0 -> 1.0.1 (pushed)

### Open Threads
- Set up redirect from recoger.app to recoger.co
- Reconnect GitHub to Cloudflare Pages for auto-deploy

---

## Today's Context

### Pending Decisions
_None_

### Waiting On
- User action: Reconnect GitHub to Cloudflare Pages for komplyone-web
- User action: Set up Redirect Rules in recoger.app DNS zone

### Blockers
- Cloudflare Pages GitHub connection lost (workaround: deploy via Wrangler CLI)

---

## Projects Overview

| Project | Status | Priority | Description |
|---------|--------|----------|-------------|
| **komplyone-web** | deployed | primary | Corporate website at komply.one |
| **aimigas** | deployed | secondary | Human-AI collaboration (website live) |
| **komplyone-studios** | deployed | secondary | Product studio website |
| **velador** | deployed | secondary | GRC platform (website live) |
| **recoger** | deployed | secondary | Endpoint compliance platform |

---

## Next Steps

1. **Reconnect Cloudflare Pages** (recommended)
   - [ ] Go to Cloudflare Dashboard → Workers & Pages → komplyone-web
   - [ ] Settings → Builds & deployments → Connect to Git
   - [ ] Re-authorize GitHub and select komplyone/komplyone-web

2. **Recoger Domain Redirect** (pending)
   - [ ] Remove custom domains from `recoger-website` Pages project
   - [ ] Configure Redirect Rules: recoger.app -> recoger.co

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

**OG Images** (all pushed):
- `velador-website/public/og-image.svg`, `og-image.png`
- `komplyone-web/public/og-image.svg`, `og-image.png`
- `aimigas-website/public/og-image.svg`, `og-image.png`
- `komplyone-studios-website/public/og-image.svg`, `og-image.png`
- `komplyone-studios-website/public/fonts/Syne-Regular.ttf`

**KomplyOne Web** (`komplyone-web`):
- `src/pages/api/contact.ts` - New Astro API route for contact form
- `astro.config.mjs` - Added platformProxy for Cloudflare
- `src/pages/sv/index.astro` - Updated Swedish CTA text

---

**Last Updated**: 2026-01-23
**Updated By**: Claude (OG images, contact form API fix, Swedish copy)
