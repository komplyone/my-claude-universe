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
| **Last Session** | 2026-02-09 |

---

## Current State

### Active Focus
```
Project: recoger
Component: web (dashboard)
Mode: act
```

### What's Happening
- Dashboard data now reflects real compliance status
- Device distribution chart colors fixed
- Build errors from sqlc type changes resolved

### Recent Progress (This Session - 2026-02-09)

1. **Dashboard Compliance Fix** ✅
   - Dashboard was showing "0 online" and "All compliant" incorrectly
   - Root cause: queries used `devices.status` instead of computing from `security_data` JSON
   - Added new SQL queries: `CountDevicesWithComplianceStatus`, `ListAtRiskDevicesWithIssues`
   - Compliance computed from: filevault_enabled, firewall_enabled, screen_lock_enabled, os_up_to_date, antivirus_enabled

2. **Score Color Bug Fix** ✅
   - Score badge was green at 80% even when device was non-compliant
   - Changed color logic from percentage threshold to compliance status
   - Fixed in: devices-page.tsx, device-components.tsx, device-detail-page.tsx

3. **Device Distribution Chart Fix** ✅
   - Chart showed single color despite 50/50 Darwin/Windows split
   - Root cause: `Color` field not being set in OS distribution data
   - Added `getOSColor()` and `getStatusColor()` helper functions
   - Distinct colors: Darwin=Indigo, Windows=Sky blue, Linux=Orange

4. **Build Error Fix** ✅
   - sqlc regeneration changed UUID types to strings (feature_requests uses VARCHAR(36))
   - Fixed type mismatches in discovery.go and internal_feature_requests.go
   - Changed pgtype.UUID to pgtype.Text for nullable fields

### Key Files Changed
- `apps/recoger-api-go/sqlc/queries/device.sql` - New compliance queries
- `apps/recoger-api-go/internal/app/repositories.go` - Compliance computation, chart colors
- `apps/recoger-api-go/internal/api/v1/handler/discovery.go` - Type fixes
- `apps/recoger-api-go/internal/api/v1/handler/internal_feature_requests.go` - Type fixes
- `apps/recoger-web/src/features/admin/routes/devices-page.tsx` - Score color fix
- `apps/recoger-web/src/features/admin/components/device-components.tsx` - Score color fix

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

1. **Recoger Dashboard** (in progress)
   - [x] Fix compliance data computation
   - [x] Fix device distribution chart colors
   - [ ] Verify all dashboard widgets show real data

2. **Recoger Desktop Security Phase 2** (ready)
   - [ ] Remove token commands from IPC surface
   - [ ] Disable withGlobalTauri
   - [ ] Add UUID to temp DB paths
   - [ ] Remove/constrain shell plugin
   - [ ] Cap seen_message_ids
   - [ ] Add Linux command timeouts

3. **Enable Cross-Platform Builds** (ready)
   - [ ] Uncomment macOS, Linux, Windows x86_64 in `build-desktop.yml`
   - [ ] Verify GitHub secrets are configured for all platforms
   - [ ] Push tag to trigger build, then run R2 upload workflow

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

**Last Updated**: 2026-02-09
**Updated By**: Claude (Dashboard compliance fix, score color fix, chart colors, sqlc type fixes)
