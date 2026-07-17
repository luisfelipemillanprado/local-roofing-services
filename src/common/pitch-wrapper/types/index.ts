import type { ReactNode } from "react";

export interface PitchWrapperProps {
  heading: ReactNode;
  stats: ReactNode;
  action: ReactNode;
  /* right column content */
  children: ReactNode;
}
