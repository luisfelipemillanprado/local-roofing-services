import { ZoomIn } from "lucide-react";
import type { ZoomButtonProps } from "@/common/image-viewer/types";

/* card control: opens the image viewer (needs a group parent for hover) */
export const ZoomButton = ({ label, onClick }: ZoomButtonProps) => (
  <button
    type="button"
    aria-label={label}
    onClick={onClick}
    className="grid size-10 place-items-center rounded-full bg-primary shadow-md transition-transform duration-300 group-hover:translate-x-1"
  >
    <ZoomIn className="size-5 text-white" />
  </button>
);
