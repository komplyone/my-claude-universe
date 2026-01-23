# Recoger Website

> Marketing website for the Recoger product.

---

## Overview

The Recoger Website is the public-facing marketing site at `recoger.co`. It provides product information, pricing, documentation, and access to the app.

**Repo:** `recoger-website`
**Status:** In Development
**Domain:** recoger.co (target)

---

## Technology Stack

| Layer | Technology | Notes |
|-------|------------|-------|
| Framework | Astro | Static-first, fast |
| Styling | Tailwind CSS | Consistent with products |
| Components | React (islands) | Interactive elements |
| Hosting | Cloudflare Pages | Edge deployment |
| CMS | Markdown / MDX | Content management |

---

## Site Structure

```
recoger.co/
├── /                    # Homepage
├── /features            # Feature overview
├── /pricing             # Pricing plans
├── /security            # Security & compliance
├── /docs                # Documentation
│   ├── /getting-started
│   ├── /desktop-agent
│   ├── /api-reference
│   └── /faq
├── /blog                # News and updates
├── /about               # Company info
├── /contact             # Contact form
├── /login               # Redirect to app
└── /legal
    ├── /privacy
    └── /terms
```

---

## Key Pages

### Homepage
- Hero with value proposition
- Key features overview
- Social proof / testimonials
- CTA to get started

### Features
- Device monitoring capabilities
- Compliance frameworks supported
- Integration options
- Agent features by platform

### Pricing
- Clear tier comparison
- Feature matrix
- FAQ section
- CTA for each tier

### Security
- Data handling practices
- EU data residency
- Compliance certifications
- Security architecture

### Documentation
- Getting started guide
- Agent installation
- API documentation
- Troubleshooting

---

## Design Guidelines

### Visual Identity
- Clean, professional aesthetic
- Dark mode primary
- KomplyOne brand colors
- Clear typography hierarchy

### Content Voice
- Professional but approachable
- Technical but accessible
- Direct and honest
- Focus on value, not hype

### UI Patterns
- Consistent with app design
- Mobile-first responsive
- Accessible (WCAG 2.1 AA)
- Fast loading (<3s LCP)

---

## Technical Requirements

### Performance
- Static generation for all content pages
- Image optimization
- Minimal JavaScript
- CDN edge caching

### SEO
- Semantic HTML
- Meta tags and Open Graph
- Sitemap generation
- Structured data (JSON-LD)

### Analytics
- Privacy-respecting (Plausible or similar)
- Conversion tracking
- No third-party trackers
- GDPR compliant

---

## Content Strategy

### Blog Topics
- Security best practices
- Compliance framework guides
- Product updates
- Industry news analysis

### Documentation
- Step-by-step guides
- Reference documentation
- Video tutorials (planned)
- API examples

---

## Integration Points

| Integration | Purpose |
|-------------|---------|
| App login | Redirect to app.recoger.co |
| Documentation | Links to /docs |
| Support | Contact form, help links |
| Status page | Link to status.recoger.co |

---

## Development Phases

### Phase 1: MVP (Current)
- Homepage
- Basic pricing page
- Contact form
- Legal pages

### Phase 2: Documentation
- Getting started guide
- Agent documentation
- API reference
- FAQ

### Phase 3: Content
- Blog setup
- Feature deep-dives
- Case studies
- Security page

---

## Deployment

- Build: Astro static build
- Host: Cloudflare Pages
- CDN: Cloudflare (automatic)
- CI/CD: GitHub Actions

---

*For brand guidelines, see `universe/identity.md`*
