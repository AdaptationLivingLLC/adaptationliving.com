import type { Metadata } from "next";
import {
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
  ShieldCheck,
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

const title =
  "Adaptation Living Platform Pricing — AI Automation, CRM & Website Plans | Phoenix, AZ";
const description =
  "the Adaptation Living Platform pricing for Phoenix small businesses. Self-Serve from $397/mo (+ $997 setup), Done-For-You from $997/mo (+ $1,997 setup). AI phone receptionist, AI chat agent, CRM, workflows, website, reviews, 70+ listings — included on full platform tiers. Veteran-owned.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "the Adaptation Living Platform pricing",
    "AI automation pricing Phoenix",
    "business CRM pricing Phoenix",
    "GoHighLevel pricing alternative",
    "AI phone receptionist cost",
    "small business software Phoenix",
    "veteran-owned CRM platform",
    "done-for-you CRM setup",
  ],
  alternates: pageAlternates("/services"),
  openGraph: pageOg(title, description, "/services"),
  twitter: pageTwitter(title, description),
};

type SelfPlan = {
  slug: string;
  name: string;
  price: string;
  setup: string;
  users: string;
  credits: string;
  support: string;
  highlighted?: boolean;
  description: string;
};

const selfPlans: SelfPlan[] = [
  {
    slug: "ai-agents-self",
    name: "AI Agents",
    price: "$397",
    setup: "$997",
    users: "1 user",
    credits: "$50 one-time credits at signup",
    support: "Standard email support",
    description:
      "AI Voice + Chat agents plus the CRM, calendar, and messaging they need to operate. For solo operators who just want the agents working — no full platform.",
  },
  {
    slug: "launch-self",
    name: "Launch",
    price: "$797",
    setup: "$1,997",
    users: "3 users",
    credits: "$50 one-time credits at signup",
    support: "Standard email support",
    description:
      "Everything in AI Agents + the full platform: website + funnel builder, full automation, reputation management, payments, branded mobile app, and content AI.",
  },
  {
    slug: "growth-self",
    name: "Growth",
    price: "$1,497",
    setup: "$2,997",
    users: "5 users",
    credits: "$50 one-time credits at signup",
    support: "Priority support",
    highlighted: true,
    description:
      "Everything in Launch + AI agents trained on YOUR knowledge base, industry-specific workflows, pipeline automation with branching, custom reporting, and priority support.",
  },
  {
    slug: "scale-self",
    name: "Scale",
    price: "$2,497",
    setup: "$4,997",
    users: "10 users",
    credits: "$50 one-time credits at signup",
    support: "Dedicated support contact",
    description:
      "Everything in Growth + multi-location configuration, advanced workflow architecture, custom API integrations to your existing stack, team training, and a dedicated rep.",
  },
];

type DfyPlan = {
  slug: string;
  name: string;
  setupFee: string;
  monthly: string;
  users: string;
  credits: string;
  support: string;
  includes: string[];
  highlighted?: boolean;
};

const dfyPlans: DfyPlan[] = [
  {
    slug: "ai-agents-dfy",
    name: "AI Agents DFY",
    setupFee: "$1,997",
    monthly: "$997",
    users: "1 user",
    credits: "$100 one-time credits at signup",
    support: "Standard support",
    includes: [
      "AI Voice Agent script + flow configuration",
      "AI Chat Agent training on your website + FAQs",
      "Calendar setup (availability, buffers, reminders)",
      "Phone number provisioning + A2P 10DLC registration",
      "Live kickoff call with implementation engineer",
    ],
  },
  {
    slug: "launch-dfy",
    name: "Launch DFY",
    setupFee: "$2,997",
    monthly: "$1,997",
    users: "3 users",
    credits: "$100 one-time credits at signup",
    support: "Standard support",
    includes: [
      "Everything in AI Agents DFY",
      "Custom website built and SEO-optimized",
      "Contact database import",
      "Custom domain linking + DNS",
      "All API key + social media integrations",
      "Launch snapshot deployment + team training",
    ],
  },
  {
    slug: "growth-dfy",
    name: "Growth DFY",
    setupFee: "$4,997",
    monthly: "$2,997",
    users: "5 users",
    credits: "$100 one-time credits at signup",
    support: "Priority support",
    highlighted: true,
    includes: [
      "Everything in Launch DFY",
      "Industry-specific workflow configurations (40+ templates)",
      "AI agents trained on your knowledge base, FAQs, and tone",
      "Custom reporting dashboard with your KPIs",
      "Funnel + landing page templates loaded and branded",
      "Email campaign sequences pre-built",
    ],
  },
  {
    slug: "scale-dfy",
    name: "Scale DFY",
    setupFee: "$7,997",
    monthly: "$4,997",
    users: "10 users",
    credits: "$100 one-time credits at signup",
    support: "Dedicated contact",
    includes: [
      "Everything in Growth DFY",
      "Multi-location configuration (unlimited locations)",
      "Custom API integrations (QuickBooks, ERP, Stripe Connect)",
      "Team training sessions (up to 3 hours)",
      "Advanced workflow architecture (deep branching, complex triggers)",
      "Dedicated implementation engineer for 30 days post-launch",
    ],
  },
];

const includedFeatures = [
  { icon: BarChart3, label: "CRM & Sales Pipeline", desc: "Smart lists, custom fields, visual drag-and-drop pipeline" },
  { icon: Phone, label: "AI Phone Receptionist", desc: "24/7 call answering, booking, and lead capture" },
  { icon: MessageSquare, label: "AI Chat Agent", desc: "Web, SMS, Instagram DM, Facebook Messenger, WhatsApp" },
  { icon: PenTool, label: "Content AI", desc: "Blog posts, ads, emails, social captions in your brand voice" },
  { icon: Mail, label: "Email + SMS Marketing", desc: "Campaigns, sequences, two-way conversations, reporting" },
  { icon: Calendar, label: "Calendar + Booking", desc: "Multi-calendar, round-robin, reminders, no-show rescue" },
  { icon: Globe, label: "Website + Funnel Builder", desc: "Drag-and-drop pages, forms, quizzes, payment links" },
  { icon: Workflow, label: "Workflow Automation", desc: "Visual if/then builder, triggers, multi-step sequences" },
  { icon: Star, label: "Reputation Management", desc: "Review requests, AI responses, monitoring, alerts" },
  { icon: Search, label: "SEO + 70+ Listings", desc: "Google, Yelp, Apple Maps, Bing, Facebook, 65+ more" },
  { icon: CreditCard, label: "Invoicing + Payments", desc: "Stripe checkout, subscriptions, payment links" },
  { icon: Smartphone, label: "Branded Mobile App", desc: "iOS + Android, full CRM, AI reply approval on mobile" },
];

const faqs = [
  {
    q: "What's the difference between Done-For-You and Self-Serve?",
    a: "Self-Serve means you sign up, log in the same day, and configure the platform yourself. Done-For-You means we build, configure, train, and deploy the entire system for you — contact import, domain linking, AI agent training, workflow setup, and team onboarding. Same platform either way. Same feature set. The difference is who does the build.",
  },
  {
    q: "Are the credits monthly or one-time?",
    a: "One-time credits at signup. The amount ($50 Self-Serve or $100 Done-For-You) is added to your wallet on day one and covers typical first-month SMS, email, and AI usage. After that, usage is billed at transparent wholesale pass-through rates — no markup.",
  },
  {
    q: "What's actually included for that monthly price?",
    a: "AI Agents ($397) includes AI Voice + Chat agents plus the CRM, calendar, and messaging they need to operate — the minimum platform required to run the agents. Launch and above unlock the full platform: workflow automation, website + funnel builder, 70+ directory listings, social media scheduler, Facebook ad manager, invoicing and payments, branded mobile app, and reporting. Growth adds AI training on your knowledge base, industry workflows, and custom reporting. Scale adds multi-location and custom API integrations. Phone, SMS, email, and AI processing usage is billed at-cost on top of the plan.",
  },
  {
    q: "Can I upgrade or downgrade later?",
    a: "Yes. Plan changes are instant and prorated. No long-term contracts on Self-Serve. Done-For-You plans include the setup work up-front; the monthly fee is month-to-month after launch.",
  },
  {
    q: "Do I need to understand technology to run the platform?",
    a: "No. The platform is designed for business owners, not engineers. Done-For-You plans include training on the dashboard, workflows, and AI agent controls. Self-Serve plans come with step-by-step onboarding inside the app and our full knowledge base.",
  },
  {
    q: "How fast can I get started?",
    a: "Self-Serve activates within minutes — instant access the day you sign up. Done-For-You setups launch in two to three weeks, including contact import, configuration, AI training, and team onboarding.",
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
            "@type": "Product",
            name: "the Adaptation Living Platform",
            description:
              "All-in-one business operating system: CRM, AI phone receptionist, AI chat agent, workflow automation, review management, email + SMS marketing, funnels, calendars, payments, and 70+ directory listings.",
            brand: {
              "@type": "Brand",
              name: "the Adaptation Living Platform",
            },
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "USD",
              lowPrice: "397",
              highPrice: "4997",
              offerCount: 8,
              offers: [
                { "@type": "Offer", name: "AI Agents Self-Serve", price: "397", priceCurrency: "USD", availability: "https://schema.org/InStock" },
                { "@type": "Offer", name: "Launch Self-Serve", price: "797", priceCurrency: "USD", availability: "https://schema.org/InStock" },
                { "@type": "Offer", name: "Growth Self-Serve", price: "1497", priceCurrency: "USD", availability: "https://schema.org/InStock" },
                { "@type": "Offer", name: "Scale Self-Serve", price: "2497", priceCurrency: "USD", availability: "https://schema.org/InStock" },
                { "@type": "Offer", name: "AI Agents DFY", price: "997", priceCurrency: "USD", availability: "https://schema.org/InStock" },
                { "@type": "Offer", name: "Launch DFY", price: "1997", priceCurrency: "USD", availability: "https://schema.org/InStock" },
                { "@type": "Offer", name: "Growth DFY", price: "2997", priceCurrency: "USD", availability: "https://schema.org/InStock" },
                { "@type": "Offer", name: "Scale DFY", price: "4997", priceCurrency: "USD", availability: "https://schema.org/InStock" },
              ],
            },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      {/* ═══════════ HERO ═══════════ */}
      <section className="section-cream">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 pt-10 pb-12">
          <p className="eyebrow">the Adaptation Living Platform · Pricing &amp; Plans</p>
          <h1 className="mt-3 h-display font-bold tracking-tight text-[#0F172A] text-[1.9rem] leading-[1.05] sm:text-[2.4rem] lg:text-[3rem] max-w-3xl">
            Pricing Built <span className="text-accent">for Phoenix Businesses.</span>
          </h1>
          <p className="mt-4 text-base leading-relaxed text-[#475569] max-w-2xl">
            Self-Serve from <strong className="text-[#0F172A]">$397/mo + $997 setup</strong>, or
            Done-For-You from <strong className="text-[#0F172A]">$997/mo + $1,997 setup</strong>.
            Four tiers each — start with just AI agents, scale up to the full platform with
            multi-location support, custom integrations, and a dedicated rep.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#done-for-you"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-[0.22em] border-2 border-accent bg-accent text-navy shadow-gold hover:bg-transparent hover:text-accent transition-all rounded-sm"
            >
              Done-For-You Plans
            </a>
            <a
              href="#self-serve"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-[0.22em] border-2 border-[#0F172A]/80 text-[#0F172A] hover:bg-[#0F172A] hover:text-white transition-all rounded-sm"
            >
              Self-Serve Plans
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════ DONE-FOR-YOU ═══════════ */}
      <section id="done-for-you" className="section-dark-radial py-20 sm:py-24">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-3">
              <Sparkles className="text-accent w-6 h-6" />
              <p className="eyebrow">Done-For-You · Setup Included</p>
            </div>
            <h2 className="h-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              We Build, Configure &amp; Launch It for You.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#94A3B8] max-w-3xl sm:text-lg">
              A veteran-owned team handles every piece of the setup — contact
              import, domain linking, AI agent training, workflow
              configuration, and team onboarding. Book a call, we onboard you,
              you go live in two to three weeks.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {dfyPlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-[22px] p-7 flex flex-col transition-all hover:-translate-y-1 ${
                  plan.highlighted
                    ? "border-2 border-accent bg-white/[0.06] ring-2 ring-accent/30 shadow-gold"
                    : "border border-white/15 bg-white/[0.04]"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-[9px] font-bold uppercase tracking-[0.28em] text-navy">
                    Most Popular
                  </span>
                )}
                <h3 className="font-display text-xl font-bold text-white">
                  {plan.name}
                </h3>

                <div className="my-5 border-b border-white/10 pb-5">
                  <p className="font-display text-4xl font-bold text-white">
                    {plan.setupFee}
                    <span className="text-sm font-normal text-[#64748B]"> setup</span>
                  </p>
                  <p className="mt-2 text-sm text-[#94A3B8]">
                    + <span className="text-white font-semibold">{plan.monthly}</span>/mo after launch
                  </p>
                </div>

                <ul className="space-y-2 mb-5">
                  {[plan.users, plan.credits, plan.support].map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-[#94A3B8]">
                      <CheckCircle2 className="text-accent w-4 h-4 mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex-1">
                  <p className="text-[10px] uppercase tracking-[0.26em] text-accent font-bold mb-2">
                    Setup Includes
                  </p>
                  <ul className="space-y-1.5 mb-6">
                    {plan.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-[#94A3B8]">
                        <CheckCircle2 className="text-accent/70 w-3.5 h-3.5 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`/intake?plan=${plan.slug}`}
                  className={`block text-center px-6 py-3.5 text-xs font-bold uppercase tracking-[0.22em] rounded-sm transition-all ${
                    plan.highlighted
                      ? "border-2 border-accent bg-accent text-navy shadow-gold hover:bg-transparent hover:text-accent"
                      : "border-2 border-white/70 text-white hover:bg-white hover:text-navy"
                  }`}
                >
                  Book Setup Call
                </a>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-[#64748B]">
            Book a call → we onboard you → AI Agents live in a week, full
            platform live in 2–3 weeks. Month-to-month after setup. No
            long-term contracts.
          </p>
          <p className="mx-auto mt-4 max-w-[820px] text-center text-[12px] leading-[1.7] text-[#64748B]">
            Plans cover platform access and configuration. Phone calls, SMS,
            email volume, and AI processing are billed based on actual usage —
            you only pay for what your business consumes.
          </p>
        </div>
      </section>

      {/* ═══════════ SELF-SERVE ═══════════ */}
      <section id="self-serve" className="section-cream py-20 sm:py-24">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-3">
              <Zap className="text-accent w-6 h-6" />
              <p className="eyebrow">Self-Serve · Instant Access</p>
            </div>
            <h2 className="h-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A]">
              You Run the Platform. Log In the Same Day.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#475569] max-w-3xl sm:text-lg">
              Buy now, access the dashboard in minutes. Month-to-month, cancel
              anytime. Start with just the AI agents or get the full platform.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {selfPlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-[22px] p-7 flex flex-col shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift ${
                  plan.highlighted
                    ? "border-2 border-accent bg-white ring-2 ring-accent/30"
                    : "border border-[#0F172A]/10 bg-white"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-[9px] font-bold uppercase tracking-[0.28em] text-navy">
                    Most Popular
                  </span>
                )}
                <h3 className="font-display text-xl font-bold text-[#0F172A]">
                  {plan.name}
                </h3>

                <div className="my-4 border-b border-[#0F172A]/10 pb-4">
                  <p className="font-display text-4xl font-bold text-[#0F172A]">
                    {plan.price}
                    <span className="text-sm font-normal text-[#0F172A]/50">/mo</span>
                  </p>
                  <p className="mt-2 text-xs text-[#0F172A]/60">
                    + <strong className="text-[#0F172A]">{plan.setup}</strong> one-time setup · Instant access
                  </p>
                </div>

                <ul className="space-y-2 mb-5 flex-1">
                  {[plan.users, plan.credits, plan.support].map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-[#475569]">
                      <CheckCircle2 className="text-accent w-4 h-4 mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-sm leading-relaxed text-[#475569] mb-6">
                  {plan.description}
                </p>

                <a
                  href={`/intake?plan=${plan.slug}`}
                  className={`block text-center px-6 py-3.5 text-xs font-bold uppercase tracking-[0.22em] rounded-sm transition-all ${
                    plan.highlighted
                      ? "border-2 border-accent bg-accent text-navy shadow-gold hover:bg-transparent hover:text-accent"
                      : "border-2 border-[#0F172A]/80 text-[#0F172A] hover:bg-[#0F172A] hover:text-white"
                  }`}
                >
                  Start {plan.name.split(" ")[0]}
                </a>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-[#475569]">
            Additional users: $75/mo each. Secure signup. Instant provisioning
            through our team — you'll be live within 24 hours of intake.
          </p>
          <p className="mx-auto mt-4 max-w-[820px] text-center text-[12px] leading-[1.7] text-[#64748B]">
            Plans cover platform access and configuration. Phone calls, SMS,
            email volume, and AI processing are billed based on actual usage —
            you only pay for what your business consumes.
          </p>
        </div>
      </section>

      {/* ═══════════ WHAT EVERY PLAN INCLUDES ═══════════ */}
      <section className="section-cream border-t border-[#0F172A]/10 py-20 sm:py-24">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-3 mb-3">
              <ShieldCheck className="text-accent w-6 h-6" />
              <p className="eyebrow">Included With Every Plan</p>
            </div>
            <h2 className="h-display text-3xl sm:text-4xl font-bold text-[#0F172A]">
              Every Tier. Every Feature. No Upsells.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#475569] max-w-3xl">
              Tiers differentiate on user count, setup depth, and support
              level — not feature access. Every plan unlocks the entire
              the Adaptation Living Platform.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {includedFeatures.map((feat) => (
              <div
                key={feat.label}
                className="rounded-[20px] border border-[#0F172A]/10 bg-white p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-lift"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0F172A] text-accent mb-4 shadow-[inset_0_0_0_1px_rgba(37,99,235,0.3)]">
                  <feat.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg font-bold text-[#0F172A]">
                  {feat.label}
                </h3>
                <p className="mt-1.5 text-sm text-[#475569] leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ HOW CREDITS WORK ═══════════ */}
      <section className="section-cream border-t border-[#0F172A]/10 py-20 sm:py-24">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mb-10">
            <p className="eyebrow">Usage &amp; Credits</p>
            <h2 className="mt-3 h-display text-3xl sm:text-4xl font-bold text-[#0F172A]">
              Transparent, Pass-Through Usage Pricing.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#475569] max-w-3xl">
              Credits cover AI calls, SMS, email, content generation, and
              review responses. Every plan includes a <strong className="text-[#0F172A]">one-time credit bundle at signup</strong>{" "}
              ($50 Self-Serve, $100 Done-For-You). After credits are used, usage
              is billed at wholesale pass-through rates — no markup, no hidden
              fees. You see every charge in your dashboard.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            <div className="rounded-[20px] border border-[#0F172A]/10 bg-white p-6 shadow-soft">
              <p className="text-[10px] uppercase tracking-[0.26em] text-accent font-bold mb-2">SMS</p>
              <p className="font-display text-xl font-bold text-[#0F172A]">~$0.0158 / segment</p>
              <p className="mt-2 text-sm text-[#475569]">
                US/Canada outbound. $50 in credits ≈ 3,000+ texts.
              </p>
            </div>
            <div className="rounded-[20px] border border-[#0F172A]/10 bg-white p-6 shadow-soft">
              <p className="text-[10px] uppercase tracking-[0.26em] text-accent font-bold mb-2">Email</p>
              <p className="font-display text-xl font-bold text-[#0F172A]">~$0.000675 / send</p>
              <p className="mt-2 text-sm text-[#475569]">
                $50 in credits ≈ 74,000+ emails. Near-zero cost in practice.
              </p>
            </div>
            <div className="rounded-[20px] border border-[#0F172A]/10 bg-white p-6 shadow-soft">
              <p className="text-[10px] uppercase tracking-[0.26em] text-accent font-bold mb-2">AI</p>
              <p className="font-display text-xl font-bold text-[#0F172A]">from $0.09 / 1K words</p>
              <p className="mt-2 text-sm text-[#475569]">
                Conversation AI, Content AI, Review AI, Voice AI — billed at
                provider token rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ WHAT THIS REPLACES — navy branded table with totals ═══════════ */}
      <section className="section-dark border-t border-[#2563EB]/20 py-16 sm:py-20">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mb-10">
            <div className="flex items-center gap-3 mb-3">
              <Search className="text-accent w-6 h-6" />
              <p className="eyebrow">What Adaptation Living Platform Replaces</p>
            </div>
            <h2 className="h-display font-bold text-white">
              Replace 10+ Subscriptions With One Platform.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#94A3B8] max-w-3xl">
              Here's what a typical Phoenix small business pays for ten tools
              that don't talk to each other — and what the exact same capability
              costs on one platform. Real list prices, 2026.
            </p>
          </div>

          <div className="overflow-x-auto rounded-[20px] border border-white/10 bg-white/[0.03] shadow-gold">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.04]">
                  <th scope="col" className="font-display py-4 px-5 text-[11px] uppercase tracking-[0.26em] text-[#94A3B8] font-bold">Tool Replaced</th>
                  <th scope="col" className="font-display py-4 px-5 text-[11px] uppercase tracking-[0.26em] text-[#B91C1C] font-bold">Typical Monthly Cost</th>
                  <th scope="col" className="font-display py-4 px-5 text-[11px] uppercase tracking-[0.26em] text-accent font-bold text-right">In the Adaptation Living Platform</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { tool: "HubSpot / Salesforce CRM",            typical: "$450–$1,200/mo",    us: "Included" },
                  { tool: "ActiveCampaign / Mailchimp",          typical: "$99–$300/mo",       us: "Included" },
                  { tool: "Calendly / Acuity",                   typical: "$16/user/mo",       us: "Included" },
                  { tool: "Twilio / OpenPhone",                  typical: "pay-per-message",   us: "Included at cost" },
                  { tool: "ClickFunnels / Leadpages",            typical: "$97–$297/mo",       us: "Included" },
                  { tool: "Podium / BirdEye (reviews)",          typical: "$289–$499/mo",      us: "Included" },
                  { tool: "Intercom / Drift chat",               typical: "$74–$500/mo",       us: "Included" },
                  { tool: "Zapier Pro",                          typical: "$49–$99/mo",        us: "Included" },
                  { tool: "Kajabi / Teachable (courses)",        typical: "$99–$399/mo",       us: "Included" },
                  { tool: "WordPress hosting + maintenance",     typical: "$50–$200/mo",       us: "Included" },
                  { tool: "Hootsuite / Buffer (social)",         typical: "$99–$249/mo",       us: "Included" },
                  { tool: "Meta Ads Manager",                    typical: "standalone tool",   us: "Included" },
                ].map((row) => (
                  <tr key={row.tool} className="border-b border-white/5 last:border-0 transition-colors hover:bg-white/[0.02]">
                    <td className="py-3 px-5 text-white text-sm font-semibold">{row.tool}</td>
                    <td className="py-3 px-5 text-[#94A3B8] text-sm font-mono line-through decoration-white/25">{row.typical}</td>
                    <td className="py-3 px-5 text-right">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-bold text-accent">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        {row.us}
                      </span>
                    </td>
                  </tr>
                ))}

                {/* TOTAL ROW */}
                <tr className="border-t-2 border-accent/40 bg-accent/[0.06]">
                  <td className="py-5 px-5 font-display font-bold uppercase tracking-[0.2em] text-[10px] text-[#B91C1C]">
                    Stack Total / Year
                  </td>
                  <td className="py-5 px-5">
                    <span className="font-display font-bold text-2xl sm:text-3xl text-white line-through decoration-[#B91C1C]/80 decoration-[3px]">
                      $1,322–$3,759
                    </span>
                    <span className="ml-2 text-xs text-[#64748B] font-mono">/mo</span>
                    <span className="block text-[11px] text-[#64748B] font-mono mt-1">
                      $15,864–$45,108/year
                    </span>
                  </td>
                  <td className="py-5 px-5 text-right">
                    <span className="block font-display font-bold text-2xl sm:text-3xl text-accent">
                      $797
                    </span>
                    <span className="block text-[11px] text-[#64748B] font-mono mt-1">
                      /mo · all-in (Launch tier)
                    </span>
                  </td>
                </tr>

                {/* SAVINGS ROW */}
                <tr className="bg-accent/[0.08]">
                  <td className="py-5 px-5 font-display font-bold uppercase tracking-[0.26em] text-[11px] text-accent">
                    You Save
                  </td>
                  <td className="py-5 px-5" colSpan={2}>
                    <div className="flex flex-wrap items-baseline gap-3">
                      <span className="font-display font-bold text-2xl sm:text-3xl text-white">
                        $525–$2,962
                      </span>
                      <span className="text-sm text-[#94A3B8]">per month</span>
                      <span className="text-accent">·</span>
                      <span className="font-display font-bold text-xl sm:text-2xl text-accent">
                        $6,300–$35,544
                      </span>
                      <span className="text-sm text-[#94A3B8]">per year</span>
                    </div>
                    <p className="mt-2 text-[11px] text-[#64748B]">
                      Based on Launch Self-Serve. AI Agents ($397) replaces fewer tools at lower cost; Growth ($1,497) and Scale ($2,497) tiers add more capability and still undercut a full SaaS stack.
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="#self-serve"
              className="inline-flex items-center justify-center gap-2 rounded-sm border-2 border-accent bg-accent px-6 py-3 text-xs font-bold uppercase tracking-[0.22em] text-navy shadow-gold transition-all hover:bg-transparent hover:text-accent"
            >
              Start Saving Today
            </a>
            <a
              href="/demo"
              className="inline-flex items-center justify-center gap-2 rounded-sm border-2 border-white/70 px-6 py-3 text-xs font-bold uppercase tracking-[0.22em] text-white transition-all hover:bg-white hover:text-navy"
            >
              See A Live Demo
            </a>
          </div>

          <p className="mt-5 text-center text-[10px] uppercase tracking-[0.26em] text-[#64748B]">
            Prices reflect published list pricing at each vendor as of 2026.
            Twilio / Meta Ads excluded from totals (usage-priced).
          </p>
        </div>
      </section>

      {/* ═══════════ SEO INCLUDED ═══════════ */}
      <section id="seo" className="section-cream border-t border-[#0F172A]/10 py-20 sm:py-24">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mb-10">
            <div className="flex items-center gap-3 mb-3">
              <Search className="text-accent w-6 h-6" />
              <p className="eyebrow">SEO &amp; Visibility</p>
            </div>
            <h2 className="h-display text-3xl sm:text-4xl font-bold text-[#0F172A]">
              Enterprise-Grade SEO — Built In, Not Billed Separately.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#475569] max-w-3xl">
              Most agencies charge $2,000–$5,000/month for what we build in
              from day one. On every plan. Every site. This is not an add-on.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[
              "Technical SEO audit + remediation",
              "Schema.org structured data",
              "Google Business Profile optimization",
              "Google Search Console + sitemap",
              "Bing Webmaster Tools",
              "Google Analytics 4",
              "Google Tag Manager",
              "Meta Pixel + Conversion API",
              "Microsoft Clarity heatmaps",
              "Open Graph + Twitter Cards",
              "XML sitemap (auto-generated)",
              "Image optimization + lazy loading",
              "Core Web Vitals tuning",
              "Local SEO + NAP consistency",
              "AI overview optimization (ChatGPT / Perplexity)",
              "Keyword + competitor gap analysis",
              "Internal linking architecture",
              "Mobile-first responsive design",
              "SSL / HTTPS verification",
              "WCAG accessibility foundations",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-2 rounded-xl border border-[#0F172A]/10 bg-white px-4 py-3 shadow-soft"
              >
                <CheckCircle2 className="text-accent w-4 h-4 mt-0.5 shrink-0" />
                <span className="text-sm text-[#475569]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ REFERRAL ═══════════ */}
      <section className="section-cream border-t border-[#0F172A]/10 py-16">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          <div className="rounded-[22px] border-2 border-accent/40 bg-accent/10 p-7 sm:p-9 flex flex-col sm:flex-row items-center gap-6">
            <div className="flex-1">
              <p className="text-[10px] uppercase tracking-[0.28em] text-accent font-bold mb-2">
                Referral Program
              </p>
              <h3 className="h-display text-xl sm:text-2xl font-bold text-[#0F172A]">
                Refer a business. Get 1 month free + $100 credits on activation.
              </h3>
              <p className="mt-2 text-sm text-[#475569]">
                Your referral link lives in your dashboard. When they sign up
                and activate, you both win.
              </p>
            </div>
            <a
              href="/contact"
              className="shrink-0 bg-accent text-navy px-7 py-3.5 text-xs font-bold uppercase tracking-[0.22em] rounded-sm shadow-gold hover:bg-[#3B82F6] transition-all"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════ FAQ ═══════════ */}
      <section className="section-cream border-t border-[#0F172A]/10 py-20 sm:py-24">
        <div className="max-w-[900px] mx-auto px-6 sm:px-8">
          <div className="text-center mb-10">
            <p className="eyebrow">Pricing Questions</p>
            <h2 className="mt-3 h-display text-3xl sm:text-4xl font-bold text-[#0F172A]">
              Common Questions About Plans &amp; Pricing.
            </h2>
          </div>
          <div>
            {faqs.map((item) => (
              <details key={item.q} className="group border-b border-[#0F172A]/10 py-2">
                <summary className="flex cursor-pointer select-none items-center justify-between py-4 text-base font-semibold text-[#0F172A] sm:text-lg">
                  <span className="pr-6">{item.q}</span>
                  <span className="shrink-0 text-2xl text-accent transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="pb-5 pr-8 text-sm leading-relaxed text-[#475569] sm:text-base">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section className="section-dark-radial py-20 sm:py-24 text-center">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          <p className="eyebrow">Ready to Launch</p>
          <h2 className="mt-3 h-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Ready to Run Your Business on One System?
          </h2>
          <p className="max-w-2xl mx-auto mt-5 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Book a setup call and be live in two to three weeks, or start
            self-serve today. Same platform. Same features. Same Phoenix team
            supporting you.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/intake"
              className="px-7 py-3.5 text-xs font-bold uppercase tracking-[0.22em] border-2 border-accent bg-accent text-navy shadow-gold hover:bg-transparent hover:text-accent transition-all rounded-sm"
            >
              Book A Setup Call
            </a>
            <a
              href="/contact"
              className="px-7 py-3.5 text-xs font-bold uppercase tracking-[0.22em] border-2 border-white/70 bg-transparent text-white hover:bg-white hover:text-navy transition-all rounded-sm"
            >
              See A Live Demo
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
