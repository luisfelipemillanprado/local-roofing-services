export interface TeamProps {
  variant: "viewAll" | "contact";
  limit?: number;
}

export interface TeamCardProps {
  image: string;
  title: string;
  description: string;
  learnMore: string;
  href: string;
  delay?: number;
}

/* resolved per-card item for the list */
interface TeamCardItem extends Pick<TeamCardProps, "image" | "title" | "description" | "href" | "delay"> {
  key: string;
}

export interface TeamListProps {
  cards: TeamCardItem[];
  learnMore: string;
  /* home: 4 below lg, all at lg */
  collapseBelowLg?: boolean;
}
