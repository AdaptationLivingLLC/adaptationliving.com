"use client";

import type { ReactNode } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { Linkedin } from "lucide-react";
import { NavBar } from "@al/ui/components/navbar";
import { FloatingChatButton } from "./floating-chat-button";
import { competitors } from "../data/competitors";

interface SiteChromeProps {
  children: ReactNode;
  locale: string;
}

export function SiteChrome({ children, locale }: SiteChromeProps) {
  // /chat is a fully sterile A2P 10DLC chat landing — no chrome at all.
  // The homepage (`/` and `/${locale}`) embeds the same chat widget per
  // the Twilio 10DLC submission, so it also needs no competing
  // phone/SMS contact-gathering surfaces: tel: and mailto: items in the
  // footer Company column are dropped, and the AL Hub external-tracking
  // script is omitted, on the homepage. NavBar links to other pages
  // (which have their own forms) are not violations of GHL's policy.
  const pathname = usePathname() ?? "";
  const isChatLanding =
    pathname === "/chat" || pathname === `/${locale}/chat`;
  const isHomepage =
    pathname === "/" || pathname === "" || pathname === `/${locale}`;

  if (isChatLanding) {
    return <>{children}</>;
  }

  return (
    <>
      <a href="#main-content" className="skip-nav">
        Skip to main content
      </a>

      <NavBar />

      {children}

      <section
        aria-label="LS-2025 Veteran Lifeline — Flagship Mission"
        className="relative bg-[#0B1D3A] border-t border-[#2563EB]/25 overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse 800px 400px at 50% 0%, rgba(37,99,235,0.25) 0%, transparent 70%), radial-gradient(ellipse 600px 400px at 90% 100%, rgba(37,99,235,0.15) 0%, transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-[1200px] px-6 sm:px-8 py-14 lg:py-20">
          <div className="text-center">
            <span className="inline-block text-[10px] font-bold tracking-[0.32em] uppercase text-[#93C5FD] bg-[#2563EB]/15 border border-[#2563EB]/40 rounded-full px-4 py-1.5 mb-6">
              Our Flagship Mission
            </span>
            <h2 className="font-display text-[clamp(26px,4vw,42px)] font-extrabold text-white leading-[1.1] tracking-[-0.02em] max-w-[900px] mx-auto">
              <span className="text-[#60A5FA]">LS-2025</span> Veteran Lifeline — A National Mission to End Veteran Suicide
            </h2>
            <p className="mt-5 text-[15px] lg:text-base text-white/75 leading-relaxed max-w-[720px] mx-auto">
              A dedicated lifeline device and national support network built specifically
              for veterans, by veterans. Every contribution moves this system from
              finished prototype toward full deployment — and toward the service
              members it was built to reach.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="/ls-2025.html#support"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[10px] bg-[#2563EB] text-white text-[12px] lg:text-[13px] font-bold uppercase tracking-[0.14em] shadow-[0_8px_24px_rgba(37,99,235,0.4)] hover:bg-[#1D4ED8] hover:-translate-y-0.5 transition-all duration-200"
              >
                Contribute Now →
              </a>
              <a
                href="/ls-2025.html"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[10px] border-2 border-[#93C5FD]/40 text-[#93C5FD] text-[12px] lg:text-[13px] font-bold uppercase tracking-[0.14em] hover:bg-[#2563EB]/15 hover:border-[#2563EB] hover:text-white transition-all duration-200"
              >
                Learn The Mission
              </a>
            </div>
            <p className="mt-7 text-[10px] tracking-[0.26em] uppercase text-white/45 font-semibold">
              100% Mission-Aligned · Built by Adaptation Living LLC · Veteran-Owned
            </p>
          </div>
        </div>
      </section>

      <footer className="section-dark border-t border-[#2563EB]/20 py-16 px-6 sm:px-8">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:items-start">
            <div>
              <p className="font-display text-2xl font-bold text-white tracking-[0.04em]">
                ADAPTATION LIVING{" "}
                <span className="text-[#2563EB] text-sm tracking-[0.28em]">LLC</span>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#94A3B8] max-w-md">
                the Adaptation Living Platform — AI automation, CRM, and a complete business
                operating system for Phoenix, AZ. Veteran-owned, SAM.gov
                registered, headquartered in Uptown Phoenix since 2021.
              </p>
              <div className="mt-5 text-xs uppercase tracking-[0.22em] text-[#64748B]">
                3030 N Central Ave · Suite 507 · Phoenix, AZ 85012
              </div>
              <div className="mt-4 flex gap-4">
                <a
                  href="https://www.linkedin.com/company/adaptation-living"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#64748B] hover:text-[#2563EB] transition-colors"
                  aria-label="Follow Adaptation Living LLC on LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.26em] text-[#2563EB] font-bold mb-4">
                Platform
              </p>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="text-[#94A3B8] hover:text-[#2563EB]">Home</a></li>
                <li><a href="/features" className="text-[#94A3B8] hover:text-[#2563EB]">All Features</a></li>
                <li><a href="/services" className="text-[#94A3B8] hover:text-[#2563EB]">Pricing &amp; Plans</a></li>
                <li><a href="/demo" className="text-[#94A3B8] hover:text-[#2563EB]">Book A Live Demo</a></li>
                <li><a href="/ai" className="text-[#94A3B8] hover:text-[#2563EB]">AI Phone &amp; Chat Agents</a></li>
                <li><a href="/vs" className="text-[#94A3B8] hover:text-[#2563EB]">Compare Platforms</a></li>
                <li><a href="/contact" className="text-[#94A3B8] hover:text-[#2563EB]">Contact</a></li>
                <li><a href="/intake" className="text-[#94A3B8] hover:text-[#2563EB]">Book Setup Call</a></li>
                <li><a href="https://app.adaptationliving.com" className="text-[#94A3B8] hover:text-[#2563EB]">Client Portal Login</a></li>
              </ul>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.26em] text-[#2563EB] font-bold mb-4">
                the Adaptation Living Platform Vs
              </p>
              <ul className="space-y-2 text-sm">
                {competitors.map((c) => (
                  <li key={c.slug}>
                    <a
                      href={`/vs/${c.slug}`}
                      className="text-[#94A3B8] hover:text-[#2563EB]"
                    >
                      the Adaptation Living Platform Vs {c.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.26em] text-[#2563EB] font-bold mb-4">
                Company
              </p>
              <ul className="space-y-2 text-sm">
                {!isHomepage && (
                  <>
                    <li>
                      <a href="tel:6232191237" className="text-[#94A3B8] hover:text-[#2563EB]">
                        623-219-1237
                      </a>
                    </li>
                    <li>
                      <a href="mailto:info@adaptationliving.com" className="text-[#94A3B8] hover:text-[#2563EB]">
                        info@adaptationliving.com
                      </a>
                    </li>
                  </>
                )}
                <li><a href="/legal" className="text-[#94A3B8] hover:text-[#2563EB]">Privacy &amp; Terms</a></li>
                <li><a href="/ls-2025.html" className="text-[#94A3B8] hover:text-[#2563EB]">LS-2025 Veteran Lifeline</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-8">
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.26em] text-[#64748B]">
              <span>Veteran-Owned · VOSB Pending SBA Approval</span>
              <span className="text-[#2563EB]">·</span>
              <span>SAM.gov Registered</span>
              <span className="text-[#2563EB]">·</span>
              <span>CAGE 95WK4</span>
              <span className="text-[#2563EB]">·</span>
              <span>UEI J3XGTRT7DYU5</span>
              <span className="text-[#2563EB]">·</span>
              <span>NAICS 541511 · 541512</span>
            </div>
            <div className="mt-6 text-center text-xs text-[#64748B]">
              &copy; 2021–2026 Adaptation Living LLC · All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      {!isHomepage && <FloatingChatButton locale={locale} />}

      {!isHomepage && (
        <Script
          id="al-hub-external-tracking"
          src="https://hub.adaptationliving.com/js/external-tracking.js"
          data-tracking-id="tk_7067e2d38e7e4938af9ab271cabaa2a9"
          strategy="afterInteractive"
        />
      )}
    </>
  );
}
