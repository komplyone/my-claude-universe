# Recoger API Server

> Multi-tenant SaaS backend for device compliance management.

---

## Overview

The Recoger API is a Go-based backend serving the desktop agents, mobile app, and admin dashboard. It handles device registration, compliance scoring, and report generation.

**Repo:** `komplyone-compliance-suite-monorepo/apps/recoger-api-go`
**Status:** In Development (Go rewrite)
**Contains:** API Server

---

## Technology Stack

| Layer | Technology | Notes |
|-------|------------|-------|
| Framework | go-chi/chi | Lightweight, idiomatic router |
| Language | Go 1.22+ | Strong typing, concurrency |
| Database | PostgreSQL (Neon) | Multi-tenant, via sqlx |
| Cache | Redis (Redis Cloud) | Sessions, token blacklist |
| Migrations | goose | Schema versioning |
| Validation | go-playground/validator | Request validation |

---

## Architecture

```
┌──────────────────────────────────────────────────────┐
│                   Go HTTP Server                      │
├─────────────────┬─────────────────┬──────────────────┤
│   API Handlers  │  Domain Services│    Middleware    │
│  ┌───────────┐  │  ┌───────────┐  │  ┌────────────┐  │
│  │ /auth     │  │  │ AuthS     │  │  │ Auth       │  │
│  │ /devices  │  │  │ UserS     │  │  │ RateLimit  │  │
│  │ /tenants  │  │  │ TenantS   │  │  │ Logging    │  │
│  │ /reports  │  │  │ SessionS  │  │  │ Recovery   │  │
│  │ /users    │  │  │ DeviceS   │  │  │ CORS       │  │
│  └───────────┘  │  └───────────┘  │  └────────────┘  │
└─────────────────┴─────────────────┴──────────────────┘
          │                │                  │
          └────────────────┼──────────────────┘
                           │
        ┌──────────────────┼──────────────────┐
        ▼                  ▼                  ▼
   ┌─────────┐        ┌─────────┐        ┌─────────┐
   │PostgreSQL│        │  Redis  │        │   R2    │
   │ (Neon)   │        │ (Token  │        │(Storage)│
   │  (sqlx)  │        │Blacklist)│       │         │
   └─────────┘        └─────────┘        └─────────┘
```

---

## Core Features

### Multi-Tenancy
- Tenant isolation at database level
- `tenant_id` discriminator on all tenant resources
- Row-Level Security (RLS) where applicable
- Per-tenant configuration

### Authentication
- JWT-based authentication with multiple token scopes
- Access tokens (15-30 min) with scope: `full`, `mfa_verify`, `mfa_setup`
- Refresh tokens (7 days, rotating)
- TOTP-based MFA with recovery codes
- Device authentication (long-lived tokens)

### Device Management
- Device registration and lifecycle
- Periodic check-in processing
- Status aggregation and scoring
- Configuration distribution

### Compliance Engine
- Policy definition per tenant
- Compliance scoring algorithm
- Issue detection and tracking
- Historical trend analysis

### Reporting
- Compliance dashboards
- Audit-ready reports (PDF)
- Evidence collection
- Export capabilities

---

## API Structure

### Authentication (`/v1/auth`)
| Method | Endpoint | Purpose | Status |
|--------|----------|---------|--------|
| POST | `/login` | User authentication | ✅ Implemented |
| POST | `/refresh` | Token refresh | ✅ Implemented |
| POST | `/logout` | Session termination | ✅ Implemented |
| GET | `/me` | Get current user | ✅ Implemented |
| PUT | `/me` | Update current user | ✅ Implemented |
| POST | `/change-password` | Change password | ✅ Implemented |
| POST | `/mfa/verify` | Verify MFA code | ✅ Implemented |
| POST | `/mfa/recovery` | Use recovery code | ✅ Implemented |
| POST | `/mfa/setup` | Begin MFA setup | ✅ Implemented |
| POST | `/mfa/confirm` | Confirm MFA setup | ✅ Implemented |
| DELETE | `/mfa` | Disable MFA | ✅ Implemented |
| POST | `/register` | User registration | 🔲 Planned |
| POST | `/forgot-password` | Request password reset | 🔲 Planned |
| POST | `/reset-password` | Reset password | 🔲 Planned |
| POST | `/verify-email` | Verify email | 🔲 Planned |
| GET | `/oauth/{provider}` | OAuth redirect | 🔲 Planned |
| POST | `/passkey/login/begin` | Begin passkey login | 🔲 Planned |

### Devices (`/v1/devices`)
| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | `/register` | Register new device |
| GET | `/` | List tenant devices |
| GET | `/{id}` | Get device details |
| POST | `/{id}/checkin` | Device check-in |
| DELETE | `/{id}` | Remove device |

### Tenants (`/v1/tenants`)
| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/current` | Current tenant info |
| PATCH | `/current` | Update tenant settings |
| GET | `/current/stats` | Tenant statistics |

### Users (`/v1/users`)
| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/` | List tenant users |
| GET | `/{id}` | Get user details |
| PATCH | `/{id}` | Update user |
| DELETE | `/{id}` | Remove user |

### Reports (`/v1/reports`)
| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/compliance` | Compliance dashboard data |
| POST | `/generate` | Generate PDF report |
| GET | `/history` | Historical data |

---

## Security Implementation

### Request Validation
```go
type DeviceCheckin struct {
    DeviceID    uuid.UUID   `json:"device_id" validate:"required"`
    CollectedAt time.Time   `json:"collected_at" validate:"required"`
    Data        DeviceData  `json:"data" validate:"required"`
}
```

### Tenant Isolation
```go
// Every query includes tenant_id
device, err := repo.GetByIDAndTenant(ctx, deviceID, user.TenantID)
if err != nil {
    return ErrNotFound
}
```

### JWT Token Scopes
```go
const (
    TokenScopeFull      = "full"       // Full access
    TokenScopeMFAVerify = "mfa_verify" // Limited: MFA verification only
    TokenScopeMFASetup  = "mfa_setup"  // Limited: MFA setup confirmation only
)
```

### Rate Limiting
- Per-endpoint limits via Redis
- Per-tenant quotas
- Graceful degradation

---

## Database Schema (Core Tables)

```
tenants
├── id (UUID, PK)
├── name
├── settings (JSONB)
└── created_at

users
├── id (UUID, PK)
├── tenant_id (FK)
├── email
├── password_hash
├── role
└── created_at

devices
├── id (UUID, PK)
├── tenant_id (FK)
├── name
├── platform
├── last_checkin
├── compliance_score
└── status

device_checkins
├── id (UUID, PK)
├── device_id (FK)
├── collected_at
├── data (JSONB)
└── processed_at

compliance_policies
├── id (UUID, PK)
├── tenant_id (FK)
├── name
├── rules (JSONB)
└── enabled
```

---

## Deployment

- Containerized (Docker)
- Hosted on Hetzner Cloud
- Caddy reverse proxy
- GitHub Actions CI/CD

See `DEPLOYMENT_PLAN.md` for full details.

---

## Current Tasks

See `../state/tasks.md` for the complete task list. Key API priorities:

**Completed:**
- ✅ Auth endpoints: login, logout, refresh, me, change-password
- ✅ MFA endpoints: setup, confirm, disable, verify, recovery

**In Progress:**
- 🔄 Registration endpoint
- 🔄 Password reset flow (forgot/reset)
- 🔄 Email verification

**Planned:**
- 🔲 OAuth integration
- 🔲 Passkey authentication
- 🔲 Device routes
- 🔲 Session management routes
- 🔲 CI/CD pipeline

---

## Project Structure

```
recoger-api-go/
├── cmd/server/           # Main entry point
├── internal/
│   ├── api/
│   │   ├── middleware/   # Auth, logging, CORS, rate limiting
│   │   └── v1/
│   │       ├── dto/      # Request/response types
│   │       ├── handler/  # HTTP handlers
│   │       └── router.go # Route definitions
│   ├── domain/
│   │   ├── auth/         # Auth service, JWT, MFA, blacklist
│   │   ├── user/         # User service and repository
│   │   ├── tenant/       # Tenant service
│   │   └── session/      # Session management
│   └── config/           # Configuration
├── migrations/           # Database migrations (goose)
└── Makefile             # Build and development commands
```

---

*For security requirements, see `universe/security.md`*
*Last Updated: January 2025*
