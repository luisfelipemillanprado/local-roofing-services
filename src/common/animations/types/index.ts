/* color keys resolved to color utilities inside PulseRing */
export type PulseColor = "primary" | "secondary" | "malachite";

export interface PulseRingProps {
  /* ring color key (resolved to a utility in PulseRing) */
  color: PulseColor;
  /* fully round the rings; defaults to rounded-2xl */
  rounded?: boolean;
}
