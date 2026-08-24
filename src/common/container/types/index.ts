import type { ReactNode } from "react";

export interface ContainerProps {
  children: ReactNode;
  bleed?: boolean /* full-width below md (for full-bleed carousels), contained from md up */;
}
