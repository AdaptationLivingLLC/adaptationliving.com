import type { Metadata } from "next";
import {
    CheckCircle2,
  Clock,
  CreditCard,
  Mail,
  MessageSquare,
  Mic,
  Phone,
  PieChart,
  Shield,
  Sparkles,
  Star,
  Users,
  Workflow,
} from "lucide-react";
import {
  BreadcrumbSchema,
  pageAlternates,
  pageOg,
  pageTwitter,
} from "../../../lib/seo";
import { Breadcrumbs } from "../../../components/breadcrumbs";

const title =
  "AI Phone Receptionist, Chat Agents & Workflow Automation — Phoenix, AZ";
const description =
  "AI-powered business automation from Adaptation Living LLC in Phoenix, AZ. 24/7 AI phone receptionist, AI chat agent (web + SMS + Instagram + Facebook + WhatsApp), automated follow-up workflows, review management, and Content AI. Included in every the Adaptation Living platform plan.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "AI phone receptionist Phoenix AZ",
    "AI chat agent for business",
    "AI answering service Phoenix",
    "automated follow-up system",
    "AI review management",
    "AI content generation business",
    "workflow automation Phoenix",
    "small business AI platform",
  ],
  alternates: pageAlternates("/ai"),
  openGraph: pageOg(title, description, "/ai"),
  twitter: pageTwitter(title, description),
};

const faqs = [
  {
    q: "How is the AI phone receptionist different from a regular answering service?",
    a: "A human answering service costs $200–$500/month with limited hours and still needs to transfer calls, take messages, and coordinate with your calendar. Our AI Voice Agent answers 24/7/365, captures name, phone, email, books directly on your calendar, handles multiple simultaneous callers, and costs around $0.48 per 3-minute call. No menus, no transfers, no voicemail black holes.",
  },
  {
    q: "Do I need a new phone number?",
    a: "You can keep your existing number or we issue a dedicated business line. Either way, calls, SMS, and voicemails flow through one unified inbox — your personal cell stays out of it.",
  },
  {
    q: "What channels does the AI chat agent cover?",
    a: "Your website, SMS/text, Instagram DM, Facebook Messenger, Google Business Profile messages, and WhatsApp (optional add-on). One AI, trained once, responds everywhere — either autopilot or suggestive (drafts replies for human approval).",
  },
  {
    q: "What's included in every tier?",
    a: "The AI Voice Agent, AI Chat Agent, AI Review Responder, Content AI, Funnel AI, and Workflow AI are included in every the Adaptation Living platform plan — Starter, Growth, and Scale. Tiers differentiate on user count, setup depth, and support level, not feature access.",
  },
  {
    q: "How fast can the AI get trained on my business?",
    a: "Done-For-You setups include full AI training on your business knowledge base, booking rules, and brand voice — usually two to three weeks end-to-end. Self-Serve gives you the training interface and documentation so you can configure it in an afternoon.",
  },
];

export default function AIPage() {
  return (
    <main id="main-content" className="navbar-offset">
      <Breadcrumbs items={[{ name: "AI Systems" }]} />
      <BreadcrumbSchema items={[{ name: "AI Systems", path: "/ai" }]} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "AI Business Automation — Phone, Chat, Follow-Up, Reviews, Content",
            description:
              "24/7 AI phone receptionist, AI chat agent on every channel, automated follow-up workflows, AI review management, and Content AI — included in every the Adaptation Living platform plan.",
            provider: {
              "@type": "Organization",
              name: "Adaptation Living LLC",
              url: "https://www.adaptationliving.com",
              telephone: "+1-623-219-1237",
            },
            areaServed: [
              { "@type": "City", name: "Phoenix" },
              { "@type": "State", name: "Arizona" },
              { "@type": "Country", name: "US" },
            ],
            serviceType: "AI Business Automation",
            offers: {
              "@type": "AggregateOffer",
              lowPrice: "194.90",
              highPrice: "997.90",
              priceCurrency: "USD",
            },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      {/* ═══════════ HERO ═══════════ */}
      <section className="section-dark-radial py-20 sm:py-24">
        <div className="relative max-w-[1400px] mx-auto px-6 sm:px-8">
          <div className="mb-5 flex flex-wrap gap-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-accent">
            <span className="rounded-full border border-accent/50 bg-accent/10 px-3 py-1.5">
              Built &amp; Managed by Adaptation Living
            </span>
            <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-white">
              Phoenix, AZ
            </span>
          </div>
          <h1 className="h-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-[1.08]">
            AI Phone Receptionist, Chat Agents &amp;{" "}
            <span className="bg-gradient-to-r from-accent via-[#3B82F6] to-accent bg-clip-text text-transparent">
              Workflow Automation
            </span>{" "}
            for Phoenix Businesses.
          </h1>
          <p className="mt-5 text-[#94A3B8] text-base sm:text-lg max-w-3xl leading-relaxed">
            Every the Adaptation Living platform plan ships with a full AI workforce. A 24/7 AI
            Voice Agent answers your phone. An AI Chat Agent replies on your
            website, Instagram, Facebook, WhatsApp, and text. AI automations
            follow up until the lead books. AI responds to every Google review.
            Content AI writes your blogs, captions, and emails. All included.
            No extra seats. No overage panic.
          </p>

          <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Response Time", value: "< 5 sec", detail: "Your customers get an answer before they think about calling someone else." },
              { label: "Availability", value: "24 / 7 / 365", detail: "Nights, weekends, holidays — your AI never takes a day off." },
              { label: "Typical Call Cost", value: "~$0.48", detail: "A 3-minute AI-answered call costs less than a coffee." },
              { label: "Lead Capture", value: "100%", detail: "Every caller's info lands directly in your CRM pipeline." },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-[10px] uppercase tracking-[0.24em] text-accent font-bold mb-1">
                  {stat.label}
                </p>
                <p className="font-display text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-[#94A3B8] mt-2">{stat.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="/intake"
              className="inline-flex items-center justify-center gap-2 rounded-sm border-2 border-accent bg-accent px-7 py-3.5 text-xs font-bold uppercase tracking-[0.22em] text-navy shadow-gold hover:bg-transparent hover:text-accent transition-all"
            >
              Book A Setup Call
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-sm border-2 border-white/70 bg-transparent px-7 py-3.5 text-xs font-bold uppercase tracking-[0.22em] text-white hover:bg-white hover:text-navy transition-all"
            >
              See A Live Demo
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════ 2AM SCENARIO ═══════════ */}
      <section className="section-cream py-20 sm:py-24">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="eyebrow">See The Difference</p>
            <h2 className="mt-3 h-display text-3xl sm:text-4xl font-bold text-[#0F172A]">
              It's 2:47 AM. Someone Just Called Your Business.
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="rounded-[22px] border border-red-500/20 bg-white p-7 shadow-soft">
              <h3 className="font-display text-sm font-bold text-red-500/80 uppercase tracking-[0.22em] mb-4">
                Without AI
              </h3>
              <div className="space-y-3">
                {[
                  "Phone rings. Goes to voicemail.",
                  "Caller hangs up — nobody leaves voicemail anymore.",
                  "They Google your competitor instead.",
                  "Your competitor answers. Books the job.",
                  "You wake up. Check your phone. Nothing.",
                  "You never knew they called.",
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3 text-[#475569]">
                    <span className="text-red-500 font-bold shrink-0">✕</span>
                    <p className="text-sm leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-xl border border-red-500/20 bg-red-500/5 p-4">
                <p className="text-red-600 font-semibold text-sm">
                  Lost lead. Lost revenue. You never even knew.
                </p>
              </div>
            </div>
            <div className="rounded-[22px] border-2 border-accent/40 bg-white p-7 shadow-lift ring-1 ring-accent/20">
              <h3 className="font-display text-sm font-bold text-accent uppercase tracking-[0.22em] mb-4">
                With the Adaptation Living platform
              </h3>
              <div className="space-y-3">
                {[
                  "Phone rings. Your AI receptionist answers in your brand voice.",
                  "\"Thanks for calling — how can I help you tonight?\"",
                  "Caller asks about pricing — AI answers accurately from your knowledge base.",
                  "AI captures name, phone, and email.",
                  "AI books them on your calendar for tomorrow morning.",
                  "Lead lands in your dashboard instantly.",
                  "You get a text: \"New lead — John, 602-555-1234, booked 9 AM.\"",
                  "Caller gets a confirmation email with appointment details.",
                  "7:00 AM — you review the new lead over coffee.",
                  "9:00 AM — you walk into a booked appointment you didn't lift a finger for.",
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent w-4 h-4 mt-0.5 shrink-0" />
                    <p className="text-sm leading-relaxed text-[#0F172A]">{step}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-xl border border-accent/30 bg-accent/10 p-4">
                <p className="text-accent font-semibold text-sm">
                  Lead captured. Appointment booked. Revenue secured. All while you slept.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ AI PHONE ═══════════ */}
      <section id="phone" className="section-cream border-t border-[#0F172A]/10 py-20 sm:py-24">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mb-8">
            <div className="flex items-center gap-3 mb-3">
              <Mic className="text-accent w-7 h-7" />
              <p className="eyebrow">Your 24/7 Front Desk</p>
            </div>
            <h2 className="h-display text-3xl sm:text-4xl font-bold text-[#0F172A]">
              AI Phone Receptionist — Answers Every Call, Captures Every Lead.
            </h2>
            <p className="mt-4 text-[#475569] text-base leading-relaxed">
              A conversational AI answers your business phone in your brand
              voice — not a voicemail, not a phone menu. It greets callers,
              answers questions from your knowledge base, captures contact
              details, and books appointments directly on your calendar.
              Multiple simultaneous callers. No bad days. Included in every
              plan.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-display text-lg font-bold text-[#0F172A] mb-4">What It Does</h3>
              <ul className="space-y-3">
                {[
                  "Answers inbound calls 24/7/365 with natural conversation",
                  "Custom greeting with your business name and personality",
                  "Answers questions from your custom knowledge base",
                  "Captures caller name, phone, and email automatically",
                  "Books appointments directly on your calendar",
                  "Adds every caller to your customer pipeline",
                  "Sends you a text and email summary after every call",
                  "Sends callers a confirmation email with appointment details",
                  "Handles multiple simultaneous callers",
                  "Transfers to a human when a caller asks for a person",
                  "Outbound calling available on higher tiers",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[#475569] text-sm leading-relaxed">
                    <CheckCircle2 className="text-accent w-4 h-4 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl border border-accent/30 bg-accent/10 p-6">
                <p className="text-[10px] uppercase tracking-[0.26em] text-accent font-bold mb-2">
                  Included In Every Plan
                </p>
                <p className="text-[#0F172A] font-semibold text-base">
                  Starter · Growth · Scale — Setup or DIY
                </p>
                <p className="mt-2 text-sm text-[#475569]">
                  Zero per-call fees from us. Standard carrier minutes only
                  (fractions of a penny, billed at cost).
                </p>
              </div>
              <div className="rounded-2xl border border-[#0F172A]/10 bg-white p-6 shadow-soft">
                <p className="text-[10px] uppercase tracking-[0.26em] text-[#0F172A]/60 font-bold mb-2">
                  What Others Charge
                </p>
                <p className="text-sm text-[#475569]">
                  Human answering services: $200–$500/mo (limited hours).
                </p>
                <p className="text-sm text-[#475569]">
                  AI agencies: $10,000+ setup + $500/mo.
                </p>
                <p className="text-accent text-sm font-semibold mt-2">
                  We include it in every tier, starting at $194.90/mo with setup or $349.90/mo self-serve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ AI CHAT ═══════════ */}
      <section id="chat" className="section-cream border-t border-[#0F172A]/10 py-20 sm:py-24">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mb-8">
            <div className="flex items-center gap-3 mb-3">
              <MessageSquare className="text-accent w-7 h-7" />
              <p className="eyebrow">Instant Response, Every Channel</p>
            </div>
            <h2 className="h-display text-3xl sm:text-4xl font-bold text-[#0F172A]">
              AI Chat Agent — Answers Web, SMS, Instagram, Facebook &amp; WhatsApp.
            </h2>
            <p className="mt-4 text-[#475569] text-base leading-relaxed">
              See the chat bubble in the corner of this site? That's our AI
              running live. We install the same system on your website, your
              Facebook page, Instagram DMs, Google Business Profile messages,
              SMS, and WhatsApp. One AI. Every channel. Instant responses in
              your brand voice.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-display text-lg font-bold text-[#0F172A] mb-4">What It Does</h3>
              <ul className="space-y-3">
                {[
                  "Website chat widget — instant replies to every visitor",
                  "Facebook Messenger — handles DMs automatically",
                  "Instagram — replies to DM conversations",
                  "Google Business Profile — responds to customer messages",
                  "SMS / text — two-way AI conversations",
                  "WhatsApp — optional add-on",
                  "Answers from your business knowledge base",
                  "Books appointments inside the conversation",
                  "Captures contact info and adds to the CRM",
                  "Hands off to a human when someone asks",
                  "Autopilot or suggestive (human-approval) mode",
                  "Multi-language support",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[#475569] text-sm leading-relaxed">
                    <CheckCircle2 className="text-accent w-4 h-4 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl border border-accent/30 bg-accent/10 p-6">
                <p className="text-[10px] uppercase tracking-[0.26em] text-accent font-bold mb-2">
                  Included In Every Plan
                </p>
                <p className="text-[#0F172A] font-semibold text-base">
                  Starter · Growth · Scale
                </p>
              </div>
              <div className="rounded-2xl border border-[#0F172A]/10 bg-white p-6 shadow-soft">
                <p className="text-sm text-[#475569]">
                  <strong className="text-[#0F172A]">Try it right now.</strong>{" "}
                  Click the chat bubble on this page. Ask it anything. That's
                  exactly what your customers will experience on your site.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ AUTOMATED FOLLOW-UP ═══════════ */}
      <section id="follow-up" className="section-cream border-t border-[#0F172A]/10 py-20 sm:py-24">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mb-8">
            <div className="flex items-center gap-3 mb-3">
              <Workflow className="text-accent w-7 h-7" />
              <p className="eyebrow">Your Business Runs Itself</p>
            </div>
            <h2 className="h-display text-3xl sm:text-4xl font-bold text-[#0F172A]">
              Automated Follow-Up &amp; Workflow Engine.
            </h2>
            <p className="mt-4 text-[#475569] text-base leading-relaxed">
              The moment a lead enters your pipeline — call, chat, form, or
              text — the AI takes action. Welcome text. Confirmation email.
              Reminder. Pipeline routing. If they don't respond, it follows up
              again until they book or tell it to stop. You set the rules
              once. The system runs 24/7.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <ul className="space-y-3">
              {[
                "Automatic welcome text + email for every new lead",
                "Smart routing to the right pipeline stage",
                "Multi-step sequences (SMS, email, voicemail drops)",
                "Missed-call text-back — instant text when you can't answer",
                "Appointment reminders cut no-shows by 40%+",
                "Re-engagement campaigns for cold leads",
                "AI decides next action based on customer behavior",
                "Auto-translates messages for non-English speakers",
                "Summarizes long conversations into action items",
                "Describe what you want in plain English — Workflow AI builds it",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-[#475569] text-sm leading-relaxed">
                  <CheckCircle2 className="text-accent w-4 h-4 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="space-y-4">
              <div className="rounded-2xl border border-accent/30 bg-accent/10 p-6">
                <p className="text-[10px] uppercase tracking-[0.26em] text-accent font-bold mb-2">
                  Included In Every Plan
                </p>
                <p className="text-[#0F172A] font-semibold text-sm">
                  Visual workflow builder + all standard triggers and actions.
                </p>
                <p className="text-[#0F172A] font-semibold text-sm mt-2">
                  Premium AI actions (conditional branching, AI-driven routing): $0.01 per execution.
                </p>
              </div>
              <div className="rounded-2xl border border-[#0F172A]/10 bg-white p-6 shadow-soft">
                <p className="text-sm text-[#475569]">
                  100 automated follow-ups a day at $0.01 each = $1.00/day.
                  Your entire follow-up engine for the price of a coffee a month.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ REVIEW MANAGEMENT ═══════════ */}
      <section id="reviews" className="section-cream border-t border-[#0F172A]/10 py-20 sm:py-24">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mb-8">
            <div className="flex items-center gap-3 mb-3">
              <Star className="text-accent w-7 h-7" />
              <p className="eyebrow">Reputation on Autopilot</p>
            </div>
            <h2 className="h-display text-3xl sm:text-4xl font-bold text-[#0F172A]">
              AI Review Management — Every Google &amp; Facebook Review, Answered.
            </h2>
            <p className="mt-4 text-[#475569] text-base leading-relaxed">
              Your online reviews are the first thing potential customers
              check. Unanswered reviews signal a business that doesn't care.
              Our AI monitors every review on Google and Facebook. When a new
              review comes in, it writes a professional, personalized response
              in your brand voice — 5 stars or 1 star. And it sends review
              requests to your happiest customers at the right moment.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            <div className="rounded-2xl border border-[#0F172A]/10 bg-white p-6 shadow-soft">
              <p className="font-display text-3xl font-bold text-accent">$0.01</p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.26em] text-[#0F172A]/60 font-bold">
                Per AI response
              </p>
              <p className="mt-2 text-sm text-[#475569]">
                100 reviews a month costs a dollar.
              </p>
            </div>
            <div className="rounded-2xl border border-[#0F172A]/10 bg-white p-6 shadow-soft">
              <p className="font-display text-xl font-bold text-accent">Auto-Request</p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.26em] text-[#0F172A]/60 font-bold">
                Review campaigns
              </p>
              <p className="mt-2 text-sm text-[#475569]">
                Sends review requests to happy customers at exactly the right moment post-service.
              </p>
            </div>
            <div className="rounded-2xl border border-[#0F172A]/10 bg-white p-6 shadow-soft">
              <p className="font-display text-xl font-bold text-accent">Instant Alerts</p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.26em] text-[#0F172A]/60 font-bold">
                Negative review flags
              </p>
              <p className="mt-2 text-sm text-[#475569]">
                Negative review? You're notified on your phone immediately so you can step in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ CONTENT AI ═══════════ */}
      <section id="content" className="section-cream border-t border-[#0F172A]/10 py-20 sm:py-24">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mb-8">
            <div className="flex items-center gap-3 mb-3">
              <Sparkles className="text-accent w-7 h-7" />
              <p className="eyebrow">Content That Writes Itself</p>
            </div>
            <h2 className="h-display text-3xl sm:text-4xl font-bold text-[#0F172A]">
              Content AI — Blogs, Social, Ads, Emails, Landing Pages.
            </h2>
            <p className="mt-4 text-[#475569] text-base leading-relaxed">
              Blog posts, social captions, email campaigns, SMS copy, ad text,
              website pages — generated in your brand voice in seconds. Need a
              custom image for a social post? Six cents. Need 1,000 words of
              website copy? Nine cents. Need a new landing page? Free —
              describe what you want and the AI builds it.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { value: "$0.09", unit: "per 1,000 words", label: "Copy" },
              { value: "$0.063", unit: "per AI image", label: "Images" },
              { value: "FREE", unit: "AI page builder", label: "Landing Pages" },
              { value: "1,000/day", unit: "AI prompts", label: "Daily Allowance" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-[#0F172A]/10 bg-white p-6 text-center shadow-soft">
                <p className="text-[10px] uppercase tracking-[0.26em] text-accent font-bold mb-2">
                  {item.label}
                </p>
                <p className="font-display text-2xl font-bold text-[#0F172A]">{item.value}</p>
                <p className="mt-1 text-sm text-[#475569]">{item.unit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CUSTOM AI AGENTS ═══════════ */}
      <section id="agents" className="section-cream border-t border-[#0F172A]/10 py-20 sm:py-24">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mb-8">
            <div className="flex items-center gap-3 mb-3">
              <Users className="text-accent w-7 h-7" />
              <p className="eyebrow">AI Employees Built for You</p>
            </div>
            <h2 className="h-display text-3xl sm:text-4xl font-bold text-[#0F172A]">
              Custom AI Agents for Specialized Roles.
            </h2>
            <p className="mt-4 text-[#475569] text-base leading-relaxed">
              For operators who need more than a receptionist and a chat
              agent, we build custom AI employees trained on your specific
              processes: lead qualification, intake, scheduling, customer
              support, and more. These agents can also generate promotional
              videos, product images, and voice overs — a fraction of what a
              production company charges.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            <div className="rounded-2xl border border-[#0F172A]/10 bg-white p-6 shadow-soft">
              <p className="font-display text-lg font-bold text-accent mb-2">Video</p>
              <p className="text-sm text-[#475569]">
                $0.15–$0.40 per second of AI-generated video
              </p>
            </div>
            <div className="rounded-2xl border border-[#0F172A]/10 bg-white p-6 shadow-soft">
              <p className="font-display text-lg font-bold text-accent mb-2">Images</p>
              <p className="text-sm text-[#475569]">
                $0.04–$0.12 per AI-generated image (multiple quality tiers)
              </p>
            </div>
            <div className="rounded-2xl border border-[#0F172A]/10 bg-white p-6 shadow-soft">
              <p className="font-display text-lg font-bold text-accent mb-2">Real-Time Research</p>
              <p className="text-sm text-[#475569]">
                $0.01 per web search — agents research in real time
              </p>
            </div>
          </div>
          <div className="mt-7 rounded-2xl border border-accent/30 bg-accent/10 p-6 inline-block">
            <p className="text-[10px] uppercase tracking-[0.26em] text-accent font-bold mb-2">
              Custom Build Engagement
            </p>
            <p className="text-[#0F172A] font-semibold text-sm">
              Scale Setup ($5,000 + $694.90/mo) or a custom scoped engagement.
              Book a call and we'll map your workflows.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════ HOW BILLING WORKS ═══════════ */}
      <section className="section-cream border-t border-[#0F172A]/10 py-20 sm:py-24">
        <div className="max-w-[1000px] mx-auto px-6 sm:px-8">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <CreditCard className="text-accent w-6 h-6" />
              <p className="eyebrow">No Surprises</p>
            </div>
            <h2 className="h-display text-3xl sm:text-4xl font-bold text-[#0F172A]">
              How Billing Works.
            </h2>
          </div>
          <div className="space-y-4 text-[#475569] text-sm leading-relaxed">
            <p>
              <strong className="text-[#0F172A]">One monthly price. Everything included.</strong>{" "}
              Your plan covers every AI feature — phone receptionist, chat
              agent, automated follow-up, review management, content
              generation, workflow automation — all of it. You pay one flat
              rate. No surprise invoices.
            </p>
            <p>
              The only additional cost is standard phone carrier charges — a
              fraction of a penny per minute for making and receiving calls,
              passed through at cost. It's not our fee. It's the phone
              network's fee.
            </p>
            <p>
              We keep a card on file for your monthly subscription. Plan
              changes are handled by our team — no self-serve confusion, no
              accidentally clicking the wrong upgrade button.
            </p>
          </div>
          <div className="mt-8 grid sm:grid-cols-3 gap-5">
            <div className="rounded-2xl border border-[#0F172A]/10 bg-white p-6 text-center shadow-soft">
              <p className="font-display text-base font-bold text-[#0F172A] mb-2">
                Monthly Fee
              </p>
              <p className="text-sm text-[#475569]">
                Flat rate. All AI features. No usage cap for normal business use.
              </p>
            </div>
            <div className="rounded-2xl border border-[#0F172A]/10 bg-white p-6 text-center shadow-soft">
              <p className="font-display text-base font-bold text-[#0F172A] mb-2">
                Phone Carrier
              </p>
              <p className="text-sm text-[#475569]">
                Per-minute charges passed through at cost. Fractions of a cent.
              </p>
            </div>
            <div className="rounded-2xl border border-[#0F172A]/10 bg-white p-6 text-center shadow-soft">
              <p className="font-display text-base font-bold text-[#0F172A] mb-2">
                No Surprises
              </p>
              <p className="text-sm text-[#475569]">
                No overages. No hidden fees. One relationship. One bill.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ COST COMPARISON ═══════════ */}
      <section className="section-cream border-t border-[#0F172A]/10 py-20 sm:py-24">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mb-10">
            <p className="eyebrow">The Real Numbers</p>
            <h2 className="mt-3 h-display text-3xl sm:text-4xl font-bold text-[#0F172A]">
              DIY vs. Agency vs. Adaptation Living.
            </h2>
          </div>
          <div className="overflow-x-auto rounded-[20px] border border-[#0F172A]/10 bg-white shadow-soft">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-[#0F172A]/10 bg-[#0F172A]/[0.02]">
                  <th className="py-4 px-5 text-[10px] uppercase tracking-[0.26em] text-[#0F172A]/70 font-bold">Feature</th>
                  <th className="py-4 px-5 text-[10px] uppercase tracking-[0.26em] text-[#0F172A]/50 font-bold">DIY / Traditional</th>
                  <th className="py-4 px-5 text-[10px] uppercase tracking-[0.26em] text-[#0F172A]/50 font-bold">Agency</th>
                  <th className="py-4 px-5 text-[10px] uppercase tracking-[0.26em] text-accent font-bold">the Adaptation Living platform</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { f: "24/7 AI Phone Receptionist", t: "$200–$500/mo (humans, limited hours)", a: "$10,000+ setup + $500/mo", u: "Included — every tier" },
                  { f: "AI Chat (web + social)", t: "$300–$1,000/mo (humans, biz hours)", a: "$3,000–$8,000 setup", u: "Included — every tier" },
                  { f: "CRM + Automation", t: "$150–$500/mo (software only)", a: "$5,000–$15,000 setup", u: "Included" },
                  { f: "Review Management", t: "$100–$300/mo", a: "$2,000+ setup", u: "$0.01/review (included)" },
                  { f: "Content Generation", t: "$500–$2,000/mo (freelancer)", a: "$3,000–$5,000/mo (retainer)", u: "$0.09 / 1K words" },
                  { f: "Workflow Automation", t: "Manual (your time)", a: "$5,000–$20,000 setup", u: "$0.01/action + free builder" },
                  { f: "Custom Website", t: "$3,000–$10,000 (template)", a: "$10,000–$20,000", u: "Included" },
                  { f: "SEO Optimization", t: "$2,000–$5,000/mo", a: "$2,000–$5,000/mo", u: "Included every tier" },
                ].map((row) => (
                  <tr key={row.f} className="border-b border-[#0F172A]/5 last:border-0">
                    <td className="py-3 px-5 text-[#0F172A] text-sm font-semibold">{row.f}</td>
                    <td className="py-3 px-5 text-[#475569] text-sm">{row.t}</td>
                    <td className="py-3 px-5 text-[#475569] text-sm">{row.a}</td>
                    <td className="py-3 px-5 text-accent font-semibold text-sm">{row.u}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[#475569] text-sm mt-6 max-w-3xl">
            Add it up. The same stack agencies sell for $30,000–$50,000 in
            setup and $3,000–$8,000/mo ongoing — we deliver from{" "}
            <strong className="text-[#0F172A]">$349.90/mo self-serve</strong> or{" "}
            <strong className="text-[#0F172A]">$194.90/mo with setup ($1,500)</strong>.
            Same features. Better technology. A fraction of the cost.
          </p>
        </div>
      </section>

      {/* ═══════════ DEDICATED NUMBER ═══════════ */}
      <section className="section-cream border-t border-[#0F172A]/10 py-20 sm:py-24">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 text-center">
          <Phone className="text-accent w-10 h-10 mx-auto mb-5" />
          <h2 className="h-display text-3xl sm:text-4xl font-bold text-[#0F172A]">
            One Business Number. Everything Connected.
          </h2>
          <p className="mt-4 text-[#475569] text-base max-w-2xl mx-auto leading-relaxed">
            We set you up with a dedicated business phone number. Put it on
            your website, signs, business cards, and social. When someone
            calls, AI answers. When they text, AI responds. When they book, it
            hits your calendar. One number. One system.
          </p>
          <div className="mt-10 grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
            <div className="rounded-2xl border border-[#0F172A]/10 bg-white p-6 shadow-soft">
              <Shield className="text-accent w-8 h-8 mx-auto mb-3" />
              <p className="font-display font-bold text-[#0F172A]">Your Number</p>
              <p className="mt-2 text-sm text-[#475569]">
                Dedicated line, separate from personal.
              </p>
            </div>
            <div className="rounded-2xl border border-[#0F172A]/10 bg-white p-6 shadow-soft">
              <Clock className="text-accent w-8 h-8 mx-auto mb-3" />
              <p className="font-display font-bold text-[#0F172A]">Always On</p>
              <p className="mt-2 text-sm text-[#475569]">
                AI answers 24/7/365.
              </p>
            </div>
            <div className="rounded-2xl border border-[#0F172A]/10 bg-white p-6 shadow-soft">
              <PieChart className="text-accent w-8 h-8 mx-auto mb-3" />
              <p className="font-display font-bold text-[#0F172A]">Full Tracking</p>
              <p className="mt-2 text-sm text-[#475569]">
                Every interaction in your dashboard.
              </p>
            </div>
          </div>
          <p className="mt-8 text-[#475569] text-sm max-w-xl mx-auto">
            Any app with an API or Zapier integration connects. Your business
            runs on one platform, not fifteen.
          </p>
        </div>
      </section>

      {/* ═══════════ FAQ ═══════════ */}
      <section className="section-cream border-t border-[#0F172A]/10 py-20 sm:py-24">
        <div className="max-w-[900px] mx-auto px-6 sm:px-8">
          <div className="text-center mb-10">
            <p className="eyebrow">AI Questions</p>
            <h2 className="mt-3 h-display text-3xl sm:text-4xl font-bold text-[#0F172A]">
              Common Questions About AI Systems.
            </h2>
          </div>
          <div>
            {faqs.map((item) => (
              <details key={item.q} className="group border-b border-[#0F172A]/10 py-2">
                <summary className="flex cursor-pointer select-none items-center justify-between py-4 text-base font-semibold text-[#0F172A] sm:text-lg">
                  <span className="pr-6">{item.q}</span>
                  <span className="shrink-0 text-2xl text-accent transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="pb-5 pr-8 text-sm leading-relaxed text-[#475569] sm:text-base">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section className="section-dark-radial py-20 sm:py-24 text-center">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          <p className="eyebrow">Everything on This Page Is Running Now</p>
          <h2 className="mt-3 h-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Ready to Put AI to Work for Your Business?
          </h2>
          <p className="max-w-xl mx-auto mt-5 text-base text-[#94A3B8] leading-relaxed">
            The chat bubble on this site is our AI. The form above captures
            your info into our pipeline. This isn't a concept — it's the
            product. And it's what we deploy for your business.
          </p>
          <p className="max-w-xl mx-auto mt-3 text-sm text-[#64748B]">
            Self-serve plans from $349.90/mo. Done-for-you setups from $1,500
            + $194.90/mo. Every tier includes the full AI suite.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/services"
              className="px-7 py-3.5 text-xs font-bold uppercase tracking-[0.22em] border-2 border-accent bg-accent text-navy shadow-gold hover:bg-transparent hover:text-accent transition-all rounded-sm"
            >
              See Plans &amp; Pricing
            </a>
            <a
              href="/contact"
              className="px-7 py-3.5 text-xs font-bold uppercase tracking-[0.22em] border-2 border-white/70 bg-transparent text-white hover:bg-white hover:text-navy transition-all rounded-sm"
            >
              Book A Demo
            </a>
          </div>
          <div className="flex justify-center gap-6 mt-10 flex-wrap">
            <a href="tel:6232191237" className="flex items-center gap-2 text-sm font-semibold text-white hover:text-accent">
              <Phone className="text-accent w-5 h-5" /> 623-219-1237
            </a>
            <a href="mailto:info@adaptationliving.com" className="flex items-center gap-2 text-sm font-semibold text-white hover:text-accent">
              <Mail className="text-accent w-5 h-5" /> info@adaptationliving.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
