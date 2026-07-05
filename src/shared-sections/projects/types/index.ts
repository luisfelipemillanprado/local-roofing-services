export interface ProjectsProps {
  exploreHref?: string;
  limit?: number;
}

/* single gallery card */
export interface ProjectCardProps {
  image: string;
  title: string;
  category: string;
  learnMore: string;
  href: string;
  delay?: number;
}

/* resolved per-project item for the list */
interface ProjectItem extends Pick<ProjectCardProps, "image" | "title" | "category" | "href" | "delay"> {
  key: string;
}

export interface ProjectsGalleryProps {
  items: ProjectItem[];
  learnMore: string;
  /* home: 4 below lg, all at lg */
  collapseBelowLg?: boolean;
}
