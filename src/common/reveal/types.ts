import type { ReactNode } from "react";

type RevealVariant = "fade-up" | "fade-in" | "scale-in";

export interface RevealProps {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
  /** Delay in seconds — used to stagger sibling reveals. */
  delay?: number;
  as?: "div" | "section" | "article" | "figure" | "li" | "span";
}
