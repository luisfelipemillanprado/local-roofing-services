"use client";

import { useRevealOnScroll } from "@/hooks/common/reveal/useRevealOnScroll";
import type { RevealProps } from "@/common/reveal/types";

/* client scroll reveal wrapper; children stay server rendered */
export const Reveal = ({
  children,
  className,
  variant = "fade-up",
  delay = 0,
  as: Tag = "div",
}: RevealProps) => {
  const { ref, shown } = useRevealOnScroll();

  return (
    <Tag
      /* @ts-expect-error — ref type varies across the allowed intrinsic tags */
      ref={ref}
      data-reveal={variant}
      className={`${className ?? ""} ${shown ? "is-visible" : ""}`}
      style={delay ? { animationDelay: `${delay}s` } : undefined}
    >
      {children}
    </Tag>
  );
};
