# [Project Name]

> This file provides background context for working on this project. Load it when focusing on this project.

---

## Overview

### What Is This?

```
[Brief description of what this project is]
```

### Who Is It For?

```
[Target users/customers]
```

### Why Does It Exist?

```
[The problem it solves]
```

---

## Architecture

### High-Level View

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Client    │────▶│     API     │────▶│  Database   │
│  (Web/App)  │     │  (Backend)  │     │ (PostgreSQL)│
└─────────────┘     └─────────────┘     └─────────────┘
```

### Components

| Component | Technology | Purpose |
|-----------|------------|---------|
| API | Go + Chi | Backend services |
| Web | React | Web interface |
| Database | PostgreSQL (Neon) | Data storage |

### Data Flow

```
1. User interacts with client
2. Client sends request to API
3. API validates and processes
4. API queries/updates database
5. Response flows back to user
```

---

## Technical Details

### Tech Stack

```
Backend:
- Language: Go
- Framework: Chi
- Database: PostgreSQL via Neon

Frontend:
- Framework: React
- Language: TypeScript
- Styling: Tailwind CSS

Infrastructure:
- Compute: Hetzner
- Database: Neon
- Cache: Redis Cloud
```

### Key Dependencies

| Dependency | Purpose | Version |
|------------|---------|---------|
| [package] | [why] | [version] |

### Environment Variables

```
# Required
DATABASE_URL=          # Neon connection string
API_SECRET=            # JWT signing secret

# Optional
REDIS_URL=             # Redis connection (if caching)
```

---

## Domain Knowledge

### Key Concepts

| Term | Definition |
|------|------------|
| [Term 1] | [What it means in this project] |
| [Term 2] | [What it means] |

### Business Rules

```
1. [Important rule #1]
2. [Important rule #2]
```

### External Integrations

| Service | Purpose | Documentation |
|---------|---------|---------------|
| [Service] | [Why we use it] | [Link] |

---

## Current State

### What's Working

```
- [Feature 1]
- [Feature 2]
```

### What's Not Yet Built

```
- [Planned feature 1]
- [Planned feature 2]
```

### Known Issues

```
- [Issue 1]
- [Issue 2]
```

---

## Development Notes

### Getting Started

```bash
# Clone the repo
git clone [repo-url]

# Install dependencies
[install commands]

# Set up environment
cp .env.example .env
# Edit .env with your values

# Run locally
[run commands]
```

### Testing

```bash
# Run tests
[test commands]

# Run with coverage
[coverage commands]
```

### Common Tasks

| Task | Command |
|------|---------|
| Run dev server | `[command]` |
| Run tests | `[command]` |
| Build for prod | `[command]` |

---

## Notes

```
[Any additional context that doesn't fit above]
```

---

**Last Updated**: [Date]
**Updated By**: [Name/Claude]
