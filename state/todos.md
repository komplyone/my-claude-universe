# Universe Todos

> Cross-project tasks spanning all of KomplyOne.

---

## In Progress

### @claude - Recoger Audit Logging (2026-01-19)
- [x] Add audit logging to device user endpoints (Update/Delete/Report)
- [x] Fix auditRepository stub implementations (CRITICAL BUG)
- [ ] Verify audit logs appear in UI after fix

### @claude - Recoger Go API Post-Migration
- [ ] Set up CI/CD pipeline for Go API
- [x] Write integration tests (2026-01-18)
- [x] Generate OpenAPI documentation (earlier session)
- [x] Create database migration scripts (2026-01-18)
- [ ] Run database migrations (`make migrate-up`)

### @claude - OpenTelemetry Instrumentation (2026-01-18)
- [ ] Set up Jaeger for local development tracing
- [ ] Add tracing to user authentication flow (auth service)
- [ ] Add tracing to tenant lookups (cached service)
- [ ] Add tracing to webhook delivery
- [ ] Add tracing to device reporting endpoints
- [ ] Correlate logs with trace IDs in logging middleware
- [ ] Document tracing best practices in codebase

### @together
- [ ] Finalize and validate Universe workflow system
- [ ] Document multi-project coordination patterns

### @micke
- [ ] Deploy recoger.co domain (Cloudflare Pages, Mailjet, BetterStack)
- [x] Domain acquisition - using recoger.co

---

## Pending

### @claude
- [ ] Create brand guidelines documentation
- [ ] Document infrastructure cost optimization patterns

### @together
- [ ] Establish cross-project testing strategy
- [ ] Define release coordination process

### @micke
- [ ] SOC 2 Type II preparation planning
- [ ] Customer discovery interviews

---

## Blocked

*None currently*

---

## Completed (Recent)

### Go API Migration COMPLETE! (2026-01-18)
All 27 modules migrated from Python/FastAPI to Go:
- [x] Auth, Sessions, Users, API Keys, Tenant, Devices
- [x] Stripe Webhooks, Services, Discoveries, Compliance
- [x] Security Reviews, Integrations, SSO, Webhooks
- [x] Notifications, Messages, Support Access, Invitations
- [x] User Policies, Domains, Admin Devices, Dashboard Stats
- [x] Subscription Management, Audit Logs, Events, Help Content
- [x] Internal Billing, Internal Dashboard, Internal Support

### Universe Setup
- [x] Universe specification v1.0 (2025-01-15)
- [x] Project structure standardization (2025-01-15)
- [x] Command system implementation (2025-01-15)
- [x] Multi-project setup (recoger, velador, aimigas, etc.) (2025-01-15)

---

## Backlog

### Infrastructure
- [ ] Multi-environment deployment strategy
- [ ] Shared monitoring dashboard
- [ ] Cost alerting across projects

### Brand & Marketing
- [ ] Unified design system
- [ ] Cross-product documentation site
- [ ] Customer case study template

### Process
- [ ] Incident response playbook
- [ ] Release checklist template
- [ ] Security audit schedule

---

## Assignment Guide

| Tag | Meaning |
|-----|---------|
| @micke | Micke is responsible |
| @claude | Claude is responsible (within approval bounds) |
| @together | Collaborative effort |

---

*Updated: 2026-01-19 - Audit logging repository fix completed*
