import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import { Inter } from "next/font/google";
import { Linkedin } from "lucide-react";
import { hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { Clarity } from "@al/analytics/clarity";
// GA4 is loaded via GTM container — do not add GoogleAnalytics here
import { GoogleTagManager } from "@al/analytics/gtm";
import { MetaPixel } from "@al/analytics/meta-pixel";
import { IntlProvider, locales } from "@al/i18n";
import { NavBar } from "@al/ui/components/navbar";
import { competitors } from "../../data/competitors";
import "@al/ui/globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

const baseUrl = "https://adaptationliving.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default:
      "AI Automation & Web Development Phoenix AZ | Veteran-Owned | Adaptation Living LLC",
    template: "%s | Adaptation Living LLC",
  },
  description:
    "Veteran-owned AI automation studio in Phoenix, AZ. Custom web development, CRM setup, AI agents, workflow automation, and app development for small businesses. VOSB certified.",
  keywords: [
    "AI automation Phoenix AZ",
    "web development Phoenix",
    "CRM setup and automation",
    "AI agents",
    "workflow automation",
    "veteran-owned web development",
    "VOSB",
    "Adaptation Living",
  ],
  authors: [{ name: "Brandon Bible", url: baseUrl }],
  creator: "Adaptation Living LLC",
  publisher: "Adaptation Living LLC",
  openGraph: {
    type: "website",
    siteName: "Adaptation Living LLC",
    locale: "en_US",
    alternateLocale: "es_US",
    images: [
      {
        url: `${baseUrl}/images/og-share-2026.png`,
        width: 1200,
        height: 630,
        alt: "Adaptation Living — Award-Winning AI Automation & CRM Platform (G2 Top 50, Capterra Shortlist 2026)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [`${baseUrl}/images/og-share-2026.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/images/favicon-gold-a.png",
  },
  manifest: "/manifest.json",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? undefined,
    other: {
      ...(process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
        ? {
            "msvalidate.01":
              process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION,
          }
        : {}),
    },
  },
  alternates: {
    canonical: baseUrl,
    languages: {
      en: baseUrl,
      es: `${baseUrl}/es`,
    },
  },
  category: "technology",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(locales, locale)) {
    return children;
  }

  const messages = await getMessages();
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  const fbPixelId = process.env.NEXT_PUBLIC_FB_PIXEL_ID;
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;

  return (
    <html lang={locale} className={inter.variable}>
      <head>
        {/* Preconnect hints for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {gtmId && (
          <link
            rel="dns-prefetch"
            href="https://www.googletagmanager.com"
          />
        )}
        {fbPixelId && (
          <link rel="dns-prefetch" href="https://connect.facebook.net" />
        )}

        {/* Analytics (head-only: Meta Pixel + Clarity). GTM is rendered in <body> so its <noscript> iframe is a valid body child. */}
        {fbPixelId && <MetaPixel pixelId={fbPixelId} />}
        {clarityId && <Clarity projectId={clarityId} />}
      </head>
      <body>
        {/* GTM — placed as first child of <body>; component injects head <script> and body <noscript> correctly */}
        {gtmId && <GoogleTagManager gtmId={gtmId} />}
        <IntlProvider locale={locale} messages={messages}>
          {/* Skip to main content for accessibility */}
          <a href="#main-content" className="skip-nav">
            Skip to main content
          </a>

          {/* Site-wide Navigation */}
          <NavBar />

          {children}

          {/* Site-wide Footer */}
          <footer className="section-dark border-t border-[#2563EB]/20 py-16 px-6 sm:px-8">
            <div className="mx-auto max-w-[1400px]">
              <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:items-start">
                <div>
                  <p className="font-display text-2xl font-bold text-white tracking-[0.04em]">
                    ADAPTATION LIVING{" "}
                    <span className="text-[#2563EB] text-sm tracking-[0.28em]">LLC</span>
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[#94A3B8] max-w-md">
                    Adaptation OS — AI automation, CRM, and a complete business
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
                    Adaptation OS Vs
                  </p>
                  <ul className="space-y-2 text-sm">
                    {competitors.map((c) => (
                      <li key={c.slug}>
                        <a
                          href={`/vs/${c.slug}`}
                          className="text-[#94A3B8] hover:text-[#2563EB]"
                        >
                          Adaptation OS Vs {c.name}
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
                    <li><a href="/legal" className="text-[#94A3B8] hover:text-[#2563EB]">Privacy &amp; Terms</a></li>
                    <li><a href="/ls-2025.html" className="text-[#94A3B8] hover:text-[#2563EB]">LS-2025 Veteran Lifeline</a></li>
                  </ul>
                </div>
              </div>

              <div className="mt-12 border-t border-white/10 pt-8">
                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.26em] text-[#64748B]">
                  <span>Veteran-Owned Small Business (VOSB)</span>
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
        </IntlProvider>

        {/* GHL Chat Widget — floats in bottom corner, loads after page is interactive */}
        <Script
          id="ghl-chat-widget"
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="69db6e04d0d6ea75797b53f6"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
