# Handoff

## State
I redesigned adaptationliving.com — navy (#0B1D3A) + gold (#D4AF37) + cream gradient backgrounds. Restructured pricing to Starter/Growth/Scale × Setup/DIY tiers. Added breadcrumbs, aria-labels, LocalBusiness schema, mobile hamburger nav, SEO keyword-optimized content. CLAUDE.md with full GHL/Adaptation OS reference is at repo root. An agent is currently fixing text sizes, spacing, and cream backgrounds across ALL pages (services, ai, showcase, contact, intake, legal, home) — those changes are NOT yet committed. GHL prospecting widget iframe embed is on the home page but may not render correctly — needs the right embed URL from Brandon's GHL account.

## Next
1. Commit and push the all-pages visual fix agent's changes (text sizes, cream backgrounds, spacing) — verify build passes first
2. Fix the SEO prospecting tool — Brandon needs to provide the correct GHL iframe/embed URL since the script version renders as a floating bubble, not inline
3. Brandon is extremely frustrated with the site quality — every page needs to look polished and professional before any more features. Take screenshots and verify visually before pushing.

## Context
- Brandon's Vercel deploys from GitHub main branch automatically. Build failed twice due to missing breadcrumbs.tsx and Stripe API version mismatch — both fixed now.
- Brandon views at 110% zoom on a Chromebook — desktop nav breakpoint was lowered from md to sm to compensate. Text sizes that look fine at 100% are massive for him.
- Brandon has a locked Vercel account (different GitHub) with customer domains he can't access. Separate issue, unresolved.
- Stripe checkout links are OLD prices ($297/$597/$1,197) — need new products created in GHL SaaS Configurator for the new prices ($349.90/$597.90/$997.90).
- Credits are ONE-TIME included at signup, NOT monthly. He was very clear about this.
- No Co-Authored-By, no Claude attribution, no placeholders, no phases — read CLAUDE.md for full rules.
