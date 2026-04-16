# Adaptation Living Site Perfection — Design Spec

**Date:** 2026-04-16
**Owner:** Brandon Bible, Adaptation Living LLC
**Goal:** Transform adaptationliving.com into a 100% SEO-scoring, high-converting sales machine for Adaptation OS (white-labeled GoHighLevel SaaS platform).

---

## 1. Brand Identity Update

### Color System
Replace the current dark-black (#0a0a0a) + red-orange (#e74c3c) palette with:

| Token | Current | New | Usage |
|-------|---------|-----|-------|
| `--color-bg-dark` | `#0a0a0a` (black) | `#0B1D3A` (dark navy) | Headers, hero sections, footer |
| `--color-bg-cream` | N/A | `#FDF6EC` (warm cream) | Content-heavy reading sections |
| `--color-bg-card` | `rgba(20,20,20,0.75)` | `rgba(11,29,58,0.85)` | Card backgrounds on dark sections |
| `--color-bg-card-cream` | N/A | `rgba(253,246,236,0.95)` | Card backgrounds on cream sections |
| `--color-accent` | `#e74c3c` (red-orange) | `#D4AF37` (gold) | Primary accent, CTAs, highlights |
| `--color-accent-glow` | `rgba(231,76,60,0.15)` | `rgba(212,175,55,0.2)` | Glow effects |
| `--color-gold` | `#d4af37` | `#D4AF37` | Stays — now promoted to primary accent |
| `--color-gold-glow` | `rgba(212,175,55,0.4)` | `rgba(212,175,55,0.4)` | Stays |
| `--color-text-main` | `#ffffff` | `#ffffff` (on dark) / `#0B1D3A` (on cream) | Context-dependent |
| `--color-text-muted` | `#cccccc` | `#B8C4D4` (on dark) / `#4A5568` (on cream) | Muted text |
| `--color-text-dim` | `#aaaaaa` | `#8899AA` (on dark) / `#718096` (on cream) | Dim text |
| `--color-glass-border` | `rgba(255,255,255,0.1)` | `rgba(212,175,55,0.15)` | Glass morphism borders |
| `--color-primary` | `#ffffff` | `#ffffff` | Primary text on dark |

### Typography
- **Display font:** CINZEL (keep — serif, weights 400/600/700)
- **Body font:** Inter (keep — sans-serif, weights 300/400/600/700)
- No changes to font loading or configuration.

### Layout Strategy
- **Dark navy sections:** Hero, header, footer, showcase demos, CTA blocks
- **Cream sections:** Pricing tables, feature comparisons, FAQ, process steps, content-heavy areas
- **Transitions:** Use gold gradient dividers between dark and cream sections

---

## 2. Pricing Structure

### Tier Model: Base + Add-Ons + User Caps

All tiers include the FULL platform (CRM, AI Voice, AI Chat, Content AI, Workflows, Calendar, Reputation, Payments, Mobile App, Ad Manager). Tiers differentiate on **user count, setup depth, and support level**.

#### Starter
| | Setup (Done-For-You) | DIY (Self-Serve) |
|--|---------------------|------------------|
| Setup Fee | $1,500 | None |
| Monthly | $194.90/mo | $349.90/mo |
| Users | 3 included | 3 included |
| Credits | $100 | $50 |
| Support | Standard | Standard |
| Snapshot | Basic (CRM, pipeline, calendar, follow-up, review automation, Content AI) | Same (auto-loaded) |

#### Growth
| | Setup (Done-For-You) | DIY (Self-Serve) |
|--|---------------------|------------------|
| Setup Fee | $2,500 | None |
| Monthly | $394.90/mo | $597.90/mo |
| Users | 5 included | 5 included |
| Credits | $100 | $50 |
| Support | Priority | Priority |
| Snapshot | Everything in Starter + industry-specific workflows, AI agent tuning, custom reporting dashboard | Same (auto-loaded) |

#### Scale
| | Setup (Done-For-You) | DIY (Self-Serve) |
|--|---------------------|------------------|
| Setup Fee | $5,000 | None |
| Monthly | $694.90/mo | $997.90/mo |
| Users | 10 included | 10 included |
| Credits | $100 | $50 |
| Support | Dedicated contact | Dedicated contact |
| Snapshot | Everything in Growth + multi-location config, custom API integrations, team training, advanced workflow architecture | Same (auto-loaded) |

#### Universal
- Additional users: $50/mo per person (all tiers)
- Referral program: 1 month free + $100 credits per converted referral

#### Lead Feature (All Tiers)
**"Advanced Content AI — Powered by Claude"**
> Help your business get recognized on the biggest stages in the world.

---

## 3. SEO Critical Fixes

### CRITICAL (Must fix)
1. **Home page h1** — "We Build the Systems That Run Your Business" has no geo/service keywords. Change to include "Phoenix", "AI automation", or "business operating system."
2. **AI page meta description** — 189 chars, must be ≤160.
3. **Zero aria-labels site-wide** — Add to nav, footer links, icon links, form elements.
4. **Contact page missing LocalBusiness schema** — Most important page for local SEO.
5. **Showcase page "Next.js 14"** — Update to "Next.js 16".
6. **No visible breadcrumb UI** — Add rendered breadcrumbs, not just JSON-LD.

### WARNING (Should fix)
7. Home page meta description 131 chars — expand to 150-160.
8. Contact page meta description 117 chars — expand.
9. Intake page meta description 133 chars — expand.
10. No visible breadcrumb UI on any page.
11. All pages share same OG image — create page-specific images.
12. Missing internal links: home→showcase, home→intake, showcase→ai, contact→services.
13. Services page: "pricing" absent from h1/first paragraph.
14. AI page: "Phoenix" missing from h1 and first paragraph.
15. Nav needs `aria-label` attribute.
16. Nav not responsive (uses text-[10px] instead of hamburger).
17. Showcase meta description missing geo keyword.
18. Services table missing `scope` on `<th>` elements.
19. Footer LinkedIn icon has no accessible text.

---

## 4. Content Strategy

### Keyword Targets (High Value)
**Primary:** AI automation Phoenix AZ, business operating system, AI automation services, CRM automation Phoenix, small business AI, veteran-owned web development Phoenix

**Secondary:** AI phone answering service, AI chat agent for business, automated follow-up system, review management automation, business workflow automation, AI content generation for business

**Long-tail:** best CRM for small business Phoenix, AI receptionist for small business, missed call text back service, business automation platform Phoenix AZ, all-in-one business software

### Content Approach
Every feature described as **problem → solution → outcome**, not technical specs:
- LC Phone → "Answer every call, even at 2 AM"
- Conversation AI → "Respond in seconds, on every channel"
- Content AI → "Show up on Google without writing a word"
- Workflows → "Your follow-up runs while you sleep"
- Calendar → "Leads book themselves"
- Reputation → "Turn happy customers into 5-star reviews on autopilot"
- Ad Manager → "Launch ads without leaving your dashboard"
- Online Listings → "Your business listed on 70+ directories automatically"

---

## 5. SEO Prospecting Tool

### Implementation
- GHL form widget embedded on the site
- Fields: First Name (required), Last Name (required), Phone (required), Email (required), Website (required)
- Heading: "Get Your Free SEO & Marketing Report In Seconds"
- Styled: cream form background (#FDF6EC), navy text (#0B1D3A), white inputs, gold button (#D4AF37), navy button text

### Lead Flow
1. Prospect enters their website URL
2. Form submits to GHL
3. GHL workflow triggers: capture lead, run audit, send report
4. Lead enters prospecting pipeline
5. Brandon follows up with personalized demo

---

## 6. Social Media Strategy (Zero Budget)

### Brand Consistency
- All social posts use navy (#0B1D3A) + gold (#D4AF37) + cream (#FDF6EC) palette
- CINZEL for headlines on graphics
- Inter for body text on graphics
- Consistent logo placement

### Content Engine
- Content AI generates posts from site content
- GHL Social Planner schedules across platforms
- Each website page generates derivative social content
- Weekly cadence: 3-5 posts minimum

### Prospecting Integration
- SEO tool results shared as case studies (anonymized)
- Building marquee businesses as warm prospect demos
- LinkedIn content targeting Phoenix business owners

---

## 7. Image Optimization (Partially Complete)

### Done
- 6 unused images deleted (1.85MB freed)
- al-hq-daytime.png converted to WebP (2MB → 159KB)

### Remaining
- Update code references from .png to .webp for building photo
- Create page-specific OG images (1200x630) for each page
- Compress al-linkedin-banner.png if needed
- Consider creating navy/gold branded banner.jpg replacement

---

## 8. Technical Requirements

### Preserve
- Next.js 16 / React 19 / Tailwind v4 stack
- Turbo monorepo structure
- i18n (EN/ES) with next-intl
- All existing JSON-LD structured data
- GHL integrations (chat widget, calendar embed, form embed)
- Analytics (GTM, GA4, Meta Pixel, Clarity)

### Do Not Touch
- /apps other than web-next (ai-playground, three-r3f, perf-svelte, tools-astro, vanilla-fundamentals)
- Package internals (@al/auth, @al/db, @al/payments) unless directly needed
- Git history or branch structure
