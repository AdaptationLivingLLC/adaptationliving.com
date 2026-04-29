import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import { hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { Clarity } from "@al/analytics/clarity";
// GA4 is loaded via GTM container — do not add GoogleAnalytics here
import { GoogleTagManager } from "@al/analytics/gtm";
import { MetaPixel } from "@al/analytics/meta-pixel";
import { Analytics } from "@vercel/analytics/next";
import { IntlProvider, locales } from "@al/i18n";
import { SiteChrome } from "../../components/site-chrome";
import "@al/ui/globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

const baseUrl = "https://www.adaptationliving.com";

// Single metadata source — Next.js forbids exporting both a static
// `metadata` object and a `generateMetadata` function from the same
// segment. Locale-aware canonical is computed from params.locale so
// /es/* pages get a self-referencing canonical instead of inheriting
// the English root.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const canonical = locale === "es" ? `${baseUrl}/es` : baseUrl;
  const ogLocale = locale === "es" ? "es_US" : "en_US";
  const altLocale = locale === "es" ? "en_US" : "es_US";
  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: "Adaptation Living LLC — AI Automation Phoenix AZ",
      template: "%s | Adaptation Living",
    },
    description:
      "Veteran-founded AI automation studio in Phoenix, AZ. AI voice and chat agents, custom websites, CRM, review automation, and workflow automation for small businesses, law firms, and mitigation specialists.",
    keywords: [
      "AI automation Phoenix AZ",
      "AI voice agent",
      "AI chat agent",
      "CRM automation Phoenix",
      "small business AI",
      "law firm intake automation",
      "mitigation specialist software",
      "Adaptation Living LLC",
    ],
    authors: [{ name: "Adaptation Living LLC", url: baseUrl }],
    creator: "Adaptation Living LLC",
    publisher: "Adaptation Living LLC",
    openGraph: {
      type: "website",
      siteName: "Adaptation Living LLC",
      locale: ogLocale,
      alternateLocale: altLocale,
      images: [
        {
          url: `${baseUrl}/images/og-share-2026-04-27.jpg`,
          width: 1200,
          height: 630,
          alt: "Adaptation Living LLC — AI, Automation & Web Development for Small Business",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      images: [`${baseUrl}/images/og-share-2026-04-27.jpg`],
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
    category: "technology",
    alternates: {
      canonical,
      languages: {
        en: baseUrl,
        es: `${baseUrl}/es`,
        "x-default": baseUrl,
      },
    },
  };
}

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
          <SiteChrome locale={locale}>{children}</SiteChrome>
        </IntlProvider>

        <Analytics />
      </body>
    </html>
  );
}
