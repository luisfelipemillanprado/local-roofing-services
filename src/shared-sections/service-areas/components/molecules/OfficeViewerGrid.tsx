"use client";

import { useState } from "react";
import { ZoomButton } from "@/common/image-viewer/components/ZoomButton";
import { ImageViewer } from "@/common/image-viewer/components/ImageViewer";
import { OfficeList } from "@/shared-sections/service-areas/components/molecules/OfficeList";
import type { OfficeViewerGridProps } from "@/shared-sections/service-areas/types";

/* offices bento; each tile opens the shared image viewer */
export const OfficeViewerGrid = ({
  cards,
  actionLabel,
  closeLabel,
  previousLabel,
  nextLabel,
}: OfficeViewerGridProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <OfficeList
        cards={cards}
        renderAction={(card, index) => (
          <ZoomButton label={`${card.title} ${actionLabel}`} onClick={() => setOpenIndex(index)} />
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
