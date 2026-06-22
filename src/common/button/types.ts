export type ButtonVariant = "primary" | "dark" | "outline" | "ghost";

export interface ButtonProps {
  href: string;
  children: string;
  variant?: ButtonVariant;
  withArrow?: boolean;
  className?: string;
  /* Temporary: hide below lg (the base inline-flex blocks a passed `hidden`). */
  desktopOnly?: boolean;
}
