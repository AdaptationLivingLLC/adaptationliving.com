import type { Metadata } from "next";
import Link from "next/link";
import { competitors } from "../../../data/competitors";
import {
  BreadcrumbSchema,
  pageAlternates,
  pageOg,
  pageTwitter,
} from "../../../lib/seo";
import { Breadcrumbs } from "../../../components/breadcrumbs";

const title = "the Adaptation Living platform vs the Competition — Honest Comparisons";
const description =
  "the Adaptation Living platform compared side-by-side with HubSpot, Salesforce, ActiveCampaign, ClickFunnels, Kartra, Klaviyo, Keap, Zoho, Vendasta, SharpSpring, and Linktree. Real prices, honest concessions.";

export const metadata: Metadata = {
  title,
  description,
  alternates: pageAlternates("/vs"),
  openGraph: pageOg(title, description, "/vs"),
  twitter: pageTwitter(title, description),
};

export default function VsIndex() {
  return (
    <main id="main-content" className="navbar-offset">
      <Breadcrumbs items={[{ name: "Comparisons" }]} />
      <BreadcrumbSchema items={[{ name: "Comparisons", path: "/vs" }]} />

      <section className="section-dark-radial">
        <div className="mx-auto max-w-[1400px] px-6 pt-16 pb-12 sm:px-8 lg:pt-20 lg:pb-16">
          <p className="eyebrow">the Adaptation Living platform Vs</p>
          <h1 className="mt-3 h-display font-bold tracking-tight text-white text-[1.9rem] leading-[1.05] sm:text-[2.4rem] lg:text-[3rem] max-w-4xl">
            How the Adaptation Living platform{" "}
            <span className="bg-gradient-to-r from-accent via-[#3B82F6] to-accent bg-clip-text text-transparent">
              stacks up
            </span>{" "}
            against every major platform.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#94A3B8] sm:text-lg">
            Eleven head-to-head comparisons — real list prices, feature-by-feature
            tables, and honest callouts where the other tool is the better pick.
            No marketing hype.
          </p>
        </div>
      </section>

      <section className="section-cream py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {competitors.map((c) => (
              <Link
                key={c.slug}
                href={`/vs/${c.slug}`}
                className="group flex flex-col justify-between rounded-[20px] border border-[#0F172A]/10 bg-white p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-lift"
              >
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-accent">
                    vs
                  </p>
                  <h2 className="mt-2 font-display text-xl font-bold text-[#0F172A]">
                    {c.name}
                  </h2>
                  <p className="mt-2 text-xs font-mono text-[#0F172A]/60">
                    {c.priceMonthly}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-[#475569]">
                    {c.positioningLine}
                  </p>
                </div>
                <p className="mt-6 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#0F172A] transition-colors group-hover:text-accent">
                  Read the full comparison{" "}

                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
