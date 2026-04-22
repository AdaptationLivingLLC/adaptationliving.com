import type { Metadata } from "next";
import { CheckCircle2, Play, Clock, ShieldCheck } from "lucide-react";
import {
  BreadcrumbSchema,
  pageAlternates,
  pageOg,
  pageTwitter,
} from "../../../lib/seo";
import { Breadcrumbs } from "../../../components/breadcrumbs";
import { DemoForm } from "../../../components/demo-form";

const title =
  "See the Adaptation Living platform in Action — Live 30-Minute Demo | Phoenix, AZ";
const description =
  "Book a 30-minute live walkthrough of the Adaptation Living platform. See the AI phone receptionist answer calls, the AI chat agent respond across channels, the pipeline close deals, and the workflow builder automate your day. No credit card, no obligation.";

export const metadata: Metadata = {
  title,
  description,
  alternates: pageAlternates("/demo"),
  openGraph: pageOg(title, description, "/demo"),
  twitter: pageTwitter(title, description),
  robots: { index: true, follow: true },
};

const demoScreenshots = [
  {
    src: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/knES3eSWYIsc5YSZ3YLl/media/698b31d81fe16685264aa019.png",
    label: "CRM Dashboard",
    desc: "Smart lists, custom fields, pipeline at a glance.",
  },
  {
    src: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/knES3eSWYIsc5YSZ3YLl/media/69a1cf6a6e50d66b2220b4c7.gif",
    label: "Workflow Builder",
    desc: "Drag-and-drop automation with conditional branching.",
  },
  {
    src: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/knES3eSWYIsc5YSZ3YLl/media/69a1cfa0f241b84c64bd4dde.gif",
    label: "Sales Pipeline",
    desc: "Visual kanban from first touch to closed-won.",
  },
  {
    src: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/knES3eSWYIsc5YSZ3YLl/media/69a1cfb2b617a7acb6c47b24.gif",
    label: "Reputation Management",
    desc: "Review requests, AI replies, monitoring dashboard.",
  },
  {
    src: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/knES3eSWYIsc5YSZ3YLl/media/69a1cfefc4df651ff7a31c0c.gif",
    label: "Campaigns & Broadcasts",
    desc: "Email + SMS sequences, database reactivation.",
  },
  {
    src: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/knES3eSWYIsc5YSZ3YLl/media/698f3477772de9266bd24254.png",
    label: "Feature Overview",
    desc: "Every capability, one dashboard, one login.",
  },
];

const demoAgenda = [
  "Your first AI phone call — live, real voice, real booking",
  "AI chat agent replying across SMS, web, and Instagram DMs",
  "CRM import preview with YOUR contact list (if you bring a CSV)",
  "Workflow build: lead → SMS → email → booking → task",
  "Reputation automation: review request flow end-to-end",
  "Pricing walkthrough + plan recommendation for your business",
  "Q&A — honest answers, including when we're NOT the fit",
];

const faqs = [
  {
    q: "How long is the demo?",
    a: "30 minutes. We respect your time. If we need more, we'll book a follow-up — never a surprise extension.",
  },
  {
    q: "Who shows up from your side?",
    a: "Brandon Bible, founder, or a senior implementation engineer — not a sales rep with a script. You get someone who actually builds these systems every day.",
  },
  {
    q: "Do I need to prepare anything?",
    a: "Nothing required. If you want a custom preview, bring: (1) a CSV of contacts you'd import, (2) one automation you wish you had, (3) your current tool stack and monthly spend. We'll show the exact replacement.",
  },
  {
    q: "Is there a hard sell at the end?",
    a: "No. You'll get plan pricing and a recommendation. If you want to sign up, we'll start intake. If you want to think about it, we'll send a summary and leave you alone until you reach out.",
  },
  {
    q: "What happens after the demo?",
    a: "For Self-Serve: you get a link to your checkout + the exact snapshot we'd load. For Done-For-You: we schedule a 60-minute onboarding kickoff and start migration within 3 business days.",
  },
  {
    q: "Can I record the demo?",
    a: "Yes. We'll send you a recording + summary within 24 hours regardless. Share it internally with your team.",
  },
];

export default function DemoPage() {
  return (
    <main id="main-content" className="navbar-offset">
      <Breadcrumbs items={[{ name: "Live Demo" }]} />
      <BreadcrumbSchema items={[{ name: "Live Demo", path: "/demo" }]} />

      {/* HERO */}
      <section className="section-dark-radial">
        <div className="mx-auto max-w-[1400px] px-6 pt-16 pb-16 sm:px-8 lg:pt-20 lg:pb-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            {/* LEFT: Copy */}
            <div>
              <div className="mb-5 flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-accent/50 bg-accent/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
                  <Clock className="mr-1.5 inline h-3 w-3" /> 30 Minutes
                </span>
                <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-white">
                  Live · With A Real Engineer
                </span>
                <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-white">
                  No Credit Card
                </span>
              </div>

              <h1 className="h-display font-bold tracking-tight text-white">
                See the Adaptation Living platform <span className="bg-gradient-to-r from-accent via-[#3B82F6] to-accent bg-clip-text text-transparent">Run Your Business</span> in 30 Minutes.
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-[#94A3B8] sm:text-lg">
                Book a live walkthrough. We'll show your business running on the
                platform — AI phone answering real calls, AI chat replying on
                SMS, a pipeline closing deals, and workflows automating the
                busywork. If the Adaptation Living platform isn't the right fit, we'll say so.
              </p>

              <ul className="mt-7 space-y-3">
                {[
                  "Hear an AI phone agent handle a live booking call",
                  "Watch your current stack get replaced with one login",
                  "Get a custom pricing recommendation for your business",
                  "Walk away with a recording + written summary",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3 text-[15px] text-white">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-4 text-[11px] uppercase tracking-[0.24em] text-[#94A3B8]">
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-accent" /> Veteran-Owned · VOSB
                </span>
                <span>·</span>
                <span>Phoenix, AZ</span>
                <span>·</span>
                <span>SAM.gov Registered</span>
              </div>
            </div>

            {/* RIGHT: Booking form card */}
            <div className="relative">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-[2px] rounded-[24px] bg-[conic-gradient(from_120deg_at_50%_50%,rgba(37,99,235,0.7),rgba(37,99,235,0.35),rgba(37,99,235,0.7))] opacity-60 blur-md"
              />
              <div className="relative rounded-[20px] border border-accent/50 bg-white shadow-[0_30px_80px_-20px_rgba(37,99,235,0.55)]">
                <div className="flex items-center gap-2 border-b border-[#0F172A]/10 px-6 py-3">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#0F172A]/70">
                    Book Your Live Demo
                  </p>
                </div>
                <div className="px-6 pt-5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-accent">
                    Step 1 of 1 · 60 seconds
                  </p>
                  <h2 className="mt-1 font-display font-bold text-[#0F172A]">
                    Pick a time that works.
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                    Fill this and we'll email you a calendar link within 10
                    minutes — Mon–Fri 8a-6p MST, Saturdays by appointment.
                  </p>
                </div>
                <DemoForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU'LL SEE */}
      <section className="section-cream border-t border-[#0F172A]/5 py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">What You'll See</p>
            <h2 className="mt-3 font-display font-bold text-[#0F172A]">
              Six live features. Your business, running.
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-[15px] leading-relaxed text-[#475569]">
              Every screen below is live during your demo. Not a marketing
              video — the actual product with your data walked through by
              someone who builds it every day.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {demoScreenshots.map((s) => (
              <div
                key={s.label}
                className="group overflow-hidden rounded-[18px] border border-[#0F172A]/10 bg-white shadow-soft transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-lift"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#F8FAFC]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.src}
                    alt={`${s.label} — the Adaptation Living platform live preview`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="absolute bottom-3 right-3 rounded-full bg-[#0F172A]/85 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-white backdrop-blur-sm">
                    <Play className="mr-1 inline h-3 w-3 text-accent" /> Live
                  </div>
                </div>
                <div className="p-5">
                  <p className="font-display text-[17px] font-bold text-[#0F172A]">
                    {s.label}
                  </p>
                  <p className="mt-1 text-[14px] leading-relaxed text-[#475569]">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AGENDA */}
      <section className="section-dark py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="eyebrow">The 30-Minute Agenda</p>
              <h2 className="mt-3 font-display font-bold text-white">
                Every minute earns its place.
              </h2>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[#94A3B8]">
                No slide deck. No filler. No "let me tell you about our
                company." We walk the product. You ask the hard questions.
                You leave with clarity on whether this fits your business.
              </p>
            </div>
            <ol className="space-y-3">
              {demoAgenda.map((item, i) => (
                <li
                  key={item}
                  className="flex items-start gap-4 rounded-[16px] border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-accent/40"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent/60 bg-accent/10 font-display text-sm font-bold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="pt-1.5 text-[15px] leading-relaxed text-white">
                    {item}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* HOW IT GOES */}
      <section className="section-cream border-t border-[#0F172A]/5 py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">How It Goes</p>
            <h2 className="mt-3 font-display font-bold text-[#0F172A]">
              Book. Meet. Decide. No games.
            </h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              { n: "01", t: "Book in 60 seconds", d: "Form above. We reply with a calendar link inside 10 minutes during business hours." },
              { n: "02", t: "30-minute live walkthrough", d: "Zoom, Google Meet, or phone. Camera is optional. Your team attends if useful." },
              { n: "03", t: "Decide on your timeline", d: "Sign up same day (Self-Serve), schedule onboarding (Done-For-You), or walk away with info — zero pressure." },
            ].map((step) => (
              <div
                key={step.n}
                className="rounded-[20px] border border-[#0F172A]/10 bg-white p-7 shadow-soft"
              >
                <p className="font-display text-[40px] font-bold leading-none text-accent">
                  {step.n}
                </p>
                <p className="mt-4 font-display text-[18px] font-bold text-[#0F172A]">
                  {step.t}
                </p>
                <p className="mt-2 text-[14px] leading-relaxed text-[#475569]">
                  {step.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-cream border-t border-[#0F172A]/10 py-16 sm:py-20">
        <div className="mx-auto max-w-[900px] px-6 sm:px-8">
          <p className="eyebrow text-center">Frequently Asked</p>
          <h2 className="mt-3 text-center font-display font-bold text-[#0F172A]">
            Demo Questions, Answered Straight.
          </h2>

          <div className="mt-10 space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-[16px] border border-[#0F172A]/10 bg-white p-5 shadow-soft transition-all open:border-accent/40 open:shadow-lift"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <span className="font-display text-[16px] font-bold text-[#0F172A]">
                    {f.q}
                  </span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#0F172A]/15 text-[#0F172A] transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-[15px] leading-relaxed text-[#475569]">
                  {f.a}
                </p>
              </details>
            ))}
          </div>

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
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-dark-radial py-16 text-center sm:py-20">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
          <p className="eyebrow">Ready When You Are</p>
          <h2 className="mt-3 font-display font-bold text-white">
            Thirty minutes. Real engineer. Honest answer.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-[#94A3B8] sm:text-base">
            Book above, or just call us: <a href="tel:6232191237" className="text-accent font-semibold hover:underline">623-219-1237</a>.
            We're in Uptown Phoenix — walk-ins welcome at 3030 N Central Ave,
            Suite 507.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="#top"
              className="inline-flex items-center justify-center gap-2 rounded-sm border-2 border-accent bg-accent px-7 py-3.5 text-xs font-bold uppercase tracking-[0.22em] text-white shadow-[0_0_14px_rgba(37,99,235,0.35)] transition-all hover:bg-[#1D4ED8]"
            >
              Book My Demo
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-sm border-2 border-white/70 px-7 py-3.5 text-xs font-bold uppercase tracking-[0.22em] text-white transition-all hover:bg-white hover:text-[#0F172A]"
            >
              See Pricing First
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
