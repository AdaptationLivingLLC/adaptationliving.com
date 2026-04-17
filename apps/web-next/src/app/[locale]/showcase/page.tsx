import type { Metadata } from "next";
import {
  Bot,
  Box,
  Code,
  Gauge,
  Mail,
  MessageSquare,
  Mic,
  Phone,
  Sparkles,
} from "lucide-react";
import {
  BreadcrumbSchema,
  pageAlternates,
  pageOg,
  pageTwitter,
} from "../../../lib/seo";
import { Breadcrumbs } from "../../../components/breadcrumbs";
import { ThreeDemo, PerfDemo } from "../../../components/showcase/client-demos";

const title = "Live Technology Showcase";
const description =
  "See the technology running live. 3D graphics, AI integrations, and custom web architecture — all built by Adaptation Living LLC in Phoenix, AZ. Live demos, real systems.";

export const metadata: Metadata = {
  title,
  description,
  alternates: pageAlternates("/showcase"),
  openGraph: pageOg(title, description, "/showcase"),
  twitter: pageTwitter(title, description),
  robots: { index: false, follow: true },
};

function PriceTag({
  ours,
  theirs,
  label,
}: {
  ours: string;
  theirs: string;
  label: string;
}) {
  return (
    <div className="inline-flex items-center gap-4 rounded-xl border border-accent/30 bg-accent/5 px-5 py-3">
      <div>
        <p className="text-[10px] uppercase tracking-widest text-[#64748B]">{label}</p>
        <p className="text-[#64748B] text-sm line-through">{theirs}</p>
      </div>
      <div className="h-8 w-px bg-white/10" />
      <div>
        <p className="text-[10px] uppercase tracking-widest text-accent">Adaptation Living</p>
        <p className="text-accent font-bold text-sm">{ours}</p>
      </div>
    </div>
  );
}

export default function ShowcasePage() {
  return (
    <main id="main-content" className="navbar-offset">
      <Breadcrumbs items={[{ name: "Showcase" }]} />
      <BreadcrumbSchema items={[{ name: "Showcase", path: "/showcase" }]} />

      {/* ═══════════════════════════════════════════ */}
      {/* HERO                                       */}
      {/* ═══════════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-8 pt-12 pb-8">
        <p className="text-xs uppercase tracking-[0.24em] text-accent mb-3">Live Technology Showcase</p>
        <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold max-w-4xl leading-tight mb-4">
          Everything You See Here
          <br />
          <span className="text-accent">Is Running Right Now.</span>
        </h1>
        <p className="text-text-muted text-base max-w-3xl leading-relaxed mb-4">
          This is not a portfolio of screenshots. Every demo on this page is live code
          executing in your browser. The 3D scene below is real. The particle system is
          real. The AI chat in the corner is real. This is what we build. Scroll through,
          interact with everything, and see what your business could look like.
        </p>
        <p className="text-[#64748B] text-sm max-w-2xl">
          Every feature has a price tag showing what agencies charge compared to what we
          charge. The difference will make you angry you didn&apos;t find us sooner.
        </p>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* 3D INTERACTIVE                             */}
      {/* ═══════════════════════════════════════════ */}
      <section className="section-cream py-12 sm:py-16">
        <div className="max-w-[1400px] mx-auto px-8">
        <div className="flex items-center gap-3 mb-2">
          <Box className="text-accent w-7 h-7" />
          <p className="text-sm uppercase tracking-[0.24em] text-accent">Interactive 3D Graphics</p>
        </div>
        <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
          Three.js &amp; React Three Fiber
        </h2>
        <p className="text-text-muted text-sm leading-relaxed max-w-3xl mb-4">
          The scene below is a live 3D environment running in your browser. Drag to
          rotate. Hover the sphere to distort it. This is the same technology used by
          Nike, Apple, and Tesla for their product pages. Interactive 3D creates an
          experience that static images never will — and it runs on any device without
          an app download.
        </p>

        <ThreeDemo />

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <PriceTag
            label="Agencies charge"
            theirs="$15,000–$25,000"
            ours="Included in custom builds"
          />
          <p className="text-text-muted text-sm max-w-md">
            Agencies like GoDaddy and Wix agencies charge $15K+ for a 5-page site
            with interactive 3D features like this. We build it as part of your system.
          </p>
        </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* PERFORMANCE CANVAS                         */}
      {/* ═══════════════════════════════════════════ */}
      <section className="section-cream py-12 sm:py-16 border-t border-glass-border">
        <div className="max-w-[1400px] mx-auto px-8">
        <div className="flex items-center gap-3 mb-2">
          <Gauge className="text-accent w-7 h-7" />
          <p className="text-sm uppercase tracking-[0.24em] text-accent">High-Performance Animation</p>
        </div>
        <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
          Real-Time Canvas Rendering
        </h2>
        <p className="text-text-muted text-sm leading-relaxed max-w-3xl mb-4">
          This particle system is rendering hundreds of animated elements at 60 frames
          per second. Move your mouse or finger across it to spawn more. The FPS counter
          and particle count are live — this is real performance data, not a video. This
          is the kind of interactive experience that makes visitors stop scrolling and
          start paying attention.
        </p>

        <PerfDemo />

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <PriceTag
            label="Agencies charge"
            theirs="$8,000–$15,000"
            ours="Included in custom builds"
          />
          <p className="text-text-muted text-sm max-w-md">
            Custom interactive animations are typically quoted as a standalone project.
            We build them into your site because this is what modern web architecture
            looks like.
          </p>
        </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* AI CHAT — LIVE                             */}
      {/* ═══════════════════════════════════════════ */}
      <section className="section-cream py-12 sm:py-16 border-t border-glass-border">
        <div className="max-w-[1400px] mx-auto px-8">
        <div className="flex items-center gap-3 mb-2">
          <MessageSquare className="text-accent w-7 h-7" />
          <p className="text-sm uppercase tracking-[0.24em] text-accent">Running Right Now</p>
        </div>
        <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
          AI Chat Agent
        </h2>
        <p className="text-text-muted text-sm leading-relaxed max-w-3xl mb-4">
          See the chat bubble in the bottom corner of this page? That&apos;s not a
          demo — it&apos;s our live AI chat agent. Click it. Ask it anything about
          our services, our pricing, or how the system works. It will respond instantly
          with an accurate, intelligent answer. This is exactly what your customers
          will experience on your website.
        </p>
        <div className="glass rounded-2xl p-6 max-w-2xl">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-accent/20 p-2 shrink-0">
                <Bot className="w-4 h-4 text-accent" />
              </div>
              <div className="rounded-2xl rounded-tl-none bg-white/[0.06] p-4">
                <p className="text-[#0F172A]/85 text-sm">Hi! I&apos;m the Adaptation Living AI assistant. I can answer questions about our services, pricing, and how we can help your business. What would you like to know?</p>
              </div>
            </div>
            <p className="text-[#64748B] text-xs text-center">
              This is a preview. Click the live chat bubble in the corner to talk to the real AI.
            </p>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <PriceTag
            label="Agencies charge"
            theirs="$3,000–$8,000 setup"
            ours="Included in Growth plan — $597/mo"
          />
          <p className="text-text-muted text-sm max-w-md">
            Most AI chat setups are sold as standalone projects. We integrate it into
            your website, Facebook, Instagram, Google, and SMS — all included in
            your Growth plan.
          </p>
        </div>
        <p className="mt-4">
          <a href="/ai" className="text-gold hover:text-gold/80 underline">See all AI systems &rarr;</a>
        </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* AI VOICE RECEPTIONIST                      */}
      {/* ═══════════════════════════════════════════ */}
      <section className="section-cream py-12 sm:py-16 border-t border-glass-border">
        <div className="max-w-[1400px] mx-auto px-8">
        <div className="flex items-center gap-3 mb-2">
          <Mic className="text-accent w-7 h-7" />
          <p className="text-sm uppercase tracking-[0.24em] text-accent">24/7 Phone Coverage</p>
        </div>
        <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
          AI Voice Receptionist
        </h2>
        <p className="text-text-muted text-sm leading-relaxed max-w-3xl mb-4">
          Call our business line right now — 623-219-1237. If we don&apos;t pick up,
          the AI will. It answers in our brand voice, handles your question, captures
          your info, and can book you on our calendar. This is the same system we
          install for every managed client. Your customers will never hit voicemail again.
        </p>
        <div className="glass rounded-2xl p-6 max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.22em] text-accent mb-4">What Happens When Someone Calls</p>
          <div className="space-y-3">
            {[
              "AI answers: \"Thanks for calling [Your Business]. How can I help?\"",
              "Caller asks a question — AI responds from your knowledge base",
              "AI captures their name, phone, and email",
              "AI books them on your calendar if they want an appointment",
              "Lead appears in your pipeline instantly",
              "You get a text + email summary of the call",
              "Caller gets a confirmation email with their appointment details",
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-accent font-bold text-sm shrink-0 w-5">{i + 1}.</span>
                <p className="text-[#0F172A]/85 text-sm">{step}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <PriceTag
            label="Agencies charge"
            theirs="$10,000+ setup + $500/mo"
            ours="Included in Growth plan — $597/mo"
          />
        </div>
        <p className="mt-4">
          <a href="/ai" className="text-gold hover:text-gold/80 underline">See all AI systems &rarr;</a>
        </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* CUSTOM WEB ARCHITECTURE                    */}
      {/* ═══════════════════════════════════════════ */}
      <section className="section-cream py-12 sm:py-16 border-t border-glass-border">
        <div className="max-w-[1400px] mx-auto px-8">
        <div className="flex items-center gap-3 mb-2">
          <Code className="text-accent w-7 h-7" />
          <p className="text-sm uppercase tracking-[0.24em] text-accent">This Site Is the Demo</p>
        </div>
        <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
          Custom Web Architecture
        </h2>
        <p className="text-text-muted text-sm leading-relaxed max-w-3xl mb-4">
          The website you are reading right now is built with Next.js, TypeScript,
          Tailwind CSS, and Framer Motion. It is server-rendered for speed, optimized
          for search engines, accessible, responsive on every device, and it scores
          in the top percentile of Google&apos;s Core Web Vitals. This is not a template.
          This is not a drag-and-drop builder. This is hand-coded, custom architecture.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {[
            { label: "Framework", value: "Next.js 16" },
            { label: "Language", value: "TypeScript" },
            { label: "Styling", value: "Tailwind CSS" },
            { label: "Animation", value: "Framer Motion" },
          ].map((item) => (
            <div key={item.label} className="glass rounded-xl p-4 text-center">
              <p className="text-[10px] uppercase tracking-widest text-accent mb-1">{item.label}</p>
              <p className="font-display font-bold">{item.value}</p>
            </div>
          ))}
        </div>
        <p className="text-text-muted text-sm max-w-3xl mb-6">
          Every site we build uses the same level of engineering. Structured data for
          search engines. Schema.org markup. Open Graph for social sharing. Lazy-loaded
          images. Optimized fonts. Preconnect hints. Code splitting. Everything that
          matters for speed, SEO, and conversion — built in from the start, not bolted
          on as an afterthought.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <PriceTag
            label="GoDaddy / Agencies"
            theirs="$10,000–$20,000 for 5 pages"
            ours="From $297/mo self-serve · no setup fee"
          />
        </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* CONTENT & REVIEW AI                        */}
      {/* ═══════════════════════════════════════════ */}
      <section className="section-cream py-12 sm:py-16 border-t border-glass-border">
        <div className="max-w-[1400px] mx-auto px-8">
        <div className="flex items-center gap-3 mb-2">
          <Sparkles className="text-accent w-7 h-7" />
          <p className="text-sm uppercase tracking-[0.24em] text-accent">Content That Creates Itself</p>
        </div>
        <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
          AI Content &amp; Review Management
        </h2>
        <p className="text-text-muted text-sm leading-relaxed max-w-3xl mb-4">
          Blog posts, social captions, email campaigns, ad copy — generated in your
          brand voice in seconds. Every review on Google and Facebook gets a professional,
          personalized response automatically. A freelance writer charges $200+ per blog
          post. Our AI generates 1,000 words for nine cents. Review responses cost a penny each.
        </p>
        <div className="grid sm:grid-cols-4 gap-4 mb-6">
          {[
            { label: "Blog post", value: "$0.09", unit: "per 1,000 words" },
            { label: "Image", value: "$0.063", unit: "per generation" },
            { label: "Review response", value: "$0.01", unit: "per review" },
            { label: "Landing page", value: "FREE", unit: "AI page builder" },
          ].map((item) => (
            <div key={item.label} className="glass rounded-xl p-4 text-center">
              <p className="text-[10px] uppercase tracking-widest text-accent mb-1">{item.label}</p>
              <p className="font-display text-lg font-bold text-accent">{item.value}</p>
              <p className="text-text-muted text-xs mt-1">{item.unit}</p>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* CTA                                        */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-12 sm:py-16 text-center bg-gradient-to-br from-accent/10 to-bg-dark/90 border-t border-glass-border">
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
            You Just Experienced the Product.
          </h2>
          <p className="max-w-xl mx-auto text-text-muted text-base mb-3">
            The 3D scene. The particle system. The AI chat. The voice receptionist.
            The architecture powering this page. This is what we build for your business.
            Not a pitch. Not a mockup. The real thing.
          </p>
          <p className="max-w-xl mx-auto text-[#64748B] text-sm mb-6">
            From $297/mo self-serve · No setup fee · Done-for-you from $1,497/mo + $1,997 setup.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="/services#self-serve" className="px-6 py-3 text-xs uppercase tracking-widest font-semibold border-2 border-accent bg-accent text-white hover:bg-transparent hover:text-accent transition-all inline-block">
              Buy Self-Serve
            </a>
            <a href="/services" className="px-6 py-3 text-xs uppercase tracking-widest font-semibold border-2 border-white/70 bg-transparent text-white hover:bg-white hover:text-bg-dark transition-all inline-block">
              See All Plans
            </a>
          </div>
          <div className="flex justify-center gap-6 mt-6 flex-wrap">
            <a href="tel:6232191237" className="flex items-center gap-2 text-sm font-semibold hover:text-accent transition-all">
              <Phone className="text-accent w-5 h-5" /> 623-219-1237
            </a>
            <a href="mailto:info@adaptationliving.com" className="flex items-center gap-2 text-sm font-semibold hover:text-accent transition-all">
              <Mail className="text-accent w-5 h-5" /> info@adaptationliving.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
