import type { Metadata } from "next";
import {
  Cpu,
  MessageSquare,
  Calendar,
  Star,
  Workflow,
  BrainCircuit,
} from "lucide-react";
import {
  BreadcrumbSchema,
  pageAlternates,
  pageOg,
  pageTwitter,
} from "../../../../lib/seo";

const title = "Business Automation & CRM — the Adaptation Living Platform";
const description =
  "White-label GoHighLevel CRM, AI chatbots, automated follow-up, review generation, and pipeline management. Replace 8 tools with one system. From $97/mo.";

export const metadata: Metadata = {
  title,
  description,
  alternates: pageAlternates("/services/automation"),
  openGraph: pageOg(title, description, "/services/automation"),
  twitter: pageTwitter(title, description),
};

interface SaaSTier {
  name: string;
  price: string;
  period: string;
  features: string[];
  highlighted?: boolean;
}

const tiers: SaaSTier[] = [
  {
    name: "Core Systems",
    price: "$97 – $197",
    period: "/mo",
    features: [
      "Unified omnichannel inbox (SMS, email, social DMs)",
      "Missed call text-back automation",
      "Basic contact management & CRM",
      "Automated Google review generation",
      "Mobile app access",
      "Basic reporting dashboard",
    ],
  },
  {
    name: "Growth Automation",
    price: "$297 – $397",
    period: "/mo",
    highlighted: true,
    features: [
      "Everything in Core Systems",
      "Automated calendar booking & scheduling",
      "Custom visual pipeline management",
      "Website conversational chat widget",
      "Email nurture sequences",
      "A/B tested messaging campaigns",
      "Monthly performance reports",
    ],
  },
  {
    name: "AI Omnichannel",
    price: "$497 – $697",
    period: "/mo",
    features: [
      "Everything in Growth Automation",
      "Conversational AI chatbots",
      "Advanced conditional workflows",
      "Custom knowledge base integration",
      "Dedicated IP for email marketing",
      "AI-powered lead qualification",
      "Weekly strategy calls",
    ],
  },
];

export default function AutomationPage() {
  return (
    <main id="main-content" className="navbar-offset">
      <BreadcrumbSchema
        items={[
          { name: "Services", path: "/services" },
          { name: "Business Automation", path: "/services/automation" },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Business Automation & CRM — the Adaptation Living Platform",
            description,
            provider: {
              "@type": "Organization",
              name: "Adaptation Living LLC",
              url: "https://www.adaptationliving.com",
            },
            areaServed: "US",
            serviceType: "CRM & Business Automation",
            offers: {
              "@type": "AggregateOffer",
              lowPrice: "97",
              highPrice: "697",
              priceCurrency: "USD",
            },
          }),
        }}
      />

      {/* Hero */}
      <section className="max-w-[1200px] mx-auto px-8 pt-16 pb-8">
        <div className="flex items-center gap-3 mb-4">
          <Cpu className="text-accent w-8 h-8" />
          <span className="text-accent text-sm uppercase tracking-[3px] font-display">
            the Adaptation Living Platform
          </span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6 leading-tight">
          Your Complete Business
          <br />
          Operating System
        </h1>
        <p className="text-text-muted text-lg max-w-3xl leading-relaxed">
          You are paying for Calendly, Mailchimp, a CRM, a review tool, and a
          funnel builder — separately. We replace all of that with one system,
          automate your follow-up so leads never die, and you deal with one
          invoice and one person. the Adaptation Living Platform is your entire business
          automation backbone — CRM, communications, scheduling, reputation,
          and AI — unified under one roof.
        </p>
      </section>

      {/* The Problem */}
      <section className="max-w-[1200px] mx-auto px-8 py-16 border-t border-glass-border">
        <h2 className="font-display text-3xl font-bold mb-8">
          The Tools You Are Paying For Right Now
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { tool: "CRM Software", cost: "$50–$300/mo" },
            { tool: "Email Marketing", cost: "$30–$200/mo" },
            { tool: "SMS/Text Platform", cost: "$25–$100/mo" },
            { tool: "Appointment Scheduling", cost: "$15–$50/mo" },
            { tool: "Review Management", cost: "$30–$100/mo" },
            { tool: "Landing Page Builder", cost: "$30–$100/mo" },
            { tool: "Chat Widget", cost: "$20–$80/mo" },
            { tool: "Social Media Inbox", cost: "$30–$150/mo" },
          ].map((item) => (
            <div
              key={item.tool}
              className="p-4 rounded-lg bg-white/[0.02] border border-glass-border text-center"
            >
              <p className="text-sm font-semibold mb-1">{item.tool}</p>
              <p className="text-text-muted text-xs">{item.cost}</p>
            </div>
          ))}
        </div>
        <div className="glass rounded-lg p-8 text-center">
          <p className="text-text-muted text-lg mb-2">
            Combined, you are spending{" "}
            <span className="text-white font-bold">$230 – $1,080/mo</span> on
            disconnected tools that do not talk to each other.
          </p>
          <p className="text-accent font-display text-xl font-bold">
            the Adaptation Living Platform replaces all of them. One platform. One login. One
            bill.
          </p>
        </div>
      </section>

      {/* What It Does */}
      <section className="max-w-[1200px] mx-auto px-8 py-16 border-t border-glass-border">
        <h2 className="font-display text-3xl font-bold mb-8">
          Key Functions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: MessageSquare,
              title: "Unified Inbox",
              desc: "Every SMS, email, Facebook DM, Instagram message, Google Business chat, and website form submission — one inbox. Never miss a lead again. Respond from anywhere.",
            },
            {
              icon: Calendar,
              title: "Automated Scheduling",
              desc: "Clients book directly into your calendar. Automated confirmations, reminders, and follow-ups reduce no-shows by up to 80%. Round-robin scheduling for multi-person teams.",
            },
            {
              icon: Star,
              title: "Review Generation",
              desc: "Automated sequences that ask happy customers for Google reviews at the right moment. Negative feedback is intercepted privately before it goes public. Watch your rating climb.",
            },
            {
              icon: Workflow,
              title: "Pipeline Management",
              desc: "Visual drag-and-drop pipeline tracks every lead from first touch to closed deal. Automated stage triggers move leads forward without manual intervention. Nothing falls through the cracks.",
            },
            {
              icon: BrainCircuit,
              title: "AI Chatbots & Voice",
              desc: "Conversational AI that qualifies leads, answers FAQs, and books appointments 24/7. Trained on your business knowledge base. Handles inbound calls when you cannot.",
            },
            {
              icon: Cpu,
              title: "Automated Nurture",
              desc: "Multi-step email and SMS sequences that turn cold leads into booked calls. A/B tested messaging, lead scoring, and intelligent routing ensure the right message reaches the right person.",
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

      {/* How We Set It Up */}
      <section className="max-w-[1200px] mx-auto px-8 py-16 border-t border-glass-border">
        <h2 className="font-display text-3xl font-bold mb-4">
          How We Install It
        </h2>
        <p className="text-text-muted text-base mb-8 max-w-3xl">
          We do not hand you a login and wish you luck. Every Adaptation Living Platform
          deployment is fully configured, tested, and tailored to your business
          before you touch it.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: "01",
              title: "Audit & Map",
              desc: "We map your current sales process, communication channels, and pain points. Every automation is built around how your business actually works.",
            },
            {
              step: "02",
              title: "Configure & Build",
              desc: "CRM pipelines, automations, email/SMS templates, calendar setup, review sequences, and integrations — all configured to your business specifications.",
            },
            {
              step: "03",
              title: "Test & Train",
              desc: "Full end-to-end testing of every workflow. Then we train you and your team on the platform until you are confident running it independently.",
            },
            {
              step: "04",
              title: "Launch & Support",
              desc: "Go live with monitoring. We optimize automations based on real performance data and provide direct support whenever you need it.",
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

        <div className="glass rounded-lg p-8 mt-10">
          <h3 className="font-display text-xl font-bold mb-2">
            Mandatory Setup Fee: $500 – $2,000
          </h3>
          <p className="text-text-muted text-sm leading-relaxed">
            This non-negotiable fee covers custom CRM configuration, contact
            list importation and scrubbing, sales pipeline mapping, automation
            building, and initial team training. It ensures you start with a
            system that is actually ready for your business — not a blank slate.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-[1200px] mx-auto px-8 py-16 border-t border-glass-border">
        <h2 className="font-display text-3xl font-bold mb-2">
          Adaptation Living Platform Pricing
        </h2>
        <p className="text-text-muted text-base max-w-3xl mb-10">
          One platform. No per-automation charges. No nickel-and-dime add-ons.
          Choose your tier and everything in it is included.
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
                href={`/intake?service=${encodeURIComponent(`the Adaptation Living Platform — ${tier.name}`)}`}
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
            Stop Paying for 8 Tools That Do Not Talk to Each Other
          </h2>
          <p className="text-text-muted text-lg max-w-xl mx-auto mb-8">
            Book a free demo. We will show you exactly how the Adaptation Living Platform
            replaces your current stack and automates the follow-up that is
            costing you deals.
          </p>
          <a
            href="/intake"
            className="px-8 py-4 text-base uppercase tracking-widest font-semibold border-2 border-accent bg-accent text-white hover:bg-transparent hover:text-accent transition-all inline-block"
          >
            Book Your Free Demo
          </a>
        </div>
      </section>
    </main>
  );
}
