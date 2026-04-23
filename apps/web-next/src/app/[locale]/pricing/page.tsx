import type { Metadata } from "next";
import {
  Rocket,
  TrendingUp,
  Crown,
  CheckCircle2,
  Sparkles,
  Phone,
} from "lucide-react";
import {
  BreadcrumbSchema,
  pageAlternates,
  pageOg,
  pageTwitter,
} from "../../../lib/seo";

const title = "Pricing — Plans & Setup";
const description =
  "Transparent pricing for the Adaptation Living Platform. Self-Serve plans from $497/mo and Done-For-You plans from $1,497/mo. Every tier includes a custom SEO website, AI agents, CRM, automated follow-up, and review management. Veteran-owned, Phoenix AZ.";

export const metadata: Metadata = {
  title,
  description,
  alternates: pageAlternates("/pricing"),
  openGraph: pageOg(title, description, "/pricing"),
  twitter: pageTwitter(title, description),
};

type Tier = {
  name: string;
  users: string;
  monthly: string;
  setup: string;
  highlighted?: boolean;
};

const selfServeTiers: Tier[] = [
  { name: "Launch", users: "3 users", monthly: "$497", setup: "$1,500" },
  {
    name: "Growth",
    users: "5 users",
    monthly: "$997",
    setup: "$2,500",
    highlighted: true,
  },
  {
    name: "Scale",
    users: "Up to 10 users",
    monthly: "$1,997",
    setup: "$5,000",
  },
];

const doneForYouTiers: Tier[] = [
  {
    name: "Launch DFY",
    users: "3 users",
    monthly: "$1,497",
    setup: "$2,500",
  },
  {
    name: "Growth DFY",
    users: "5 users",
    monthly: "$2,497",
    setup: "$3,500",
    highlighted: true,
  },
  {
    name: "Scale DFY",
    users: "Up to 10 users",
    monthly: "$4,497",
    setup: "$7,500",
  },
];

const includedAtEveryTier = [
  "Custom website, fully SEO-optimized per full industry standards",
  "Custom AI voice agents and AI chat agents configured for your business",
  "Custom AI employees that handle specific workflows (intake, follow-up, social media, reviews)",
  "Social media setup and integration across Facebook, Instagram, LinkedIn, Google Business Profile, and Yelp",
  "Full Customer Relationship Management (CRM)",
  "Automated follow-up workflows (Short Message Service, email, phone)",
  "Review and reputation management",
  "Appointment booking and calendar integration",
  "Payment processing and invoicing",
  "Email and SMS marketing",
  "Full configuration and ongoing support",
  "Everything deployed in your brand",
];

function TierCard({ tier, flavor }: { tier: Tier; flavor: "self" | "dfy" }) {
  return (
    <article
      className={`relative rounded-[20px] p-8 transition-all duration-300 ${
        tier.highlighted
          ? "border-2 border-[#2563EB] bg-gradient-to-b from-[#2563EB]/[0.04] to-white shadow-[0_16px_40px_rgba(37,99,235,0.12)]"
          : "border-2 border-[#0B1D3A]/10 bg-white hover:border-[#2563EB]/40 hover:shadow-[0_8px_24px_rgba(11,29,58,0.08)]"
      }`}
    >
      {tier.highlighted && (
        <div className="absolute -top-3 left-8 text-[10px] font-bold uppercase tracking-[0.22em] text-white bg-[#2563EB] rounded-full px-3 py-1">
          Most Popular
        </div>
      )}
      <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#2563EB] mb-2">
        {flavor === "self" ? "Self-Serve" : "Done-For-You"}
      </div>
      <h3 className="font-display text-[24px] font-extrabold text-[#0B1D3A] tracking-[-0.01em]">
        {tier.name}
      </h3>
      <div className="mt-1 text-[13px] text-[#64748B]">{tier.users}</div>
      <div className="mt-6 flex items-baseline gap-1">
        <span className="font-display text-[42px] font-extrabold text-[#0B1D3A] leading-none tracking-[-0.02em]">
          {tier.monthly}
        </span>
        <span className="text-[14px] font-semibold text-[#64748B]">/mo</span>
      </div>
      <div className="mt-3 text-[13px] text-[#64748B]">
        One-time setup: <strong className="text-[#0B1D3A]">{tier.setup}</strong>
      </div>
      <a
        href="/demo"
        className={`mt-7 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[10px] text-[12px] font-bold uppercase tracking-[0.14em] transition-all duration-200 ${
          tier.highlighted
            ? "bg-[#2563EB] text-white shadow-[0_8px_24px_rgba(37,99,235,0.35)] hover:bg-[#1D4ED8]"
            : "border-2 border-[#0B1D3A]/15 text-[#0B1D3A] hover:border-[#2563EB] hover:text-[#2563EB]"
        }`}
      >
        Book a Demo →
      </a>
    </article>
  );
}

export default function PricingPage() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Pricing", path: "/pricing" },
  ];

  return (
    <main id="main-content" className="relative">
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0B1D3A] text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(ellipse 900px 500px at 50% 0%, rgba(37,99,235,0.28) 0%, transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-[1100px] px-6 sm:px-8 pt-20 pb-16 lg:pt-24 lg:pb-20 text-center">
          <span className="inline-block text-[10px] font-bold tracking-[0.32em] uppercase text-[#93C5FD] bg-[#2563EB]/15 border border-[#2563EB]/40 rounded-full px-4 py-1.5 mb-6">
            Pricing
          </span>
          <h1 className="font-display text-[clamp(32px,5vw,52px)] font-extrabold leading-[1.05] tracking-[-0.025em] max-w-[900px] mx-auto">
            Choose your engagement.
          </h1>
          <p className="mt-6 text-[16px] lg:text-[18px] text-white/80 leading-relaxed max-w-[740px] mx-auto">
            Every tier runs on our proprietary software — deployed in your
            brand, supported by a veteran-owned team in Uptown Phoenix.
          </p>
        </div>
      </section>

      {/* Self-Serve Tiers */}
      <section
        aria-labelledby="self-serve-heading"
        className="bg-white py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-[10px] font-bold tracking-[0.32em] uppercase text-[#2563EB] mb-3">
              Self-Serve
            </span>
            <h2
              id="self-serve-heading"
              className="font-display text-[clamp(24px,3.5vw,38px)] font-extrabold text-[#0B1D3A] leading-[1.1] tracking-[-0.02em]"
            >
              You run it. <span className="text-[#2563EB]">We support you.</span>
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {selfServeTiers.map((t) => (
              <TierCard key={t.name} tier={t} flavor="self" />
            ))}
          </div>
        </div>
      </section>

      {/* Done-For-You Tiers */}
      <section
        aria-labelledby="dfy-heading"
        className="bg-[#F8FAFC] py-20 lg:py-24 border-t border-[#0B1D3A]/5"
      >
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-[10px] font-bold tracking-[0.32em] uppercase text-[#2563EB] mb-3">
              Done-For-You
            </span>
            <h2
              id="dfy-heading"
              className="font-display text-[clamp(24px,3.5vw,38px)] font-extrabold text-[#0B1D3A] leading-[1.1] tracking-[-0.02em]"
            >
              We run it. <span className="text-[#2563EB]">You focus on clients.</span>
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {doneForYouTiers.map((t) => (
              <TierCard key={t.name} tier={t} flavor="dfy" />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Users + Setup Fee Policy */}
      <section className="bg-white py-16 border-t border-[#0B1D3A]/5">
        <div className="mx-auto max-w-[960px] px-6 sm:px-8">
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-[16px] border border-[#0B1D3A]/10 p-7 bg-white">
              <h3 className="font-display text-[18px] font-extrabold text-[#0B1D3A] mb-3">
                Additional users beyond the tier cap
              </h3>
              <p className="text-[14.5px] leading-[1.7] text-[#475569]">
                <strong className="text-[#0B1D3A]">
                  $75/user/month
                </strong>{" "}
                for every user added above your tier&apos;s user cap. Example:
                Growth includes 5 users. A 6th user adds $75/mo. A 7th user
                adds another $75/mo. The $75 rate applies equally to Self-Serve
                and Done-For-You tiers.
              </p>
            </div>
            <div className="rounded-[16px] border border-[#0B1D3A]/10 p-7 bg-white">
              <h3 className="font-display text-[18px] font-extrabold text-[#0B1D3A] mb-3">
                Setup fees
              </h3>
              <p className="text-[14.5px] leading-[1.7] text-[#475569]">
                Setup fees cover the real work: custom website, AI agent
                configuration, CRM setup, calendar and payment integration,
                social media connection, workflows, and team training. Pay in
                full upfront, bundle into the first 3 months of service, or{" "}
                <strong className="text-[#0B1D3A]">
                  prepay 12 months and setup is waived entirely.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founding Customer Offer */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-[960px] px-6 sm:px-8">
          <div className="rounded-[20px] border-2 border-[#F59E0B] bg-gradient-to-br from-[#FEF3C7] to-white p-8 lg:p-10 text-center shadow-[0_8px_24px_rgba(245,158,11,0.12)]">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#92400E] mb-4">
              <Sparkles className="w-4 h-4" /> Founding Customer Offer
            </div>
            <h3 className="font-display text-[22px] lg:text-[28px] font-extrabold text-[#0B1D3A] leading-tight tracking-[-0.01em] max-w-[720px] mx-auto">
              First 10 Phoenix law firms and mitigation specialists get a
              12-month price lock — setup fees waived.
            </h3>
            <div className="mt-6 grid gap-4 md:grid-cols-2 max-w-[720px] mx-auto">
              <div className="rounded-[12px] border border-[#0B1D3A]/10 bg-white p-5 text-left">
                <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#92400E] mb-1">
                  Growth Self-Serve
                </div>
                <div className="font-display text-[24px] font-extrabold text-[#0B1D3A]">
                  $497/mo
                </div>
                <div className="text-[12px] text-[#64748B]">
                  Locked for 12 months · Normally $997/mo
                </div>
              </div>
              <div className="rounded-[12px] border border-[#0B1D3A]/10 bg-white p-5 text-left">
                <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#92400E] mb-1">
                  Growth Done-For-You
                </div>
                <div className="font-display text-[24px] font-extrabold text-[#0B1D3A]">
                  $1,497/mo
                </div>
                <div className="text-[12px] text-[#64748B]">
                  Locked for 12 months · Normally $2,497/mo
                </div>
              </div>
            </div>
            <p className="mt-6 text-[13px] text-[#713F12]">
              Featured as a Founding Partner (optional). Limited slots.
            </p>
            <div className="mt-6">
              <a
                href="/demo?offer=founding"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-[10px] bg-[#0B1D3A] text-white text-[12px] font-bold uppercase tracking-[0.14em] hover:bg-[#1D4ED8] transition-all duration-200"
              >
                Claim a Founding Slot →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included at Every Tier */}
      <section
        aria-labelledby="included-heading"
        className="bg-[#F8FAFC] py-20 lg:py-24 border-t border-[#0B1D3A]/5"
      >
        <div className="mx-auto max-w-[960px] px-6 sm:px-8">
          <div className="text-center mb-10">
            <span className="inline-block text-[10px] font-bold tracking-[0.32em] uppercase text-[#2563EB] mb-3">
              Every Tier · Every Engagement
            </span>
            <h2
              id="included-heading"
              className="font-display text-[clamp(24px,3.5vw,36px)] font-extrabold text-[#0B1D3A] leading-[1.1] tracking-[-0.02em]"
            >
              What you get at every tier
            </h2>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {includedAtEveryTier.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 bg-white border border-[#0B1D3A]/8 rounded-[12px] p-4"
              >
                <CheckCircle2 className="flex-shrink-0 w-5 h-5 text-[#2563EB] mt-0.5" />
                <p className="text-[14px] leading-[1.6] text-[#334155]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-[#0B1D3A] text-white py-20 lg:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(ellipse 800px 400px at 50% 50%, rgba(37,99,235,0.28) 0%, transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-[800px] px-6 sm:px-8 text-center">
          <h2 className="font-display text-[clamp(26px,4vw,42px)] font-extrabold leading-[1.08] tracking-[-0.02em]">
            Not sure which tier fits?
          </h2>
          <p className="mt-5 text-[15px] lg:text-[16px] text-white/75 leading-relaxed max-w-[620px] mx-auto">
            A 30-minute demo is the fastest way. We&apos;ll map your business
            to the right tier, answer every question, and quote setup and
            onboarding on the call.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="/demo"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-[10px] bg-[#2563EB] text-white text-[13px] font-bold uppercase tracking-[0.14em] shadow-[0_8px_24px_rgba(37,99,235,0.4)] hover:bg-[#1D4ED8] hover:-translate-y-0.5 transition-all duration-200"
            >
              Book a Demo →
            </a>
            <a
              href="tel:+16232191237"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-[10px] border-2 border-[#93C5FD]/40 text-[#93C5FD] text-[13px] font-bold uppercase tracking-[0.14em] hover:bg-[#2563EB]/15 hover:border-[#2563EB] hover:text-white transition-all duration-200"
            >
              <Phone className="w-4 h-4" /> 623-219-1237
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
