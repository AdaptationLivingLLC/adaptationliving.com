import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import {
  BrainCircuit,
  Calendar,
  CheckCircle2,
  CreditCard,
  Globe,
  MessageSquare,
  Mic,
  Phone,
  Scale,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import { SeoGraderForm } from "../../components/seo-grader-form";

const title = "Adaptation Living LLC — AI Automation Phoenix AZ";
const description =
  "Adaptation Living is what successful businesses do. Veteran-founded AI automation studio in Phoenix, AZ. AI voice and chat agents, custom websites, CRM, review automation, and follow-up workflows for law firms, mitigation specialists, and small businesses.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: [
    "AI automation Phoenix AZ",
    "AI voice agent for small business",
    "AI receptionist for law firms",
    "CRM automation Phoenix",
    "business automation platform",
    "review management automation",
    "web development Phoenix AZ",
    "mitigation specialist software",
    "criminal defense AI intake",
    "veteran-owned tech Phoenix",
    "VOSB web development",
    "Adaptation Living LLC",
    "small business AI agency",
    "privileged line intake",
    "automated follow-up workflows",
  ],
  openGraph: {
    type: "website",
    siteName: "Adaptation Living LLC",
    locale: "en_US",
    title,
    description,
    url: "https://www.adaptationliving.com",
    images: [
      {
        url: "https://www.adaptationliving.com/images/og-share-2026-04-27.jpg",
        width: 1200,
        height: 630,
        alt: "Adaptation Living LLC — AI, Automation & Web Development for Small Business",
      },
    ],
  },
  twitter: {
    title,
    description,
    images: ["https://www.adaptationliving.com/images/og-share-2026-04-27.jpg"],
  },
  alternates: {
    canonical: "https://www.adaptationliving.com",
    languages: {
      en: "https://www.adaptationliving.com",
      es: "https://www.adaptationliving.com/es",
      "x-default": "https://www.adaptationliving.com",
    },
  },
};

// ============================================================
// Data
// ============================================================

const problems = [
  {
    icon: MessageSquare,
    title: "Missed leads die in your inbox until Monday",
    body:
      "After-hours inquiries from your website, phone, or social channels sit untouched for hours — sometimes days — while your competitor's AI already booked the consultation.",
  },
  {
    icon: Phone,
    title: "Your phone goes to voicemail at the worst possible time",
    body:
      "60% of law firms don't answer incoming calls. 80% of after-hours voicemails never get a callback. Our AI voice agents answer every call in a human voice, 24 hours a day, 7 days a week, in English and Spanish.",
  },
  {
    icon: Workflow,
    title: "Your tech stack is a mess of disconnected tools",
    body:
      "CRM in one place, email marketing in another, calendar in a third, reviews in a fourth, social media scheduling in a fifth. Nothing talks to anything else. One bill. One login. One platform. Everything connected.",
  },
  {
    icon: TrendingUp,
    title: "Your follow-up is manual and inconsistent",
    body:
      "Prospects who don't hear back in 24 hours have already hired someone else. Our workflow automation follows up by Short Message Service (SMS), email, and phone for up to 14 days — in your voice, on your schedule, until the prospect books or opts out.",
  },
  {
    icon: Star,
    title: "Your reviews pile up unanswered",
    body:
      "Every unanswered review tanks next month's intake. Every missed review request is a missed case. Our review automation requests reviews after every closed matter, responds to new reviews in your voice, and protects your online reputation automatically.",
  },
  {
    icon: Globe,
    title: "Your website doesn't rank, doesn't convert, or doesn't exist",
    body:
      "We build custom websites, fully optimized for Search Engine Optimization (SEO) per industry standards — not just for Google, but for every search engine and directory your clients actually use. Built to convert. Built to rank. Built to run.",
  },
];

const services = [
  {
    icon: Globe,
    title: "Custom website, fully SEO-optimized",
    body:
      "Every client has the option of a custom-built website designed for their specific industry. Fully optimized per full industry standards — not just Google, but Bing, DuckDuckGo, Yahoo, Apple Maps, Yelp, and every major directory. Mobile-responsive. Conversion-focused. Built to rank and built to run.",
  },
  {
    icon: BrainCircuit,
    title: "Custom AI agents and AI employees",
    body:
      "Voice agents that answer every call. Chat agents that handle your website, SMS, Facebook, and Instagram. Intake agents that conduct structured conversations with new prospects. Follow-up agents that work leads for 14 days without missing a beat. Every AI is trained on your business, your voice, and your workflows.",
  },
  {
    icon: Users,
    title: "Full social media setup and management",
    body:
      "We build and manage your presence on Facebook, Instagram, LinkedIn, Google Business Profile, and Yelp. Profile setup, optimization, posting schedules, and automated content generation. Your brand shows up everywhere your clients are looking.",
  },
  {
    icon: Target,
    title: "Customer Relationship Management (CRM)",
    body:
      "One dashboard. Every lead, every client, every conversation, every note, every document, every invoice. Synced across your phone, your desktop, and your team. Integrated with your calendar, your email, your phone system, and your website.",
  },
  {
    icon: Zap,
    title: "Automated follow-up workflows",
    body:
      "Every new lead enters an automated follow-up sequence — SMS, email, phone, and voicemail — that runs for up to 14 days or until the prospect books or opts out. No more leads dying in your inbox. No more manual reminders. Every lead gets worked every time.",
  },
  {
    icon: Star,
    title: "Review and reputation management",
    body:
      "Automated review requests after every closed matter, closed sale, or completed service. Automated responses to every new review. Real-time reputation monitoring across Google, Yelp, Facebook, and industry-specific review platforms. Your online presence protected while you sleep.",
  },
  {
    icon: Calendar,
    title: "Appointment booking and calendar management",
    body:
      "Integrated calendar booking on your website, via SMS, via Facebook, and via Google Business Profile. Clients book themselves directly into your available windows. Automatic confirmations, reminders, and no-show follow-up.",
  },
  {
    icon: CreditCard,
    title: "Payments and invoicing",
    body:
      "Integrated payment processing through Stripe or your preferred processor. Invoices, payment links, recurring subscriptions, and payment plans — all managed inside one platform.",
  },
  {
    icon: Mic,
    title: "Email and SMS marketing campaigns",
    body:
      "Segment your audience, build custom campaigns, automate drip sequences, and measure what's actually working. Built-in unsubscribe management, deliverability monitoring, and compliance with A2P 10DLC and Controlling the Assault of Non-Solicited Pornography And Marketing (CAN-SPAM) requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Full configuration and ongoing support",
    body:
      "We configure everything for your business from day one. We train your team. We respond to questions. We make changes as your business evolves. You're not handed a blank platform and wished good luck — you're handed a finished, running system ready to use.",
  },
];

const legalServices = [
  {
    title: "Registered privileged line intake",
    body:
      "Your office line, registered as a privileged legal communication number with correctional vendors like Securus and ViaPath, answered 24/7 by an AI voice agent configured specifically for your work. Inmate calls come through on your registered line with no collect-call charges, no facility monitoring, and direct routing to your intake system.",
  },
  {
    title: "Structured intake conversations",
    body:
      "The AI conducts real conversations with your clients — not decision trees, not pre-recorded menus. It captures name, facility, case number, attorney, family contacts, immediate concerns, and begins building the life history file from the very first call. Every conversation transcribed and filed automatically.",
  },
  {
    title: "Priority flagging",
    body:
      "Urgent matters — suicidal ideation, medical emergencies, new charges, imminent court dates, safety threats — get texted to your cell phone immediately. Non-urgent matters go into your morning digest. You never miss an emergency again.",
  },
  {
    title: "Bilingual support",
    body:
      "Native Spanish-language handling for Spanish-speaking clients and families. Calls captured in the original language with English transcripts generated automatically.",
  },
  {
    title: "Family member routing",
    body:
      "Calls from registered family members of your incarcerated clients get prioritized and summarized in a daily digest. Your paralegal stops spending hours every week explaining the same hearing schedule to the same three families.",
  },
  {
    title: "Full matter documentation",
    body:
      "Every call, every message, every transcript, every note, every document — filed under the correct matter number, searchable, and available to you and your team from any device.",
  },
  {
    title: "Secure storage and access controls",
    body:
      "Encryption at rest and in transit, role-based permissions, full audit logging, and retention policies configured to match your state bar ethics obligations. Health Insurance Portability and Accountability Act (HIPAA)-compliant tier available for clients whose work crosses into covered health information.",
  },
  {
    title: "Integration with your existing systems",
    body:
      "Clio, MyCase, Practice Panther, and other legal practice management systems integrate with our proprietary software. No forced migration. No duplicate data entry.",
  },
];

const testimonials = [
  {
    name: "Shahpoor Asher",
    role: "Owner of Two California Law Firms",
    quote:
      "Before Adaptation Living, my business was spread across more platforms than I can count. Brandon rebuilt all of it from the ground up. He built three websites for me, set me up on our proprietary software, and handed me a finished, running product on day one. The AI agents he configured answer my incoming calls in a voice that sounds genuinely human, manage and automate my social media posts, and follow up on leads while I'm in court or with clients. I run two law firms in California, and after working with Brandon I wouldn't trust anyone else with my tech stack or use any other platform.",
  },
  {
    name: "Mayra Cazares",
    role: "Owner of Mayra's Boutique & Fajas, Glendale AZ",
    quote:
      "Brandon built my entire boutique website and even created a custom inventory app that I use right from my phone. I have over a thousand products and he made it so easy for me to manage everything. I just open the app, snap a photo, and add my items. He took the time to understand my business and what I actually needed. The website looks beautiful and professional, and my customers love it. He is very responsive and always goes above and beyond.",
  },
];

// ============================================================
// Schema JSON-LD
// ============================================================

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Adaptation Living LLC",
  url: "https://www.adaptationliving.com",
  logo: "https://www.adaptationliving.com/images/favicon-gold-a.png",
  description:
    "Veteran-owned AI automation, CRM, and web development studio in Phoenix, AZ. We build AI voice and chat agents, websites, CRM infrastructure, review automation, and follow-up workflows for small businesses, law firms, and mitigation specialists.",
  foundingDate: "2021",
  founder: { "@type": "Person", name: "Brandon Bible" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "3030 N Central Ave, Suite 507",
    addressLocality: "Phoenix",
    addressRegion: "AZ",
    postalCode: "85012",
    addressCountry: "US",
  },
  telephone: "+1-623-219-1237",
  email: "info@adaptationliving.com",
  sameAs: ["https://www.linkedin.com/company/adaptation-living"],
  knowsAbout: [
    "AI voice agents",
    "AI chat agents",
    "CRM automation",
    "Web development",
    "Review management",
    "Follow-up automation",
    "Small business AI",
    "Law firm intake automation",
    "Mitigation specialist software",
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.adaptationliving.com/#localbusiness",
  name: "Adaptation Living LLC",
  image: "https://www.adaptationliving.com/images/og-share-2026-04-27.jpg",
  url: "https://www.adaptationliving.com",
  telephone: "+1-623-219-1237",
  priceRange: "$497–$4,497/mo",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3030 N Central Ave, Suite 507",
    addressLocality: "Phoenix",
    addressRegion: "AZ",
    postalCode: "85012",
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 33.485, longitude: -112.074 },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "2",
  },
};

// Dual-typed so Google recognizes the platform as both a Product and a
// SoftwareApplication. Google's rich-results validator requires
// aggregateRating OR review on SoftwareApplication entities, plus
// applicationCategory and offers. All present below.
const reviewsSchema = {
  "@context": "https://schema.org",
  "@type": ["Product", "SoftwareApplication"],
  name: "Adaptation Living Platform",
  description:
    "AI automation, CRM, and web development platform built for small businesses, law firms, and mitigation specialists.",
  brand: { "@type": "Brand", name: "Adaptation Living LLC" },
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "CRM, Marketing Automation, AI Voice & Chat Agents",
  operatingSystem: "Web-based, iOS, Android",
  softwareVersion: "2026.04",
  url: "https://www.adaptationliving.com",
  offers: [
    {
      "@type": "Offer",
      name: "Launch — Self-Serve",
      price: "497",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "497",
        priceCurrency: "USD",
        unitText: "MONTH",
      },
      availability: "https://schema.org/InStock",
      url: "https://www.adaptationliving.com/pricing",
    },
    {
      "@type": "Offer",
      name: "Growth — Self-Serve",
      price: "997",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "997",
        priceCurrency: "USD",
        unitText: "MONTH",
      },
      availability: "https://schema.org/InStock",
      url: "https://www.adaptationliving.com/pricing",
    },
    {
      "@type": "Offer",
      name: "Scale — Self-Serve",
      price: "1997",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "1997",
        priceCurrency: "USD",
        unitText: "MONTH",
      },
      availability: "https://schema.org/InStock",
      url: "https://www.adaptationliving.com/pricing",
    },
  ],
  review: testimonials.map((t) => ({
    "@type": "Review",
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    author: { "@type": "Person", name: t.name },
    reviewBody: t.quote,
  })),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: String(testimonials.length),
    bestRating: "5",
    worstRating: "5",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "AI Automation, CRM, and Web Development",
  provider: { "@type": "Organization", name: "Adaptation Living LLC" },
  areaServed: {
    "@type": "State",
    name: "Arizona",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services",
    itemListElement: services.map((s, i) => ({
      "@type": "Offer",
      position: i + 1,
      itemOffered: { "@type": "Service", name: s.title, description: s.body },
    })),
  },
};

// ============================================================
// Page
// ============================================================

export default function HomePage() {
  return (
    <main id="main-content" className="relative">
      {/* JSON-LD Schemas for SEO */}
      <Script id="schema-organization" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(organizationSchema)}
      </Script>
      <Script id="schema-local-business" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(localBusinessSchema)}
      </Script>
      <Script id="schema-reviews" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(reviewsSchema)}
      </Script>
      <Script id="schema-service" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(serviceSchema)}
      </Script>

      {/* ========================= HERO ========================= */}
      <section
        aria-labelledby="hero-heading"
        className="relative overflow-hidden bg-[#0B1D3A] text-white"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(ellipse 900px 500px at 50% 0%, rgba(37,99,235,0.28) 0%, transparent 70%), radial-gradient(ellipse 600px 500px at 100% 100%, rgba(37,99,235,0.18) 0%, transparent 70%)",
          }}
        />


        <div className="relative mx-auto max-w-[1280px] px-6 sm:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14 items-center">
            <div>
              <span className="inline-block text-[10px] font-bold tracking-[0.32em] uppercase text-[#93C5FD] bg-[#2563EB]/15 border border-[#2563EB]/40 rounded-full px-4 py-1.5 mb-7">
                Veteran-Owned · Phoenix, AZ · Since 2021
              </span>
              <h1
                id="hero-heading"
                className="font-display text-[clamp(32px,5.2vw,58px)] font-extrabold leading-[1.04] tracking-[-0.025em]"
              >
                AI agents that answer every call,{" "}
                <span className="text-[#60A5FA]">every text</span>, every time.
              </h1>
              <p className="mt-6 text-[16px] lg:text-[18px] text-white/80 leading-relaxed max-w-[560px]">
                Phoenix-built. Veteran-run. Live in 14 days. Voice + chat
                agents that book appointments, qualify leads, and reply
                in seconds — 24/7, in English and Spanish.
              </p>

              {/* TILTED NEON SALE SIGN — the centerpiece, drop-shipped from the OG creative */}
              <div className="mt-10 mb-2 inline-block relative">
                <div
                  className="relative px-9 py-7 lg:px-14 lg:py-9 rounded-[20px] border-[3px] border-white/95 bg-gradient-to-br from-[#F472B6] via-[#EC4899] to-[#BE185D] transition-transform duration-300 hover:scale-[1.02]"
                  style={{
                    transform: "rotate(-7deg)",
                    boxShadow:
                      "0 0 0 4px rgba(236,72,153,0.30), 0 0 48px rgba(236,72,153,0.65), 0 0 110px rgba(244,114,182,0.55), 0 30px 60px -10px rgba(0,0,0,0.45)",
                  }}
                >
                  {/* Top eyebrow */}
                  <div className="text-center">
                    <span
                      className="inline-block text-[11px] lg:text-[14px] font-black tracking-[0.42em] uppercase text-white"
                      style={{
                        textShadow: "0 0 14px rgba(255,255,255,0.75)",
                      }}
                    >
                      ★ &nbsp;UNLIMITED&nbsp; ★
                    </span>
                  </div>

                  {/* Massive price */}
                  <div className="text-center mt-1 lg:mt-2 flex items-end justify-center">
                    <span
                      className="font-display font-black text-white leading-[0.85]"
                      style={{
                        fontSize: "clamp(78px, 12vw, 156px)",
                        letterSpacing: "-0.05em",
                        textShadow:
                          "0 0 32px rgba(255,255,255,0.55), 0 4px 0 rgba(0,0,0,0.22)",
                      }}
                    >
                      $397
                    </span>
                    <span
                      className="text-[26px] lg:text-[40px] font-extrabold text-white/95 ml-2 pb-3 lg:pb-4"
                      style={{
                        textShadow: "0 0 12px rgba(255,255,255,0.5)",
                      }}
                    >
                      /mo
                    </span>
                  </div>

                  {/* Bottom subtitle */}
                  <div className="text-center mt-2 lg:mt-3">
                    <span className="block text-[14px] lg:text-[19px] font-extrabold uppercase tracking-[0.18em] text-white">
                      AI Agents AND Usage
                    </span>
                    <span className="block text-[10px] lg:text-[12px] font-bold uppercase tracking-[0.36em] text-white/85 mt-1">
                      per month
                    </span>
                  </div>
                </div>

                {/* Burst star top-right */}
                <div
                  aria-hidden="true"
                  className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6 w-14 h-14 lg:w-20 lg:h-20 rounded-full bg-white flex items-center justify-center"
                  style={{
                    transform: "rotate(15deg)",
                    boxShadow:
                      "0 0 24px rgba(236,72,153,0.55), 0 8px 24px rgba(0,0,0,0.35)",
                  }}
                >
                  <span className="text-[10px] lg:text-[12px] font-black tracking-[0.18em] uppercase text-[#BE185D] leading-tight text-center">
                    NEW<br />OFFER
                  </span>
                </div>
              </div>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="/intake?plan=ai-agents-unlimited"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-[10px] bg-[#EC4899] text-white text-[13px] font-extrabold uppercase tracking-[0.14em] shadow-[0_0_32px_rgba(236,72,153,0.55),0_8px_28px_rgba(236,72,153,0.35)] hover:bg-[#DB2777] hover:-translate-y-0.5 transition-all duration-200"
                >
                  Start Now → $397/mo
                </a>
                <a
                  href="/demo"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-[10px] border-2 border-[#93C5FD]/40 text-[#93C5FD] text-[13px] font-bold uppercase tracking-[0.14em] hover:bg-[#2563EB]/15 hover:border-[#2563EB] hover:text-white transition-all duration-200"
                >
                  See it work
                </a>
              </div>

              {/* Scope-of-offer fine print — locks the $397 promise to AI agents only */}
              <p className="mt-5 max-w-[560px] text-[11px] leading-[1.55] text-white/55">
                <span className="text-white/75 font-semibold">What&apos;s included at $397/mo:</span>{" "}
                Unlimited AI voice agents, AI chat agents, and AI conversation
                agents — with unlimited usage. CRM, custom website, SEO,
                review management, calendar sync, and marketing automation are
                separate add-ons priced individually. See full pricing for
                bundles.
              </p>
            </div>

            {/* SEO Audit tool — right side of hero, unchanged form handler */}
            <div className="lg:pl-4">
              <div className="bg-white rounded-[20px] p-6 lg:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                <div className="mb-5">
                  <span className="inline-block text-[10px] font-bold tracking-[0.32em] uppercase text-[#2563EB] mb-2">
                    Free SEO Audit
                  </span>
                  <h2 className="font-display text-[20px] lg:text-[22px] font-extrabold text-[#0B1D3A] leading-tight tracking-[-0.01em]">
                    See where your business actually stands.
                  </h2>
                  <p className="mt-2 text-[13px] text-[#475569] leading-relaxed">
                    We analyze 50+ signals and show you what&apos;s helping,
                    hurting, and getting missed. No pitch. Just the data.
                  </p>
                </div>
                <SeoGraderForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expansion message — body copy directly under hero, sets up that $397 is just the entry point */}
      <section
        aria-label="What you can add to the AI agents starter plan"
        className="bg-gradient-to-b from-[#FEFCF8] via-[#FDF6EC] to-[#FEFCF8] py-9 lg:py-12 border-y border-[#0B1D3A]/5"
      >
        <div className="mx-auto max-w-[1100px] px-6 sm:px-8">
          <p className="text-center text-[15px] lg:text-[18px] text-[#334155] leading-[1.6] tracking-[0.005em]">
            <strong className="text-[#0B1D3A] font-extrabold">Start with AI agents.</strong>{" "}
            Add{" "}
            <span className="text-[#0B1D3A] font-semibold">CRM</span>,{" "}
            <span className="text-[#0B1D3A] font-semibold">website</span>,{" "}
            <span className="text-[#0B1D3A] font-semibold">SEO</span>,{" "}
            <span className="text-[#0B1D3A] font-semibold">reviews</span>,{" "}
            <span className="text-[#0B1D3A] font-semibold">calendar sync</span>, and{" "}
            <span className="text-[#0B1D3A] font-semibold">marketing automation</span>{" "}
            as you&apos;re ready.
          </p>
        </div>
      </section>

      {/* ========================= WHO WE ARE ========================= */}
      <section
        aria-labelledby="who-we-are-heading"
        className="bg-white py-20 lg:py-28"
      >
        <div className="mx-auto max-w-[920px] px-6 sm:px-8">
          <span className="inline-block text-[10px] font-bold tracking-[0.32em] uppercase text-[#2563EB] mb-5">
            Who We Are
          </span>
          <h2
            id="who-we-are-heading"
            className="font-display text-[clamp(28px,4.5vw,46px)] font-extrabold text-[#0B1D3A] leading-[1.1] tracking-[-0.02em]"
          >
            Adaptation Living is a <span className="text-[#2563EB]">verb.</span>
          </h2>
          <div className="mt-7 text-[16px] lg:text-[17px] leading-[1.75] text-[#334155] [&>p:not(:first-of-type)]:mt-6 [&>ul]:mt-6 [&>ul+p]:mt-6">
            <figure
              itemScope
              itemType="https://schema.org/ImageObject"
              className="float-none md:float-right md:ml-7 md:mb-3 mb-6 w-full md:w-[480px] lg:w-[560px]"
            >
              <div className="relative aspect-[16/9] overflow-hidden rounded-[16px] border border-[#2563EB]/15 shadow-[0_18px_44px_rgba(37,99,235,0.22),0_4px_10px_rgba(37,99,235,0.10)]">
                <Image
                  src="/images/al-hq-daytime.webp"
                  alt="Adaptation Living LLC headquarters in Phoenix AZ — the company monument sign at 3030 North Central Avenue, inside the Bank of America Tower."
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 560px"
                  loading="lazy"
                  itemProp="contentUrl"
                />
              </div>
              <meta itemProp="name" content="Adaptation Living LLC — Phoenix Headquarters" />
              <meta
                itemProp="description"
                content="Front entrance of Adaptation Living LLC at 3030 N Central Ave, Suite 507, Phoenix, AZ 85012 — Bank of America Tower, Midtown Phoenix."
              />
              <figcaption className="mt-2.5 text-center text-[11px] text-[#777B7E] leading-[1.5]">
                3030 N Central Ave · Suite 507 · Phoenix, AZ 85012
                <br />
                Bank of America Tower · Midtown Phoenix
              </figcaption>
            </figure>
            <p>
              It&apos;s what successful businesses do every single day — they
              adapt to new tools, new customer expectations, new competitors,
              new technology, new market conditions. They don&apos;t wait for
              the change. They build their operations to move with it.
            </p>
            <p>
              The businesses that don&apos;t do this don&apos;t survive. Not in
              2026. The pace is too fast now, and the data is brutal:
            </p>
            <ul className="space-y-3 pl-5 list-disc marker:text-[#2563EB]">
              <li>
                Leads are <strong className="text-[#0B1D3A]">21 times</strong>{" "}
                more likely to qualify when contacted within 5 minutes versus
                30 minutes.{" "}
                <em className="text-[#64748B]">
                  (MIT Lead Response Management Study, Dr. James Oldroyd)
                </em>
              </li>
              <li>
                Response within 5 minutes makes you{" "}
                <strong className="text-[#0B1D3A]">100 times</strong> more
                likely to connect with a prospect than waiting 30 minutes.{" "}
                <em className="text-[#64748B]">
                  (Harvard Business Review, &quot;The Short Life of Online
                  Sales Leads&quot;)
                </em>
              </li>
              <li>
                <strong className="text-[#0B1D3A]">78% of customers</strong> buy
                from the first business that responds.
              </li>
              <li>
                The average business takes{" "}
                <strong className="text-[#0B1D3A]">47 hours</strong> to respond
                to a lead. Most never respond at all.
              </li>
              <li>
                <strong className="text-[#0B1D3A]">60% of law firms</strong>{" "}
                don&apos;t even answer incoming calls from prospective clients.
                Of the firms that miss a call, only 20% return it.{" "}
                <em className="text-[#64748B]">
                  (Clio 2024 Legal Trends Report)
                </em>
              </li>
              <li>
                The average law firm spends{" "}
                <strong className="text-[#0B1D3A]">$649</strong> to generate a
                single lead — and then loses most of them to slow response.{" "}
                <em className="text-[#64748B]">(CallRail)</em>
              </li>
              <li>
                <strong className="text-[#0B1D3A]">80% of first-time callers</strong>{" "}
                who hit voicemail during off-hours never reconnect.{" "}
                <em className="text-[#64748B]">(Nxtbook)</em>
              </li>
            </ul>
            <p>
              This is what the gap looks like in real numbers. Businesses that
              respond in minutes compound. Businesses that respond in hours
              lose. Businesses that don&apos;t respond at all get quietly
              replaced.
            </p>
            <p>
              And don&apos;t even get me started on Artificial Intelligence
              (AI). Just know this — we deploy the most advanced and versatile
              AI solutions available to businesses your size. Voice agents that
              answer calls in a human voice at 3 AM. Chat agents that handle
              every channel your customers use. Workflow AI that builds
              automations from plain English. Content AI that writes in your
              voice. Review responders that protect your reputation while you
              sleep. Every one of them integrated into a single system, running
              in your brand, configured for your business.
            </p>
            <p>
              Adaptation Living exists to do that work for the businesses that
              don&apos;t have a Chief Information Officer, a marketing team, or
              a six-figure technology budget. We build the AI systems, intake
              infrastructure, and automated workflows that turn a 3-person law
              firm into something that competes with a 30-person one. We turn
              a solo mitigation specialist into an operation that looks and
              runs like a national firm. We give a Phoenix boutique the
              systems to ship nationwide.
            </p>
            <p>
              Since 2021, adaptation living is what we have done. For five
              years we have changed a million things to hold our own place in
              this world of business — new platforms, new AI models, new
              integrations, new ways of thinking about what a modern small
              business actually needs. Almost everything about how we operate
              has evolved multiple times over. But the one thing that has
              never changed is what drives us:{" "}
              <strong className="text-[#0B1D3A]">
                our love for our customers.
              </strong>{" "}
              We want every one of them to flourish and grow. That is the
              reason this company exists.
            </p>
            <p className="text-[#0B1D3A] font-semibold">
              Built by a U.S. Army Infantry veteran, where adaptation
              wasn&apos;t a theory. It was the job.
            </p>
            <p className="text-[20px] lg:text-[22px] font-display font-bold text-[#0B1D3A] pt-4">
              How is your business living?
            </p>
          </div>
        </div>
      </section>

      {/* ========================= PROBLEMS ========================= */}
      <section
        aria-labelledby="problems-heading"
        className="bg-white py-20 lg:py-28 border-t border-[#0B1D3A]/5"
      >
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-[10px] font-bold tracking-[0.32em] uppercase text-[#2563EB] mb-4">
              Where Businesses Bleed
            </span>
            <h2
              id="problems-heading"
              className="font-display text-[clamp(26px,4vw,42px)] font-extrabold text-[#0B1D3A] leading-[1.1] tracking-[-0.02em] max-w-[820px] mx-auto"
            >
              The problems our proprietary software solves
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {problems.map((p) => {
              const Icon = p.icon;
              return (
                <article
                  key={p.title}
                  className="group relative bg-white border border-[#2563EB]/15 rounded-[18px] p-7 lg:p-8 shadow-[0_10px_28px_rgba(37,99,235,0.14),0_2px_6px_rgba(37,99,235,0.08)] hover:shadow-[0_24px_56px_rgba(37,99,235,0.22),0_4px_10px_rgba(37,99,235,0.10)] hover:-translate-y-1 hover:border-[#2563EB]/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-[10px] bg-[#2563EB] text-white flex items-center justify-center mb-5 shadow-[0_6px_18px_rgba(37,99,235,0.3)]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-[17px] font-extrabold text-[#0B1D3A] leading-snug tracking-[-0.01em] mb-3">
                    {p.title}
                  </h3>
                  <p className="text-[14.5px] leading-[1.65] text-[#475569]">
                    {p.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================= TESTIMONIALS ========================= */}
      <section
        aria-labelledby="testimonials-heading"
        className="bg-white py-20 lg:py-28 border-t border-[#0B1D3A]/5"
      >
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-[10px] font-bold tracking-[0.32em] uppercase text-[#2563EB] mb-4">
              Real Clients · Verified Reviews
            </span>
            <h2
              id="testimonials-heading"
              className="font-display text-[clamp(26px,4vw,42px)] font-extrabold text-[#0B1D3A] leading-[1.1] tracking-[-0.02em]"
            >
              What our clients say
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <article
                key={t.name}
                itemScope
                itemType="https://schema.org/Review"
                className="bg-white border border-[#2563EB]/15 rounded-[20px] p-8 lg:p-10 shadow-[0_16px_44px_rgba(37,99,235,0.18),0_4px_10px_rgba(37,99,235,0.08)]"
              >
                <div className="flex items-center gap-1 mb-5" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B]"
                    />
                  ))}
                </div>
                <blockquote
                  itemProp="reviewBody"
                  className="text-[15px] lg:text-[16px] leading-[1.75] text-[#334155] italic"
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <footer className="mt-6 pt-6 border-t border-[#0B1D3A]/8">
                  <div
                    itemProp="author"
                    itemScope
                    itemType="https://schema.org/Person"
                    className="font-display font-extrabold text-[#0B1D3A] text-[16px]"
                  >
                    <span itemProp="name">{t.name}</span>
                  </div>
                  <div className="text-[13px] text-[#64748B] mt-1">
                    {t.role}
                  </div>
                  <div className="mt-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[#2563EB]">
                    ★★★★★ Verified Google Review
                  </div>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ========================= SERVICES ========================= */}
      <section
        aria-labelledby="services-heading"
        className="bg-white py-20 lg:py-28 border-t border-[#0B1D3A]/5"
      >
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-[10px] font-bold tracking-[0.32em] uppercase text-[#2563EB] mb-4">
              Everything Included
            </span>
            <h2
              id="services-heading"
              className="font-display text-[clamp(26px,4vw,42px)] font-extrabold text-[#0B1D3A] leading-[1.1] tracking-[-0.02em] max-w-[900px] mx-auto"
            >
              What every Adaptation Living client gets
            </h2>
            <p className="mt-5 text-[15px] lg:text-[16px] text-[#475569] leading-relaxed max-w-[720px] mx-auto">
              Every tier, every engagement, every build. You aren&apos;t
              handed a blank platform — you&apos;re handed a finished, running
              system ready to use.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <article
                  key={s.title}
                  className="group relative bg-white border border-[#2563EB]/15 rounded-[16px] p-7 shadow-[0_8px_24px_rgba(37,99,235,0.12),0_2px_6px_rgba(37,99,235,0.06)] hover:shadow-[0_20px_48px_rgba(37,99,235,0.2),0_4px_10px_rgba(37,99,235,0.10)] hover:-translate-y-1 hover:border-[#2563EB]/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-[10px] bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="font-display text-[16px] font-extrabold text-[#0B1D3A] leading-snug tracking-[-0.01em] mb-3">
                    {s.title}
                  </h3>
                  <p className="text-[14px] leading-[1.65] text-[#475569]">
                    {s.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================= LAW FIRM / MITIGATION SECTION ========================= */}
      <section
        aria-labelledby="legal-heading"
        className="relative overflow-hidden bg-[#0B1D3A] text-white py-20 lg:py-28"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse 800px 400px at 50% 0%, rgba(37,99,235,0.22) 0%, transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-[1100px] px-6 sm:px-8">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.32em] uppercase text-[#93C5FD] bg-[#2563EB]/15 border border-[#2563EB]/40 rounded-full px-4 py-1.5 mb-5">
              <Scale className="w-3.5 h-3.5" /> Legal Vertical
            </span>
            <h2
              id="legal-heading"
              className="font-display text-[clamp(26px,4vw,44px)] font-extrabold leading-[1.1] tracking-[-0.02em] max-w-[900px] mx-auto"
            >
              Built for law firms and{" "}
              <span className="text-[#60A5FA]">mitigation specialists</span>
            </h2>
            <p className="mt-6 text-[15px] lg:text-[16px] text-white/75 leading-relaxed max-w-[820px] mx-auto">
              For criminal defense attorneys, mitigation specialists, public
              defenders, private investigators, forensic social workers,
              expert witnesses, and post-conviction counsel working with
              incarcerated clients, we build specialized configurations of our
              proprietary software that handle:
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {legalServices.map((s, i) => (
              <article
                key={s.title}
                className="bg-white/4 border border-[#2563EB]/20 rounded-[14px] p-6 lg:p-7 backdrop-blur-sm hover:bg-white/[0.06] hover:border-[#2563EB]/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-9 h-9 rounded-[8px] bg-[#2563EB] text-white flex items-center justify-center font-extrabold text-[13px]">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="font-display text-[16px] font-extrabold text-white leading-snug tracking-[-0.01em] mb-2">
                      {s.title}
                    </h3>
                    <p className="text-[14px] leading-[1.65] text-white/70">
                      {s.body}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 rounded-[16px] border border-[#2563EB]/30 bg-[#2563EB]/10 p-7 lg:p-8 text-center">
            <p className="text-[15px] lg:text-[16px] text-white/85 leading-relaxed max-w-[780px] mx-auto">
              For mitigation specialists, court-appointed counsel, and anyone
              working with incarcerated clients under tight budgets and tight
              deadlines, this system turns{" "}
              <strong className="text-white">four hours of phone time</strong>{" "}
              per case in the first week of representation into{" "}
              <strong className="text-white">
                one hour of reviewing transcripts
              </strong>{" "}
              and a targeted follow-up call.
            </p>
          </div>
          <div className="mt-10 flex justify-center">
            <a
              href="/demo?vertical=criminal-defense"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-[10px] bg-[#2563EB] text-white text-[13px] font-bold uppercase tracking-[0.14em] shadow-[0_8px_24px_rgba(37,99,235,0.4)] hover:bg-[#1D4ED8] hover:-translate-y-0.5 transition-all duration-200"
            >
              Schedule a Criminal Defense Demo →
            </a>
          </div>
        </div>
      </section>

      {/* ========================= PRICING PREVIEW ========================= */}
      <section
        aria-labelledby="pricing-heading"
        className="bg-white py-20 lg:py-28 border-t border-[#0B1D3A]/5"
      >
        <div className="mx-auto max-w-[1100px] px-6 sm:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-[10px] font-bold tracking-[0.32em] uppercase text-[#2563EB] mb-4">
              Pricing
            </span>
            <h2
              id="pricing-heading"
              className="font-display text-[clamp(26px,4vw,42px)] font-extrabold text-[#0B1D3A] leading-[1.1] tracking-[-0.02em]"
            >
              Choose your engagement
            </h2>
            <p className="mt-5 text-[15px] lg:text-[16px] text-[#475569] leading-relaxed max-w-[720px] mx-auto">
              Every tier runs on our proprietary software — deployed in your
              brand, supported by a veteran-owned team in Uptown Phoenix.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Self-Serve */}
            <div className="border-2 border-[#0B1D3A]/10 rounded-[20px] p-8 bg-white">
              <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#2563EB] mb-2">
                Self-Serve
              </div>
              <h3 className="font-display text-[22px] font-extrabold text-[#0B1D3A] mb-1">
                You run it. We support you.
              </h3>
              <ul className="mt-5 space-y-3 text-[14px] text-[#334155]">
                <li className="flex justify-between gap-4 border-b border-[#0B1D3A]/6 pb-3">
                  <span>
                    <strong className="text-[#0B1D3A]">Launch</strong> · 3
                    users
                  </span>
                  <span className="text-[#2563EB] font-extrabold">$497/mo</span>
                </li>
                <li className="flex justify-between gap-4 border-b border-[#0B1D3A]/6 pb-3">
                  <span>
                    <strong className="text-[#0B1D3A]">Growth</strong> · 5
                    users
                  </span>
                  <span className="text-[#2563EB] font-extrabold">$997/mo</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span>
                    <strong className="text-[#0B1D3A]">Scale</strong> · up to
                    10 users
                  </span>
                  <span className="text-[#2563EB] font-extrabold">
                    $1,997/mo
                  </span>
                </li>
              </ul>
              <p className="mt-5 text-[12px] text-[#64748B]">
                One-time setup: $1,500 / $2,500 / $5,000.
              </p>
            </div>
            {/* Done-For-You */}
            <div className="relative border-2 border-[#2563EB] rounded-[20px] p-8 bg-gradient-to-b from-[#2563EB]/[0.04] to-white shadow-[0_12px_32px_rgba(37,99,235,0.12)]">
              <div className="absolute -top-3 left-8 text-[10px] font-bold uppercase tracking-[0.22em] text-white bg-[#2563EB] rounded-full px-3 py-1">
                Most Popular
              </div>
              <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#2563EB] mb-2">
                Done-For-You
              </div>
              <h3 className="font-display text-[22px] font-extrabold text-[#0B1D3A] mb-1">
                We run it. You focus on clients.
              </h3>
              <ul className="mt-5 space-y-3 text-[14px] text-[#334155]">
                <li className="flex justify-between gap-4 border-b border-[#0B1D3A]/6 pb-3">
                  <span>
                    <strong className="text-[#0B1D3A]">Launch DFY</strong> · 3
                    users
                  </span>
                  <span className="text-[#2563EB] font-extrabold">
                    $1,497/mo
                  </span>
                </li>
                <li className="flex justify-between gap-4 border-b border-[#0B1D3A]/6 pb-3">
                  <span>
                    <strong className="text-[#0B1D3A]">Growth DFY</strong> · 5
                    users
                  </span>
                  <span className="text-[#2563EB] font-extrabold">
                    $2,497/mo
                  </span>
                </li>
                <li className="flex justify-between gap-4">
                  <span>
                    <strong className="text-[#0B1D3A]">Scale DFY</strong> · up
                    to 10 users
                  </span>
                  <span className="text-[#2563EB] font-extrabold">
                    $4,497/mo
                  </span>
                </li>
              </ul>
              <p className="mt-5 text-[12px] text-[#64748B]">
                One-time setup: $2,500 / $3,500 / $7,500.
              </p>
            </div>
          </div>
          <div className="mt-10 rounded-[16px] border border-[#F59E0B]/30 bg-[#FEF3C7] p-6 lg:p-7 text-center">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#92400E] mb-3">
              <Sparkles className="w-4 h-4" /> Founding Customer Offer
            </div>
            <p className="text-[15px] leading-relaxed text-[#713F12] max-w-[760px] mx-auto">
              First 10 Phoenix law firms and mitigation specialists: Growth
              Self-Serve locked at <strong>$497/mo</strong> for 12 months, or
              Growth Done-For-You locked at <strong>$1,497/mo</strong> for 12
              months. <strong>Setup fees waived.</strong>
            </p>
          </div>
          <div className="mt-10 text-center">
            <a
              href="/pricing"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-[10px] bg-[#0B1D3A] text-white text-[13px] font-bold uppercase tracking-[0.14em] hover:bg-[#1D4ED8] transition-all duration-200"
            >
              See Full Pricing Details →
            </a>
          </div>
        </div>
      </section>

      {/* ========================= CLOSING CTA ========================= */}
      <section
        aria-labelledby="closing-heading"
        className="relative overflow-hidden bg-[#0B1D3A] text-white py-24 lg:py-32"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(ellipse 900px 500px at 50% 50%, rgba(37,99,235,0.32) 0%, transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-[900px] px-6 sm:px-8 text-center">
          <h2
            id="closing-heading"
            className="font-display text-[clamp(30px,5vw,52px)] font-extrabold leading-[1.05] tracking-[-0.025em]"
          >
            How is your business <span className="text-[#60A5FA]">living?</span>
          </h2>
          <p className="mt-6 text-[16px] lg:text-[18px] text-white/80 leading-relaxed max-w-[640px] mx-auto">
            Book a 30-minute demo. We&apos;ll show you exactly what this would
            look like running inside your business, on your brand, within 48
            hours of signing.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href="/demo"
              className="inline-flex items-center gap-2 px-9 py-4 rounded-[10px] bg-[#2563EB] text-white text-[13px] font-bold uppercase tracking-[0.14em] shadow-[0_8px_28px_rgba(37,99,235,0.45)] hover:bg-[#1D4ED8] hover:-translate-y-0.5 transition-all duration-200"
            >
              Book a Demo →
            </a>
            <a
              href="tel:+16232191237"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-[10px] border-2 border-[#93C5FD]/40 text-[#93C5FD] text-[13px] font-bold uppercase tracking-[0.14em] hover:bg-[#2563EB]/15 hover:border-[#2563EB] hover:text-white transition-all duration-200"
            >
              <Phone className="w-4 h-4" /> 623-219-1237
            </a>
          </div>
          <p className="mt-10 text-[11px] tracking-[0.26em] uppercase text-white/45 font-semibold">
            Veteran-Owned · VOSB Pending SBA Approval · SAM.gov Registered · Since 2021
          </p>
        </div>
      </section>

    </main>
  );
}
