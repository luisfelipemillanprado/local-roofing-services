"use client";

import { useEffect, useRef, useState } from "react";

/* true once the element nears the viewport; its own observer, disconnected on the first hit */
export const useNearViewport = (rootMargin: string) => {
  const ref = useRef<HTMLDivElement>(null);
  const [near, setNear] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setNear(true);
        observer.disconnect();
      },
      { rootMargin },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [rootMargin]);

  return { ref, near };
};
