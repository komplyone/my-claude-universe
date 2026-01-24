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
| **Last Session** | 2026-01-24 |

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

### Recent Progress (This Session - 2026-01-24)

1. **MCU Command Palette** ✅
   - Added graphical command palette to MCU repo
   - React component + standalone HTML version
   - Updated with current MCU v1 commands

2. **Swedish Copy Update** ✅
   - Changed: "Vi är inte ännu en compliance-fabrik." → "Vi är inte en till compliance-fabrik."

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

**MCU** (`my-claude-universe`):
- `tools/command-palette/CommandPalette.jsx` - React command palette
- `tools/command-palette/index.html` - Standalone HTML version

**KomplyOne Web** (`komplyone-web`):
- `src/pages/sv/index.astro` - Updated Swedish copy

---

**Last Updated**: 2026-01-24
**Updated By**: Claude (command palette, Swedish copy fix)
