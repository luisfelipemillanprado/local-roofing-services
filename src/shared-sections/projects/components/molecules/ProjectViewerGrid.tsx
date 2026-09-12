"use client";

import { useState } from "react";
import { ZoomButton } from "@/common/image-viewer/components/ZoomButton";
import { ImageViewer } from "@/common/image-viewer/components/ImageViewer";
import { ProjectList } from "@/shared-sections/projects/components/molecules/ProjectList";
import type { ProjectViewerGridProps } from "@/shared-sections/projects/types";

/* projects page variant: masonry grid; each tile opens the project viewer */
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
      <ProjectList
        cards={cards}
        renderAction={(card, index) => (
          <ZoomButton
            label={`${card.description} ${actionLabel}`}
            onClick={() => setOpenIndex(index)}
            pulse
          />
        )}
      />
      {openIndex !== null && (
        <ImageViewer
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
