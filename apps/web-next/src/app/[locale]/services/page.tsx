import type { Metadata } from "next";
import { Bot, Code, GraduationCap, LineChart, Lightbulb } from "lucide-react";
import {
  BreadcrumbSchema,
  pageAlternates,
  pageOg,
  pageTwitter,
} from "../../../lib/seo";

const title =
  "Services & Pricing — AI Automation, Web Development, CRM Setup | Phoenix AZ";
const description =
  "AI automation, GoHighLevel CRM setup, custom web development, training, and consulting. Clear pricing tiers from $1,200 to $6,500+. Veteran-owned studio in Phoenix, AZ.";

export const metadata: Metadata = {
  title,
  description,
  alternates: pageAlternates("/services"),
  openGraph: pageOg(title, description, "/services"),
  twitter: pageTwitter(title, description),
};

interface Tier {
  name: string;
  price: string;
  period?: string;
  features: string[];
  highlighted?: boolean;
}

function PricingCard({ name, price, period, features, highlighted }: Tier) {
  return (
    <div
      className={`glass rounded-lg p-8 flex flex-col h-full transition-all hover:-translate-y-1 ${
        highlighted ? "border-accent border-2 glow-accent" : ""
      }`}
    >
      <h3 className="font-display text-xl font-bold mb-1">{name}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold text-accent">{price}</span>
        {period && <span className="text-text-muted text-sm ml-1">{period}</span>}
      </div>
      <ul className="flex-1 space-y-3 mb-6">
        {features.map((f) => (
          <li key={f} className="text-text-muted text-sm flex items-start gap-2">
            <span className="text-accent mt-0.5">&#10003;</span>
            {f}
          </li>
        ))}
      </ul>
      <a
        href={`/intake?service=${encodeURIComponent(name)}`}
        className="block text-center text-sm uppercase tracking-widest font-semibold border-2 border-accent bg-accent text-white px-6 py-3 rounded hover:bg-transparent hover:text-accent transition-all"
      >
        Start This Project
      </a>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <main className="navbar-offset">
      <BreadcrumbSchema items={[{ name: "Services & Pricing", path: "/services" }]} />

      {/* Service Schema — structured data for each offering */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: [
              {
                "@type": "Service",
                position: 1,
                name: "AI Agents & Workflow Automation",
                description:
                  "Custom AI agents, automated email and SMS sequences, GoHighLevel CRM integrations, and intelligent workflows.",
                provider: {
                  "@type": "Organization",
                  name: "Adaptation Living LLC",
                },
                areaServed: "US",
                serviceType: "AI Automation",
                offers: {
                  "@type": "AggregateOffer",
                  lowPrice: "1200",
                  highPrice: "6500",
                  priceCurrency: "USD",
                },
              },
              {
                "@type": "Service",
                position: 2,
                name: "AI Revenue Systems — GoHighLevel CRM",
                description:
                  "GoHighLevel-powered lead nurture, missed call text-back, review campaigns, and automated follow-up.",
                provider: {
                  "@type": "Organization",
                  name: "Adaptation Living LLC",
                },
                areaServed: "US",
                serviceType: "CRM Setup & Automation",
                offers: {
                  "@type": "AggregateOffer",
                  lowPrice: "500",
                  highPrice: "3000",
                  priceCurrency: "USD",
                },
              },
              {
                "@type": "Service",
                position: 3,
                name: "Web & App Development",
                description:
                  "Custom websites and web applications. Hand-coded, AI-enhanced, performance-optimized with SEO, responsive design, and care plans.",
                provider: {
                  "@type": "Organization",
                  name: "Adaptation Living LLC",
                },
                areaServed: "US",
                serviceType: "Web Development",
                offers: {
                  "@type": "AggregateOffer",
                  lowPrice: "1200",
                  highPrice: "6500",
                  priceCurrency: "USD",
                },
              },
              {
                "@type": "Service",
                position: 4,
                name: "Strategy & Consulting",
                description:
                  "Technical and business strategy including tech stack selection, architecture review, and roadmaps from MVP to full-scale product.",
                provider: {
                  "@type": "Organization",
                  name: "Adaptation Living LLC",
                },
                areaServed: "US",
                serviceType: "Technology Consulting",
                offers: {
                  "@type": "AggregateOffer",
                  lowPrice: "0",
                  highPrice: "1500",
                  priceCurrency: "USD",
                },
              },
              {
                "@type": "Service",
                position: 5,
                name: "Training & Support",
                description:
                  "Hands-on AI literacy, coding education, and ongoing strategic support for teams and individuals.",
                provider: {
                  "@type": "Organization",
                  name: "Adaptation Living LLC",
                },
                areaServed: "US",
                serviceType: "Technology Training",
                offers: {
                  "@type": "AggregateOffer",
                  lowPrice: "150",
                  highPrice: "500",
                  priceCurrency: "USD",
                },
              },
            ],
          }),
        }}
      />

      {/* Page Header */}
      <section className="max-w-[1200px] mx-auto px-8 pt-16 pb-8 text-center">
        <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
          Services &amp; Pricing
        </h1>
        <p className="text-text-muted text-lg max-w-2xl mx-auto">
          Clear scope. Fixed pricing. No surprises. Every engagement starts
          with a free discovery call.
        </p>
      </section>

      {/* ─── AI Agents & Automation ─── */}
      <section id="automation" className="max-w-[1200px] mx-auto px-8 py-16">
        <div className="flex items-center gap-3 mb-2">
          <Bot className="text-accent w-7 h-7" />
          <h2 className="font-display text-3xl font-bold">
            AI Agents &amp; Workflow Automation
          </h2>
        </div>
        <p className="text-text-muted text-base mb-8 max-w-3xl">
          Custom AI agents, automated sequences, and intelligent workflows that
          replace manual processes and generate revenue around the clock.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            name="Starter"
            price="$1,200"
            features={[
              "1 custom AI workflow",
              "GoHighLevel CRM integration",
              "Email or SMS automation",
              "30-day support",
              "Documentation & training",
            ]}
          />
          <PricingCard
            name="Growth"
            price="$3,500"
            highlighted
            features={[
              "Up to 3 AI workflows",
              "Multi-channel automation (email, SMS, voice)",
              "GoHighLevel full pipeline setup",
              "AI chatbot or voice agent",
              "60-day support + optimization",
              "Team training session",
            ]}
          />
          <PricingCard
            name="Enterprise"
            price="$6,500+"
            features={[
              "Unlimited workflows",
              "Custom AI agent development",
              "Full CRM + pipeline architecture",
              "Multi-location support",
              "90-day support + SLA",
              "Ongoing advisory option",
            ]}
          />
        </div>
      </section>

      {/* ─── AI Revenue Systems ─── */}
      <section
        id="ai-revenue"
        className="max-w-[1200px] mx-auto px-8 py-16 border-t border-glass-border"
      >
        <div className="flex items-center gap-3 mb-2">
          <LineChart className="text-accent w-7 h-7" />
          <h2 className="font-display text-3xl font-bold">
            AI Revenue Systems
          </h2>
        </div>
        <p className="text-text-muted text-base mb-8 max-w-3xl">
          GoHighLevel-powered lead nurture, missed call text-back, review
          campaigns, and automated follow-up that turns cold leads into booked
          calls.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            name="CRM Setup"
            price="$1,500–$3,000"
            features={[
              "GoHighLevel sub-account config",
              "Pipeline & stage setup",
              "Contact import + cleanup",
              "Missed call text-back",
              "Calendar booking integration",
              "Review request campaign",
            ]}
          />
          <PricingCard
            name="Lead Nurture"
            price="$500"
            period="/mo"
            highlighted
            features={[
              "Automated email + SMS sequences",
              "Lead scoring & routing",
              "Monthly performance reports",
              "A/B tested messaging",
              "Campaign optimization",
            ]}
          />
          <PricingCard
            name="Full Pipeline"
            price="$1,200"
            period="/mo"
            features={[
              "Everything in Lead Nurture",
              "AI voice agent",
              "Multi-channel outreach",
              "Dedicated pipeline manager",
              "Weekly strategy calls",
              "Custom reporting dashboard",
            ]}
          />
        </div>
      </section>

      {/* ─── Web & App Development ─── */}
      <section
        id="web-suites"
        className="max-w-[1200px] mx-auto px-8 py-16 border-t border-glass-border"
      >
        <div className="flex items-center gap-3 mb-2">
          <Code className="text-accent w-7 h-7" />
          <h2 className="font-display text-3xl font-bold">
            Web &amp; App Development
          </h2>
        </div>
        <p className="text-text-muted text-base mb-8 max-w-3xl">
          Custom websites and web applications. Hand-coded, AI-enhanced,
          performance-optimized. Every build includes SEO, responsive design,
          and a care plan option.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <PricingCard
            name="Starter Site"
            price="$1,200"
            features={[
              "Up to 5 pages",
              "Mobile responsive",
              "SEO foundations",
              "Contact form integration",
              "$150/mo care plan available",
            ]}
          />
          <PricingCard
            name="Business Site"
            price="$2,500"
            highlighted
            features={[
              "Up to 10 pages",
              "CRM integration",
              "Blog / content section",
              "Schema.org structured data",
              "Analytics setup",
              "$350/mo care plan available",
            ]}
          />
          <PricingCard
            name="Full-Stack"
            price="$4,500"
            features={[
              "Custom web application",
              "API integrations",
              "User authentication",
              "Database architecture",
              "Admin dashboard",
              "$650/mo care plan available",
            ]}
          />
          <PricingCard
            name="Enterprise"
            price="$6,500+"
            features={[
              "Multi-zone architecture",
              "AI-powered features",
              "E-commerce integration",
              "Custom AI agents",
              "Performance optimization",
              "$1,200+/mo care plan",
            ]}
          />
        </div>
      </section>

      {/* ─── Strategy & Consulting ─── */}
      <section
        id="strategy"
        className="max-w-[1200px] mx-auto px-8 py-16 border-t border-glass-border"
      >
        <div className="flex items-center gap-3 mb-2">
          <Lightbulb className="text-accent w-7 h-7" />
          <h2 className="font-display text-3xl font-bold">
            Strategy &amp; Consulting
          </h2>
        </div>
        <p className="text-text-muted text-base mb-8 max-w-3xl">
          Technical and business strategy from someone who has built at Intel,
          Apple, and JPMorgan. Clarity before code.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            name="Discovery Call"
            price="Free"
            features={[
              "30-minute call",
              "Assess your current state",
              "Identify quick wins",
              "Honest recommendation",
              "No obligation",
            ]}
          />
          <PricingCard
            name="Strategy Session"
            price="$250"
            period="/hr"
            highlighted
            features={[
              "Deep-dive on your problem",
              "Tech stack recommendations",
              "Architecture review",
              "Competitive analysis",
              "Written action plan",
            ]}
          />
          <PricingCard
            name="Ongoing Advisor"
            price="$1,500"
            period="/mo"
            features={[
              "Weekly strategy calls",
              "Priority async support",
              "Vendor evaluation",
              "Roadmap planning",
              "Team mentorship",
            ]}
          />
        </div>
      </section>

      {/* ─── Training & Education ─── */}
      <section
        id="education"
        className="max-w-[1200px] mx-auto px-8 py-16 border-t border-glass-border"
      >
        <div className="flex items-center gap-3 mb-2">
          <GraduationCap className="text-accent w-7 h-7" />
          <h2 className="font-display text-3xl font-bold">
            Training &amp; Support
          </h2>
        </div>
        <p className="text-text-muted text-base mb-8 max-w-3xl">
          Hands-on education for teams and individuals. AI literacy, coding
          fundamentals, tool mastery.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            name="AI Workshop"
            price="$500"
            features={[
              "Half-day team session",
              "AI landscape overview",
              "Hands-on tool demos",
              "Use case identification",
              "Action plan deliverable",
            ]}
          />
          <PricingCard
            name="1:1 Mentorship"
            price="$150"
            period="/hr"
            highlighted
            features={[
              "Personalized curriculum",
              "Screen-share walkthroughs",
              "Code review",
              "Tool setup & config",
              "Ongoing slack access",
            ]}
          />
          <PricingCard
            name="Priority Support"
            price="Included"
            period="in care plans"
            features={[
              "Direct access to team",
              "Same-day response",
              "Bug fixes & updates",
              "Performance monitoring",
              "Monthly check-in calls",
            ]}
          />
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 text-center bg-gradient-to-br from-accent/10 to-bg-dark/90 border-t border-glass-border">
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="font-display text-3xl font-bold mb-4">
            Not sure which tier fits?
          </h2>
          <p className="text-text-muted text-lg max-w-xl mx-auto mb-8">
            Book a free discovery call. We will map your needs to the right
            scope and give you a clear price before any work begins.
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
