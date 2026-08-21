import clsx from "clsx";
import type { ViewerControlProps } from "@/shared-sections/projects/types";

/* placement within the viewer overlay */
const placementClass: Record<ViewerControlProps["placement"], string> = {
  close: "top-4 right-4",
  prev: "top-1/2 left-4 -translate-y-1/2",
  next: "top-1/2 right-4 -translate-y-1/2",
};

/* round overlay control: close / prev / next */
export const ViewerControl = ({ ref, placement, label, icon, onClick }: ViewerControlProps) => (
  <button
    ref={ref}
    type="button"
    aria-label={label}
    onClick={onClick}
    className={clsx(
      "absolute grid size-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20",
      placementClass[placement],
    )}
  >
    {icon}
  </button>
);
