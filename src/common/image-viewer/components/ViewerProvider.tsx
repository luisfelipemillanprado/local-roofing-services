"use client";

import { createContext, use, useState } from "react";
import { ZoomButton } from "@/common/image-viewer/components/ZoomButton";
import { ImageViewer } from "@/common/image-viewer/components/ImageViewer";
import type { ViewerProviderProps, ViewerZoomButtonProps } from "@/common/image-viewer/types";

/* seam for the buttons: everything between them and this state is server rendered */
const ViewerContext = createContext<(index: number) => void>(() => {});

/* owns the open index so the grid it wraps never has to become a client component */
export const ViewerProvider = ({
  cards,
  children,
  closeLabel,
  previousLabel,
  nextLabel,
}: ViewerProviderProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <ViewerContext value={setOpenIndex}>
      {children}
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
    </ViewerContext>
  );
};

/* sits with the provider because a handler cannot cross from the server: it comes from the context */
export const ViewerZoomButton = ({ index, label }: ViewerZoomButtonProps) => {
  const open = use(ViewerContext);

  return <ZoomButton label={label} onClick={() => open(index)} pulse />;
};
