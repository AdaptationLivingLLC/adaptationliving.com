import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  BrainCircuit,
  Building2,
  CalendarClock,
  Code,
  Mail,
  MapPinned,
  MonitorSmartphone,
  Phone,
  Search,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "AI Automation & Web Dev Phoenix AZ | Adaptation Living LLC",
  },
  description:
    "Veteran-owned AI automation studio in Phoenix, AZ. Web development, CRM setup, AI agents & workflow automation for small businesses.",
  keywords: [
    "AI automation services Phoenix AZ",
    "veteran owned web development Phoenix",
    "CRM setup and automation",
    "custom web development Phoenix",
    "AI agents",
    "workflow automation",
    "veteran-owned",
    "VOSB",
    "Adaptation Living LLC",
  ],
  openGraph: {
    title: "AI Automation & Web Dev Phoenix AZ | Adaptation Living LLC",
    description:
      "Veteran-owned AI automation studio in Phoenix, AZ. Web development, CRM setup, AI agents & workflow automation for small businesses.",
    url: "https://adaptationliving.com",
    images: [
      {
        url: "https://adaptationliving.com/images/banner.jpg",
        alt: "Adaptation Living LLC — AI Automation and Web Development Studio in Phoenix AZ",
      },
    ],
  },
  twitter: {
    title: "AI Automation & Web Dev Phoenix AZ | Adaptation Living LLC",
    description:
      "Veteran-owned AI automation studio in Phoenix, AZ. Web development, CRM setup, AI agents & workflow automation for small businesses.",
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

const painPoints = [
  {
    title: "Missed Calls",
    pain: "When you miss a call, someone else gets the sale.",
    answer:
      "Missed-call text-back fires immediately, recovers momentum, and keeps the lead from leaving your orbit.",
    href: "/services#self-serve",
  },
  {
    title: "Slow Follow-Up",
    pain: "Your leads are hottest in the first five minutes.",
    answer:
      "AI-assisted SMS, email, and chat workflows respond in seconds instead of hours.",
    href: "/services#self-serve",
  },
  {
    title: "Disconnected Software",
    pain: "Eight tools. Eight logins. Eight bills. Zero coordination.",
    answer:
      "A unified business operating system replaces the stack with one cleaner environment.",
    href: "/services#done-for-you",
  },
  {
    title: "Weak Website",
    pain: "If it looks like a template, buyers treat you like a commodity.",
    answer:
      "Custom web architecture elevates trust, speed, and conversion before the sales process even begins.",
    href: "/services#self-serve",
  },
  {
    title: "Poor Conversion",
    pain: "Traffic without conversion is just another expense.",
    answer:
      "Conversion-engineered pages, CTA hierarchy, and cleaner user flow turn attention into action.",
    href: "/services#self-serve",
  },
  {
    title: "Invisible Online",
    pain: "If Google does not show you, customers find someone else.",
    answer:
      "High-intent SEO and AI visibility systems make you harder to ignore in search and answer engines.",
    href: "/services#seo",
  },
];

const worlds = [
  {
    title: "Business Operating Systems",
    description:
      "CRM infrastructure, missed-call text-back, booking, reminders, pipeline control, and one operating layer for growth.",
    href: "/services#done-for-you",
    icon: Workflow,
  },
  {
    title: "AI Automation",
    description:
      "AI-assisted intake, qualification, follow-up, routing, and customer engagement systems that work around the clock.",
    href: "/services#self-serve",
    icon: BrainCircuit,
  },
  {
    title: "Custom Web Architecture",
    description:
      "Custom websites, landing pages, and digital experiences engineered to convert and outperform template competitors.",
    href: "/services#self-serve",
    icon: Code,
  },
  {
    title: "Revenue Tools",
    description:
      "Elegant calculators and diagnostic instruments that quantify lost time, wasted spend, and recoverable revenue.",
    href: "/services#done-for-you",
    icon: MonitorSmartphone,
  },
  {
    title: "Search & Visibility",
    description:
      "Local SEO, AI overview positioning, technical architecture, and authority systems built to keep you discoverable.",
    href: "/services#seo",
    icon: Search,
  },
];

const showcaseCards = [
  {
    kicker: "AI That Works",
    title: "24/7 AI Phone & Chat",
    description:
      "Your AI receptionist answers calls, captures leads, and books appointments around the clock. Your chat agent handles every website visitor, DM, and text instantly.",
    value: "Included in Growth plan — $597/mo",
    href: "/ai",
  },
  {
    kicker: "One System",
    title: "Replace 8 Tools With 1",
    description:
      "CRM, email, SMS, chat, calendar, reviews, pipeline, reporting — all in one platform. Stop paying for eight disconnected subscriptions.",
    value: "From $297/mo · No setup fee",
    href: "/services",
  },
  {
    kicker: "In Person",
    title: "Live Demo in Phoenix",
    description:
      "See the entire system running live at our Uptown Phoenix office. No slide decks. No Zoom. Real systems demonstrated in person.",
    value: "3030 N Central Ave Suite 507",
    href: "/contact",
  },
];

const faqs = [
  {
    q: "Can I see a live demo before I commit?",
    a: "Yes. Phoenix-area business owners can visit our Uptown Phoenix office for a hands-on walkthrough. Remote clients get a live screen-share demonstration. You see the actual system, not a slide deck.",
  },
  {
    q: "How fast can you build my system?",
    a: "Most builds launch in two to six weeks depending on scope. We move fast because the work is structured and built in-house rather than scattered across subcontractors.",
  },
  {
    q: "What makes you different from a typical agency?",
    a: "We do not stop at a website. We build the website, the CRM, the automation, the follow-up, the reporting, and the conversion system that ties it all together.",
  },
  {
    q: "Do I need to understand AI to work with you?",
    a: "No. You do not need to understand the technology. You need a partner who can identify where AI actually saves time, improves response, and generates revenue in your business.",
  },
  {
    q: "How do I know this will produce real results?",
    a: "Every system is tied to measurable outcomes: response speed, booked appointments, captured leads, review volume, pipeline visibility, and recoverable revenue.",
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
            name: "Adaptation Living LLC",
            alternateName: "Adaptation Living",
            url: "https://adaptationliving.com",
            logo: "https://adaptationliving.com/images/adaptation-seal-icon.svg",
            image: "https://adaptationliving.com/images/banner.jpg",
            description:
              "Veteran-owned AI automation studio in Phoenix, AZ. Custom web development, CRM setup, AI agents, workflow automation, and app development for small businesses.",
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
            geo: {
              "@type": "GeoCoordinates",
              latitude: 33.4842,
              longitude: -112.074,
            },
            telephone: "+1-623-219-1237",
            email: "info@adaptationliving.com",
            priceRange: "$297 - $5,997",
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
              acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
              },
            })),
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Adaptation Living LLC",
            alternateName: "Adaptation Living",
            url: "https://adaptationliving.com",
            inLanguage: ["en", "es"],
            potentialAction: {
              "@type": "ReadAction",
              target: "https://adaptationliving.com/services",
            },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Adaptation Living LLC",
            legalName: "Adaptation Living LLC",
            url: "https://adaptationliving.com",
            logo: "https://adaptationliving.com/images/adaptation-seal-icon.svg",
            foundingDate: "2021",
            founder: {
              "@type": "Person",
              name: "Brandon Bible",
              jobTitle: "Founder & CEO",
              url: "https://www.linkedin.com/in/brandon-bible-7b78b2393",
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
          }),
        }}
      />

      <main id="main-content">
        <header className="relative overflow-hidden border-b border-glass-border">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/banner.jpg"
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-20"
          >
            <source src="/assets/video/hero-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.18),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(231,76,60,0.2),transparent_22%),linear-gradient(180deg,rgba(0,0,0,0.62),rgba(10,10,10,0.96))]" />
          <div className="relative mx-auto grid min-h-screen max-w-[1400px] grid-cols-1 gap-10 px-8 pb-20 pt-36 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <div className="mb-6 flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-accent">
                <span className="rounded-full border border-accent/40 bg-accent/10 px-4 py-2">Veteran-Owned</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Phoenix AZ</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Since 2021</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">SAM.gov Registered</span>
              </div>
              <h1 className="max-w-4xl font-display text-5xl font-bold leading-[0.92] sm:text-7xl xl:text-[5.7rem]">
                We Build the Systems
                <br />
                That Run Your Business
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-text-muted sm:text-xl">
                Adaptation Living is an AI automation and web development studio in Uptown Phoenix.
                We build custom websites, business operating systems, CRM automation, and revenue intelligence engineered to produce measurable growth.
                This site is a live showcase of what we sell.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/services#self-serve"
                  className="inline-flex items-center justify-center gap-2 border-2 border-accent bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-white transition-all hover:bg-transparent hover:text-accent"
                >
                  Buy Self-Serve <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/70 bg-transparent px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-white transition-all hover:bg-white hover:text-bg-dark"
                >
                  See A Live Demo
                </a>
              </div>
              <p className="mt-8 text-sm uppercase tracking-[0.2em] text-white/65">
                Phoenix-area business owners: book an in-person demo at our Uptown office.
              </p>
            </div>

            <div className="glass-strong rounded-[32px] border border-white/10 p-6 shadow-2xl">
              <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="font-display text-xl font-bold">Adaptation Command View</p>
                  <p className="text-sm text-text-muted">Lead flow, automation, visibility, and recovery in one operating layer.</p>
                </div>
                <Image
                  src="/images/adaptation-seal-icon.svg"
                  alt="Adaptation Living seal"
                  width={52}
                  height={52}
                  className="h-12 w-12"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["Lead Response", "5 sec", "AI + text-back live"],
                  ["Pipeline Visibility", "100%", "Every opportunity tracked"],
                  ["Review Capture", "+42%", "Automated request timing"],
                  ["Software Spend", "-$380/mo", "Consolidated systems"],
                ].map(([label, value, detail]) => (
                  <div key={label} className="rounded-2xl border border-white/8 bg-white/[0.03] p-5">
                    <p className="mb-2 text-[11px] uppercase tracking-[0.22em] text-accent">{label}</p>
                    <p className="font-display text-4xl font-bold">{value}</p>
                    <p className="mt-2 text-sm text-text-muted">{detail}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-2xl border border-white/8 bg-black/25 p-5">
                <p className="mb-3 text-[11px] uppercase tracking-[0.22em] text-accent">System Layers</p>
                <div className="flex flex-wrap gap-3 text-sm text-white/85">
                  {["Website", "CRM", "AI Follow-Up", "Booking", "Reporting", "Review Automation"].map((item) => (
                    <span key={item} className="rounded-full border border-white/12 bg-white/[0.04] px-3 py-2">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="border-b border-glass-border bg-gradient-to-r from-accent/10 via-black to-black/95 py-18">
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-stretch gap-8 px-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative min-h-[320px] overflow-hidden rounded-[28px] border border-white/10">
              <Image
                src="/images/al-hq-daytime.png"
                alt="Adaptation Living LLC headquarters — Bank of America Tower, Uptown Phoenix"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-[11px] uppercase tracking-[0.24em] text-accent">Uptown Phoenix</p>
                <p className="mt-2 font-display text-3xl font-bold">Real Office. Real Team. Real Results.</p>
              </div>
            </div>
            <div className="glass-strong rounded-[28px] p-8 lg:p-10">
              <div className="mb-6 flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.22em] text-white/70">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2"><Building2 className="h-4 w-4 text-accent" /> 3030 N Central Ave Suite 507</span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2"><CalendarClock className="h-4 w-4 text-accent" /> In-Person Demos Available</span>
              </div>
              <h2 className="font-display text-4xl font-bold leading-tight">A headquartered team, built for serious operators.</h2>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-text-muted">
                Adaptation Living is a veteran-owned technology company headquartered on the
                5th floor of the Bank of America Tower in Uptown Phoenix. Our clients partner
                with an established firm — a permanent office, a full team, and the operational
                infrastructure to deliver every system we design. Phoenix-area leaders are
                welcome to meet in our office, see the platform running live, and review the
                engagement plan in person.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="/contact" className="inline-flex items-center justify-center gap-2 border-2 border-accent bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-white transition-all hover:bg-transparent hover:text-accent">
                  Book A Demo <ArrowRight className="h-4 w-4" />
                </a>
                <a href="tel:6232191237" className="inline-flex items-center justify-center gap-2 border-2 border-white/70 px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-white transition-all hover:bg-white hover:text-bg-dark">
                  Call 623-219-1237
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1400px] px-8 py-24">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm uppercase tracking-[0.24em] text-accent">You Already Know What Is Broken</p>
            <h2 className="font-display text-4xl font-bold sm:text-5xl">The problems costing business owners money are not mysterious.</h2>
            <p className="mt-4 text-lg leading-relaxed text-text-muted">
              Missed calls, slow follow-up, disconnected software, weak websites, invisible search presence, and no clear operating layer.
              We build the systems that close those gaps.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {painPoints.map((item) => (
              <a key={item.title} href={item.href} className="glass rounded-[26px] p-8 transition-all hover:-translate-y-1 hover:border-accent">
                <p className="mb-3 text-sm uppercase tracking-[0.2em] text-accent">{item.title}</p>
                <h3 className="font-display text-2xl font-bold">{item.pain}</h3>
                <p className="mt-4 text-base leading-relaxed text-text-muted">{item.answer}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-white/85">
                  Explore the Fix <ArrowRight className="h-4 w-4 text-accent" />
                </span>
              </a>
            ))}
          </div>
        </section>

        <section id="services" className="border-y border-glass-border bg-white/[0.02] py-24">
          <div className="mx-auto max-w-[1400px] px-8">
            <div className="mb-12 max-w-3xl">
              <p className="mb-3 text-sm uppercase tracking-[0.24em] text-accent">Five Integrated Worlds</p>
              <h2 className="font-display text-4xl font-bold sm:text-5xl">Your business needs more than a website.</h2>
              <p className="mt-4 text-lg leading-relaxed text-text-muted">
                Adaptation Living is built around five connected systems: operating control, AI automation, custom web architecture,
                revenue instruments, and search visibility. Each branch solves a different problem. Together they build leverage.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {worlds.map((world, index) => (
                <a
                  key={world.title}
                  href={world.href}
                  className={`group rounded-[30px] border p-8 transition-all hover:-translate-y-1 ${
                    index === 0 || index === 3
                      ? "border-accent/35 bg-gradient-to-br from-accent/12 via-black to-black"
                      : "border-white/10 bg-black/40"
                  }`}
                >
                  <world.icon className="mb-5 h-10 w-10 text-accent" />
                  <h3 className="font-display text-3xl font-bold transition-all group-hover:text-accent">{world.title}</h3>
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-muted">{world.description}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-white/85">
                    Enter This World <ArrowRight className="h-4 w-4 text-accent" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1400px] px-8 py-24">
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm uppercase tracking-[0.24em] text-accent">This Site Is A Live Showcase</p>
              <h2 className="font-display text-4xl font-bold sm:text-5xl">Demonstrate. Diagnose. Convert.</h2>
              <p className="mt-4 text-lg leading-relaxed text-text-muted">
                Business owners do not need gimmicks. They need clean tools, live systems, and proof that the company they hire
                understands expensive problems in practical terms.
              </p>
            </div>
            <a href="/services" className="inline-flex items-center gap-2 border-b border-dotted border-accent pb-1 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              View pricing and implementation paths <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {showcaseCards.map((card) => (
              <a key={card.title} href={card.href} className="glass rounded-[28px] p-8 transition-all hover:-translate-y-1 hover:border-accent">
                <p className="mb-3 text-sm uppercase tracking-[0.2em] text-accent">{card.kicker}</p>
                <h3 className="font-display text-2xl font-bold">{card.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-text-muted">{card.description}</p>
                <div className="mt-6 rounded-2xl border border-white/10 bg-black/35 p-5">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-white/60">Preview Output</p>
                  <p className="mt-3 text-lg text-white/88">{card.value}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="border-y border-glass-border bg-gradient-to-br from-accent/8 to-black py-24">
          <div className="mx-auto max-w-[1400px] px-8">
            <div className="mb-12 max-w-3xl">
              <p className="mb-3 text-sm uppercase tracking-[0.24em] text-accent">Adaptation OS</p>
              <h2 className="font-display text-4xl font-bold sm:text-5xl">Instant access. No setup fee. Cancel anytime.</h2>
              <p className="mt-4 text-lg leading-relaxed text-text-muted">
                Buy a plan, log in the same day, and run your entire business on one platform. CRM, AI agents, automation, funnels, calendars, reviews, campaigns — all included. Or go done-for-you and we build it all for you.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {[
                ["Starter", "$297/mo", "or $2,970/yr — save $594", "Up to 3 users · CRM, calendars, forms, basic automations, email support, $10 credits/mo."],
                ["Growth", "$597/mo", "or $5,970/yr — save $1,194", "Up to 10 users · AI agents, funnels, pipelines, integrations, live onboarding, $25 credits/mo."],
                ["Scale", "$1,197/mo", "or $11,970/yr — save $2,394", "Up to 50 users · Everything unlocked, branded mobile app, priority phone support, $100 credits/mo."],
              ].map(([title, price, tag, copy], index) => (
                <div key={title} className={`rounded-[28px] border p-8 ${index === 1 ? "border-accent bg-accent/8 ring-1 ring-accent/40" : "border-white/10 bg-black/35"}`}>
                  <p className="text-sm uppercase tracking-[0.2em] text-accent">{title}</p>
                  <p className="mt-5 font-display text-4xl font-bold">{price}</p>
                  <p className="mt-2 text-sm text-white/70">{tag}</p>
                  <p className="mt-5 text-base leading-relaxed text-text-muted">{copy}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="/services#self-serve" className="inline-flex items-center justify-center gap-2 border-2 border-accent bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-white transition-all hover:bg-transparent hover:text-accent">
                Buy Self-Serve <ArrowRight className="h-4 w-4" />
              </a>
              <a href="/services#done-for-you" className="inline-flex items-center justify-center gap-2 border-2 border-white/70 px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-white transition-all hover:bg-white hover:text-bg-dark">
                See Done-For-You
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 text-center border-t border-b border-glass-border">
          <div className="max-w-[1200px] mx-auto px-8">
            <p className="font-display text-sm uppercase tracking-[3px] text-accent mb-6">
              Experience Across Industries That Demand Precision
            </p>
            <div className="flex justify-center flex-wrap gap-6 mb-8">
              <span className="font-display text-base opacity-85 tracking-wide">Semiconductor Manufacturing</span>
              <span>&bull;</span>
              <span className="font-display text-base opacity-85 tracking-wide">Data Center Engineering</span>
              <span>&bull;</span>
              <span className="font-display text-base opacity-85 tracking-wide">Energy &amp; Remote Systems</span>
              <span>&bull;</span>
              <span className="font-display text-base opacity-85 tracking-wide">Financial Technology</span>
              <span>&bull;</span>
              <span className="font-display text-base opacity-85 tracking-wide">Higher Education Infrastructure</span>
            </div>
            <p className="max-w-3xl mx-auto text-text-muted text-base leading-relaxed">
              Our team brings discipline from <strong className="text-white">Intel</strong>, <strong className="text-white">Apple</strong>, <strong className="text-white">Arizona State University</strong>, <strong className="text-white">ConocoPhillips</strong>, <strong className="text-white">JPMorgan Chase</strong>, and <strong className="text-white">Wells Fargo</strong> — combined with five years building AI-powered systems for businesses since 2021.
            </p>
          </div>
        </section>

        <section id="process" className="max-w-[1200px] mx-auto px-8 py-24">
          <h2 className="font-display text-4xl font-bold text-center mb-4">How We Work</h2>
          <p className="text-center max-w-2xl mx-auto text-text-muted text-lg mb-12">
            From first conversation to live system — a clear, phased process with direct access to the people doing the work.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              ["01", "Reach Out", "Call, email, or submit the intake form. A real team member responds within hours."],
              ["02", "Map Your Needs", "We identify what is broken, what it costs, and what the system needs to do."],
              ["03", "Build & Deploy", "Your system is built, tested, and launched with clear visibility at every stage."],
              ["04", "Support & Scale", "After launch, we optimize, maintain, and expand as your business grows."],
            ].map(([step, title, copy]) => (
              <div key={step} className="text-center p-8">
                <span className="font-display text-5xl text-accent font-bold block mb-4">{step}</span>
                <h3 className="font-display text-xl font-bold mb-3">{title}</h3>
                <p className="text-text-muted text-base">{copy}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="faq" className="max-w-[1200px] mx-auto px-8 py-24">
          <h2 className="font-display text-4xl font-bold text-center mb-4">Common Questions</h2>
          <p className="text-center max-w-2xl mx-auto text-text-muted text-lg mb-12">
            Honest answers about demos, build speed, AI, and what it looks like to work with a serious operating partner.
          </p>

          <div className="max-w-3xl mx-auto">
            {faqs.map((item) => (
              <details key={item.q} className="border-b border-glass-border group">
                <summary className="flex justify-between items-center cursor-pointer py-6 text-lg font-semibold select-none">
                  {item.q}
                  <span className="text-accent text-2xl ml-4 group-open:hidden">+</span>
                  <span className="text-accent text-2xl ml-4 hidden group-open:inline">−</span>
                </summary>
                <p className="text-text-muted leading-relaxed pb-6">{item.a}</p>
              </details>
            ))}
          </div>
          <p className="mt-10 text-center text-sm uppercase tracking-[0.2em] text-white/65">
            Still have questions? Call us directly at{" "}
            <a href="tel:6232191237" className="text-accent">
              623-219-1237
            </a>
          </p>
        </section>

        <section className="py-24 text-center bg-gradient-to-br from-accent/10 to-bg-dark/90 border-t border-glass-border">
          <div className="max-w-[1200px] mx-auto px-8">
            <h2 className="font-display text-4xl font-bold mb-4">
              You Have Seen What We Build. Now Let Us Build It For You.
            </h2>
            <p className="max-w-xl mx-auto text-text-muted text-lg mb-8">
              Custom websites, business operating systems, AI automation, live demos, and a real office in Phoenix.
              If the goal is growth, clarity, and faster customer response, the next move is simple.
            </p>
            <div className="flex justify-center gap-8 mb-8 flex-wrap">
              <a href="tel:6232191237" className="flex items-center gap-2 text-lg font-semibold hover:text-accent transition-all">
                <Phone className="text-accent w-5 h-5" />
                623-219-1237
              </a>
              <a href="mailto:info@adaptationliving.com" className="flex items-center gap-2 text-lg font-semibold hover:text-accent transition-all">
                <Mail className="text-accent w-5 h-5" />
                info@adaptationliving.com
              </a>
              <span className="flex items-center gap-2 text-lg font-semibold text-white/85">
                <MapPinned className="text-accent w-5 h-5" />
                3030 N Central Ave Suite 507, Phoenix, AZ 85012
              </span>
            </div>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href="/services#self-serve" className="px-8 py-4 text-base uppercase tracking-widest font-semibold border-2 border-accent bg-accent text-white hover:bg-transparent hover:text-accent transition-all inline-block">
                Buy Self-Serve
              </a>
              <a href="/contact" className="px-8 py-4 text-base uppercase tracking-widest font-semibold border-2 border-white/70 bg-transparent text-white hover:bg-white hover:text-bg-dark transition-all inline-block">
                Book A Demo
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
