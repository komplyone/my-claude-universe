# Recoger — Decision Log

> Significant decisions made for the Recoger project.

---

## 2025

### DEC-2025-004: Rewrite API from Python/FastAPI to Go
**Date:** 2025-01-18
**Context:** Need for improved performance, type safety, and simpler deployment
**Decision:** Rewrite recoger-srv from Python/FastAPI to Go
**Rationale:**
- Stronger static typing catches errors at compile time
- Single binary deployment simplifies operations
- Better performance for concurrent workloads
- Native concurrency with goroutines
- Smaller memory footprint
**Implementation:**
- Using go-chi/chi for HTTP routing
- sqlx for database access (PostgreSQL)
- go-redis/v9 for Redis connectivity
- go-playground/validator for request validation
- pquerna/otp for TOTP MFA
**Status:** In progress - auth endpoints complete, remaining routes pending
**Reversible:** Yes (Python codebase still exists)

### DEC-2025-001: Hetzner Cloud for Compute
**Date:** 2025-01-05
**Context:** Needed to select compute provider for production deployment
**Decision:** Use Hetzner Cloud (Germany) for all compute workloads
**Rationale:** 
- German-headquartered company (EU credibility)
- Cost-effective (~€6/mo for starter)
- Good performance, reliable uptime
- Aligns with EU data residency positioning
**Alternatives Considered:**
- AWS/Azure/GCP — More expensive, US-headquartered
- DigitalOcean — US-headquartered
- OVH — French, but more complex
**Reversible:** Yes, containerized deployment is portable

### DEC-2025-002: Neon for PostgreSQL
**Date:** 2025-01-05
**Context:** Needed managed PostgreSQL with EU region
**Decision:** Use Neon (Frankfurt region)
**Rationale:**
- Serverless with generous free tier
- Branching for dev/staging/production
- Frankfurt region for EU compliance
- Modern developer experience
**Alternatives Considered:**
- Supabase — Good, but less flexible branching
- PlanetScale — MySQL, not PostgreSQL
- Self-hosted — Operational overhead
**Reversible:** Partially (migration effort required)

### DEC-2025-003: Redis Cloud for Caching
**Date:** 2025-01-05
**Context:** Need Redis for sessions, rate limiting, token blacklist
**Decision:** Use Redis Cloud (Frankfurt)
**Rationale:**
- Official Redis product
- Frankfurt region available
- Free tier sufficient for start
- Managed service, no ops overhead
**Alternatives Considered:**
- Upstash — Good alternative, slightly less feature-rich
- Self-hosted — Operational overhead
**Reversible:** Yes

---

## 2024

### DEC-2024-001: Tauri 2.0 for Desktop Agent
**Date:** 2024-Q4
**Context:** Needed cross-platform desktop framework
**Decision:** Use Tauri 2.0 with Rust backend
**Rationale:**
- Small binary size vs Electron
- Rust for system-level operations
- Native OS integration
- Security-focused architecture
**Alternatives Considered:**
- Electron — Too bloated
- Native per-platform — Too much development effort
- Flutter Desktop — Less mature for desktop
**Reversible:** No (significant rewrite required)

### DEC-2024-002: EU-Only Infrastructure
**Date:** 2024-Q4
**Context:** Determining geographic strategy
**Decision:** All customer data infrastructure in EU
**Rationale:**
- Market differentiation for EU customers
- GDPR alignment
- Security-conscious customer preference
- Matches Micke's location/market knowledge
**Alternatives Considered:**
- Multi-region — Complexity, cost
- US-first — Doesn't match target market
**Reversible:** Yes, but would require messaging change

### DEC-2024-003: Per-Device Pricing Model
**Date:** 2024-Q4
**Context:** Determining pricing structure
**Decision:** Price per device per month (€2-4)
**Rationale:**
- Simple and transparent
- Scales with customer value
- Easy to understand and budget
- Competitive with market
**Alternatives Considered:**
- Per-user — Doesn't match value (devices vary)
- Flat tiers — Less scalable
- Usage-based — Unpredictable for customers
**Reversible:** Yes

---

*Decisions are permanent record. Do not delete entries.*
