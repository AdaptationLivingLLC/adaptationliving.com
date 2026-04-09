import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Multi-zone: this app owns the root path
  // Child zones are handled via root vercel.json rewrites

  transpilePackages: ["@al/ui", "@al/analytics", "@al/i18n"],

  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "adaptationliving.com",
      },
    ],
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

export default nextConfig;
