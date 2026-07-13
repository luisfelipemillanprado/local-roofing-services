import type { ReactNode } from "react";

export type SectionWrapperTone = "base" | "muted" | "dark";

export interface SectionWrapperProps {
  children: ReactNode;
  tone?: SectionWrapperTone;
  id?: string;
}
