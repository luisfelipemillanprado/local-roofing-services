import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Media } from "@/common/media/components/Media";
import { Text } from "@/common/text/components/Text";
import { ViewerControl } from "@/shared-sections/projects/components/atoms/ViewerControl";
import type { ProjectViewerProps } from "@/shared-sections/projects/types";

/* modal image viewer: backdrop, prev/next, caption; portaled above the app shell */
export const ProjectViewer = ({
  cards,
  startIndex,
  onClose,
  closeLabel,
  previousLabel,
  nextLabel,
}: ProjectViewerProps) => {
  const [current, setCurrent] = useState(startIndex);
  const closeRef = useRef<HTMLButtonElement>(null);
  const count = cards.length;

  const prev = useCallback(() => setCurrent((c) => (c - 1 + count) % count), [count]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % count), [count]);

  /* on open: lock scroll and move focus into the dialog */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  /* keyboard: escape closes, arrows navigate */
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      else if (event.key === "ArrowLeft") prev();
      else if (event.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, prev, next]);

  if (typeof document === "undefined") return null;
  const project = cards[current];

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      className="theme-dark fixed inset-0 z-(--z-modal) grid place-items-center p-4"
    >
      {/* backdrop: click to close */}
      <div onClick={onClose} className="absolute inset-0 bg-contrast/70 backdrop-blur-md" />

      <figure className="relative grid w-full max-w-5xl justify-items-center gap-4">
        <Media
          src={project.image}
          alt={project.title}
          shape="showcase"
          sizes="(max-width: 1024px) 90vw, 1024px"
        />
        <figcaption className="grid justify-items-center gap-1 text-center">
          <Text as="span" size="body" weight="bold" text={project.title} />
          <Text as="span" size="body" tone="muted" text={project.description} />
        </figcaption>
      </figure>

      {/* controls: paint above the image */}
      <ViewerControl
        ref={closeRef}
        placement="close"
        label={closeLabel}
        icon={<X className="size-5 text-white" />}
        onClick={onClose}
      />
      <ViewerControl
        placement="prev"
        label={previousLabel}
        icon={<ChevronLeft className="size-6 text-white" />}
        onClick={prev}
      />
      <ViewerControl
        placement="next"
        label={nextLabel}
        icon={<ChevronRight className="size-6 text-white" />}
        onClick={next}
      />
    </div>,
    document.body,
  );
};
