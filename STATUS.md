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
| **Current Focus** | aimigas |
| **Mode** | Act |
| **Last Session** | 2026-01-25 |

---

## Current State

### Active Focus
```
Project: aimigas
Component: selmain
Mode: act
```

### What's Happening
- Selma:in AI generation bugs fixed
- Model selection now uses configured LLM (Opus 4.5)
- Generation instructions persist correctly

### Recent Progress (This Session - 2026-01-25)

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

1. **Selma:in Enhancements** (optional)
   - [ ] Test generation with different models
   - [ ] Add streaming support for generation

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

**Rust API** (`komplyone-platform/rust-api`):
- `crates/komplyone-api/src/routes/selmain.rs` - Model override, JSON parsing, logging
- `crates/komplyone-core/src/modules/conversation/service.rs` - Model override support
- `crates/komplyone-core/src/modules/conversation/types.rs` - Added model_override field
- `crates/komplyone-core/src/modules/selmain/types.rs` - Added model field
- `crates/komplyone-db/src/queries/selmain.rs` - Fixed generation_instructions persistence

**Web Frontend** (`komplyone-platform/web`):
- `src/types/index.ts` - Added model to GenerateContentRequest
- `src/store/selmain.ts` - Pass model parameter
- `src/ops/selmain/SelmainOp.tsx` - Get llmModel from settings

---

**Last Updated**: 2026-01-25
**Updated By**: Claude (Selma:in AI model selection fixes)
