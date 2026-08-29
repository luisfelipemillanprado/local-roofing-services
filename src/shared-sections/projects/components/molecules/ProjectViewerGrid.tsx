"use client";

import { useState } from "react";
import { ViewImageButton } from "@/shared-sections/projects/components/atoms/ViewImageButton";
import { ProjectGrid } from "@/shared-sections/projects/components/molecules/ProjectGrid";
import { ProjectViewer } from "@/shared-sections/projects/components/molecules/ProjectViewer";
import type { ProjectViewerGridProps } from "@/shared-sections/projects/types";

/* gallery variant: masonry grid; each tile opens the project viewer */
export const ProjectViewerGrid = ({
  cards,
  actionLabel,
  closeLabel,
  previousLabel,
  nextLabel,
}: ProjectViewerGridProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <ProjectGrid
        cards={cards}
        renderAction={(card, index) => (
          <ViewImageButton label={`${card.description} ${actionLabel}`} onClick={() => setOpenIndex(index)} />
        )}
      />
      {openIndex !== null && (
        <ProjectViewer
          cards={cards}
          startIndex={openIndex}
          onClose={() => setOpenIndex(null)}
          closeLabel={closeLabel}
          previousLabel={previousLabel}
          nextLabel={nextLabel}
        />
      )}
    </>
  );
};
