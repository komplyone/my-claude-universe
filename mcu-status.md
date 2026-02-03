# MCU Status - 2026-02-03

## Current Work: Recoger Desktop Security Hardening

### Context
Implemented error events to UI feature and analyzed pre-audit security report for recoger-desktop.

---

## Completed This Session

### 1. Error Events to UI (Phase 1 Completion)

**Backend (Rust):**
- Created `src/events.rs` with `BackendErrorPayload` struct and error emission helpers
- Added `ErrorSource` enum (MessagePoller, Reporter, Updater, Auth, General)
- Updated `service/messages.rs` to emit errors on fetch failures
- Updated `service/reporter.rs` to emit errors on report failures
- Added `parse_fetch_error()` and `parse_report_error()` helpers

**Frontend (React):**
- Created `src/lib/toastStore.ts` - Zustand store for toast notifications
- Created `src/components/Toast.tsx` - Toast component with auto-dismiss (5s)
- Updated `App.tsx` to listen for `backend-error` events
- Shows warning toast for retryable errors, error toast for non-retryable

### 2. Pre-Audit Report Analysis

Analyzed `/apps/recoger-desktop/docs/recoger_desktop_pre_audit_report.md` and cross-referenced with current codebase.

**Key Findings:**
- Issue 3.1 (Signing key in .env): **FALSE POSITIVE** - `.env` not tracked in git
- Issue 3.10 (Observability unused): **FIXED** - Correlation IDs, error events implemented
- Issue 3.7 (Temp DB path): **PARTIAL** - RAII cleanup added, UUID suffix still missing

**Still Outstanding:**
- 3.2: Refresh token empty for non-MFA login
- 3.3: Token exposure via IPC (`get_access_token`, `save_auth_tokens`)
- 3.4: `withGlobalTauri: true` + shell plugin enabled
- 3.5: Capability/permission drift in `default.json`
- 3.6: Linux sudo commands with no timeout
- 3.8: Unbounded `seen_message_ids` HashSet

### 3. Security Hardening Phase 2 Plan

Created `/apps/recoger-desktop/docs/security_hardening_phase2_plan.md` with:
- 8 prioritized tasks across 2 weeks
- IPC surface hardening (remove token commands, disable globalTauri)
- Reliability fixes (UUID temp paths, cap message IDs)
- Platform safety (Linux command timeouts)
- Capability alignment

---

## Test Coverage

**Current: 75 tests**
- 49 unit tests
- 15 contract tests
- 11 integration tests

All tests passing after error events implementation.

---

## Files Created/Modified This Session

**New Files:**
- `apps/recoger-desktop/src-tauri/src/events.rs` - Error event types
- `apps/recoger-desktop/src/lib/toastStore.ts` - Toast state management
- `apps/recoger-desktop/src/components/Toast.tsx` - Toast UI component
- `apps/recoger-desktop/docs/security_hardening_phase2_plan.md` - Phase 2 plan

**Modified Files:**
- `apps/recoger-desktop/src-tauri/src/lib.rs` - Added events module
- `apps/recoger-desktop/src-tauri/src/service/messages.rs` - Error emission
- `apps/recoger-desktop/src-tauri/src/service/reporter.rs` - Error emission, app_handle
- `apps/recoger-desktop/src/App.tsx` - backend-error listener, ToastContainer

---

## Scorecard Update

| Category | Before Phase 1 | After Phase 1 |
|----------|----------------|---------------|
| Security | 1 | 2 |
| Testing | 1 | 3 |
| Observability | 2 | 3.5 |
| Rust quality | 3 | 3.5 |

---

## Next Steps

**Phase 2 Priority Tasks:**
1. Remove `get_access_token` and `save_auth_tokens` from IPC surface
2. Disable `withGlobalTauri` in tauri.conf.json
3. Add UUID suffix to temp DB paths
4. Remove or constrain shell plugin
5. Cap `seen_message_ids` with size limit
6. Add timeouts to Linux platform commands
7. Investigate refresh token handling
8. Fix capability/permission drift

---

**Last Updated**: 2026-02-03
**Updated By**: Claude (Error events to UI, security audit analysis, Phase 2 plan)
