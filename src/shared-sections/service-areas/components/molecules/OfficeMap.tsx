"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import type { OfficeMapProps } from "@/shared-sections/service-areas/types";

/* MapLibre + its CSS live in a split chunk, client only */
const OfficeMapCanvas = dynamic(
  () =>
    import("@/shared-sections/service-areas/components/molecules/OfficeMapCanvas").then(
      (mod) => mod.OfficeMapCanvas,
    ),
  { ssr: false },
);

/* map frame: reserves the box (card height, bento height from lg) and mounts the map once it nears the viewport */
export const OfficeMap = (props: OfficeMapProps) => {
  const frameRef = useRef<HTMLDivElement>(null);
  const [near, setNear] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setNear(true);
        observer.disconnect();
      },
      { rootMargin: "300px 0px" },
    );
    if (frameRef.current) observer.observe(frameRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={frameRef}
      data-office-map
      className="relative h-[clamp(17.375rem,48vw,19.375rem)] w-full overflow-hidden rounded-card border border-line bg-surface-muted shadow-md sm:h-[clamp(23.75rem,10rem+34.375vw,32rem)] lg:h-[calc(2*clamp(14rem,24vw,18rem)+1.5rem)]"
    >
      {near && <OfficeMapCanvas {...props} />}
    </div>
  );
};
