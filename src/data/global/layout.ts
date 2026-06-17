import type { NavLinkData } from "@/common/navbar/types";

/** Site-wide layout shell data (navbar, later footer/floating-contact); labels by key. */
export const layoutData = {
  navbar: {
    menuId: "mobile-menu",
    getFreeQuoteHref: "#contact",
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
};
