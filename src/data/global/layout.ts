import type { NavLinkData } from "@/common/navbar/types";
import type { FloatingActionData } from "@/common/floating-contact/types";
import { company } from "@/data/site";

/** Site-wide layout shell data (navbar, floating-contact); labels by key. */
export const layoutData = {
  navbar: {
    menuId: "mobile-menu",
    homeHref: "/" /* logo link target (site root) */,
    getFreeQuoteHref: "#contact",
    phone: company.phone,
    links: [
      { key: "home", href: "/", icon: "home" },
      { key: "services", href: "/services", icon: "services" },
      { key: "products", href: "/products", icon: "products" },
      { key: "projects", href: "/projects", icon: "projects" },
      { key: "about", href: "/about", icon: "about" },
      // Desktop-only dropdown; flattened into individual links on mobile.
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
    actions: [{ key: "whatsapp", external: true }, { key: "call" }] satisfies FloatingActionData[],
  },
};
