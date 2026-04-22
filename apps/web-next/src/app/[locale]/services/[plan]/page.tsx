import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
    CheckCircle2,
  Clock,
  Users,
  CreditCard,
  Sparkles,
} from "lucide-react";
import { plans, getPlan } from "../../../../data/plans";
import {
  BreadcrumbSchema,
  pageAlternates,
  pageOg,
  pageTwitter,
} from "../../../../lib/seo";
import { Breadcrumbs } from "../../../../components/breadcrumbs";

type Props = {
  params: Promise<{ locale: string; plan: string }>;
};

export async function generateStaticParams() {
  const locales = ["en", "es"] as const;
  return locales.flatMap((locale) =>
    plans.map((p) => ({ locale, plan: p.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { plan } = await params;
  const p = getPlan(plan);
  if (!p) return {};

  const priceLabel = p.setupFee
    ? `${p.setupFee} setup + ${p.priceMonthly}/mo`
    : `${p.priceMonthly}/mo`;

  const title = `${p.name} — ${priceLabel} | Adaptation Living Platform Pricing | Phoenix, AZ`;
  const description = `${p.description} ${p.users}. ${p.credits}. ${p.support}.`;

  return {
    title,
    description,
    keywords: [
      `${p.name}`,
      `the Adaptation Living Platform ${p.tier}`,
      `${p.tier} CRM plan Phoenix`,
      `${p.kind === "setup" ? "done-for-you CRM setup" : "self-serve CRM"}`,
      "AI automation Phoenix",
      "all-in-one business platform",
    ],
    alternates: pageAlternates(`/services/${p.slug}`),
    openGraph: pageOg(title, description, `/services/${p.slug}`),
    twitter: pageTwitter(title, description),
  };
}

export default async function PlanPage({ params }: Props) {
  const { plan } = await params;
  const p = getPlan(plan);
  if (!p) notFound();

  const sibling = getPlan(p.siblingSlug);

  return (
    <main id="main-content" className="navbar-offset">
      <Breadcrumbs
        items={[
          { name: "Pricing", path: "/services" },
          { name: p.name },
        ]}
      />
      <BreadcrumbSchema
        items={[
          { name: "Pricing", path: "/services" },
          { name: p.name, path: `/services/${p.slug}` },
        ]}
      />

      {/* HERO */}
      <section className="section-dark-radial">
        <div className="mx-auto max-w-[1400px] px-6 pt-16 pb-14 sm:px-8 lg:pt-20 lg:pb-16">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <div className="mb-5 flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-accent/50 bg-accent/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
                  {p.kind === "setup" ? "Done-For-You" : "Self-Serve · Instant Access"}
                </span>
                <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-white">
                  {p.tier} Tier
                </span>
                {p.highlighted && (
                  <span className="rounded-full border border-accent bg-accent px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.28em] text-white">
                    Most Popular
                  </span>
                )}
              </div>

              <h1 className="h-display font-bold tracking-tight text-white">
                {p.name}
                <span className="block text-accent">
                  {p.setupFee
                    ? `${p.setupFee} setup + ${p.priceMonthly}/mo`
                    : `${p.priceMonthly}/mo`}
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-[#94A3B8] sm:text-lg">
                {p.description}
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={p.primaryCta.href}
                  className="inline-flex items-center justify-center gap-2 rounded-sm border-2 border-accent bg-accent px-6 py-3 text-xs font-bold uppercase tracking-[0.22em] text-white shadow-[0_0_14px_rgba(37,99,235,0.35)] transition-all hover:bg-[#1D4ED8]"
                >
                  {p.primaryCta.label}
                </a>
                <a
                  href={p.secondaryCta.href}
                  className="inline-flex items-center justify-center gap-2 rounded-sm border-2 border-white/70 bg-transparent px-6 py-3 text-xs font-bold uppercase tracking-[0.22em] text-white transition-all hover:bg-white hover:text-[#0F172A]"
                >
                  {p.secondaryCta.label}
                </a>
              </div>
            </div>

            {/* At-a-glance card */}
            <div className="rounded-[20px] border-2 border-accent/40 bg-white/[0.04] p-6 shadow-[0_20px_60px_-10px_rgba(37,99,235,0.35)] backdrop-blur-sm">
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-accent">
                At A Glance
              </p>
              <dl className="mt-4 space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <dt className="text-[11px] uppercase tracking-[0.24em] text-[#94A3B8]">
                      {p.kind === "setup" ? "Time To Launch" : "Time To First Login"}
                    </dt>
                    <dd className="text-[15px] font-semibold text-white">
                      {p.kind === "setup" ? "2–3 weeks" : "Under 5 minutes"}
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <dt className="text-[11px] uppercase tracking-[0.24em] text-[#94A3B8]">
                      Users
                    </dt>
                    <dd className="text-[15px] font-semibold text-white">
                      {p.users} · $50/mo per additional
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CreditCard className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <dt className="text-[11px] uppercase tracking-[0.24em] text-[#94A3B8]">
                      Credits At Signup
                    </dt>
                    <dd className="text-[15px] font-semibold text-white">
                      {p.credits}
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <dt className="text-[11px] uppercase tracking-[0.24em] text-[#94A3B8]">
                      Support
                    </dt>
                    <dd className="text-[15px] font-semibold text-white">
                      {p.support}
                    </dd>
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* IDEAL FOR */}
      <section className="section-cream border-t border-[#0F172A]/5 py-14 sm:py-16">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
          <p className="eyebrow text-center">Ideal For</p>
          <h2 className="mt-3 text-center font-display font-bold text-[#0F172A]">
            Is {p.name} the right fit for you?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-[15px] leading-relaxed text-[#475569]">
            If two or more of these describe you, this is your plan. If
            not, check the other tiers below or book a demo and we'll guide you.
          </p>

          <ul className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-2">
            {p.idealFor.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-[16px] border border-[#0F172A]/10 bg-white p-4 shadow-soft"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span className="text-[15px] text-[#0F172A]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="section-dark py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">What's In {p.name}</p>
            <h2 className="mt-3 font-display font-bold text-white">
              Every capability you see below, included.
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-[15px] leading-relaxed text-[#94A3B8]">
              Tiers differentiate on user count, setup depth, and support level
              — not feature access. {p.name} unlocks the full platform.
            </p>
          </div>

          <ul className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-2">
            {p.includes.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-[16px] border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-accent/40"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span className="text-[15px] text-white">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* WHAT HAPPENS — timeline */}
      <section className="section-cream border-t border-[#0F172A]/5 py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">What Happens After You {p.kind === "setup" ? "Book" : "Sign Up"}</p>
            <h2 className="mt-3 font-display font-bold text-[#0F172A]">
              No mystery. Here's the exact sequence.
            </h2>
          </div>

          <ol className="mx-auto mt-10 max-w-3xl space-y-4">
            {p.whatHappens.map((step, i) => (
              <li
                key={step.when}
                className="relative flex gap-5 rounded-[18px] border border-[#0F172A]/10 bg-white p-5 shadow-soft"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-white font-display font-bold text-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-display text-[11px] font-bold uppercase tracking-[0.26em] text-accent">
                    {step.when}
                  </p>
                  <p className="mt-1 text-[15px] leading-relaxed text-[#0F172A]">
                    {step.what}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SIBLING + OTHER TIERS */}
      <section className="section-cream border-t border-[#0F172A]/10 py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Not Quite Right?</p>
            <h2 className="mt-3 font-display font-bold text-[#0F172A]">
              Compare with our other plans.
            </h2>
          </div>

          {sibling && (
            <div className="mx-auto mt-10 max-w-3xl rounded-[20px] border-2 border-accent/40 bg-white p-6 shadow-lift sm:p-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-accent">
                Same Tier · {p.kind === "setup" ? "Run It Yourself" : "We Build It For You"}
              </p>
              <h3 className="mt-2 font-display text-[22px] font-bold text-[#0F172A]">
                {sibling.name}
              </h3>
              <p className="mt-1 font-mono text-[13px] text-[#475569]">
                {sibling.setupFee
                  ? `${sibling.setupFee} setup + ${sibling.priceMonthly}/mo`
                  : `${sibling.priceMonthly}/mo`}
              </p>
              <p className="mt-3 text-[14px] leading-relaxed text-[#475569]">
                {sibling.description}
              </p>
              <Link
                href={`/services/${sibling.siblingSlug === p.slug ? sibling.slug : sibling.slug}`}
                className="mt-5 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-accent hover:underline"
              >
                Compare {sibling.name}
              </Link>
            </div>
          )}

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {plans
              .filter((other) => other.slug !== p.slug && other.slug !== p.siblingSlug)
              .map((other) => (
                <Link
                  key={other.slug}
                  href={`/services/${other.slug}`}
                  className="group rounded-[16px] border border-[#0F172A]/10 bg-white p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-lift"
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-[#0F172A]/50">
                    {other.kind === "setup" ? "Done-For-You" : "Self-Serve"}
                  </p>
                  <h3 className="mt-1 font-display text-[17px] font-bold text-[#0F172A]">
                    {other.name}
                  </h3>
                  <p className="mt-1 font-mono text-[13px] text-[#475569]">
                    {other.setupFee
                      ? `${other.setupFee} + ${other.priceMonthly}/mo`
                      : `${other.priceMonthly}/mo`}
                  </p>
                  <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.22em] text-accent transition-colors group-hover:text-[#1D4ED8]">
                    View plan →
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-dark-radial py-16 text-center sm:py-20">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
          <p className="eyebrow">Ready?</p>
          <h2 className="mt-3 font-display font-bold text-white">
            Get started on {p.name}.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-[#94A3B8]">
            {p.kind === "setup"
              ? "Book a 60-minute kickoff call. We'll map your current stack, confirm scope, and start building within 3 business days."
              : "Sign up in under 5 minutes. Stripe checkout, instant platform access, in-app onboarding from minute one."}
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href={p.primaryCta.href}
              className="inline-flex items-center justify-center gap-2 rounded-sm border-2 border-accent bg-accent px-7 py-3.5 text-xs font-bold uppercase tracking-[0.22em] text-white shadow-[0_0_14px_rgba(37,99,235,0.35)] transition-all hover:bg-[#1D4ED8]"
            >
              {p.primaryCta.label}
            </a>
            <a
              href={p.secondaryCta.href}
              className="inline-flex items-center justify-center gap-2 rounded-sm border-2 border-white/70 px-7 py-3.5 text-xs font-bold uppercase tracking-[0.22em] text-white transition-all hover:bg-white hover:text-[#0F172A]"
            >
              {p.secondaryCta.label}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
