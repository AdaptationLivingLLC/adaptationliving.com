# Adaptation Living Site Perfection — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform adaptationliving.com into a perfectly SEO-optimized, high-converting sales site for Adaptation OS with navy+gold+cream branding, restructured pricing, and embedded SEO prospecting tool.

**Architecture:** Six independent workstreams that can be parallelized. Workstream 1 (Design System) should run first as other workstreams depend on the new color tokens. Workstreams 2-6 can run in parallel after Workstream 1 completes.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS v4, TypeScript, next-intl (i18n)

**Spec:** `docs/superpowers/specs/2026-04-16-site-perfection-design.md`

---

## Workstream 1: Design System — Color + Theme Transition

### Task 1.1: Update CSS Design Tokens

**Files:**
- Modify: `packages/ui/src/tailwind.css`

- [ ] **Step 1: Update all CSS custom properties**

Replace the `@theme` color block with the new navy+gold+cream system:

```css
--color-bg-dark: #0B1D3A;
--color-bg-cream: #FDF6EC;
--color-bg-card: rgba(11, 29, 58, 0.85);
--color-bg-card-strong: rgba(11, 29, 58, 0.95);
--color-bg-card-cream: rgba(253, 246, 236, 0.95);
--color-glass-border: rgba(212, 175, 55, 0.15);
--color-primary: #ffffff;
--color-accent: #D4AF37;
--color-accent-glow: rgba(212, 175, 55, 0.2);
--color-gold: #D4AF37;
--color-gold-glow: rgba(212, 175, 55, 0.4);
--color-text-main: #ffffff;
--color-text-muted: #B8C4D4;
--color-text-dim: #8899AA;
--color-cream-text-main: #0B1D3A;
--color-cream-text-muted: #4A5568;
--color-cream-text-dim: #718096;
```

- [ ] **Step 2: Add cream section utility classes**

Add to the utility layer in the same file:

```css
.section-cream {
  background-color: var(--color-bg-cream);
  color: var(--color-cream-text-main);
}

.section-cream .text-muted {
  color: var(--color-cream-text-muted);
}

.section-cream .text-dim {
  color: var(--color-cream-text-dim);
}

.section-dark {
  background-color: var(--color-bg-dark);
  color: var(--color-text-main);
}

.divider-gold {
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--color-gold), transparent);
}
```

- [ ] **Step 3: Update glass morphism utilities**

Update `.glass` and `.glass-strong` to use navy-based backgrounds instead of black:

```css
.glass {
  background-color: var(--color-bg-card);
  backdrop-filter: blur(12px);
  border: 1px solid var(--color-glass-border);
}

.glass-strong {
  background-color: var(--color-bg-card-strong);
  backdrop-filter: blur(12px);
  border: 1px solid var(--color-glass-border);
}
```

- [ ] **Step 4: Verify Tailwind processes new tokens**

Run: `cd apps/web-next && pnpm dev`
Expected: Dev server starts without CSS errors. Open browser and confirm background is navy, not black.

- [ ] **Step 5: Commit**

```bash
git add packages/ui/src/tailwind.css
git commit -m "feat: update design tokens to navy+gold+cream system"
```

---

### Task 1.2: Update Manifest and SVG Logo

**Files:**
- Modify: `apps/web-next/public/manifest.json`
- Modify: `apps/web-next/public/images/adaptation-seal-icon.svg`

- [ ] **Step 1: Update manifest.json colors**

Change `background_color` from `#0a0a0a` to `#0B1D3A` and `theme_color` from `#e74c3c` to `#D4AF37`.

- [ ] **Step 2: Update SVG logo colors**

In `adaptation-seal-icon.svg`:
- Replace `#0a0a0a` fill with `#0B1D3A`
- Replace `#e74c3c` stroke with `#D4AF37`
- Keep `#ffffff` text and circle strokes

- [ ] **Step 3: Commit**

```bash
git add apps/web-next/public/manifest.json apps/web-next/public/images/adaptation-seal-icon.svg
git commit -m "feat: update manifest and SVG logo to navy+gold"
```

---

### Task 1.3: Update Home Page Colors

**Files:**
- Modify: `apps/web-next/src/app/[locale]/page.tsx`

- [ ] **Step 1: Replace all hardcoded background colors**

Find and replace in the file:
- `#0a0a0a` → `#0B1D3A`
- `#050505` → `#091529`
- All `rgba(10,10,10,...)` → `rgba(11,29,58,...)`
- All `rgba(0,0,0,...)` in gradients → `rgba(11,29,58,...)`

- [ ] **Step 2: Replace all red-orange accent references**

Find and replace:
- All `rgba(231,76,60,...)` → `rgba(212,175,55,...)` (gold equivalent at same opacity)
- Any remaining `#e74c3c` → `#D4AF37`

- [ ] **Step 3: Convert appropriate sections to cream backgrounds**

The following sections should use cream backgrounds with dark navy text:
- Pain points grid section
- Pricing tiers section
- "How We Work" process section
- FAQ section

For each, wrap content in a `section-cream` container and change text classes:
- `text-white` → `text-[#0B1D3A]`
- `text-white/XX` → `text-[#0B1D3A]/XX`
- `border-white/XX` → `border-[#0B1D3A]/XX`
- Glass cards on cream sections: use `bg-white/80` with `border-[#D4AF37]/15`

- [ ] **Step 4: Add gold gradient dividers between dark and cream sections**

Between each dark→cream and cream→dark transition, add:

```tsx
<div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
```

- [ ] **Step 5: Visual verification**

Run dev server and verify:
- Hero section: dark navy background, gold accents
- Pain points: cream background, navy text, gold highlights
- Services/worlds: dark navy
- Pricing: cream background
- How We Work: cream background
- FAQ: cream background
- CTA footer: dark navy

- [ ] **Step 6: Commit**

```bash
git add apps/web-next/src/app/[locale]/page.tsx
git commit -m "feat: home page — navy+gold+cream color scheme"
```

---

### Task 1.4: Update Services Page Colors

**Files:**
- Modify: `apps/web-next/src/app/[locale]/services/page.tsx`

- [ ] **Step 1: Replace all hardcoded colors (same pattern as Task 1.3)**

- `#0a0a0a` → `#0B1D3A`
- `rgba(231,76,60,...)` → `rgba(212,175,55,...)`
- `#e74c3c` → `#D4AF37`

- [ ] **Step 2: Convert pricing sections to cream**

Both self-serve and done-for-you pricing cards should sit on cream backgrounds. Feature comparison table on cream. "Find Your Fit" section on cream.

- [ ] **Step 3: Visual verification and commit**

```bash
git add apps/web-next/src/app/[locale]/services/page.tsx
git commit -m "feat: services page — navy+gold+cream color scheme"
```

---

### Task 1.5: Update AI Page Colors

**Files:**
- Modify: `apps/web-next/src/app/[locale]/ai/page.tsx`

- [ ] **Step 1: Replace all hardcoded colors (same pattern)**

- [ ] **Step 2: Convert pricing/comparison sections to cream**

The "What You'd Pay Anywhere Else vs. What You Pay Us" section and billing explanation should be cream.

- [ ] **Step 3: Visual verification and commit**

```bash
git add apps/web-next/src/app/[locale]/ai/page.tsx
git commit -m "feat: AI page — navy+gold+cream color scheme"
```

---

### Task 1.6: Update Showcase Page Colors

**Files:**
- Modify: `apps/web-next/src/app/[locale]/showcase/page.tsx`
- Modify: `apps/web-next/src/components/showcase/three-demo.tsx`
- Modify: `apps/web-next/src/components/showcase/perf-demo.tsx`

- [ ] **Step 1: Replace hardcoded colors in showcase page**

- [ ] **Step 2: Update Three.js demo colors**

In `three-demo.tsx`:
- Replace `#e74c3c` (hover color) → `#C9952B` (darker gold for contrast)
- Keep `#d4af37` as primary (already gold)
- Update point light colors to match

In `perf-demo.tsx`:
- Replace color array `["#d4af37", "#e74c3c", "#ffffff", "#d4af37", "#e74c3c"]` → `["#D4AF37", "#FDF6EC", "#ffffff", "#B8941F", "#D4AF37"]` (gold + cream palette)

- [ ] **Step 3: Visual verification and commit**

```bash
git add apps/web-next/src/app/[locale]/showcase/page.tsx apps/web-next/src/components/showcase/three-demo.tsx apps/web-next/src/components/showcase/perf-demo.tsx
git commit -m "feat: showcase page + demos — navy+gold+cream"
```

---

### Task 1.7: Update Contact, Intake, Legal Pages + Navbar + Footer

**Files:**
- Modify: `apps/web-next/src/app/[locale]/contact/page.tsx`
- Modify: `apps/web-next/src/app/[locale]/intake/page.tsx`
- Modify: `apps/web-next/src/app/[locale]/legal/page.tsx`
- Modify: `packages/ui/src/components/navbar.tsx`
- Modify: `apps/web-next/src/app/[locale]/layout.tsx`

- [ ] **Step 1: Update navbar background**

In `navbar.tsx`, change any `#0a0a0a` or black gradient references to navy. The navbar should be dark navy with gold accent on hover states.

- [ ] **Step 2: Update footer**

In `layout.tsx`, update footer background to dark navy, gold accent on links.

- [ ] **Step 3: Update contact page**

Replace colors. The contact info section (phone, email, office) should be cream. The booking calendar section should be dark navy.

- [ ] **Step 4: Update intake page**

Replace colors. Form section on cream background.

- [ ] **Step 5: Update legal page**

Full cream background with navy text for readability (it's a long-read page).

- [ ] **Step 6: Visual verification of all pages and commit**

```bash
git add packages/ui/src/components/navbar.tsx apps/web-next/src/app/[locale]/layout.tsx apps/web-next/src/app/[locale]/contact/page.tsx apps/web-next/src/app/[locale]/intake/page.tsx apps/web-next/src/app/[locale]/legal/page.tsx
git commit -m "feat: contact/intake/legal/navbar/footer — navy+gold+cream"
```

---

### Task 1.8: Update Email Template Colors

**Files:**
- Modify: `packages/mail/src/index.ts`

- [ ] **Step 1: Replace all email template inline colors**

- `#0a0a0a` → `#0B1D3A`
- `#111` → `#0F2847`
- `#222` → `#162D50`
- `#e74c3c` references → `#D4AF37`
- `#c9c9c9` → `#B8C4D4`
- `#7a7a7a` → `#8899AA`
- Keep `#D4AF37` gold as-is

- [ ] **Step 2: Commit**

```bash
git add packages/mail/src/index.ts
git commit -m "feat: email templates — navy+gold color scheme"
```

---

### Task 1.9: Update Building Photo Reference

**Files:**
- Modify: `apps/web-next/src/app/[locale]/page.tsx`
- Modify: `apps/web-next/src/app/[locale]/contact/page.tsx`

- [ ] **Step 1: Update image references from .png to .webp**

In both files, find references to `al-hq-daytime.png` and change to `al-hq-daytime.webp`.

- [ ] **Step 2: Delete the old PNG**

```bash
rm apps/web-next/public/images/al-hq-daytime.png
```

- [ ] **Step 3: Visual verification — building photo renders crisp**

- [ ] **Step 4: Commit**

```bash
git add apps/web-next/src/app/[locale]/page.tsx apps/web-next/src/app/[locale]/contact/page.tsx
git commit -m "feat: use optimized WebP building photo, remove 2MB PNG"
```

---

## Workstream 2: SEO Critical Fixes

### Task 2.1: Fix Home Page H1 and Meta Description

**Files:**
- Modify: `apps/web-next/src/app/[locale]/page.tsx`

- [ ] **Step 1: Update the h1 tag**

Change from:
```
We Build the Systems That Run Your Business
```
To:
```
AI Automation & Business Operating Systems — Phoenix, AZ
```

Keep the subtitle/tagline as supporting text below the h1:
```
Veteran-owned AI automation studio. We build the CRM, website, AI agents, and workflows that run your business on one platform.
```

- [ ] **Step 2: Expand meta description to 155 chars**

Current (131 chars): "Veteran-owned AI automation studio in Phoenix, AZ. Web development, CRM setup, AI agents & workflow automation for small businesses."

New (~158 chars): "Veteran-owned AI automation studio in Phoenix, AZ. CRM, AI agents, workflow automation, and custom web development for small businesses. Adaptation Living LLC."

- [ ] **Step 3: Commit**

```bash
git add apps/web-next/src/app/[locale]/page.tsx
git commit -m "fix(seo): add keywords to home h1, expand meta description"
```

---

### Task 2.2: Fix AI Page Meta Description

**Files:**
- Modify: `apps/web-next/src/app/[locale]/ai/page.tsx`

- [ ] **Step 1: Shorten meta description from 189 to ≤160 chars**

Current (189 chars): "AI phone answering, chat agents, automated follow-up, review management, and content generation for your business. One monthly price, everything included. Adaptation Living LLC, Phoenix AZ."

New (~157 chars): "AI phone answering, chat agents, automated follow-up, and review management for your business. One price, everything included. Adaptation Living, Phoenix AZ."

- [ ] **Step 2: Add "Phoenix" to first paragraph content**

- [ ] **Step 3: Commit**

```bash
git add apps/web-next/src/app/[locale]/ai/page.tsx
git commit -m "fix(seo): shorten AI page meta description, add Phoenix to content"
```

---

### Task 2.3: Add Aria Labels Site-Wide

**Files:**
- Modify: `packages/ui/src/components/navbar.tsx`
- Modify: `apps/web-next/src/app/[locale]/layout.tsx`
- Modify: `apps/web-next/src/app/[locale]/page.tsx`
- Modify: `apps/web-next/src/app/[locale]/services/page.tsx`
- Modify: `apps/web-next/src/app/[locale]/contact/page.tsx`
- Modify: `apps/web-next/src/app/[locale]/intake/page.tsx`

- [ ] **Step 1: Add aria-label to nav element**

In `navbar.tsx`, add `aria-label="Main navigation"` to the `<nav>` element.

- [ ] **Step 2: Add aria-label to footer LinkedIn icon**

In `layout.tsx`, find the LinkedIn icon `<a>` tag and add:
```tsx
<a href="..." aria-label="Follow Adaptation Living LLC on LinkedIn">
  <Linkedin className="w-6 h-6" />
</a>
```

- [ ] **Step 3: Add aria-labels to all icon-only links**

Audit every page for `<a>` tags containing only icons (Lucide components). Each must have an `aria-label` describing the destination/action.

- [ ] **Step 4: Add scope to table headers on services page**

In `services/page.tsx`, add `scope="col"` to all `<th>` elements in comparison tables.

- [ ] **Step 5: Add accessible name to GHL iframe embeds**

In `contact/page.tsx` and `intake/page.tsx`, add `title` attribute to GHL embed iframes:
```tsx
<iframe title="Book a discovery call with Adaptation Living" ... />
<iframe title="Start your project with Adaptation Living" ... />
```

- [ ] **Step 6: Commit**

```bash
git add packages/ui/src/components/navbar.tsx apps/web-next/src/app/[locale]/layout.tsx apps/web-next/src/app/[locale]/page.tsx apps/web-next/src/app/[locale]/services/page.tsx apps/web-next/src/app/[locale]/contact/page.tsx apps/web-next/src/app/[locale]/intake/page.tsx
git commit -m "fix(a11y): add aria-labels, table scope, iframe titles site-wide"
```

---

### Task 2.4: Add LocalBusiness Schema to Contact Page

**Files:**
- Modify: `apps/web-next/src/app/[locale]/contact/page.tsx`

- [ ] **Step 1: Add LocalBusiness JSON-LD**

Add a `<script type="application/ld+json">` block with:

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Adaptation Living LLC",
  "alternateName": "Adaptation OS",
  "url": "https://adaptationliving.com",
  "telephone": "+1-623-219-1237",
  "email": "admin@adaptationliving.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "3030 N Central Ave Suite 507",
    "addressLocality": "Phoenix",
    "addressRegion": "AZ",
    "postalCode": "85012",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 33.4842,
    "longitude": -112.074
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    "opens": "09:00",
    "closes": "17:00"
  },
  "priceRange": "$194.90-$997.90/mo",
  "image": "https://adaptationliving.com/images/al-hq-daytime.webp",
  "founder": {
    "@type": "Person",
    "name": "Brandon Bible",
    "jobTitle": "CEO"
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add apps/web-next/src/app/[locale]/contact/page.tsx
git commit -m "fix(seo): add LocalBusiness schema to contact page"
```

---

### Task 2.5: Fix Showcase Inaccuracy + Add Internal Links

**Files:**
- Modify: `apps/web-next/src/app/[locale]/showcase/page.tsx`
- Modify: `apps/web-next/src/app/[locale]/page.tsx`
- Modify: `apps/web-next/src/app/[locale]/contact/page.tsx`

- [ ] **Step 1: Fix "Next.js 14" → "Next.js 16"**

In `showcase/page.tsx`, find the reference to "Next.js 14" in the Custom Web Architecture section and update to "Next.js 16".

- [ ] **Step 2: Add internal links to showcase page**

Add link to /ai page in the AI Chat Agent and AI Voice Receptionist sections:
```tsx
<Link href="/ai" className="text-gold underline">See all AI systems →</Link>
```

- [ ] **Step 3: Add showcase and intake links to home page body**

In the services/worlds section of `page.tsx`, add contextual links:
```tsx
<Link href="/showcase">See live demos →</Link>
<Link href="/intake">Start your project →</Link>
```

- [ ] **Step 4: Add contextual links to contact page**

Add "Not ready to call?" section with links:
```tsx
<Link href="/services">View pricing & plans →</Link>
<Link href="/ai">Explore AI systems →</Link>
<Link href="/showcase">See live demos →</Link>
```

- [ ] **Step 5: Commit**

```bash
git add apps/web-next/src/app/[locale]/showcase/page.tsx apps/web-next/src/app/[locale]/page.tsx apps/web-next/src/app/[locale]/contact/page.tsx
git commit -m "fix(seo): fix Next.js version, add missing internal links"
```

---

### Task 2.6: Add Visible Breadcrumbs Component

**Files:**
- Create: `apps/web-next/src/components/breadcrumbs.tsx`
- Modify: `apps/web-next/src/app/[locale]/services/page.tsx`
- Modify: `apps/web-next/src/app/[locale]/showcase/page.tsx`
- Modify: `apps/web-next/src/app/[locale]/ai/page.tsx`
- Modify: `apps/web-next/src/app/[locale]/contact/page.tsx`
- Modify: `apps/web-next/src/app/[locale]/intake/page.tsx`
- Modify: `apps/web-next/src/app/[locale]/legal/page.tsx`

- [ ] **Step 1: Create breadcrumbs component**

```tsx
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  name: string;
  path?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="navbar-offset pt-4 px-6 max-w-7xl mx-auto">
      <ol className="flex items-center gap-2 text-sm font-body">
        <li>
          <Link href="/" className="text-gold hover:text-gold/80 transition-colors" aria-label="Home">
            <Home className="w-4 h-4" />
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={item.name} className="flex items-center gap-2">
            <ChevronRight className="w-3 h-3 text-text-dim" />
            {item.path && i < items.length - 1 ? (
              <Link href={item.path} className="text-text-muted hover:text-gold transition-colors">
                {item.name}
              </Link>
            ) : (
              <span className="text-text-main">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
```

- [ ] **Step 2: Add breadcrumbs to all sub-pages**

At the top of each page (below the navbar offset), add:

Services: `<Breadcrumbs items={[{ name: "Pricing & Plans" }]} />`
Showcase: `<Breadcrumbs items={[{ name: "Showcase" }]} />`
AI: `<Breadcrumbs items={[{ name: "AI Systems" }]} />`
Contact: `<Breadcrumbs items={[{ name: "Contact" }]} />`
Intake: `<Breadcrumbs items={[{ name: "Start Your Project" }]} />`
Legal: `<Breadcrumbs items={[{ name: "Legal" }]} />`

- [ ] **Step 3: Visual verification — breadcrumbs appear on all sub-pages**

- [ ] **Step 4: Commit**

```bash
git add apps/web-next/src/components/breadcrumbs.tsx apps/web-next/src/app/[locale]/services/page.tsx apps/web-next/src/app/[locale]/showcase/page.tsx apps/web-next/src/app/[locale]/ai/page.tsx apps/web-next/src/app/[locale]/contact/page.tsx apps/web-next/src/app/[locale]/intake/page.tsx apps/web-next/src/app/[locale]/legal/page.tsx
git commit -m "feat(seo): add visible breadcrumb navigation to all sub-pages"
```

---

### Task 2.7: Expand Short Meta Descriptions + Fix Services H1

**Files:**
- Modify: `apps/web-next/src/app/[locale]/contact/page.tsx`
- Modify: `apps/web-next/src/app/[locale]/intake/page.tsx`
- Modify: `apps/web-next/src/app/[locale]/services/page.tsx`
- Modify: `apps/web-next/src/app/[locale]/showcase/page.tsx`

- [ ] **Step 1: Expand contact meta description (117→~155)**

New: "Contact Adaptation Living LLC in Phoenix, AZ. Call 623-219-1237, email us, or book a free discovery call. AI automation, CRM, and web development for small businesses."

- [ ] **Step 2: Expand intake meta description (133→~155)**

New: "Start your project with Adaptation Living LLC. AI automation, CRM setup, web development, and workflow automation for small businesses in Phoenix, AZ. Free discovery call."

- [ ] **Step 3: Add "pricing" to services h1 and first paragraph**

Change h1 from "The Operating System For Your Business." to "The Operating System For Your Business — Plans & Pricing"

Add "pricing" naturally to the first paragraph of body content.

- [ ] **Step 4: Add "Phoenix AZ" to showcase meta description**

New (~159): "See the technology running live. 3D graphics, AI integrations, and custom web architecture — all built by Adaptation Living LLC in Phoenix, AZ. Live demos, real systems."

- [ ] **Step 5: Commit**

```bash
git add apps/web-next/src/app/[locale]/contact/page.tsx apps/web-next/src/app/[locale]/intake/page.tsx apps/web-next/src/app/[locale]/services/page.tsx apps/web-next/src/app/[locale]/showcase/page.tsx
git commit -m "fix(seo): expand meta descriptions, add pricing keyword to services"
```

---

## Workstream 3: Pricing Page Restructure

### Task 3.1: Rewrite Services Page With New Tier Structure

**Files:**
- Modify: `apps/web-next/src/app/[locale]/services/page.tsx`

- [ ] **Step 1: Replace the existing self-serve pricing section**

Remove the current Starter ($297), Growth ($597), Scale ($1,197) cards. Replace with the new structure:

**DIY (Self-Serve) Section — "You Run The Platform"**

Three cards side by side:

| | Starter | Growth | Scale |
|--|---------|--------|-------|
| Monthly | $349.90 | $597.90 | $997.90 |
| Users | 3 | 5 | 10 |
| Credits | $50 | $50 | $50 |
| Support | Standard | Priority | Dedicated |
| CTA | "Get Started" → Stripe | "Get Started" → Stripe | "Get Started" → Stripe |

Additional users: $50/mo each (note below cards)

- [ ] **Step 2: Replace the existing done-for-you pricing section**

Remove current managed tiers. Replace with:

**Setup (Done-For-You) Section — "We Build And Run It For You"**

Three cards:

| | Starter Setup | Growth Setup | Scale Setup |
|--|--------------|-------------|-------------|
| Setup Fee | $1,500 | $2,500 | $5,000 |
| Monthly | $194.90 | $394.90 | $694.90 |
| Users | 3 | 5 | 10 |
| Credits | $100 | $100 | $100 |
| Support | Standard | Priority | Dedicated |
| Setup Includes | Contact import, domain, API keys, social linking, basic snapshot | Everything in Starter + industry workflows, AI tuning, custom reporting | Everything in Growth + multi-location, custom API integrations, team training |
| CTA | "Book Setup Call" → /intake | "Book Setup Call" → /intake | "Book Setup Call" → /intake |

- [ ] **Step 3: Add "What Every Plan Includes" section**

Full-width section on cream background listing all platform features with outcome-based descriptions:

- CRM & Pipeline — "Your command center for every lead and deal"
- AI Phone Receptionist — "Answer every call, even at 2 AM"
- AI Chat Agent — "Respond in seconds on every channel"
- Content AI (Powered by Claude) — "Show up on Google without writing a word"
- Email & SMS Marketing — "Reach your audience instantly"
- Calendar Booking — "Leads book themselves"
- Website & Funnel Builder — "Your online presence, built in"
- Workflow Automation — "Your follow-up runs while you sleep"
- Reputation Management — "5-star reviews on autopilot"
- Ad Manager — "Launch ads without leaving your dashboard"
- Invoicing & Payments — "Get paid faster"
- Branded Mobile App — "Run everything from your phone"

- [ ] **Step 4: Add referral program section**

Small callout block:
"Refer a business. Get 1 month free + $100 in credits when they sign up."

- [ ] **Step 5: Add "How Credits Work" explainer**

Brief section explaining credits cover AI calls, SMS, email campaigns, content generation, review responses. Usage-based billing kicks in after credits are used. Transparent — they see every charge in their dashboard.

- [ ] **Step 6: Update Stripe links (placeholder until Brandon configures SaaS Configurator)**

For DIY tiers, link to Stripe checkout (URLs TBD from SaaS Configurator setup).
For Setup tiers, link to /intake.

- [ ] **Step 7: Visual verification and commit**

```bash
git add apps/web-next/src/app/[locale]/services/page.tsx
git commit -m "feat: restructure pricing page — Starter/Growth/Scale × Setup/DIY"
```

---

### Task 3.2: Update Services Page Structured Data

**Files:**
- Modify: `apps/web-next/src/app/[locale]/services/page.tsx`

- [ ] **Step 1: Update Service schema offers**

Replace existing 3 offer objects with 6 (one per plan variant):

```json
{
  "@type": "Offer",
  "name": "Starter DIY",
  "price": "349.90",
  "priceCurrency": "USD",
  "priceSpecification": { "@type": "UnitPriceSpecification", "billingDuration": "P1M" }
}
```

Repeat for all 6 plans (Starter/Growth/Scale × Setup/DIY).

- [ ] **Step 2: Commit**

```bash
git add apps/web-next/src/app/[locale]/services/page.tsx
git commit -m "fix(seo): update structured data with new pricing offers"
```

---

## Workstream 4: Content Optimization

### Task 4.1: Rewrite Home Page Content for Keywords + Conversion

**Files:**
- Modify: `apps/web-next/src/app/[locale]/page.tsx`

- [ ] **Step 1: Optimize hero section**

Below the new h1, add keyword-rich subtitle:
"Adaptation Living LLC is a veteran-owned AI automation studio in Uptown Phoenix. We replace your disconnected software with one integrated business operating system — CRM, AI agents, automated workflows, reputation management, and a conversion-optimized website — all on one platform."

- [ ] **Step 2: Rewrite pain points with keyword-rich headings**

Each pain point h3 should contain a target keyword:
- "Missed Calls Cost You Customers" → mention "AI phone answering"
- "Slow Follow-Up Kills Deals" → mention "automated follow-up"
- "Disconnected Software Wastes Time" → mention "all-in-one CRM"
- "Your Website Isn't Converting" → mention "conversion-optimized website"
- "Poor Online Reviews Hurt Trust" → mention "reputation management"
- "Nobody Can Find You Online" → mention "local SEO" and "online listings"

- [ ] **Step 3: Rewrite services/worlds section with outcome language**

Each world card heading and description should use the outcome-based language from the spec.

- [ ] **Step 4: Update FAQ content with keyword-rich answers**

Each FAQ answer should naturally include 2-3 target keywords.

- [ ] **Step 5: Update CTA section**

"Ready to run your business on one system? Adaptation OS replaces 8+ subscriptions with a single platform. AI agents, CRM, automated workflows, and more — starting at $194.90/mo with setup or $349.90/mo self-serve."

- [ ] **Step 6: Visual verification — all content reads naturally, not keyword-stuffed**

- [ ] **Step 7: Commit**

```bash
git add apps/web-next/src/app/[locale]/page.tsx
git commit -m "feat: optimize home page content for SEO keywords + conversion"
```

---

### Task 4.2: Optimize AI Page Content

**Files:**
- Modify: `apps/web-next/src/app/[locale]/ai/page.tsx`

- [ ] **Step 1: Add Phoenix to h1 area**

Add "in Phoenix, AZ" to the subtitle or first paragraph.

- [ ] **Step 2: Ensure every AI feature section includes target keywords**

- AI Phone Receptionist: "AI phone answering service", "never miss a call"
- AI Chat Agent: "AI chat agent for business", "respond in seconds"
- Automated Follow-Up: "automated follow-up system", "lead nurturing"
- Review Management: "AI review management", "reputation automation"
- Content Creation: "AI content generation", "Content AI powered by Claude"

- [ ] **Step 3: Commit**

```bash
git add apps/web-next/src/app/[locale]/ai/page.tsx
git commit -m "feat: optimize AI page content for SEO keywords"
```

---

## Workstream 5: SEO Prospecting Tool

### Task 5.1: Create SEO Prospecting Section on Home Page

**Files:**
- Modify: `apps/web-next/src/app/[locale]/page.tsx`
- Modify: `apps/web-next/src/components/ghl-embed.tsx`

- [ ] **Step 1: Add prospecting section to home page**

Add a new section (cream background) between the showcase cards and pricing:

```tsx
<section className="section-cream py-20">
  <div className="max-w-4xl mx-auto px-6 text-center">
    <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0B1D3A] mb-4">
      Get Your Free SEO & Marketing Report In Seconds
    </h2>
    <p className="text-[#4A5568] text-lg mb-10 max-w-2xl mx-auto">
      Enter your website and we'll analyze your online presence — SEO score, listing consistency, review health, and missed opportunities. Free, instant, no commitment.
    </p>
    <div className="max-w-xl mx-auto">
      <GhlEmbed
        formId="YOUR_FORM_ID_HERE"
        height={480}
        className="rounded-xl shadow-lg"
      />
    </div>
  </div>
</section>
```

Note: Brandon needs to create the form in GHL and provide the form ID. The form fields are: First Name (required), Last Name (required), Phone (required), Email (required), Website (required).

- [ ] **Step 2: Style the GHL form widget**

In GHL form builder, apply these settings:
- Form Color: `#FDF6EC`
- Font Color: `#0B1D3A`
- Input Background: `#FFFFFF`
- Button Color: `#D4AF37`
- Button Text Color: `#0B1D3A`
- Font: Inter
- Font Size: 16px
- Button Text: "Get My Free Report"

- [ ] **Step 3: Commit**

```bash
git add apps/web-next/src/app/[locale]/page.tsx
git commit -m "feat: add SEO prospecting tool section to home page"
```

---

## Workstream 6: Responsive Navigation

### Task 6.1: Add Mobile Hamburger Menu

**Files:**
- Modify: `packages/ui/src/components/navbar.tsx`

- [ ] **Step 1: Add mobile menu state and hamburger button**

Import `Menu` and `X` from lucide-react. Add state for mobile menu open/close.

```tsx
"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

// Inside component:
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
```

- [ ] **Step 2: Add hamburger button visible only on mobile**

```tsx
<button
  className="md:hidden text-white"
  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
  aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
  aria-expanded={mobileMenuOpen}
>
  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
</button>
```

- [ ] **Step 3: Create mobile menu overlay**

```tsx
{mobileMenuOpen && (
  <div className="fixed inset-0 top-[72px] z-40 bg-[#0B1D3A]/98 backdrop-blur-md md:hidden">
    <nav className="flex flex-col items-center gap-6 pt-12 font-display text-lg tracking-wider uppercase">
      <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-gold transition-colors">Home</Link>
      <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-gold transition-colors">Services</Link>
      <Link href="/showcase" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-gold transition-colors">Showcase</Link>
      <Link href="/ai" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-gold transition-colors">AI</Link>
      <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-gold transition-colors">Contact</Link>
      <a href="https://app.adaptationliving.com" className="text-gold hover:text-gold/80 transition-colors">Sign In</a>
      <Link href="/intake" onClick={() => setMobileMenuOpen(false)} className="bg-gold text-[#0B1D3A] px-6 py-3 rounded font-bold hover:bg-gold/90 transition-colors">Start Project</Link>
    </nav>
  </div>
)}
```

- [ ] **Step 4: Hide desktop nav links on mobile**

Add `hidden md:flex` to the desktop navigation link container.

- [ ] **Step 5: Visual verification on mobile viewport (375px width)**

- [ ] **Step 6: Commit**

```bash
git add packages/ui/src/components/navbar.tsx
git commit -m "feat: add responsive mobile hamburger menu"
```

---

## Execution Order

```
Workstream 1 (Design System) ──→ MUST COMPLETE FIRST
    │
    ├── Workstream 2 (SEO Fixes) ──→ can run in parallel ─┐
    ├── Workstream 3 (Pricing)   ──→ can run in parallel ──┤
    ├── Workstream 4 (Content)   ──→ can run in parallel ──┤── All merge to main
    ├── Workstream 5 (Prospecting)──→ can run in parallel ─┤
    └── Workstream 6 (Mobile Nav) ──→ can run in parallel ─┘
```

**Estimated commits:** 18
**Files touched:** ~20
**New files:** 1 (breadcrumbs.tsx)
