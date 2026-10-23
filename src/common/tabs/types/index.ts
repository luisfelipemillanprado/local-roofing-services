import type { ReactNode } from "react";

/* one tab: its label plus the already-built panel content */
interface TabItem {
  key: string;
  label: string;
  panel: ReactNode;
}

export interface TabsProps {
  /* names the strip itself; each tab only ever names its own panel */
  label: string;
  tabs: TabItem[];
}
