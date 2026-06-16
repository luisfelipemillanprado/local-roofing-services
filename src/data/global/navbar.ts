import type { NavLinkIcon } from "@/common/navbar/types";

/** Same-page anchor for the navbar "get a quote" CTA. */
export const quoteHref = "#contact";

/**
 * Navbar metadata. Labels/hrefs come from the navbar messages; this maps each
 * destination (by href) to a semantic icon key — pure data, no UI dependency.
 * The key is resolved to an actual icon component in the navbar UI.
 */
const navIconKeys: Record<string, NavLinkIcon> = {
  "/": "home",
  "/about": "about",
  "/services": "services",
  "/projects": "projects",
  "/#pricing": "pricing",
  "/#contact": "contact",
};

/** Resolve the semantic icon key for a nav destination (falls back to "home"). */
export const navIconKeyFor = (href: string): NavLinkIcon => navIconKeys[href] ?? "home";
