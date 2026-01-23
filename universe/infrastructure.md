# Infrastructure Patterns

> Standard infrastructure stack for KomplyOne products. EU-first, cost-effective, managed services.

---

## Standard Stack

| Component | Provider | Region | Rationale |
|-----------|----------|--------|-----------|
| **Compute** | Hetzner Cloud | Germany | EU-headquartered, cost-effective |
| **Database** | Neon | Frankfurt | Serverless PostgreSQL, branching |
| **Cache** | Redis Cloud | Frankfurt | Sessions, rate limiting, blacklist |
| **CDN/WAF** | Cloudflare | Global | Free tier, DDoS protection |
| **Storage** | Cloudflare R2 | EU | S3-compatible, no egress fees |
| **Email** | Mailjet | EU | Transactional email |
| **Monitoring** | BetterStack | - | Uptime, logs, status page |
| **Errors** | Sentry | - | Error tracking (privacy-safe config) |
| **Payments** | Stripe | Global | Self-serve billing |

---

## Why This Stack

### EU Data Residency
All customer data stays in EU:
- Hetzner: German-headquartered, German datacenters
- Neon: Frankfurt region
- Redis Cloud: Frankfurt region
- R2: EU storage location

This is a **feature**, not a constraint. Security-conscious European customers value it.

### Cost Efficiency
Pre-revenue cost target: <€20/month
Growth phase (10-50 customers): <€150/month

Free tiers:
- Neon Free: 0.5GB storage, reasonable compute
- Redis Cloud Free: 30MB
- Cloudflare Free: CDN, WAF, 10GB R2
- BetterStack Free: Basic monitoring
- Sentry Free: Error tracking

### Managed Services
We use managed services to minimize operational overhead:
- No self-hosted databases
- No container orchestration (simple Docker on VMs)
- No DIY monitoring

---

## Environment Strategy

| Environment | Purpose | Database Branch |
|-------------|---------|-----------------|
| **Development** | Local dev | `development` |
| **Staging** | Pre-prod testing | `staging` |
| **Production** | Live system | `main` |

**Branch Refresh:**
- `staging` ← `main` after each production release
- `development` ← `staging` weekly or as needed

---

## Compute Sizing

### Pre-Revenue
- **Hetzner CX21:** 2 vCPU, 4GB RAM (~€6/mo)
- Single container running API + Admin UI
- Caddy as reverse proxy

### Growth Phase
- **Hetzner CX31:** 4 vCPU, 8GB RAM (~€12/mo)
- Consider separating API and Admin UI
- Add worker container if needed

### Scale Phase
- Multiple VMs behind load balancer
- Separate services (API, Admin, Workers)
- Consider Kubernetes if complexity warrants

---

## Database Patterns

### Neon Configuration
- Connection pooling enabled (PgBouncer)
- SSL required
- Branching for dev/staging/production

### Multi-Tenancy
- Shared database, shared schema
- `tenant_id` discriminator on all tenant tables
- Row-Level Security (RLS) where feasible

### Migrations
- Alembic for schema migrations
- Always test on `development` → `staging` → `production`
- Backward-compatible changes when possible

---

## Caching Patterns

### Redis Usage
| Use Case | Key Pattern | TTL |
|----------|-------------|-----|
| Session data | `session:{user_id}` | 30 min |
| Rate limiting | `rate:{ip}:{endpoint}` | 1 min |
| Token blacklist | `blacklist:{jti}` | Token expiry |
| Cache | `cache:{entity}:{id}` | Varies |

### Cache Invalidation
- Explicit invalidation on write
- TTL as safety net
- No reliance on cache for correctness

---

## File Storage Patterns

### R2 Bucket Structure
```
recoger-uploads/
├── compliance-evidence/    # Customer uploads
├── reports/                # Generated reports
└── temp/                   # Temporary (auto-expire)

recoger-agents/
├── macos/                  # Agent downloads
├── windows/
└── linux/
```

### File Upload Security
- UUID filenames (ignore client filename)
- Magic byte validation
- Size limits per file and per tenant
- Pre-signed URLs for direct upload/download

---

## Monitoring Setup

### BetterStack
- Health endpoint monitoring (1 min interval)
- Status page at status.[product].app
- Log aggregation via Vector

### Sentry
- Privacy-safe config (no PII)
- Scrub sensitive headers
- Environment tagging

### Alerts
| Severity | Response Time | Examples |
|----------|---------------|----------|
| Critical | Immediate | Service down |
| High | 1 hour | Error spike, security event |
| Medium | 4 hours | Performance degradation |
| Low | 24 hours | Capacity warning |

---

## Static Website Deployment (Cloudflare Pages)

Marketing and product websites are deployed to **Cloudflare Pages** with automatic Git-based deployment.

### Configuration Files

| File | Purpose |
|------|---------|
| `wrangler.toml` | Cloudflare Pages config, environment variables |
| `astro.config.mjs` | Astro framework config, site URL |
| `package.json` | Build scripts (`npm run build`) |

### wrangler.toml Template
```toml
name = "project-website"
compatibility_date = "2024-01-01"
pages_build_output_dir = "dist"

[vars]
CORS_ORIGIN = "http://localhost:4321"

# Production vars set in Cloudflare Dashboard:
# - CORS_ORIGIN = "https://example.com"
# - MAILJET_API_KEY (if contact forms)
# - MAILJET_SECRET_KEY
```

### Deployment Flow
1. Push code to `main` branch on GitHub
2. Cloudflare Pages automatically detects changes
3. Runs `npm run build` command
4. Deploys `dist/` directory to production
5. Preview deployments created for pull requests

### Custom Domains
Configure in Cloudflare Pages Dashboard → Custom domains:
- Add domain (e.g., `recoger.co`, `komplyonestudios.co`)
- Point DNS to Cloudflare Pages
- SSL automatically provisioned

### Pages Functions
Backend APIs live in `/functions/` directory:
```
functions/
├── api/
│   ├── contact.js    # Contact form
│   ├── waitlist.js   # Waitlist signup
│   └── status.js     # Health check
```

### Deployed Websites
| Project | URL | Repository |
|---------|-----|------------|
| Recoger | https://recoger.co | komplyone/recoger-website |
| Velador | https://velador.co | komplyone/velador-website |
| KomplyOne Studios | https://komplyonestudios.co | komplyone/komplyone-studios-website |

---

## Security Configuration

### Cloudflare
- SSL: Full (strict)
- Minimum TLS: 1.2
- WAF: Enabled
- DDoS protection: Default

### Headers (via Caddy)
```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

---

## Cost Projections

### Pre-Revenue (~€6/mo)
| Service | Cost |
|---------|------|
| Hetzner CX21 | €5.83 |
| Everything else | Free tier |

### Growth (~€125/mo)
| Service | Cost |
|---------|------|
| Hetzner CX31 | €11.66 |
| Neon Launch | €19 |
| Redis Cloud | €7 |
| Cloudflare Pro | €20 |
| Mailjet Basic | €15 |
| BetterStack Team | €24 |
| Sentry Team | €26 |

---

## Procurement Answers

| Question | Answer |
|----------|--------|
| Where is data stored? | Frankfurt, Germany (EU) |
| Who hosts compute? | Hetzner (German-headquartered) |
| Encrypted? | Yes — TLS 1.3 transit, AES-256 rest |
| Backup policy? | PITR 7-30 days (DB), daily (Redis) |
| GDPR? | Yes, all infrastructure EU-based |
| SOC 2? | Providers are SOC 2 certified |

---

*For deployment details, see RECOGER_DEPLOYMENT_PLAN.md*
