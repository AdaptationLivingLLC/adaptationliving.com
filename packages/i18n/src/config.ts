// @al/i18n — locale configuration
//
// Single source of truth for locales, default locale, and display metadata.
// Both the routing layer (./routing.ts) and the request layer (./request.ts)
// read from this file. App code may also read from "@al/i18n/config" if it
// needs to render a locale switcher or check the default locale.
//
// Adding a new locale requires three coordinated edits:
//   1. Add the locale code to the `locales` tuple below.
//   2. Add matching entries in `localeLabels` and `localeDirection`.
//   3. Create `./messages/<locale>.json` and add a case in `./request.ts`.
// Removing a locale is the reverse plus any content audit.

export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

// "as-needed" means the default locale is served without a URL prefix (/about)
// while non-default locales are prefixed (/es/about). This is the SEO-correct
// choice for an English-primary site with Spanish as a secondary market.
export const localePrefix = "as-needed" as const;

export const localeLabels: Record<Locale, string> = {
  en: "English",
  es: "Español",
};

export const localeDirection: Record<Locale, "ltr" | "rtl"> = {
  en: "ltr",
  es: "ltr",
};
