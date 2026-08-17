"use client";

import Image from "next/image";
import { ChevronsLeftRight } from "lucide-react";
import { useCallback, useRef, useState } from "react";
import type { KeyboardEvent, PointerEvent } from "react";
import { Tag } from "@/common/tag/components/Tag";
import type { BeforeAfterSliderProps } from "@/features/projects/types";

/* draggable before/after: after base, before clipped left */
export const BeforeAfterSlider = ({ before, after, compareLabel }: BeforeAfterSliderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);

  /* divider position from pointer x, clamped */
  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  const onPointerDown = (event: PointerEvent<HTMLButtonElement>) => {
    setDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
    setFromClientX(event.clientX);
  };

  const onPointerMove = (event: PointerEvent<HTMLButtonElement>) => {
    if (dragging) setFromClientX(event.clientX);
  };

  const onPointerUp = (event: PointerEvent<HTMLButtonElement>) => {
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
      className="relative mx-auto aspect-6/5 w-full max-w-5xl overflow-hidden rounded-2xl shadow-md select-none md:aspect-1024/572"
    >
      {/* after: full base layer */}
      <Image
        src={after.src}
        alt={after.alt}
        fill
        draggable={false}
        className="pointer-events-none object-cover"
        sizes="(max-width: 1024px) 100vw, 1024px"
      />

      {/* before: overlay clipped at the divider */}
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
        <Image
          src={before.src}
          alt={before.alt}
          fill
          draggable={false}
          className="pointer-events-none object-cover"
          sizes="(max-width: 1024px) 100vw, 1024px"
        />
      </div>

      {/* corner labels */}
      <span className="pointer-events-none absolute bottom-4 left-4">
        <Tag tone="contrast" text={before.label} />
      </span>
      <span className="pointer-events-none absolute top-4 right-4">
        <Tag text={after.label} />
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
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onKeyDown={onKeyDown}
          className="pointer-events-auto absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize touch-none items-center justify-center rounded-full bg-white shadow-md"
        >
          <ChevronsLeftRight className="h-5 w-5 text-contrast" />
        </button>
      </div>
    </div>
  );
};
