export interface ProjectsProps {
  variant: "viewAll" | "contact";
  tone?: "base" | "muted"; /* section surface; keeps page section alternation correct */
  limit?: number;
}

export interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  href?: string;
  actionLabel: string;
}

/* resolved per-card item for the list */
interface ProjectCardItem extends Pick<ProjectCardProps, "image" | "title" | "description"> {
  key: string;
}

export interface ProjectListProps {
  cards: ProjectCardItem[];
  href?: string;
  actionLabel: string;
}
