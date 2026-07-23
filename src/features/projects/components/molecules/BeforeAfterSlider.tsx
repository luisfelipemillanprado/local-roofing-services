"use client";

import Image from "next/image";
import { ChevronsLeftRight } from "lucide-react";
import { useCallback, useRef, useState } from "react";
import type { KeyboardEvent, PointerEvent } from "react";
import { Text } from "@/common/text/components/Text";
import type { BeforeAfterSliderProps } from "@/features/projects/types";

/* draggable before/after comparison: after as base, before clipped from the left */
export const BeforeAfterSlider = ({ before, after, compareLabel }: BeforeAfterSliderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);

  /* divider position from a pointer x, clamped to the frame */
  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    setDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
    setFromClientX(event.clientX);
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (dragging) setFromClientX(event.clientX);
  };

  const onPointerUp = (event: PointerEvent<HTMLDivElement>) => {
    setDragging(false);
    event.currentTarget.releasePointerCapture(event.pointerId);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 2));
    else if (event.key === "ArrowRight") setPosition((p) => Math.min(100, p + 2));
  };

  return (
    <div
      ref={containerRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      className="relative aspect-[4/3] w-full cursor-ew-resize touch-none overflow-hidden rounded-card shadow-md select-none lg:aspect-auto lg:h-full"
    >
      {/* after: full base layer */}
      <Image
        src={after.src}
        alt={after.alt}
        fill
        draggable={false}
        className="pointer-events-none object-cover"
        sizes="(min-width: 1024px) 55vw, 100vw"
      />

      {/* before: overlay clipped to the left of the divider */}
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
        <Image
          src={before.src}
          alt={before.alt}
          fill
          draggable={false}
          className="pointer-events-none object-cover"
          sizes="(min-width: 1024px) 55vw, 100vw"
        />
      </div>

      {/* corner labels */}
      <span className="pointer-events-none absolute top-4 left-4 rounded-full bg-contrast px-3 py-1">
        <Text as="span" size="label" tone="white" weight="bold" tracking="wide" text={before.label} />
      </span>
      <span className="pointer-events-none absolute top-4 right-4 rounded-full bg-primary px-3 py-1">
        <Text as="span" size="label" tone="white" weight="bold" tracking="wide" text={after.label} />
      </span>

      {/* divider + draggable handle */}
      <div
        className="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-white"
        style={{ left: `${position}%` }}
      >
        <button
          type="button"
          role="slider"
          aria-label={compareLabel}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(position)}
          onKeyDown={onKeyDown}
          className="pointer-events-auto absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-white shadow-md"
        >
          <ChevronsLeftRight className="h-5 w-5 text-contrast" />
        </button>
      </div>
    </div>
  );
};
