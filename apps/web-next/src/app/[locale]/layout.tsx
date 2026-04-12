import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Cinzel, Inter } from "next/font/google";
import { hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { Clarity } from "@al/analytics/clarity";
import { GoogleAnalytics } from "@al/analytics/ga4";
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
    "Veteran-owned AI automation studio in Phoenix, AZ. Custom web development, GoHighLevel CRM setup, AI agents, workflow automation, and app development for small businesses. VOSB certified.",
  keywords: [
    "AI automation Phoenix AZ",
    "web development Phoenix",
    "GoHighLevel CRM setup",
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
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-MJ4PX9C3";
  const gaId = process.env.NEXT_PUBLIC_GA4_ID;
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

        {/* Analytics */}
        {gtmId && <GoogleTagManager gtmId={gtmId} />}
        {gaId && <GoogleAnalytics gaId={gaId} />}
        {fbPixelId && <MetaPixel pixelId={fbPixelId} />}
        {clarityId && <Clarity projectId={clarityId} />}
      </head>
      <body>
        <IntlProvider locale={locale} messages={messages}>
          {children}
        </IntlProvider>

        {/* GoHighLevel Chat Widget */}
        <div
          data-chat-widget
          data-widget-id="69db6e04d0d6ea75797b53f6"
          data-location-id="sGH3QiqY0eyRYqgyg1CX"
        />
        <script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="69db6e04d0d6ea75797b53f6"
          async
        />
      </body>
    </html>
  );
}
