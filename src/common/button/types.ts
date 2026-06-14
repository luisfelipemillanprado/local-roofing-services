import type { ReactNode } from "react";

export type ButtonVariant = "primary" | "dark" | "outline" | "ghost";

export interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  withArrow?: boolean;
  className?: string;
}
