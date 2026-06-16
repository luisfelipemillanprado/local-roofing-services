/** Shared types and interfaces for the navbar and its components. */

/** Semantic icon keys for nav destinations (resolved to an icon in the UI). */
export type NavLinkIcon =
  | "home"
  | "about"
  | "services"
  | "projects"
  | "pricing"
  | "contact";

/** A navigation entry: label/href come from the messages, icon from the data layer. */
export interface NavLink {
  label: string;
  href: string;
  icon: NavLinkIcon;
}

export interface MobileMenuProps {
  navLinks: readonly NavLink[];
  toggleMenuLabel: string;
}

export interface ThemeToggleProps {
  className?: string;
}

export interface LanguageSwitchProps {
  className?: string;
}
