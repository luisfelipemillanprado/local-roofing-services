"use client";

import { useEffect, useRef, useState } from "react";
import type { RevealProps } from "@/common/reveal/types";

/**
 * One shared IntersectionObserver for every <Reveal> on the page (far cheaper
 * than one observer per element). Each observed node maps to a callback that
 * flips its React state once it enters the viewport, then unobserves (one-shot).
 */
let observer: IntersectionObserver | null = null;
const callbacks = new WeakMap<Element, () => void>();

function getObserver(): IntersectionObserver {
  if (observer) return observer;
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          callbacks.get(entry.target)?.();
          observer?.unobserve(entry.target);
          callbacks.delete(entry.target);
        }
      }
    },
    { threshold: 0.2 },
  );
  return observer;
}

/**
 * Lightweight scroll-reveal wrapper. The children are server-rendered and passed
 * through, so wrapping a section's content in <Reveal> keeps that content a
 * Server Component while this thin client leaf handles the animation trigger.
 *
 * Visibility is tracked in React state (not via an imperative `classList.add`)
 * so that the `is-visible` class survives re-renders — e.g. a locale switch or
 * theme change reconciles `className` without dropping the revealed state.
 */
export function Reveal({
  children,
  className,
  variant = "fade-up",
  delay = 0,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || shown) return;
    // No IntersectionObserver (very old browsers): reveal immediately so content
    // is never stuck hidden.
    if (typeof IntersectionObserver === "undefined") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShown(true);
      return;
    }
    const io = getObserver();
    callbacks.set(node, () => setShown(true));
    io.observe(node);
    return () => {
      io.unobserve(node);
      callbacks.delete(node);
    };
  }, [shown]);

  return (
    <Tag
      // @ts-expect-error — ref type varies across the allowed intrinsic tags.
      ref={ref}
      data-reveal={variant}
      className={`${className ?? ""}${shown ? " is-visible" : ""}`}
      style={delay ? { animationDelay: `${delay}s` } : undefined}
    >
      {children}
    </Tag>
  );
}
