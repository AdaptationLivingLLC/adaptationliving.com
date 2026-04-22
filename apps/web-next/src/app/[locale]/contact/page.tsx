import type { Metadata } from "next";
import Image from "next/image";
import { CalendarCheck, Clock, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { GhlEmbed } from "../../../components/ghl-embed";
import {
  BreadcrumbSchema,
  pageAlternates,
  pageOg,
  pageTwitter,
} from "../../../lib/seo";
import { Breadcrumbs } from "../../../components/breadcrumbs";

const title =
  "Contact Adaptation Living — AI Automation & CRM Studio in Phoenix, AZ";
const description =
  "Contact Adaptation Living LLC in Uptown Phoenix. Call 623-219-1237, email info@adaptationliving.com, or book a free discovery call. AI automation, CRM, and web development for Phoenix small businesses.";

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
      <BreadcrumbSchema items={[{ name: "Contact", path: "/contact" }]} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Adaptation Living LLC",
            alternateName: "the Adaptation Living Platform",
            url: "https://www.adaptationliving.com",
            telephone: "+1-623-219-1237",
            email: "info@adaptationliving.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "3030 N Central Ave Suite 507",
              addressLocality: "Phoenix",
              addressRegion: "AZ",
              postalCode: "85012",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 33.4842,
              longitude: -112.074,
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "08:00",
              closes: "18:00",
            },
            priceRange: "$194.90 - $997.90",
            image: "https://www.adaptationliving.com/images/al-hq-daytime.webp",
            founder: {
              "@type": "Person",
              givenName: "Brandon",
              familyName: "Bible",
              name: "Brandon Bible",
              jobTitle: "Founder & CEO",
              telephone: "+1-623-219-1237",
              email: "info@adaptationliving.com",
              worksFor: {
                "@type": "Organization",
                name: "Adaptation Living LLC",
              },
            },
          }),
        }}
      />

      {/* HERO */}
      <section className="section-cream">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 pt-10 pb-12 text-center">
          <p className="eyebrow">Talk to a Real Team</p>
          <h1 className="mt-3 h-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A]">
            Contact Adaptation Living — Uptown Phoenix, AZ.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#475569] max-w-2xl mx-auto leading-relaxed">
            A senior team member responds personally — typically within hours.
            No chatbots. No intake funnels. No ticket queues. We start with a
            real conversation about what you're building.
          </p>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="section-cream pb-16">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              {[
                {
                  icon: Phone,
                  label: "Phone",
                  value: "623-219-1237",
                  href: "tel:6232191237",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "info@adaptationliving.com",
                  href: "mailto:info@adaptationliving.com",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 rounded-[20px] border border-[#0F172A]/10 bg-white p-6 shadow-soft"
                >
                  <item.icon className="text-accent w-6 h-6 mt-1 shrink-0" />
                  <div>
                    <h2 className="font-display text-lg font-bold text-[#0F172A]">
                      {item.label}
                    </h2>
                    <a
                      href={item.href}
                      className="text-lg text-[#0F172A] hover:text-accent transition-all"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}

              <div className="flex items-start gap-4 rounded-[20px] border border-[#0F172A]/10 bg-white p-6 shadow-soft">
                <MapPin className="text-accent w-6 h-6 mt-1 shrink-0" />
                <div>
                  <h2 className="font-display text-lg font-bold text-[#0F172A]">
                    Office
                  </h2>
                  <p className="text-[#475569]">
                    3030 N Central Ave · Suite 507
                    <br />
                    Phoenix, AZ 85012
                    <br />
                    Bank of America Tower · 5th Floor
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-[20px] border border-[#0F172A]/10 bg-white p-6 shadow-soft">
                <Clock className="text-accent w-6 h-6 mt-1 shrink-0" />
                <div>
                  <h2 className="font-display text-lg font-bold text-[#0F172A]">
                    Hours
                  </h2>
                  <p className="text-[#475569]">
                    Monday–Friday · 8:00 AM – 6:00 PM MST
                    <br />
                    Emergency support available for active clients.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-[20px] border border-accent/30 bg-accent/10 p-6">
                <ShieldCheck className="text-accent w-6 h-6 mt-1 shrink-0" />
                <div>
                  <h2 className="font-display text-lg font-bold text-[#0F172A]">
                    Government Clients
                  </h2>
                  <p className="text-sm text-[#475569]">
                    Adaptation Living LLC is SAM.gov registered.
                    <br />
                    CAGE 95WK4 · UEI J3XGTRT7DYU5
                    <br />
                    NAICS 541511, 541512
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3">
                <CalendarCheck className="text-accent w-6 h-6" />
                <p className="eyebrow">Book a Call</p>
              </div>
              <h2 className="h-display text-2xl sm:text-3xl font-bold text-[#0F172A]">
                Book a Discovery Call
              </h2>
              <p className="mt-3 text-[#475569]">
                Pick a time that works. 30 minutes. No obligation. No sales
                pressure — just a working conversation about your business.
              </p>
              {calendarId ? (
                <div className="mt-5 rounded-[20px] border border-[#0F172A]/10 bg-white shadow-lift p-4">
                  <GhlEmbed
                    calendarId={calendarId}
                    height="520px"
                    title="Book a discovery call with Adaptation Living"
                  />
                </div>
              ) : (
                <div className="mt-5 rounded-[20px] border border-[#0F172A]/10 bg-white shadow-soft p-8 text-center">
                  <p className="text-[#475569] mb-4">
                    Calendar booking is being configured in GHL. Call or email
                    us directly and we'll schedule the same day.
                  </p>
                  <a
                    href="tel:6232191237"
                    className="inline-flex items-center gap-2 text-lg font-semibold text-accent hover:underline"
                  >
                    <Phone className="w-5 h-5" />
                    623-219-1237
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* OFFICE PHOTO */}
      <section className="section-cream border-t border-[#0F172A]/10 pb-16 pt-16">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          <div className="relative aspect-[16/9] overflow-hidden rounded-[24px] border border-[#0F172A]/10 shadow-lift">
            <Image
              src="/images/al-hq-daytime.webp"
              alt="Adaptation Living LLC headquarters — Bank of America Tower, 3030 N Central Ave Suite 507, Phoenix AZ"
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
            />
          </div>
          <p className="mt-4 text-center text-sm text-[#475569]">
            3030 N Central Ave · Suite 507 · Phoenix, AZ 85012 · Bank of
            America Tower
          </p>

          <a
            href="https://www.linkedin.com/company/adaptation-living"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 block overflow-hidden rounded-[18px] transition-opacity hover:opacity-90"
          >
            <Image
              src="/images/uploads/al-linkedin-banner.png"
              alt="Follow Adaptation Living LLC on LinkedIn — AI Systems, Automation, Revenue Infrastructure"
              width={1128}
              height={191}
              className="w-full h-auto"
            />
          </a>
          <p className="mt-3 text-center text-sm text-[#475569]">
            Follow us on LinkedIn
          </p>
        </div>
      </section>

      {/* NOT READY */}
      <section className="section-cream border-t border-[#0F172A]/10 py-16">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 text-center">
          <h2 className="h-display text-2xl sm:text-3xl font-bold text-[#0F172A]">
            Not ready to call?
          </h2>
          <p className="mt-3 text-[#475569] max-w-xl mx-auto">
            Explore the Adaptation Living Platform features, plans, and the AI workforce before
            reaching out.
          </p>
          <div className="mt-6 flex justify-center gap-5 flex-wrap text-xs font-bold uppercase tracking-[0.22em]">
            <a href="/services" className="text-accent hover:underline">
              Pricing &amp; Plans
            </a>
            <span className="text-[#0F172A]/30">·</span>
            <a href="/ai" className="text-accent hover:underline">
              AI Agents
            </a>
            <span className="text-[#0F172A]/30">·</span>
            <a href="/#platform" className="text-accent hover:underline">
              Platform Features
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
