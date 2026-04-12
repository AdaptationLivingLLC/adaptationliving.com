import { createAppIntlMiddleware } from "@al/i18n/middleware";

export default createAppIntlMiddleware();

// Matcher must be a static string literal for Next.js to parse at compile time.
// Matches all paths except: api routes, trpc, Next internals, Vercel internals,
// and files with extensions (static assets).
export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
