import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import { GhlEmbed } from "../../../components/ghl-embed";
import {
  BreadcrumbSchema,
  pageAlternates,
  pageOg,
  pageTwitter,
} from "../../../lib/seo";
import { Breadcrumbs } from "../../../components/breadcrumbs";

const title = "Start Your Project";
const description =
  "Start your project with Adaptation Living LLC. AI automation, CRM setup, web development, and workflow automation for small businesses in Phoenix, AZ. Free discovery call.";

export const metadata: Metadata = {
  title,
  description,
  alternates: pageAlternates("/intake"),
  openGraph: pageOg(title, description, "/intake"),
  twitter: pageTwitter(title, description),
};

const PLAN_LABELS: Record<string, string> = {
  "managed-starter": "Managed Starter ($1,497/mo + $1,997 setup)",
  "managed-growth": "Managed Growth ($2,997/mo + $3,997 setup)",
  "managed-scale": "Managed Scale ($5,997/mo + $7,997 setup)",
};

export default async function IntakePage({
  searchParams,
}: {
  searchParams: Promise<{ plan?: string }>;
}) {
  const formId = process.env.NEXT_PUBLIC_GHL_FORM_ID;
  const { plan } = await searchParams;
  const planLabel = plan ? PLAN_LABELS[plan] : undefined;

  return (
    <main id="main-content" className="navbar-offset">
      <Breadcrumbs items={[{ name: "Start Your Project" }]} />
      <BreadcrumbSchema items={[{ name: "Start Your Project", path: "/intake" }]} />
      {/* Hero */}
      <section className="section-cream max-w-[900px] mx-auto px-8 pt-16 pb-8 text-center">
        <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4 text-[#0B1D3A]">
          Start Your Project
        </h1>
        <p className="text-text-muted text-lg max-w-2xl mx-auto mb-2">
          Tell us what you are building. We respond within hours — not days.
          No sales funnels, no intake gates. Just a conversation.
        </p>
      </section>

      {/* Plan acknowledgment banner */}
      {planLabel && (
        <section className="section-cream max-w-[700px] mx-auto px-8 pb-6">
          <div className="rounded-lg border border-accent/30 bg-accent/10 p-6 text-center">
            <p className="text-base sm:text-lg leading-relaxed">
              You&apos;re booking a call for the{" "}
              <strong className="text-accent">{planLabel}</strong> plan.
              Tell us about your business and we&apos;ll prepare a tailored
              walk-through.
            </p>
          </div>
        </section>
      )}

      {/* Form */}
      <section className="section-cream max-w-[700px] mx-auto px-8 pb-16">
        {formId ? (
          <div className="glass rounded-lg p-6">
            <GhlEmbed formId={formId} height="700px" title="Start your project with Adaptation Living" />
          </div>
        ) : (
          <div className="glass rounded-lg p-10 text-center">
            <p className="text-text-muted mb-6">
              Our intake form is being configured. In the meantime, reach out
              directly:
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a
                href="tel:6232191237"
                className="flex items-center justify-center gap-2 text-lg font-semibold hover:text-accent transition-all"
              >
                <Phone className="text-accent w-5 h-5" />
                623-219-1237
              </a>
              <a
                href="mailto:info@adaptationliving.com"
                className="flex items-center justify-center gap-2 text-lg font-semibold hover:text-accent transition-all"
              >
                <Mail className="text-accent w-5 h-5" />
                info@adaptationliving.com
              </a>
            </div>
          </div>
        )}
      </section>

      {/* Fallback contact */}
      <section className="section-cream max-w-[700px] mx-auto px-8 pb-24 text-center">
        <p className="text-text-muted text-sm mb-4">
          Prefer to talk? Call or email us directly.
        </p>
        <div className="flex justify-center gap-8 flex-wrap">
          <a
            href="tel:6232191237"
            className="flex items-center gap-2 font-semibold hover:text-accent transition-all"
          >
            <Phone className="text-accent w-4 h-4" />
            623-219-1237
          </a>
          <a
            href="mailto:info@adaptationliving.com"
            className="flex items-center gap-2 font-semibold hover:text-accent transition-all"
          >
            <Mail className="text-accent w-4 h-4" />
            info@adaptationliving.com
          </a>
        </div>
      </section>
    </main>
  );
}
