import type { Metadata } from "next";
import {
  BreadcrumbSchema,
  pageAlternates,
  pageOg,
  pageTwitter,
} from "../../../lib/seo";

const title = "Privacy Policy & Legal Notice — Adaptation Living LLC";
const description =
  "Privacy policy, terms of service, and legal notice for Adaptation Living LLC. Phoenix, AZ. Veteran-owned AI automation studio.";

export const metadata: Metadata = {
  title,
  description,
  alternates: pageAlternates("/legal"),
  openGraph: pageOg(title, description, "/legal"),
  twitter: pageTwitter(title, description),
  robots: { index: false, follow: true },
};

export default function LegalPage() {
  return (
    <main id="main-content" className="navbar-offset">
      <BreadcrumbSchema items={[{ name: "Legal", path: "/legal" }]} />
      <article className="max-w-[800px] mx-auto px-8 pt-16 pb-24 prose prose-invert prose-sm">
        <h1 className="font-display text-4xl font-bold mb-8 text-white">
          Privacy Policy &amp; Legal Notice
        </h1>

        <p className="text-text-muted text-sm mb-8">
          Last updated: April 2026
        </p>

        <h2 className="font-display text-2xl font-bold mt-12 mb-4 text-white">
          1. Information We Collect
        </h2>
        <p className="text-text-muted leading-relaxed">
          When you submit a form, book a call, or contact us, we collect the
          information you provide: name, email address, phone number, business
          name, and project details. We also collect standard analytics data
          (page views, device type, referral source) through Google Analytics
          and Google Tag Manager.
        </p>

        <h2 className="font-display text-2xl font-bold mt-12 mb-4 text-white">
          2. How We Use Your Information
        </h2>
        <p className="text-text-muted leading-relaxed">
          We use your information to respond to inquiries, deliver services,
          send project-related communications, and improve our website. We do
          not sell your data. We do not share your information with third
          parties except as required to deliver our services (e.g., CRM
          tools, payment processors, email delivery services).
        </p>

        <h2 className="font-display text-2xl font-bold mt-12 mb-4 text-white">
          3. Third-Party Services
        </h2>
        <p className="text-text-muted leading-relaxed">
          We use the following third-party services to operate our platform.
          Each processes data on our behalf under their own privacy policies:
        </p>
        <ul className="text-text-muted leading-relaxed mt-4 space-y-2 list-disc list-inside">
          <li>
            <strong className="text-white">GoHighLevel</strong> — CRM, client
            communications, form submissions, and appointment scheduling.
          </li>
          <li>
            <strong className="text-white">Google Tag Manager &amp; Google Analytics</strong> — Website
            analytics, traffic analysis, and conversion tracking.
          </li>
          <li>
            <strong className="text-white">Meta (Facebook) Pixel</strong> — Conversion tracking and
            advertising audience optimization.
          </li>
          <li>
            <strong className="text-white">Microsoft Clarity</strong> — Session
            recording, heatmaps, and user behavior analytics.
          </li>
          <li>
            <strong className="text-white">Stripe</strong> — Secure payment
            processing for invoices and service agreements.
          </li>
          <li>
            <strong className="text-white">Vercel</strong> — Website hosting and
            content delivery.
          </li>
        </ul>

        <h2 className="font-display text-2xl font-bold mt-12 mb-4 text-white">
          4. Data Retention
        </h2>
        <p className="text-text-muted leading-relaxed">
          We retain client data for the duration of our business relationship
          and for a reasonable period afterward for legal and accounting
          purposes. You may request deletion of your data at any time by
          contacting us at info@adaptationliving.com.
        </p>

        <h2 className="font-display text-2xl font-bold mt-12 mb-4 text-white">
          5. Contact
        </h2>
        <p className="text-text-muted leading-relaxed">
          For questions about this policy, contact Adaptation Living LLC at{" "}
          <a
            href="mailto:info@adaptationliving.com"
            className="text-accent hover:underline"
          >
            info@adaptationliving.com
          </a>{" "}
          or call{" "}
          <a href="tel:6232191237" className="text-accent hover:underline">
            623-219-1237
          </a>
          .
        </p>

        <hr className="border-glass-border my-12" />

        <h2 className="font-display text-2xl font-bold mt-12 mb-4 text-white">
          Terms of Service
        </h2>
        <p className="text-text-muted leading-relaxed">
          All services provided by Adaptation Living LLC are governed by the
          terms agreed upon in individual client proposals and service
          agreements. This website is provided as-is for informational
          purposes. Pricing displayed on this site is subject to change and
          does not constitute a binding offer. Final pricing is confirmed in
          writing before any work begins.
        </p>

        <hr className="border-glass-border my-12" />

        <p className="text-text-dim text-xs">
          &copy; 2021–2026 Adaptation Living LLC. All rights reserved. Phoenix,
          AZ. Veteran-Owned Small Business (VOSB). SAM.gov registered. CAGE:
          95WK4 | UEI: J3XGTRT7DYU5
        </p>
      </article>
    </main>
  );
}
