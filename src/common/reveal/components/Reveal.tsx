"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import type { RevealProps } from "@/common/reveal/types";

/** One shared IntersectionObserver for all <Reveal>s; fires its callback once, then unobserves. */
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

/** Client scroll-reveal wrapper; children stay server-rendered, visibility in state to survive re-renders. */
export const Reveal = ({
  children,
  className,
  variant = "fade-up",
  delay = 0,
  as: Tag = "div",
}: RevealProps) => {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || shown) return;
    // No IntersectionObserver: reveal immediately so content isn't stuck hidden.
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
      className={clsx(className, shown && "is-visible")}
      style={delay ? { animationDelay: `${delay}s` } : undefined}
    >
      {children}
    </Tag>
  );
};
