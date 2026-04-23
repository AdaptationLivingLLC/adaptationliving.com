// @al/i18n — routing primitive
//
// Wraps next-intl's `defineRouting` with the locale list and prefix strategy
// from ./config.ts. This is the one place next-intl's routing contract meets
// our own config surface. App code imports via "@al/i18n/routing" only if it
// needs the routing object itself (rare) — more commonly, app code uses
// "@al/i18n/navigation" and "@al/i18n/middleware", which internally depend
// on this module.

import { defineRouting } from "next-intl/routing";

import { defaultLocale, localePrefix, locales } from "./config";

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix,
  // Disable Accept-Language auto-redirects. With this set to true (the
  // next-intl default) visiting "/" from a Spanish browser 307s to "/es",
  // which Google's crawlers flag as "hreflang redirect" on every indexed
  // URL. Off = each URL is a 200 OK for the locale it was requested at.
  localeDetection: false,
});
