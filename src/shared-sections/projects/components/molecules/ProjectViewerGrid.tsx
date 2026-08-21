"use client";

import { useState } from "react";
import { ZoomIn } from "lucide-react";
import { ProjectGrid } from "@/shared-sections/projects/components/molecules/ProjectGrid";
import { ProjectViewer } from "@/shared-sections/projects/components/molecules/ProjectViewer";
import type { ProjectViewerGridProps } from "@/shared-sections/projects/types";

/* gallery variant: each card opens the project viewer */
export const ProjectViewerGrid = ({ cards, actionLabel }: ProjectViewerGridProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <ProjectGrid
        cards={cards}
        renderAction={(card, index) => (
          <button
            type="button"
            aria-label={`${card.description} ${actionLabel}`}
            onClick={() => setOpenIndex(index)}
            className="grid size-10 place-items-center rounded-full bg-primary transition-transform duration-300 group-hover:translate-x-1"
          >
            <ZoomIn className="size-5 text-white" />
          </button>
        )}
      />
      {openIndex !== null && (
        <ProjectViewer cards={cards} startIndex={openIndex} onClose={() => setOpenIndex(null)} />
      )}
    </>
  );
};
