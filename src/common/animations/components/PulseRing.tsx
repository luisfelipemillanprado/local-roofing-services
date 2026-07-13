import type { PulseColor, PulseRingProps } from "@/common/animations/types";

/* staggered ring delays */
const LAYERS = [0, 0.7, 1.4];

/* text color per key — box-shadow halo via currentColor */
const glow: Record<PulseColor, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  malachite: "text-malachite",
};

/* expanding, fading rings — host must be relative isolate (scopes the -z-10) */
export const PulseRing = ({ color, rounded }: PulseRingProps) => (
  <>
    {LAYERS.map((delay) => (
      <span
        key={delay}
        aria-hidden
        style={{ animationDelay: `${delay}s` }}
        className={`absolute inset-0 -z-10 animate-soft-pulse ${
          rounded ? "rounded-full" : "rounded-2xl"
        } ${glow[color]}`}
      />
    ))}
  </>
);
