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
- Aimigas website deployed to Cloudflare Pages
- Debugging waitlist form 500 error (Mailjet sender domain not verified)
- Fixed email input styling for dark mode and browser autofill

### Recent Progress (This Session - 2026-01-23)

1. **Aimigas Website** ✅
   - Updated opening story text
   - Changed footer copyright to KomplyOne Studios
   - Added "No cookies" modal (adapted from Recoger)
   - Implemented theme save with explicit consent (glowing diskette icon + modal)
   - Created waitlist form with Mailjet integration
   - Fixed email input dark mode background
   - Fixed browser autofill styling override
   - Pushed to GitHub (`komplyone/aimigas-website`)
   - Deployed to Cloudflare Pages at `https://aimigas.co`

2. **Issue: Waitlist 500 Error** ⚠️
   - Mailjet API keys are set in Cloudflare
   - Likely cause: `aimigas.co` domain not verified in Mailjet
   - Need to add SPF/DKIM records or verify `noreply@aimigas.co` sender

3. **KomplyOne Studios Website** ✅ (earlier)
   - Created and deployed

### Open Threads
- Verify `aimigas.co` domain in Mailjet for email sending
- Test waitlist form after Mailjet setup

---

## Today's Context

### Pending Decisions
_None_

### Waiting On
- Mailjet domain verification for `aimigas.co`

### Blockers
- Waitlist form returns 500 until Mailjet sender is verified

---

## Projects Overview

| Project | Status | Priority | Description |
|---------|--------|----------|-------------|
| **aimigas** | deployed | primary | Human-AI collaboration (website live, email pending) |
| **komplyone-studios** | deployed | secondary | Product studio website |
| **velador** | deployed | secondary | GRC platform (website live) |
| **recoger** | development | secondary | Endpoint compliance platform |
| **komplyone-web** | active | high | Corporate website |

---

## Next Steps

1. **Aimigas Website** (deployed, email pending)
   - [x] Deploy to Cloudflare Pages
   - [x] Fix email input dark mode styling
   - [x] Fix browser autofill styling
   - [ ] Verify `aimigas.co` in Mailjet (add SPF/DKIM or sender)
   - [ ] Test waitlist form

2. **Velador Website** (deployed)
   - [x] Deploy to Cloudflare Pages
   - [x] Hook up contact form
   - [x] Hook up waitlist form

3. **Recoger CI/CD** (pending)
   - [ ] Create Machine Identity in Infisical
   - [ ] Add secrets to GitHub repository
   - [ ] Test staging deployment

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

**Aimigas Website** (`aimigas-website`):
- `src/pages/index.astro` - Updated story text, footer, theme save, no cookies modal, waitlist form, autofill fix
- `functions/api/waitlist.js` - Cloudflare Pages function for Mailjet email
- `wrangler.toml` - Cloudflare config with production CORS

---

**Last Updated**: 2026-01-23
**Updated By**: Claude (Aimigas website deployment & styling fixes)
