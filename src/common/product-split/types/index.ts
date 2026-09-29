import type { ReactNode } from "react";

export interface ProductSplitProps {
  /* gallery side: passed through whole, the caller owns its frame and thumb strip */
  media: ReactNode;
  /* copy side */
  heading: ReactNode;
  points: ReactNode;
  stats: ReactNode;
  action: ReactNode;
  footer: ReactNode;
}
