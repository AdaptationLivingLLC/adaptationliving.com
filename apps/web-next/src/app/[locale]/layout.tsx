import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import { Cinzel, Inter } from "next/font/google";
import { Linkedin } from "lucide-react";
import { hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { Clarity } from "@al/analytics/clarity";
// GA4 is loaded via GTM container — do not add GoogleAnalytics here
import { GoogleTagManager } from "@al/analytics/gtm";
import { MetaPixel } from "@al/analytics/meta-pixel";
import { IntlProvider, locales } from "@al/i18n";
import "@al/ui/globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
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
        url: `${baseUrl}/images/banner.jpg`,
        width: 1200,
        height: 630,
        alt: "Adaptation Living LLC — AI Automation and Web Development Studio in Phoenix AZ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [`${baseUrl}/images/banner.jpg`],
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
    <html lang={locale} className={`${cinzel.variable} ${inter.variable}`}>
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
          <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-[5%] py-4 sm:py-6 bg-gradient-to-b from-[#0B1D3A]/80 to-transparent backdrop-blur-sm">
            <a href="/" className="font-display text-base sm:text-lg font-bold text-white tracking-wide">
              ADAPTATION LIVING
              <span className="text-text-muted text-xs ml-2 font-display tracking-widest">
                LLC
              </span>
            </a>
            <div className="flex gap-3 sm:gap-6 lg:gap-8 items-center">
              <a
                href="/"
                className="text-[10px] sm:text-sm uppercase tracking-widest opacity-80 hover:opacity-100 hover:text-accent transition-all"
              >
                Home
              </a>
              <a
                href="/services"
                className="text-[10px] sm:text-sm uppercase tracking-widest opacity-80 hover:opacity-100 hover:text-accent transition-all"
              >
                Services
              </a>
              <a
                href="/showcase"
                className="text-[10px] sm:text-sm uppercase tracking-widest opacity-80 hover:opacity-100 hover:text-accent transition-all"
              >
                Showcase
              </a>
              <a
                href="/ai"
                className="text-[10px] sm:text-sm uppercase tracking-widest opacity-80 hover:opacity-100 hover:text-accent transition-all"
              >
                AI
              </a>
              <a
                href="/contact"
                className="text-[10px] sm:text-sm uppercase tracking-widest opacity-80 hover:opacity-100 hover:text-accent transition-all"
              >
                Contact
              </a>
              <a
                href="https://app.adaptationliving.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] sm:text-sm uppercase tracking-widest opacity-80 hover:opacity-100 hover:text-accent transition-all"
              >
                Sign In
              </a>
              <a
                href="/intake"
                className="text-[10px] sm:text-sm uppercase tracking-widest border border-white px-3 sm:px-5 py-1.5 sm:py-2 rounded hover:bg-white hover:text-bg-dark transition-all"
              >
                Start Project
              </a>
            </div>
          </nav>

          {children}

          {/* Site-wide Footer */}
          <footer className="bg-[#0B1D3A] py-16 px-8 text-center border-t border-glass-border">
            <div className="flex justify-center gap-6 mb-8">
              <a
                href="https://www.linkedin.com/company/adaptation-living"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent transition-all"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>

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
              &copy; 2021–2026 Adaptation Living LLC. All rights reserved.
              <br />
              3030 N Central Ave Suite 507, Phoenix, AZ 85012
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
