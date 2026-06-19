export type ButtonVariant = "primary" | "dark" | "outline" | "ghost";

export interface ButtonProps {
  href: string;
  children: string;
  variant?: ButtonVariant;
  withArrow?: boolean;
  className?: string;
}
