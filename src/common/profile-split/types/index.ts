import type { ReactNode } from "react";

export interface ProfileSplitProps {
  /* image side: framed media with two floating overlays */
  media: ReactNode;
  badge: ReactNode;
  contact: ReactNode;
  /* copy side */
  heading: ReactNode;
  points: ReactNode;
  stats: ReactNode;
  action: ReactNode;
}
