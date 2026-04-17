import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  MinusCircle,
  Sparkles,
} from "lucide-react";
import { competitors, getCompetitor } from "../../../../data/competitors";
import {
  BreadcrumbSchema,
  pageAlternates,
  pageOg,
  pageTwitter,
} from "../../../../lib/seo";
import { Breadcrumbs } from "../../../../components/breadcrumbs";

type Props = {
  params: Promise<{ locale: string; competitor: string }>;
};

export async function generateStaticParams() {
  const locales = ["en", "es"] as const;
  return locales.flatMap((locale) =>
    competitors.map((c) => ({ locale, competitor: c.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { competitor } = await params;
  const c = getCompetitor(competitor);
  if (!c) return {};

  const title = `Adaptation OS vs ${c.name} — Phoenix Small Business Platform`;
  const description = `${c.tagline} Real price comparison, feature-by-feature breakdown, and honest concessions. Adaptation OS: $349.90/mo flat, unlimited users, AI phone + chat included.`;

  return {
    title,
    description,
    keywords: [
      `Adaptation OS vs ${c.name}`,
      `${c.name} alternative`,
      `${c.name} vs CRM`,
      `${c.name} pricing`,
      `${c.name} comparison`,
      "Phoenix CRM",
      "all-in-one business platform",
    ],
    alternates: pageAlternates(`/vs/${c.slug}`),
    openGraph: pageOg(title, description, `/vs/${c.slug}`),
    twitter: pageTwitter(title, description),
  };
}

export default async function VersusPage({ params }: Props) {
  const { competitor } = await params;
  const c = getCompetitor(competitor);
  if (!c) notFound();

  const comparisonRows: Array<{
    feature: string;
    ours: string;
    theirs: string;
  }> = [
    { feature: "Starting Price", ours: "$349.90/mo flat", theirs: c.priceMonthly },
    { feature: "Users Included", ours: "Unlimited at every tier", theirs: "Per-seat billing" },
    { feature: "AI Phone Receptionist", ours: "Included", theirs: "Not offered" },
    { feature: "AI Chat Agent (SMS/Web/Social)", ours: "Included", theirs: "Add-on or not offered" },
    { feature: "Two-Way SMS Marketing", ours: "Included", theirs: "Extra cost" },
    { feature: "Website + Funnel Builder", ours: "Included", theirs: "Separate plan or tool" },
    { feature: "Calendar + Booking", ours: "Included", theirs: "Add-on or 3rd-party" },
    { feature: "Workflow Automation", ours: "Visual if/then, unlimited", theirs: "Tiered / Zapier required" },
    { feature: "Reputation + Review Management", ours: "Included", theirs: "Extra cost" },
    { feature: "70+ Directory Listings Sync", ours: "Included", theirs: "Yext-style add-on" },
    { feature: "Branded Mobile App", ours: "Included", theirs: "Not offered" },
    { feature: "White-Glove Setup (Phoenix team)", ours: "Included on Setup plans", theirs: "Paid consulting engagement" },
  ];

  return (
    <main id="main-content" className="navbar-offset">
      <Breadcrumbs
        items={[
          { name: "Comparisons", path: "/vs" },
          { name: `vs ${c.name}` },
        ]}
      />
      <BreadcrumbSchema
        items={[
          { name: "Comparisons", path: "/vs" },
          { name: `vs ${c.name}`, path: `/vs/${c.slug}` },
        ]}
      />

      {/* HERO */}
      <section className="section-dark-radial">
        <div className="mx-auto max-w-[1400px] px-6 pt-16 pb-12 sm:px-8 lg:pt-20 lg:pb-16">
          <p className="eyebrow">Head-to-Head Comparison</p>
          <h1 className="mt-3 h-display font-bold tracking-tight text-white text-[1.9rem] leading-[1.05] sm:text-[2.4rem] lg:text-[3rem] max-w-4xl">
            Adaptation OS{" "}
            <span className="bg-gradient-to-r from-accent via-[#E8C96A] to-accent bg-clip-text text-transparent">
              vs {c.name}
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#B8C4D4] sm:text-lg">
            {c.tagline.split("—")[1]?.trim() || c.tagline}
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#8899AA]">
            {c.positioningLine}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-sm border-2 border-accent bg-accent px-6 py-3 text-xs font-bold uppercase tracking-[0.22em] text-navy shadow-gold transition-all hover:bg-transparent hover:text-accent"
            >
              See Plans &amp; Pricing <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-sm border-2 border-white/70 bg-transparent px-6 py-3 text-xs font-bold uppercase tracking-[0.22em] text-white transition-all hover:bg-white hover:text-navy"
            >
              Book A Live Demo
            </a>
          </div>
        </div>
      </section>

      {/* AT-A-GLANCE COMPARISON TABLE */}
      <section className="section-cream py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">At A Glance</p>
            <h2 className="mt-3 h-display text-2xl font-bold text-[#0B1D3A] sm:text-3xl lg:text-[2.25rem]">
              Feature-by-feature, side by side.
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#4A5568]">
              Pulled from each platform's public pricing and feature pages. We
              kept it fair — where {c.name} is stronger, we say so in the next
              section.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-[20px] border border-[#0B1D3A]/10 bg-white shadow-soft">
            <div className="grid grid-cols-[1.2fr_1fr_1fr] items-center gap-3 border-b border-[#0B1D3A]/10 bg-[#0B1D3A] px-4 py-4 text-white sm:px-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#B8C4D4]">
                Feature
              </p>
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-accent">
                Adaptation OS
              </p>
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#B8C4D4]">
                {c.name}
              </p>
            </div>

            {comparisonRows.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-[1.2fr_1fr_1fr] items-center gap-3 border-b border-[#0B1D3A]/5 px-4 py-3 sm:px-6 ${
                  i % 2 === 0 ? "bg-white" : "bg-[#0B1D3A]/[0.015]"
                }`}
              >
                <p className="text-sm font-semibold text-[#0B1D3A]">
                  {row.feature}
                </p>
                <p className="flex items-start gap-2 text-sm text-[#0B1D3A]">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>{row.ours}</span>
                </p>
                <p className="text-sm text-[#4A5568]">{row.theirs}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-xs uppercase tracking-[0.24em] text-[#0B1D3A]/50">
            Pricing and features above pulled from public sources as of 2026.
          </p>
        </div>
      </section>

      {/* OUR EDGE */}
      <section className="section-dark py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="max-w-3xl">
            <div className="mb-3 flex items-center gap-3">
              <Sparkles className="h-6 w-6 text-accent" />
              <p className="eyebrow">Why Adaptation OS Wins</p>
            </div>
            <h2 className="h-display text-2xl font-bold text-white sm:text-3xl lg:text-[2.25rem]">
              Five reasons Phoenix businesses pick us over {c.name}.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {c.ourEdge.map((bullet, i) => (
              <div
                key={bullet}
                className="rounded-[20px] border border-white/10 bg-white/[0.03] p-6 transition-all hover:-translate-y-0.5 hover:border-accent/40"
              >
                <p className="font-display text-2xl font-bold text-accent">
                  0{i + 1}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#B8C4D4]">
                  {bullet}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THEIR EDGE — honest concessions */}
      <section className="section-cream py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="max-w-3xl">
            <div className="mb-3 flex items-center gap-3">
              <MinusCircle className="h-6 w-6 text-[#0B1D3A]/50" />
              <p className="eyebrow">Where {c.name} May Be Stronger</p>
            </div>
            <h2 className="h-display text-2xl font-bold text-[#0B1D3A] sm:text-3xl lg:text-[2.25rem]">
              We'll tell you when {c.name} is the better pick.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#4A5568]">
              Honest comparison beats hype. If any of these matter more to your
              business than everything above, {c.name} may be the right tool for
              you.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {c.theirEdge.map((bullet) => (
              <div
                key={bullet}
                className="rounded-[18px] border border-[#0B1D3A]/10 bg-white p-5 shadow-soft"
              >
                <p className="text-sm leading-relaxed text-[#4A5568]">
                  {bullet}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark-radial py-16 text-center sm:py-20">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
          <p className="eyebrow">Ready to Switch?</p>
          <h2 className="mt-3 h-display text-2xl font-bold text-white sm:text-3xl lg:text-[2.25rem]">
            Leave {c.name}. Keep your data. Go live in days.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#B8C4D4]">
            Our Phoenix team handles the {c.name} export, data mapping, and cutover.
            Most migrations complete in under a week with zero downtime.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="/intake"
              className="inline-flex items-center justify-center gap-2 rounded-sm border-2 border-accent bg-accent px-6 py-3 text-xs font-bold uppercase tracking-[0.22em] text-navy shadow-gold transition-all hover:bg-transparent hover:text-accent"
            >
              Start Migration <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-sm border-2 border-white/70 px-6 py-3 text-xs font-bold uppercase tracking-[0.22em] text-white transition-all hover:bg-white hover:text-navy"
            >
              Book Demo Call
            </a>
          </div>

          <div className="mt-12 border-t border-white/10 pt-8">
            <p className="text-[10px] uppercase tracking-[0.26em] text-[#8899AA]">
              More Comparisons
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {competitors
                .filter((x) => x.slug !== c.slug)
                .map((other) => (
                  <Link
                    key={other.slug}
                    href={`/vs/${other.slug}`}
                    className="rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs text-[#B8C4D4] transition-colors hover:border-accent hover:text-accent"
                  >
                    vs {other.name}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
