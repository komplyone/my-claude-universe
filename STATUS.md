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
| **Last Session** | 2026-01-29 |

---

## Current State

### Active Focus
```
Project: velador
Component: -
Mode: act
```

### What's Happening
- Velador Tasks page bug fixes completed
- Responsive Kanban board with drag-and-drop

### Recent Progress (This Session - 2026-01-29)

1. **Velador Tasks Drag-and-Drop Fix** ✅
   - Changed columns from `useSortable` to `useDroppable` (proper drop targets)
   - Changed collision detection from `closestCorners` to `pointerWithin`
   - Drag-and-drop now works correctly across all status columns

2. **Velador Tasks Responsive Layout** ✅
   - Replaced flexbox with CSS grid layout
   - Grid: 1 column mobile, 2 columns sm (640px+), 4 columns xl (1280px+)
   - Adjusted min-heights for different viewport sizes
   - Proper breakpoint handling for various screen sizes

3. **Velador NotionEditor Slash Menu Fix** ✅
   - Used `createPortal` to render slash menu to document.body
   - Fixed positioning to use viewport coordinates
   - Slash menu no longer cut off by dialog overflow constraints

4. **Velador Task Modal Improvements** ✅
   - Enlarged edit modal to `max-w-6xl w-[95vw]`
   - Added editable due date field with date picker
   - Priority labels now properly capitalized

### Previous Session (2026-01-28)

1. **Velador Meeting Items CRUD** ✅
   - Added full CRUD operations for agenda, homework, and action items
   - Backend endpoints for create, update, delete on all item types
   - Toggle completion status for all item types

2. **Velador Item Reordering** ✅
   - Added `sort_order` field to homework and action items
   - Implemented up/down arrow buttons with hover visibility

3. **Velador Navigation Guard** ✅
   - Created `NavigationGuardContext` for tracking unsaved changes
   - Show confirmation dialog when navigating with unsaved notes/summary

4. **Velador NotionEditor Enhancements** ✅
   - Implemented custom bubble menu (floating toolbar on text selection)
   - Redesigned slash menu to Notion-style

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

1. **Velador Tasks** (completed this session)
   - [x] Drag-and-drop working across all columns ✅
   - [x] Responsive CSS grid layout ✅
   - [x] NotionEditor slash menu via portal ✅
   - [x] Modal enlarged, due date editable, priority capitalized ✅

2. **Velador Meetings** (completed previously)
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

**Velador Web** (`komplyone-compliance-suite-monorepo/apps/velador-web`):
- `src/pages/TasksPage.tsx` - CSS grid layout, useDroppable, pointerWithin collision, modal sizing, due date, priority capitalization
- `src/components/NotionEditor.tsx` - createPortal for slash menu, fixed positioning

**Velador API** (`komplyone-compliance-suite-monorepo/apps/velador-api`):
- `alembic/versions/20260129_0900-task_enhancements.py` - Migration for task enhancements

---

**Last Updated**: 2026-01-29
**Updated By**: Claude (Velador Tasks bug fixes - DnD, responsive layout, NotionEditor)
