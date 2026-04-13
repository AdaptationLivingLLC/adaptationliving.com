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

const title = "Contact Us";
const description =
  "Contact Adaptation Living LLC. Call 623-219-1237 or book a free discovery call. Veteran-owned AI studio, Phoenix AZ.";

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
      <BreadcrumbSchema items={[{ name: "Contact", path: "/contact" }]} />
      <section className="max-w-[1200px] mx-auto px-8 pt-16 pb-24">
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
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
                <h2 className="font-display text-xl font-bold mb-1">Phone</h2>
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
                <h2 className="font-display text-xl font-bold mb-1">Email</h2>
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
                <h2 className="font-display text-xl font-bold mb-1">Office</h2>
                <p className="text-text-muted">
                  3030 N Central Ave Suite 507
                  <br />
                  Phoenix, AZ 85012
                  <br />
                  Bank of America Building
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="text-accent w-6 h-6 mt-1 shrink-0" />
              <div>
                <h2 className="font-display text-xl font-bold mb-1">Hours</h2>
                <p className="text-text-muted">
                  Monday – Friday, 8:00 AM – 6:00 PM MST
                  <br />
                  Emergency support available for active clients
                </p>
              </div>
            </div>

            <div className="glass rounded-lg p-6 mt-8">
              <p className="text-sm text-text-muted">
                <strong className="text-white">Government Clients:</strong>{" "}
                Adaptation Living LLC is SAM.gov registered. CAGE: 95WK4 |
                UEI: J3XGTRT7DYU5 | NAICS: 541511, 541512
              </p>
            </div>
          </div>

          {/* Calendar booking */}
          <div>
            <h2 className="font-display text-2xl font-bold mb-4">
              Book a Discovery Call
            </h2>
            <p className="text-text-muted mb-6">
              Pick a time that works. 30 minutes, no obligation, no sales
              pressure.
            </p>
            {calendarId ? (
              <div className="glass rounded-lg p-4">
                <GhlEmbed calendarId={calendarId} height="500px" />
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

      {/* Office photos */}
      <section className="max-w-[1200px] mx-auto px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/al-hq-daytime.png"
              alt="Adaptation Living LLC office — 3030 N Central Ave Suite 507, Phoenix AZ"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/al-hq-night.jpg"
              alt="Adaptation Living LLC — Bank of America Building at night, Uptown Phoenix"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
        <p className="text-center text-sm text-text-muted mt-4">
          3030 N Central Ave Suite 507 · Phoenix, AZ 85012 · Bank of America Building
        </p>
      </section>
    </main>
  );
}
