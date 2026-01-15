# Infrastructure Standards

> Infrastructure and deployment guidelines for all projects. This file is loaded when working on infrastructure, deployment, or cost-related tasks.

---

## Recommended Stack

### Default Providers

| Service | Provider | Why |
|---------|----------|-----|
| **Compute** | Hetzner | Excellent EU pricing, good performance |
| **Database** | Neon | Serverless PostgreSQL, branching, generous free tier |
| **Cache** | Redis Cloud | Managed Redis, free tier available |
| **Storage** | Cloudflare R2 | S3-compatible, no egress fees |
| **CDN** | Cloudflare | Fast, free tier, good security |
| **DNS** | Cloudflare | Free, fast propagation |
| **Monitoring** | Grafana Cloud | Free tier sufficient for small projects |
| **CI/CD** | GitHub Actions | Integrated, generous free tier |

### Alternative Options

| Service | Alternatives |
|---------|-------------|
| Compute | AWS EC2, GCP Compute, DigitalOcean, Fly.io |
| Database | Supabase, PlanetScale, AWS RDS |
| Cache | Upstash, AWS ElastiCache |
| Storage | AWS S3, GCP Cloud Storage |

---

## Region Strategy

### Primary Region

```
Default: EU (Frankfurt / eu-central)
Reasoning: GDPR compliance, good connectivity, cost-effective
```

### Multi-Region (if needed)

```
EU Primary: Frankfurt (eu-central)
US: Virginia (us-east)
Asia: Singapore (ap-southeast)
```

### Data Residency

```
- EU user data stays in EU
- Consider regulatory requirements
- Document data flow
```

---

## Environment Strategy

### Environments

| Environment | Purpose | Database |
|-------------|---------|----------|
| **local** | Development | Local or Neon branch |
| **staging** | Pre-production testing | Neon branch |
| **production** | Live users | Neon main |

### Neon Branching

```
main (production)
├── staging (persistent branch)
├── feature-xyz (temporary, auto-delete)
└── dev-[name] (developer branches)
```

### Environment Variables

```
# Pattern: SERVICE_ENV_KEY
DATABASE_URL=...
REDIS_URL=...
API_KEY_STRIPE=...

# Environment-specific
NODE_ENV=development|staging|production
```

---

## Cost Guidelines

### Budget Categories

| Category | Monthly Target | Approach |
|----------|----------------|----------|
| **Hobby** | $0 | Free tiers only |
| **Personal** | $0-50 | Minimal paid resources |
| **Startup** | $50-500 | Scale as needed |
| **Business** | $500+ | Optimize for reliability |

### Cost Optimization

```
AGGRESSIVE (for hobby/personal):
- Use free tiers aggressively
- Shut down dev resources when not in use
- Share staging environments
- Minimize data transfer

MODERATE (for startup):
- Reserved instances where stable
- Right-size resources
- Monitor and alert on cost spikes

RELAXED (for business):
- Prioritize reliability over cost
- Over-provision for safety
- Focus on optimization later
```

### Free Tier Limits (Reference)

| Provider | Free Tier |
|----------|-----------|
| Neon | 0.5GB storage, 1 compute, branching |
| Redis Cloud | 30MB, 30 connections |
| Cloudflare R2 | 10GB storage, 1M requests |
| GitHub Actions | 2,000 min/month |
| Hetzner | No free tier (but very cheap) |

---

## Compute Sizing

### Starting Points

| Workload | Hetzner Type | vCPU | RAM |
|----------|--------------|------|-----|
| Small API | CX22 | 2 | 4GB |
| Medium API | CX32 | 4 | 8GB |
| Background Jobs | CX22 | 2 | 4GB |
| Database (self-hosted) | CX42 | 8 | 16GB |

### Scaling Indicators

```
Scale UP when:
- CPU consistently > 70%
- Memory consistently > 80%
- Response times degrading
- Queue backlogs growing

Scale OUT when:
- Single instance can't handle load
- Need redundancy
- Geographic distribution needed
```

---

## Database Guidelines

### PostgreSQL (Neon)

```
- Use connection pooling (PgBouncer built-in)
- Enable auto-scaling for production
- Use branches for testing migrations
- Monitor connection count
```

### Migrations

```
- Always use migration files (never manual DDL)
- Test on branch before production
- Keep migrations reversible when possible
- Review for locking (big tables)
```

### Backups

```
- Neon: Automatic point-in-time recovery
- Self-hosted: Daily backups + WAL archiving
- Test restore procedure quarterly
```

---

## Deployment

### Deployment Checklist

```
[ ] Tests pass
[ ] Security review done
[ ] Database migrations tested on branch
[ ] Environment variables set
[ ] Monitoring in place
[ ] Rollback plan ready
```

### Deployment Pattern

```
1. Deploy to staging
2. Run smoke tests
3. Deploy to production (off-peak)
4. Monitor for 30 minutes
5. Celebrate or rollback
```

### Zero-Downtime Deploys

```
- Use rolling deployments
- Database migrations must be backward-compatible
- Feature flags for risky changes
- Health checks configured
```

---

## Monitoring

### Essential Metrics

```
- Request latency (p50, p95, p99)
- Error rate
- CPU/Memory utilization
- Database connections
- Queue depth (if applicable)
```

### Alerting

```
CRITICAL (page immediately):
- Service down
- Error rate > 5%
- Database connection failures

WARNING (check within hours):
- Latency p95 > 1s
- CPU > 80% sustained
- Disk > 80%
```

---

## Security Infrastructure

### Network

```
- VPC/private networking for internal services
- Firewall rules: deny by default
- No public database access
- Use bastion/VPN for admin access
```

### TLS/SSL

```
- HTTPS everywhere (no exceptions)
- Minimum TLS 1.2
- Let's Encrypt for certificates
- Auto-renewal configured
```

---

## Notes

```
[Add project-specific infrastructure notes here]
```

---

**Last Updated**: [Date]
**Updated By**: [Name/Claude]
