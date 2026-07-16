import type { ReactNode } from "react";

export interface HeroWrapperProps {
  children: ReactNode;
  image: string;
  imageAlt: string;
  id?: string;
}
