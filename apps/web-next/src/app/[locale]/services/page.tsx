import type { Metadata } from "next";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Search,
  Sparkles,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import {
  BreadcrumbSchema,
  pageAlternates,
  pageOg,
  pageTwitter,
} from "../../../lib/seo";
import { Breadcrumbs } from "@/components/breadcrumbs";

const title = "Adaptation OS — Pricing & Plans";
const description =
  "Adaptation OS: the all-in-one operating system for your business. Self-serve from $297/mo. Done-for-you from $1,497/mo + setup. Veteran-owned, Phoenix AZ.";

export const metadata: Metadata = {
  title,
  description,
  alternates: pageAlternates("/services"),
  openGraph: pageOg(title, description, "/services"),
  twitter: pageTwitter(title, description),
};

const STRIPE = {
  starterMonthly: "https://buy.stripe.com/9B6fZhfK41e97a5de69MY0f",
  starterYearly: "https://buy.stripe.com/8x23cv2Xi2id8e98XQ9MY0k",
  growthMonthly: "https://buy.stripe.com/28EaEX41m3mh661fme9MY0g",
  growthYearly: "https://buy.stripe.com/00waEXfK43mh51Xgqi9MY0h",
  scaleMonthly: "https://buy.stripe.com/cNicN5gO84qlfGBgqi9MY0i",
  scaleYearly: "https://buy.stripe.com/28E4gzfK49KFamh7TM9MY0j",
};

type SelfServePlan = {
  name: string;
  tagline: string;
  monthly: string;
  yearly: string;
  save: string;
  monthlyLink: string;
  yearlyLink: string;
  features: string[];
  highlighted?: boolean;
};

const selfServePlans: SelfServePlan[] = [
  {
    name: "Starter",
    tagline: "For solo operators and small teams",
    monthly: "$297",
    yearly: "$2,970",
    save: "Save $594",
    monthlyLink: STRIPE.starterMonthly,
    yearlyLink: STRIPE.starterYearly,
    features: [
      "Up to 3 users",
      "$10 credits/mo (SMS, email, AI)",
      "CRM, calendars, forms",
      "Basic automations",
      "Email support",
      "Self-guided onboarding videos",
    ],
  },
  {
    name: "Growth",
    tagline: "For growing teams that need AI",
    monthly: "$597",
    yearly: "$5,970",
    save: "Save $1,194",
    monthlyLink: STRIPE.growthMonthly,
    yearlyLink: STRIPE.growthYearly,
    highlighted: true,
    features: [
      "Up to 10 users",
      "$25 credits/mo",
      "AI agents, funnels, pipelines",
      "Integrations unlocked",
      "Live 1-hour onboarding call",
      "Priority email + chat support",
    ],
  },
  {
    name: "Scale",
    tagline: "For established teams going multi-location",
    monthly: "$1,197",
    yearly: "$11,970",
    save: "Save $2,394",
    monthlyLink: STRIPE.scaleMonthly,
    yearlyLink: STRIPE.scaleYearly,
    features: [
      "Up to 50 users",
      "$100 credits/mo",
      "Everything unlocked",
      "Branded mobile app",
      "Priority phone + chat support",
      "All integrations + advanced features",
    ],
  },
];

type ManagedPlan = {
  name: string;
  monthly: string;
  setup: string;
  includes: string;
  features: string[];
  highlighted?: boolean;
};

const managedPlans: ManagedPlan[] = [
  {
    name: "Managed Starter",
    monthly: "$1,497/mo",
    setup: "$1,997 setup",
    includes: "Starter plan included",
    features: [
      "We build your funnels, automations, and pipelines",
      "Monthly reporting",
      "Weekly performance check-ins",
      "Basic campaign management",
    ],
  },
  {
    name: "Managed Growth",
    monthly: "$2,997/mo",
    setup: "$3,997 setup",
    includes: "Growth plan included",
    highlighted: true,
    features: [
      "Full CRM & campaign management",
      "Lead follow-up automations built + maintained",
      "Monthly strategy calls",
      "Email + SMS marketing campaigns written for you",
    ],
  },
  {
    name: "Managed Scale",
    monthly: "$5,997/mo",
    setup: "$7,997 setup",
    includes: "Scale plan included",
    features: [
      "Full done-for-you operations",
      "Paid ads (Google + Meta) managed",
      "Dedicated account manager",
      "Weekly strategy calls",
      "Custom AI agents trained on your business",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main id="main-content" className="navbar-offset">
      <Breadcrumbs items={[{ name: "Pricing & Plans" }]} />
      <BreadcrumbSchema items={[{ name: "Pricing", path: "/services" }]} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Adaptation OS",
            description: "The operating system for your business. CRM, AI, automation, websites, pipelines — all in one platform.",
            provider: {
              "@type": "Organization",
              name: "Adaptation Living LLC",
              url: "https://adaptationliving.com",
              telephone: "+1-623-219-1237",
              email: "info@adaptationliving.com",
            },
            offers: [
              { "@type": "Offer", name: "Starter", price: "297", priceCurrency: "USD" },
              { "@type": "Offer", name: "Growth", price: "597", priceCurrency: "USD" },
              { "@type": "Offer", name: "Scale", price: "1197", priceCurrency: "USD" },
            ],
          }),
        }}
      />

      {/* HERO */}
      <section className="max-w-[1400px] mx-auto px-8 pt-20 pb-12">
        <p className="text-sm uppercase tracking-[0.24em] text-accent mb-3">Adaptation OS</p>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold max-w-4xl leading-tight mb-6">
          The Operating System
          <br />
          <span className="text-accent">For Your Business — Plans &amp; Pricing</span>
        </h1>
        <p className="text-text-muted text-lg max-w-3xl leading-relaxed mb-4">
          CRM. AI agents. Automation. Funnels. Calendars. Pipelines. Reviews. Campaigns.
          Reporting. All in one platform. Pick self-serve if you want to run it yourself,
          or done-for-you if you want us to build and manage everything.
        </p>
        <div className="flex gap-4 flex-wrap">
          <a href="#self-serve" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold uppercase tracking-widest border-2 border-accent bg-accent text-white hover:bg-transparent hover:text-accent transition-all">
            Self-Serve Plans <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#done-for-you" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold uppercase tracking-widest border-2 border-white/70 text-white hover:bg-white hover:text-bg-dark transition-all">
            Done-For-You Plans <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* SELF-SERVE */}
      <section id="self-serve" className="max-w-[1400px] mx-auto px-8 py-16 border-t border-glass-border">
        <div className="flex items-center gap-3 mb-2">
          <Zap className="text-accent w-7 h-7" />
          <p className="text-sm uppercase tracking-[0.24em] text-accent">Self-Serve · Instant Access</p>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
          You Run The Platform
        </h2>
        <p className="text-text-muted text-lg leading-relaxed max-w-3xl mb-10">
          Buy now, log in the same day. No setup fee. Cancel anytime. Pick monthly or go
          yearly and save up to $2,394. Every plan includes the full Adaptation OS platform —
          the tiers only change user limits, credit allowances, and feature depth.
        </p>

        <div className="grid gap-6 lg:grid-cols-3">
          {selfServePlans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-[28px] border p-8 flex flex-col ${
                plan.highlighted
                  ? "border-accent bg-accent/8 ring-1 ring-accent/40"
                  : "border-white/10 bg-[#0B1D3A]/35"
              }`}
            >
              {plan.highlighted && (
                <p className="text-[10px] uppercase tracking-[0.28em] text-accent font-bold mb-3">
                  Most Popular
                </p>
              )}
              <h3 className="font-display text-2xl font-bold">{plan.name}</h3>
              <p className="text-text-muted text-sm mt-1 mb-5">{plan.tagline}</p>

              <div className="mb-5">
                <p className="font-display text-5xl font-bold">
                  {plan.monthly}
                  <span className="text-lg text-text-muted font-normal">/mo</span>
                </p>
                <p className="text-text-muted text-sm mt-2">
                  or <span className="text-white font-semibold">{plan.yearly}/yr</span>{" "}
                  <span className="text-accent">({plan.save})</span>
                </p>
              </div>

              <ul className="space-y-2 mb-6 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-text-muted">
                    <CheckCircle2 className="text-accent w-4 h-4 mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-2">
                <a
                  href={plan.monthlyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center px-6 py-3 text-sm uppercase tracking-widest font-semibold border-2 transition-all ${
                    plan.highlighted
                      ? "border-accent bg-accent text-white hover:bg-transparent hover:text-accent"
                      : "border-white/70 text-white hover:bg-white hover:text-bg-dark"
                  }`}
                >
                  Buy Monthly — {plan.monthly}
                </a>
                <a
                  href={plan.yearlyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center px-6 py-3 text-xs uppercase tracking-widest font-semibold border border-white/20 text-white/80 hover:bg-white/10 transition-all"
                >
                  Buy Yearly — {plan.yearly} ({plan.save})
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-white/40 text-xs text-center mt-8">
          Secure checkout via Stripe. Instant account provisioning. Log in the same day.
        </p>
      </section>

      {/* DONE-FOR-YOU */}
      <section id="done-for-you" className="max-w-[1400px] mx-auto px-8 py-16 border-t border-glass-border">
        <div className="flex items-center gap-3 mb-2">
          <Bot className="text-accent w-7 h-7" />
          <p className="text-sm uppercase tracking-[0.24em] text-accent">Done-For-You · Fully Managed</p>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
          We Build And Run It For You
        </h2>
        <p className="text-text-muted text-lg leading-relaxed max-w-3xl mb-10">
          You get a veteran-owned team that builds your funnels, writes your campaigns,
          manages your pipelines, and runs your ads. Book a call, we onboard you, you go
          live in 2–3 weeks. Each Managed plan includes the matching Self-Serve plan.
        </p>

        <div className="grid gap-6 lg:grid-cols-3">
          {managedPlans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-[28px] border p-8 flex flex-col ${
                plan.highlighted
                  ? "border-accent bg-accent/8 ring-1 ring-accent/40"
                  : "border-white/10 bg-[#0B1D3A]/35"
              }`}
            >
              {plan.highlighted && (
                <p className="text-[10px] uppercase tracking-[0.28em] text-accent font-bold mb-3">
                  Most Popular
                </p>
              )}
              <h3 className="font-display text-2xl font-bold">{plan.name}</h3>
              <p className="text-accent text-xs uppercase tracking-widest mt-1 mb-5">
                {plan.includes}
              </p>

              <div className="mb-5">
                <p className="font-display text-4xl font-bold">{plan.monthly}</p>
                <p className="text-text-muted text-sm mt-2">+ {plan.setup}</p>
              </div>

              <ul className="space-y-2 mb-6 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-text-muted">
                    <CheckCircle2 className="text-accent w-4 h-4 mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`/intake?plan=${plan.name.toLowerCase().replace(/\s+/g, "-")}`}
                className={`block text-center px-6 py-3 text-sm uppercase tracking-widest font-semibold border-2 transition-all ${
                  plan.highlighted
                    ? "border-accent bg-accent text-white hover:bg-transparent hover:text-accent"
                    : "border-white/70 text-white hover:bg-white hover:text-bg-dark"
                }`}
              >
                Book A Call
              </a>
            </div>
          ))}
        </div>

        <p className="text-white/40 text-xs text-center mt-8">
          Book a call → we onboard you → go live in 2–3 weeks.
        </p>
      </section>

      {/* WHATS INCLUDED */}
      <section className="max-w-[1400px] mx-auto px-8 py-16 border-t border-glass-border">
        <div className="flex items-center gap-3 mb-2">
          <Sparkles className="text-accent w-7 h-7" />
          <p className="text-sm uppercase tracking-[0.24em] text-accent">Every Plan Includes</p>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-8">
          The Full Adaptation OS Platform
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "CRM with unlimited contacts",
            "Pipeline management",
            "Calendar + appointment booking",
            "Forms, funnels, and landing pages",
            "Email + SMS marketing",
            "Missed-call text-back",
            "Review request automation",
            "2-way texting",
            "Workflow automation builder",
            "Website builder + hosting",
            "Blog + content management",
            "Membership sites + courses",
            "Social media planner",
            "WhatsApp Business integration",
            "Google Business Profile sync",
            "Reporting + dashboards",
            "Mobile app (iOS + Android)",
            "Unlimited integrations (Zapier, webhooks)",
          ].map((item) => (
            <div key={item} className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="text-accent w-4 h-4 mt-0.5 shrink-0" />
              <span className="text-text-muted">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CREDITS EXPLAINER */}
      <section className="max-w-[1400px] mx-auto px-8 py-16 border-t border-glass-border">
        <h2 className="font-display text-3xl font-bold mb-3">How Credits Work</h2>
        <p className="text-text-muted text-base mb-8 max-w-3xl">
          Credits cover SMS, email, and AI usage. You only pay for what you actually use.
          Most businesses stay well inside their monthly allowance.
        </p>
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="glass rounded-2xl p-6">
            <p className="text-[11px] uppercase tracking-[0.22em] text-accent mb-2">SMS</p>
            <p className="font-display text-xl font-bold mb-1">~$0.0158 per segment</p>
            <p className="text-text-muted text-sm">
              US/Canada outbound. $10 of credits = roughly 600+ texts.
            </p>
          </div>
          <div className="glass rounded-2xl p-6">
            <p className="text-[11px] uppercase tracking-[0.22em] text-accent mb-2">Email</p>
            <p className="font-display text-xl font-bold mb-1">~$0.000675 per send</p>
            <p className="text-text-muted text-sm">
              $10 of credits = 14,000+ emails. Unless you are blasting, email is effectively free.
            </p>
          </div>
          <div className="glass rounded-2xl p-6">
            <p className="text-[11px] uppercase tracking-[0.22em] text-accent mb-2">AI</p>
            <p className="font-display text-xl font-bold mb-1">From $0.09 / 1K words</p>
            <p className="text-text-muted text-sm">
              Conversation AI, Content AI, Reviews AI, Voice AI — billed at provider token rates.
            </p>
          </div>
        </div>
        <p className="text-white/40 text-xs mt-6">
          Additional credits available at wholesale cost. No markup games.
        </p>
      </section>

      {/* PRICE COMPARISON */}
      <section className="max-w-[1400px] mx-auto px-8 py-16 border-t border-glass-border">
        <div className="flex items-center gap-3 mb-2">
          <Search className="text-accent w-7 h-7" />
          <p className="text-sm uppercase tracking-[0.24em] text-accent">What This Replaces</p>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
          Replace 8+ Subscriptions With One
        </h2>
        <p className="text-text-muted text-base mb-8 max-w-3xl">
          Most businesses pay for a dozen disconnected tools. Adaptation OS consolidates
          them into one platform — one login, one bill, one source of truth.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-glass-border">
                <th scope="col" className="py-3 pr-6 text-sm uppercase tracking-widest text-white/60 font-semibold">Tool</th>
                <th scope="col" className="py-3 pr-6 text-sm uppercase tracking-widest text-white/40 font-semibold">Typical Monthly Cost</th>
                <th scope="col" className="py-3 text-sm uppercase tracking-widest text-accent font-semibold">In Adaptation OS</th>
              </tr>
            </thead>
            <tbody>
              {[
                { tool: "HubSpot CRM", typical: "$450–$1,200/mo", us: "Included" },
                { tool: "ActiveCampaign / Mailchimp", typical: "$99–$300/mo", us: "Included" },
                { tool: "Calendly", typical: "$16/user/mo", us: "Included" },
                { tool: "Twilio SMS", typical: "pay per message", us: "Included (at cost)" },
                { tool: "ClickFunnels / Leadpages", typical: "$97–$297/mo", us: "Included" },
                { tool: "Podium / BirdEye (reviews)", typical: "$289–$499/mo", us: "Included" },
                { tool: "Intercom / Drift chat", typical: "$74–$500/mo", us: "Included" },
                { tool: "Zapier Pro", typical: "$49–$99/mo", us: "Included" },
                { tool: "Kajabi / Teachable (courses)", typical: "$99–$399/mo", us: "Included" },
                { tool: "WordPress hosting + maintenance", typical: "$50–$200/mo", us: "Included" },
              ].map((row) => (
                <tr key={row.tool} className="border-b border-white/5">
                  <td className="py-4 pr-6 text-white/90 text-sm font-semibold">{row.tool}</td>
                  <td className="py-4 pr-6 text-white/40 text-sm">{row.typical}</td>
                  <td className="py-4 text-accent font-semibold text-sm">{row.us}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* AUDIENCE LANES */}
      <section className="max-w-[1400px] mx-auto px-8 py-16 border-t border-glass-border">
        <h2 className="font-display text-3xl font-bold mb-3">Find Your Fit</h2>
        <p className="text-text-muted text-base mb-8 max-w-3xl">
          Not sure which tier fits? Here's how we map team size to plan.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Users,
              title: "Solo / Startup",
              range: "1–3 users",
              plan: "Starter · $297/mo",
              desc: "You're doing everything yourself. You need CRM, follow-up, and a professional presence.",
            },
            {
              icon: Workflow,
              title: "Small Business",
              range: "4–10 users",
              plan: "Growth · $597/mo",
              desc: "Your team is growing. You need AI, integrations, and real automation.",
            },
            {
              icon: Bot,
              title: "Established",
              range: "11–50 users",
              plan: "Scale · $1,197/mo",
              desc: "Multi-location, branded app, priority support, and everything unlocked.",
            },
            {
              icon: Sparkles,
              title: "Need It Done For You",
              range: "Any size",
              plan: "Managed · from $1,497/mo",
              desc: "You have the business. We build and run the systems. You focus on your customers.",
            },
          ].map((lane) => (
            <div key={lane.title} className="glass rounded-2xl p-6">
              <lane.icon className="text-accent w-7 h-7 mb-3" />
              <h3 className="font-display text-xl font-bold mb-1">{lane.title}</h3>
              <p className="text-accent text-xs uppercase tracking-widest mb-3">{lane.range}</p>
              <p className="text-text-muted text-sm mb-4">{lane.desc}</p>
              <p className="text-sm font-semibold text-white">{lane.plan}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SEO INCLUDED */}
      <section id="seo" className="max-w-[1400px] mx-auto px-8 py-16 border-t border-glass-border">
        <div className="flex items-center gap-3 mb-2">
          <Search className="text-accent w-7 h-7" />
          <p className="text-sm uppercase tracking-[0.24em] text-accent">SEO & Visibility</p>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
          Every Website Build Includes Real SEO
        </h2>
        <p className="text-text-muted text-base mb-8 max-w-3xl">
          Most agencies charge $2,000–$5,000/month for what we build in from day one.
          This is not an add-on.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Technical SEO audit + remediation",
            "Schema.org structured data",
            "Google Business Profile optimization",
            "Google Search Console + sitemap",
            "Bing Webmaster Tools",
            "Google Analytics 4 (events, conversions)",
            "Google Tag Manager",
            "Meta Pixel + Conversion API",
            "Microsoft Clarity (heatmaps)",
            "Open Graph + Twitter Cards",
            "XML sitemap (auto-generated)",
            "Image optimization + lazy loading",
            "Page speed optimization",
            "Local SEO + NAP consistency",
            "AI overview optimization (Google, Perplexity)",
            "Keyword + competitor gap analysis",
            "Internal linking architecture",
            "Mobile-first responsive design",
            "SSL/HTTPS verification",
            "Accessibility foundations (ARIA, contrast)",
          ].map((item) => (
            <div key={item} className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="text-accent w-4 h-4 mt-0.5 shrink-0" />
              <span className="text-text-muted">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-gradient-to-br from-accent/10 to-bg-dark/90 border-t border-glass-border">
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Ready To Run Your Business On One System?
          </h2>
          <p className="text-text-muted text-lg max-w-xl mx-auto mb-8">
            Buy a self-serve plan and get instant access, or book a call for done-for-you.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="#self-serve" className="px-8 py-4 text-base uppercase tracking-widest font-semibold border-2 border-accent bg-accent text-white hover:bg-transparent hover:text-accent transition-all inline-block">
              Buy Self-Serve
            </a>
            <a href="/contact" className="px-8 py-4 text-base uppercase tracking-widest font-semibold border-2 border-white/70 bg-transparent text-white hover:bg-white hover:text-bg-dark transition-all inline-block">
              Book A Call
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
