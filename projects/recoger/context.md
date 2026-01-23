# Recoger — Project Context

> Endpoint security and device compliance platform. "Continuous collection of security posture."

---

## Overview

Recoger is an endpoint compliance platform that:
- Monitors device security posture via lightweight agents
- Tracks SaaS/third-party service security manually
- Provides compliance dashboards for ISO 27001, SOC 2, ISO 42001, GDPR
- Generates audit-ready reports

**Target Market:** Security-conscious European SMBs (10-500 employees)

---

## Components

### Desktop Agent (recoger-desktop)
**Status:** In Development
**Tech:** Rust (Tauri 2.0), React, TypeScript
**Repo:** recoger-desktop

Native desktop agent for macOS, Windows, Linux. Collects:
- Device information (hardware, OS, encryption status)
- Security posture (firewall, updates, antivirus)
- Application inventory
- Compliance status

### API Server (recoger-api-go)
**Status:** In Development (Go rewrite)
**Tech:** Go 1.22, chi, PostgreSQL (sqlx), Redis
**Repo:** komplyone-compliance-suite-monorepo/apps/recoger-api-go

Multi-tenant API handling:
- Device registration and check-ins
- User authentication and authorization (JWT + MFA)
- Compliance engine and scoring
- Report generation

### Mobile App (recoger-mobile)
**Status:** Planned
**Tech:** Flutter, Dart
**Repo:** recoger-mobile

Companion app for:
- Viewing compliance status
- Push notifications for issues
- Mobile device compliance (MDM-lite)

### Marketing Website (recoger-website)
**Status:** In Development
**Tech:** Astro
**Repo:** recoger-website

Product marketing site at recoger.co

---

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     CLOUDFLARE (Edge)                       │
│  recoger.co (marketing)  │ app.recoger.co  │ api.recoger.co │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    HETZNER (Germany)                        │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │   Caddy     │──│   Go API    │──│   Admin UI  │         │
│  │  (Proxy)    │  │  (chi/sqlx) │  │   (React)   │         │
│  └─────────────┘  └─────────────┘  └─────────────┘         │
└─────────────────────────────────────────────────────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        ▼                     ▼                     ▼
┌───────────────┐   ┌───────────────┐   ┌───────────────┐
│     Neon      │   │  Redis Cloud  │   │  Cloudflare   │
│  PostgreSQL   │   │   (Cache)     │   │     R2        │
│  (Frankfurt)  │   │  (Frankfurt)  │   │   (Storage)   │
└───────────────┘   └───────────────┘   └───────────────┘
```

---

## Key Decisions

| ID | Decision | Rationale |
|----|----------|-----------|
| DEC-2024-001 | Tauri 2.0 for desktop | Cross-platform, Rust backend, small binary |
| DEC-2024-002 | EU-only infrastructure | Market differentiation, GDPR alignment |
| DEC-2024-003 | Per-device pricing | Simple, transparent, scales with usage |
| DEC-2025-001 | Hetzner for compute | German-headquartered, cost-effective |

---

## Pricing Model

| Plan | Price | Includes |
|------|-------|----------|
| **Free** | €0 | 10 users, 20 manual devices, 50 systems |
| **Startup** | €2/device/mo | Unlimited users, agents, 200 systems |
| **Scaleup** | €4/device/mo | Unlimited everything |

Discounts: Annual (17%), Consulting clients (20%), Early adopter (50% Y1)

---

## Current Focus

See `state/tasks.md` for current tasks and priorities.

---

## Related Documents

- `components/desktop.md` — Desktop agent details
- `components/api.md` — API server details
- `state/tasks.md` — Current tasks
- `state/decisions.md` — Decision log

---

*Last Updated: January 18, 2025*
