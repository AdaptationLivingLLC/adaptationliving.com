import type { Metadata } from "next";
import {
  Palette,
  Megaphone,
  Camera,
  PenTool,
  Share2,
  BarChart3,
} from "lucide-react";
import {
  BreadcrumbSchema,
  pageAlternates,
  pageOg,
  pageTwitter,
} from "../../../../lib/seo";

const title = "Corporate Branding & Social Media";
const description =
  "Full-scale corporate identity, brand guidelines, social media architecture, and content management. Branding from $5,000. Social media management from $2,000/mo.";

export const metadata: Metadata = {
  title,
  description,
  alternates: pageAlternates("/services/branding"),
  openGraph: pageOg(title, description, "/services/branding"),
  twitter: pageTwitter(title, description),
};

export default function BrandingPage() {
  return (
    <main id="main-content" className="navbar-offset">
      <BreadcrumbSchema
        items={[
          { name: "Services", path: "/services" },
          { name: "Branding & Social Media", path: "/services/branding" },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Corporate Branding & Social Media Architecture",
            description,
            provider: {
              "@type": "Organization",
              name: "Adaptation Living LLC",
              url: "https://www.adaptationliving.com",
            },
            areaServed: "US",
            serviceType: "Corporate Branding & Social Media",
            offers: {
              "@type": "AggregateOffer",
              lowPrice: "1500",
              highPrice: "50000",
              priceCurrency: "USD",
            },
          }),
        }}
      />

      {/* Hero */}
      <section className="max-w-[1200px] mx-auto px-8 pt-16 pb-8">
        <div className="flex items-center gap-3 mb-4">
          <Palette className="text-accent w-8 h-8" />
          <span className="text-accent text-sm uppercase tracking-[3px] font-display">
            Brand Identity
          </span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6 leading-tight">
          Corporate Branding &amp;
          <br />
          Social Media Architecture
        </h1>
        <p className="text-text-muted text-lg max-w-3xl leading-relaxed">
          A premium website, a technical SEO strategy, and a robust CRM are
          ultimately constrained if your brand identity fails to command
          immediate attention, respect, and trust. Branding is not just a logo.
          It is the comprehensive psychological development of a visual
          language, a distinctive voice, and a cohesive multi-channel presence
          that makes your business unmistakable.
        </p>
      </section>

      {/* What Branding Actually Is */}
      <section className="max-w-[1200px] mx-auto px-8 py-16 border-t border-glass-border">
        <h2 className="font-display text-3xl font-bold mb-8">
          What Real Branding Delivers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: PenTool,
              title: "Visual Identity System",
              desc: "Logo system design, primary and secondary color palettes, typography selection, iconography, photography direction. Not a single logo file — a complete visual language that scales across every touchpoint from business cards to billboards.",
            },
            {
              icon: Megaphone,
              title: "Brand Voice & Messaging",
              desc: "Tone of voice guidelines, messaging frameworks, elevator pitches, taglines, and copywriting standards. Your brand sounds the same whether it is on your website, in an email, or on a sales call.",
            },
            {
              icon: Camera,
              title: "Content & Collateral",
              desc: "Pitch decks, marketing materials, social media templates, email signatures, business cards, and branded presentations. Every asset is consistent, professional, and ready for client-facing use on day one.",
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

      {/* Social Media */}
      <section className="max-w-[1200px] mx-auto px-8 py-16 border-t border-glass-border">
        <h2 className="font-display text-3xl font-bold mb-4">
          Social Media Architecture
        </h2>
        <p className="text-text-muted text-base mb-8 max-w-3xl">
          Social media at the premium level is a continuous, dynamic extension
          of your brand. Custom graphics, high-converting copy, active community
          management, and strategic deployment across platforms — not generic
          posts from a scheduling tool.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Share2,
              title: "Platform Strategy",
              desc: "We identify where your audience lives and build platform-specific strategies. LinkedIn for B2B thought leadership, Instagram for visual brands, Facebook for local businesses, TikTok for reach. No wasted effort on platforms that do not serve your goals.",
            },
            {
              icon: Camera,
              title: "Content Production",
              desc: "Custom graphics, short-form video editing, photography direction, and branded templates. Every post reinforces your visual identity and drives toward measurable business outcomes — not vanity metrics.",
            },
            {
              icon: BarChart3,
              title: "Analytics & Optimization",
              desc: "Monthly reporting on reach, engagement, lead generation, and revenue attribution. We optimize what works, cut what does not, and continuously test new formats and messaging to maximize return.",
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
          Branding &amp; Social Media Pricing
        </h2>
        <p className="text-text-muted text-base max-w-3xl mb-10">
          Tightly integrated with web development and automation. Every asset
          maintains strict aesthetic, tonal, and strategic continuity.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: "Foundational Identity",
              price: "$5,000 – $10,000",
              features: [
                "Logo system design",
                "Primary & secondary color palettes",
                "Typography selection",
                "Basic brand guidelines document",
                "Digital asset package",
                "Business card & email signature",
              ],
            },
            {
              name: "Corporate Rebrand",
              price: "$20,000 – $50,000+",
              highlighted: true,
              features: [
                "In-depth market research",
                "Complete visual identity overhaul",
                "Brand voice architecture",
                "Messaging framework",
                "Pitch decks & corporate collateral",
                "Extensive brand book",
              ],
            },
            {
              name: "Social Profile Setup",
              price: "$1,500 – $3,500",
              period: "one-time",
              features: [
                "Platform selection & strategy",
                "Optimized bio copywriting",
                "Custom banner & profile artwork",
                "Website & CRM integration",
                "Initial grid aesthetic planning",
                "Content calendar template",
              ],
            },
            {
              name: "Premium Management",
              price: "$2,000 – $8,000",
              period: "/mo",
              features: [
                "12–20 custom posts per month",
                "Short-form video editing",
                "Active community management",
                "DM funneling & lead capture",
                "Advanced monthly analytics",
                "Platform-specific optimization",
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
                {"period" in tier && (
                  <span className="text-text-muted text-sm ml-1">
                    {tier.period}
                  </span>
                )}
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
                href={`/intake?service=${encodeURIComponent(`Branding — ${tier.name}`)}`}
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
            Your Brand Is the First Thing Clients Judge
          </h2>
          <p className="text-text-muted text-lg max-w-xl mx-auto mb-8">
            Before they read a word, they have already decided if you look
            legitimate. Make sure the answer is yes.
          </p>
          <a
            href="/intake"
            className="px-8 py-4 text-base uppercase tracking-widest font-semibold border-2 border-accent bg-accent text-white hover:bg-transparent hover:text-accent transition-all inline-block"
          >
            Start Your Brand Project
          </a>
        </div>
      </section>
    </main>
  );
}
