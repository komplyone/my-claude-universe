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
| **Last Session** | 2026-02-11 |

---

## Current State

### Active Focus
```
Project: recoger
Component: desktop
Mode: act
```

### What's Happening
- v1.4.21 released with logging and OAuth fixes
- Testing on Windows ARM continues
- Basic auth login issue still needs diagnosis (now possible with working debug logs)

### Recent Progress (This Session - 2026-02-11)

1. **Fix Duplicate Logs** ✅
   - Every log line appeared twice in log file
   - Root cause: both LogDir and Stdout targets writing to same file
   - Fix: Removed Stdout target from tauri_plugin_log config
   - File: src-tauri/src/main.rs

2. **Fix Debug Level Not Working** ✅
   - 5-tap debug toggle enabled but no debug messages appeared
   - Root cause: Plugin internal filter hardcoded to Info, blocking Debug messages even after global filter raised
   - Fix: Set plugin level to Trace (accept all), use log::set_max_level(Info) as runtime gate
   - File: src-tauri/src/main.rs

3. **Fix OAuth CSRF Error** ✅
   - Google OAuth completed but deep link returned CSRF error
   - Root cause: Frontend checked for `state` URL param, but backend sends tokens in `data` JSON blob (state already validated server-side)
   - Fix: Skip client-side state check when `data` param present (server already validated)
   - File: src/views/Login.tsx

4. **Downgrade Custom URL Warning** ✅
   - "Custom API URL ignored" warning was noisy but harmless
   - Fix: Changed log::warn! to log::debug!
   - File: src-tauri/src/config.rs

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

1. **Recoger Desktop Login Diagnosis** (next)
   - [ ] Test v1.4.21 on Windows ARM — verify debug logs now work
   - [ ] Get debug logs from basic auth login attempt
   - [ ] Diagnose and fix basic auth login failure

2. **Recoger Dashboard** (in progress)
   - [x] Fix compliance data computation
   - [x] Fix device distribution chart colors
   - [ ] Verify all dashboard widgets show real data

3. **Recoger Desktop Security Phase 2** (ready)
   - [ ] Remove token commands from IPC surface
   - [ ] Disable withGlobalTauri
   - [ ] Add UUID to temp DB paths
   - [ ] Remove/constrain shell plugin
   - [ ] Cap seen_message_ids
   - [ ] Add Linux command timeouts

4. **Enable Cross-Platform Builds** (ready)
   - [ ] Uncomment macOS, Linux, Windows x86_64 in build-desktop.yml
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

**Last Updated**: 2026-02-11
**Updated By**: Claude (Recoger desktop v1.4.21 logging and OAuth fixes)
