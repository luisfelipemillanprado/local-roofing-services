export interface ProjectsProps {
  variant: "viewAll" | "contact";
  limit?: number;
}

export interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  learnMore: string;
  href: string;
  delay?: number;
}

/* resolved per-card item for the list */
interface ProjectCardItem extends Pick<
  ProjectCardProps,
  "image" | "title" | "description" | "href" | "delay"
> {
  key: string;
}

export interface ProjectListProps {
  cards: ProjectCardItem[];
  learnMore: string;
  /* home: 4 below lg, all at lg */
  collapseBelowLg?: boolean;
}
