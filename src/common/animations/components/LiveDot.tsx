import type { LiveDotColor, LiveDotProps } from "@/common/animations/types";

/* background per key — both layers carry it, so the ring matches the dot */
const dots: Record<LiveDotColor, string> = {
  primary: "bg-primary",
  malachite: "bg-malachite",
  muted: "bg-foreground-muted",
};

/* live status dot with ping ring */
export const LiveDot = ({ color }: LiveDotProps) => (
  <span aria-hidden className="relative grid size-2">
    <span className={`absolute size-full animate-ping rounded-full opacity-75 ${dots[color]}`} />
    <span className={`relative size-full rounded-full ${dots[color]}`} />
  </span>
);
