import type { Metadata } from "next";
import {
  ArrowRight,
  BarChart3,
  Calendar,
  CheckCircle2,
  CreditCard,
  Globe,
  Mail,
  MessageSquare,
  PenTool,
  Phone,
  Search,
  Smartphone,
  Sparkles,
  Star,
  Workflow,
  Zap,
} from "lucide-react";
import {
  BreadcrumbSchema,
  pageAlternates,
  pageOg,
  pageTwitter,
} from "../../../lib/seo";
import { Breadcrumbs } from "../../../components/breadcrumbs";

const title = "Adaptation OS — Pricing & Plans";
const description =
  "Adaptation OS: the all-in-one operating system for your business. Self-serve from $349.90/mo. Done-for-you setup from $1,500. Veteran-owned, Phoenix AZ.";

export const metadata: Metadata = {
  title,
  description,
  alternates: pageAlternates("/services"),
  openGraph: pageOg(title, description, "/services"),
  twitter: pageTwitter(title, description),
};

/* ── Stripe Checkout Links ── */
const STRIPE = {
  starterMonthly: "https://buy.stripe.com/9B6fZhfK41e97a5de69MY0f",
  growthMonthly: "https://buy.stripe.com/28EaEX41m3mh661fme9MY0g",
  scaleMonthly: "https://buy.stripe.com/cNicN5gO84qlfGBgqi9MY0i",
};

/* ── Self-Serve DIY Plans ── */
type DIYPlan = {
  name: string;
  price: string;
  users: string;
  credits: string;
  support: string;
  highlighted?: boolean;
  stripeLink: string;
};

const diyPlans: DIYPlan[] = [
  {
    name: "Starter",
    price: "$349.90",
    users: "3 users",
    credits: "$50 credits included",
    support: "Standard support",
    stripeLink: STRIPE.starterMonthly,
  },
  {
    name: "Growth",
    price: "$597.90",
    users: "5 users",
    credits: "$50 credits included",
    support: "Priority support",
    highlighted: true,
    stripeLink: STRIPE.growthMonthly,
  },
  {
    name: "Scale",
    price: "$997.90",
    users: "10 users",
    credits: "$50 credits included",
    support: "Dedicated support",
    stripeLink: STRIPE.scaleMonthly,
  },
];

/* ── Done-For-You Setup Plans ── */
type SetupPlan = {
  name: string;
  setupFee: string;
  monthly: string;
  users: string;
  credits: string;
  support: string;
  includes: string[];
  highlighted?: boolean;
};

const setupPlans: SetupPlan[] = [
  {
    name: "Starter Setup",
    setupFee: "$1,500",
    monthly: "$194.90",
    users: "3 users",
    credits: "$100 credits included",
    support: "Standard support",
    includes: [
      "Contact import",
      "Domain linking",
      "API keys",
      "Social media linking",
      "Basic snapshot deployment",
    ],
  },
  {
    name: "Growth Setup",
    setupFee: "$2,500",
    monthly: "$394.90",
    users: "5 users",
    credits: "$100 credits included",
    support: "Priority support",
    highlighted: true,
    includes: [
      "Everything in Starter",
      "Industry-specific workflows",
      "AI agent tuning",
      "Custom reporting dashboard",
    ],
  },
  {
    name: "Scale Setup",
    setupFee: "$5,000",
    monthly: "$694.90",
    users: "10 users",
    credits: "$100 credits included",
    support: "Dedicated support",
    includes: [
      "Everything in Growth",
      "Multi-location config",
      "Custom API integrations",
      "Team training",
      "Advanced workflow architecture",
    ],
  },
];

/* ── What Every Plan Includes ── */
const includedFeatures = [
  { icon: BarChart3, label: "CRM & Pipeline", desc: "Your command center for every lead and deal" },
  { icon: Phone, label: "AI Phone Receptionist", desc: "Answer every call, even at 2 AM" },
  { icon: MessageSquare, label: "AI Chat Agent", desc: "Respond in seconds on every channel" },
  { icon: PenTool, label: "Content AI (Powered by Claude)", desc: "Show up on Google without writing a word" },
  { icon: Mail, label: "Email & SMS Marketing", desc: "Reach your audience instantly" },
  { icon: Calendar, label: "Calendar Booking", desc: "Leads book themselves" },
  { icon: Globe, label: "Website & Funnel Builder", desc: "Your online presence, built in" },
  { icon: Workflow, label: "Workflow Automation", desc: "Your follow-up runs while you sleep" },
  { icon: Star, label: "Reputation Management", desc: "5-star reviews on autopilot" },
  { icon: BarChart3, label: "Ad Manager", desc: "Launch ads without leaving your dashboard" },
  { icon: CreditCard, label: "Invoicing & Payments", desc: "Get paid faster" },
  { icon: Smartphone, label: "Branded Mobile App", desc: "Run everything from your phone" },
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
              { "@type": "Offer", name: "Starter DIY", price: "349.90", priceCurrency: "USD" },
              { "@type": "Offer", name: "Growth DIY", price: "597.90", priceCurrency: "USD" },
              { "@type": "Offer", name: "Scale DIY", price: "997.90", priceCurrency: "USD" },
              { "@type": "Offer", name: "Starter Setup", price: "194.90", priceCurrency: "USD" },
              { "@type": "Offer", name: "Growth Setup", price: "394.90", priceCurrency: "USD" },
              { "@type": "Offer", name: "Scale Setup", price: "694.90", priceCurrency: "USD" },
            ],
          }),
        }}
      />

      {/* ── HERO ── */}
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

      {/* ── SECTION 1: YOU RUN THE PLATFORM (DIY) ── */}
      <section id="self-serve" className="section-cream py-20">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex items-center gap-3 mb-2">
            <Zap className="text-[#D4AF37] w-7 h-7" />
            <p className="text-sm uppercase tracking-[0.24em] text-[#D4AF37]">Self-Serve · Instant Access</p>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0B1D3A] mb-4">
            You Run The Platform
          </h2>
          <p className="text-[#0B1D3A]/70 text-lg leading-relaxed max-w-3xl mb-10">
            Buy now, log in the same day. No setup fee. Cancel anytime. Every plan includes
            the full Adaptation OS platform — the tiers only change user limits, credit
            allowances, and support level.
          </p>

          <div className="grid gap-6 lg:grid-cols-3">
            {diyPlans.map((plan) => (
              <div
                key={plan.name}
                className={`bg-white/80 rounded-[28px] p-8 flex flex-col ${
                  plan.highlighted
                    ? "border-2 border-[#D4AF37] ring-1 ring-[#D4AF37]/40"
                    : "border border-[#D4AF37]/15"
                }`}
              >
                {plan.highlighted && (
                  <p className="text-[10px] uppercase tracking-[0.28em] text-[#D4AF37] font-bold mb-3">
                    Most Popular
                  </p>
                )}
                <h3 className="font-display text-2xl font-bold text-[#0B1D3A]">{plan.name}</h3>

                <div className="my-5">
                  <p className="font-display text-5xl font-bold text-[#0B1D3A]">
                    {plan.price}
                    <span className="text-lg text-[#0B1D3A]/50 font-normal">/mo</span>
                  </p>
                </div>

                <ul className="space-y-2 mb-6 flex-1">
                  {[plan.users, plan.credits, plan.support].map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-[#0B1D3A]/70">
                      <CheckCircle2 className="text-[#D4AF37] w-4 h-4 mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.stripeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-[#D4AF37] text-[#0B1D3A] px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] rounded-lg hover:bg-[#D4AF37]/90 transition-all"
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>

          <p className="text-[#0B1D3A]/40 text-xs text-center mt-8">
            Additional users: $50/mo each. Secure checkout via Stripe. Instant account provisioning.
          </p>
        </div>
      </section>

      {/* ── SECTION 2: WE BUILD AND RUN IT FOR YOU (Setup DFY) ── */}
      <section id="done-for-you" className="bg-[#0B1D3A] py-20">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex items-center gap-3 mb-2">
            <Sparkles className="text-[#D4AF37] w-7 h-7" />
            <p className="text-sm uppercase tracking-[0.24em] text-[#D4AF37]">Done-For-You · Setup Included</p>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            We Build And Run It For You
          </h2>
          <p className="text-white/60 text-lg leading-relaxed max-w-3xl mb-10">
            You get a veteran-owned team that builds your funnels, writes your campaigns,
            configures your automations, and gets you live. Book a call, we onboard you,
            you go live in 2–3 weeks.
          </p>

          <div className="grid gap-6 lg:grid-cols-3">
            {setupPlans.map((plan) => (
              <div
                key={plan.name}
                className={`glass rounded-[28px] p-8 flex flex-col ${
                  plan.highlighted
                    ? "border-2 border-[#D4AF37] ring-1 ring-[#D4AF37]/40"
                    : ""
                }`}
              >
                {plan.highlighted && (
                  <p className="text-[10px] uppercase tracking-[0.28em] text-[#D4AF37] font-bold mb-3">
                    Most Popular
                  </p>
                )}
                <h3 className="font-display text-2xl font-bold text-white">{plan.name}</h3>

                <div className="my-5">
                  <p className="font-display text-4xl font-bold text-white">
                    {plan.setupFee}
                    <span className="text-lg text-white/50 font-normal"> setup</span>
                  </p>
                  <p className="text-white/60 text-sm mt-2">
                    + <span className="text-white font-semibold">{plan.monthly}/mo</span> after setup
                  </p>
                </div>

                <ul className="space-y-2 mb-4">
                  {[plan.users, plan.credits, plan.support].map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-white/70">
                      <CheckCircle2 className="text-[#D4AF37] w-4 h-4 mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mb-6 flex-1">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[#D4AF37] font-bold mb-2">
                    Setup Includes
                  </p>
                  <ul className="space-y-1.5">
                    {plan.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-white/60">
                        <CheckCircle2 className="text-[#D4AF37]/60 w-3.5 h-3.5 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="/intake"
                  className="block text-center bg-[#D4AF37] text-[#0B1D3A] px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] rounded-lg hover:bg-[#D4AF37]/90 transition-all"
                >
                  Book Setup Call
                </a>
              </div>
            ))}
          </div>

          <p className="text-white/30 text-xs text-center mt-8">
            Book a call → we onboard you → go live in 2–3 weeks.
          </p>
        </div>
      </section>

      {/* ── SECTION 3: WHAT EVERY PLAN INCLUDES ── */}
      <section className="section-cream py-20">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex items-center gap-3 mb-2">
            <Sparkles className="text-[#D4AF37] w-7 h-7" />
            <p className="text-sm uppercase tracking-[0.24em] text-[#D4AF37]">Included With Every Plan</p>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0B1D3A] mb-10">
            What Every Plan Includes
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {includedFeatures.map((feat) => (
              <div key={feat.label} className="bg-white/80 border border-[#D4AF37]/15 rounded-[28px] p-6 flex flex-col">
                <feat.icon className="text-[#D4AF37] w-7 h-7 mb-3" />
                <h3 className="font-display text-lg font-bold text-[#0B1D3A] mb-1">{feat.label}</h3>
                <p className="text-[#0B1D3A]/60 text-sm">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: HOW CREDITS WORK ── */}
      <section className="max-w-[1400px] mx-auto px-8 py-16 border-t border-glass-border">
        <h2 className="font-display text-3xl font-bold mb-3">How Credits Work</h2>
        <p className="text-text-muted text-base mb-4 max-w-3xl">
          Credits cover AI calls, SMS, email campaigns, content generation, and review
          responses. Usage-based billing kicks in after your included credits are used.
          Transparent — you see every charge in your dashboard.
        </p>
        <p className="text-text-muted text-sm max-w-3xl mb-8">
          Self-serve plans include $50/mo in credits. Done-for-you plans include $100/mo.
          Additional credits available at wholesale cost with no markup.
        </p>
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="glass rounded-2xl p-6">
            <p className="text-[11px] uppercase tracking-[0.22em] text-accent mb-2">SMS</p>
            <p className="font-display text-xl font-bold mb-1">~$0.0158 per segment</p>
            <p className="text-text-muted text-sm">
              US/Canada outbound. $50 of credits = roughly 3,000+ texts.
            </p>
          </div>
          <div className="glass rounded-2xl p-6">
            <p className="text-[11px] uppercase tracking-[0.22em] text-accent mb-2">Email</p>
            <p className="font-display text-xl font-bold mb-1">~$0.000675 per send</p>
            <p className="text-text-muted text-sm">
              $50 of credits = 74,000+ emails. Unless you are blasting, email is effectively free.
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
      </section>

      {/* ── SECTION 5: REFERRAL PROGRAM ── */}
      <section className="max-w-[1400px] mx-auto px-8 pb-16">
        <div className="border-2 border-[#D4AF37]/30 bg-[#D4AF37]/5 rounded-[28px] p-8 flex flex-col sm:flex-row items-center gap-6">
          <div className="flex-1">
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#D4AF37] font-bold mb-2">Referral Program</p>
            <h3 className="font-display text-2xl font-bold mb-2">
              Refer a business. Get 1 month free + $100 in credits when they sign up.
            </h3>
            <p className="text-text-muted text-sm">
              Share your referral link from your dashboard. When they activate, you both win.
            </p>
          </div>
          <a
            href="/contact"
            className="shrink-0 bg-[#D4AF37] text-[#0B1D3A] px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] rounded-lg hover:bg-[#D4AF37]/90 transition-all"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* ── PRICE COMPARISON ── */}
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

      {/* ── SEO INCLUDED ── */}
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

      {/* ── CTA ── */}
      <section className="py-24 text-center bg-gradient-to-br from-accent/10 to-bg-dark/90 border-t border-glass-border">
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Ready To Run Your Business On One System?
          </h2>
          <p className="text-text-muted text-lg max-w-xl mx-auto mb-8">
            Pick a self-serve plan and get instant access, or book a call for done-for-you setup.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="#self-serve" className="px-8 py-4 text-base uppercase tracking-widest font-semibold border-2 border-accent bg-accent text-white hover:bg-transparent hover:text-accent transition-all inline-block">
              Self-Serve Plans
            </a>
            <a href="/intake" className="px-8 py-4 text-base uppercase tracking-widest font-semibold border-2 border-white/70 bg-transparent text-white hover:bg-white hover:text-bg-dark transition-all inline-block">
              Book A Setup Call
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
