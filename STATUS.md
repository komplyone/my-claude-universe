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
| **Current Focus** | recoger / mobile |
| **Mode** | Act |
| **Last Session** | 2026-01-25 |

---

## Current State

### Active Focus
```
Project: recoger
Component: mobile
Mode: act
```

### What's Happening
- Recoger mobile app Firebase setup completed
- Login and error handling improvements made
- API domain updated to recoger.co

### Recent Progress (This Session - 2026-01-25)

1. **Firebase Project Setup** ✅
   - Created Firebase project `recoger-15dbe`
   - Registered iOS & Android apps
   - APNs key uploaded with DeviceCheck/AppAttest

2. **Login Flow Fixes** ✅
   - Fixed API field: `username` → `email`
   - Login now returns error message directly (not via state)
   - SnackBar displays errors on failed login
   - OAuth errors handled gracefully (no crash)

3. **API Domain Update** ✅
   - Production: `https://api.recoger.co/api/v1`
   - Staging: `https://staging-api.recoger.co/api/v1`

### Open Threads
- Set up redirect from recoger.app to recoger.co
- Reconnect GitHub to Cloudflare Pages for auto-deploy
- Test login when API is back online (currently 521 error)
- Test push notifications on real device

---

## Today's Context

### Pending Decisions
_None_

### Waiting On
- User action: Reconnect GitHub to Cloudflare Pages for komplyone-web
- User action: Set up Redirect Rules in recoger.app DNS zone

### Blockers
- Cloudflare Pages GitHub connection lost (workaround: deploy via Wrangler CLI)
- Recoger API at api.recoger.co returning 521 (server down)

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

1. **Recoger Mobile - Test Login & Push** (blocked by API)
   - [ ] Test login when API is back online
   - [ ] Verify error messages display correctly
   - [ ] Test push notifications on real device

2. **Reconnect Cloudflare Pages** (recommended)
   - [ ] Go to Cloudflare Dashboard → Workers & Pages → komplyone-web
   - [ ] Settings → Builds & deployments → Connect to Git
   - [ ] Re-authorize GitHub and select komplyone/komplyone-web

3. **Recoger Domain Redirect** (pending)
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

**Recoger Mobile** (`komplyone-compliance-suite-monorepo/apps/recoger-mobile`):
- `lib/config/environment.dart` - Updated API URLs to recoger.co
- `lib/core/network/api_client.dart` - Fixed login field: username → email
- `lib/features/auth/presentation/providers/auth_provider.dart` - Login returns error message
- `lib/features/auth/presentation/screens/login_screen.dart` - Shows error via SnackBar
- `lib/features/auth/data/services/oauth_service.dart` - Graceful OAuth error handling

---

**Last Updated**: 2026-01-25
**Updated By**: Claude (Login fixes, API domain update)
