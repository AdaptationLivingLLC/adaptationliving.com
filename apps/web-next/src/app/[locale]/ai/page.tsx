import type { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  CreditCard,
  DollarSign,
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

const title = "AI-Powered Business Systems — Adaptation Living LLC";
const description =
  "AI phone answering, chat agents, automated follow-up, review management, and content generation for your business. One monthly price, everything included. Adaptation Living LLC, Phoenix AZ.";

export const metadata: Metadata = {
  title,
  description,
  alternates: pageAlternates("/ai"),
  openGraph: pageOg(title, description, "/ai"),
  twitter: pageTwitter(title, description),
};

export default function AIPage() {
  return (
    <main id="main-content" className="navbar-offset">
      <BreadcrumbSchema items={[{ name: "AI Systems", path: "/ai" }]} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "AI-Powered Business Systems",
            description:
              "Complete AI business automation: 24/7 phone answering, chat agents, automated follow-up, review management, content generation, and workflow automation.",
            provider: {
              "@type": "Organization",
              name: "Adaptation Living LLC",
              url: "https://adaptationliving.com",
            },
            areaServed: "US",
            serviceType: "AI Business Automation",
            offers: {
              "@type": "AggregateOffer",
              lowPrice: "297",
              highPrice: "5997",
              priceCurrency: "USD",
            },
          }),
        }}
      />

      {/* ═══════════════════════════════════════════ */}
      {/* HERO                                       */}
      {/* ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden border-b border-glass-border">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.15),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(231,76,60,0.12),transparent_35%)]" />
        <div className="relative max-w-[1400px] mx-auto px-8 pt-20 pb-16">
          <div className="mb-6 flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.28em] text-accent">
            <span className="rounded-full border border-accent/40 bg-accent/10 px-4 py-2">Built &amp; Managed by Adaptation Living</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Phoenix AZ</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold max-w-4xl leading-tight mb-6">
            AI That Actually Works
            <br />
            <span className="text-accent">For Your Business.</span>
          </h1>
          <p className="text-text-muted text-lg sm:text-xl max-w-3xl leading-relaxed mb-6">
            Every business is trying to figure out how to use AI right now. Most are
            overwhelmed by the options and underwhelmed by the results. We cut through
            all of that. We build AI systems that answer your phone, respond to your
            customers, follow up on leads, manage your reviews, create your content,
            and run your operations — and we manage it all for you.
          </p>
          <p className="text-text-muted text-base max-w-3xl leading-relaxed mb-10">
            This is full-scale AI implementation that makes real sense for real businesses.
            Not a chatbot that says &ldquo;I don&apos;t understand.&rdquo; Not a tool you have to
            figure out yourself. A complete system, built by us, managed by us, that saves
            you money from day one.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[
              { label: "Response Time", value: "< 5 sec", detail: "Your customers get an answer before they think about calling someone else" },
              { label: "Availability", value: "24/7/365", detail: "Nights, weekends, holidays — your AI never takes a day off" },
              { label: "Avg Call Cost", value: "~$0.48", detail: "A 3-minute AI-answered call costs less than a cup of coffee" },
              { label: "Lead Capture", value: "100%", detail: "Every single caller's info goes straight to your dashboard" },
            ].map((stat) => (
              <div key={stat.label} className="glass rounded-2xl p-5">
                <p className="text-[11px] uppercase tracking-[0.22em] text-accent mb-2">{stat.label}</p>
                <p className="font-display text-3xl font-bold">{stat.value}</p>
                <p className="text-sm text-text-muted mt-2">{stat.detail}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/intake" className="inline-flex items-center justify-center gap-2 border-2 border-accent bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-white transition-all hover:bg-transparent hover:text-accent">
              Get Started <ArrowRight className="h-4 w-4" />
            </a>
            <a href="/contact" className="inline-flex items-center justify-center gap-2 border-2 border-white/70 px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-white transition-all hover:bg-white hover:text-bg-dark">
              See A Live Demo
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* MULTI-BUSINESS DEAL                        */}
      {/* ═══════════════════════════════════════════ */}
      <section className="border-b border-accent/30 bg-gradient-to-r from-accent/15 via-accent/5 to-accent/15 py-10">
        <div className="max-w-[1200px] mx-auto px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent bg-accent/10 px-5 py-2 text-sm uppercase tracking-widest text-accent font-semibold mb-4">
            <DollarSign className="w-4 h-4" /> Multi-Business Deal
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Own Two Businesses? Run Both for $350/mo Each.
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto mb-6">
            Sign up both companies and get our fully managed system — AI phone answering,
            chat agents, CRM, automation, SEO, everything — for
            each business at <strong className="text-white">$350/month per business</strong> instead
            of the standard Growth rate. Same quality. Same service.
          </p>
          <div className="flex justify-center gap-6 flex-wrap text-sm mb-6">
            <span className="flex items-center gap-2 text-white/80">
              <CheckCircle2 className="w-4 h-4 text-accent" /> Full managed tier for both
            </span>
            <span className="flex items-center gap-2 text-white/80">
              <CheckCircle2 className="w-4 h-4 text-accent" /> $300/mo total savings
            </span>
            <span className="flex items-center gap-2 text-white/80">
              <CheckCircle2 className="w-4 h-4 text-accent" /> Separate systems, one relationship
            </span>
          </div>
          <a href="/intake?deal=multi-business" className="inline-flex items-center gap-2 border-2 border-accent bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-white transition-all hover:bg-transparent hover:text-accent">
            Claim the Multi-Business Rate <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* THE 2 AM SCENARIO                          */}
      {/* ═══════════════════════════════════════════ */}
      <section className="border-b border-glass-border bg-gradient-to-r from-accent/8 via-black to-black/95 py-20">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.24em] text-accent mb-3">See The Difference</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold">
              It&apos;s 2:47 AM. Someone Just Called Your Business.
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="font-display text-xl font-bold text-white/50 mb-6 uppercase tracking-wider">Without Us</h3>
              <div className="space-y-4">
                {[
                  "Phone rings. Goes to voicemail.",
                  "Caller hangs up — nobody leaves messages anymore.",
                  "They Google your competitor instead.",
                  "Your competitor answers. Books the job.",
                  "You wake up. Check your phone. Nothing.",
                  "You never knew they called.",
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3 text-white/50">
                    <span className="text-red-500/80 mt-1 shrink-0">✕</span>
                    <p>{step}</p>
                  </div>
                ))}
                <div className="mt-6 rounded-xl border border-red-500/20 bg-red-500/5 p-5">
                  <p className="text-red-400 font-semibold">Lost lead. Lost revenue. You never even knew.</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-accent mb-6 uppercase tracking-wider">With Adaptation Living</h3>
              <div className="space-y-4">
                {[
                  "Phone rings. Your AI receptionist answers in your brand voice.",
                  "\"Thanks for calling! How can I help you tonight?\"",
                  "Caller asks about pricing — AI answers accurately from your business info.",
                  "AI captures their name, phone number, and email.",
                  "AI books them on your calendar for tomorrow morning.",
                  "Their info lands in your customer dashboard instantly.",
                  "You get a text: \"New lead — John, 602-555-1234, booked 9 AM.\"",
                  "The caller gets a confirmation email with appointment details.",
                  "7:00 AM — You review the new lead over coffee.",
                  "9:00 AM — You walk into a booked appointment you didn't lift a finger for.",
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-accent mt-1 shrink-0">✓</span>
                    <p className="text-white/90">{step}</p>
                  </div>
                ))}
                <div className="mt-6 rounded-xl border border-accent/30 bg-accent/5 p-5">
                  <p className="text-accent font-semibold">Lead captured. Appointment booked. Revenue secured. All while you slept.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* AI PHONE RECEPTIONIST                      */}
      {/* ═══════════════════════════════════════════ */}
      <section id="phone" className="py-20 border-b border-glass-border">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="flex items-center gap-3 mb-2">
            <Mic className="text-accent w-8 h-8" />
            <p className="text-sm uppercase tracking-[0.24em] text-accent">Your 24/7 Front Desk</p>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">AI Phone Receptionist</h2>
          <p className="text-text-muted text-lg leading-relaxed max-w-3xl mb-4">
            A conversational AI answers your business phone — not a voicemail, not a
            &ldquo;press 1 for sales&rdquo; menu. It greets callers by your business name,
            answers questions using your company information, captures contact details, and
            books appointments on your calendar. All automatically.
          </p>
          <p className="text-text-muted text-lg leading-relaxed max-w-3xl mb-4">
            It handles multiple callers at the same time. It never has a bad day. And
            it costs about 48 cents per 3-minute call to operate. Traditional answering
            services charge $200–$500/mo with limited hours. AI agencies charge $10,000+ just
            for the setup. We include it.
          </p>
          <p className="text-text-muted text-lg leading-relaxed max-w-3xl mb-8">
            We also set you up with a dedicated business phone number — no more using your
            personal cell. Put the number on your website, your signs, your cards, your
            social media. Calls, texts, and voicemails all flow through one system.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-display text-lg font-bold mb-4">What It Does</h3>
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
                  "Transfers to you when a caller asks for a person",
                  "Outbound calling available on higher tiers",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-text-muted text-sm">
                    <span className="text-accent mt-0.5 shrink-0">✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl border border-accent/20 bg-accent/5 p-6">
                <p className="text-[11px] uppercase tracking-[0.22em] text-accent mb-2">Included In</p>
                <p className="text-white font-semibold text-lg">Growth plan ($597/mo) and above</p>
                <p className="text-text-muted text-sm mt-2">No extra charge. No per-call fees. Included in your plan.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <p className="text-[11px] uppercase tracking-[0.22em] text-white/50 mb-2">What Others Charge</p>
                <p className="text-text-muted text-sm">Human answering services: $200–$500/mo (limited hours)</p>
                <p className="text-text-muted text-sm">AI agencies: $10,000+ setup + $500/mo ongoing</p>
                <p className="text-accent text-sm font-semibold mt-2">We include it starting in Growth ($597/mo). Zero setup fee on self-serve.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* AI CHAT AGENT                              */}
      {/* ═══════════════════════════════════════════ */}
      <section id="chat" className="py-20 border-b border-glass-border bg-black/40">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="flex items-center gap-3 mb-2">
            <MessageSquare className="text-accent w-8 h-8" />
            <p className="text-sm uppercase tracking-[0.24em] text-accent">Instant Response, Every Channel</p>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">AI Chat Agent</h2>
          <p className="text-text-muted text-lg leading-relaxed max-w-3xl mb-4">
            See the chat bubble in the corner of this website? That&apos;s our AI running
            right now. Type a question and it responds instantly with a real, accurate answer —
            not a canned reply. We install the exact same system on your website, your Facebook
            page, your Instagram, your Google Business listing, and your text messages.
          </p>
          <p className="text-text-muted text-lg leading-relaxed max-w-3xl mb-8">
            When a customer reaches out on any of those channels, at any hour, they get a
            real response in seconds. The AI knows your business, answers their questions,
            and captures their information. One system covers every channel your customers use.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-display text-lg font-bold mb-4">What It Does</h3>
              <ul className="space-y-3">
                {[
                  "Website chat widget — instant responses to every visitor",
                  "Facebook Messenger — answers DMs automatically",
                  "Instagram — handles DM conversations for you",
                  "Google Business Profile — responds to customer messages",
                  "SMS / text — two-way AI conversations",
                  "Answers from your business knowledge base",
                  "Books appointments directly within the conversation",
                  "Captures contact info and adds to your customer pipeline",
                  "Hands off to you when someone asks for a person",
                  "Multi-language support",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-text-muted text-sm">
                    <span className="text-accent mt-0.5 shrink-0">✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl border border-accent/20 bg-accent/5 p-6">
                <p className="text-[11px] uppercase tracking-[0.22em] text-accent mb-2">Included In</p>
                <p className="text-white font-semibold text-lg">Growth plan ($597/mo) and above</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <p className="text-white/80 text-sm">
                  <strong>Try it right now.</strong> Click the chat bubble on this page. Ask it anything. That&apos;s exactly what your customers will experience on your site.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* AUTOMATED FOLLOW-UP                        */}
      {/* ═══════════════════════════════════════════ */}
      <section id="follow-up" className="py-20 border-b border-glass-border">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="flex items-center gap-3 mb-2">
            <Workflow className="text-accent w-8 h-8" />
            <p className="text-sm uppercase tracking-[0.24em] text-accent">Your Business Runs Itself</p>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">Automated Follow-Up &amp; Workflows</h2>
          <p className="text-text-muted text-lg leading-relaxed max-w-3xl mb-4">
            When a new lead comes in — from a call, a chat, a form, a text — what happens
            next? For most businesses: nothing. The lead sits. Nobody follows up. The customer
            moves on.
          </p>
          <p className="text-text-muted text-lg leading-relaxed max-w-3xl mb-8">
            With our system, the moment a lead enters your pipeline, the AI takes action
            automatically. Welcome text. Confirmation email. Follow-up reminder. Pipeline
            routing. And if they don&apos;t respond, the AI follows up again until they book
            or tell it to stop. You set the rules once. The system runs 24/7.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <ul className="space-y-3">
              {[
                "Automatic welcome text and email for every new lead",
                "Smart routing — sends leads to the right pipeline stage",
                "Multi-step follow-up sequences (text, email, voicemail drop)",
                "Missed call text-back — instant text when you can't answer",
                "Appointment reminders to cut no-shows",
                "Re-engagement campaigns for leads that went cold",
                "AI decides next action based on customer behavior",
                "Auto-translates messages for non-English speakers",
                "Summarizes long conversations into quick action items",
                "Describe what you want in plain English — AI builds the workflow for you (free)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-text-muted text-sm">
                  <span className="text-accent mt-0.5 shrink-0">✓</span>{item}
                </li>
              ))}
            </ul>
            <div className="space-y-4">
              <div className="rounded-2xl border border-accent/20 bg-accent/5 p-6">
                <p className="text-[11px] uppercase tracking-[0.22em] text-accent mb-2">Included In</p>
                <p className="text-white font-semibold">Basic automation: Starter ($297/mo)</p>
                <p className="text-white font-semibold">Advanced AI workflows: Growth plan ($597/mo)</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <p className="text-text-muted text-sm">Individual AI workflow actions cost one penny each ($0.01). The visual workflow builder is free — describe what you want and the AI creates it.</p>
                <p className="text-accent text-sm font-semibold mt-2">100 automated follow-ups a day = $1.00. Your entire follow-up engine for the price of a dollar.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* REVIEW MANAGEMENT                          */}
      {/* ═══════════════════════════════════════════ */}
      <section id="reviews" className="py-20 border-b border-glass-border bg-black/40">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="flex items-center gap-3 mb-2">
            <Star className="text-accent w-8 h-8" />
            <p className="text-sm uppercase tracking-[0.24em] text-accent">Reputation on Autopilot</p>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">AI Review Management</h2>
          <p className="text-text-muted text-lg leading-relaxed max-w-3xl mb-4">
            Your online reviews are the first thing potential customers check. A business
            with unanswered reviews looks like a business that doesn&apos;t care. Our AI monitors
            every review on Google, Facebook, and other platforms. When a new review comes in,
            it writes a professional, personalized response in your brand voice — 5 stars or 1 star.
          </p>
          <p className="text-text-muted text-lg leading-relaxed max-w-3xl mb-8">
            It also sends review requests to your happiest customers at exactly the right
            moment, turning satisfied clients into public advocates. All for one cent per review.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="glass rounded-2xl p-6">
              <p className="font-display text-2xl font-bold text-accent mb-2">$0.01</p>
              <p className="text-sm text-text-muted">Per AI-generated review response. 100 reviews/month = $1.</p>
            </div>
            <div className="glass rounded-2xl p-6">
              <p className="font-display text-2xl font-bold text-accent mb-2">Auto-Request</p>
              <p className="text-sm text-text-muted">Sends review requests at the right moment after service.</p>
            </div>
            <div className="glass rounded-2xl p-6">
              <p className="font-display text-2xl font-bold text-accent mb-2">Instant Alerts</p>
              <p className="text-sm text-text-muted">Negative review? You&apos;re notified on your phone immediately.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* CONTENT CREATION                           */}
      {/* ═══════════════════════════════════════════ */}
      <section id="content" className="py-20 border-b border-glass-border">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="flex items-center gap-3 mb-2">
            <Sparkles className="text-accent w-8 h-8" />
            <p className="text-sm uppercase tracking-[0.24em] text-accent">Content That Writes Itself</p>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">AI Content Creation</h2>
          <p className="text-text-muted text-lg leading-relaxed max-w-3xl mb-8">
            Blog posts, social media captions, email campaigns, text message copy, ad text,
            website content — generated in your brand voice in seconds. Need a custom image
            for a social post? Six cents. Need 1,000 words of website copy? Nine cents. Need a
            new landing page? Free — describe what you want and the AI builds it. A freelance
            writer charges $200+ for what the AI creates in seconds.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass rounded-2xl p-6 text-center">
              <p className="font-display text-xl font-bold text-accent">$0.063</p>
              <p className="text-sm text-text-muted mt-1">Per AI image</p>
            </div>
            <div className="glass rounded-2xl p-6 text-center">
              <p className="font-display text-xl font-bold text-accent">$0.09</p>
              <p className="text-sm text-text-muted mt-1">Per 1,000 words</p>
            </div>
            <div className="glass rounded-2xl p-6 text-center">
              <p className="font-display text-xl font-bold text-accent">FREE</p>
              <p className="text-sm text-text-muted mt-1">Landing page builder</p>
            </div>
            <div className="glass rounded-2xl p-6 text-center">
              <p className="font-display text-xl font-bold text-accent">1,000/day</p>
              <p className="text-sm text-text-muted mt-1">AI page-building prompts</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* CUSTOM AI AGENTS                           */}
      {/* ═══════════════════════════════════════════ */}
      <section id="agents" className="py-20 border-b border-glass-border bg-black/40">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="flex items-center gap-3 mb-2">
            <Users className="text-accent w-8 h-8" />
            <p className="text-sm uppercase tracking-[0.24em] text-accent">AI Employees Built for You</p>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">Custom AI Agents</h2>
          <p className="text-text-muted text-lg leading-relaxed max-w-3xl mb-4">
            For businesses that need more than a receptionist and a chat agent — we build
            custom AI employees tailored to specific jobs in your company. One handles intake.
            Another qualifies leads. Another manages scheduling. Another runs customer support.
            Each one is trained on your processes, your rules, and your knowledge base.
          </p>
          <p className="text-text-muted text-lg leading-relaxed max-w-3xl mb-8">
            These agents can also generate videos, images, and speech on demand. Promotional
            video clips, product images, voiceovers — created by AI for a fraction of what
            a production company would charge.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="glass rounded-2xl p-6">
              <p className="font-display text-lg font-bold text-accent mb-2">Video</p>
              <p className="text-sm text-text-muted">$0.15–$0.40 per second of AI-generated video</p>
            </div>
            <div className="glass rounded-2xl p-6">
              <p className="font-display text-lg font-bold text-accent mb-2">Images</p>
              <p className="text-sm text-text-muted">$0.04–$0.12 per AI-generated image (multiple quality levels)</p>
            </div>
            <div className="glass rounded-2xl p-6">
              <p className="font-display text-lg font-bold text-accent mb-2">Web Search</p>
              <p className="text-sm text-text-muted">$0.01 per search — agents can research in real time</p>
            </div>
          </div>
          <div className="mt-8 rounded-2xl border border-accent/20 bg-accent/5 p-6 inline-block">
            <p className="text-[11px] uppercase tracking-[0.22em] text-accent mb-2">Included In</p>
            <p className="text-white font-semibold">Managed Scale ($5,997/mo + $7,997 setup)</p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* HOW BILLING WORKS                          */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-20 border-b border-glass-border">
        <div className="max-w-[1000px] mx-auto px-8">
          <div className="flex items-center gap-3 mb-2">
            <CreditCard className="text-accent w-8 h-8" />
            <p className="text-sm uppercase tracking-[0.24em] text-accent">No Surprises</p>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
            How Billing Works
          </h2>
          <div className="space-y-6 text-text-muted text-lg leading-relaxed">
            <p>
              <strong className="text-white">One monthly price. Everything included.</strong> Your
              managed plan covers all AI features — phone receptionist, chat agent, automated
              follow-up, review management, content generation, workflow automation — all of it.
              You pay one flat rate. No usage meters. No &ldquo;you went over your limit&rdquo;
              emails. No surprise invoices.
            </p>
            <p>
              The only additional cost is <strong className="text-white">standard phone carrier charges</strong> —
              the same per-minute fee every phone system in the country charges for making and
              receiving calls. This is a few cents per minute and is standard across the industry.
              It&apos;s not our fee — it&apos;s the phone network&apos;s fee, passed through at cost.
            </p>
            <p>
              We keep a card on file for your monthly subscription. Your subscription renews
              on the same date each month. If you need to change your plan, upgrade, or add
              services, you contact us directly and we handle it. No self-serve confusion.
              No accidentally clicking the wrong button.
            </p>
          </div>
          <div className="mt-8 grid sm:grid-cols-3 gap-6">
            <div className="glass rounded-2xl p-6 text-center">
              <p className="font-display text-lg font-bold text-white mb-2">Monthly Fee</p>
              <p className="text-sm text-text-muted">Flat rate. All AI features included. No usage limits for normal business use.</p>
            </div>
            <div className="glass rounded-2xl p-6 text-center">
              <p className="font-display text-lg font-bold text-white mb-2">Phone Carrier</p>
              <p className="text-sm text-text-muted">Standard per-minute phone charges passed through at cost. A few cents per minute.</p>
            </div>
            <div className="glass rounded-2xl p-6 text-center">
              <p className="font-display text-lg font-bold text-white mb-2">No Surprises</p>
              <p className="text-sm text-text-muted">No overage fees. No hidden charges. One relationship. One bill.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* COST COMPARISON                            */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-20 border-b border-glass-border bg-gradient-to-br from-accent/8 to-black">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="mb-12">
            <p className="text-sm uppercase tracking-[0.24em] text-accent mb-3">The Real Numbers</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              What You&apos;d Pay Anywhere Else vs. What You Pay Us
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-glass-border">
                  <th className="py-4 pr-6 text-sm uppercase tracking-widest text-white/60 font-semibold">Feature</th>
                  <th className="py-4 pr-6 text-sm uppercase tracking-widest text-white/40 font-semibold">DIY / Traditional</th>
                  <th className="py-4 pr-6 text-sm uppercase tracking-widest text-white/40 font-semibold">Agency</th>
                  <th className="py-4 text-sm uppercase tracking-widest text-accent font-semibold">Adaptation Living</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { f: "24/7 AI Phone Answering", t: "$200–$500/mo (humans, limited hours)", a: "$10,000+ setup + $500/mo", u: "Included in Growth ($597/mo)" },
                  { f: "AI Chat (website + social)", t: "$300–$1,000/mo (humans, business hours)", a: "$3,000–$8,000 setup", u: "Included in Growth ($597/mo)" },
                  { f: "CRM + Automation", t: "$150–$500/mo (software only)", a: "$5,000–$15,000 setup", u: "Included in every plan" },
                  { f: "Review Management", t: "$100–$300/mo", a: "$2,000+ setup", u: "$0.01/review (included)" },
                  { f: "Content Generation", t: "$500–$2,000/mo (freelancer)", a: "$3,000–$5,000/mo (retainer)", u: "$0.09/1K words" },
                  { f: "Workflow Automation", t: "Manual (your time)", a: "$5,000–$20,000 setup", u: "$0.01/action + FREE builder" },
                  { f: "Custom Website", t: "$3,000–$10,000 (template)", a: "$10,000–$20,000", u: "Included in every plan" },
                  { f: "SEO Optimization", t: "$2,000–$5,000/mo", a: "$2,000–$5,000/mo", u: "Included every tier" },
                ].map((row) => (
                  <tr key={row.f} className="border-b border-white/5">
                    <td className="py-5 pr-6 font-semibold text-white/90 text-sm">{row.f}</td>
                    <td className="py-5 pr-6 text-white/40 text-sm">{row.t}</td>
                    <td className="py-5 pr-6 text-white/40 text-sm">{row.a}</td>
                    <td className="py-5 text-accent font-semibold text-sm">{row.u}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-white/40 text-sm mt-6">
            Add it up. The same stack agencies sell for $30,000–$50,000+ in setup and $3,000–$8,000/mo
            in management — we deliver from $297/mo self-serve, or done-for-you from $1,497/mo + $1,997 setup.
            Same features. Better technology. A fraction of the cost.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* DEDICATED BUSINESS NUMBER                  */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-20 border-b border-glass-border">
        <div className="max-w-[1200px] mx-auto px-8 text-center">
          <Phone className="text-accent w-12 h-12 mx-auto mb-6" />
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
            One Business Number. Everything Connected.
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto mb-8">
            We set you up with a dedicated business phone number. Put it on your website,
            signs, business cards, social media. When someone calls, your AI answers. When
            they text, your AI responds. When they book, it hits your calendar. One number.
            One system. No more personal cell for business. No more separate apps.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10">
            <div className="glass rounded-2xl p-6">
              <Shield className="text-accent w-8 h-8 mx-auto mb-3" />
              <p className="font-display font-bold mb-1">Your Number</p>
              <p className="text-text-muted text-sm">Dedicated line, separate from personal</p>
            </div>
            <div className="glass rounded-2xl p-6">
              <Clock className="text-accent w-8 h-8 mx-auto mb-3" />
              <p className="font-display font-bold mb-1">Always On</p>
              <p className="text-text-muted text-sm">AI answers 24/7/365</p>
            </div>
            <div className="glass rounded-2xl p-6">
              <PieChart className="text-accent w-8 h-8 mx-auto mb-3" />
              <p className="font-display font-bold mb-1">Full Tracking</p>
              <p className="text-text-muted text-sm">Every interaction in your dashboard</p>
            </div>
          </div>
          <p className="text-text-muted text-sm max-w-xl mx-auto">
            We can integrate any app you can think of into this system. If it has an API,
            it connects. If it works with Zapier, it connects. Your business runs on one
            platform, not fifteen.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* CTA                                        */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-24 text-center bg-gradient-to-br from-accent/10 to-bg-dark/90">
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Everything on This Page Is Running Right Now.
          </h2>
          <p className="max-w-xl mx-auto text-text-muted text-lg mb-4">
            The chat bubble on this site is our AI. The form that captures your info feeds
            our pipeline. This isn&apos;t a concept. This is the product. And it&apos;s what
            we build for your business.
          </p>
          <p className="max-w-xl mx-auto text-white/60 text-sm mb-4">
            Self-serve plans start at $297/mo with no setup fee. Done-for-you plans start at $1,497/mo + $1,997 setup. AI receptionist, chat
            agent, CRM, automation, SEO, and a custom website — all included.
          </p>
          <p className="max-w-xl mx-auto text-accent text-sm font-semibold mb-8">
            Two businesses? $350/mo each. Same everything.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="/services#self-serve" className="px-8 py-4 text-base uppercase tracking-widest font-semibold border-2 border-accent bg-accent text-white hover:bg-transparent hover:text-accent transition-all inline-block">
              Buy Self-Serve
            </a>
            <a href="/contact" className="px-8 py-4 text-base uppercase tracking-widest font-semibold border-2 border-white/70 bg-transparent text-white hover:bg-white hover:text-bg-dark transition-all inline-block">
              Book A Demo
            </a>
          </div>
          <div className="flex justify-center gap-8 mt-8 flex-wrap">
            <a href="tel:6232191237" className="flex items-center gap-2 text-lg font-semibold hover:text-accent transition-all">
              <Phone className="text-accent w-5 h-5" /> 623-219-1237
            </a>
            <a href="mailto:info@adaptationliving.com" className="flex items-center gap-2 text-lg font-semibold hover:text-accent transition-all">
              <Mail className="text-accent w-5 h-5" /> info@adaptationliving.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
