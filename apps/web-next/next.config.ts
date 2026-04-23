import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  // Multi-zone: this app owns the root path
  // Child zones are handled via root vercel.json rewrites

  transpilePackages: ["@al/ui", "@al/analytics", "@al/i18n"],

  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.adaptationliving.com",
      },
    ],
  },

  async redirects() {
    return [
      // Canonical host: force non-www to www as a 308 Permanent so Google
      // stops flagging every URL as "temporary redirect (307)". This must
      // run before any content-level redirects so stale /foo.html paths
      // on the apex land on the canonical host in a single hop instead
      // of two.
      {
        source: "/:path*",
        has: [{ type: "host", value: "adaptationliving.com" }],
        destination: "https://www.adaptationliving.com/:path*",
        permanent: true,
      },
      // Stale .html paths from the pre-Next.js site. Permanent 308s so
      // Google drops them from the index in favor of the clean URLs.
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/contact.html", destination: "/contact", permanent: true },
      { source: "/intake.html", destination: "/intake", permanent: true },
      { source: "/services.html", destination: "/services", permanent: true },
      { source: "/packages.html", destination: "/services", permanent: true },
      { source: "/bthg.html", destination: "/", permanent: true },
      { source: "/lifesaver.html", destination: "/ls-2025.html", permanent: true },
      { source: "/ls-2025-legal.html", destination: "/legal", permanent: true },
      { source: "/ls2025-legal-privacy.html", destination: "/legal", permanent: true },
    ];
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);
