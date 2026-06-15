import type { ReactNode } from "react";

export interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center" | "center-mobile";
  theme?: "light" | "dark";
  className?: string;
}
