import type { Metadata } from "next";
import Link from "next/link";
import {
    BarChart3,
  Bot,
  Calendar,
  CheckCircle2,
  CreditCard,
  Globe,
  Headphones,
  Mail,
  MessageSquare,
  Phone,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Users,
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
  "Every the Adaptation Living platform Feature — AI, CRM, Automation | Phoenix, AZ";
const description =
  "The complete the Adaptation Living platform feature list. AI phone receptionist, AI chat agent, CRM with pipelines, workflow automation, email + SMS marketing, 70+ directory listings, reputation management, website builder, calendar booking, invoicing, branded mobile app. Every tier includes everything.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "the Adaptation Living platform features",
    "all-in-one business platform features",
    "AI phone receptionist",
    "AI chat agent",
    "CRM pipeline management",
    "workflow automation",
    "review management software",
    "branded mobile app CRM",
    "Phoenix AZ business software",
  ],
  alternates: pageAlternates("/features"),
  openGraph: pageOg(title, description, "/features"),
  twitter: pageTwitter(title, description),
};

type Deep = {
  id: string;
  icon: typeof Bot;
  kicker: string;
  title: string;
  outcome: string;
  bullets: string[];
  imageSrc?: string;
  imageAlt?: string;
  replaces: string;
};

const deepDives: Deep[] = [
  {
    id: "ai-phone",
    icon: Phone,
    kicker: "AI Employee · Voice",
    title: "Answer every call, even at 2 AM.",
    outcome:
      "Your AI phone receptionist takes every call, books appointments, captures leads, and transfers to a human when it matters. Never miss another $5,000 lead because you were in a meeting.",
    bullets: [
      "24/7 call answering with your greeting, your tone, your script",
      "Real-time appointment booking into your calendar",
      "Caller info auto-populated in CRM with full transcript",
      "Smart escalation: transfers to a named human on configurable triggers",
      "Works with your existing business number — port it or keep it forwarded",
    ],
    imageSrc:
      "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/knES3eSWYIsc5YSZ3YLl/media/69a1cf6a6e50d66b2220b4c7.gif",
    imageAlt: "AI voice agent taking a live booking call",
    replaces: "Grasshopper · OpenPhone · Phone answering services",
  },
  {
    id: "ai-chat",
    icon: MessageSquare,
    kicker: "AI Employee · Chat",
    title: "Respond in seconds, on every channel.",
    outcome:
      "The AI chat agent replies on your website, SMS, Instagram DM, Facebook Messenger, and WhatsApp — autonomously or in suggestive mode where you approve every reply. Turn 'I'll circle back' into 'already booked.'",
    bullets: [
      "Autopilot mode: AI replies on its own, tuned to your brand voice",
      "Suggestive mode: AI drafts replies, you approve with one tap (mobile-first)",
      "Unified inbox: every channel in one conversation thread per contact",
      "Trained on your FAQs, website content, and knowledge base",
      "Per-contact toggle: turn AI off for VIPs, keep it on for everyone else",
    ],
    imageSrc:
      "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/knES3eSWYIsc5YSZ3YLl/media/69a1cfefc4df651ff7a31c0c.gif",
    imageAlt: "AI chat agent replying across SMS, web chat, and Instagram",
    replaces: "Intercom · Drift · Zendesk · Manychat",
  },
  {
    id: "crm",
    icon: Users,
    kicker: "CRM + Pipeline",
    title: "Every lead in one place. Every deal on one board.",
    outcome:
      "Drag-and-drop visual pipeline, smart lists that update themselves, custom fields for the data YOUR business cares about. Full contact history across SMS, email, calls, and notes — searchable in under a second.",
    bullets: [
      "Visual kanban with unlimited stages and pipelines",
      "Smart lists that recompute automatically (no manual filtering)",
      "Custom fields: text, number, date, dropdown, multi-select",
      "Tag-based segmentation for campaigns and workflows",
      "Deal value forecasting + weighted pipeline reporting",
      "Activity timeline per contact: every touch, every channel",
    ],
    imageSrc:
      "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/knES3eSWYIsc5YSZ3YLl/media/69a1cfa0f241b84c64bd4dde.gif",
    imageAlt: "Visual drag-and-drop sales pipeline",
    replaces: "HubSpot · Salesforce · Pipedrive · Copper",
  },
  {
    id: "workflows",
    icon: Workflow,
    kicker: "Workflow Automation",
    title: "Your follow-up runs while you sleep.",
    outcome:
      "Visual if/then builder. Triggers on anything (new lead, form fill, calendar booking, tag added, stage change, date passed). Actions across every channel. Multi-step sequences with waits, branches, and conditional paths.",
    bullets: [
      "Triggers: 40+ built-in events across CRM, calendar, chat, forms, tags",
      "Actions: SMS, email, calls, tasks, tag changes, stage moves, webhooks",
      "Conditional branching: if/then/else with unlimited nesting",
      "Wait steps: days, hours, specific times, or 'until condition met'",
      "Error recovery: auto-retry on fail, alert owner on unrecoverable error",
      "Premium triggers: $0.01/execution on usage-based plans",
    ],
    replaces: "Zapier · Make · n8n · ActiveCampaign automations",
  },
  {
    id: "email-sms",
    icon: Mail,
    kicker: "Email + SMS Marketing",
    title: "Campaigns, sequences, and 2-way conversations.",
    outcome:
      "Email marketing that ACTUALLY delivers. Two-way SMS that threads into the CRM. Drip sequences, broadcast campaigns, and segmentation by tag, list, or custom field. Built-in deliverability tools.",
    bullets: [
      "Email: drag-drop builder, templates, A/B testing, deliverability scoring",
      "SMS: 2-way threaded into CRM, campaigns, sequences, keyword opt-ins",
      "List segmentation by tag, stage, custom field, last activity date",
      "Built-in unsubscribe and compliance (CAN-SPAM, TCPA)",
      "Email deliverability at $0.675/1000 sends (wholesale pass-through)",
      "SMS at $0.00747/segment (10% below Twilio direct)",
    ],
    replaces: "Mailchimp · ActiveCampaign · Klaviyo · Constant Contact · SimpleTexting",
  },
  {
    id: "calendar",
    icon: Calendar,
    kicker: "Calendar + Booking",
    title: "Leads book themselves.",
    outcome:
      "Unlimited calendars (discovery call, paid consult, service appointment). Round-robin, collective scheduling, team buffers. Automated SMS + email reminders. No-show rescue with one-click rebook links.",
    bullets: [
      "Unlimited calendars per user, per team, per location",
      "Round-robin, collective, and weighted distribution",
      "Buffer times, daily caps, working hours, time zone handling",
      "Automated reminders: SMS + email at configurable intervals",
      "No-show rescue: one-click rebook link, auto re-engagement workflow",
      "Embed anywhere: iframe, inline, or native via the AI agents",
    ],
    replaces: "Calendly · Acuity · Cal.com · SavvyCal",
  },
  {
    id: "website",
    icon: Globe,
    kicker: "Website + Funnel Builder",
    title: "Launch pages in minutes, not weeks.",
    outcome:
      "Drag-and-drop page builder with 200+ templates. Forms that dump straight into the CRM. Payment links that post to Stripe. Membership areas, course hosting, and quiz funnels — native, no plugins.",
    bullets: [
      "Drag-drop builder with 200+ template starting points",
      "Forms, surveys, quizzes — direct CRM contact creation",
      "Payment links and Stripe checkout pages",
      "Membership sites and course hosting (native, no Kajabi required)",
      "Blog publishing with SEO metadata, sitemap, and schema",
      "Custom domains, SSL, global CDN — all handled",
    ],
    replaces: "Wix · Squarespace · ClickFunnels · Leadpages · Kajabi",
  },
  {
    id: "reputation",
    icon: Star,
    kicker: "Reputation Management",
    title: "5-star reviews on autopilot.",
    outcome:
      "Send review requests by SMS + email after every appointment. AI replies to reviews (positive AND negative). Dashboard monitoring across Google, Facebook, Yelp. Negative review interception to private channel before public.",
    bullets: [
      "Automated review request: SMS + email, configurable delay after appointment",
      "Google review link generation (direct-to-write URL)",
      "AI review response in your tone — autopilot or suggestive mode",
      "Monitoring across Google, Facebook, Yelp with inline reply",
      "Negative review interception: bad ratings route to private inbox first",
    ],
    imageSrc:
      "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/knES3eSWYIsc5YSZ3YLl/media/69a1cfb2b617a7acb6c47b24.gif",
    imageAlt: "Review request and reputation management dashboard",
    replaces: "Podium · BirdEye · Grade.us · NiceJob",
  },
  {
    id: "listings",
    icon: Search,
    kicker: "70+ Directory Listings",
    title: "Your business listed everywhere — automatically.",
    outcome:
      "Sync your business info (name, address, phone, hours) across 70+ directories in one click. Google, Yelp, Apple Maps, Bing, Facebook, Yellow Pages, Foursquare, and 63 more. NAP consistency = better local SEO.",
    bullets: [
      "70+ directory syncs from one dashboard",
      "NAP consistency (Name, Address, Phone) — critical local SEO signal",
      "Update once, propagates everywhere in 24 hours",
      "Pricing: $30/mo or $150/6mo or $300/yr per location",
      "Monitoring: see which directories are live, pending, or flagged",
    ],
    replaces: "Yext · Moz Local · Uberall · BrightLocal",
  },
  {
    id: "payments",
    icon: CreditCard,
    kicker: "Invoicing + Payments",
    title: "Get paid faster, with less friction.",
    outcome:
      "Stripe-powered invoicing, payment links, subscription billing, and one-time charges. Quote-to-cash in one place — proposal, signature, invoice, payment, receipt.",
    bullets: [
      "Invoicing with line items, tax, discounts, deposits",
      "Payment links: share a URL, get paid (no login required)",
      "Subscription billing with auto-retry on failed cards",
      "Stripe connected at account level — your money, your stripe dashboard",
      "Payment received → auto-tag → auto-workflow (e.g., send receipt, create task)",
    ],
    replaces: "FreshBooks · Square Invoices · Bill.com · separate Stripe",
  },
  {
    id: "mobile",
    icon: Smartphone,
    kicker: "Branded Mobile App",
    title: "Your business in your pocket.",
    outcome:
      "Full CRM on iOS and Android, white-labeled with YOUR logo and colors. Approve AI replies from mobile. Answer calls, respond to messages, move deals, check calendar — from anywhere.",
    bullets: [
      "iOS + Android, native apps (not wrapped web)",
      "White-labeled: your logo, your colors, your name",
      "AI reply approval from mobile (Suggestive mode)",
      "Full CRM: contacts, pipelines, calendar, conversations",
      "Push notifications for new leads, missed calls, new reviews",
    ],
    replaces: "Three separate apps: CRM mobile, SMS app, review app",
  },
];

const quickGrid = [
  { icon: BarChart3, label: "CRM & Pipeline" },
  { icon: Phone, label: "AI Phone Receptionist" },
  { icon: MessageSquare, label: "AI Chat Agent" },
  { icon: Workflow, label: "Workflow Automation" },
  { icon: Mail, label: "Email + SMS Marketing" },
  { icon: Calendar, label: "Calendar + Booking" },
  { icon: Globe, label: "Website + Funnels" },
  { icon: Star, label: "Reputation Management" },
  { icon: Search, label: "70+ Directory Listings" },
  { icon: CreditCard, label: "Invoicing + Payments" },
  { icon: Smartphone, label: "Branded Mobile App" },
  { icon: Bot, label: "Content AI" },
  { icon: Sparkles, label: "Funnel AI" },
  { icon: Zap, label: "Workflow AI" },
  { icon: Headphones, label: "2-Way SMS + Voicemail" },
  { icon: ShieldCheck, label: "HIPAA Option (+$297/mo)" },
];

export default function FeaturesPage() {
  return (
    <main id="main-content" className="navbar-offset">
      <Breadcrumbs items={[{ name: "Features" }]} />
      <BreadcrumbSchema items={[{ name: "Features", path: "/features" }]} />

      {/* HERO */}
      <section className="section-dark-radial">
        <div className="mx-auto max-w-[1400px] px-6 pt-16 pb-14 sm:px-8 lg:pt-20 lg:pb-16">
          <p className="eyebrow">The Complete Platform</p>
          <h1 className="mt-3 h-display font-bold tracking-tight text-white max-w-4xl">
            Every capability your business needs.{" "}
            <span className="bg-gradient-to-r from-accent via-[#3B82F6] to-accent bg-clip-text text-transparent">
              One platform, one login, one price.
            </span>
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#94A3B8] sm:text-lg">
            This page is long on purpose. It's the full feature inventory for
            the Adaptation Living platform — every tool we replace, every capability we include,
            every AI employee you hire on day one. Every tier unlocks all of
            this. Tiers differ on user count, setup depth, and support level.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/demo"
              className="inline-flex items-center justify-center gap-2 rounded-sm border-2 border-accent bg-accent px-6 py-3 text-xs font-bold uppercase tracking-[0.22em] text-white shadow-[0_0_14px_rgba(37,99,235,0.35)] transition-all hover:bg-[#1D4ED8]"
            >
              See It Live
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-sm border-2 border-white/70 bg-transparent px-6 py-3 text-xs font-bold uppercase tracking-[0.22em] text-white transition-all hover:bg-white hover:text-[#0F172A]"
            >
              Jump To Pricing
            </a>
          </div>
        </div>
      </section>

      {/* QUICK-GRID JUMP LINKS */}
      <section className="section-cream border-t border-[#0F172A]/5 py-14 sm:py-16">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Everything Inside</p>
            <h2 className="mt-3 font-display font-bold text-[#0F172A]">
              Sixteen features, native. Zero third-party integrations required.
            </h2>
          </div>

          <div className="mx-auto mt-10 grid max-w-5xl gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {quickGrid.map((f) => (
              <div
                key={f.label}
                className="flex items-center gap-3 rounded-[14px] border border-[#0F172A]/10 bg-white p-4 shadow-soft transition-all hover:-translate-y-0.5 hover:border-accent/40"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#0F172A] text-accent">
                  <f.icon className="h-5 w-5" />
                </div>
                <p className="text-[14px] font-semibold text-[#0F172A]">
                  {f.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEEP-DIVE SECTIONS — alternating layout */}
      {deepDives.map((d, i) => {
        const reversed = i % 2 === 1;
        const isDark = i % 2 === 0;
        return (
          <section
            key={d.id}
            id={d.id}
            className={`${
              isDark ? "section-dark" : "section-cream border-t border-[#0F172A]/5"
            } py-16 sm:py-20`}
          >
            <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
              <div
                className={`grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] ${
                  reversed ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                        isDark ? "bg-accent/10 text-accent" : "bg-[#0F172A] text-accent"
                      }`}
                    >
                      <d.icon className="h-5 w-5" />
                    </div>
                    <p
                      className={`text-[10px] font-bold uppercase tracking-[0.28em] ${
                        isDark ? "text-accent" : "text-accent"
                      }`}
                    >
                      {d.kicker}
                    </p>
                  </div>
                  <h2
                    className={`font-display font-bold ${
                      isDark ? "text-white" : "text-[#0F172A]"
                    }`}
                  >
                    {d.title}
                  </h2>
                  <p
                    className={`mt-4 max-w-xl text-[15px] leading-relaxed sm:text-base ${
                      isDark ? "text-[#94A3B8]" : "text-[#475569]"
                    }`}
                  >
                    {d.outcome}
                  </p>

                  <ul className="mt-6 space-y-2.5">
                    {d.bullets.map((b) => (
                      <li
                        key={b}
                        className={`flex items-start gap-3 text-[15px] ${
                          isDark ? "text-white" : "text-[#0F172A]"
                        }`}
                      >
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <p
                    className={`mt-6 text-[12px] uppercase tracking-[0.24em] ${
                      isDark ? "text-[#64748B]" : "text-[#0F172A]/50"
                    }`}
                  >
                    Replaces:{" "}
                    <span
                      className={`font-semibold normal-case tracking-normal ${
                        isDark ? "text-[#94A3B8]" : "text-[#475569]"
                      }`}
                    >
                      {d.replaces}
                    </span>
                  </p>
                </div>

                <div>
                  {d.imageSrc ? (
                    <div
                      className={`overflow-hidden rounded-[20px] border ${
                        isDark
                          ? "border-white/10 bg-white/[0.03] shadow-[0_20px_60px_-10px_rgba(37,99,235,0.35)]"
                          : "border-[#0F172A]/10 bg-white shadow-lift"
                      }`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={d.imageSrc}
                        alt={d.imageAlt ?? `${d.title} preview`}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ) : (
                    <div
                      className={`flex min-h-[280px] flex-col justify-center rounded-[20px] border p-8 ${
                        isDark
                          ? "border-accent/30 bg-accent/5"
                          : "border-accent/30 bg-accent/5"
                      }`}
                    >
                      <d.icon
                        className={`mb-4 h-12 w-12 text-accent`}
                      />
                      <p
                        className={`font-display text-xl font-bold ${
                          isDark ? "text-white" : "text-[#0F172A]"
                        }`}
                      >
                        {d.kicker}
                      </p>
                      <p
                        className={`mt-2 text-[14px] leading-relaxed ${
                          isDark ? "text-[#94A3B8]" : "text-[#475569]"
                        }`}
                      >
                        {d.outcome.split(".")[0]}.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* FINAL CTA */}
      <section className="section-dark-radial py-16 text-center sm:py-20">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
          <p className="eyebrow">One Platform. One Price. Every Feature.</p>
          <h2 className="mt-3 font-display font-bold text-white">
            Still reading? Time to see it running.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-[#94A3B8]">
            Book a 30-minute demo and watch every feature above respond in
            real time. Or sign up self-serve and have the platform ready in 5
            minutes. Either way, one bill, one login, one team of humans in
            Phoenix supporting you.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/demo"
              className="inline-flex items-center justify-center gap-2 rounded-sm border-2 border-accent bg-accent px-7 py-3.5 text-xs font-bold uppercase tracking-[0.22em] text-white shadow-[0_0_14px_rgba(37,99,235,0.35)] transition-all hover:bg-[#1D4ED8]"
            >
              Book Live Demo
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-sm border-2 border-white/70 px-7 py-3.5 text-xs font-bold uppercase tracking-[0.22em] text-white transition-all hover:bg-white hover:text-[#0F172A]"
            >
              See Pricing & Plans
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
