export interface ProjectsProps {
  variant: "viewAll" | "contact";
  limit?: number;
}

export interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  viewDetails: string;
  href: string;
}

/* resolved per-card item for the list */
interface ProjectCardItem extends Pick<ProjectCardProps, "image" | "title" | "description" | "href"> {
  key: string;
}

export interface ProjectListProps {
  cards: ProjectCardItem[];
  viewDetails: string;
}
