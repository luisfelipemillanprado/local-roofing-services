export interface ProjectsProps {
  exploreHref?: string;
  limit?: number;
}

/* single gallery card */
export interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  learnMore: string;
  href: string;
  delay?: number;
}

/* resolved per-project item for the list */
interface ProjectItem extends Pick<ProjectCardProps, "image" | "title" | "description" | "href" | "delay"> {
  key: string;
}

export interface ProjectsGalleryProps {
  items: ProjectItem[];
  learnMore: string;
  /* home: 4 below lg, all at lg */
  collapseBelowLg?: boolean;
}
