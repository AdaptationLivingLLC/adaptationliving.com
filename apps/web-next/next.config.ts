import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  // Multi-zone: this app owns the root path
  // Child zones are handled via root vercel.json rewrites

  transpilePackages: ["@al/ui", "@al/analytics", "@al/i18n", "three", "@react-three/fiber", "@react-three/drei"],
  serverExternalPackages: ["three", "@react-three/fiber", "@react-three/drei"],

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

export default withNextIntl(nextConfig);
