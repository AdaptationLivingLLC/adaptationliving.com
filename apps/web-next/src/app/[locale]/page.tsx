import type { Metadata } from "next";
import {
  Bot,
  Code,
  Facebook,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Phone,
  Twitter,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "AI Automation & Custom Web Development Phoenix AZ | Veteran-Owned | Adaptation Living LLC",
  description:
    "Veteran-owned AI automation studio in Phoenix, AZ. Custom web development, GoHighLevel CRM setup, AI agents, workflow automation, and app development for small businesses. VOSB — Adaptation Living LLC.",
  keywords: [
    "AI automation services Phoenix AZ",
    "veteran owned web development Phoenix",
    "GoHighLevel CRM setup for law firms",
    "custom web development Phoenix",
    "AI agents",
    "workflow automation",
    "veteran-owned",
    "VOSB",
    "Adaptation Living LLC",
  ],
  openGraph: {
    title:
      "AI Automation & Custom Web Development Phoenix AZ | Veteran-Owned | Adaptation Living LLC",
    description:
      "Veteran-owned AI automation studio in Phoenix, AZ. Custom web development, GoHighLevel CRM setup, AI agents, workflow automation, and app development for small businesses.",
    url: "https://adaptationliving.com",
    images: [
      {
        url: "https://adaptationliving.com/images/banner.jpg",
        alt: "Adaptation Living LLC — AI Automation and Web Development Studio in Phoenix AZ",
      },
    ],
  },
  twitter: {
    title:
      "AI Automation & Custom Web Development Phoenix AZ | Veteran-Owned | Adaptation Living LLC",
    description:
      "Veteran-owned AI automation studio in Phoenix, AZ. Custom web development, GoHighLevel CRM, AI agents, and workflow automation for small businesses.",
    images: ["https://adaptationliving.com/images/banner.jpg"],
  },
  alternates: {
    canonical: "https://adaptationliving.com/",
    languages: {
      en: "https://adaptationliving.com/",
      es: "https://adaptationliving.com/es",
      "x-default": "https://adaptationliving.com/",
    },
  },
};

export default function HomePage() {
  return (
    <>
      {/* LocalBusiness Schema */}
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
              "Veteran-owned AI automation studio in Phoenix, AZ. Custom web development, GoHighLevel CRM setup, AI agents, workflow automation, and app development for small businesses.",
            foundingDate: "2021",
            founder: {
              "@type": "Person",
              name: "Brandon Bible",
              jobTitle: "Founder & CEO",
              url: "https://www.linkedin.com/in/brandon-bible-7b78b2393",
            },
            address: {
              "@type": "PostalAddress",
              streetAddress: "1840 E Indian Wells Dr",
              addressLocality: "Chandler",
              addressRegion: "AZ",
              postalCode: "85249",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 33.2563,
              longitude: -111.8241,
            },
            telephone: "+1-623-219-1237",
            email: "info@adaptationliving.com",
            openingHoursSpecification: {
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
            areaServed: [
              { "@type": "City", name: "Phoenix" },
              { "@type": "City", name: "Scottsdale" },
              { "@type": "City", name: "Chandler" },
              { "@type": "City", name: "Tempe" },
              { "@type": "City", name: "Mesa" },
              { "@type": "Country", name: "US" },
            ],
            serviceType: [
              "AI Automation",
              "Custom Web Development",
              "GoHighLevel CRM Setup",
              "AI Agent Development",
              "Workflow Automation",
              "App Development",
              "E-Commerce Development",
              "AI Email Marketing",
              "Coding Mentorship",
            ],
            priceRange: "$1,200 - $6,500+",
            paymentAccepted: "Cash, Credit Card, Stripe, Bank Transfer",
            currenciesAccepted: "USD",
            naics: "541511",
            sameAs: [
              "https://www.linkedin.com/in/brandon-bible-7b78b2393",
            ],
            additionalProperty: [
              {
                "@type": "PropertyValue",
                name: "CAGE Code",
                value: "95WK4",
              },
              {
                "@type": "PropertyValue",
                name: "UEI",
                value: "J3XGTRT7DYU5",
              },
              {
                "@type": "PropertyValue",
                name: "SAM.gov",
                value: "Registered",
              },
              {
                "@type": "PropertyValue",
                name: "Veteran Status",
                value: "Veteran-Owned Small Business (VOSB)",
              },
            ],
          }),
        }}
      />

      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What does AI integration actually mean for my business?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We identify the specific manual processes, decision points, or customer touchpoints in your business that AI can improve — then we build, test, and deploy those solutions. We focus on measurable improvements: faster response times, automated follow-up, smarter lead routing, or reduced manual data entry.",
                },
              },
              {
                "@type": "Question",
                name: "We tried AI tools before and they didn't work. How is this different?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most AI projects fail because they stop at proof-of-concept. We take projects to production — meaning the system is stable, monitored, integrated with your existing tools, and actually used by your team daily.",
                },
              },
              {
                "@type": "Question",
                name: "Do we need technical staff to work with you?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. We work with business owners and operators who know their business but not the technology. We handle the technical side end-to-end and train you or your team to use what we build.",
                },
              },
              {
                "@type": "Question",
                name: "How much does a typical project cost?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Structured tiers start at $1,200 for a starter website with a $150/month care plan, and scale to $6,500+ for enterprise-grade builds. AI agent and automation projects are scoped individually. We provide a clear price before any work begins.",
                },
              },
              {
                "@type": "Question",
                name: "What happens after launch?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Every project includes a care plan option for ongoing monitoring, updates, and support. Monthly plans range from $150 to $1,200+ depending on complexity. You have direct access to our team for questions, changes, and scaling.",
                },
              },
              {
                "@type": "Question",
                name: "Is Adaptation Living a team or a one-person shop?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Adaptation Living is a veteran-owned technology studio that has operated since 2021. Our work draws on experience from enterprise environments including semiconductor manufacturing, financial technology, data center engineering, and energy systems.",
                },
              },
            ],
          }),
        }}
      />

      {/* WebSite Schema — enables sitelinks search box in Google */}
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
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate:
                  "https://adaptationliving.com/services?q={search_term_string}",
              },
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />

      {/* Organization Schema */}
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
            sameAs: [
              "https://www.linkedin.com/in/brandon-bible-7b78b2393",
            ],
            numberOfEmployees: {
              "@type": "QuantitativeValue",
              value: 1,
            },
            knowsAbout: [
              "Artificial Intelligence",
              "Web Development",
              "Workflow Automation",
              "GoHighLevel CRM",
              "AI Agents",
              "Search Engine Optimization",
            ],
          }),
        }}
      />

      <main>
        {/* ══════════════════════════════════════════
            NAVIGATION
            ══════════════════════════════════════════ */}
        <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-[5%] py-6 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
          <a href="/" className="font-display text-lg font-bold text-white tracking-wide">
            ADAPTATION LIVING
            <span className="text-text-muted text-xs ml-2 font-display tracking-widest">
              LLC
            </span>
          </a>
          <div className="flex gap-8 items-center">
            <a
              href="/"
              className="text-sm uppercase tracking-widest opacity-80 hover:opacity-100 hover:text-accent transition-all hidden sm:inline"
            >
              Home
            </a>
            <a
              href="/services"
              className="text-sm uppercase tracking-widest opacity-80 hover:opacity-100 hover:text-accent transition-all hidden sm:inline"
            >
              Services
            </a>
            <a
              href="/services"
              className="text-sm uppercase tracking-widest opacity-80 hover:opacity-100 hover:text-accent transition-all hidden md:inline"
            >
              Pricing
            </a>
            <a
              href="/contact"
              className="text-sm uppercase tracking-widest opacity-80 hover:opacity-100 hover:text-accent transition-all hidden md:inline"
            >
              Contact
            </a>
            <a
              href="/intake"
              className="text-sm uppercase tracking-widest border border-white px-5 py-2 rounded hover:bg-white hover:text-bg-dark transition-all"
            >
              Start Project
            </a>
          </div>
        </nav>

        {/* ══════════════════════════════════════════
            HERO
            ══════════════════════════════════════════ */}
        <header className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
          {/* Background timelapse video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/banner.jpg"
            className="absolute inset-0 w-full h-full object-cover -z-10 opacity-30"
          >
            <source src="/assets/video/hero-bg.mp4" type="video/mp4" />
          </video>
          <div className="flex gap-6 mb-8 font-display text-base text-accent uppercase tracking-[3px]">
            <span>AI Automation</span>
            <span>&bull;</span>
            <span>Web Development</span>
            <span>&bull;</span>
            <span>Phoenix, AZ</span>
          </div>
          <h1 className="font-display text-5xl sm:text-7xl font-bold leading-tight mb-4 tracking-tight">
            AI Automation &amp; Web Development
            <br />
            for Phoenix Businesses
          </h1>
          <p className="text-lg text-text-muted max-w-2xl mb-10 font-light">
            Phoenix-based AI automation studio. We build production-ready
            systems, automate real workflows, and stand beside you from first
            call to final deployment. Serving Phoenix, Scottsdale, Chandler, and
            businesses nationwide.
          </p>
          <div className="flex gap-4">
            <a
              href="/contact"
              className="px-8 py-4 text-base uppercase tracking-widest font-semibold border-2 border-white bg-white text-bg-dark hover:bg-transparent hover:text-white transition-all"
            >
              Talk to Our Team
            </a>
            <a
              href="#services"
              className="px-8 py-4 text-base uppercase tracking-widest font-semibold border-2 border-white bg-transparent text-white hover:bg-white/10 transition-all"
            >
              View Our Work
            </a>
          </div>
        </header>

        {/* ══════════════════════════════════════════
            CONTACT STRIP
            ══════════════════════════════════════════ */}
        <section className="bg-gradient-to-r from-accent/10 to-bg-dark/95 border-t-2 border-t-accent border-b border-b-glass-border py-14">
          <div className="max-w-[1200px] mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h2 className="font-display text-3xl font-bold mb-2">
                Real People. Direct Access.
              </h2>
              <p className="text-text-muted max-w-lg text-base">
                When you reach out, a senior team member responds — typically
                within hours. No chatbots. No intake funnels. We start with a
                conversation about what you need.
              </p>
            </div>
            <div className="flex items-center gap-8 flex-wrap">
              <a
                href="tel:6232191237"
                className="flex items-center gap-2 text-lg font-semibold hover:text-accent transition-all"
              >
                <Phone className="text-accent w-5 h-5" />
                623-219-1237
              </a>
              <a
                href="mailto:info@adaptationliving.com"
                className="flex items-center gap-2 text-lg font-semibold hover:text-accent transition-all"
              >
                <Mail className="text-accent w-5 h-5" />
                info@adaptationliving.com
              </a>
              <a
                href="/intake"
                className="px-6 py-3 text-sm uppercase tracking-widest font-semibold border-2 border-accent bg-accent text-white hover:bg-transparent hover:text-accent transition-all"
              >
                Start a Project
              </a>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            WHAT WE DELIVER (3 PILLARS)
            ══════════════════════════════════════════ */}
        <section id="services" className="max-w-[1200px] mx-auto px-8 pt-24 pb-16">
          <h2 className="font-display text-4xl font-bold text-center mb-4">
            What We Deliver
          </h2>
          <p className="text-center max-w-2xl mx-auto text-text-muted text-lg mb-12">
            AI-first solutions for Phoenix businesses built to produce
            measurable outcomes — not demos. Every engagement starts with your
            real problem and ends with a working system.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass rounded-lg p-10 hover:-translate-y-1 hover:border-accent transition-all">
              <Bot className="text-accent w-10 h-10 mb-6" />
              <h3 className="font-display text-xl font-bold mb-4">
                AI Agents &amp; Workflow Automation
              </h3>
              <p className="text-text-muted text-base leading-relaxed">
                Custom AI agents, automated email and SMS sequences, GoHighLevel
                CRM integrations, and intelligent workflows that replace manual
                processes. From lead scoring to customer follow-up, we deploy
                systems that run 24/7 and produce revenue.
              </p>
              <a
                href="/services#automation"
                className="mt-4 inline-block text-sm uppercase tracking-widest font-semibold border-b border-dotted border-accent hover:text-accent transition-all"
              >
                Explore AI Services →
              </a>
            </div>

            <div className="glass rounded-lg p-10 hover:-translate-y-1 hover:border-accent transition-all">
              <Code className="text-accent w-10 h-10 mb-6" />
              <h3 className="font-display text-xl font-bold mb-4">
                Web &amp; App Development
              </h3>
              <p className="text-text-muted text-base leading-relaxed">
                Custom websites, web applications, e-commerce stores, and
                mobile-responsive builds. Every project is hand-coded or
                precisely configured — no generic templates. We integrate AI
                capabilities into every build, from smart forms to dynamic
                content.
              </p>
              <a
                href="/services#web-suites"
                className="mt-4 inline-block text-sm uppercase tracking-widest font-semibold border-b border-dotted border-accent hover:text-accent transition-all"
              >
                View Development Tiers →
              </a>
            </div>

            <div className="glass rounded-lg p-10 hover:-translate-y-1 hover:border-accent transition-all">
              <GraduationCap className="text-accent w-10 h-10 mb-6" />
              <h3 className="font-display text-xl font-bold mb-4">
                Training &amp; One-on-One Support
              </h3>
              <p className="text-text-muted text-base leading-relaxed">
                Hands-on AI literacy, coding education, and ongoing strategic
                support. Whether your team needs to understand what AI can
                actually do, or you need a technical partner on call, we make
                sure you are never stuck.
              </p>
              <a
                href="/services#education"
                className="mt-4 inline-block text-sm uppercase tracking-widest font-semibold border-b border-dotted border-accent hover:text-accent transition-all"
              >
                See Training Options →
              </a>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            PROOF STRIP
            ══════════════════════════════════════════ */}
        <section className="py-16 text-center border-t border-b border-glass-border">
          <div className="max-w-[1200px] mx-auto px-8">
            <p className="font-display text-sm uppercase tracking-[3px] text-accent mb-6">
              Experience Across Industries That Demand Precision
            </p>
            <div className="flex justify-center flex-wrap gap-6 mb-8">
              <span className="font-display text-base opacity-85 tracking-wide">
                Semiconductor Manufacturing
              </span>
              <span>&bull;</span>
              <span className="font-display text-base opacity-85 tracking-wide">
                Data Center Engineering
              </span>
              <span>&bull;</span>
              <span className="font-display text-base opacity-85 tracking-wide">
                Energy &amp; Remote Systems
              </span>
              <span>&bull;</span>
              <span className="font-display text-base opacity-85 tracking-wide">
                Financial Technology
              </span>
              <span>&bull;</span>
              <span className="font-display text-base opacity-85 tracking-wide">
                Higher Education Infrastructure
              </span>
            </div>
            <p className="max-w-3xl mx-auto text-text-muted text-base leading-relaxed">
              Our team brings discipline from{" "}
              <strong className="text-white">Intel</strong>,{" "}
              <strong className="text-white">Apple</strong>,{" "}
              <strong className="text-white">Arizona State University</strong>,{" "}
              <strong className="text-white">ConocoPhillips</strong>,{" "}
              <strong className="text-white">JPMorgan Chase</strong>, and{" "}
              <strong className="text-white">Wells Fargo</strong> — combined
              with five years building AI-powered systems for businesses since
              2021.
            </p>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            HOW WE WORK (PROCESS)
            ══════════════════════════════════════════ */}
        <section id="process" className="max-w-[1200px] mx-auto px-8 py-24">
          <h2 className="font-display text-4xl font-bold text-center mb-4">
            How We Work
          </h2>
          <p className="text-center max-w-2xl mx-auto text-text-muted text-lg mb-12">
            From first conversation to live system — a clear, phased process
            with direct access to the people doing the work. Based in Phoenix,
            AZ and serving clients nationwide.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8">
              <span className="font-display text-5xl text-accent font-bold block mb-4">
                01
              </span>
              <h3 className="font-display text-xl font-bold mb-3">
                Reach Out
              </h3>
              <p className="text-text-muted text-base">
                Call, email, or submit the intake form. A real team member
                responds within hours. No sales pressure, no qualifying gates.
              </p>
            </div>
            <div className="text-center p-8">
              <span className="font-display text-5xl text-accent font-bold block mb-4">
                02
              </span>
              <h3 className="font-display text-xl font-bold mb-3">
                Map Your Needs
              </h3>
              <p className="text-text-muted text-base">
                We listen to what you are building, where you are stuck, and
                what success looks like. Then we design a focused plan — not a
                bloated proposal.
              </p>
            </div>
            <div className="text-center p-8">
              <span className="font-display text-5xl text-accent font-bold block mb-4">
                03
              </span>
              <h3 className="font-display text-xl font-bold mb-3">
                Build &amp; Deploy
              </h3>
              <p className="text-text-muted text-base">
                Our team builds, tests, and deploys your solution in structured
                phases. You see progress at every step with direct access to the
                people doing the work.
              </p>
            </div>
            <div className="text-center p-8">
              <span className="font-display text-5xl text-accent font-bold block mb-4">
                04
              </span>
              <h3 className="font-display text-xl font-bold mb-3">
                Support &amp; Scale
              </h3>
              <p className="text-text-muted text-base">
                After launch, we monitor, optimize, and support. Monthly care
                plans keep everything running. When you are ready to grow, we
                scale with you.
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            LS-2025 FEATURED
            ══════════════════════════════════════════ */}
        <section className="max-w-[1200px] mx-auto px-8 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl font-bold mb-4">
                Featured: LS-2025 Veteran Initiative
              </h2>
              <p className="text-text-muted text-base leading-relaxed mb-6">
                A real-time crisis intervention platform connecting veterans with
                human support. Built with secure data routing, AI-assisted
                triage, and zero tolerance for downtime. This project
                demonstrates what our team delivers when the stakes are at their
                highest.
              </p>
              <a
                href="/lifesaver"
                className="px-8 py-4 text-sm uppercase tracking-widest font-semibold border-2 border-accent bg-accent text-white hover:bg-transparent hover:text-accent transition-all inline-block"
              >
                See the Case Study
              </a>
            </div>
            <div>
              <img
                src="/images/ls2025-seal-front.png"
                alt="LS-2025 Veteran Suicide Prevention Device — Built by Adaptation Living LLC, Phoenix AZ"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            FULL CAPABILITIES
            ══════════════════════════════════════════ */}
        <section className="max-w-[1200px] mx-auto px-8 py-24">
          <h2 className="font-display text-4xl font-bold text-center mb-4">
            Full Capabilities
          </h2>
          <p className="text-center max-w-2xl mx-auto text-text-muted text-lg mb-12">
            A snapshot of what we build. For the complete menu with pricing and
            components, visit our services page.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "AI Agents & Automation",
                desc: "Custom automations and AI agents that take repetitive work off your plate. Chatbots, workflow triggers, form routing, and tool integrations.",
                href: "/services#automation",
              },
              {
                title: "AI Revenue Systems",
                desc: "AI-powered follow-up and nurture systems that turn dormant leads into booked calls and sales. Automated email, SMS, CRM integration, and reporting.",
                href: "/services#ai-revenue",
              },
              {
                title: "Web & Mobile Development",
                desc: "End-to-end design and development for fast, modern websites and mobile experiences. Custom builds, responsive design, performance tuning, and SEO.",
                href: "/services#web-suites",
              },
              {
                title: "E-Commerce & Retail",
                desc: "Complete e-commerce setups built to convert and easy to manage. Store builds, checkout optimization, upsells, and post-purchase flows.",
                href: "/services#web-suites",
              },
              {
                title: "Full-Stack Strategy",
                desc: "Technical and business strategy under one roof. Offer clarity, tech stack selection, and roadmaps from MVP to full-scale product.",
                href: "/services#strategy",
              },
              {
                title: "Training & Long-Term Support",
                desc: "Ongoing coaching, strategy calls, screen-share walkthroughs, and priority support. Hands-on help so you are never stuck.",
                href: "/services#education",
              },
            ].map((cap) => (
              <div
                key={cap.title}
                className="p-8 rounded-lg bg-white/[0.02] border border-transparent hover:bg-white/5 hover:border-glass-border hover:-translate-y-0.5 transition-all"
              >
                <h3 className="font-display text-lg text-accent uppercase tracking-wide mb-3">
                  {cap.title}
                </h3>
                <p className="text-text-muted text-base leading-relaxed mb-3">
                  {cap.desc}
                </p>
                <a
                  href={cap.href}
                  className="text-sm uppercase tracking-widest font-semibold border-b border-dotted border-accent hover:text-accent transition-all"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/services"
              className="px-8 py-4 text-base uppercase tracking-widest font-semibold border-2 border-white bg-transparent text-white hover:bg-white/10 transition-all inline-block"
            >
              View All Capabilities &amp; Pricing →
            </a>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            FAQ
            ══════════════════════════════════════════ */}
        <section id="faq" className="max-w-[1200px] mx-auto px-8 py-24">
          <h2 className="font-display text-4xl font-bold text-center mb-4">
            Common Questions
          </h2>
          <p className="text-center max-w-2xl mx-auto text-text-muted text-lg mb-12">
            Honest answers about working with us, what AI integration actually
            involves, and what to expect.
          </p>

          <div className="max-w-3xl mx-auto">
            {[
              {
                q: 'What does "AI integration" actually mean for my business?',
                a: "We identify the specific manual processes, decision points, or customer touchpoints in your business that AI can improve — then we build, test, and deploy those solutions. This is not about adding chatbots for the sake of it. We focus on measurable improvements: faster response times, automated follow-up, smarter lead routing, or reduced manual data entry.",
              },
              {
                q: "We tried AI tools before and they didn't work. How is this different?",
                a: "Most AI projects fail because they stop at proof-of-concept. Industry research shows that nearly a third of generative AI projects are abandoned after the POC stage. We take projects to production — meaning the system is stable, monitored, integrated with your existing tools, and actually used by your team daily.",
              },
              {
                q: "Do we need technical staff to work with you?",
                a: "No. We work with business owners and operators who know their business but not the technology. We handle the technical side end-to-end and train you or your team to use what we build. If you do have technical staff, we integrate with them seamlessly.",
              },
              {
                q: "How much does a typical project cost?",
                a: "Our structured tiers start at $1,200 for a starter website with a $150/month care plan, and scale to $6,500+ for enterprise-grade builds. AI agent and automation projects are scoped individually based on complexity. We provide a clear price before any work begins — no surprises.",
              },
              {
                q: "What happens after launch?",
                a: "Every project includes a care plan option for ongoing monitoring, updates, and support. We do not build and disappear. Monthly plans range from $150 to $1,200+ depending on complexity. You have direct access to our team for questions, changes, and scaling.",
              },
              {
                q: "Is Adaptation Living a team or a one-person shop?",
                a: "Adaptation Living is a veteran-owned technology studio that has operated since 2021. Our work draws on experience from enterprise environments including semiconductor manufacturing, data center engineering, financial technology, and energy systems. We structure our engagements with the discipline and accountability of a team.",
              },
            ].map((item) => (
              <details
                key={item.q}
                className="border-b border-glass-border group"
              >
                <summary className="flex justify-between items-center cursor-pointer py-6 text-lg font-semibold select-none">
                  {item.q}
                  <span className="text-accent text-2xl ml-4 group-open:hidden">
                    +
                  </span>
                  <span className="text-accent text-2xl ml-4 hidden group-open:inline">
                    −
                  </span>
                </summary>
                <p className="text-text-muted leading-relaxed pb-6">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════
            FINAL CTA
            ══════════════════════════════════════════ */}
        <section className="py-24 text-center bg-gradient-to-br from-accent/10 to-bg-dark/90 border-t border-glass-border">
          <div className="max-w-[1200px] mx-auto px-8">
            <h2 className="font-display text-4xl font-bold mb-4">
              Ready to Build Something That Works?
            </h2>
            <p className="max-w-xl mx-auto text-text-muted text-lg mb-8">
              Tell us what you are trying to accomplish. Our team will respond
              with a clear plan — no pressure, no pitch decks.
            </p>
            <div className="flex justify-center gap-8 mb-8 flex-wrap">
              <a
                href="tel:6232191237"
                className="flex items-center gap-2 text-lg font-semibold hover:text-accent transition-all"
              >
                <Phone className="text-accent w-5 h-5" />
                623-219-1237
              </a>
              <a
                href="mailto:info@adaptationliving.com"
                className="flex items-center gap-2 text-lg font-semibold hover:text-accent transition-all"
              >
                <Mail className="text-accent w-5 h-5" />
                info@adaptationliving.com
              </a>
            </div>
            <a
              href="/intake"
              className="px-8 py-4 text-base uppercase tracking-widest font-semibold border-2 border-accent bg-accent text-white hover:bg-transparent hover:text-accent transition-all inline-block"
            >
              Start Your Project
            </a>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            FOOTER
            ══════════════════════════════════════════ */}
        <footer className="bg-black py-16 px-8 text-center border-t border-glass-border">
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="text-text-muted hover:text-accent transition-all">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-text-muted hover:text-accent transition-all">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-text-muted hover:text-accent transition-all">
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/brandon-bible-7b78b2393"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent transition-all"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>

          {/* Government Credentials */}
          <div className="mx-auto max-w-3xl py-8 border-t border-white/5 text-white/40 text-xs tracking-wider leading-relaxed">
            <div className="uppercase font-semibold text-white/60 mb-2">
              Adaptation Living LLC &bull; Government Services Division
            </div>
            <span>SAM.gov Registered</span> &bull;{" "}
            <span>CAGE: 95WK4</span> &bull;{" "}
            <span>UEI: J3XGTRT7DYU5</span> &bull;{" "}
            <span>
              NAICS: 541511 &bull; 541512 (Custom Computer Programming &bull;
              Computer Systems Design)
            </span>
            <div className="mt-4">
              <a
                href="/legal"
                className="inline-block px-3 py-1 border-2 border-accent rounded font-bold tracking-wider text-white hover:bg-white/10 transition-all"
              >
                Privacy Policy / Legal Notice
              </a>
            </div>
          </div>

          <div className="text-neutral-600 text-sm mt-8">
            &copy; 2021–2026 Adaptation Living LLC. All rights reserved. |
            Phoenix, AZ
            <br />
            <a
              href="mailto:info@adaptationliving.com"
              className="text-text-muted hover:text-accent"
            >
              info@adaptationliving.com
            </a>{" "}
            | 623-219-1237
          </div>
        </footer>
      </main>
    </>
  );
}
