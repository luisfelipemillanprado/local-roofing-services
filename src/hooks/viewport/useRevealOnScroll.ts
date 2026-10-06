"use client";

import { useEffect, useRef, useState } from "react";

/* one shared IntersectionObserver for all reveals; fires its callback once, then unobserves */
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

/* true once the element has been 20% in view; visibility in state to survive re-renders */
export const useRevealOnScroll = () => {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || shown) return;
    /* no IntersectionObserver: reveal immediately so content isn't stuck hidden */
    if (typeof IntersectionObserver === "undefined") {
      /* eslint-disable-next-line react-hooks/set-state-in-effect */
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

  return { ref, shown };
};
