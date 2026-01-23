# KomplyOne Website — Design Concepts

> Three design directions for the new komply.one, inspired by Polestar and Northvolt.

---

## Design Brief

### Current Site (Squarespace)
- Swedish-language corporate site
- Services: ISO 27001, DORA compliance consulting
- Key message: "Compliance för dig som inte har en oändlig budget"
- Mix of product + consulting positioning

### New Direction
- **Light theme** (departure from dark product sites)
- **Scaled down** — fewer pages, simpler structure
- **Premium Nordic aesthetic** — Polestar/Northvolt inspired
- **English primary** (Swedish optional)

### Brand Family Colors
| Product | Primary Color |
|---------|---------------|
| Recoger | Cyan (#06b6d4) |
| Velador | Amber (#f59e0b) |
| **KomplyOne** | **TBD** — parent brand needs its own identity |

---

## Concept A: "Polestar Minimal"

**Inspiration**: Polestar's stark contrast and dramatic whitespace

### Color Palette
```
Background:    #ffffff (pure white)
Text Primary:  #0a0a0a (near black)
Text Secondary:#737373 (neutral gray)
Accent:        #1a1a1a (charcoal) — for buttons/CTAs
Highlight:     #06b6d4 (cyan) — subtle brand connection
```

### Typography
- **Headlines**: 64-80px, semibold, tight tracking (-0.02em)
- **Body**: 18px, regular, generous line-height (1.7)
- **Font**: System stack (clean, fast-loading)

### Layout Characteristics
- **Massive whitespace** — 200px+ section margins
- **Full-width hero** with minimal text (6-8 words max)
- **Asymmetric layouts** — text left, imagery right
- **No visible containers** — content floats in space
- **Sticky minimal nav** — logo + hamburger only

### Homepage Structure
```
┌─────────────────────────────────────────────────────┐
│  KomplyOne                              ≡           │  ← Minimal nav
├─────────────────────────────────────────────────────┤
│                                                     │
│                                                     │
│           Security. Compliance.                     │
│           Done right.                               │  ← Hero (centered)
│                                                     │
│           [Learn more ↓]                            │
│                                                     │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  We build tools and provide expertise               │
│  for companies who take security seriously.         │  ← Single statement
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  ┌─────────────┐        ┌─────────────┐            │
│  │   Recoger   │        │   Velador   │            │  ← Product cards
│  │   Endpoint  │        │     GRC     │            │
│  │   →         │        │     →       │            │
│  └─────────────┘        └─────────────┘            │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  ISO 27001 Consulting                               │
│  ─────────────────────────                          │  ← Services
│  Implementation support for                          │
│  startups and scale-ups.                            │
│                                                     │
│  [Talk to us]                                       │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  Stockholm, Sweden                    info@...      │  ← Footer
│                                                     │
└─────────────────────────────────────────────────────┘
```

### Pros
- Maximum elegance and premium feel
- Very fast to build (minimal components)
- Bold, confident brand statement

### Cons
- May feel too sparse for consulting credibility
- Little room for detailed service information

---

## Concept B: "Northvolt Professional"

**Inspiration**: Northvolt's balance of minimalism and substance

### Color Palette
```
Background:    #fafafa (warm white)
Surface:       #ffffff (cards/containers)
Text Primary:  #171717 (rich black)
Text Secondary:#525252 (warm gray)
Accent:        #0d9488 (teal) — professional, trustworthy
Border:        #e5e5e5 (subtle dividers)
```

### Typography
- **Headlines**: 48-56px, medium weight, standard tracking
- **Body**: 17px, regular, comfortable line-height (1.6)
- **Overlines**: 12px, uppercase, letter-spacing 0.1em

### Layout Characteristics
- **Card-based sections** — content in subtle containers
- **Generous padding** — 120-160px section margins
- **Underline hover effects** — on links (Northvolt signature)
- **Grid-based product showcase**
- **Professional nav** — full menu visible on desktop

### Homepage Structure
```
┌─────────────────────────────────────────────────────┐
│  KomplyOne        Products  Consulting  About       │  ← Full nav
├─────────────────────────────────────────────────────┤
│                                                     │
│  COMPLIANCE TOOLS & CONSULTING                      │  ← Overline
│                                                     │
│  Building security that                             │
│  works for people.                                  │  ← Hero headline
│                                                     │
│  We create tools and provide expertise for          │
│  companies who want compliance done right.          │
│                                                     │
│  [Our Products]  [Consulting]                       │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  ┌─────────────────────────────────────────────┐   │
│  │  PRODUCTS                                    │   │
│  │                                              │   │
│  │  ┌──────────────┐  ┌──────────────┐         │   │
│  │  │ ◯ Recoger    │  │ ⬡ Velador    │         │   │  ← Product grid
│  │  │              │  │              │         │   │
│  │  │ Device &     │  │ GRC          │         │   │
│  │  │ SaaS         │  │ Platform     │         │   │
│  │  │ compliance   │  │              │         │   │
│  │  │              │  │              │         │   │
│  │  │ Learn more → │  │ Learn more → │         │   │
│  │  └──────────────┘  └──────────────┘         │   │
│  └─────────────────────────────────────────────┘   │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  CONSULTING                                         │
│  ─────────────────                                  │
│                                                     │
│  ISO 27001 implementation support                   │
│  for startups and scale-ups.                        │  ← Services section
│                                                     │
│  We don't just hand you documents.                  │
│  We help you build a security program               │
│  that actually works.                               │
│                                                     │
│  ✓ Gap analysis                                     │
│  ✓ Policy development                               │
│  ✓ Implementation support                           │
│  ✓ Audit preparation                                │
│                                                     │
│  [Get in touch]                                     │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  Based in Stockholm, Sweden.                        │  ← Footer
│  info@komply.one                                    │
│                                                     │
└─────────────────────────────────────────────────────┘
```

### Pros
- Good balance of elegance and information
- Professional credibility for consulting
- Room to grow content over time

### Cons
- More complex to build
- May feel less distinctive

---

## Concept C: "Bold Statement"

**Inspiration**: Combining Polestar drama with Northvolt's green tones

### Color Palette
```
Background:    #ffffff (pure white)
Hero BG:       #f5f5f4 (warm stone)
Text Primary:  #0c0a09 (warm black)
Text Secondary:#78716c (stone gray)
Accent:        #0f172a (slate 900) — deep, authoritative
Highlight:     #059669 (emerald) — for success/trust signals
```

### Typography
- **Headlines**: 72px, bold, very tight tracking (-0.03em)
- **Body**: 18px, light weight, airy
- **Contrast**: Heavy headlines, light body

### Layout Characteristics
- **Hero with background color** — not pure white
- **Statement-first design** — lead with philosophy
- **Minimal navigation** — only essentials
- **Hover underlines** — simple interactions
- **Two-column about section**

### Homepage Structure
```
┌─────────────────────────────────────────────────────┐
│                                                     │
│  KomplyOne                              Contact     │  ← Ultra-minimal nav
│                                                     │
├─────────────────────────────────────────────────────┤
│░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
│░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
│░░░                                             ░░░░│
│░░░  Compliance for                             ░░░░│
│░░░  companies who                              ░░░░│  ← Hero (warm bg)
│░░░  give a damn.                               ░░░░│
│░░░                                             ░░░░│
│░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
│░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
├─────────────────────────────────────────────────────┤
│                                                     │
│  We're not another compliance                       │
│  checkbox factory.                                  │
│                                                     │
│  We build tools and provide consulting for          │  ← Philosophy
│  companies who want security that works —           │
│  not just security theater.                         │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  Products              Consulting                   │
│  ─────────             ──────────                   │
│                                                     │
│  Recoger               ISO 27001                    │  ← Two columns
│  Device compliance     Implementation               │
│  that helps, not       that actually                │
│  controls.             works.                       │
│                                                     │
│  Velador               DORA                         │
│  GRC that makes        Digital resilience           │
│  sense.                for finance.                 │
│                                                     │
│  [Explore →]           [Talk to us →]               │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  Stockholm · info@komply.one                        │  ← Minimal footer
│                                                     │
└─────────────────────────────────────────────────────┘
```

### Pros
- Strong brand personality
- Memorable and distinctive
- Clear philosophy-first positioning

### Cons
- Edgier tone may not suit all clients
- Less conventional structure

---

## Recommendation

I suggest **Concept B (Northvolt Professional)** as the starting point because:

1. **Balanced approach** — professional enough for consulting credibility, modern enough for product company
2. **Scalable** — easy to add content sections as needed
3. **Light theme** — matches your request while maintaining sophistication
4. **Brand consistency** — teal accent bridges between cyan (Recoger) and amber (Velador)

However, we could **hybrid elements**:
- Take the **dramatic whitespace** from Concept A
- Use the **warm stone background** for hero from Concept C
- Keep the **underline hover effects** from Northvolt

---

## Site Structure (All Concepts)

Simplified from current site:

```
komply.one/
├── /                  # Homepage (products + consulting overview)
├── /contact           # Contact form
└── /legal
    ├── /privacy       # Privacy policy
    └── /terms         # Terms of service
```

**Removed** (moved to product sites):
- Detailed product pages → recoger.co, velador.app
- Detailed service pages → simplified on homepage
- Swedish language → English only for now

---

## Next Steps

1. **Choose a concept** (or hybrid direction)
2. **Confirm color palette** — especially the accent color
3. **I'll build the site** in Astro + Tailwind

Which direction resonates with you?
