import type { Metadata } from "next";
import {
  Target,
  DollarSign,
  MousePointerClick,
  BarChart3,
  Settings2,
  Rocket,
} from "lucide-react";
import {
  BreadcrumbSchema,
  pageAlternates,
  pageOg,
  pageTwitter,
} from "../../../../lib/seo";

const title = "Google Ads & Paid Media Management";
const description =
  "Mathematically driven Google Ads management from $1,000–$15,000+/mo. Conversion-focused campaigns, negative keyword pruning, audience targeting, and Performance Max optimization.";

export const metadata: Metadata = {
  title,
  description,
  alternates: pageAlternates("/services/advertising"),
  openGraph: pageOg(title, description, "/services/advertising"),
  twitter: pageTwitter(title, description),
};

export default function AdvertisingPage() {
  return (
    <main id="main-content" className="navbar-offset">
      <BreadcrumbSchema
        items={[
          { name: "Services", path: "/services" },
          { name: "Google Ads", path: "/services/advertising" },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Google Ads & Paid Media Management",
            description,
            provider: {
              "@type": "Organization",
              name: "Adaptation Living LLC",
              url: "https://www.adaptationliving.com",
            },
            areaServed: "US",
            serviceType: "Paid Media Management",
            offers: {
              "@type": "AggregateOffer",
              lowPrice: "1000",
              highPrice: "15000",
              priceCurrency: "USD",
            },
          }),
        }}
      />

      {/* Hero */}
      <section className="max-w-[1200px] mx-auto px-8 pt-16 pb-8">
        <div className="flex items-center gap-3 mb-4">
          <Target className="text-accent w-8 h-8" />
          <span className="text-accent text-sm uppercase tracking-[3px] font-display">
            Paid Media
          </span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6 leading-tight">
          Google Ads &amp; Paid
          <br />
          Media Acquisition
        </h1>
        <p className="text-text-muted text-lg max-w-3xl leading-relaxed">
          While SEO builds long-term equity, Google Ads delivers immediate,
          controllable, scalable lead flow. Managing paid media for high-ticket
          clients requires mathematical precision — conversion rate
          optimization, exhaustive negative keyword exclusion, and granular
          audience targeting. We treat your ad budget as an investment with
          measurable returns, not an expense.
        </p>
      </section>

      {/* What We Do Differently */}
      <section className="max-w-[1200px] mx-auto px-8 py-16 border-t border-glass-border">
        <h2 className="font-display text-3xl font-bold mb-8">
          How We Manage Your Campaigns
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: MousePointerClick,
              title: "Conversion-First Strategy",
              desc: "Every campaign is built around your cost-per-acquisition target. We optimize for revenue, not clicks. Advanced conversion tracking ties every dollar of ad spend to actual business outcomes through CRM integration.",
            },
            {
              icon: Settings2,
              title: "Daily Optimization",
              desc: "Bid adjustments, negative keyword pruning, ad copy A/B testing, and audience refinement — every single day. AI-driven bidding algorithms require constant human oversight to prevent waste and capture opportunities.",
            },
            {
              icon: BarChart3,
              title: "Transparent Reporting",
              desc: "Monthly reports that show exactly where every dollar went, what it produced, and what we are changing next. No vanity metrics. Cost per lead, cost per acquisition, and return on ad spend — the numbers that matter.",
            },
            {
              icon: Target,
              title: "Audience Engineering",
              desc: "Custom intent audiences, remarketing pools, lookalike targeting, and geographic bid modifiers. We build audiences based on purchasing behavior, not demographics alone. Your ads reach people ready to buy.",
            },
            {
              icon: Rocket,
              title: "Performance Max",
              desc: "Advanced algorithmic campaigns across Search, Display, YouTube, Gmail, and Maps — optimized by Google's AI with our strategic guardrails. We configure the signals, exclusions, and creative assets that make Performance Max actually perform.",
            },
            {
              icon: DollarSign,
              title: "Landing Page Optimization",
              desc: "Ads are only half the equation. We build and optimize dedicated landing pages with message-match copy, trust signals, and conversion-focused layouts that turn clicks into customers.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-lg bg-white/[0.02] border border-glass-border"
            >
              <item.icon className="text-accent w-8 h-8 mb-4" />
              <h3 className="font-display text-lg font-bold mb-2">
                {item.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-[1200px] mx-auto px-8 py-16 border-t border-glass-border">
        <h2 className="font-display text-3xl font-bold mb-2">
          Google Ads Pricing
        </h2>
        <p className="text-text-muted text-base max-w-3xl mb-10">
          Flat-fee management that aligns our incentives with your results. We
          are not incentivized to increase your spend — we are incentivized to
          improve your returns.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: "Campaign Setup",
              price: "$1,500 – $3,500",
              period: "one-time",
              features: [
                "Deep historical account audit",
                "Advanced conversion tracking setup",
                "Competitive keyword research",
                "Ad copywriting & creative",
                "Landing page consultation",
                "Negative keyword foundation",
              ],
            },
            {
              name: "Local Dominance",
              price: "$1,000 – $2,500",
              period: "/mo",
              target: "$2K–$10K ad spend",
              features: [
                "Search Network & Local Service Ads",
                "Continuous A/B ad copy testing",
                "Weekly negative keyword pruning",
                "Detailed monthly reporting",
                "Geographic bid optimization",
                "Monthly strategy call",
              ],
            },
            {
              name: "Regional Growth",
              price: "$2,500 – $5,000",
              period: "/mo",
              target: "$10K–$40K ad spend",
              highlighted: true,
              features: [
                "Multi-channel (Search, Display, YouTube)",
                "Deep CRM API conversion tracking",
                "Advanced audience segmentation",
                "Retargeting & remarketing",
                "Bi-weekly strategy calls",
                "Custom reporting dashboard",
              ],
            },
            {
              name: "Enterprise Operations",
              price: "$6,000 – $15,000+",
              period: "/mo",
              target: "$50K+ ad spend",
              features: [
                "Multi-location architecture",
                "Performance Max optimization",
                "Dedicated account manager",
                "Daily bid optimization",
                "Offline conversion integration",
                "Weekly executive reporting",
              ],
            },
          ].map((tier) => (
            <div
              key={tier.name}
              className={`glass rounded-lg p-8 flex flex-col h-full transition-all hover:-translate-y-1 ${
                "highlighted" in tier && tier.highlighted
                  ? "border-accent border-2 glow-accent"
                  : ""
              }`}
            >
              <h3 className="font-display text-xl font-bold mb-1">
                {tier.name}
              </h3>
              {"target" in tier && (
                <p className="text-text-muted text-xs mb-2">{tier.target}</p>
              )}
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
                href={`/intake?service=${encodeURIComponent(`Google Ads — ${tier.name}`)}`}
                className="block text-center text-sm uppercase tracking-widest font-semibold border-2 border-accent bg-accent text-white px-6 py-3 rounded hover:bg-transparent hover:text-accent transition-all"
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-gradient-to-br from-accent/10 to-bg-dark/90 border-t border-glass-border">
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="font-display text-3xl font-bold mb-4">
            Every Day Without Ads Is Revenue Left on the Table
          </h2>
          <p className="text-text-muted text-lg max-w-xl mx-auto mb-8">
            Get a free campaign audit. We will show you exactly where your
            current spend is being wasted and how to fix it.
          </p>
          <a
            href="/intake"
            className="px-8 py-4 text-base uppercase tracking-widest font-semibold border-2 border-accent bg-accent text-white hover:bg-transparent hover:text-accent transition-all inline-block"
          >
            Get Your Free Audit
          </a>
        </div>
      </section>
    </main>
  );
}
