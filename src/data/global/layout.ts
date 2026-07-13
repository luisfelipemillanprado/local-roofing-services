import type { NavLinkData } from "@/layout/navbar/types";
import type { FloatingActionData } from "@/layout/floating-contact/types";
import { company } from "@/data/site";

/* Site-wide layout shell data (logo, navbar, floating-contact); labels by key. */
export const layoutData = {
  logo: {
    src: company.logo,
    name: company.name,
    href: "/" /* logo link target (site root) */,
  },
  navbar: {
    menuId: "mobile-menu",
    ctaHref: { key: "action", href: "#contact" },
    phone: company.phone,
    links: [
      { key: "home", href: "/", icon: "home" },
      { key: "services", href: "/services", icon: "services" },
      { key: "products", href: "/products", icon: "products" },
      { key: "projects", href: "/projects", icon: "projects" },
      { key: "about", href: "/about", icon: "about" },
      /* Desktop-only dropdown; flattened into individual links on mobile. */
      {
        key: "more",
        icon: "more",
        children: [
          { key: "pricing", href: "/#pricing", icon: "pricing" },
          { key: "reviews", href: "/#testimonials", icon: "reviews" },
          { key: "contact", href: "/#contact", icon: "contact" },
        ],
      },
    ] satisfies NavLinkData[],
  },
  /* footer top links: label by key in the footer namespace */
  footer: {
    topLinks: [
      { key: "about", href: "/about" },
      { key: "services", href: "/services" },
      { key: "projects", href: "/projects" },
      { key: "pricing", href: "/#pricing" },
      { key: "contact", href: "/#contact" },
    ],
  },
  floatingContact: {
    name: company.name,
    actions: [
      { key: "whatsapp", href: company.whatsappHref, external: true },
      { key: "call", href: company.phoneHref },
    ] satisfies FloatingActionData[],
  },
} as const;
