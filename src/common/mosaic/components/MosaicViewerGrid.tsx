"use client";

import { useState } from "react";
import { ZoomButton } from "@/common/image-viewer/components/ZoomButton";
import { ImageViewer } from "@/common/image-viewer/components/ImageViewer";
import { MosaicList } from "@/common/mosaic/components/MosaicList";
import type { MosaicViewerGridProps } from "@/common/mosaic/types";

/* mosaic whose tiles open the full screen viewer */
export const MosaicViewerGrid = ({
  cards,
  actionLabel,
  closeLabel,
  previousLabel,
  nextLabel,
  pattern,
  insert,
}: MosaicViewerGridProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <MosaicList
        cards={cards}
        pattern={pattern}
        insert={insert}
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
