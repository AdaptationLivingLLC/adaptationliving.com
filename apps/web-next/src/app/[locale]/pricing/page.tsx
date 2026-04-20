import type { Metadata } from "next";
import {
  Rocket,
  TrendingUp,
  Crown,
  Code,
  Cpu,
  Search,
  Palette,
  Target,
  Shield,
  Phone,
  Mail,
} from "lucide-react";
import {
  BreadcrumbSchema,
  pageAlternates,
  pageOg,
  pageTwitter,
} from "../../../lib/seo";

const title = "Pricing — Master Service Packages";
const description =
  "Three comprehensive service tiers from $15,000 to $200,000+. Custom web design, CRM automation, SEO, branding, paid media, and adversarial intelligence — unified under one roof.";

export const metadata: Metadata = {
  title,
  description,
  alternates: pageAlternates("/pricing"),
  openGraph: pageOg(title, description, "/pricing"),
  twitter: pageTwitter(title, description),
};

interface MasterTier {
  icon: typeof Rocket;
  name: string;
  subtitle: string;
  target: string;
  setup: string;
  monthly: string;
  includes: { category: string; detail: string }[];
  highlighted?: boolean;
}

const masterTiers: MasterTier[] = [
  {
    icon: Rocket,
    name: "Market Entry & Infrastructure Protocol",
    subtitle: "Tier 1",
    target:
      "Established local businesses seeking a massive digital overhaul, brand modernization, and foundational automated growth systems.",
    setup: "$15,000 – $25,000",
    monthly: "$3,500 – $5,000 /mo",
    includes: [
      {
        category: "Web Design",
        detail:
          "10–15 page bespoke, non-template website. Lightning-fast, mobile-first, SEO foundation built in.",
      },
      {
        category: "Brand Refresh",
        detail:
          "Professional logo, color palettes, typography, and core digital asset updates.",
      },
      {
        category: "Adaptation OS",
        detail:
          "GoHighLevel CRM (Growth Automation tier) — unified inbox, missed-call text-back, chat widget, review automation.",
      },
      {
        category: "SEO",
        detail:
          "Local Authority campaign — GBP dominance in specific high-value Phoenix neighborhoods.",
      },
      {
        category: "Social Media",
        detail:
          "Profile optimization, grid aesthetic planning, and 8 custom posts per month.",
      },
    ],
  },
  {
    icon: TrendingUp,
    name: "Accelerated Growth & Intelligence Protocol",
    subtitle: "Tier 2",
    target:
      "Mid-market companies, multi-location practices, and aggressive regional competitors actively seeking to steal significant market share.",
    setup: "$45,000 – $70,000",
    monthly: "$8,500 – $15,000 /mo",
    highlighted: true,
    includes: [
      {
        category: "Web Design",
        detail:
          "20–40 page custom design with advanced UX/UI wireframing, content silos, and deep CRM API integrations.",
      },
      {
        category: "Branding",
        detail:
          "Full brand guidelines, voice architecture, and multi-channel marketing asset creation.",
      },
      {
        category: "Adaptation OS",
        detail:
          "AI Omnichannel tier — conversational AI booking bots, complex conditional pipelines, dedicated IP email.",
      },
      {
        category: "SEO",
        detail:
          "Regional Dominance campaign — high-intent transactional keywords, aggressive backlink acquisition, continuous technical audits.",
      },
      {
        category: "Google Ads",
        detail:
          "Paid media management for monthly ad budgets up to $20,000 — maximum lead volume, strict CPA control.",
      },
      {
        category: "Social Media",
        detail:
          "15 custom posts per month, basic short-form video editing, active community management.",
      },
      {
        category: "Intelligence",
        detail:
          "Bi-annual adversarial audit of your top 3 competitors — vulnerabilities identified, action plan delivered.",
      },
    ],
  },
  {
    icon: Crown,
    name: "Enterprise Domination & Adversarial Protocol",
    subtitle: "Tier 3",
    target:
      "Market leaders, multi-state operators, massive e-commerce platforms, and high-revenue B2B firms requiring total digital supremacy.",
    setup: "$100,000 – $200,000+",
    monthly: "$25,000 – $50,000+ /mo",
    includes: [
      {
        category: "Web Design",
        detail:
          "50+ page bespoke enterprise platform. Headless CMS, custom web applications, military-grade compliance (HIPAA/SOC2).",
      },
      {
        category: "Brand Identity",
        detail:
          "Total ground-up corporate rebrand — market positioning strategy and ongoing creative direction.",
      },
      {
        category: "Adaptation OS",
        detail:
          "Enterprise-wide GoHighLevel across multiple sub-accounts and locations, fully white-labeled as your proprietary system.",
      },
      {
        category: "SEO & AI",
        detail:
          "National SEO campaigns plus AI-agent optimization — engineering generative models to recommend you over all competitors.",
      },
      {
        category: "Paid Media",
        detail:
          "Omnichannel management (Google, Meta, LinkedIn) for ad budgets exceeding $50,000/mo — Performance Max, offline conversion tracking.",
      },
      {
        category: "Content & PR",
        detail:
          "Daily content publishing, high-end video production, and executive thought-leadership across all major platforms.",
      },
      {
        category: "Adversarial Intel",
        detail:
          "Monthly tactical briefings — competitor tracking, price monitoring, LLM narrative analysis, and continuous red-teaming exercises.",
      },
    ],
  },
];

export default function PricingPage() {
  return (
    <main id="main-content" className="navbar-offset">
      <BreadcrumbSchema items={[{ name: "Pricing", path: "/pricing" }]} />

      {/* Page Header */}
      <section className="max-w-[1200px] mx-auto px-8 pt-16 pb-8 text-center">
        <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
          Master Service Packages
        </h1>
        <p className="text-text-muted text-lg max-w-3xl mx-auto">
          Enterprise clients do not want to manage multiple vendors. These
          packages unify custom web design, CRM automation, SEO, branding, paid
          media, and adversarial intelligence into a single, flawlessly
          synchronized system. One team. One invoice. Total digital dominance.
        </p>
      </section>

      {/* Three Tiers */}
      <section className="max-w-[1400px] mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {masterTiers.map((tier) => (
            <div
              key={tier.name}
              className={`glass rounded-lg p-10 flex flex-col transition-all hover:-translate-y-1 ${
                tier.highlighted ? "border-accent border-2 glow-accent" : ""
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <tier.icon className="text-accent w-8 h-8" />
                <span className="text-accent text-xs uppercase tracking-[3px] font-display">
                  {tier.subtitle}
                </span>
              </div>
              <h2 className="font-display text-2xl font-bold mb-3">
                {tier.name}
              </h2>
              <p className="text-text-muted text-sm mb-6 leading-relaxed">
                {tier.target}
              </p>

              <div className="mb-6 p-4 rounded bg-white/[0.03] border border-glass-border">
                <div className="mb-2">
                  <span className="text-xs uppercase tracking-wider text-text-muted">
                    Initial Investment
                  </span>
                  <span className="block text-2xl font-bold text-accent">
                    {tier.setup}
                  </span>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-text-muted">
                    Monthly Retainer
                  </span>
                  <span className="block text-2xl font-bold text-accent">
                    {tier.monthly}
                  </span>
                </div>
              </div>

              <div className="flex-1 space-y-4 mb-8">
                {tier.includes.map((item) => (
                  <div key={item.category}>
                    <span className="text-xs uppercase tracking-wider text-accent font-semibold">
                      {item.category}
                    </span>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href={`/intake?package=${encodeURIComponent(tier.name)}`}
                className="block text-center text-sm uppercase tracking-widest font-semibold border-2 border-accent bg-accent text-white px-6 py-4 rounded hover:bg-transparent hover:text-accent transition-all"
              >
                Request Proposal
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Individual Services */}
      <section className="max-w-[1200px] mx-auto px-8 py-16 border-t border-glass-border">
        <h2 className="font-display text-3xl font-bold text-center mb-4">
          Individual Service Pages
        </h2>
        <p className="text-text-muted text-center text-base max-w-2xl mx-auto mb-10">
          Need a specific service rather than a full package? Each capability is
          available independently with its own detailed pricing.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Code,
              name: "Custom Web Design",
              range: "$5,000 – $150,000+",
              href: "/services/web-design",
            },
            {
              icon: Cpu,
              name: "Business Automation (CRM)",
              range: "$97 – $697 /mo",
              href: "/services/automation",
            },
            {
              icon: Search,
              name: "SEO Services",
              range: "$1,500 – $15,000+ /mo",
              href: "/services/seo",
            },
            {
              icon: Palette,
              name: "Branding & Social Media",
              range: "$1,500 – $50,000+",
              href: "/services/branding",
            },
            {
              icon: Target,
              name: "Google Ads Management",
              range: "$1,000 – $15,000+ /mo",
              href: "/services/advertising",
            },
            {
              icon: Shield,
              name: "Market Intelligence",
              range: "$3,500 – $50,000+",
              href: "/services/intelligence",
            },
          ].map((svc) => (
            <a
              key={svc.name}
              href={svc.href}
              className="flex items-start gap-4 p-6 rounded-lg bg-white/[0.02] border border-glass-border hover:border-accent hover:-translate-y-0.5 transition-all group"
            >
              <svc.icon className="text-accent w-6 h-6 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-display text-lg font-bold group-hover:text-accent transition-all">
                  {svc.name}
                </h3>
                <p className="text-text-muted text-sm">{svc.range}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-gradient-to-br from-accent/10 to-bg-dark/90 border-t border-glass-border">
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="font-display text-3xl font-bold mb-4">
            Ready to Build Something That Dominates?
          </h2>
          <p className="text-text-muted text-lg max-w-xl mx-auto mb-8">
            Tell us what you are trying to accomplish. We will map your goals to
            the right package and deliver a clear proposal — no pressure, no
            pitch decks.
          </p>
          <div className="flex justify-center gap-8 mb-8 flex-wrap">
            <a
              href="tel:6232191237"
              className="flex items-center gap-2 text-lg font-semibold hover:text-accent transition-all"
            >
              <Phone className="text-accent w-5 h-5" />
              623-219-1237
            </a>
            <a
              href="mailto:info@adaptationliving.com"
              className="flex items-center gap-2 text-lg font-semibold hover:text-accent transition-all"
            >
              <Mail className="text-accent w-5 h-5" />
              info@adaptationliving.com
            </a>
          </div>
          <a
            href="/intake"
            className="px-8 py-4 text-base uppercase tracking-widest font-semibold border-2 border-accent bg-accent text-white hover:bg-transparent hover:text-accent transition-all inline-block"
          >
            Request Your Proposal
          </a>
        </div>
      </section>
    </main>
  );
}
