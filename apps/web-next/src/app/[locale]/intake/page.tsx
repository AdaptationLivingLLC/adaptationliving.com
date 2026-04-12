import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import { GhlEmbed } from "../../../components/ghl-embed";
import {
  BreadcrumbSchema,
  pageAlternates,
  pageOg,
  pageTwitter,
} from "../../../lib/seo";

const title = "Start Your Project — AI Automation & Web Development Phoenix AZ";
const description =
  "Tell us about your project. AI automation, custom web development, GoHighLevel CRM setup, and more. Veteran-owned studio in Phoenix, AZ. Free discovery call.";

export const metadata: Metadata = {
  title,
  description,
  alternates: pageAlternates("/intake"),
  openGraph: pageOg(title, description, "/intake"),
  twitter: pageTwitter(title, description),
};

export default function IntakePage() {
  const formId = process.env.NEXT_PUBLIC_GHL_FORM_ID;

  return (
    <main className="navbar-offset">
      <BreadcrumbSchema items={[{ name: "Start Your Project", path: "/intake" }]} />
      {/* Hero */}
      <section className="max-w-[900px] mx-auto px-8 pt-16 pb-8 text-center">
        <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
          Start Your Project
        </h1>
        <p className="text-text-muted text-lg max-w-2xl mx-auto mb-2">
          Tell us what you are building. We respond within hours — not days.
          No sales funnels, no intake gates. Just a conversation.
        </p>
      </section>

      {/* Form */}
      <section className="max-w-[700px] mx-auto px-8 pb-16">
        {formId ? (
          <div className="glass rounded-lg p-6">
            <GhlEmbed formId={formId} height="700px" />
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
      <section className="max-w-[700px] mx-auto px-8 pb-24 text-center">
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
