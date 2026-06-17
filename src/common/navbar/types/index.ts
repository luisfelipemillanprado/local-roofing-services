/** Shared types and interfaces for the navbar and its components. */

/** Semantic keys for nav destinations (used for the i18n label and icon lookup). */
export type NavLinkKey =
  | "home"
  | "about"
  | "services"
  | "projects"
  | "pricing"
  | "contact"
  | "reviews"
  | "products"
  | "more";

/** Leaf nav entry from the data layer (route + icon, no translatable text). */
export type NavLeafData = {
  key: NavLinkKey;
  href: string;
  icon: NavLinkKey;
};

/** Group nav entry: opens a desktop dropdown, has no route of its own. */
export type NavGroupData = {
  key: NavLinkKey;
  icon: NavLinkKey;
  children: NavLeafData[];
};

/** A nav entry is either a leaf (navigates) or a group (dropdown). */
export type NavLinkData = NavLeafData | NavGroupData;

/** Narrow a raw data entry to a group. */
export const isNavGroupData = (link: NavLinkData): link is NavGroupData => {
  return "children" in link;
}

/** Leaf with its resolved (translated) label, passed to the components. */
export type NavLeaf = NavLeafData & { label: string };

/** Group with its resolved label and resolved leaf children. */
export type NavGroup = Omit<NavGroupData, "children"> & {
  label: string;
  children: NavLeaf[];
};

/** Resolved nav entry passed to the components. */
export type NavLink = NavLeaf | NavGroup;

/** Narrow a resolved nav entry to a group. */
export const isNavGroup = (link: NavLink): link is NavGroup => {
  return "children" in link;
}

export interface NavDropdownProps {
  label: string;
  links: readonly NavLeaf[];
}

export interface MobileMenuProps {
  navLinks: readonly NavLeaf[];
  menuId: string;
  toggleMenuLabel: string;
}

export interface ThemeToggleProps {
  className?: string;
}

export interface LanguageSwitchProps {
  className?: string;
}
