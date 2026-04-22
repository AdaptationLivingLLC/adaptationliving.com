import type { Metadata } from "next";
import {
  BreadcrumbSchema,
  pageAlternates,
  pageOg,
  pageTwitter,
} from "../../../lib/seo";
import { Breadcrumbs } from "../../../components/breadcrumbs";

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
    <main id="main-content" className="navbar-offset section-cream">
      <Breadcrumbs items={[{ name: "Legal" }]} />
      <BreadcrumbSchema items={[{ name: "Legal", path: "/legal" }]} />
      <article className="max-w-[800px] mx-auto px-8 pt-12 pb-16 prose prose-sm">
        <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-[#0F172A]">
          Privacy Policy &amp; Legal Notice
        </h1>

        <p className="text-text-muted text-sm mb-8">
          Last updated: April 2026
        </p>

        <h2 className="font-display text-xl sm:text-2xl font-bold mt-10 mb-3 text-[#0F172A]">
          1. Information We Collect
        </h2>
        <p className="text-text-muted leading-relaxed">
          When you submit a form, book a call, or contact us, we collect the
          information you provide: name, email address, phone number, business
          name, and project details. We also collect standard analytics data
          (page views, device type, referral source) through Google Analytics
          and Google Tag Manager.
        </p>

        <h2 className="font-display text-xl sm:text-2xl font-bold mt-10 mb-3 text-[#0F172A]">
          2. How We Use Your Information
        </h2>
        <p className="text-text-muted leading-relaxed">
          We use your information to respond to inquiries, deliver services,
          send project-related communications, and improve our website. We do
          not sell your data. We do not share your information with third
          parties except as required to deliver our services (e.g., CRM
          tools, payment processors, email delivery services).
        </p>

        <h2 className="font-display text-xl sm:text-2xl font-bold mt-10 mb-3 text-[#0F172A]">
          3. Third-Party Services
        </h2>
        <p className="text-text-muted leading-relaxed">
          We use the following third-party services to operate our platform.
          Each processes data on our behalf under their own privacy policies:
        </p>
        <ul className="text-text-muted leading-relaxed mt-4 space-y-2 list-disc list-inside">
          <li>
            <strong className="text-[#0F172A]">Adaptation Living CRM Platform</strong> — Client
            communications, form submissions, and appointment scheduling.
          </li>
          <li>
            <strong className="text-[#0F172A]">Google Tag Manager &amp; Google Analytics</strong> — Website
            analytics, traffic analysis, and conversion tracking.
          </li>
          <li>
            <strong className="text-[#0F172A]">Meta (Facebook) Pixel</strong> — Conversion tracking and
            advertising audience optimization.
          </li>
          <li>
            <strong className="text-[#0F172A]">Microsoft Clarity</strong> — Session
            recording, heatmaps, and user behavior analytics.
          </li>
          <li>
            <strong className="text-[#0F172A]">Stripe</strong> — Secure payment
            processing for invoices and service agreements.
          </li>
          <li>
            <strong className="text-[#0F172A]">Vercel</strong> — Website hosting and
            content delivery.
          </li>
        </ul>

        <h2 className="font-display text-xl sm:text-2xl font-bold mt-10 mb-3 text-[#0F172A]">
          4. Cookies &amp; Tracking Technologies
        </h2>
        <p className="text-text-muted leading-relaxed">
          We and our third-party providers use cookies and similar
          technologies to operate our site, measure performance, and support
          advertising:
        </p>
        <ul className="text-text-muted leading-relaxed mt-4 space-y-2 list-disc list-inside">
          <li>
            <strong className="text-[#0F172A]">Session cookies</strong> — Keep you
            signed in to your account and maintain secure sessions.
          </li>
          <li>
            <strong className="text-[#0F172A]">Analytics cookies</strong> — Google
            Analytics 4, loaded via Google Tag Manager, to measure traffic and
            page performance.
          </li>
          <li>
            <strong className="text-[#0F172A]">Meta Pixel</strong> — Ad
            measurement, conversion tracking, and audience building for
            Facebook and Instagram campaigns.
          </li>
          <li>
            <strong className="text-[#0F172A]">Microsoft Clarity</strong> —
            Session recording and heatmaps to understand how visitors use the
            site.
          </li>
          <li>
            <strong className="text-[#0F172A]">Chat widget</strong> — Stores
            visitor conversation history so support agents can see prior
            messages.
          </li>
        </ul>
        <p className="text-text-muted leading-relaxed mt-4">
          You can opt out of non-essential cookies through your browser
          settings. California residents may request deletion of personal
          information collected through these tools by emailing{" "}
          <a
            href="mailto:info@adaptationliving.com"
            className="text-accent hover:underline"
          >
            info@adaptationliving.com
          </a>
          .
        </p>

        <h2 className="font-display text-xl sm:text-2xl font-bold mt-10 mb-3 text-[#0F172A]">
          5. Data Retention
        </h2>
        <p className="text-text-muted leading-relaxed">
          We retain client data for the duration of our business relationship
          and for a reasonable period afterward for legal and accounting
          purposes. You may request deletion of your data at any time by
          contacting us at info@adaptationliving.com.
        </p>

        <h2 className="font-display text-xl sm:text-2xl font-bold mt-10 mb-3 text-[#0F172A]">
          6. Contact
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

        <h2 className="font-display text-xl sm:text-2xl font-bold mt-10 mb-3 text-[#0F172A]">
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

        <h3 className="font-display text-lg sm:text-xl font-bold mt-8 mb-3 text-[#0F172A]">
          Subscriptions &amp; Billing
        </h3>
        <p className="text-text-muted leading-relaxed">
          We offer monthly and yearly subscription plans. Subscriptions renew
          automatically at the end of each billing period using the payment
          method you have on file with Stripe, our payment processor.
          Applicable sales taxes are passed through at checkout. We may change
          plan pricing with at least 30 days&apos; written notice sent to the
          email on your account; continued use after a price change
          constitutes acceptance of the new price.
        </p>

        <h3 className="font-display text-lg sm:text-xl font-bold mt-8 mb-3 text-[#0F172A]">
          Cancellation
        </h3>
        <p className="text-text-muted leading-relaxed">
          You can cancel anytime from your account settings or by emailing{" "}
          <a
            href="mailto:info@adaptationliving.com"
            className="text-accent hover:underline"
          >
            info@adaptationliving.com
          </a>
          . Access continues through the end of the current billing period.
          We do not issue prorated refunds for partial months.
        </p>

        <h3 className="font-display text-lg sm:text-xl font-bold mt-8 mb-3 text-[#0F172A]">
          Refunds
        </h3>
        <p className="text-text-muted leading-relaxed">
          First-time subscribers may request a refund within 14 days of the
          initial charge if the subscription is unused. &quot;Unused&quot;
          means: no integrations connected, no campaigns sent, and fewer than
          5 AI credits consumed. After 14 days, all sales are final. Yearly
          plans follow the same 14-day window; if a yearly plan is refunded
          mid-term and otherwise qualifies, the refund is prorated based on
          the months already used, charged at the equivalent monthly rate.
        </p>

        <h3 className="font-display text-lg sm:text-xl font-bold mt-8 mb-3 text-[#0F172A]">
          Chargebacks
        </h3>
        <p className="text-text-muted leading-relaxed">
          Before initiating a chargeback with your card issuer, please
          contact us at{" "}
          <a
            href="mailto:info@adaptationliving.com"
            className="text-accent hover:underline"
          >
            info@adaptationliving.com
          </a>{" "}
          so we can resolve the issue directly. Chargebacks determined to be
          fraudulent may result in account termination and loss of access.
        </p>

        <h3 className="font-display text-lg sm:text-xl font-bold mt-8 mb-3 text-[#0F172A]">
          Acceptable Use
        </h3>
        <p className="text-text-muted leading-relaxed">
          You agree not to use the platform for illegal content, spam, or
          scraping. Any SMS or email campaigns sent through the system must
          comply with applicable laws, including the TCPA and CAN-SPAM Act.
          You are responsible for maintaining proper consent records for your
          contacts.
        </p>

        <h3 className="font-display text-lg sm:text-xl font-bold mt-8 mb-3 text-[#0F172A]">
          Limitation of Liability
        </h3>
        <p className="text-text-muted leading-relaxed">
          Services are provided &quot;as is&quot; without warranties of any
          kind. To the maximum extent permitted by law, Adaptation Living
          LLC&apos;s total liability for any claim arising out of or related
          to the services is capped at the total amounts you paid us in the
          12 months preceding the claim.
        </p>

        <h3 className="font-display text-lg sm:text-xl font-bold mt-8 mb-3 text-[#0F172A]">
          Jurisdiction
        </h3>
        <p className="text-text-muted leading-relaxed">
          These terms are governed by the laws of the State of Arizona. Any
          disputes will be resolved exclusively in the state or federal
          courts located in Maricopa County, Arizona, USA.
        </p>

        <hr className="border-glass-border my-12" />

        <p className="text-text-dim text-xs">
          &copy; 2021–2026 Adaptation Living LLC. All rights reserved. Phoenix,
          AZ. Veteran-Owned Small Business (VOSB — pending SBA approval). SAM.gov registered. CAGE:
          95WK4 | UEI: J3XGTRT7DYU5
        </p>
      </article>
    </main>
  );
}
