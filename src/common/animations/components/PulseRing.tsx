import clsx from "clsx";
import type { PulseRingProps } from "@/common/animations/types";

/* Staggered ring delays. */
const LAYERS = [0, 0.7, 1.4];

/* Expanding, fading rings behind children. */
export const PulseRing = ({ children, color, rounded }: PulseRingProps) => (
  <div className="relative w-fit">
    {LAYERS.map((delay) => (
      <span
        key={delay}
        aria-hidden
        style={{ animationDelay: `${delay}s` }}
        className={clsx(
          "absolute inset-0 -z-10 animate-soft-pulse",
          rounded ? "rounded-full" : "rounded-2xl",
          color,
        )}
      />
    ))}
    {children}
  </div>
);
