import type { ReactNode } from "react";

export interface PulseRingProps {
  children: ReactNode;
  /** Ring background color utility (e.g. "bg-primary"). */
  color: string;
  /** Fully round the rings; defaults to rounded-2xl to match the button. */
  rounded?: boolean;
}
