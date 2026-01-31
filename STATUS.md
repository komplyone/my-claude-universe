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
| **Last Session** | 2026-01-30 |

---

## Current State

### Active Focus
```
Project: recoger
Component: api-go
Mode: act
```

### What's Happening
- Recoger API connection pool debugging complete
- Production cleanup done - debug logging removed
- Simple deployment mode implemented (replaces blue/green)

### Recent Progress (This Session - 2026-01-30)

1. **Connection Pool Debugging - Root Cause Found** ✅
   - Issue: ~26 second delay on first requests after server restart
   - Root cause: Blue/green deployment caused stale connections
   - When two API instances ran simultaneously against Neon DB, connections became confused during switchover
   - **NOT Neon cold start** - confirmed by manual testing without blue/green

2. **Simple Deployment Mode Implemented** ✅
   - New `./deploy-recoger.sh simple` command (recommended)
   - Stop → Build → Start approach instead of blue/green overlap
   - Added `api` service to docker-compose.prod.yml
   - Blue/green commands marked as [legacy]
   - ~10-30 seconds downtime vs connection issues

3. **Connection Health Improvements** ✅
   - `BeforeAcquire` ping validates connections before use (2s timeout)
   - `HealthCheckPeriod` set to 30 seconds
   - `AfterRelease` destroys closed connections
   - `SimpleProtocol` for Neon (avoids extended query protocol hangs)

4. **Production Cleanup** ✅
   - Replaced `debug_wrapper.go` with `pool_wrapper.go` (keeps timeout enforcement)
   - Removed all `fmt.Printf` debug statements
   - Removed `LOGIN DIAGNOSTIC` and `DIAGNOSTIC` prefixes from auth logging
   - Removed first-request timing middleware
   - Simplified shutdown logging
   - Both server and webhook-worker build successfully

5. **Context Canceled Bug Fix** ✅
   - `Query()` in debug wrapper was canceling context before row iteration
   - Caused OAuth login failures ("context canceled" during GetActiveSessionsByUser)
   - Fixed by not adding timeout for Query operations

### Key Files Changed
- `docker-compose.prod.yml` - Added `api` service for simple mode
- `scripts/deploy-recoger.sh` - Added `simple` command
- `internal/infrastructure/database/postgres.go` - Health checks, SimpleProtocol
- `internal/infrastructure/database/pool_wrapper.go` - Query timeout enforcement
- `internal/app/app.go` - Removed debug middleware
- `internal/api/v1/handler/auth_login.go` - Cleaned diagnostic logging

### Tags Created
- `v1.0.0-working-simple-deploy` - Safe rollback point

---

## Today's Context

### Pending Decisions
_None_

### Waiting On
- User action: Deploy with `./deploy-recoger.sh simple` to verify fix

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

1. **Recoger Production Deploy** (ready)
   - [x] Debug connection pool issue ✅
   - [x] Implement simple deployment mode ✅
   - [x] Clean up debug logging ✅
   - [ ] Deploy to production: `./deploy-recoger.sh simple`
   - [ ] Verify login/refresh works without delays

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

## Files Modified This Session

**Recoger API Go** (`komplyone-compliance-suite-monorepo/apps/recoger-api-go`):
- `internal/infrastructure/database/postgres.go` - Connection health checks
- `internal/infrastructure/database/pool_wrapper.go` - New (replaces debug_wrapper.go)
- `internal/app/app.go` - Removed debug middleware
- `internal/app/services.go` - Use PoolWrapper instead of DebugDBTX
- `internal/app/repositories.go` - Removed debug logging
- `internal/api/v1/handler/auth_login.go` - Cleaned diagnostic prefixes
- `internal/domain/session/cached_repository.go` - Removed debug logging
- `internal/infrastructure/cache/redis.go` - Removed ping timing
- `cmd/server/main.go` - Simplified startup/shutdown

**Monorepo Root**:
- `docker-compose.prod.yml` - Added simple mode `api` service
- `scripts/deploy-recoger.sh` - Added `simple` command

---

**Last Updated**: 2026-01-30
**Updated By**: Claude (Connection pool debugging, simple deploy mode, production cleanup)
