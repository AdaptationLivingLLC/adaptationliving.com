// @al/i18n — next-intl request config
//
// This file is the entry point the next-intl Next.js plugin expects. It
// resolves the current request's locale, loads the matching messages, and
// returns both to the rendering layer. Wired into next.config.ts via
// createNextIntlPlugin() pointing at this file path.
//
// App code NEVER imports from this file directly — it is a build-time
// integration point, not part of the public API surface.

import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";

import type { Locale } from "./config";
import { routing } from "./routing";

// Explicit switch-based loader rather than a template-literal dynamic import.
// Reasons:
//   1. TypeScript can verify exhaustiveness — adding a locale to ./config.ts
//      without adding a case here becomes a compile error.
//   2. Webpack/Next.js can statically analyze the import graph, producing
//      one code-split chunk per locale with perfect tree-shaking.
//   3. No runtime string-path gymnastics that could silently swallow a
//      missing file as an unhandled promise rejection.
async function loadMessages(locale: Locale) {
  switch (locale) {
    case "en":
      return (await import("./messages/en.json")).default;
    case "es":
      return (await import("./messages/es.json")).default;
  }
}

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale: Locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const messages = await loadMessages(locale);

  return {
    locale,
    messages,
  };
});
