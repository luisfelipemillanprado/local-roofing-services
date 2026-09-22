import { company } from "@/data/site";

/* Shop product-detail scaffold: shared CTAs and panels.
   Per-product specs, SKU, warranty and extra gallery shots are still pending. */
export const productDetailData = {
  /* quote lands on the contact form; call dials the listed number */
  quoteCta: { key: "action.quote", href: "#contact" },
  callCta: { key: "action.call", href: company.phoneHref },
  /* installation upsell routes into the same contact form */
  installCta: { key: "detail.install.cta", href: "#contact" },
  /* trust rows: one copy group per key, icons live in the panel */
  trust: ["materials", "brands", "installation", "warranty"],
  /* image viewer control labels by key */
  viewer: {
    zoom: "detail.viewImage",
    close: "detail.close",
    previous: "detail.previous",
    next: "detail.next",
  },
} as const;
