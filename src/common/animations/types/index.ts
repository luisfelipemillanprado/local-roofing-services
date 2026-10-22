/* color keys resolved to color utilities inside PulseRing */
export type PulseColor = "primary" | "secondary" | "malachite";

export interface PulseRingProps {
  /* ring color key (resolved to a utility in PulseRing) */
  color: PulseColor;
  /* fully round the rings; defaults to the control radius */
  rounded?: boolean;
}

/* color keys resolved to color utilities inside LiveDot */
export type LiveDotColor = "malachite" | "citrine" | "cinnabar";

export interface LiveDotProps {
  /* dot and ring color key (resolved to a utility in LiveDot) */
  color: LiveDotColor;
}
