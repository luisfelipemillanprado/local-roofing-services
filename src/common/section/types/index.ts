import type { ReactNode } from "react";

export type SectionTone = "base" | "muted" | "dark";

export interface SectionProps {
  children: ReactNode;
  tone?: SectionTone;
  id?: string;
}
