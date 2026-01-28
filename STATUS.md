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
- Velador NotionEditor improvements (bubble menu, slash menu)
- Recoger onboarding system (Phase 1, 2 & 3 partial complete)

### Recent Progress (This Session - 2026-01-28)

1. **Velador NotionEditor Enhancements** ✅
   - Implemented custom bubble menu (floating toolbar on text selection)
   - Added all formatting options to bubble menu: Bold, Italic, Underline, Strikethrough, Code, Highlight, Text, H1-H3, Lists, Quote, Code Block
   - Redesigned slash menu to Notion-style (compact with icon + label, all items visible)
   - Used custom implementation (TipTap v3.x doesn't export BubbleMenu)

2. **Recoger API Fix** ✅
   - Fixed syntax error in `apps/recoger-web/src/lib/api.ts`
   - Issue: Response interceptor was missing its wrapper function
   - Fix: Added `api.interceptors.response.use()` wrapper

### Previous Session (2026-01-27)

1. **Recoger Onboarding System Frontend (Phase 2)** ✅
   - Created TypeScript types (types/index.ts)
   - Created TanStack Query API hooks (api/index.ts)
   - Created Zustand store for UI state (stores/onboarding-store.ts)
   - Created ProgressRing component (circular progress indicator)
   - Created OnboardingBeacon component (nav bar trigger)
   - Created OnboardingPanel component (slide-out panel)
   - Created PanelHeader, PanelFooter components
   - Created Section, SectionList, StepItem components
   - Integrated beacon into admin and user dashboard headers
   - Integrated panel into admin and user dashboard layouts

2. **Recoger Onboarding System Frontend (Phase 3 - partial)** ✅
   - Created step content components:
     - SuccessMessage, InfoCards, GuideWithLink
     - WaitingState, ExpandableList, TabbedInstructions
     - ComplianceStatusCard
   - Created StepContent dynamic renderer
   - Created OnboardingErrorBoundary
   - Wrapped panel content with error boundary

### Previous Session (2026-01-26)

1. **Onboarding System Backend (Phase 1)** ✅
   - Created database migrations (000011, 000012)
   - Created domain layer: entity.go, repository.go, service.go
   - Added onboarding fields to Tenant entity
   - Implemented repository with sqlc queries
   - Created DTOs and HTTP handler
   - Registered routes: GET /onboarding, POST /onboarding/dismiss, POST /onboarding/events
   - Wired up service in app initialization

### Previous Session (2026-01-25)

1. **Selma:in Model Override** ✅
   - Fixed: generation now uses Selma:in's configured LLM model
   - Added `model_override` parameter through full stack
   - Frontend passes `llmModel` from op settings

2. **Generation Instructions Persistence** ✅
   - Fixed: `generation_instructions` now saved to database
   - Added missing field to `update_article` SQL query

3. **AI Response Parsing** ✅
   - Improved JSON extraction from AI responses
   - Handles markdown code blocks (```json ... ```)
   - Better fallback for non-JSON responses

4. **Debug Logging** ✅
   - Added comprehensive logging for generation troubleshooting
   - Logs model selection, API key resolution, response handling

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

1. **Recoger Onboarding Implementation** (active)
   - [x] Phase 1: Backend foundation (models, service, endpoints) ✅
   - [x] Phase 2: Frontend foundation (store, beacon, panel, Journey 1) ✅
   - [~] Phase 3: Step content components ✅, animations pending (need npm install)
   - [ ] Phase 4: Accessibility, analytics, nudges
   - See: `komplyone-universe/projects/recoger/components/onboarding-implementation-plan.md`
   - **To complete Phase 3**: Run `npm install framer-motion canvas-confetti`

2. **Recoger Domain Redirect** (pending)
   - [ ] Remove custom domains from `recoger-website` Pages project
   - [ ] Configure Redirect Rules: recoger.app -> recoger.co

3. **Reconnect Cloudflare Pages** (recommended)
   - [ ] Go to Cloudflare Dashboard → Workers & Pages → komplyone-web
   - [ ] Settings → Builds & deployments → Connect to Git
   - [ ] Re-authorize GitHub and select komplyone/komplyone-web

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
- `src/components/NotionEditor.tsx` - Complete rewrite with custom bubble menu and compact slash menu

**Recoger Web** (`komplyone-compliance-suite-monorepo/apps/recoger-web`):
- `src/lib/api.ts` - Fixed missing response interceptor wrapper

*Phase 2 - Core components:*
- `src/features/onboarding/types/index.ts` - TypeScript types
- `src/features/onboarding/api/index.ts` - TanStack Query hooks
- `src/features/onboarding/stores/onboarding-store.ts` - Zustand store
- `src/features/onboarding/components/progress-ring.tsx` - Progress ring SVG
- `src/features/onboarding/components/onboarding-beacon.tsx` - Nav bar trigger
- `src/features/onboarding/components/onboarding-panel.tsx` - Slide-out panel
- `src/features/onboarding/components/panel-header.tsx` - Panel header
- `src/features/onboarding/components/panel-footer.tsx` - Panel footer
- `src/features/onboarding/components/section.tsx` - Collapsible section
- `src/features/onboarding/components/section-list.tsx` - Section container
- `src/features/onboarding/components/step-item.tsx` - Step item
- `src/features/onboarding/components/index.ts` - Component exports
- `src/features/onboarding/index.ts` - Feature exports
- `src/features/admin/components/header.tsx` - Added OnboardingBeacon
- `src/features/admin/components/dashboard-layout.tsx` - Added OnboardingPanel
- `src/features/user/components/user-dashboard-layout.tsx` - Added beacon + panel

*Phase 3 - Step content components:*
- `src/features/onboarding/components/steps/success-message.tsx`
- `src/features/onboarding/components/steps/info-cards.tsx`
- `src/features/onboarding/components/steps/guide-with-link.tsx`
- `src/features/onboarding/components/steps/waiting-state.tsx`
- `src/features/onboarding/components/steps/expandable-list.tsx`
- `src/features/onboarding/components/steps/tabbed-instructions.tsx`
- `src/features/onboarding/components/steps/compliance-status-card.tsx`
- `src/features/onboarding/components/steps/index.ts`
- `src/features/onboarding/components/step-content.tsx` - Dynamic renderer
- `src/features/onboarding/components/onboarding-error-boundary.tsx`

---

**Last Updated**: 2026-01-28
**Updated By**: Claude (Velador NotionEditor enhancements, Recoger API fix)
