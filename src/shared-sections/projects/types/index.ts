import type { ReactNode, Ref } from "react";

export interface ProjectsProps {
  variant: "viewAll" | "contact";
  tone?: "base" | "muted"; /* section surface; keeps page section alternation correct */
  limit?: number;
}

export interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  action: ReactNode; /* trailing control: arrow link (home) or zoom button (gallery) */
}

/* resolved per-card item for the list */
interface ProjectCardItem extends Pick<ProjectCardProps, "image" | "title" | "description"> {
  key: string;
}

export interface ProjectGridProps {
  cards: ProjectCardItem[];
  renderAction: (card: ProjectCardItem, index: number) => ReactNode; /* per-card trailing control */
}

export interface ProjectViewerGridProps {
  cards: ProjectCardItem[];
  actionLabel: string;
}

export interface ProjectViewerProps {
  images: ProjectCardItem[];
  startIndex: number;
  onClose: () => void;
}

export interface ViewerControlProps {
  placement: "close" | "prev" | "next";
  label: string;
  icon: ReactNode;
  onClick: () => void;
  ref?: Ref<HTMLButtonElement>; /* focus target for the close control */
}
