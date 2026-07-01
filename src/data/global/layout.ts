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
    getFreeQuoteHref: "#contact",
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
          { key: "reviews", href: "/#reviews", icon: "reviews" },
          { key: "contact", href: "/#contact", icon: "contact" },
        ],
      },
    ] satisfies NavLinkData[],
  },
  floatingContact: {
    name: company.name,
    whatsappHref: company.whatsappHref,
    phoneHref: company.phoneHref,
    actions: [{ key: "whatsapp", external: true }, { key: "call" }] satisfies FloatingActionData[],
  },
} as const;
