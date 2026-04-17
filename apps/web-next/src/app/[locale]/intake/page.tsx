import type { Metadata } from "next";
import { CheckCircle2, Mail, Phone } from "lucide-react";
import { GhlEmbed } from "../../../components/ghl-embed";
import {
  BreadcrumbSchema,
  pageAlternates,
  pageOg,
  pageTwitter,
} from "../../../lib/seo";
import { Breadcrumbs } from "../../../components/breadcrumbs";

const title = "Start Your Adaptation OS Setup — Phoenix, AZ";
const description =
  "Book your Adaptation OS setup call with Adaptation Living LLC. AI phone receptionist, AI chat agent, CRM, workflow automation, and website — deployed by a veteran-owned team in Phoenix, AZ in 2–3 weeks.";

export const metadata: Metadata = {
  title,
  description,
  alternates: pageAlternates("/intake"),
  openGraph: pageOg(title, description, "/intake"),
  twitter: pageTwitter(title, description),
};

const PLAN_LABELS: Record<string, string> = {
  "starter-setup": "Starter Setup ($1,500 + $194.90/mo · up to 3 users)",
  "growth-setup": "Growth Setup ($2,500 + $394.90/mo · up to 5 users)",
  "scale-setup": "Scale Setup ($5,000 + $694.90/mo · up to 10 users)",
  "self-serve": "Self-Serve (from $349.90/mo · instant access · no setup fee)",
  "starter-diy": "Starter DIY ($349.90/mo · up to 3 users)",
  "growth-diy": "Growth DIY ($597.90/mo · up to 5 users)",
  "scale-diy": "Scale DIY ($997.90/mo · up to 10 users)",
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Start Your Adaptation OS Setup",
            description,
            url: "https://adaptationliving.com/intake",
            provider: {
              "@type": "Organization",
              name: "Adaptation Living LLC",
              telephone: "+1-623-219-1237",
              email: "info@adaptationliving.com",
            },
          }),
        }}
      />

      {/* HERO */}
      <section className="section-cream">
        <div className="max-w-[900px] mx-auto px-6 sm:px-8 pt-10 pb-6 text-center">
          <p className="eyebrow">Intake · Adaptation OS Setup</p>
          <h1 className="mt-3 h-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A]">
            Start Your Adaptation OS Setup.
          </h1>
          <p className="mt-4 text-base text-[#475569] max-w-2xl mx-auto leading-relaxed sm:text-lg">
            Tell us about your business and we'll respond within hours — not
            days. A senior team member handles every intake personally. No
            chatbots. No sales funnels. Just a real conversation about what
            you're building.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#0F172A]/70">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent" /> Hours-not-days response
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent" /> Veteran-owned · Phoenix, AZ
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent" /> 2–3 week launch
            </span>
          </div>
        </div>
      </section>

      {planLabel && (
        <section className="section-cream">
          <div className="max-w-[700px] mx-auto px-6 sm:px-8 pb-6">
            <div className="rounded-[18px] border-2 border-accent/40 bg-accent/10 p-6 text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-accent mb-2">
                Selected Plan
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-[#0F172A]">
                You're booking for{" "}
                <strong className="text-[#0F172A]">{planLabel}</strong>. Tell us
                about your business and we'll prepare a tailored walk-through.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* FORM */}
      <section className="section-cream">
        <div className="max-w-[700px] mx-auto px-6 sm:px-8 pb-12">
          {formId ? (
            <div className="rounded-[20px] border border-[#0F172A]/10 bg-white shadow-lift p-5 sm:p-6">
              <GhlEmbed
                formId={formId}
                height="700px"
                title="Start your project with Adaptation Living"
              />
            </div>
          ) : (
            <div className="rounded-[20px] border border-[#0F172A]/10 bg-white shadow-soft p-8 sm:p-10 text-center">
              <p className="text-[#475569] mb-6 leading-relaxed">
                Our intake form is being configured in GHL. Reach out directly and
                we'll start your setup the same day:
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <a
                  href="tel:6232191237"
                  className="flex items-center justify-center gap-2 text-lg font-semibold text-[#0F172A] hover:text-accent transition-all"
                >
                  <Phone className="text-accent w-5 h-5" />
                  623-219-1237
                </a>
                <a
                  href="mailto:info@adaptationliving.com"
                  className="flex items-center justify-center gap-2 text-lg font-semibold text-[#0F172A] hover:text-accent transition-all"
                >
                  <Mail className="text-accent w-5 h-5" />
                  info@adaptationliving.com
                </a>
              </div>
              <a
                href="/services"
                className="mt-8 inline-flex items-center gap-2 rounded-sm border-2 border-accent bg-accent px-6 py-3 text-xs font-bold uppercase tracking-[0.22em] text-navy shadow-gold hover:bg-transparent hover:text-accent transition-all"
              >
                See Plans &amp; Pricing
              </a>
            </div>
          )}
        </div>
      </section>

      {/* FALLBACK */}
      <section className="section-cream border-t border-[#0F172A]/10 py-16 text-center">
        <div className="max-w-[700px] mx-auto px-6 sm:px-8">
          <p className="text-sm text-[#475569] mb-4">
            Prefer to talk? Call or email us directly.
          </p>
          <div className="flex justify-center gap-8 flex-wrap">
            <a
              href="tel:6232191237"
              className="flex items-center gap-2 font-semibold text-[#0F172A] hover:text-accent transition-all"
            >
              <Phone className="text-accent w-4 h-4" />
              623-219-1237
            </a>
            <a
              href="mailto:info@adaptationliving.com"
              className="flex items-center gap-2 font-semibold text-[#0F172A] hover:text-accent transition-all"
            >
              <Mail className="text-accent w-4 h-4" />
              info@adaptationliving.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
