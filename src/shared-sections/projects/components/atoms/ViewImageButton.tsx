import { ZoomIn } from "lucide-react";
import type { ViewImageButtonProps } from "@/shared-sections/projects/types";

/* card control: opens the project image viewer (needs a group parent for hover) */
export const ViewImageButton = ({ label, onClick }: ViewImageButtonProps) => (
  <button
    type="button"
    aria-label={label}
    onClick={onClick}
    className="grid size-10 place-items-center rounded-full bg-primary transition-transform duration-300 group-hover:translate-x-1"
  >
    <ZoomIn className="size-5 text-white" />
  </button>
);
