import type { Metadata } from "next";
import {
  Search,
  MapPin,
  Globe,
  TrendingUp,
  FileCode2,
  BrainCircuit,
} from "lucide-react";
import {
  BreadcrumbSchema,
  pageAlternates,
  pageOg,
  pageTwitter,
} from "../../../../lib/seo";

const title = "High-Intent SEO Services";
const description =
  "Data-driven SEO from $1,500–$15,000+/mo. Hyper-local Phoenix targeting, entity-based optimization, AI overview positioning, and aggressive backlink acquisition.";

export const metadata: Metadata = {
  title,
  description,
  alternates: pageAlternates("/services/seo"),
  openGraph: pageOg(title, description, "/services/seo"),
  twitter: pageTwitter(title, description),
};

interface SEOTier {
  name: string;
  objective: string;
  price: string;
  period: string;
  features: string[];
  highlighted?: boolean;
}

const tiers: SEOTier[] = [
  {
    name: "Local Authority",
    objective:
      "Dominate specific Phoenix neighborhoods to drive immediate local traffic and calls",
    price: "$1,500 – $3,000",
    period: "/mo",
    features: [
      "Google Business Profile optimization",
      "Local citation building & cleanup",
      "Monthly hyper-local content creation",
      "Basic on-page technical monitoring",
      "Automated review generation",
      "Neighborhood-level keyword targeting",
      "Monthly reporting & strategy call",
    ],
  },
  {
    name: "Regional Dominance",
    objective:
      "Secure statewide visibility for highly competitive service sectors",
    price: "$3,500 – $7,000",
    period: "/mo",
    highlighted: true,
    features: [
      "Everything in Local Authority",
      "Extensive technical SEO audits",
      "Robust content architecture & silos",
      "Aggressive white-hat backlink acquisition",
      "AI overview optimization",
      "Continuous intent-gap analysis",
      "Bi-weekly strategy calls",
    ],
  },
  {
    name: "Enterprise Ascendancy",
    objective:
      "Dominate national commercial queries against massive incumbents",
    price: "$8,000 – $15,000+",
    period: "/mo",
    features: [
      "Everything in Regional Dominance",
      "Multi-location GBP architecture",
      "Enterprise-grade technical SEO",
      "Digital PR & authoritative placements",
      "Premium link acquisition campaigns",
      "Full adversarial keyword monitoring",
      "Weekly executive briefings",
    ],
  },
];

export default function SEOPage() {
  return (
    <main id="main-content" className="navbar-offset">
      <BreadcrumbSchema
        items={[
          { name: "Services", path: "/services" },
          { name: "SEO", path: "/services/seo" },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "High-Intent Search Engine Optimization",
            description,
            provider: {
              "@type": "Organization",
              name: "Adaptation Living LLC",
              url: "https://www.adaptationliving.com",
            },
            areaServed: "US",
            serviceType: "Search Engine Optimization",
            offers: {
              "@type": "AggregateOffer",
              lowPrice: "1500",
              highPrice: "15000",
              priceCurrency: "USD",
            },
          }),
        }}
      />

      {/* Hero */}
      <section className="max-w-[1200px] mx-auto px-8 pt-16 pb-8">
        <div className="flex items-center gap-3 mb-4">
          <Search className="text-accent w-8 h-8" />
          <span className="text-accent text-sm uppercase tracking-[3px] font-display">
            Search Engine Optimization
          </span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6 leading-tight">
          High-Intent SEO
          <br />
          That Drives Revenue
        </h1>
        <p className="text-text-muted text-lg max-w-3xl leading-relaxed">
          Massive traffic volume is irrelevant if no one is buying. We focus
          exclusively on transactional, high-intent keywords — the searches
          conducted by people with immediate purchasing intent. In a market as
          competitive as Phoenix, ranking requires flawless technical
          foundations, entity-based optimization, and aggressive authority
          building.
        </p>
      </section>

      {/* The Landscape */}
      <section className="max-w-[1200px] mx-auto px-8 py-16 border-t border-glass-border">
        <h2 className="font-display text-3xl font-bold mb-8">
          The 2026 Search Landscape
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-lg bg-white/[0.02] border border-glass-border">
            <BrainCircuit className="text-accent w-8 h-8 mb-4" />
            <h3 className="font-display text-lg font-bold mb-2">
              AI Overviews Are Eating Clicks
            </h3>
            <p className="text-text-muted text-sm leading-relaxed">
              Generative AI now appears in roughly 60% of search results,
              directly answering user questions without clicks to your website.
              Businesses face projected losses of significant traditional
              visibility. Your site must be structured to be cited as the
              primary source of truth by these AI engines — or you become
              invisible.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-white/[0.02] border border-glass-border">
            <Globe className="text-accent w-8 h-8 mb-4" />
            <h3 className="font-display text-lg font-bold mb-2">
              Entity-Based Understanding
            </h3>
            <p className="text-text-muted text-sm leading-relaxed">
              Search engines have shifted from matching text strings to
              understanding entities — their attributes and relationships. This
              requires structured data, topical authority, and content
              architecture that establishes your business as a recognized entity
              in Google&apos;s Knowledge Graph.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-white/[0.02] border border-glass-border">
            <MapPin className="text-accent w-8 h-8 mb-4" />
            <h3 className="font-display text-lg font-bold mb-2">
              Hyper-Local Targeting
            </h3>
            <p className="text-text-muted text-sm leading-relaxed">
              Ranking for &ldquo;Phoenix&rdquo; is too diluted. We surgically
              target affluent sub-markets — Midtown, Uptown, Roosevelt Row,
              Arcadia, Encanto-Palmcroft, Camelback corridor. The Google Map
              Pack commands 15–18% CTR per top slot. The fight for those three
              positions is a mandate for revenue.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-white/[0.02] border border-glass-border">
            <TrendingUp className="text-accent w-8 h-8 mb-4" />
            <h3 className="font-display text-lg font-bold mb-2">
              Zero-Click Countermeasures
            </h3>
            <p className="text-text-muted text-sm leading-relaxed">
              Over 50% of Google searches end without a click. We counter this
              with featured snippet optimization, FAQ schema, how-to structured
              data, and content specifically engineered to be extracted and cited
              by AI summaries — keeping your brand visible even when users
              never visit your site.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Foundation */}
      <section className="max-w-[1200px] mx-auto px-8 py-16 border-t border-glass-border">
        <h2 className="font-display text-3xl font-bold mb-4">
          What We Execute
        </h2>
        <p className="text-text-muted text-base mb-8 max-w-3xl">
          Before any external signals can be effective, your technical
          foundation must be flawless. Every engagement includes a comprehensive
          technical audit and remediation.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Core Web Vitals optimization (LCP, FID, CLS)",
            "Dynamic XML sitemaps & crawl budget management",
            "JSON-LD structured data (Schema.org)",
            "Entity definition & Knowledge Graph targeting",
            "Index bloat & canonicalization fixes",
            "JavaScript rendering optimization",
            "Internal linking architecture",
            "Content silo strategy & topical authority",
            "High-authority backlink acquisition",
            "Google Business Profile management",
            "Local citation building & NAP consistency",
            "AI overview & featured snippet optimization",
            "Competitor gap analysis & keyword monitoring",
            "Monthly rank tracking & reporting",
            "Voice search optimization",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-2 p-3 rounded bg-white/[0.02]"
            >
              <FileCode2 className="text-accent w-4 h-4 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-text-muted">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-[1200px] mx-auto px-8 py-16 border-t border-glass-border">
        <h2 className="font-display text-3xl font-bold mb-2">SEO Pricing</h2>
        <p className="text-text-muted text-base max-w-3xl mb-10">
          True data-driven SEO, not outsourced template campaigns. Every
          retainer includes continuous technical monitoring, content creation,
          and authority building.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`glass rounded-lg p-8 flex flex-col h-full transition-all hover:-translate-y-1 ${
                tier.highlighted ? "border-accent border-2 glow-accent" : ""
              }`}
            >
              <h3 className="font-display text-xl font-bold mb-1">
                {tier.name}
              </h3>
              <p className="text-text-muted text-xs mb-3">{tier.objective}</p>
              <div className="mb-4">
                <span className="text-2xl font-bold text-accent">
                  {tier.price}
                </span>
                <span className="text-text-muted text-sm ml-1">
                  {tier.period}
                </span>
              </div>
              <ul className="flex-1 space-y-2 mb-6">
                {tier.features.map((f) => (
                  <li
                    key={f}
                    className="text-text-muted text-sm flex items-start gap-2"
                  >
                    <span className="text-accent mt-0.5">&#10003;</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={`/intake?service=${encodeURIComponent(`SEO — ${tier.name}`)}`}
                className="block text-center text-sm uppercase tracking-widest font-semibold border-2 border-accent bg-accent text-white px-6 py-3 rounded hover:bg-transparent hover:text-accent transition-all"
              >
                Start SEO Campaign
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-gradient-to-br from-accent/10 to-bg-dark/90 border-t border-glass-border">
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="font-display text-3xl font-bold mb-4">
            Your Competitors Are Already Optimizing
          </h2>
          <p className="text-text-muted text-lg max-w-xl mx-auto mb-8">
            Every day without proper SEO is market share lost to someone else.
            Book a free audit and see exactly where you stand — and what it
            takes to dominate.
          </p>
          <a
            href="/intake"
            className="px-8 py-4 text-base uppercase tracking-widest font-semibold border-2 border-accent bg-accent text-white hover:bg-transparent hover:text-accent transition-all inline-block"
          >
            Get Your Free SEO Audit
          </a>
        </div>
      </section>
    </main>
  );
}
