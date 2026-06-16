/** Shared types and interfaces for the navbar and its components. */

/** A single navigation entry (label + destination). */
export type NavLink = { label: string; href: string };

/** Props for the mobile menu island (trigger + floating panel). */
export type MobileMenuProps = {
  navLinks: NavLink[];
  toggleMenuLabel: string;
};

/** Props for the theme toggle button. */
export type ThemeToggleProps = { className?: string };

/** Props for the language switch button. */
export type LanguageSwitchProps = { className?: string };
