import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://adaptationliving.com"),
  title: {
    default: "Adaptation Living LLC | AI Integration Studio | Veteran-Owned",
    template: "%s | Adaptation Living LLC",
  },
  description:
    "Veteran-owned AI integration studio. Production-ready AI agents, automated workflows, websites, and apps — with direct human support from day one. Since 2021.",
  keywords: [
    "AI integration",
    "workflow automation",
    "veteran-owned",
    "web development",
    "AI agents",
    "Arizona",
  ],
  authors: [{ name: "Brandon Bible", url: "https://adaptationliving.com" }],
  creator: "Adaptation Living LLC",
  openGraph: {
    type: "website",
    siteName: "Adaptation Living LLC",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cinzel.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
