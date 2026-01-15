# API Component

> Context for the API/Backend component. Load when working on backend code.

---

## Overview

| Attribute | Value |
|-----------|-------|
| **Language** | Go |
| **Framework** | Chi |
| **Database** | PostgreSQL (Neon) |
| **Status** | Planned |

---

## Architecture

### Directory Structure

```
api/
├── cmd/
│   └── server/
│       └── main.go        # Entry point
├── internal/
│   ├── config/            # Configuration
│   ├── handlers/          # HTTP handlers
│   ├── middleware/        # Middleware
│   ├── models/            # Data models
│   ├── repository/        # Database access
│   └── services/          # Business logic
├── pkg/                   # Public packages
├── migrations/            # Database migrations
└── tests/                 # Integration tests
```

### Request Flow

```
Request → Router → Middleware → Handler → Service → Repository → Database
                                   ↓
Response ← ───────────────────────┘
```

---

## API Design

### Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/health` | Health check |
| GET | `/api/v1/[resource]` | List resources |
| GET | `/api/v1/[resource]/:id` | Get single resource |
| POST | `/api/v1/[resource]` | Create resource |
| PUT | `/api/v1/[resource]/:id` | Update resource |
| DELETE | `/api/v1/[resource]/:id` | Delete resource |

### Authentication

```
- JWT tokens in Authorization header
- Format: Bearer <token>
- Tokens expire in 1 hour
- Refresh tokens for extended sessions
```

### Response Format

```json
{
  "data": { ... },
  "meta": {
    "page": 1,
    "per_page": 20,
    "total": 100
  }
}
```

### Error Format

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Human-readable message",
    "details": [ ... ]
  }
}
```

---

## Database

### Schema Overview

```
[Add ER diagram or table list here]
```

### Key Tables

| Table | Purpose |
|-------|---------|
| users | User accounts |
| [table] | [purpose] |

### Migrations

```bash
# Create new migration
migrate create -ext sql -dir migrations -seq [name]

# Run migrations
migrate -path migrations -database $DATABASE_URL up

# Rollback
migrate -path migrations -database $DATABASE_URL down 1
```

---

## Development

### Running Locally

```bash
# Install dependencies
go mod download

# Set environment
export DATABASE_URL="postgres://..."

# Run server
go run cmd/server/main.go

# Or with hot reload
air
```

### Testing

```bash
# Unit tests
go test ./...

# With coverage
go test -cover ./...

# Integration tests (requires DB)
go test -tags=integration ./tests/...
```

### Linting

```bash
# Run linter
golangci-lint run

# Fix auto-fixable issues
golangci-lint run --fix
```

---

## Configuration

### Environment Variables

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `DATABASE_URL` | Yes | - | PostgreSQL connection |
| `PORT` | No | 8080 | Server port |
| `JWT_SECRET` | Yes | - | JWT signing key |
| `LOG_LEVEL` | No | info | Logging level |

---

## Notes

```
[Component-specific notes]
```

---

**Last Updated**: [Date]
