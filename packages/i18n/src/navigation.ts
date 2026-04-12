// @al/i18n — localized navigation primitives
//
// These are the ONLY navigation primitives app code should use when linking
// between pages or performing server-side redirects. They handle locale-aware
// URL construction automatically based on the routing config.
//
// App code usage:
//   import { Link, useRouter, usePathname } from "@al/i18n/navigation";
//
// Do NOT import from "next-intl/navigation" or "next/link" directly in app
// code. If you need a navigation primitive that isn't re-exported here, add
// it here first so the abstraction seam stays intact across future library
// swaps.

import { createNavigation } from "next-intl/navigation";

import { routing } from "./routing";

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
