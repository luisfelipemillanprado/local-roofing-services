export interface ProjectsProps {
  exploreHref?: string;
  limit?: number;
}

/* single gallery card */
export interface ProjectCardProps {
  image: string;
  title: string;
  category: string;
  delay?: number;
}

/* resolved per-project item for the list */
interface ProjectItem extends ProjectCardProps {
  key: string;
}

export interface ProjectsGalleryProps {
  items: ProjectItem[];
  /* home: 4 below lg, all at lg */
  collapseBelowLg?: boolean;
}
