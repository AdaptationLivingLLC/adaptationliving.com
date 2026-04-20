import type { Metadata } from "next";
import { Code, Layers, Zap, Shield, Smartphone, BarChart3 } from "lucide-react";
import {
  BreadcrumbSchema,
  pageAlternates,
  pageOg,
  pageTwitter,
} from "../../../../lib/seo";

const title = "Custom Web Design & Development";
const description =
  "Bespoke, non-template web architecture from $5,000 to $150,000+. Hand-coded, SEO-optimized, performance-engineered sites built for conversion. Phoenix AZ.";

export const metadata: Metadata = {
  title,
  description,
  alternates: pageAlternates("/services/web-design"),
  openGraph: pageOg(title, description, "/services/web-design"),
  twitter: pageTwitter(title, description),
};

interface PricingTier {
  name: string;
  target: string;
  price: string;
  features: string[];
  highlighted?: boolean;
}

const tiers: PricingTier[] = [
  {
    name: "Emerging Authority",
    target: "Ambitious local startups, single-location high-ticket service providers",
    price: "$5,000 – $10,000",
    features: [
      "5–10 custom-designed pages",
      "Built entirely from scratch — zero templates",
      "Advanced mobile-first responsiveness",
      "Foundational on-page technical SEO",
      "Standard CRM lead capture integration",
      "Core Web Vitals optimization",
      "30-day post-launch support",
    ],
  },
  {
    name: "Mid-Market Growth",
    target: "Established regional businesses, multi-location practices, B2B firms",
    price: "$15,000 – $35,000",
    highlighted: true,
    features: [
      "15–40 custom pages",
      "Advanced UX/UI research and wireframing",
      "Custom interaction animation",
      "Deep technical SEO structure",
      "Third-party API integrations (ERP/CRM)",
      "Content management system",
      "Conversion rate optimization",
      "60-day support + optimization",
    ],
  },
  {
    name: "Corporate Dominance",
    target: "National brands, large e-commerce retailers, complex B2B manufacturers",
    price: "$40,000 – $75,000",
    features: [
      "50–100+ pages or robust product catalogs",
      "Advanced Shopify Plus architecture",
      "Custom web applications",
      "Multi-variate conversion tracking",
      "Advanced payment gateways",
      "Multi-location content architecture",
      "90-day support + SLA",
    ],
  },
  {
    name: "Enterprise Ecosystem",
    target: "Market leaders, international corporations, funded SaaS platforms",
    price: "$80,000 – $150,000+",
    features: [
      "Fully bespoke headless system architecture",
      "Custom middleware development",
      "AI-driven personalization engines",
      "HIPAA/SOC2 compliance protocols",
      "Custom admin dashboards",
      "Multi-language / multi-region",
      "Dedicated project manager + SLA",
    ],
  },
];

export default function WebDesignPage() {
  return (
    <main id="main-content" className="navbar-offset">
      <BreadcrumbSchema
        items={[
          { name: "Services", path: "/services" },
          { name: "Custom Web Design", path: "/services/web-design" },
        ]}
      />

      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Custom Web Design & Development",
            description,
            provider: {
              "@type": "Organization",
              name: "Adaptation Living LLC",
              url: "https://www.adaptationliving.com",
            },
            areaServed: "US",
            serviceType: "Custom Web Development",
            offers: {
              "@type": "AggregateOffer",
              lowPrice: "5000",
              highPrice: "150000",
              priceCurrency: "USD",
            },
          }),
        }}
      />

      {/* Hero */}
      <section className="max-w-[1200px] mx-auto px-8 pt-16 pb-8">
        <div className="flex items-center gap-3 mb-4">
          <Code className="text-accent w-8 h-8" />
          <span className="text-accent text-sm uppercase tracking-[3px] font-display">
            Web Architecture
          </span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6 leading-tight">
          Custom, Non-Template
          <br />
          Web Design &amp; Development
        </h1>
        <p className="text-text-muted text-lg max-w-3xl leading-relaxed">
          The modern corporate website is no longer a static digital brochure. It
          is the central, highly optimized node of your entire marketing
          ecosystem. Every site we build is engineered from the ground up — no
          themes, no templates, no drag-and-drop builders. Your business deserves
          architecture that is uniquely aligned with your conversion goals.
        </p>
      </section>

      {/* Why Custom */}
      <section className="max-w-[1200px] mx-auto px-8 py-16 border-t border-glass-border">
        <h2 className="font-display text-3xl font-bold mb-8">
          Why Custom Architecture Matters
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Zap,
              title: "Performance Engineering",
              desc: "Every millisecond of load time costs conversions. We optimize Core Web Vitals — Largest Contentful Paint, First Input Delay, and Cumulative Layout Shift — to satisfy Google's algorithmic demands and keep visitors engaged.",
            },
            {
              icon: Layers,
              title: "Bespoke Architecture",
              desc: "Custom post types, bespoke relational database structures, advanced CRM middleware hooks, and headless CMS configurations. Your site's structure is mathematically aligned with your business model — not a template someone else used.",
            },
            {
              icon: Shield,
              title: "Enterprise-Grade Security",
              desc: "From SSL/TLS configuration to Content Security Policies, input sanitization, and compliance protocols (HIPAA, SOC2), we build security into the foundation — not bolted on as an afterthought.",
            },
            {
              icon: Smartphone,
              title: "Mobile-First Execution",
              desc: "Over 60% of web traffic is mobile. Every build starts mobile-first with responsive breakpoints, touch-optimized interactions, and Progressive Web App capabilities for native-like mobile experiences.",
            },
            {
              icon: BarChart3,
              title: "Conversion Engineering",
              desc: "Strategic placement of CTAs, A/B-tested layouts, heatmap-informed UX decisions, and multi-variate conversion tracking. Your site is a revenue instrument, not a digital business card.",
            },
            {
              icon: Code,
              title: "SEO-Native Structure",
              desc: "Technical SEO is built into the foundation — semantic HTML, structured data (Schema.org), dynamic XML sitemaps, optimized crawl budgets, and clean URL architecture. Your site ranks from day one.",
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

      {/* What You Get */}
      <section className="max-w-[1200px] mx-auto px-8 py-16 border-t border-glass-border">
        <h2 className="font-display text-3xl font-bold mb-4">
          How We Build It
        </h2>
        <p className="text-text-muted text-base max-w-3xl mb-10 leading-relaxed">
          Every engagement follows a rigorous, phased process. You see progress
          at every step, you own every file, and you have direct access to the
          person writing the code.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: "01",
              title: "Discovery & Strategy",
              desc: "We audit your current digital presence, study your competitors, define your conversion goals, and architect the technical foundation.",
            },
            {
              step: "02",
              title: "Design & Wireframes",
              desc: "High-fidelity wireframes and interactive prototypes. You approve every layout, interaction, and content block before a line of code is written.",
            },
            {
              step: "03",
              title: "Build & Integrate",
              desc: "Hand-coded development with your CRM, payment gateway, analytics, and third-party APIs fully integrated. Performance-tested at every milestone.",
            },
            {
              step: "04",
              title: "Launch & Optimize",
              desc: "Deployment to production with monitoring, post-launch SEO verification, and a support window to catch and resolve anything in real-world conditions.",
            },
          ].map((item) => (
            <div key={item.step} className="text-center p-6">
              <span className="font-display text-4xl text-accent font-bold block mb-3">
                {item.step}
              </span>
              <h3 className="font-display text-lg font-bold mb-2">
                {item.title}
              </h3>
              <p className="text-text-muted text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-[1200px] mx-auto px-8 py-16 border-t border-glass-border">
        <h2 className="font-display text-3xl font-bold mb-2">
          Web Design Pricing
        </h2>
        <p className="text-text-muted text-base max-w-3xl mb-10">
          Strictly non-template. Every tier guarantees structural integrity,
          lightning-fast load times, and a foundation built for aggressive
          long-term SEO.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <p className="text-text-muted text-xs mb-3">{tier.target}</p>
              <div className="mb-4">
                <span className="text-2xl font-bold text-accent">
                  {tier.price}
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
                href={`/intake?service=${encodeURIComponent(`Web Design — ${tier.name}`)}`}
                className="block text-center text-sm uppercase tracking-widest font-semibold border-2 border-accent bg-accent text-white px-6 py-3 rounded hover:bg-transparent hover:text-accent transition-all"
              >
                Start This Build
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-gradient-to-br from-accent/10 to-bg-dark/90 border-t border-glass-border">
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="font-display text-3xl font-bold mb-4">
            Not Sure Which Tier Fits Your Business?
          </h2>
          <p className="text-text-muted text-lg max-w-xl mx-auto mb-8">
            Book a free discovery call. We will assess your current digital
            presence, map your goals, and recommend the right build — no
            obligation.
          </p>
          <a
            href="/intake"
            className="px-8 py-4 text-base uppercase tracking-widest font-semibold border-2 border-accent bg-accent text-white hover:bg-transparent hover:text-accent transition-all inline-block"
          >
            Book Your Free Call
          </a>
        </div>
      </section>
    </main>
  );
}
