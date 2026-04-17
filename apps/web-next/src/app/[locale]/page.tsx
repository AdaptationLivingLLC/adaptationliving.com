import type { Metadata } from "next";
import Image from "next/image";
import {
    BarChart3,
  BrainCircuit,
  Building2,
  Calendar,
  CalendarCheck,
  CheckCircle2,
  Code,
  CreditCard,
  FileText,
  Globe,
  Layers,
  LineChart,
  Mail,
  MapPinned,
  MessageSquare,
  Mic,
  Phone,
  Search,
  ShieldCheck,
  Smartphone,
  Star,
  TrendingUp,
  Workflow,
  Zap,
} from "lucide-react";
import { SeoGraderForm } from "../../components/seo-grader-form";

const title =
  "Adaptation OS — AI Automation, CRM & Business Operating System for Phoenix, AZ";
const description =
  "Veteran-owned AI automation platform in Phoenix, AZ. Adaptation OS replaces 12+ business tools with one system: AI phone receptionist, AI chat agent, CRM, workflow automation, review management, email + SMS marketing, funnels, calendars, and 70+ directory listings. From $194.90/mo.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: [
    "AI automation Phoenix AZ",
    "business operating system Phoenix",
    "CRM automation Phoenix",
    "AI phone receptionist",
    "AI chat agent for business",
    "workflow automation software",
    "veteran-owned AI agency Phoenix",
    "all-in-one business software",
    "GoHighLevel alternative",
    "small business CRM Phoenix",
    "review management automation",
    "local SEO Phoenix AZ",
    "VOSB web development",
    "Adaptation OS",
    "Adaptation Living LLC",
  ],
  openGraph: {
    title,
    description,
    url: "https://adaptationliving.com",
    images: [
      {
        url: "https://adaptationliving.com/images/banner.jpg",
        alt: "Adaptation OS — AI Automation and Business Operating System for Phoenix, AZ",
      },
    ],
  },
  twitter: {
    title,
    description,
    images: ["https://adaptationliving.com/images/banner.jpg"],
  },
  alternates: {
    canonical: "https://adaptationliving.com",
    languages: {
      en: "https://adaptationliving.com",
      es: "https://adaptationliving.com/es",
      "x-default": "https://adaptationliving.com",
    },
  },
};

const featurePillars = [
  {
    icon: BrainCircuit,
    title: "AI Employee Suite",
    tagline: "Phone, chat, reviews, content — staffed by AI",
    items: [
      "AI Voice Agent answers every call 24/7",
      "AI Chat Agent on web, SMS, IG, FB, WhatsApp",
      "AI Review Responder for Google + Facebook",
      "Content AI for blogs, ads, emails, social",
      "Workflow AI builds automations from plain English",
    ],
  },
  {
    icon: BarChart3,
    title: "CRM & Sales Pipeline",
    tagline: "One command center for every lead and deal",
    items: [
      "Contact database with smart lists + tags",
      "Visual drag-and-drop pipeline stages",
      "Complete communication history per contact",
      "Custom fields and segmentation",
      "Deal tracking, forecasting, and revenue reports",
    ],
  },
  {
    icon: MessageSquare,
    title: "Unified Communication",
    tagline: "Every channel. One inbox.",
    items: [
      "Two-way SMS, MMS, and email",
      "Dedicated business phone number (LC Phone)",
      "Voicemail, call recording, transcription",
      "Facebook Messenger, Instagram DM, WhatsApp",
      "Live web chat with AI fallback",
    ],
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    tagline: "Your follow-up runs while you sleep",
    items: [
      "Visual if/then builder — no code",
      "Missed-call text-back in under 60 seconds",
      "Multi-step nurture sequences (SMS + email)",
      "Appointment reminders and no-show rescue",
      "Re-engagement campaigns for cold leads",
    ],
  },
  {
    icon: Calendar,
    title: "Calendars & Booking",
    tagline: "Leads book themselves",
    items: [
      "Multiple calendars per user or service",
      "Round-robin team scheduling",
      "Embeddable booking widgets",
      "Automatic SMS + email reminders",
      "AI handles rescheduling and cancellations",
    ],
  },
  {
    icon: Globe,
    title: "Websites, Funnels & Pages",
    tagline: "Publish a page in minutes, not weeks",
    items: [
      "Drag-and-drop website and funnel builder",
      "Landing pages, forms, surveys, quizzes",
      "Payment links and checkout pages",
      "Membership sites and online courses",
      "Blog publishing with Content AI",
    ],
  },
  {
    icon: Star,
    title: "Reputation Management",
    tagline: "5-star reviews on autopilot",
    items: [
      "Review request campaigns (SMS + email)",
      "AI responds to every Google review",
      "Negative review alerts before they publish",
      "Review monitoring dashboard",
      "Public review widget for your website",
    ],
  },
  {
    icon: MapPinned,
    title: "Online Listings (70+ Sites)",
    tagline: "Found on every map Google checks",
    items: [
      "Sync business info to 70+ directories",
      "Google, Yelp, Facebook, Apple Maps, Bing",
      "NAP consistency (name/address/phone)",
      "Real-time updates across all platforms",
      "Local SEO signal boost",
    ],
  },
  {
    icon: CreditCard,
    title: "Payments & Invoicing",
    tagline: "Get paid without leaving the dashboard",
    items: [
      "Stripe-powered invoices and checkout",
      "Subscription billing and recurring charges",
      "One-click payment links via SMS or email",
      "Automatic payment reminders",
      "Revenue reporting and reconciliation",
    ],
  },
  {
    icon: TrendingUp,
    title: "Social Media & Ads",
    tagline: "Post, schedule, and advertise in one place",
    items: [
      "Multi-platform social scheduler",
      "Content AI generates posts + graphics",
      "Facebook + Instagram ad manager built in",
      "Campaign reporting without third-party tools",
      "Consistent brand voice everywhere",
    ],
  },
  {
    icon: Smartphone,
    title: "Branded Mobile App",
    tagline: "Run your entire business from your phone",
    items: [
      "iOS + Android app with your logo",
      "Full CRM, calendar, pipeline on mobile",
      "Approve AI replies before they send",
      "Push notifications for every new lead",
      "In-app two-way messaging",
    ],
  },
  {
    icon: LineChart,
    title: "Reporting & Analytics",
    tagline: "The numbers that actually matter",
    items: [
      "Lead source, conversion, and pipeline dashboards",
      "AI usage metrics — calls, replies, bookings",
      "Campaign performance (SMS, email, ads)",
      "Appointment and no-show tracking",
      "Revenue and MRR reporting",
    ],
  },
];

const painPoints = [
  {
    icon: Phone,
    title: "Missed Calls Cost You Customers",
    pain: "When you miss a call, someone else gets the sale.",
    answer:
      "AI phone answering and missed-call text-back fire the instant the phone rings. Every caller is captured, qualified, and booked — even at 2 AM on a Sunday.",
  },
  {
    icon: Zap,
    title: "Slow Follow-Up Kills Deals",
    pain: "Your leads are hottest in the first five minutes.",
    answer:
      "Automated follow-up workflows respond in seconds — SMS, email, and chat all firing in sequence until the lead books or opts out.",
  },
  {
    icon: Layers,
    title: "Disconnected Software Wastes Money",
    pain: "Eight tools. Eight logins. Eight bills. Zero coordination.",
    answer:
      "Adaptation OS replaces the entire stack — CRM, email, SMS, calendar, reviews, chat, pipeline, reporting — with one login and one bill.",
  },
  {
    icon: Code,
    title: "Your Website Isn't Converting",
    pain: "If it looks like a template, buyers treat you like a commodity.",
    answer:
      "A conversion-optimized custom website with a built-in AI chat agent, booking flow, and pipeline integration — not a page that just sits there.",
  },
  {
    icon: Search,
    title: "Nobody Can Find You Online",
    pain: "If Google doesn't show you, customers find someone else.",
    answer:
      "Local SEO, Google Business Profile optimization, consistent listings across 70+ directories, and AI-overview content that surfaces in ChatGPT and Perplexity.",
  },
  {
    icon: Star,
    title: "Your Reputation Is On Autopilot — Just Not How You Want",
    pain: "One unanswered 1-star review tanks next month's leads.",
    answer:
      "AI monitors Google and Facebook 24/7, drafts a professional response to every review, and alerts you before a negative review publishes.",
  },
];

const faqs = [
  {
    q: "What is Adaptation OS?",
    a: "Adaptation OS is an all-in-one business operating system for small and mid-sized businesses in Phoenix and across the US. It combines a CRM, AI phone receptionist, AI chat agent, workflow automation, review management, email and SMS marketing, a website and funnel builder, calendar booking, payments, social media scheduling, and 70+ directory listings into one platform. One login. One bill. Built on GoHighLevel, white-labeled and deployed by Adaptation Living LLC.",
  },
  {
    q: "Can I see a live demo before I commit?",
    a: "Yes. Phoenix-area business owners can visit our Uptown Phoenix office at 3030 N Central Ave, Suite 507 — the Bank of America Tower — for a hands-on walkthrough of Adaptation OS running live. Remote clients get a screen-share demonstration of the exact same platform.",
  },
  {
    q: "How fast can you deploy Adaptation OS for my business?",
    a: "Self-serve plans activate the same day you sign up — instant access, no wait. Done-for-you setups launch in two to three weeks, including contact import, domain linking, workflow configuration, AI agent training, and team onboarding.",
  },
  {
    q: "Do I keep my existing phone number, email, and website?",
    a: "Yes. We port your existing phone number into the platform (or issue a new dedicated business line), connect your sending domain for email, and either integrate with your current website or rebuild it on the platform as part of setup.",
  },
  {
    q: "Is Adaptation OS HIPAA compliant?",
    a: "HIPAA compliance is available as a $297/month add-on for medical, dental, behavioral health, and other healthcare clients. Once enabled, PHI handling is compliant end-to-end.",
  },
  {
    q: "What makes Adaptation Living different from a typical marketing agency?",
    a: "Agencies sell you services. We sell you an operating system — CRM, AI agents, automation, website, and reporting in one platform — then deploy, configure, and support it. You own the outcome, not just a pile of deliverables.",
  },
  {
    q: "How does pricing work — are there any hidden fees?",
    a: "Every tier includes the full platform. You pay a monthly subscription plus standard usage costs for SMS, email, AI, and phone traffic, all billed transparently at wholesale pass-through rates. Credits included at signup absorb typical first-month usage. No hidden fees, no surprise invoices.",
  },
  {
    q: "Do you serve government contracts?",
    a: "Yes. Adaptation Living LLC is a Veteran-Owned Small Business (VOSB) registered on SAM.gov. CAGE: 95WK4 — UEI: J3XGTRT7DYU5 — NAICS: 541511, 541512. We support custom computer programming and computer systems design contracts for federal, state, and local agencies.",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://adaptationliving.com/#localbusiness",
            name: "Adaptation Living LLC",
            alternateName: ["Adaptation OS", "Adaptation Living"],
            url: "https://adaptationliving.com",
            logo: "https://adaptationliving.com/images/adaptation-seal-icon.svg",
            image: "https://adaptationliving.com/images/banner.jpg",
            description,
            foundingDate: "2021",
            founder: {
              "@type": "Person",
              name: "Brandon Bible",
              jobTitle: "Founder & CEO",
              url: "https://www.linkedin.com/in/brandon-bible-7b78b2393",
            },
            address: {
              "@type": "PostalAddress",
              streetAddress: "3030 N Central Ave Suite 507",
              addressLocality: "Phoenix",
              addressRegion: "AZ",
              postalCode: "85012",
              addressCountry: "US",
            },
            geo: { "@type": "GeoCoordinates", latitude: 33.4842, longitude: -112.074 },
            telephone: "+1-623-219-1237",
            email: "info@adaptationliving.com",
            priceRange: "$194.90 - $997.90",
            areaServed: [
              { "@type": "City", name: "Phoenix" },
              { "@type": "City", name: "Scottsdale" },
              { "@type": "City", name: "Tempe" },
              { "@type": "City", name: "Mesa" },
              { "@type": "City", name: "Glendale" },
              { "@type": "City", name: "Chandler" },
              { "@type": "State", name: "Arizona" },
              { "@type": "Country", name: "United States" },
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Adaptation OS Plans",
              itemListElement: [
                { "@type": "Offer", name: "Starter Setup", price: "194.90", priceCurrency: "USD" },
                { "@type": "Offer", name: "Growth Setup", price: "394.90", priceCurrency: "USD" },
                { "@type": "Offer", name: "Scale Setup", price: "694.90", priceCurrency: "USD" },
                { "@type": "Offer", name: "Starter DIY", price: "349.90", priceCurrency: "USD" },
                { "@type": "Offer", name: "Growth DIY", price: "597.90", priceCurrency: "USD" },
                { "@type": "Offer", name: "Scale DIY", price: "997.90", priceCurrency: "USD" },
              ],
            },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Adaptation OS",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web, iOS, Android",
            offers: {
              "@type": "AggregateOffer",
              lowPrice: "194.90",
              highPrice: "997.90",
              priceCurrency: "USD",
              offerCount: 6,
            },
            description:
              "All-in-one business operating system: CRM, AI phone receptionist, AI chat agent, workflow automation, review management, email and SMS marketing, funnels, calendars, payments, social scheduling, and 70+ directory listings.",
            publisher: {
              "@type": "Organization",
              name: "Adaptation Living LLC",
              url: "https://adaptationliving.com",
            },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            name: "Adaptation OS — Founder's Walkthrough",
            description:
              "A live tour of Adaptation OS: custom websites, CRM, AI phone and chat agents, and the automation layer for Phoenix business owners.",
            thumbnailUrl: [
              "https://i.ytimg.com/vi/FPYBckToFO0/maxresdefault.jpg",
              "https://i.ytimg.com/vi/FPYBckToFO0/hqdefault.jpg",
            ],
            uploadDate: "2026-04-15",
            contentUrl: "https://youtu.be/FPYBckToFO0",
            embedUrl: "https://www.youtube-nocookie.com/embed/FPYBckToFO0",
            publisher: {
              "@type": "Organization",
              name: "Adaptation Living LLC",
              logo: {
                "@type": "ImageObject",
                url: "https://adaptationliving.com/images/adaptation-seal-icon.svg",
              },
            },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://adaptationliving.com/#organization",
            name: "Adaptation Living LLC",
            legalName: "Adaptation Living LLC",
            url: "https://adaptationliving.com",
            logo: "https://adaptationliving.com/images/adaptation-seal-icon.svg",
            sameAs: [
              "https://www.linkedin.com/company/adaptation-living",
              "https://www.linkedin.com/in/brandon-bible-7b78b2393",
            ],
            foundingDate: "2021",
            founder: {
              "@type": "Person",
              name: "Brandon Bible",
              jobTitle: "Founder & CEO",
            },
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+1-623-219-1237",
                contactType: "sales",
                email: "info@adaptationliving.com",
                availableLanguage: ["English", "Spanish"],
                areaServed: "US",
              },
            ],
            identifier: [
              { "@type": "PropertyValue", name: "CAGE Code", value: "95WK4" },
              { "@type": "PropertyValue", name: "UEI", value: "J3XGTRT7DYU5" },
              { "@type": "PropertyValue", name: "NAICS", value: "541511, 541512" },
            ],
          }),
        }}
      />

      <main id="main-content">
        {/* ═════════════════════════════════════════════════════════════════ */}
        {/* HERO — intro left, SEO tool right (side-by-side on desktop)       */}
        {/* ═════════════════════════════════════════════════════════════════ */}
        <header className="section-dark-radial relative overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/banner.jpg"
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-[0.12]"
          >
            <source src="/assets/video/hero-bg.mp4" type="video/mp4" />
          </video>

          <div className="relative mx-auto max-w-[1400px] px-6 pb-14 pt-24 sm:px-8 lg:pb-20 lg:pt-28">
            <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.95fr_1.05fr]">
              {/* INTRO — left on desktop, stacks second on mobile so the SEO tool appears first */}
              <div className="order-2 lg:order-1">
                <div className="mb-5 flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-accent/50 bg-accent/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-accent">
                    Veteran-Owned · VOSB
                  </span>
                  <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-white">
                    Phoenix, AZ
                  </span>
                  <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-white">
                    Since 2021
                  </span>
                </div>
                <h1 className="h-display font-bold tracking-tight text-white text-[1.9rem] leading-[1.05] sm:text-[2.4rem] xl:text-[3rem]">
                  The{" "}
                  <span className="bg-gradient-to-r from-accent via-[#3B82F6] to-accent bg-clip-text text-transparent">
                    Business Operating System
                  </span>{" "}
                  for Phoenix.
                </h1>
                <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-[#94A3B8] sm:text-base">
                  AI phone receptionist, AI chat agent, CRM, workflows, email +
                  SMS marketing, funnels, calendars, payments, and 70+ directory
                  listings — replacing 12+ disconnected tools with one login.
                  Deployed by a veteran-owned team in Uptown Phoenix.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#plans"
                    className="inline-flex items-center justify-center gap-2 rounded-sm border-2 border-accent bg-accent px-6 py-3 text-xs font-bold uppercase tracking-[0.22em] text-navy shadow-gold transition-all hover:bg-transparent hover:text-accent"
                  >
                    See Plans &amp; Pricing
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-sm border-2 border-white/70 bg-transparent px-6 py-3 text-xs font-bold uppercase tracking-[0.22em] text-white transition-all hover:bg-white hover:text-navy"
                  >
                    Book A Live Demo
                  </a>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] uppercase tracking-[0.22em] text-[#64748B]">
                  <a href="tel:6232191237" className="flex items-center gap-2 hover:text-accent">
                    <Phone className="h-3.5 w-3.5 text-accent" /> 623-219-1237
                  </a>
                  <span>·</span>
                  <span>3030 N Central Ave, Suite 507</span>
                </div>
              </div>

              {/* SEO PROSPECTING TOOL — side-by-side with intro on desktop */}
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -inset-[2px] rounded-[28px] bg-[conic-gradient(from_120deg_at_50%_50%,rgba(37,99,235,0.7),rgba(37,99,235,0.35),rgba(37,99,235,0.7))] opacity-60 blur-md"
                  />
                  <div className="relative rounded-[24px] border border-accent/50 bg-white shadow-[0_30px_80px_-20px_rgba(37,99,235,0.55)]">
                    <div className="flex items-center gap-2 border-b border-[#0F172A]/10 px-6 py-3">
                      <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
                      <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#0F172A]/70">
                        Free Instant Analysis · No Credit Card
                      </p>
                    </div>
                    <div className="px-6 pt-5">
                      <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-accent">
                        SEO &amp; Marketing Grader
                      </p>
                      <h2 className="mt-1 font-display text-xl font-bold text-[#0F172A] sm:text-2xl">
                        Grade Your Website in 60 Seconds.
                      </h2>
                      <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                        Enter your URL. We run a full audit — SEO score, listing
                        consistency across 70+ directories, page speed, and
                        missed revenue signals. Report delivered to your inbox.
                      </p>
                    </div>
                    <SeoGraderForm />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
        </header>

        {/* ═════════════════════════════════════════════════════════════════ */}
        {/* TRUST BAR                                                          */}
        {/* ═════════════════════════════════════════════════════════════════ */}
        <section className="section-cream py-8">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[10px] font-semibold uppercase tracking-[0.26em] text-[#0F172A]/60 sm:text-[11px]">
              <span className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-accent" /> Veteran-Owned (VOSB)
              </span>
              <span className="hidden sm:inline text-accent">·</span>
              <span>SAM.gov Registered · CAGE 95WK4</span>
              <span className="hidden sm:inline text-accent">·</span>
              <span>NAICS 541511 · 541512</span>
              <span className="hidden sm:inline text-accent">·</span>
              <span>Headquartered in Uptown Phoenix</span>
              <span className="hidden sm:inline text-accent">·</span>
              <span>Since 2021</span>
            </div>
          </div>
        </section>

        {/* ═════════════════════════════════════════════════════════════════ */}
        {/* AWARDS STRIP — G2 + Capterra (platform recognition)                */}
        {/* ═════════════════════════════════════════════════════════════════ */}
        <section className="section-cream border-t border-[#0F172A]/10 py-10 sm:py-12">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
            <p className="text-center text-[10px] font-bold uppercase tracking-[0.28em] text-[#0F172A]/60 sm:text-[11px]">
              Platform Awarded by G2 &amp; Capterra — Winter / 2026
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8">
              {[
                { src: "/images/awards/g2-top-100-best-software.webp",        alt: "G2 Top 100 Best Software Products 2026" },
                { src: "/images/awards/g2-top-50-agentic-ai.webp",            alt: "G2 Top 50 Agentic AI Products 2026" },
                { src: "/images/awards/g2-top-50-marketing-advertising.webp", alt: "G2 Top 50 Marketing + Digital Advertising Products 2026" },
                { src: "/images/awards/g2-top-50-sales.webp",                 alt: "G2 Top 50 Sales Products 2026" },
                { src: "/images/awards/g2-top-50-content-mgmt.webp",          alt: "G2 Top 50 Content Management Products 2026" },
                { src: "/images/awards/g2-easiest-admin.png",                 alt: "G2 Easiest Admin Mid-Market Winter 2026" },
                { src: "/images/awards/g2-easiest-to-do-business.png",        alt: "G2 Easiest To Do Business With Mid-Market Winter 2026" },
                { src: "/images/awards/g2-users-most-likely-recommend.png",   alt: "G2 Users Most Likely To Recommend Mid-Market Winter 2026" },
                { src: "/images/awards/capterra-shortlist-2025.webp",         alt: "Capterra Shortlist 2025" },
              ].map((b) => (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  key={b.src}
                  src={b.src}
                  alt={b.alt}
                  loading="lazy"
                  className="h-20 w-auto object-contain transition-transform duration-200 hover:-translate-y-0.5 sm:h-24 lg:h-28"
                />
              ))}
            </div>
          </div>
        </section>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#2563EB]/40 to-transparent" />

        {/* ═════════════════════════════════════════════════════════════════ */}
        {/* THE SOFTWARE — Adaptation OS centerpiece                           */}
        {/* ═════════════════════════════════════════════════════════════════ */}
        <section id="platform" className="section-cream py-20 sm:py-24">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">The Platform</p>
              <h2 className="mt-3 h-display text-3xl font-bold text-[#0F172A] sm:text-4xl lg:text-5xl">
                Adaptation OS — The Operating System for Your Entire Business.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#475569] sm:text-lg">
                One platform. One login. One bill. Every feature a modern
                business needs to capture leads, convert customers, automate
                follow-up, and measure revenue — deployed by a veteran-owned
                team that builds, trains, and supports the system for you.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {featurePillars.map((pillar) => (
                <article
                  key={pillar.title}
                  className="group relative overflow-hidden rounded-[22px] border border-[#0F172A]/10 bg-white p-7 shadow-soft transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-lift"
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-accent/10 blur-2xl transition-opacity group-hover:opacity-80"
                  />
                  <div className="relative flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0F172A] text-accent shadow-[inset_0_0_0_1px_rgba(37,99,235,0.3)]">
                      <pillar.icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.22em] text-emerald-700">
                      Included
                    </span>
                  </div>
                  <h3 className="relative mt-5 h-display text-xl font-bold text-[#0F172A]">
                    {pillar.title}
                  </h3>
                  <p className="relative mt-1 text-sm font-semibold text-accent">
                    {pillar.tagline}
                  </p>
                  <ul className="relative mt-4 space-y-2">
                    {pillar.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm leading-relaxed text-[#475569]"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="#plans"
                className="inline-flex items-center justify-center gap-2 rounded-sm border-2 border-accent bg-accent px-7 py-3.5 text-xs font-bold uppercase tracking-[0.22em] text-navy shadow-gold transition-all hover:bg-transparent hover:text-accent"
              >
                See Plans &amp; Pricing
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center gap-2 border-b border-dotted border-[#0F172A]/50 pb-1 text-xs font-bold uppercase tracking-[0.22em] text-[#0F172A]/80 hover:border-accent hover:text-accent"
              >
                Full Feature Comparison
              </a>
            </div>
          </div>
        </section>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#2563EB]/40 to-transparent" />

        {/* ═════════════════════════════════════════════════════════════════ */}
        {/* AI EMPLOYEES — deep dive with founder video                        */}
        {/* ═════════════════════════════════════════════════════════════════ */}
        <section className="section-cream py-20 sm:py-24">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div>
                <p className="eyebrow">AI Employees, Built-In</p>
                <h2 className="mt-3 h-display text-3xl font-bold text-[#0F172A] sm:text-4xl lg:text-5xl">
                  Six AI Agents. Zero Extra Cost.
                </h2>
                <p className="mt-5 text-base leading-relaxed text-[#475569] sm:text-lg">
                  Adaptation OS ships with a full AI workforce. They answer your
                  phone, reply to every chat, respond to reviews, write your
                  content, and build your workflows. They work at 2 AM, on
                  Christmas, during your Sunday family dinner. No overtime. No
                  sick days. No recruiter fees.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      icon: Mic,
                      name: "AI Voice Agent",
                      role: "24/7 Receptionist",
                      copy: "Answers calls, captures leads, books appointments. Natural conversation, your brand voice.",
                    },
                    {
                      icon: MessageSquare,
                      name: "AI Chat Agent",
                      role: "Web, SMS, DMs",
                      copy: "Instant replies on your site, Instagram, Facebook, WhatsApp, and text. Autopilot or human-approved.",
                    },
                    {
                      icon: Star,
                      name: "AI Review Responder",
                      role: "Reputation Guardian",
                      copy: "Responds to every Google and Facebook review in seconds — 5 stars or 1 star — in your brand voice.",
                    },
                    {
                      icon: FileText,
                      name: "Content AI",
                      role: "Writer on Demand",
                      copy: "Blog posts, social captions, ad copy, emails — drafted in seconds in your brand voice.",
                    },
                    {
                      icon: Globe,
                      name: "Funnel & Website AI",
                      role: "Page Builder",
                      copy: "Describe what you want in plain English. AI drafts landing pages, forms, and full funnels.",
                    },
                    {
                      icon: Workflow,
                      name: "Workflow AI",
                      role: "Automation Architect",
                      copy: "Explain a business rule in plain English. AI builds the multi-step automation for you.",
                    },
                  ].map((agent) => (
                    <div
                      key={agent.name}
                      className="rounded-2xl border border-[#0F172A]/10 bg-white p-5 transition-all hover:border-accent/40 hover:shadow-soft"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/15 text-accent">
                          <agent.icon className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-display text-sm font-bold text-[#0F172A]">
                            {agent.name}
                          </p>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">
                            {agent.role}
                          </p>
                        </div>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                        {agent.copy}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative lg:sticky lg:top-24">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-2 rounded-[28px] bg-[conic-gradient(from_120deg_at_50%_50%,rgba(37,99,235,0.5),rgba(37,99,235,0.2),rgba(37,99,235,0.5))] opacity-40 blur-lg"
                />
                <div className="relative overflow-hidden rounded-[24px] border border-[#0F172A]/10 bg-[#0F172A] shadow-lift">
                  <div className="pointer-events-none absolute left-4 top-4 z-10 flex items-center gap-2 rounded-full border border-white/15 bg-[#0F172A]/70 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.28em] text-white backdrop-blur">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Adaptation OS · Live
                  </div>
                  <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                    <iframe
                      src="https://www.youtube-nocookie.com/embed/FPYBckToFO0?rel=0&modestbranding=1&playsinline=1"
                      title="Adaptation OS — Founder's Walkthrough"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-accent">
                      Founder's Walkthrough
                    </p>
                    <p className="mt-1 text-sm text-[#94A3B8]">
                      A live tour of the website, CRM, AI phone and chat agents,
                      and the automation layer we build for operators.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#2563EB]/40 to-transparent" />

        {/* ═════════════════════════════════════════════════════════════════ */}
        {/* PAIN POINTS                                                        */}
        {/* ═════════════════════════════════════════════════════════════════ */}
        <section className="section-cream py-20 sm:py-24">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">The Problems You Already Know</p>
              <h2 className="mt-3 h-display text-3xl font-bold text-[#0F172A] sm:text-4xl">
                What Business Owners Lose Every Day Without an Operating System.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#475569]">
                Missed calls. Dead leads. Duct-taped software. Invisible in
                search. Reviews piling up unanswered. Each one quietly costs you
                revenue. Adaptation OS closes every gap on this list.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {painPoints.map((item) => (
                <article
                  key={item.title}
                  className="flex flex-col rounded-[22px] border border-[#0F172A]/10 bg-white p-7 shadow-soft transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-lift"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-accent">
                      {item.title}
                    </p>
                  </div>
                  <h3 className="mt-4 h-display text-lg font-bold text-[#0F172A]">
                    {item.pain}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[#475569]">
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ═════════════════════════════════════════════════════════════════ */}
        {/* WHAT IT REPLACES                                                   */}
        {/* ═════════════════════════════════════════════════════════════════ */}
        <section className="section-dark py-16 sm:py-20">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
            <div className="max-w-3xl">
              <p className="eyebrow">The Real Cost of a Duct-Taped Stack</p>
              <h2 className="mt-3 h-display text-2xl font-bold text-white sm:text-3xl lg:text-[2.25rem]">
                Cancel the subscriptions. <span className="text-accent">Keep every capability.</span>
              </h2>
              <p className="mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-[#94A3B8]">
                Here's what a typical Phoenix small business pays for twelve
                tools that don't talk to each other — and what the exact same
                capability costs on one platform that actually does.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
              {/* LEFT: Current duct-taped stack with real prices */}
              <div className="rounded-[20px] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
                <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#B91C1C]">
                    What You're Paying Now
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[#64748B]">
                    List prices, 2026
                  </p>
                </div>

                <ul className="mt-5 divide-y divide-white/5 text-sm">
                  {[
                    { tool: "HubSpot CRM Starter", price: 20 },
                    { tool: "Mailchimp Standard", price: 50 },
                    { tool: "Calendly Teams", price: 16 },
                    { tool: "OpenPhone / Twilio", price: 75 },
                    { tool: "ClickFunnels Basic", price: 127 },
                    { tool: "Podium Core (reviews)", price: 289 },
                    { tool: "Intercom Essential (chat)", price: 74 },
                    { tool: "Zapier Professional", price: 50 },
                    { tool: "Hootsuite Professional", price: 99 },
                    { tool: "Wix Business Elite", price: 32 },
                    { tool: "Yext Listings", price: 99 },
                    { tool: "Kajabi Basic (courses)", price: 149 },
                  ].map(({ tool, price }) => (
                    <li
                      key={tool}
                      className="flex items-center justify-between py-2.5"
                    >
                      <span className="flex items-center gap-2.5 text-[#94A3B8]">
                        <span className="text-[#B91C1C]">✕</span>
                        <span className="line-through decoration-white/25">
                          {tool}
                        </span>
                      </span>
                      <span className="font-mono text-sm text-[#64748B]">
                        ${price}/mo
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 border-t border-white/15 pt-5">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#B91C1C]">
                        Stack Total
                      </p>
                      <p className="mt-1 text-xs text-[#64748B]">
                        And none of them talk to each other.
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-display text-3xl font-bold text-white line-through decoration-[#B91C1C]/80 decoration-[3px] sm:text-4xl">
                        $1,080
                      </p>
                      <p className="text-xs text-[#64748B]">/month · $12,960/yr</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT: Adaptation OS replacement with SAVINGS callout */}
              <div className="relative overflow-hidden rounded-[20px] border-2 border-accent bg-gradient-to-br from-accent/15 via-accent/5 to-transparent p-6 shadow-gold sm:p-8">
                <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />

                <p className="relative text-[10px] font-bold uppercase tracking-[0.28em] text-accent">
                  Replaced By One Platform
                </p>
                <h3 className="relative mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
                  Adaptation OS · Starter DIY
                </h3>

                <div className="relative mt-5 flex items-end gap-3">
                  <p className="font-display text-5xl font-bold text-accent sm:text-6xl">
                    $349<span className="text-3xl">.90</span>
                  </p>
                  <p className="pb-2 text-sm text-[#94A3B8]">
                    /month
                    <br />
                    <span className="text-xs text-[#64748B]">$4,198.80/yr</span>
                  </p>
                </div>

                {/* SAVINGS — the hero number */}
                <div className="relative mt-6 rounded-xl border border-accent/40 bg-navy/60 p-5 text-center">
                  <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-accent">
                    You Save
                  </p>
                  <p className="mt-2 font-display text-4xl font-bold text-white sm:text-5xl">
                    $730<span className="text-2xl text-accent">.10</span>
                    <span className="text-base font-normal text-[#94A3B8]">
                      /mo
                    </span>
                  </p>
                  <p className="mt-1 text-sm font-semibold text-accent">
                    $8,761.20 per year
                  </p>
                  <p className="mt-2 text-xs text-[#94A3B8]">
                    Based on Starter DIY. Growth and Scale tiers save even more.
                  </p>
                </div>

                <p className="relative mt-5 text-sm leading-relaxed text-[#94A3B8]">
                  Plus you get everything your old stack <em>couldn't</em> do:
                  AI phone receptionist, AI chat agent on every channel,
                  workflow automation with if/then branching, and a branded
                  mobile app — on one login, one bill, one team supporting you.
                </p>

                <a
                  href="#plans"
                  className="relative mt-6 inline-flex items-center justify-center gap-2 rounded-sm border-2 border-accent bg-accent px-6 py-3 text-xs font-bold uppercase tracking-[0.22em] text-navy shadow-gold transition-all hover:bg-transparent hover:text-accent"
                >
                  See All Plans &amp; Savings
                </a>
              </div>
            </div>

            <p className="mt-8 text-center text-xs uppercase tracking-[0.26em] text-[#64748B]">
              Prices above pulled from public list pricing as of 2026. Your actual savings may be higher.
            </p>
          </div>
        </section>

        {/* ═════════════════════════════════════════════════════════════════ */}
        {/* WHAT'S INCLUDED COMPARISON TABLE (GHL-style, 4-col)                */}
        {/* ═════════════════════════════════════════════════════════════════ */}
        <section className="section-dark py-16 sm:py-20">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">What's Included With Adaptation OS</p>
              <h2 className="mt-3 h-display text-2xl font-bold text-white sm:text-3xl lg:text-[2.25rem]">
                Fifteen features. One login. <span className="text-accent">One price.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-[#94A3B8]">
                Here's what other businesses pay for each piece — and what you'd
                normally stitch together to replicate it. Adaptation OS includes
                all of it.
              </p>
            </div>

            <div className="mt-10 overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.03]">
              {/* Header row */}
              <div className="grid grid-cols-[1.4fr_1.5fr_0.9fr_0.8fr] items-center gap-3 border-b border-white/10 bg-white/[0.04] px-4 py-3 sm:px-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#64748B]">
                  Feature
                </p>
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#64748B]">
                  Replaces
                </p>
                <p className="text-right text-[10px] font-bold uppercase tracking-[0.22em] text-[#64748B] sm:text-left">
                  Other Tools
                </p>
                <p className="text-right text-[10px] font-bold uppercase tracking-[0.22em] text-accent">
                  Adaptation OS
                </p>
              </div>

              {/* Rows */}
              {[
                { feature: "CRM & Pipeline Management", replaces: "HubSpot · Salesforce · Pipedrive", price: "$20–$1,600/mo" },
                { feature: "Unlimited Sales Funnels", replaces: "ClickFunnels · Leadpages · Unbounce", price: "$97–$297/mo" },
                { feature: "Website Builder", replaces: "Wix · Squarespace · WordPress Hosting", price: "$27–$49/mo" },
                { feature: "Surveys & Forms", replaces: "Typeform · JotForm · SurveyMonkey", price: "$29–$99/mo" },
                { feature: "Email Marketing", replaces: "Mailchimp · ActiveCampaign · Klaviyo", price: "$50–$200/mo" },
                { feature: "2-Way SMS Marketing", replaces: "Twilio · OpenPhone · Textedly", price: "$75–$149/mo" },
                { feature: "Booking & Appointments", replaces: "Calendly · Acuity · Cal.com", price: "$16–$39/mo" },
                { feature: "Workflow Automation", replaces: "Zapier · Make · n8n", price: "$50–$200/mo" },
                { feature: "Courses & Memberships", replaces: "Kajabi · Teachable · Thinkific", price: "$149–$399/mo" },
                { feature: "Call Tracking", replaces: "CallRail · WhatConverts", price: "$45–$145/mo" },
                { feature: "Reputation Management", replaces: "Podium · BirdEye · Grade.us", price: "$289–$399/mo" },
                { feature: "Tracking & Analytics", replaces: "Databox · Whatagraph", price: "$49–$249/mo" },
                { feature: "Communities", replaces: "Circle · Mighty Networks · Skool", price: "$89–$199/mo" },
                { feature: "Document Signing", replaces: "DocuSign · PandaDoc · HelloSign", price: "$25–$75/mo" },
                { feature: "White-Labeled Mobile App", replaces: "Unique to HighLevel / AO", price: "$2,500+ dev cost" },
              ].map((row) => (
                <div
                  key={row.feature}
                  className="grid grid-cols-[1.4fr_1.5fr_0.9fr_0.8fr] items-center gap-3 border-b border-white/5 px-4 py-3 transition-colors hover:bg-white/[0.02] sm:px-6"
                >
                  <p className="text-sm font-semibold text-white">{row.feature}</p>
                  <p className="text-xs leading-relaxed text-[#64748B] line-through decoration-[#B91C1C]/50">
                    {row.replaces}
                  </p>
                  <p className="text-right font-mono text-xs text-[#64748B] sm:text-left">
                    {row.price}
                  </p>
                  <div className="flex justify-end">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                  </div>
                </div>
              ))}

              {/* Overall price anchor row (GHL's key move) */}
              <div className="grid grid-cols-[1.4fr_1.5fr_0.9fr_0.8fr] items-center gap-3 bg-accent/10 px-4 py-5 sm:px-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-accent">
                  Overall Price
                </p>
                <p className="text-xs text-[#94A3B8]">
                  If you bought each piece separately
                </p>
                <p className="text-right font-display text-xl font-bold text-white line-through decoration-[#B91C1C]/80 sm:text-left">
                  $1,080+/mo
                </p>
                <p className="text-right font-display text-2xl font-bold text-accent sm:text-3xl">
                  $349.90
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href="#plans"
                className="inline-flex items-center justify-center gap-2 rounded-sm border-2 border-accent bg-accent px-6 py-3 text-xs font-bold uppercase tracking-[0.22em] text-navy shadow-gold transition-all hover:bg-transparent hover:text-accent"
              >
                Start Today · Live in Minutes
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-sm border-2 border-white/70 px-6 py-3 text-xs font-bold uppercase tracking-[0.22em] text-white transition-all hover:bg-white hover:text-navy"
              >
                Book A Live Demo
              </a>
            </div>
          </div>
        </section>

        {/* ═════════════════════════════════════════════════════════════════ */}
        {/* PHOENIX OFFICE                                                     */}
        {/* ═════════════════════════════════════════════════════════════════ */}
        <section className="section-cream py-20 sm:py-24">
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-stretch gap-10 px-6 sm:px-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative min-h-[340px] overflow-hidden rounded-[24px] border border-[#0F172A]/10 shadow-lift">
              <Image
                src="/images/al-hq-daytime.webp"
                alt="Adaptation Living LLC headquarters — Bank of America Tower, Uptown Phoenix AZ"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-accent">
                  Uptown Phoenix
                </p>
                <p className="mt-1 font-display text-2xl font-bold">
                  Bank of America Tower · 5th Floor
                </p>
              </div>
            </div>
            <div className="rounded-[24px] border border-[#0F172A]/10 bg-white p-8 shadow-soft sm:p-10">
              <div className="mb-5 flex flex-wrap gap-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#0F172A]/70">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#0F172A]/10 bg-[#0F172A]/[0.03] px-3 py-1.5">
                  <Building2 className="h-3.5 w-3.5 text-accent" />
                  3030 N Central Ave · Suite 507
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#0F172A]/10 bg-[#0F172A]/[0.03] px-3 py-1.5">
                  <CalendarCheck className="h-3.5 w-3.5 text-accent" />
                  In-Person Demos Available
                </span>
              </div>
              <h2 className="h-display text-3xl font-bold text-[#0F172A] sm:text-4xl">
                A headquartered team. Not a reseller.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#475569]">
                Adaptation Living is a veteran-owned technology company
                headquartered on the fifth floor of the Bank of America Tower in
                Uptown Phoenix. Clients partner with a real firm — a permanent
                office, a full team, and the operational discipline to deploy
                and support every system we sell. Phoenix-area leaders are
                welcome to meet in our office, see Adaptation OS running live,
                and review the engagement plan in person.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-sm border-2 border-accent bg-accent px-6 py-3 text-xs font-bold uppercase tracking-[0.22em] text-navy shadow-gold transition-all hover:bg-transparent hover:text-accent"
                >
                  Book A Demo
                </a>
                <a
                  href="tel:6232191237"
                  className="inline-flex items-center justify-center gap-2 rounded-sm border-2 border-[#0F172A]/80 bg-transparent px-6 py-3 text-xs font-bold uppercase tracking-[0.22em] text-[#0F172A] transition-all hover:bg-[#0F172A] hover:text-white"
                >
                  Call 623-219-1237
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#2563EB]/40 to-transparent" />

        {/* ═════════════════════════════════════════════════════════════════ */}
        {/* PRICING TEASER                                                     */}
        {/* ═════════════════════════════════════════════════════════════════ */}
        <section id="plans" className="section-cream py-20 sm:py-24">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">Pricing</p>
              <h2 className="mt-3 h-display text-3xl font-bold text-[#0F172A] sm:text-4xl lg:text-5xl">
                One Platform. Two Paths. Six Plans.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#475569]">
                Done-For-You: we build, configure, train, and support the
                entire system. Self-Serve: same platform, you drive. Every
                tier unlocks the full Adaptation OS platform — tiers
                differentiate on user count, setup depth, and support level.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {[
                {
                  name: "Starter",
                  setup: "$1,500",
                  dfy: "$194.90",
                  diy: "$349.90",
                  users: "3 users",
                  highlight: false,
                  copy: "CRM, calendars, forms, basic automation, email support. For solo operators and early teams ready to stop duct-taping their stack.",
                },
                {
                  name: "Growth",
                  setup: "$2,500",
                  dfy: "$394.90",
                  diy: "$597.90",
                  users: "5 users",
                  highlight: true,
                  copy: "Everything in Starter plus AI Voice + Chat agents, industry workflows, priority support, custom reporting. The sweet spot for 90% of businesses.",
                },
                {
                  name: "Scale",
                  setup: "$5,000",
                  dfy: "$694.90",
                  diy: "$997.90",
                  users: "10 users",
                  highlight: false,
                  copy: "Everything in Growth plus multi-location config, custom API integrations, team training, dedicated support contact. For multi-location operators.",
                },
              ].map((plan) => (
                <div
                  key={plan.name}
                  className={`relative flex flex-col rounded-[24px] p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift ${
                    plan.highlight
                      ? "border-2 border-accent bg-white ring-2 ring-accent/30"
                      : "border border-[#0F172A]/10 bg-white"
                  }`}
                >
                  {plan.highlight && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-[9px] font-bold uppercase tracking-[0.28em] text-navy">
                      Most Popular
                    </span>
                  )}
                  <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-accent">
                    {plan.name} · {plan.users}
                  </p>
                  <div className="mt-4 border-b border-[#0F172A]/10 pb-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#0F172A]/60">
                      Done-For-You
                    </p>
                    <p className="mt-1 font-display text-3xl font-bold text-[#0F172A]">
                      {plan.setup}
                      <span className="text-sm font-normal text-[#0F172A]/60"> setup</span>
                    </p>
                    <p className="text-sm text-[#0F172A]/70">
                      + <span className="font-semibold text-[#0F172A]">{plan.dfy}</span>/mo
                    </p>
                  </div>
                  <div className="pt-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#0F172A]/60">
                      Self-Serve
                    </p>
                    <p className="mt-1 font-display text-2xl font-bold text-[#0F172A]">
                      {plan.diy}
                      <span className="text-sm font-normal text-[#0F172A]/60">/mo</span>
                    </p>
                    <p className="text-sm text-[#0F172A]/70">
                      No setup fee · Instant access
                    </p>
                  </div>
                  <p className="mt-5 flex-1 text-sm leading-relaxed text-[#475569]">
                    {plan.copy}
                  </p>
                  <a
                    href="/services"
                    className={`mt-6 inline-flex items-center justify-center gap-2 rounded-sm border-2 px-6 py-3 text-xs font-bold uppercase tracking-[0.22em] transition-all ${
                      plan.highlight
                        ? "border-accent bg-accent text-navy shadow-gold hover:bg-transparent hover:text-accent"
                        : "border-[#0F172A]/80 bg-transparent text-[#0F172A] hover:bg-[#0F172A] hover:text-white"
                    }`}
                  >
                    View {plan.name} Details
                  </a>
                </div>
              ))}
            </div>

            <p className="mt-10 text-center text-sm text-[#475569]">
              All plans include the full platform — AI agents, CRM, automation,
              website, reviews, listings, and reporting. Additional users:
              $50/mo each. One-time credits included at signup to cover typical
              first-month SMS, email, and AI usage.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-sm border-2 border-accent bg-accent px-7 py-3.5 text-xs font-bold uppercase tracking-[0.22em] text-navy shadow-gold transition-all hover:bg-transparent hover:text-accent"
              >
                Full Pricing &amp; Feature Comparison
              </a>
              <a
                href="/intake"
                className="inline-flex items-center justify-center gap-2 rounded-sm border-2 border-[#0F172A]/80 px-7 py-3.5 text-xs font-bold uppercase tracking-[0.22em] text-[#0F172A] transition-all hover:bg-[#0F172A] hover:text-white"
              >
                Book A Setup Call
              </a>
            </div>
          </div>
        </section>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#2563EB]/40 to-transparent" />

        {/* ═════════════════════════════════════════════════════════════════ */}
        {/* PROCESS                                                            */}
        {/* ═════════════════════════════════════════════════════════════════ */}
        <section className="section-cream py-20 sm:py-24">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">How We Work</p>
              <h2 className="mt-3 h-display text-3xl font-bold text-[#0F172A] sm:text-4xl">
                From First Call to Live System in Two to Three Weeks.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#475569]">
                A clear, phased process with direct access to the people doing
                the work. No account managers. No ticket queues.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["01", "Reach Out", "Call, email, or submit intake. A senior team member responds within hours."],
                ["02", "Map Your Needs", "We identify what's broken, what it's costing you, and what the system must do."],
                ["03", "Build & Deploy", "Your CRM, AI agents, workflows, and website — configured, tested, launched."],
                ["04", "Support & Scale", "Post-launch we tune, maintain, and expand as your business grows."],
              ].map(([step, heading, copy]) => (
                <div key={step} className="rounded-[22px] border border-[#0F172A]/10 bg-white p-7 text-center shadow-soft">
                  <p className="font-display text-4xl font-bold text-accent">{step}</p>
                  <h3 className="mt-3 font-display text-lg font-bold text-[#0F172A]">
                    {heading}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#475569]">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═════════════════════════════════════════════════════════════════ */}
        {/* INDUSTRY EXPERIENCE                                                */}
        {/* ═════════════════════════════════════════════════════════════════ */}
        <section className="section-cream border-t border-[#0F172A]/10 py-14 text-center">
          <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
            <p className="eyebrow">Experience Across Industries That Demand Precision</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-display text-sm text-[#0F172A]/75">
              <span>Semiconductor Manufacturing</span>
              <span className="text-accent">·</span>
              <span>Data Center Engineering</span>
              <span className="text-accent">·</span>
              <span>Energy &amp; Remote Systems</span>
              <span className="text-accent">·</span>
              <span>Financial Technology</span>
              <span className="text-accent">·</span>
              <span>Higher Education Infrastructure</span>
            </div>
            <p className="mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-[#475569]">
              Our team brings discipline from{" "}
              <strong className="text-[#0F172A]">Intel</strong>,{" "}
              <strong className="text-[#0F172A]">Apple</strong>,{" "}
              <strong className="text-[#0F172A]">Arizona State University</strong>,{" "}
              <strong className="text-[#0F172A]">ConocoPhillips</strong>,{" "}
              <strong className="text-[#0F172A]">JPMorgan Chase</strong>, and{" "}
              <strong className="text-[#0F172A]">Wells Fargo</strong> — combined
              with five years building AI-powered business operating systems for
              small and mid-sized companies since 2021.
            </p>
          </div>
        </section>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#2563EB]/40 to-transparent" />

        {/* ═════════════════════════════════════════════════════════════════ */}
        {/* FAQ                                                                */}
        {/* ═════════════════════════════════════════════════════════════════ */}
        <section id="faq" className="section-cream py-20 sm:py-24">
          <div className="mx-auto max-w-[900px] px-6 sm:px-8">
            <div className="text-center">
              <p className="eyebrow">Common Questions</p>
              <h2 className="mt-3 h-display text-3xl font-bold text-[#0F172A] sm:text-4xl">
                Everything You'd Ask on a Discovery Call.
              </h2>
            </div>
            <div className="mt-10">
              {faqs.map((item) => (
                <details key={item.q} className="group border-b border-[#0F172A]/10 py-2">
                  <summary className="flex cursor-pointer select-none items-center justify-between py-4 text-base font-semibold text-[#0F172A] sm:text-lg">
                    <span className="pr-6">{item.q}</span>
                    <span className="shrink-0 text-2xl text-accent transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="pb-5 pr-8 text-sm leading-relaxed text-[#475569] sm:text-base">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
            <p className="mt-8 text-center text-sm text-[#0F172A]/70">
              Still have questions? Call us directly at{" "}
              <a href="tel:6232191237" className="font-semibold text-accent hover:underline">
                623-219-1237
              </a>
            </p>
          </div>
        </section>

        {/* ═════════════════════════════════════════════════════════════════ */}
        {/* INTEGRATIONS MARQUEE — scrolling partner/integration logos        */}
        {/* ═════════════════════════════════════════════════════════════════ */}
        <section className="section-cream border-t border-[#0F172A]/10 py-14 sm:py-16">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
            <div className="text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#0F172A]/60 sm:text-[11px]">
                Native Integrations · 200+ Partners
              </p>
              <h2 className="mt-3 h-display text-xl font-bold text-[#0F172A] sm:text-2xl lg:text-[1.75rem]">
                The tools you already use — connected in one login.
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[#475569]">
                Adaptation OS plugs into Stripe, Google, Meta, QuickBooks, Shopify,
                Zoom, Slack, and 200+ more — no Zapier required.
              </p>
            </div>

            {/* Scrolling marquee — duplicated track for seamless loop */}
            <div className="relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
              <div className="logo-marquee flex w-max items-center gap-12 sm:gap-16">
                {Array.from({ length: 2 }).flatMap((_, copy) =>
                  [
                    "67ab96a506eacd2a0b72e015",
                    "6708273f16989c97e93c88f4",
                    "67ab96a5eeb737f0f46d445b",
                    "67abd58650fb000ed8851f30",
                    "67af641f237ce2563df82508",
                    "67ab96a572d42b2bbdab113b",
                    "67ab96a579284bbe3b6a77ac",
                    "67ab96a579284bdb1a6a77ab",
                    "67ab96a5ee6da9493235043e",
                    "67ab96a5ee6da9500a35043d",
                    "67ab96a506eacd595072e016",
                    "67ab96a534b29afa9dca6433",
                    "67ab96a537d82f92fceb7e3d",
                    "67ab96a54325e150f16636dc",
                    "67ab96a534b29a2b24ca6434",
                    "67ab96a579284b08c36a77ad",
                    "67ab96a5ee6da9160435043f",
                    "67ab96a534b29a1b3eca6435",
                    "67ab96a5f3bda8b1b50e5c3e",
                  ].map((id) => {
                    const src =
                      id === "6708273f16989c97e93c88f4"
                        ? `https://images.leadconnectorhq.com/image/f_webp/q_80/r_400/u_https://assets.cdn.filesafe.space/knES3eSWYIsc5YSZ3YLl/media/${id}.png`
                        : `https://images.leadconnectorhq.com/image/f_webp/q_80/r_400/u_https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/${id}.png`;
                    return (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        key={`${copy}-${id}`}
                        src={src}
                        alt="Integration partner"
                        aria-hidden={copy === 1 ? true : undefined}
                        loading="lazy"
                        className="h-10 w-auto shrink-0 object-contain opacity-80 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0 sm:h-12"
                      />
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ═════════════════════════════════════════════════════════════════ */}
        {/* FINAL CTA                                                          */}
        {/* ═════════════════════════════════════════════════════════════════ */}
        <section className="section-dark-radial py-20 text-center sm:py-24">
          <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
            <p className="eyebrow">Ready When You Are</p>
            <h2 className="mt-3 h-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Your Business, Running on One System.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#94A3B8] sm:text-lg">
              Adaptation OS replaces 12+ subscriptions with a single platform —
              AI phone, AI chat, CRM, workflows, website, reviews, listings,
              and more — starting at $194.90/mo with setup or $349.90/mo
              self-serve. Deployed and supported by a veteran-owned team in
              Phoenix.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm">
              <a href="tel:6232191237" className="flex items-center gap-2 font-semibold text-white hover:text-accent">
                <Phone className="h-4 w-4 text-accent" /> 623-219-1237
              </a>
              <a href="mailto:info@adaptationliving.com" className="flex items-center gap-2 font-semibold text-white hover:text-accent">
                <Mail className="h-4 w-4 text-accent" /> info@adaptationliving.com
              </a>
              <span className="flex items-center gap-2 font-semibold text-white">
                <MapPinned className="h-4 w-4 text-accent" />
                3030 N Central Ave · Suite 507 · Phoenix, AZ 85012
              </span>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="/services"
                className="rounded-sm border-2 border-accent bg-accent px-7 py-3.5 text-xs font-bold uppercase tracking-[0.22em] text-navy shadow-gold transition-all hover:bg-transparent hover:text-accent"
              >
                See Plans &amp; Pricing
              </a>
              <a
                href="/contact"
                className="rounded-sm border-2 border-white/70 bg-transparent px-7 py-3.5 text-xs font-bold uppercase tracking-[0.22em] text-white transition-all hover:bg-white hover:text-navy"
              >
                Book A Live Demo
              </a>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#64748B]">
              <span>Veteran-Owned · VOSB</span>
              <span>·</span>
              <span>SAM.gov Registered · CAGE 95WK4</span>
              <span>·</span>
              <span>NAICS 541511 · 541512</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
