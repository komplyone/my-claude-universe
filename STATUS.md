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
| **Current Focus** | velador |
| **Mode** | Act |
| **Last Session** | 2026-01-28 |

---

## Current State

### Active Focus
```
Project: velador
Component: -
Mode: act
```

### What's Happening
- Velador Meetings feature enhancements
- Meeting items CRUD, reordering, unsaved changes guard

### Recent Progress (This Session - 2026-01-28)

1. **Velador Meeting Items CRUD** ✅
   - Added full CRUD operations for agenda, homework, and action items
   - Backend endpoints for create, update, delete on all item types
   - Frontend forms and mutation hooks for all operations
   - Toggle completion status for all item types

2. **Velador Item Reordering** ✅
   - Added `sort_order` field to homework and action items (migration)
   - Updated SQLAlchemy models with `order_by` relationships
   - Implemented up/down arrow buttons with hover visibility
   - Sequential sort_order assignment on reorder

3. **Velador Navigation Guard** ✅
   - Created `NavigationGuardContext` for tracking unsaved changes
   - Show confirmation dialog when navigating with unsaved notes/summary
   - Works for sidebar navigation, back link, and browser close
   - Options: Save & Leave, Discard Changes, Cancel

4. **Velador Meeting UX Improvements** ✅
   - Tab persistence (stay on same tab after save)
   - Cancel meeting dialog with confirmation
   - Version indicator in sidebar (v1.0.2) for debugging

### Previous Session (2026-01-28 - Earlier)

1. **Velador NotionEditor Enhancements** ✅
   - Implemented custom bubble menu (floating toolbar on text selection)
   - Added all formatting options to bubble menu
   - Redesigned slash menu to Notion-style

2. **Recoger API Fix** ✅
   - Fixed syntax error in response interceptor

### Previous Session (2026-01-27)

1. **Recoger Onboarding System Frontend (Phase 2)** ✅
   - Created TypeScript types, TanStack Query hooks, Zustand store
   - Created ProgressRing, OnboardingBeacon, OnboardingPanel components
   - Integrated into admin and user dashboard layouts

2. **Recoger Onboarding System Frontend (Phase 3 - partial)** ✅
   - Created step content components (SuccessMessage, InfoCards, etc.)
   - Created StepContent dynamic renderer
   - Created OnboardingErrorBoundary

### Open Threads
- Set up redirect from recoger.app to recoger.co
- Reconnect GitHub to Cloudflare Pages for auto-deploy
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

1. **Velador Meetings** (current)
   - [x] Meeting items CRUD (agenda, homework, action items) ✅
   - [x] Item reordering (up/down arrows) ✅
   - [x] Unsaved changes navigation guard ✅
   - [ ] Meeting templates (optional future enhancement)

2. **Recoger Onboarding Implementation** (paused)
   - [x] Phase 1: Backend foundation ✅
   - [x] Phase 2: Frontend foundation ✅
   - [~] Phase 3: Step content components ✅, animations pending
   - [ ] Phase 4: Accessibility, analytics, nudges
   - **To complete Phase 3**: Run `npm install framer-motion canvas-confetti`

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

**Velador API** (`komplyone-compliance-suite-monorepo/apps/velador-api`):
- `app/api/v1/endpoints/meeting.py` - CRUD endpoints for items
- `app/models/meeting.py` - sort_order field, order_by relationships
- `app/schemas/meeting.py` - sort_order in schemas
- `app/services/meeting_service.py` - CRUD service methods
- `alembic/versions/20260128_2125-...` - sort_order migration

**Velador Web** (`komplyone-compliance-suite-monorepo/apps/velador-web`):
- `src/App.tsx` - NavigationGuardProvider wrapper
- `src/components/AppShell.tsx` - Navigation guard dialog, version indicator
- `src/contexts/NavigationGuardContext.tsx` - New context for unsaved changes
- `src/hooks/useMeetings.ts` - CRUD mutation hooks for items
- `src/lib/api.ts` - API methods for item CRUD
- `src/pages/MeetingDetailPage.tsx` - Full rewrite with items, tabs, reordering
- `src/pages/MeetingsPage.tsx` - Cancel meeting dialog

---

**Last Updated**: 2026-01-28
**Updated By**: Claude (Velador meetings CRUD, reordering, navigation guard)
