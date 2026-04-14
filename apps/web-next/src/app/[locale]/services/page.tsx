import type { Metadata } from "next";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  CheckCircle2,
  Code,
  DollarSign,
  Lightbulb,
  Search,
  Users,
  Workflow,
} from "lucide-react";
import {
  BreadcrumbSchema,
  pageAlternates,
  pageOg,
  pageTwitter,
} from "../../../lib/seo";

const title = "Services & Pricing";
const description =
  "Custom websites, AI automation, CRM systems, SEO, and fully managed business systems. Setup from $1,500. Managed plans from $99.99/mo. Veteran-owned, Phoenix AZ.";

export const metadata: Metadata = {
  title,
  description,
  alternates: pageAlternates("/services"),
  openGraph: pageOg(title, description, "/services"),
  twitter: pageTwitter(title, description),
};

export default function ServicesPage() {
  return (
    <main id="main-content" className="navbar-offset">
      <BreadcrumbSchema items={[{ name: "Services & Pricing", path: "/services" }]} />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Business Systems by Adaptation Living",
            description: "Custom websites, AI automation, CRM, SEO, and fully managed business operating systems.",
            provider: {
              "@type": "Organization",
              name: "Adaptation Living LLC",
              url: "https://adaptationliving.com",
            },
            areaServed: "US",
            offers: {
              "@type": "AggregateOffer",
              lowPrice: "99.99",
              highPrice: "10000",
              priceCurrency: "USD",
            },
          }),
        }}
      />

      {/* ═══════════════════════════════════════════ */}
      {/* HEADER                                     */}
      {/* ═══════════════════════════════════════════ */}
      <section className="max-w-[1200px] mx-auto px-8 pt-16 pb-8 text-center">
        <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
          Services &amp; Pricing
        </h1>
        <p className="text-text-muted text-lg max-w-2xl mx-auto mb-4">
          One setup fee. One monthly price. Everything built, integrated, and
          managed by us. No hidden costs. No surprise invoices.
        </p>
        <p className="text-white/50 text-sm max-w-2xl mx-auto">
          Every engagement includes a custom website, full SEO optimization,
          social media setup, CRM configuration, and all integrations.
          The monthly plan determines your AI and automation capabilities.{" "}
          <a href="/contact" className="text-accent hover:underline">
            Book a free discovery call
          </a>{" "}
          to get started.
        </p>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* MULTI-BUSINESS DEAL                        */}
      {/* ═══════════════════════════════════════════ */}
      <section className="border-b border-accent/30 bg-gradient-to-r from-accent/15 via-accent/5 to-accent/15 py-8 mb-8">
        <div className="max-w-[1200px] mx-auto px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent bg-accent/10 px-5 py-2 text-sm uppercase tracking-widest text-accent font-semibold mb-3">
            <DollarSign className="w-4 h-4" /> Multi-Business Deal
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-3">
            Own Two Businesses? $350/mo Each for the Fully Managed Tier.
          </h2>
          <p className="text-text-muted text-base max-w-xl mx-auto mb-4">
            Sign up both and get everything — AI phone, chat, CRM, automation,
            SEO — for $350/month per business instead of $500.
          </p>
          <a href="/intake?deal=multi-business" className="inline-flex items-center gap-2 border-2 border-accent bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white transition-all hover:bg-transparent hover:text-accent">
            Claim This Rate <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* WHAT'S INCLUDED IN EVERY BUILD             */}
      {/* ═══════════════════════════════════════════ */}
      <section className="max-w-[1200px] mx-auto px-8 py-12">
        <h2 className="font-display text-3xl font-bold mb-3">What Every Client Gets</h2>
        <p className="text-text-muted text-base mb-8 max-w-3xl">
          No matter which plan you choose, every build includes:
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Custom-built website tailored to your business",
            "Full SEO optimization (Google, Bing, structured data, local SEO)",
            "Google Business Profile setup and optimization",
            "Google Analytics, Tag Manager, and Meta Pixel integration",
            "Microsoft Clarity session recording and heatmaps",
            "Social media account setup (Facebook, Instagram, X)",
            "CRM configuration with pipeline and contact management",
            "Calendar booking system",
            "Missed call text-back",
            "Email and SMS automation setup",
            "Mobile-responsive design",
            "SSL, accessibility, and performance optimization",
          ].map((item) => (
            <div key={item} className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="text-accent w-4 h-4 mt-0.5 shrink-0" />
              <span className="text-text-muted">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-white/40 text-xs mt-6">
          Client input is required for integrations — business info, credentials, brand assets, and content. The faster you provide it, the faster we deliver.
        </p>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* SETUP FEES                                 */}
      {/* ═══════════════════════════════════════════ */}
      <section id="setup" className="max-w-[1200px] mx-auto px-8 py-12 border-t border-glass-border">
        <h2 className="font-display text-3xl font-bold mb-3">One-Time Setup Fee</h2>
        <p className="text-text-muted text-base mb-8 max-w-3xl">
          Your setup fee covers the complete build — website, CRM, integrations,
          SEO, social media, and everything listed above. Based on your business
          size because bigger operations need deeper systems.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {[
            { size: "1–2", label: "Solo / Startup", fee: "$1,500", timeline: "3–7 days" },
            { size: "3–10", label: "Small Business", fee: "$2,500", timeline: "5–14 days" },
            { size: "11–30", label: "Mid-Market", fee: "$4,000", timeline: "7–21 days" },
            { size: "31–50", label: "Growth", fee: "$6,000", timeline: "10–25 days" },
            { size: "51–100+", label: "Enterprise", fee: "$10,000", timeline: "14–30 days" },
          ].map((tier) => (
            <div key={tier.size} className="glass rounded-2xl p-6">
              <p className="text-[11px] uppercase tracking-[0.22em] text-accent mb-1">{tier.size} Employees</p>
              <p className="text-sm text-text-muted mb-3">{tier.label}</p>
              <p className="font-display text-3xl font-bold mb-2">{tier.fee}</p>
              <p className="text-text-muted text-xs">Build time: {tier.timeline}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <p className="text-sm text-white/80 font-semibold mb-1">Product / Inventory Entry</p>
            <p className="text-text-muted text-sm">Customer provides data (CSV): <strong className="text-white">+$100 per 50 items</strong></p>
            <p className="text-text-muted text-sm">Manual entry (no data provided): <strong className="text-white">+$300 per 100 items</strong></p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <p className="text-sm text-white/80 font-semibold mb-1">Custom Work</p>
            <p className="text-text-muted text-sm">Anything outside your package scope that doesn&apos;t push you into the next tier is charged at reasonable hourly rates. No surprises — we quote before we build.</p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* MONTHLY PLANS                              */}
      {/* ═══════════════════════════════════════════ */}
      <section id="plans" className="max-w-[1200px] mx-auto px-8 py-12 border-t border-glass-border">
        <h2 className="font-display text-3xl font-bold mb-3">Monthly Managed Plans</h2>
        <p className="text-text-muted text-base mb-4 max-w-3xl">
          Your monthly plan determines what your system can do. Every plan includes
          the CRM, the website, and the integrations from your setup. Higher plans
          unlock AI phone answering, advanced automation, custom agents, and more.
        </p>
        <p className="text-text-muted text-sm mb-8 max-w-3xl">
          You can upgrade your plan at any time. You cannot downgrade. Your employee
          count determines your minimum tier — if you have 15 employees, your minimum
          plan is Business.
        </p>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* STARTER */}
          <div className="glass rounded-2xl p-8 flex flex-col">
            <p className="text-[11px] uppercase tracking-[0.22em] text-white/50 mb-1">1–2 Employees</p>
            <h3 className="font-display text-2xl font-bold mb-1">Starter</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold text-white">$99.99</span>
              <span className="text-text-muted text-sm">/mo</span>
            </div>
            <ul className="flex-1 space-y-2 mb-6">
              {[
                "CRM & contact management",
                "1 pipeline",
                "Calendar booking & scheduling",
                "Missed call text-back",
                "Basic email & SMS automation",
                "Website chat widget",
                "Forms & surveys",
                "Basic reporting & analytics",
                "Mobile app access",
                "Google Business messaging",
                "Facebook Messenger",
                "Task management",
              ].map((f) => (
                <li key={f} className="text-text-muted text-sm flex items-start gap-2">
                  <span className="text-accent mt-0.5">&#10003;</span>{f}
                </li>
              ))}
            </ul>
            <a href="/intake?plan=starter" className="block text-center text-sm uppercase tracking-widest font-semibold border-2 border-white/30 text-white px-6 py-3 rounded hover:bg-white/10 transition-all">
              Get Started
            </a>
          </div>

          {/* MANAGED — HIGHLIGHTED */}
          <div className="glass rounded-2xl p-8 flex flex-col border-2 border-accent glow-accent relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-[10px] uppercase tracking-widest font-bold text-white">
              Most Popular
            </div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-accent mb-1">2–10 Employees</p>
            <h3 className="font-display text-2xl font-bold mb-1">Managed</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold text-accent">$500</span>
              <span className="text-text-muted text-sm">/mo</span>
            </div>
            <p className="text-white/50 text-xs mb-4">Everything you saw on the AI page. This is the plan.</p>
            <ul className="flex-1 space-y-2 mb-6">
              {[
                "Everything in Starter & Growth",
                "AI voice receptionist (24/7 phone answering)",
                "AI chat agent on every channel",
                "Conversation AI (intelligent auto-responses)",
                "Advanced pipeline automation",
                "Multi-pipeline management",
                "Review campaign automation",
                "Full funnel builder",
                "Custom workflow design",
                "Monthly strategy review",
                "Brand boards & design kit",
                "Dedicated business phone number",
              ].map((f) => (
                <li key={f} className="text-white/90 text-sm flex items-start gap-2">
                  <span className="text-accent mt-0.5">&#10003;</span>{f}
                </li>
              ))}
            </ul>
            <a href="/intake?plan=managed" className="block text-center text-sm uppercase tracking-widest font-semibold border-2 border-accent bg-accent text-white px-6 py-3 rounded hover:bg-transparent hover:text-accent transition-all">
              Start Your Build
            </a>
          </div>

          {/* GROWTH */}
          <div className="glass rounded-2xl p-8 flex flex-col">
            <p className="text-[11px] uppercase tracking-[0.22em] text-white/50 mb-1">1–2 Employees (Upgrade)</p>
            <h3 className="font-display text-2xl font-bold mb-1">Growth</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold text-white">$200</span>
              <span className="text-text-muted text-sm">/mo</span>
            </div>
            <ul className="flex-1 space-y-2 mb-6">
              {[
                "Everything in Starter",
                "Unlimited contacts & workflows",
                "Advanced automation workflows",
                "Memberships & course builder",
                "Blog builder",
                "Invoicing & payment processing",
                "Reputation management (reviews)",
                "Social media scheduler & posting",
                "API access for custom integrations",
                "Advanced reporting & attribution",
                "Custom fields & lead scoring",
                "Communities & affiliate manager",
              ].map((f) => (
                <li key={f} className="text-text-muted text-sm flex items-start gap-2">
                  <span className="text-accent mt-0.5">&#10003;</span>{f}
                </li>
              ))}
            </ul>
            <a href="/intake?plan=growth" className="block text-center text-sm uppercase tracking-widest font-semibold border-2 border-white/30 text-white px-6 py-3 rounded hover:bg-white/10 transition-all">
              Get Started
            </a>
          </div>
        </div>

        {/* Higher tiers */}
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="glass rounded-2xl p-6">
            <p className="text-[11px] uppercase tracking-[0.22em] text-accent mb-1">11–30 Employees</p>
            <h3 className="font-display text-xl font-bold mb-1">Business</h3>
            <p className="text-3xl font-bold mb-3">$1,000<span className="text-text-muted text-sm">/mo</span></p>
            <ul className="space-y-2 mb-4">
              {[
                "Everything in Managed",
                "Dedicated account management",
                "Weekly strategy calls",
                "Custom AI agents (Agent Studio)",
                "Custom integrations",
                "Department-level pipelines",
                "Employee system onboarding",
                "Priority support",
                "Knowledge base integration",
              ].map((f) => (
                <li key={f} className="text-text-muted text-xs flex items-start gap-2">
                  <span className="text-accent mt-0.5">&#10003;</span>{f}
                </li>
              ))}
            </ul>
            <a href="/intake?plan=business" className="block text-center text-xs uppercase tracking-widest font-semibold border border-white/20 text-white px-4 py-2 rounded hover:bg-white/10 transition-all">
              Get Started
            </a>
          </div>

          <div className="glass rounded-2xl p-6">
            <p className="text-[11px] uppercase tracking-[0.22em] text-accent mb-1">31–50 Employees</p>
            <h3 className="font-display text-xl font-bold mb-1">Scale</h3>
            <p className="text-3xl font-bold mb-3">$1,500<span className="text-text-muted text-sm">/mo</span></p>
            <ul className="space-y-2 mb-4">
              {[
                "Everything in Business",
                "Multi-location support",
                "Advanced reporting dashboards",
                "AI voice agents per department",
                "Social media management",
                "Bi-weekly strategy sessions",
                "WhatsApp Business integration",
              ].map((f) => (
                <li key={f} className="text-text-muted text-xs flex items-start gap-2">
                  <span className="text-accent mt-0.5">&#10003;</span>{f}
                </li>
              ))}
            </ul>
            <a href="/intake?plan=scale" className="block text-center text-xs uppercase tracking-widest font-semibold border border-white/20 text-white px-4 py-2 rounded hover:bg-white/10 transition-all">
              Get Started
            </a>
          </div>

          <div className="glass rounded-2xl p-6">
            <p className="text-[11px] uppercase tracking-[0.22em] text-accent mb-1">51–100+ Employees</p>
            <h3 className="font-display text-xl font-bold mb-1">Enterprise</h3>
            <p className="text-3xl font-bold mb-3">$5,000<span className="text-text-muted text-sm">/mo</span></p>
            <ul className="space-y-2 mb-4">
              {[
                "Everything in Scale",
                "Enterprise architecture",
                "Unlimited custom AI agents",
                "Dedicated phone support",
                "White-glove onboarding",
                "Executive reporting",
                "Custom development hours",
                "Weekly strategy sessions",
              ].map((f) => (
                <li key={f} className="text-text-muted text-xs flex items-start gap-2">
                  <span className="text-accent mt-0.5">&#10003;</span>{f}
                </li>
              ))}
            </ul>
            <a href="/intake?plan=enterprise" className="block text-center text-xs uppercase tracking-widest font-semibold border border-white/20 text-white px-4 py-2 rounded hover:bg-white/10 transition-all">
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* PRICE COMPARISON                           */}
      {/* ═══════════════════════════════════════════ */}
      <section className="max-w-[1200px] mx-auto px-8 py-12 border-t border-glass-border">
        <h2 className="font-display text-3xl font-bold mb-3">What This Would Cost You Anywhere Else</h2>
        <p className="text-text-muted text-base mb-8 max-w-3xl">
          Agencies and platforms charge separately for every piece. We include it all.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-glass-border">
                <th className="py-3 pr-6 text-sm uppercase tracking-widest text-white/60 font-semibold">What You Get</th>
                <th className="py-3 pr-6 text-sm uppercase tracking-widest text-white/40 font-semibold">Typical Cost</th>
                <th className="py-3 text-sm uppercase tracking-widest text-accent font-semibold">Adaptation Living</th>
              </tr>
            </thead>
            <tbody>
              {[
                { what: "Custom website (5+ pages)", typical: "$10,000–$20,000", us: "Included in setup" },
                { what: "CRM setup & automation", typical: "$5,000–$15,000", us: "Included in setup" },
                { what: "AI phone receptionist (24/7)", typical: "$10,000+ setup + $500/mo", us: "Included at $500/mo" },
                { what: "AI chat agent (website + social)", typical: "$3,000–$8,000 setup", us: "Included at $500/mo" },
                { what: "SEO optimization", typical: "$2,000–$5,000/mo", us: "Included every plan" },
                { what: "Social media setup", typical: "$500–$2,000", us: "Included in setup" },
                { what: "Review management", typical: "$100–$300/mo", us: "Included" },
                { what: "Monthly CRM management", typical: "$1,500–$5,000/mo", us: "From $99.99/mo" },
              ].map((row) => (
                <tr key={row.what} className="border-b border-white/5">
                  <td className="py-4 pr-6 text-white/90 text-sm font-semibold">{row.what}</td>
                  <td className="py-4 pr-6 text-white/40 text-sm">{row.typical}</td>
                  <td className="py-4 text-accent font-semibold text-sm">{row.us}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* HOW BILLING WORKS                          */}
      {/* ═══════════════════════════════════════════ */}
      <section className="max-w-[1200px] mx-auto px-8 py-12 border-t border-glass-border">
        <h2 className="font-display text-3xl font-bold mb-3">How Billing Works</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="glass rounded-2xl p-6 text-center">
            <p className="font-display text-lg font-bold text-white mb-2">Setup Fee</p>
            <p className="text-sm text-text-muted">One-time payment before work begins. Covers the complete build.</p>
          </div>
          <div className="glass rounded-2xl p-6 text-center">
            <p className="font-display text-lg font-bold text-white mb-2">Monthly Plan</p>
            <p className="text-sm text-text-muted">Flat monthly rate. All AI, automation, and management included. No usage meters.</p>
          </div>
          <div className="glass rounded-2xl p-6 text-center">
            <p className="font-display text-lg font-bold text-white mb-2">Phone Carrier</p>
            <p className="text-sm text-text-muted">Standard per-minute phone charges passed through at cost. A few cents per minute.</p>
          </div>
        </div>
        <p className="text-white/40 text-xs mt-4 text-center">
          No hidden fees. No per-seat charges. No overage bills. One setup. One monthly price. That&apos;s it.
        </p>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* AUDIENCE LANES                             */}
      {/* ═══════════════════════════════════════════ */}
      <section className="max-w-[1200px] mx-auto px-8 py-12 border-t border-glass-border">
        <h2 className="font-display text-3xl font-bold mb-3">Find Your Fit</h2>
        <p className="text-text-muted text-base mb-8 max-w-3xl">
          Every business is different. Here&apos;s how we approach each stage of growth.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Users,
              title: "Solo / Startup",
              range: "1–2 people",
              setup: "$1,500",
              monthly: "From $99.99/mo",
              desc: "You're doing everything yourself. You need a professional online presence and a system that captures leads and follows up while you work.",
            },
            {
              icon: Workflow,
              title: "Small Business",
              range: "3–10 people",
              setup: "$2,500",
              monthly: "$500/mo managed",
              desc: "Your team exists but your tools don't talk to each other. You need one system — CRM, AI, automation, website — all connected.",
            },
            {
              icon: BrainCircuit,
              title: "Mid-Market",
              range: "11–50 people",
              setup: "From $4,000",
              monthly: "From $1,000/mo",
              desc: "You need pipeline visibility, multi-user CRM, department workflows, and reporting your managers can actually use.",
            },
            {
              icon: Code,
              title: "Enterprise",
              range: "50–100+ people",
              setup: "$10,000",
              monthly: "$5,000/mo",
              desc: "Total digital control. Multi-location, unlimited AI agents, custom integrations, dedicated strategy, and a system that scales.",
            },
          ].map((lane) => (
            <div key={lane.title} className="glass rounded-2xl p-6">
              <lane.icon className="text-accent w-7 h-7 mb-3" />
              <h3 className="font-display text-xl font-bold mb-1">{lane.title}</h3>
              <p className="text-accent text-xs uppercase tracking-widest mb-3">{lane.range}</p>
              <p className="text-text-muted text-sm mb-4">{lane.desc}</p>
              <div className="border-t border-white/10 pt-3 space-y-1">
                <p className="text-sm"><strong className="text-white">Setup:</strong> <span className="text-accent">{lane.setup}</span></p>
                <p className="text-sm"><strong className="text-white">Monthly:</strong> <span className="text-accent">{lane.monthly}</span></p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* SEO INCLUDED                               */}
      {/* ═══════════════════════════════════════════ */}
      <section id="seo" className="max-w-[1200px] mx-auto px-8 py-12 border-t border-glass-border">
        <div className="flex items-center gap-3 mb-2">
          <Search className="text-accent w-7 h-7" />
          <h2 className="font-display text-3xl font-bold">SEO &amp; Visibility — Included in Every Build</h2>
        </div>
        <p className="text-text-muted text-base mb-8 max-w-3xl">
          Most agencies charge $2,000–$5,000/month for what we include in every single build.
          This is not an add-on. This is standard.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Technical SEO audit & remediation",
            "Schema.org structured data (LocalBusiness, FAQ, Service, etc.)",
            "Google Business Profile (full setup, optimization, photos, posts)",
            "Google Search Console (verification, sitemap, monitoring)",
            "Bing Webmaster Tools",
            "Google Analytics 4 (events, conversions, audiences)",
            "Google Tag Manager (tags, triggers, variables)",
            "Meta Pixel (events, audiences, conversion API)",
            "Microsoft Clarity (session recording, heatmaps)",
            "Open Graph & Twitter Card metadata",
            "XML sitemap (auto-generated)",
            "Image optimization (compression, lazy loading, alt text)",
            "Page speed optimization (code splitting, compression)",
            "Local SEO (NAP consistency, citations, geo content)",
            "AI overview optimization (Google, Bing, Perplexity)",
            "Keyword research & competitor gap analysis",
            "Internal linking architecture",
            "Mobile-first responsive design",
            "SSL/HTTPS verification",
            "Accessibility foundations (ARIA, contrast, semantic HTML)",
          ].map((item) => (
            <div key={item} className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="text-accent w-4 h-4 mt-0.5 shrink-0" />
              <span className="text-text-muted">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* CTA                                        */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-24 text-center bg-gradient-to-br from-accent/10 to-bg-dark/90 border-t border-glass-border">
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="font-display text-3xl font-bold mb-4">
            Ready to See What We Can Build for You?
          </h2>
          <p className="text-text-muted text-lg max-w-xl mx-auto mb-8">
            Book a free discovery call. We&apos;ll map your needs, show you the system live,
            and give you a clear price before any work begins.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="/intake" className="px-8 py-4 text-base uppercase tracking-widest font-semibold border-2 border-accent bg-accent text-white hover:bg-transparent hover:text-accent transition-all inline-block">
              Start Your Build
            </a>
            <a href="/contact" className="px-8 py-4 text-base uppercase tracking-widest font-semibold border-2 border-white/70 bg-transparent text-white hover:bg-white hover:text-bg-dark transition-all inline-block">
              Book A Demo
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
