import type { ReactNode } from "react";

export interface ProjectsProps {
  variant: "viewAll" | "contact";
  tone?: "base" | "muted"; /* section surface; keeps page section alternation correct */
  limit?: number;
  offset?: number; /* skip items so about can show a different six than home */
}

export interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  action: ReactNode; /* trailing control: arrow link (home/about) or zoom button (projects page) */
  sizes: string; /* next/image sizes; featured vs stacked cells differ from lg up */
}

/* resolved per-card item for the list */
interface ProjectCardItem extends Pick<ProjectCardProps, "image" | "title" | "description"> {
  key: string;
}

export interface ProjectListProps {
  cards: ProjectCardItem[];
  renderAction: (card: ProjectCardItem, index: number) => ReactNode; /* per-card trailing control */
}

export interface ProjectViewerGridProps {
  cards: ProjectCardItem[];
  actionLabel: string;
  closeLabel: string;
  previousLabel: string;
  nextLabel: string;
}
