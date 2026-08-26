import type { ReactNode } from "react";

export type SectionWrapperTone = "base" | "muted";

export interface SectionWrapperProps {
  children: ReactNode;
  tone?: SectionWrapperTone;
  id?: string;
}
