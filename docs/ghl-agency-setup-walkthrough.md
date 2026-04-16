# GoHighLevel Agency Setup Walkthrough
## Adaptation OS — Adaptation Living LLC

**Account:** Agency Pro (SaaS Mode) — $497/mo  
**White-Label Domain:** app.adaptationliving.com  
**Owner:** Brandon — Adaptation Living LLC  
**Last Updated:** April 15, 2026

---

## Table of Contents

1. [Agency Account Foundation](#1-agency-account-foundation)
2. [Stripe Connection](#2-stripe-connection)
3. [SaaS Configurator](#3-saas-configurator)
4. [LC Phone System](#4-lc-phone-system)
5. [LC Email System](#5-lc-email-system)
6. [AI Employee](#6-ai-employee)
7. [Reselling Configuration](#7-reselling-configuration)
8. [Sales Funnel Setup](#8-sales-funnel-setup)
9. [Notification Workflows](#9-notification-workflows)
10. [Snapshot Creation](#10-snapshot-creation)
11. [Referral Program](#11-referral-program)
12. [Final Verification Checklist](#12-final-verification-checklist)

---

## Pricing Reference

| Plan | Setup Fee | Monthly | Users | Credits/mo |
|------|-----------|---------|-------|------------|
| Starter Setup | $1,500 | $194.90 | 3 | $100 |
| Starter DIY | — | $349.90 | 3 | $50 |
| Growth Setup | $2,500 | $394.90 | 5 | $100 |
| Growth DIY | — | $597.90 | 5 | $50 |
| Scale Setup | $5,000 | $694.90 | 10 | $100 |
| Scale DIY | — | $997.90 | 10 | $50 |
| Additional Users | — | $50/user | — | — |
| Referral Reward | — | 1 mo free | — | $100 credits |

---

## 1. Agency Account Foundation

### 1.1 White-Label Login Domain

**Where:** Agency View → Settings → Company → White Label Domain

**What to do:**
1. Navigate to **Agency Settings** (top-left agency switcher → Settings).
2. Click **Company** in the left sidebar.
3. Scroll to **White Label Domain** (sometimes labeled "App Domain" or "SaaS Domain").
4. Enter: `app.adaptationliving.com`
5. GHL will display the DNS record you need — a CNAME pointing `app` to GHL's infrastructure (typically `app.msgsndr.com` or similar — use what GHL shows you, not this document).
6. In your DNS provider (Cloudflare, Namecheap, etc.), add that CNAME record with TTL set to Auto or 300s.
7. Return to GHL and click **Verify Domain**. Allow up to 24 hours for DNS propagation, but it usually resolves in under 30 minutes.

**Why it matters:** This is what your clients see when they log in. Without it, they land on GoHighLevel-branded pages, exposing your reseller relationship and undercutting the white-label experience.

**Done looks like:** The domain shows a green checkmark. Navigating to `app.adaptationliving.com` loads the GHL login screen with no GoHighLevel branding visible.

**Common mistakes:**
- Adding `https://` in the domain field — enter the bare domain only (`app.adaptationliving.com`).
- Cloudflare proxy (orange cloud) causing SSL certificate conflicts — set the DNS record to DNS-only (gray cloud) until verified.
- Forgetting to verify after DNS propagates — GHL does not auto-verify.

---

### 1.2 API Domain

**Where:** Agency View → Settings → Company → API Domain

**What to do:**
1. In the same Company settings screen, locate **API Domain**.
2. Enter: `api.adaptationliving.com` (or your preferred subdomain — common choices are `api.`, `hooks.`, or `backend.`).
3. Create a CNAME DNS record pointing `api` (or your chosen subdomain) to GHL's API endpoint shown on screen.
4. Verify via the GHL interface.

**Why it matters:** Webhooks, Zapier triggers, custom integrations, and white-labeled developer access all route through this domain. Without it, API calls and webhook URLs expose the underlying GHL infrastructure.

**Done looks like:** Green verification checkmark. Webhook URLs generated inside client sub-accounts use your domain prefix.

**Common mistakes:**
- Using the same subdomain as your login domain — they must be different subdomains.
- Skipping this step if you don't plan to use the API immediately — it's significantly harder to change later once client integrations are live.

---

### 1.3 Logo and Branding

**Where:** Agency View → Settings → Company → Branding

**What to do:**
1. Upload your **Agency Logo** (displayed in the top-left of the dashboard for all sub-accounts). Recommended: PNG, transparent background, 200×60px or wider aspect ratio.
2. Upload your **Favicon** (16×16 or 32×32 px ICO or PNG). This appears in browser tabs.
3. Set your **Primary Color** to match your Adaptation OS brand hex code.
4. Set your **Secondary Color** for button accents and highlights.
5. Save and hard-refresh (Ctrl+Shift+R) to verify colors apply.

**Why it matters:** Every client sub-account will display your branding. An unbranded or default GHL logo destroys the white-label illusion immediately.

**Done looks like:** Dashboard shows your logo in the top-left. Browser tab shows your favicon. Color scheme matches your brand. No GHL logos visible to sub-account users.

**Common mistakes:**
- Uploading a logo that's too small and appears blurry at high-DPI screens — use at least 400×120px source file.
- Forgetting the favicon — clients notice the GHL rocket favicon immediately.
- Not setting brand colors — the default GHL blue will bleed through in buttons and links.

---

### 1.4 Company Information

**Where:** Agency View → Settings → Company → General

**What to do:**
Fill out every field:
- **Business Name:** Adaptation Living LLC
- **Business Address:** Your full business address
- **Business Phone:** Your agency phone number
- **Website:** `https://adaptationliving.com`
- **Time Zone:** Your local time zone
- **Support Email:** Your support email (this appears in system-generated emails to clients)
- **Industry:** Marketing Agency (or closest match)

**Why it matters:** This information populates system emails, invoices, and legal footers sent from GHL on your behalf. Incomplete fields result in blank or broken email footers.

**Done looks like:** All fields populated. No placeholder text visible.

**Common mistakes:**
- Leaving support email as a personal address — use a professional support alias like support@adaptationliving.com.
- Using a PO Box as primary address if your state requires a physical address for LLC registration visibility.

---

### 1.5 Custom Email Domain for System Emails

**Where:** Agency View → Settings → Email Services → SMTP / Sending Domain

**What to do:**
1. Navigate to **Agency Settings → Email Services**.
2. Under **From Email Domain**, enter your domain (e.g., `adaptationliving.com`).
3. GHL will provide SPF, DKIM, and DMARC DNS records.
4. Add all three records to your DNS provider:
   - **SPF:** A TXT record on `@` (or your root domain). If one already exists, add GHL's include value to it — you can only have one SPF record.
   - **DKIM:** A TXT record on the GHL-specified subdomain (usually something like `ghl._domainkey`).
   - **DMARC:** A TXT record on `_dmarc`. If one exists, adjust the policy — do not create a duplicate.
5. After DNS propagates, return to GHL and click **Verify**.
6. Set your **From Name** to "Adaptation OS" and **From Email** to something like `hello@adaptationliving.com` or `support@adaptationliving.com`.

**Why it matters:** Without a custom sending domain, emails sent from GHL (appointment confirmations, invoices, workflow emails) arrive from a generic GHL domain, flagging your white-label setup to clients and landing in spam.

**Done looks like:** All three DNS records show green verification checkmarks in GHL. Test email arrives in inbox (not spam) showing your from address and domain.

**Common mistakes:**
- Adding a duplicate SPF record — this immediately breaks email deliverability for your entire domain.
- Forgetting DMARC — emails may pass SPF/DKIM but still be flagged without a DMARC policy.
- Using `p=reject` in DMARC before verifying all sending sources are authenticated — use `p=none` first, then graduate to `p=quarantine`, then `p=reject`.

---

## 2. Stripe Connection

### 2.1 Agency-Level Stripe Connect

**Where:** Agency View → Settings → Payments → Stripe Connect

**What to do:**
1. Navigate to **Agency Settings → Payments**.
2. Click **Connect with Stripe**.
3. Log in to your Stripe account (or create one if needed — use your Adaptation Living LLC business details, not personal).
4. Authorize the GHL Stripe Connect application.
5. After connecting, GHL will show your Stripe account name with a green connected indicator.

**Why it matters:** This is what allows GHL to charge your SaaS clients automatically via Stripe. Without Stripe Connect at the agency level, you cannot process SaaS plan subscriptions.

**Done looks like:** Stripe account name shows in green. You can see your Stripe publishable key auto-populated.

**Common mistakes:**
- Connecting a personal Stripe account instead of a business account — Stripe may hold funds or trigger identity verification issues.
- Using a Stripe account already connected to another GHL agency — one Stripe account can only connect to one GHL agency.
- Not completing Stripe's identity verification (KYC) process before expecting payouts.

---

### 2.2 Wallet Setup and Auto-Recharge

**Where:** Agency View → Settings → Billing → Wallet / Credits

**What to do:**
1. Navigate to **Agency Billing** (your own GHL subscription management, not sub-account billing).
2. Find the **Wallet** or **Credits** section.
3. Add a payment method (credit card) to your agency wallet — this funds LC Phone, LC Email, and AI usage.
4. Set **Auto-Recharge** threshold and amount:
   - Recommended: Recharge when balance drops below $25, reload $100.
   - Adjust based on your agency's monthly usage volume.
5. Enable **Auto-Recharge** toggle.

**Why it matters:** LC Phone (SMS/calls), LC Email, and AI features draw from your agency wallet. If your wallet hits $0, client communications stop mid-conversation — a catastrophic client experience failure.

**Done looks like:** Wallet shows a positive balance. Auto-recharge toggle is enabled with threshold and reload amount saved.

**Common mistakes:**
- Setting the recharge threshold too low ($5) — you may hit $0 between recharge triggers during high-volume periods.
- Not adding a backup payment method — if primary card fails, wallet goes to $0.
- Confusing agency wallet (for GHL service costs) with client billing (Stripe for SaaS subscriptions) — they are separate.

---

### 2.3 Smart Adjustment Configuration

**Where:** Agency View → Settings → Payments → Smart Adjustment

**What to do:**
1. In Payments settings, locate **Smart Adjustment** (also called Markup or Rebilling Adjustment in some GHL versions).
2. This is where you configure your markup percentage over GHL's base cost for resold services (LC Phone, LC Email, AI).
3. Set a global markup or configure per-service (recommended):
   - LC Phone SMS: 15–30% markup over GHL cost
   - LC Phone Voice: 15–30% markup
   - LC Email: 20–40% markup
   - AI features: 20–50% markup
4. Review the GHL pricing sheet in your agency dashboard to understand base costs before setting markups.
5. Save.

**Why it matters:** Smart Adjustment ensures every dollar of usage you pass to clients exceeds your cost to GHL, keeping your agency profitable on usage-based billing.

**Done looks like:** Per-service markup percentages are set. When you preview a client rebilling estimate, the client-facing cost is visibly higher than the base cost.

**Common mistakes:**
- Setting a 0% markup — you'll resell at cost and make nothing on usage.
- Setting markups so high (200%+) that clients comparison-shop and find alternatives.
- Failing to communicate your usage costs to clients in your pricing pages, causing billing confusion.

---

## 3. SaaS Configurator

### 3.1 Accessing SaaS Mode

**Where:** Agency View → Settings → SaaS Configurator

**What to do:**
1. Confirm SaaS Mode is enabled on your account (Agency Pro plan includes this by default).
2. Navigate to **Agency Settings → SaaS Configurator**.
3. If you see a prompt to enable SaaS Mode, click Enable and confirm.

---

### 3.2 Creating All Six SaaS Plans

For each plan, go to **SaaS Configurator → Add Plan** and fill out every field as specified below.

---

#### Plan 1: Starter Setup

| Field | Value |
|-------|-------|
| Plan Name | Starter Setup |
| Description | Done-for-you setup + ongoing platform access |
| Setup Fee | $1,500.00 |
| Monthly Price | $194.90 |
| Billing Interval | Monthly |
| Users Included | 3 |
| Additional Users | $50.00/user |
| LC Phone Credits | $100.00/mo included |
| Snapshot | Starter Snapshot (see Section 10) |

**Feature Permissions to Enable:**
- CRM & Contacts
- Pipelines & Opportunities
- Calendar & Appointments
- Email Marketing
- SMS Marketing (LC Phone)
- Automation / Workflows
- Reputation Management (basic)
- Chat Widget
- Forms & Surveys
- Landing Pages (basic funnel builder)

**Feature Permissions to Disable (upgrade triggers):**
- Advanced AI features (reserve for Growth+)
- Online Listings management (reserve for Growth+)
- Advanced reporting
- Social media planner (reserve for Growth+)
- WhatsApp (reserve for Scale)

**Rebilling:** Enable rebilling for LC Phone, LC Email at your markup.

---

#### Plan 2: Starter DIY

| Field | Value |
|-------|-------|
| Plan Name | Starter DIY |
| Description | Self-serve platform access — 3 users |
| Setup Fee | $0.00 |
| Monthly Price | $349.90 |
| Billing Interval | Monthly |
| Users Included | 3 |
| Additional Users | $50.00/user |
| LC Phone Credits | $50.00/mo included |
| Snapshot | Starter Snapshot |

**Feature Permissions:** Same as Starter Setup.

**Note on pricing logic:** DIY plans are priced higher in monthly cost than Setup plans to account for the absence of the one-time setup fee. Over 12 months, a Setup client pays ~$3,839 vs a DIY client paying ~$4,199 — the setup fee client is cheaper long-term, incentivizing higher-ticket one-time revenue.

---

#### Plan 3: Growth Setup

| Field | Value |
|-------|-------|
| Plan Name | Growth Setup |
| Description | Done-for-you setup + full growth toolkit |
| Setup Fee | $2,500.00 |
| Monthly Price | $394.90 |
| Billing Interval | Monthly |
| Users Included | 5 |
| Additional Users | $50.00/user |
| LC Phone Credits | $100.00/mo included |
| Snapshot | Growth Snapshot (see Section 10) |

**Feature Permissions to Enable (additions over Starter):**
- Social Media Planner
- Online Listings
- Advanced Reporting
- Content AI (basic tier)
- Conversation AI (basic)
- Reviews AI

---

#### Plan 4: Growth DIY

| Field | Value |
|-------|-------|
| Plan Name | Growth DIY |
| Description | Self-serve growth platform — 5 users |
| Setup Fee | $0.00 |
| Monthly Price | $597.90 |
| Billing Interval | Monthly |
| Users Included | 5 |
| Additional Users | $50.00/user |
| LC Phone Credits | $50.00/mo included |
| Snapshot | Growth Snapshot |

**Feature Permissions:** Same as Growth Setup.

---

#### Plan 5: Scale Setup

| Field | Value |
|-------|-------|
| Plan Name | Scale Setup |
| Description | Done-for-you setup + enterprise-grade toolkit |
| Setup Fee | $5,000.00 |
| Monthly Price | $694.90 |
| Billing Interval | Monthly |
| Users Included | 10 |
| Additional Users | $50.00/user |
| LC Phone Credits | $100.00/mo included |
| Snapshot | Scale Snapshot (see Section 10) |

**Feature Permissions to Enable (additions over Growth):**
- Voice AI
- WhatsApp Business
- Ad Manager
- Workflow AI
- Funnel AI
- Mobile App access
- Advanced split testing
- Membership / course portal

---

#### Plan 6: Scale DIY

| Field | Value |
|-------|-------|
| Plan Name | Scale DIY |
| Description | Self-serve enterprise platform — 10 users |
| Setup Fee | $0.00 |
| Monthly Price | $997.90 |
| Billing Interval | Monthly |
| Users Included | 10 |
| Additional Users | $50.00/user |
| LC Phone Credits | $50.00/mo included |
| Snapshot | Scale Snapshot |

**Feature Permissions:** Same as Scale Setup.

---

### 3.3 After Creating Each Plan

1. **Attach Stripe product:** GHL will prompt you to sync each plan to Stripe — confirm the sync so Stripe products and prices are created automatically.
2. **Review the generated Stripe Product ID** — save these in a spreadsheet. You'll need them for the sales funnel order forms.
3. **Set upgrade/downgrade paths** — in each plan, configure what happens when a client upgrades (immediate proration) or downgrades (end of billing cycle).
4. **Test with a $1 coupon** — create a test coupon in Stripe, run a test checkout for each plan, then cancel and refund before going live.

**Done looks like:** All 6 plans listed in SaaS Configurator with green Stripe sync indicators. Each plan has the correct price, user limit, credit allocation, snapshot assignment, and feature permissions.

**Common mistakes:**
- Setting user limits to "unlimited" accidentally — this removes a key upgrade lever.
- Forgetting to attach snapshots — new sub-accounts created from SaaS signup will be empty and unbranded without a snapshot.
- Not enabling rebilling on the plan — clients won't be charged for LC Phone/Email usage even though it costs you money.

---

## 4. LC Phone System

### 4.1 LC Phone Activation

**Where:** Agency View → Settings → Phone Numbers → LC Phone

**What to do:**
1. Navigate to **Agency Settings → Phone Numbers**.
2. Click **Enable LC Phone** (Twilio integration is embedded — GHL handles it).
3. Complete the identity verification step (business name, address, EIN if US business).
4. Add funds to your agency wallet to cover phone number provisioning (first number costs ~$1.15/mo).

---

### 4.2 A2P 10DLC Registration

**What it is:** Application-to-Person (A2P) 10-Digit Long Code is the US carrier compliance framework for business SMS. Without registration, your SMS messages will be blocked by carriers.

**Where:** Agency View → Settings → Phone Numbers → A2P Registration

**What to do:**

**Step 1 — Brand Registration:**
1. Navigate to **A2P Registration → Register Brand**.
2. Fill in:
   - **Legal Business Name:** Adaptation Living LLC
   - **Business Type:** Private For-Profit
   - **Business Registration Number (EIN):** Your EIN
   - **Business Address:** Your registered business address
   - **Vertical/Industry:** Marketing
   - **Website:** `https://adaptationliving.com`
   - **Contact Email:** Your business email
   - **Contact Phone:** Your business phone
3. Submit. Brand approval takes 24–72 hours. You'll receive a Brand ID.

**Step 2 — Campaign Registration:**
1. Once Brand is approved, navigate to **Register Campaign**.
2. Fill in:
   - **Use Case:** Mixed (covers most B2B marketing scenarios)
   - **Campaign Description:** "Sending appointment reminders, follow-up messages, review requests, and marketing communications on behalf of local business clients."
   - **Sample Message 1:** "Hi [Name], your appointment with [Business] is confirmed for [Date] at [Time]. Reply STOP to opt out."
   - **Sample Message 2:** "Hi [Name], [Business] wanted to follow up on your recent visit. Did everything meet your expectations? Reply STOP to unsubscribe."
   - **Subscriber Opt-in:** Describe your opt-in process (web form, in-person signup, etc.)
   - **Opt-in message:** Include the standard opt-in language.
   - **Opt-out (STOP) support:** Yes
   - **Help (HELP) support:** Yes
3. Submit. Campaign approval takes 1–5 business days. You'll receive a Campaign ID.

**Step 3 — Number Assignment:**
1. After campaign approval, navigate to **Phone Numbers → Buy Number**.
2. Search for numbers in your preferred area code.
3. Purchase at least one number ($1.15/mo).
4. Assign the number to the approved A2P campaign.

**Why it matters:** As of 2023, US carriers block unregistered A2P SMS at the network level. Your clients' text messages simply won't arrive. A2P registration is not optional.

**Done looks like:** Brand status: Verified. Campaign status: Approved. Phone number shows campaign assignment. Test SMS to your own phone arrives without delay.

**Common mistakes:**
- Registering the brand with informal business name instead of legal entity name — causes verification rejection.
- Using "Marketing" as sole use case — choose "Mixed" for maximum flexibility.
- Not assigning the phone number to the campaign after purchasing — the number must be explicitly linked.
- Agencies who skip this step and launch clients immediately face mass SMS delivery failures within weeks.

---

### 4.3 LC Phone Rebilling Markup

**Where:** Agency View → Settings → Phone Numbers → Rebilling

**What to do:**
1. Navigate to **Agency Settings → Rebilling** or find the rebilling section inside LC Phone settings.
2. Set markups for each LC Phone usage type:
   - **Outbound SMS:** Base cost ~$0.0079/segment → recommend charging $0.010–$0.012/segment (20–50% markup)
   - **Inbound SMS:** Base cost ~$0.0079/segment → recommend $0.010/segment
   - **Outbound Voice:** Base cost ~$0.014/min → recommend $0.018–$0.020/min
   - **Inbound Voice:** Base cost ~$0.0085/min → recommend $0.012/min
   - **MMS:** Base cost ~$0.016 → recommend $0.020–$0.025
   - **Phone Number Rental:** Base cost ~$1.15/mo → recommend $2–3/mo (or include in plan)
3. Save.
4. Verify: Go to a test sub-account, send an SMS, then check the sub-account wallet to confirm it was charged at your markup rate (not GHL's base rate).

**Done looks like:** Rebilling section shows custom rates above GHL base. Test usage shows markup applied on sub-account billing statement.

**Common mistakes:**
- Setting $0 markup — you pay GHL for every client SMS.
- Setting wildly high markups without telling clients — expect billing disputes.
- Forgetting MMS markup — MMS is significantly more expensive than SMS and often overlooked.

---

## 5. LC Email System

### 5.1 LC Email Activation

**Where:** Agency View → Settings → Email Services → LC Email

**What to do:**
1. Navigate to **Agency Settings → Email Services**.
2. Click **Enable LC Email**.
3. GHL will create a default sending infrastructure for your agency.
4. Optionally: Request a dedicated sending IP if your monthly volume will exceed ~100,000 emails/mo. For most agencies, the shared pool is sufficient initially.

---

### 5.2 Sending Domain Configuration

**Where:** Agency View → Settings → Email Services → Sending Domains

**What to do:**
1. Click **Add Sending Domain**.
2. Enter your domain: `adaptationliving.com`
3. GHL displays required DNS records:
   - **SPF** TXT record (add GHL's include to your existing SPF, or create one)
   - **DKIM** TXT record on a GHL-specified selector subdomain
   - **DMARC** TXT record on `_dmarc.adaptationliving.com`
   - **CNAME** for tracking links (usually `link.adaptationliving.com` or similar)
   - **CNAME** for open tracking pixel (usually `open.adaptationliving.com` or similar)
4. Add all records to DNS. Allow propagation.
5. Click **Verify All** in GHL.
6. Set this domain as the **Default Sending Domain**.

**Why it matters:** Authenticated email from your own domain achieves inbox placement rates 3–5x better than generic GHL domains. Clients judge your platform by whether their emails land in the spam folder.

**Done looks like:** All DNS records show verified (green). Test email from a sub-account lands in Gmail Primary, not Promotions or Spam.

**Common mistakes:**
- Not adding the tracking link CNAMEs — email open/click tracking will break.
- Adding duplicate DKIM records if you use another email provider — check existing DNS before adding.
- Omitting DMARC — while not strictly required, modern inbox providers increasingly use DMARC for filtering.

---

### 5.3 Email Verification for Sub-Accounts

**Where:** Sub-Account View → Settings → Email Services

**What to do:**
1. In the template or workflow you use to onboard new sub-accounts, include a step that instructs the client to verify their sending email.
2. When a new sub-account is created, navigate to their **Settings → Email Services** and ensure their from email (e.g., `info@clientbusiness.com`) is verified.
3. GHL sends a verification link to that address — the client clicks it.
4. Alternatively, configure LC Email at the agency level to allow sub-accounts to send from your verified sending domain (`@adaptationliving.com` subdomains) while their own domain is being verified.

**Done looks like:** Sub-account from email shows "Verified" badge. Test campaign from sub-account delivers to inbox.

---

### 5.4 LC Email Rebilling

**Where:** Agency View → Settings → Rebilling → LC Email

**What to do:**
1. Navigate to **Agency Rebilling Settings**.
2. Find LC Email pricing:
   - Base cost: ~$0.00135 per email at standard volume
   - Recommended markup: $0.002/email (48% markup)
3. Set your per-email price and save.
4. Ensure rebilling is enabled on each SaaS plan (done in Section 3).

**Done looks like:** Test sub-account email sends show costs charged to the sub-account at your markup rate.

---

## 6. AI Employee

### 6.1 Content AI

**Where:** Agency View → Settings → AI → Content AI

**What to do:**
1. Navigate to **Agency Settings → AI**.
2. Enable **Content AI**.
3. Set your rebilling price for Content AI word generation (GHL charges per word/token).
4. Enable Content AI on Growth and Scale plans only (SaaS Configurator feature permissions).
5. In sub-accounts, Content AI appears in the Email, Blog, Social Media, and Funnel editors as an AI-assist button.

**Why it matters:** Content AI is one of the most visible, tangible AI features that drives perceived value. Clients who use it stick to the platform.

---

### 6.2 Conversation AI

**Where:** Agency View → Settings → AI → Conversation AI

**What to do:**
1. Enable **Conversation AI** at the agency level.
2. Set rebilling rate (GHL charges per AI-generated message).
3. Enable on Growth and Scale plans.
4. Conversation AI connects to the GHL inbox/chat widget and responds to inbound messages using GPT-backed logic.
5. Encourage clients to train their Conversation AI bot in **Settings → Conversation AI → Training** by adding their:
   - Business name, hours, services
   - FAQs
   - Pricing ranges
   - Booking link

**Configuration note:** Each sub-account configures their own Conversation AI with their own business context. You set the agency-level permission; they manage the content.

---

### 6.3 Voice AI

**Where:** Agency View → Settings → AI → Voice AI

**What to do:**
1. Enable **Voice AI** at the agency level (Scale plans only).
2. Voice AI allows sub-accounts to deploy AI phone agents that can answer calls, qualify leads, and book appointments.
3. Configure rebilling for Voice AI call minutes (separate from LC Phone voice minutes).
4. Ensure Voice AI is enabled only on Scale-tier plans in SaaS Configurator.

**Why it matters:** Voice AI is a premium differentiator. It's the feature that justifies Scale pricing — $694–$997/mo is hard to sell on features alone, but "an AI that answers your phones 24/7" is a clear value proposition.

---

### 6.4 Reviews AI

**Where:** Sub-Account View → Reputation → Reviews AI (enabled by agency plan permissions)

**What to do:**
1. Enable **Reviews AI** on Growth and Scale plans.
2. Reviews AI automatically drafts responses to Google reviews. The sub-account user can approve or modify before posting.
3. Configure the rebilling rate for AI-generated review responses.
4. In sub-accounts, configure via **Reputation → Reviews → AI Response Settings**.

---

### 6.5 Funnel AI

**Where:** Sub-Account View → Funnels → AI Builder (enabled by agency plan permissions)

**What to do:**
1. Enable **Funnel AI** on Scale plans.
2. Funnel AI generates complete funnel page layouts from a text prompt.
3. No additional per-use cost typically — check your agency plan for inclusion.
4. Enable via SaaS Configurator feature permissions on Scale plans.

---

### 6.6 Workflow AI

**Where:** Sub-Account View → Automation → Workflows → AI Step (enabled by agency plan permissions)

**What to do:**
1. Enable **Workflow AI** on Scale plans.
2. Workflow AI adds an AI step inside automation workflows that can classify leads, draft messages, and make branching decisions.
3. Set rebilling rate for Workflow AI API calls.
4. Enable via SaaS Configurator on Scale plans.

---

### 6.7 AI Rebilling Summary

When setting AI rebilling, ensure you've configured rates for each enabled AI service. Navigate to **Agency Settings → Rebilling → AI Features** and set:

| AI Feature | GHL Base Cost | Your Markup | Client Rate |
|------------|--------------|-------------|-------------|
| Content AI (per 1,000 words) | ~$0.02 | 50% | ~$0.03 |
| Conversation AI (per message) | ~$0.005 | 40% | ~$0.007 |
| Voice AI (per minute) | ~$0.05 | 40% | ~$0.07 |
| Reviews AI (per response) | ~$0.01 | 50% | ~$0.015 |
| Workflow AI (per execution) | ~$0.003 | 33% | ~$0.004 |

*Note: GHL base costs change periodically — verify against current GHL pricing in your agency dashboard before setting final rates.*

**Done looks like:** All enabled AI features show active status. Test sub-account can access AI features. Usage charges appear at markup rate, not GHL base rate.

**Common mistakes:**
- Enabling all AI features on Starter plans — removes upgrade motivation.
- Not setting rebilling — AI usage costs you money with every client query.
- Not configuring Conversation AI training in a snapshot — new clients get an AI bot that knows nothing about their business.

---

## 7. Reselling Configuration

### 7.1 Workflow Pro

**Where:** Agency View → Settings → SaaS Configurator → Plan Features

**What to do:**
1. Workflow Pro unlocks advanced automation triggers and actions in GHL (conditional logic, advanced branching, API request steps, etc.).
2. Enable Workflow Pro on Growth and Scale plans.
3. GHL may charge an additional platform fee — check your agency dashboard for current pricing.
4. Toggle Workflow Pro access on in each applicable plan's feature permissions.

---

### 7.2 Online Listings

**Where:** Agency View → Settings → Reselling → Online Listings

**What to do:**
1. Navigate to **Agency Settings → Reselling**.
2. Enable **Online Listings** reselling (powered by Yext/similar — GHL white-labels this).
3. Set your client-facing monthly price. GHL charges ~$30–50/mo per location at wholesale.
4. Common agency markup: $79–149/mo per location.
5. Enable on Growth and Scale plans in SaaS Configurator.
6. In sub-accounts, Online Listings appears under **Reputation → Listings**.

**Why it matters:** Listing management is a recurring pain point for local businesses. Bundling it into Growth/Scale makes your higher tiers dramatically more defensible.

---

### 7.3 WhatsApp Business

**Where:** Agency View → Settings → Reselling → WhatsApp

**What to do:**
1. Navigate to **Agency Settings → Reselling → WhatsApp**.
2. Enable WhatsApp reselling (Scale plan feature).
3. GHL charges a base fee per sub-account with WhatsApp enabled.
4. Clients must have a Facebook Business Manager account and a phone number not already registered to WhatsApp personal.
5. Setup process for each client:
   - Navigate to their sub-account → Settings → Integrations → WhatsApp
   - Click Connect and walk through the Facebook/Meta business verification flow
   - Approve the WhatsApp Business profile
6. Set your monthly markup for WhatsApp access.

---

### 7.4 Ad Manager (Meta/Google Ads)

**Where:** Sub-Account View → Marketing → Ad Manager

**What to do:**
1. Enable **Ad Manager** on Scale plans.
2. Ad Manager allows clients to create and manage Facebook/Instagram and Google ad campaigns from inside GHL.
3. Clients connect their own ad accounts — you don't hold their ad spend.
4. Enable the feature permission in Scale plan SaaS Configurator settings.
5. Optional: Set up as a white-labeled service offering where you manage ads on their behalf for an additional management fee outside GHL.

---

### 7.5 Mobile App (White-Labeled)

**Where:** Agency View → Settings → Mobile App

**What to do:**
1. Navigate to **Agency Settings → Mobile App**.
2. GHL offers a white-labeled mobile app (iOS and Android) for an additional monthly fee (~$497/mo for branded app publishing to app stores).
3. If purchasing the branded app:
   - Submit your app name ("Adaptation OS"), icon, splash screen, and brand colors to GHL.
   - GHL builds and submits to Apple App Store and Google Play under your developer accounts.
   - This takes 2–6 weeks for initial approval.
4. If not purchasing the branded app at launch, clients use the **LeadConnector** app (GHL-branded) — acceptable for early clients, but plan to upgrade.
5. Update sub-account mobile app access in SaaS Configurator plan permissions.

**Why it matters:** The mobile app is how your clients manage their CRM on the go. A branded app reinforces your platform identity every time they pick up their phone.

---

### 7.6 Domain Reselling

**Where:** Agency View → Settings → Reselling → Domains

**What to do:**
1. Enable Domain Reselling in Agency Settings if you want clients to purchase domains directly inside GHL.
2. Set your markup over GHL's wholesale domain cost.
3. Alternatively: Manage client domains externally (Cloudflare, Namecheap) and use GHL only for DNS — many agencies prefer this for control.
4. Recommendation: Enable domain purchase for convenience but educate clients that domain management is ultimately their responsibility.

---

## 8. Sales Funnel Setup

### 8.1 Import SaaS Plans to Stripe (Verify Sync)

**Where:** Agency View → Settings → SaaS Configurator → each plan → Stripe Sync

**What to do:**
1. For each of the 6 SaaS plans, verify that a corresponding **Product** and **Price** exists in your Stripe Dashboard.
2. Log into Stripe → Products and confirm:
   - All 6 plans have products with the correct recurring price.
   - Setup fee plans have an additional one-time Price object for the setup fee.
   - Product names match exactly what you want clients to see on their invoice.
3. For setup fee plans, you need TWO Stripe price objects per plan:
   - One-time price: $1,500 / $2,500 / $5,000 (setup fee)
   - Recurring price: $194.90 / $394.90 / $694.90 per month
4. Ensure the Product descriptions are professional — these appear on client invoices.

---

### 8.2 Create the Sales Page

**Where:** Sub-Account View → Sites → Funnels → New Funnel (or use your primary Adaptation OS website sub-account)

**What to do:**
1. In your primary (agency-facing) sub-account, navigate to **Sites → Funnels → New Funnel**.
2. Name it: "Adaptation OS — Pricing Page"
3. Build a pricing page with:
   - Hero section explaining Adaptation OS
   - Comparison table showing Starter / Growth / Scale tiers
   - Separate sections for Setup vs DIY plans
   - Clear call-to-action buttons for each plan
   - Testimonials section (add as you gather them)
   - FAQ section covering:
     - What is Adaptation OS?
     - How is setup handled?
     - What's included in credits?
     - Can I add more users?
     - What's your refund policy?
4. Set the funnel domain to your sales domain (e.g., `getadaptationos.com` or a subdomain like `join.adaptationliving.com`).

---

### 8.3 Add Order Forms

**What to do:**
For each of the 6 plans, create a dedicated order form step in your funnel:

1. **Funnel Step — Starter Setup Checkout:**
   - Order Form element → connect to Stripe
   - Product: Starter Setup (setup fee $1,500 + recurring $194.90/mo)
   - Bump offer: "Add 1 additional user — $50/mo"
   - After purchase: redirect to onboarding intake form or Calendly booking link

2. **Funnel Step — Starter DIY Checkout:**
   - Order Form → connect to Stripe
   - Product: Starter DIY ($349.90/mo recurring)
   - After purchase: redirect to self-serve onboarding guide URL

3. Repeat for Growth Setup, Growth DIY, Scale Setup, Scale DIY.

**Order Form Best Practices:**
- Collect: First Name, Last Name, Email, Phone, Business Name, Business Website
- These fields populate the GHL sub-account creation automatically
- Add a terms of service checkbox with link to your TOS
- Add a privacy policy checkbox with link to your privacy policy

---

### 8.4 Test Checkout Flow

**What to do:**
1. Create a Stripe coupon code for 100% off (or use Stripe test mode) to test each checkout without charging yourself.
2. Walk through every order form:
   - Fill in test data
   - Complete checkout with Stripe test card: `4242 4242 4242 4242`, any future expiry, any CVC
   - Verify the sub-account is automatically created in GHL
   - Verify the snapshot is applied
   - Verify the correct plan permissions are active
   - Verify the welcome email fires
3. Cancel each test subscription in Stripe.
4. Delete test sub-accounts in GHL after testing.

**Done looks like:** All 6 checkout flows complete without errors. Sub-accounts are auto-created with correct plan permissions and snapshots attached.

**Common mistakes:**
- Testing in live mode with real credit cards — always use Stripe test mode for initial testing.
- Not testing the post-purchase redirect — clients who purchase and land on a blank page will immediately contact you with confusion.
- Not testing the sub-account auto-creation — sometimes the GHL–Stripe webhook needs to be refreshed.

---

## 9. Notification Workflows

### 9.1 New Signup Notification (Agency Alert)

**Where:** Agency-level Automation or primary sub-account Workflows

**What to do:**
Build a workflow that fires when a new SaaS client signs up:

**Trigger:** New Contact Created (or Stripe webhook: payment_intent.succeeded for SaaS products)

**Actions:**
1. **Send Internal Email to Brandon:**
   - Subject: "New Adaptation OS Signup — [Contact Name]"
   - Body: Name, email, phone, business name, plan purchased, timestamp
2. **Send Internal SMS to Brandon** (optional but recommended for immediate awareness):
   - "New signup: [Name] — [Plan] — [Business]"
3. **Create Task:**
   - Title: "Onboard [Business Name]"
   - Due: 1 business day from signup
   - Assigned to: Brandon (or onboarding team member)

**Trigger Setup in GHL:**
- Navigate to the sub-account used for agency operations → Automation → Workflows → New Workflow
- Trigger: Contact Tag Added (tag = plan name) or Stripe payment webhook
- If using Stripe webhook: Connect via Settings → Integrations → Stripe Webhook or use a Zapier/Make middle layer

---

### 9.2 Onboarding Email Sequence

**Where:** Primary sub-account → Automation → Workflows

**Trigger:** Contact Created (new SaaS client sub-account auto-created)

**Email 1 — Welcome (send immediately):**
```
Subject: Welcome to Adaptation OS, [First Name]!

Hi [First Name],

You're in. Adaptation OS is ready for your business.

Here's how to get started:
1. Log in at app.adaptationliving.com
2. [For Setup clients:] Watch for your onboarding call confirmation from our team.
3. [For DIY clients:] Start with this onboarding guide: [link]

Your login:
Email: [email]
A password reset link has been sent to your inbox.

Need help? Reply to this email or book a call: [Calendly link]

— Brandon
Adaptation Living LLC
```

**Email 2 — Day 3 Check-In:**
```
Subject: Quick check-in — how's Adaptation OS going?

Hi [First Name],

Just checking in — have you had a chance to log into your dashboard?

If you're stuck anywhere, here are the most common first steps:
[Link to onboarding guide step 1]
[Link to onboarding guide step 2]
[Link to FAQ]

Reply to this email if you hit any walls.

— Brandon
```

**Email 3 — Day 7 Value Email:**
```
Subject: The one feature most people miss in Adaptation OS

Hi [First Name],

One week in — congrats for getting started.

The feature most new users overlook is [Conversation AI / Reputation Management / Pipelines — pick the most relevant to your client segment].

Here's a quick walkthrough: [video link or guide link]

Let me know what questions you have.

— Brandon
```

---

### 9.3 Welcome Workflow (Sub-Account Level)

**Where:** Built into the Snapshot (see Section 10)

When each snapshot is applied to a new sub-account, include a pre-built **Welcome Workflow** that:
1. Fires immediately on first contact import (or manual trigger)
2. Sends the sub-account's own welcome message to their leads
3. Sets up their default pipeline stages
4. Creates their first task: "Complete account setup checklist"

This workflow should be pre-configured in the snapshot so every new client sub-account starts with functional automation from day one.

---

## 10. Snapshot Creation

Snapshots are the most leverage-creating thing you can build in GHL. They define the starting state of every new client sub-account. A great snapshot makes onboarding 80% automated. A bad snapshot means hours of manual setup per client.

### 10.1 Snapshot Architecture

Build three snapshots — one per tier. Each builds on the previous.

---

### 10.2 Starter Snapshot

**Name:** Adaptation OS — Starter

**Contains:**

**Pipelines:**
- Lead Pipeline: New Lead → Contacted → Appointment Booked → Won → Lost
- Sales Pipeline: Lead → Proposal Sent → Negotiation → Closed → Lost

**Calendars:**
- "Discovery Call" calendar (15 min, connected to location calendar)
- "Service Appointment" calendar (60 min)

**Contact Tags (pre-set):**
- lead, prospect, client, cold, warm, hot, do-not-contact

**Custom Fields:**
- Lead Source, Lead Score, Service Interest, Referral Name

**Forms:**
- Lead Capture Form (Name, Email, Phone, Service Interest, Message)
- New Client Intake Form (business details, goals, current challenges)
- Appointment Request Form

**Chat Widget:**
- Pre-configured with default greeting: "Hi! How can we help you today?"
- Business hours set (placeholder — client updates)

**Email Templates:**
- Welcome Email
- Appointment Confirmation
- Appointment Reminder (24hr)
- Appointment Reminder (2hr)
- Review Request
- Follow-Up (Day 1, Day 3, Day 7)

**SMS Templates:**
- Appointment Confirmation SMS
- Appointment Reminder SMS
- Review Request SMS
- No-Show Follow-Up SMS

**Workflows (Active):**
- New Lead → Immediate SMS + Email follow-up → 3-day follow-up sequence
- Appointment Booked → Confirmation → 24hr Reminder → 2hr Reminder
- Appointment Complete → Review Request (sent 2 hours after appointment end time)
- New Review Received → Internal notification to business owner

**Workflows (Inactive/Template):**
- Re-engagement Campaign (30-day dormant leads)
- Birthday Message Campaign
- Holiday Campaign

**Reputation Settings:**
- Review request trigger: linked to appointment complete workflow
- Google Business Profile connection prompt

**Dashboard:**
- Default widgets: Lead count, Pipeline value, Appointments this week, Reviews this month, Unread messages

---

### 10.3 Growth Snapshot

**Name:** Adaptation OS — Growth

**Contains everything in Starter Snapshot, plus:**

**Additional Pipelines:**
- Project Pipeline (for service businesses): Scoping → In Progress → Review → Delivered → Invoiced
- Referral Pipeline: Referred → Contacted → Converted → Rewarded

**Social Media:**
- Social Planner configured for Facebook, Instagram, Google Business Profile
- 4-week sample post template library (generic — client personalizes)

**Automation Additions:**
- Monthly Newsletter workflow template
- Post-Sale NPS Survey automation
- Upsell campaign workflow (triggers 30 days after conversion)
- Referral request campaign (triggers 14 days after conversion)
- Lapsed client re-engagement (triggers 90 days of no activity)

**Content AI:**
- Pre-configured for business's industry (configure in onboarding)

**Email Marketing:**
- Newsletter template (branded, placeholder content)
- Promotional email template
- Event announcement template

**Reporting:**
- Sales report automation (weekly email to business owner with performance summary)
- Leads report automation (monthly)

**Conversation AI:**
- Pre-loaded FAQ responses (generic — client must train with their specific information)
- Default handoff trigger: if AI cannot answer after 2 exchanges, assign to human and notify team

---

### 10.4 Scale Snapshot

**Name:** Adaptation OS — Scale

**Contains everything in Growth Snapshot, plus:**

**Additional Automation:**
- Advanced lead scoring workflow (scoring based on engagement, email opens, page visits)
- Multi-location pipeline management (if applicable)
- Team assignment workflow (round-robin lead distribution)
- After-hours Voice AI routing workflow

**Voice AI:**
- Pre-configured call script template
- Call routing workflow: during hours → team; after hours → Voice AI

**Membership/Course Portal:**
- Placeholder course structure (client adds content)
- Member onboarding email sequence

**Advanced Workflows:**
- Referral tracking workflow with automated reward notification
- Loyalty campaign workflow (tracks client tenure, sends anniversary gifts/notes)
- Churn prevention workflow (triggers on payment failure or login inactivity)

**Reporting Dashboards:**
- Executive KPI dashboard (revenue, leads, conversions, review score, response time)
- Team performance dashboard (individual user activity)

---

### 10.5 Creating and Publishing Snapshots

**Where:** Agency View → Snapshots → Create Snapshot

**What to do:**
1. Build the snapshot content inside a dedicated "template" sub-account (not a live client account).
2. Navigate to **Agency View → Snapshots → Create Snapshot**.
3. Select the template sub-account as the source.
4. Choose what to include (select all items you've built — workflows, templates, pipelines, etc.).
5. Name the snapshot exactly: "Adaptation OS — Starter" / "Adaptation OS — Growth" / "Adaptation OS — Scale"
6. Save. The snapshot is now available to attach to SaaS plans.
7. Return to SaaS Configurator and confirm each plan has the correct snapshot attached.

**Snapshot maintenance:** When you update a snapshot, it does NOT auto-update existing client sub-accounts. New clients get the updated snapshot. Existing clients must be manually updated or notified. Keep a changelog.

**Done looks like:** Three snapshots appear in Agency Snapshots list. Each SaaS plan in SaaS Configurator shows its snapshot name. Test sub-account created from each plan inherits the correct pre-built structure.

**Common mistakes:**
- Building snapshots in a live client account and accidentally including client data.
- Creating snapshots with workflows set to Active when they should be Inactive (template) — new client accounts will immediately start sending messages to their contacts on day one with no configuration.
- Forgetting to re-attach updated snapshots to SaaS plans after rebuilding.
- Including calendar availability settings with your own hours — every client will need to change this.

---

## 11. Referral Program

### 11.1 Referral Tracking Setup

**Where:** Agency View → Settings → Referral Program (if available in your plan) OR manual workflow

**Program Terms (per your pricing):**
- Referrer earns: 1 month free + $100 credits when referral converts to paid
- Referred client: no stated incentive (consider adding a new client discount to close deals)

**What to do — GHL Native Referral (if available):**
1. Navigate to **Agency Settings → Affiliate Manager** or **Referral Program**.
2. Enable the referral program.
3. Set commission: 1 month subscription credit + $100 wallet credit.
4. Generate referral links for each client.
5. Clients share their unique referral link; conversions are tracked automatically.

**What to do — Manual Workflow:**
If GHL's native referral tracking doesn't meet your needs, use this workflow:

1. Create a **Referral Contact Form** in your primary sub-account:
   - Fields: Referring Client Name, Referring Client Email, Referred Business Name, Referred Contact Name, Referred Contact Email, Referred Contact Phone

2. Build a **Referral Tracking Pipeline:**
   - Submitted → Contacted → Qualified → Converted → Rewarded

3. Build a **Referral Reward Workflow:**
   - Trigger: Pipeline stage moves to "Converted"
   - Action 1: Tag referrer contact as "Referral-Reward-Pending"
   - Action 2: Send internal notification to Brandon: "[Referrer Name] referral converted — apply 1 month credit + $100 wallet credits"
   - Action 3: Send email to referrer confirming their reward
   - Action 4: Create task: "Apply referral reward to [Referrer Name] account"

4. **Applying the reward manually:**
   - In Stripe: apply a $[monthly plan price] discount on next invoice
   - In GHL Agency Wallet: manually credit $100 to the referrer's sub-account (or apply as a LC Phone/Email credit)

---

### 11.2 Referral Communication Templates

**Referral Confirmation Email (to referrer, sent when they submit a referral):**
```
Subject: Got it! We'll take great care of [Referred Business Name].

Hi [Referrer First Name],

Thanks for referring [Referred Business Name] to Adaptation OS. 

We'll reach out to [Referred Name] within 1 business day.

Your reward — 1 month free + $100 credits — will be applied to your account when they become a paying client. We'll notify you the moment it happens.

Have more referrals? You can submit them here: [referral form link]

— Brandon
Adaptation Living LLC
```

**Referral Reward Email (to referrer, sent when referral converts):**
```
Subject: Your referral reward is here!

Hi [Referrer First Name],

[Referred Business Name] just joined Adaptation OS. Thank you!

Here's your reward:
- 1 month free (applied to your next billing cycle)
- $100 platform credits (added to your account)

The credit will appear on your next invoice. Your next billing date is [date].

Keep sharing — every referral you send earns you this same reward.

Your referral link: [link]

— Brandon
Adaptation Living LLC
```

---

## 12. Final Verification Checklist

Run through every item in this section before declaring your agency setup complete. Check each item yourself — do not assume a step worked because you completed it.

---

### 12.1 White-Label Foundation

- [ ] `app.adaptationliving.com` loads the GHL login screen with no GHL branding
- [ ] Logo appears in top-left on login screen and inside dashboard
- [ ] Favicon visible in browser tab (not GHL rocket icon)
- [ ] Brand colors applied to buttons and navigation
- [ ] Company name "Adaptation Living LLC" or "Adaptation OS" in all system email footers
- [ ] API domain verified (CNAME record live and verified in GHL)
- [ ] Custom sending domain verified (SPF, DKIM, DMARC all green)

---

### 12.2 Stripe and Billing

- [ ] Stripe Connect active (green indicator in Agency Settings → Payments)
- [ ] All 6 SaaS plans have corresponding Stripe Products and Prices
- [ ] Setup fees exist as one-time Price objects in Stripe
- [ ] Recurring prices exist for all 6 plans
- [ ] Agency wallet has positive balance ($50+ minimum)
- [ ] Auto-recharge is enabled with threshold and reload amount set
- [ ] Smart Adjustment markups set for all resold services

---

### 12.3 SaaS Plans

- [ ] All 6 plans created in SaaS Configurator (Starter Setup, Starter DIY, Growth Setup, Growth DIY, Scale Setup, Scale DIY)
- [ ] Prices match the pricing table at the top of this document exactly
- [ ] User limits: 3 / 3 / 5 / 5 / 10 / 10
- [ ] Credit allocations: $100 / $50 / $100 / $50 / $100 / $50
- [ ] Feature permissions correctly tiered (Starter ⊂ Growth ⊂ Scale)
- [ ] Snapshots attached to all 6 plans
- [ ] Rebilling enabled on all 6 plans
- [ ] Additional user pricing set to $50/mo on all plans

---

### 12.4 LC Phone

- [ ] LC Phone enabled
- [ ] A2P Brand registered and status: Verified
- [ ] A2P Campaign registered and status: Approved
- [ ] At least 1 phone number purchased and assigned to approved campaign
- [ ] Phone number assigned to a test sub-account
- [ ] Test SMS sent from sub-account → received on real phone
- [ ] Test inbound call received → routed correctly
- [ ] Rebilling markup set for SMS, MMS, outbound voice, inbound voice, number rental

---

### 12.5 LC Email

- [ ] LC Email enabled
- [ ] Sending domain `adaptationliving.com` verified (all DNS records green)
- [ ] Tracking CNAME records added and verified
- [ ] Test email from sub-account arrives in Gmail Primary inbox (not Spam, not Promotions)
- [ ] Email from name shows "Adaptation OS" or your intended sender name
- [ ] Email from address shows your domain, not `@leadconnectorhq.com` or `@gohighlevel.com`
- [ ] Rebilling markup set for LC Email per-message

---

### 12.6 AI Features

- [ ] Content AI enabled and rebilling rate set
- [ ] Conversation AI enabled and rebilling rate set
- [ ] Voice AI enabled (Scale plans) and rebilling rate set
- [ ] Reviews AI enabled (Growth + Scale) and rebilling rate set
- [ ] Funnel AI enabled (Scale)
- [ ] Workflow AI enabled (Scale) and rebilling rate set
- [ ] AI features correctly gated per plan tier (Starter has none/minimal, Growth has Content/Conversation/Reviews, Scale has all)

---

### 12.7 Reselling

- [ ] Online Listings enabled and markup set
- [ ] WhatsApp reselling enabled (Scale plans)
- [ ] Ad Manager enabled (Scale plans)
- [ ] Mobile app access configured (LeadConnector app or white-labeled app)
- [ ] Domain reselling enabled (if desired)
- [ ] Workflow Pro enabled on Growth and Scale plans

---

### 12.8 Sales Funnel

- [ ] Sales page live with all 6 plans clearly presented
- [ ] 6 order forms created, one per plan
- [ ] All 6 order form checkout flows tested end-to-end in Stripe test mode
- [ ] Sub-account auto-creation verified on successful test checkout
- [ ] Snapshot auto-applied on sub-account creation verified
- [ ] Post-purchase redirect goes to correct page (onboarding guide or booking link)
- [ ] Order forms collect: Name, Email, Phone, Business Name, Business Website
- [ ] Terms of Service and Privacy Policy checkboxes on all order forms with live links

---

### 12.9 Notification Workflows

- [ ] New signup notification fires to Brandon's email on test signup
- [ ] New signup SMS notification fires to Brandon's phone on test signup
- [ ] Task created for onboarding on new signup
- [ ] Welcome email sequence fires to new client (Email 1 immediately, Email 2 at Day 3, Email 3 at Day 7)
- [ ] Welcome email from address is your custom domain (not GHL default)
- [ ] Welcome emails arrive in inbox (not spam) — test with Gmail and Outlook addresses

---

### 12.10 Snapshots

- [ ] 3 snapshots exist: Adaptation OS — Starter, Adaptation OS — Growth, Adaptation OS — Scale
- [ ] Starter snapshot contains all items listed in Section 10.2
- [ ] Growth snapshot contains all items listed in Section 10.3
- [ ] Scale snapshot contains all items listed in Section 10.4
- [ ] Test sub-account created with Starter snapshot → all pipelines, workflows, templates, and calendars present
- [ ] Test sub-account created with Growth snapshot → all additional items present
- [ ] Test sub-account created with Scale snapshot → all additional items present
- [ ] No Active workflows firing immediately on sub-account creation (all campaign workflows should be Inactive until client configures them)

---

### 12.11 Referral Program

- [ ] Referral submission form live and accessible to clients
- [ ] Referral tracking pipeline created
- [ ] Referral reward workflow built and tested
- [ ] Referral confirmation email fires when referral is submitted
- [ ] Referral reward email template ready to send when referral converts
- [ ] Process documented internally for applying Stripe credit + GHL wallet credit

---

### 12.12 Complete End-to-End Signup Test

Run this test as if you were a brand new client:

1. **Visit your sales page** — confirm all pricing is correct and all plan buttons work.
2. **Click "Get Started" on Starter DIY** — complete the checkout form with Stripe test card `4242 4242 4242 4242`.
3. **Confirm Stripe test payment succeeded** — check Stripe dashboard.
4. **Confirm sub-account was auto-created** in GHL Agency View → Sub-Accounts.
5. **Confirm the Starter snapshot was applied** — open the sub-account and check that pipelines, workflows, and templates are present.
6. **Confirm you received the internal notification** — check your email and phone.
7. **Confirm the client welcome email was sent** — check the contact's activity log.
8. **Log into the sub-account** at `app.adaptationliving.com` using the auto-created credentials.
9. **Verify branding** — confirm your logo and colors appear, not GHL branding.
10. **Send a test SMS** from the sub-account — confirm it arrives on your test phone.
11. **Send a test email** — confirm it arrives in your test inbox with your domain in the from address.
12. **Cancel the test Stripe subscription** and **delete the test sub-account**.

If every step passes: your agency setup is complete and production-ready.

---

## Maintenance Notes

### Monthly Tasks
- Review LC Phone/Email/AI usage vs. rebilling charges to confirm margin is maintained
- Check A2P campaign health (any carrier filtering alerts)
- Audit sub-account count vs. Stripe active subscriptions (they must match)
- Review wallet auto-recharge transactions — ensure no wallet failures occurred

### Quarterly Tasks
- Update snapshots with any new features GHL releases
- Review plan pricing vs. market — adjust if needed
- Audit client feature usage — identify upsell opportunities
- Check GHL base costs for rebilled services — costs change, adjust markup if needed
- Review A2P 10DLC registration for any renewal requirements

### When GHL Updates
- Test white-label domain after major GHL releases — UI changes can expose GHL branding
- Re-verify sending domain records — GHL occasionally updates infrastructure
- Review SaaS plan permissions — new GHL features may need to be manually added to each plan tier
- Test checkout flow after any Stripe or GHL payment system updates

---

*This document represents the complete Adaptation OS agency setup on GoHighLevel Agency Pro (SaaS Mode). Keep it updated as your setup evolves. Every section should reflect the live state of your account.*
