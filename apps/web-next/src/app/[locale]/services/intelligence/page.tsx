import type { Metadata } from "next";
import {
  Shield,
  Crosshair,
  Eye,
  FileSearch,
  BrainCircuit,
  Radar,
} from "lucide-react";
import {
  BreadcrumbSchema,
  pageAlternates,
  pageOg,
  pageTwitter,
} from "../../../../lib/seo";

const title = "Market Research & Adversarial Intelligence";
const description =
  "Comprehensive market research, competitor reverse-engineering, AI red-teaming, and continuous adversarial monitoring. From $3,500/report to $20,000+/mo retainers.";

export const metadata: Metadata = {
  title,
  description,
  alternates: pageAlternates("/services/intelligence"),
  openGraph: pageOg(title, description, "/services/intelligence"),
  twitter: pageTwitter(title, description),
};

export default function IntelligencePage() {
  return (
    <main id="main-content" className="navbar-offset">
      <BreadcrumbSchema
        items={[
          { name: "Services", path: "/services" },
          {
            name: "Market Intelligence",
            path: "/services/intelligence",
          },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Market Research & Adversarial Intelligence",
            description,
            provider: {
              "@type": "Organization",
              name: "Adaptation Living LLC",
              url: "https://www.adaptationliving.com",
            },
            areaServed: "US",
            serviceType: "Competitive Intelligence & Market Research",
            offers: {
              "@type": "AggregateOffer",
              lowPrice: "3500",
              highPrice: "50000",
              priceCurrency: "USD",
            },
          }),
        }}
      />

      {/* Hero */}
      <section className="max-w-[1200px] mx-auto px-8 pt-16 pb-8">
        <div className="flex items-center gap-3 mb-4">
          <Shield className="text-accent w-8 h-8" />
          <span className="text-accent text-sm uppercase tracking-[3px] font-display">
            Intelligence Division
          </span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6 leading-tight">
          Market Research &amp;
          <br />
          Adversarial Intelligence
        </h1>
        <p className="text-text-muted text-lg max-w-3xl leading-relaxed">
          Standard competitor analysis means looking at a competitor&apos;s
          website and running a basic scan. That is not what we do. We deploy
          comprehensive market research and aggressive adversarial intelligence
          to systematically identify and dismantle competitor advantages —
          borrowing methodologies from cybersecurity red teaming and applying
          them to market positioning.
        </p>
      </section>

      {/* Two Disciplines */}
      <section className="max-w-[1200px] mx-auto px-8 py-16 border-t border-glass-border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Traditional Research */}
          <div>
            <FileSearch className="text-accent w-10 h-10 mb-4" />
            <h2 className="font-display text-2xl font-bold mb-4">
              Comprehensive Market Research
            </h2>
            <p className="text-text-muted text-sm leading-relaxed mb-6">
              Traditional market research blends consumer behavior analysis with
              economic trends to confirm business ideas, reduce risk, and
              understand your target market. We answer the questions that matter:
              market demand, market size, economic indicators, geographic
              saturation, competitive pricing, and customer acquisition costs.
            </p>
            <ul className="space-y-3">
              {[
                "Secondary research: existing data, demographic profiling, industry trends",
                "Primary research: surveys (N=400+), in-depth interviews, focus groups",
                "Pricing sensitivity analysis & competitive pricing mapping",
                "Geographic market saturation studies",
                "Customer persona development from real data",
                "Market entry feasibility assessments",
              ].map((item) => (
                <li
                  key={item}
                  className="text-text-muted text-sm flex items-start gap-2"
                >
                  <span className="text-accent mt-0.5">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Adversarial */}
          <div>
            <Crosshair className="text-accent w-10 h-10 mb-4" />
            <h2 className="font-display text-2xl font-bold mb-4">
              Adversarial Intelligence
            </h2>
            <p className="text-text-muted text-sm leading-relaxed mb-6">
              Adversarial research treats the digital marketplace as a contested
              battlespace. We reverse-engineer competitor strategies, map their
              digital supply chains, and identify exploitable vulnerabilities —
              then build strategies to systematically capture their market share.
            </p>
            <ul className="space-y-3">
              {[
                "Competitor backlink profiling & link vulnerability mapping",
                "Paid media funnel reverse-engineering & spend estimation",
                "Historical pricing model analysis",
                "AI-driven sentiment analysis on competitor reviews",
                "LLM narrative testing: how AI summarizes competitors vs. you",
                "Continuous monitoring of competitor SEO, pricing, and launches",
              ].map((item) => (
                <li
                  key={item}
                  className="text-text-muted text-sm flex items-start gap-2"
                >
                  <span className="text-accent mt-0.5">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* AI Red Teaming */}
      <section className="max-w-[1200px] mx-auto px-8 py-16 border-t border-glass-border">
        <h2 className="font-display text-3xl font-bold mb-4">
          AI Red Teaming &amp; Narrative Control
        </h2>
        <p className="text-text-muted text-base mb-8 max-w-3xl leading-relaxed">
          In 2026, adversarial research extends deeply into artificial
          intelligence. We test how autonomous AI agents and Large Language
          Models summarize your business versus competitors, identify narrative
          vulnerabilities, and engineer strategies to ensure AI systems
          recommend your business as the authoritative source.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: BrainCircuit,
              title: "LLM Narrative Audits",
              desc: "We prompt major AI models with your target queries and analyze how they describe you vs. competitors. This reveals exactly where your digital authority is strong and where it is being undermined.",
            },
            {
              icon: Eye,
              title: "AI Overview Positioning",
              desc: "Google's AI Overviews cite specific sources. We engineer your content to be the primary citation for your target queries — ensuring your brand appears in AI-generated answers.",
            },
            {
              icon: Radar,
              title: "Continuous Monitoring",
              desc: "Monthly tactical briefings tracking competitor price changes, new product launches, SEO structural changes, and shifts in how AI models represent your market. You always know what is happening.",
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
          Intelligence Pricing
        </h2>
        <p className="text-text-muted text-base max-w-3xl mb-10">
          From one-time market reports to continuous adversarial monitoring. This
          capability permanently elevates the relationship from marketing vendor
          to indispensable corporate strategy partner.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: "Market Research",
              price: "$3,500 – $7,500",
              period: "per report",
              features: [
                "Secondary data analysis",
                "Demographic profiling",
                "Baseline competitor identification",
                "Industry trend forecasting",
                "Pricing analysis",
                "Written strategic report",
              ],
            },
            {
              name: "Primary Research",
              price: "$15,000 – $50,000+",
              period: "per project",
              features: [
                "In-depth interviews (10–15)",
                "Online surveys (N=400+)",
                "Professional focus groups",
                "Pricing sensitivity analysis",
                "Customer persona development",
                "Executive presentation",
              ],
            },
            {
              name: "Adversarial Audit",
              price: "$8,000 – $15,000",
              period: "one-time",
              highlighted: true,
              features: [
                "Top 3 competitor deep-dive",
                "Backlink vulnerability analysis",
                "Ad spend estimation",
                "Keyword gap analysis",
                "Digital vulnerability mapping",
                "Strategic action plan",
              ],
            },
            {
              name: "Continuous Intel",
              price: "$5,000 – $20,000+",
              period: "/mo retainer",
              features: [
                "Real-time competitor tracking",
                "Price change monitoring",
                "Product launch alerts",
                "SEO structural change detection",
                "LLM red-teaming exercises",
                "Monthly tactical briefings",
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
                href={`/intake?service=${encodeURIComponent(`Intelligence — ${tier.name}`)}`}
                className="block text-center text-sm uppercase tracking-widest font-semibold border-2 border-accent bg-accent text-white px-6 py-3 rounded hover:bg-transparent hover:text-accent transition-all"
              >
                Request Briefing
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-gradient-to-br from-accent/10 to-bg-dark/90 border-t border-glass-border">
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="font-display text-3xl font-bold mb-4">
            Know Your Battlefield Before You Fight
          </h2>
          <p className="text-text-muted text-lg max-w-xl mx-auto mb-8">
            Your competitors have vulnerabilities. We find them. Book a
            confidential briefing to discuss your market position.
          </p>
          <a
            href="/intake"
            className="px-8 py-4 text-base uppercase tracking-widest font-semibold border-2 border-accent bg-accent text-white hover:bg-transparent hover:text-accent transition-all inline-block"
          >
            Request Confidential Briefing
          </a>
        </div>
      </section>
    </main>
  );
}
