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
| **Current Focus** | recoger |
| **Mode** | Act |
| **Last Session** | 2026-02-03 |

---

## Current State

### Active Focus
```
Project: recoger
Component: desktop
Mode: act
```

### What's Happening
- Security hardening Phase 1 complete
- Error events to UI implemented
- Pre-audit report analyzed, Phase 2 plan created

### Recent Progress (This Session - 2026-02-03)

1. **Error Events to UI** ✅
   - New `events.rs` module with `BackendErrorPayload`
   - Message poller and reporter emit errors to frontend
   - Toast notification component with auto-dismiss
   - Warning for retryable, error for non-retryable

2. **Pre-Audit Report Analysis** ✅
   - Analyzed `recoger_desktop_pre_audit_report.md`
   - Identified FALSE POSITIVE: .env not tracked in git
   - Identified FIXED: Correlation IDs, error events
   - Created Phase 2 hardening plan

3. **Security Hardening Status**
   - **Phase 1 Complete**: Deep-link validation, logging redaction, HTTP timeouts, structured errors, correlation IDs, temp file cleanup, test coverage (75 tests)
   - **Phase 2 Ready**: IPC surface hardening, reliability fixes, platform safety

### Key Files Changed
- `apps/recoger-desktop/src-tauri/src/events.rs` - NEW: Error event types
- `apps/recoger-desktop/src-tauri/src/service/messages.rs` - Error emission
- `apps/recoger-desktop/src-tauri/src/service/reporter.rs` - Error emission
- `apps/recoger-desktop/src/lib/toastStore.ts` - NEW: Toast state
- `apps/recoger-desktop/src/components/Toast.tsx` - NEW: Toast UI
- `apps/recoger-desktop/src/App.tsx` - backend-error listener
- `apps/recoger-desktop/docs/security_hardening_phase2_plan.md` - NEW: Phase 2 plan

---

## Today's Context

### Pending Decisions
_None_

### Waiting On
_None_

### Blockers
_None_

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

1. **Recoger Desktop Security Phase 2** (ready)
   - [ ] Remove token commands from IPC surface
   - [ ] Disable withGlobalTauri
   - [ ] Add UUID to temp DB paths
   - [ ] Remove/constrain shell plugin
   - [ ] Cap seen_message_ids
   - [ ] Add Linux command timeouts

2. **Recoger Onboarding Implementation** (paused)
   - [x] Phase 1-2: Backend & frontend foundation ✅
   - [~] Phase 3: Step content components ✅, animations pending
   - [ ] Phase 4: Accessibility, analytics, nudges

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

**Last Updated**: 2026-02-03
**Updated By**: Claude (Error events to UI, security audit analysis, Phase 2 plan)
