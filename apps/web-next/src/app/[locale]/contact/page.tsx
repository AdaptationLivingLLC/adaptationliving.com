import type { Metadata } from "next";
import Image from "next/image";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { GhlEmbed } from "../../../components/ghl-embed";
import {
  BreadcrumbSchema,
  pageAlternates,
  pageOg,
  pageTwitter,
} from "../../../lib/seo";
import { Breadcrumbs } from "@/components/breadcrumbs";

const title = "Contact Us";
const description =
  "Contact Adaptation Living LLC in Phoenix, AZ. Call 623-219-1237, email us, or book a free discovery call. AI automation, CRM, and web development for small businesses.";

export const metadata: Metadata = {
  title,
  description,
  alternates: pageAlternates("/contact"),
  openGraph: pageOg(title, description, "/contact"),
  twitter: pageTwitter(title, description),
};

export default function ContactPage() {
  const calendarId = process.env.NEXT_PUBLIC_GHL_CALENDAR_ID;

  return (
    <main id="main-content" className="navbar-offset">
      <Breadcrumbs items={[{ name: "Contact" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Adaptation Living LLC",
            "alternateName": "Adaptation OS",
            "url": "https://adaptationliving.com",
            "telephone": "+1-623-219-1237",
            "email": "admin@adaptationliving.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "3030 N Central Ave Suite 507",
              "addressLocality": "Phoenix",
              "addressRegion": "AZ",
              "postalCode": "85012",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 33.4842,
              "longitude": -112.074
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
              "opens": "09:00",
              "closes": "17:00"
            },
            "priceRange": "$194.90-$997.90/mo",
            "image": "https://adaptationliving.com/images/al-hq-daytime.webp",
            "founder": {
              "@type": "Person",
              "name": "Brandon Bible",
              "jobTitle": "CEO"
            }
          }),
        }}
      />
      <BreadcrumbSchema items={[{ name: "Contact", path: "/contact" }]} />
      <section className="section-cream max-w-[1200px] mx-auto px-8 pt-16 pb-24">
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4 text-[#0B1D3A]">
            Contact Us
          </h1>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            A senior team member responds — typically within hours. No
            chatbots. No intake funnels. We start with a conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <Phone className="text-accent w-6 h-6 mt-1 shrink-0" />
              <div>
                <h2 className="font-display text-xl font-bold mb-1 text-[#0B1D3A]">Phone</h2>
                <a
                  href="tel:6232191237"
                  className="text-lg hover:text-accent transition-all"
                >
                  623-219-1237
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-accent w-6 h-6 mt-1 shrink-0" />
              <div>
                <h2 className="font-display text-xl font-bold mb-1 text-[#0B1D3A]">Email</h2>
                <a
                  href="mailto:info@adaptationliving.com"
                  className="text-lg hover:text-accent transition-all"
                >
                  info@adaptationliving.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="text-accent w-6 h-6 mt-1 shrink-0" />
              <div>
                <h2 className="font-display text-xl font-bold mb-1 text-[#0B1D3A]">Office</h2>
                <p className="text-text-muted">
                  3030 N Central Ave Suite 507
                  <br />
                  Phoenix, AZ 85012
                  <br />
                  Bank of America Tower
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="text-accent w-6 h-6 mt-1 shrink-0" />
              <div>
                <h2 className="font-display text-xl font-bold mb-1 text-[#0B1D3A]">Hours</h2>
                <p className="text-text-muted">
                  Monday – Friday, 8:00 AM – 6:00 PM MST
                  <br />
                  Emergency support available for active clients
                </p>
              </div>
            </div>

            <div className="glass rounded-lg p-6 mt-8">
              <p className="text-sm text-text-muted">
                <strong className="text-[#0B1D3A]">Government Clients:</strong>{" "}
                Adaptation Living LLC is SAM.gov registered. CAGE: 95WK4 |
                UEI: J3XGTRT7DYU5 | NAICS: 541511, 541512
              </p>
            </div>
          </div>

          {/* Calendar booking */}
          <div>
            <h2 className="font-display text-2xl font-bold mb-4 text-[#0B1D3A]">
              Book a Discovery Call
            </h2>
            <p className="text-text-muted mb-6">
              Pick a time that works. 30 minutes, no obligation, no sales
              pressure.
            </p>
            {calendarId ? (
              <div className="glass rounded-lg p-4">
                <GhlEmbed calendarId={calendarId} height="500px" title="Book a discovery call with Adaptation Living" />
              </div>
            ) : (
              <div className="glass rounded-lg p-10 text-center">
                <p className="text-text-muted mb-4">
                  Calendar booking is being set up. Call or email us to schedule.
                </p>
                <a
                  href="tel:6232191237"
                  className="text-lg font-semibold text-accent hover:underline"
                >
                  623-219-1237
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Office photo */}
      <section className="max-w-[1200px] mx-auto px-8 pb-24">
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
          <Image
            src="/images/al-hq-daytime.webp"
            alt="Adaptation Living LLC headquarters — Bank of America Tower, 3030 N Central Ave Suite 507, Phoenix AZ"
            fill
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />
        </div>
        <p className="text-center text-sm text-text-muted mt-4">
          3030 N Central Ave Suite 507 · Phoenix, AZ 85012 · Bank of America Tower
        </p>

        {/* LinkedIn banner CTA */}
        <a
          href="https://www.linkedin.com/company/adaptation-living"
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-10 rounded-2xl overflow-hidden hover:opacity-90 transition-opacity"
        >
          <Image
            src="/images/uploads/al-linkedin-banner.png"
            alt="Follow Adaptation Living LLC on LinkedIn — AI Systems · Automation · Revenue Infrastructure"
            width={1128}
            height={191}
            className="w-full h-auto"
          />
        </a>
        <p className="text-center text-sm text-text-muted mt-3">
          Follow us on LinkedIn
        </p>
      </section>

      {/* Not ready to call? */}
      <section className="max-w-[1200px] mx-auto px-8 pb-24">
        <h2 className="font-display text-2xl font-bold mb-4 text-center">Not ready to call?</h2>
        <p className="text-text-muted text-center text-base mb-6">
          Explore what we build before reaching out.
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          <a href="/services" className="text-accent hover:text-accent/80 underline text-sm font-semibold uppercase tracking-widest">Pricing &amp; Plans</a>
          <a href="/ai" className="text-accent hover:text-accent/80 underline text-sm font-semibold uppercase tracking-widest">AI Systems</a>
          <a href="/showcase" className="text-accent hover:text-accent/80 underline text-sm font-semibold uppercase tracking-widest">Live Showcase</a>
        </div>
      </section>
    </main>
  );
}
