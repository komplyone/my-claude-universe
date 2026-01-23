# Recoger — Current Tasks

> Active tasks for the Recoger project.

---

## In Progress

### Desktop Agent
- [ ] @claude System tray implementation (native OS menus)
- [ ] @together Agent-server communication protocol
- [ ] @micke Code signing setup for macOS/Windows

### API Server (Go Rewrite)
- [x] @claude Auth endpoints: login, logout, refresh, me, change-password
- [x] @claude MFA endpoints: setup, confirm, disable, verify, recovery
- [ ] @claude Registration endpoint implementation
- [ ] @claude Password reset flow (forgot/reset)
- [ ] @claude Email verification endpoints
- [ ] @claude OAuth routes integration
- [ ] @claude Passkey routes integration
- [ ] @together Device routes implementation
- [ ] @together Session management routes
- [ ] @claude CI/CD pipeline completion
- [ ] @micke Production deployment preparation

### Infrastructure
- [ ] @together Monitoring setup (BetterStack + Sentry)
- [ ] @micke Domain acquisition (recoger.com or alternative)

---

## Blocked

*None currently*

---

## Completed (Recent)

- [x] Go API: Auth endpoints (login, logout, refresh, me, change-password)
- [x] Go API: MFA flow (setup, confirm, disable, verify, recovery)
- [x] Go API: Protected route middleware integration
- [x] Universe workflow scaffold design
- [x] Infrastructure decisions locked down
- [x] Brand validation complete

---

## Backlog

### Desktop Agent
- [ ] Windows agent implementation
- [ ] Linux agent implementation
- [ ] Auto-update mechanism
- [ ] Offline mode and sync

### API Server (After Auth Complete)
- [ ] Multi-tenant dashboard
- [ ] Report generation
- [ ] Email notifications
- [ ] API documentation (OpenAPI)

### Mobile App
- [ ] Flutter project setup
- [ ] Authentication flow
- [ ] Device list view
- [ ] Push notifications

### Website
- [ ] Pricing page
- [ ] Documentation section
- [ ] Blog setup

---

## Task Ownership

| Tag | Meaning |
|-----|---------|
| @micke | Micke is responsible |
| @claude | Claude is responsible (within approval bounds) |
| @together | Collaborative effort |

---

*Updated: 2025-01-18*
