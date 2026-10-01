import type { ReactNode } from "react";

/* one tab: its label plus the already-built panel content */
export interface TabsProps {
  tabs: { key: string; label: string; panel: ReactNode }[];
}
