import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  // Multi-zone: this app owns /arsenal and /tools/*
  base: "/",
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
  ],
  output: "static",
});
