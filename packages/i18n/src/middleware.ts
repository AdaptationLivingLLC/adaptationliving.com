// @al/i18n — locale middleware factory
//
// Factory that returns a next-intl middleware bound to our routing config.
// The app wires this into its edge-runtime entry file (middleware.ts on
// Next.js 15 and earlier; proxy.ts on Next.js 16+) like so:
//
//   // apps/web-next/src/proxy.ts (Next 16+)
//   import {
//     createAppIntlMiddleware,
//     defaultLocaleMatcher,
//   } from "@al/i18n/middleware";
//
//   export default createAppIntlMiddleware();
//
//   export const config = { matcher: defaultLocaleMatcher };
//
// If the app needs to compose locale middleware with other concerns (auth,
// rate limiting, geo redirects), call the returned function inside a custom
// middleware rather than re-exporting it directly — that way the composition
// order stays explicit at the app level.

import createIntlMiddleware from "next-intl/middleware";

import { routing } from "./routing";

export const createAppIntlMiddleware = () => createIntlMiddleware(routing);

// Standard Next.js matcher that skips API routes, Next internals, Vercel
// internals, and files with extensions (static assets, images, etc.).
// Apps may override this if they need additional exclusion patterns.
export const defaultLocaleMatcher = "/((?!api|trpc|_next|_vercel|.*\\..*).*)";
