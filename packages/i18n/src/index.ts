// @al/i18n — public API surface
//
// App code in the monorepo imports translation helpers, the locale type, and
// locale metadata from this module. Vendor APIs from next-intl are re-exported
// under branded aliases so the app never couples to next-intl's symbol names:
//
//   useT          → next-intl useTranslations        (Client Components)
//   getT          → next-intl getTranslations        (Server Components + metadata)
//   IntlProvider  → next-intl NextIntlClientProvider (root provider wrapper)
//
// Additional server-side helpers (getLocale, getFormatter, getMessages,
// getNow, getTimeZone) are re-exported under their original names because
// they have no obvious alternative branding and are called rarely enough
// that tracking their provenance through the codebase is acceptable.
//
// Locale metadata (the `locales` tuple, `Locale` type, label and direction
// maps) is re-exported from "./config.ts" so app code has a single-import
// surface for everything i18n-related.
//
// Sub-path entry points (./routing, ./navigation, ./request, ./middleware,
// ./config) exist for cases where app code needs a specific integration
// point (middleware wiring, the routing object, etc.) without pulling in
// the React-dependent surface.

export {
  NextIntlClientProvider as IntlProvider,
  useTranslations as useT,
} from "next-intl";

export {
  getFormatter,
  getLocale,
  getMessages,
  getNow,
  getTimeZone,
  getTranslations as getT,
} from "next-intl/server";

export {
  defaultLocale,
  localeDirection,
  localeLabels,
  localePrefix,
  locales,
} from "./config";

export type { Locale } from "./config";
