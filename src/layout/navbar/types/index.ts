/* semantic keys for nav destinations (i18n label + icon lookup) */
export type NavLinkKey = "home" | "services" | "shop" | "projects" | "about" | "areas";

/* nav entry from data (route + icon, no translatable text) */
export type NavLinkData = {
  key: NavLinkKey;
  href: string;
  icon: NavLinkKey;
};

/* nav entry with its resolved label, passed to components */
export type NavLink = NavLinkData & { label: string };

export interface DesktopNavProps {
  navLinks: readonly NavLink[];
}

export interface MobileMenuProps {
  navLinks: readonly NavLink[];
  menuId: string;
  toggleMenuLabel: string;
}
