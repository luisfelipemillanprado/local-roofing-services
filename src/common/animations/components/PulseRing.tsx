import clsx from "clsx";
import type { PulseRingProps } from "@/common/animations/types";

// Staggered delays so the concentric rings ripple out continuously.
const LAYERS = [0, 0.7, 1.4];

// Renders expanding, fading rings behind its children to draw attention.
export function PulseRing({ children, color, rounded }: PulseRingProps) {
  return (
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
}
