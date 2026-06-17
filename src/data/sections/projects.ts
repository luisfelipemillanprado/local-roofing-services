import { blurs } from "@/data/blurs";

/** Keys must match `project.items.<key>` in the messages (literal union → type-safe `t()`). */
export type ProjectKey =
  | "cedarHeights"
  | "summitBungalow"
  | "lakeviewContemporary"
  | "mapleGrove"
  | "northgateRanch"
  | "stonebridge"
  | "blackpineEstate"
  | "greystoneFarmhouse"
  | "sunsetRidge";

export type ProjectItem = {
  key: ProjectKey;
  image: string;
  blur: string;
};

/** Shared "Projects" gallery; ordered list (image/blur), text resolved by key. */
export const projectsSection: { items: ProjectItem[] } = {
  items: [
    { key: "cedarHeights", image: "/images/projects/project1.webp", blur: blurs.image },
    { key: "summitBungalow", image: "/images/projects/project2.webp", blur: blurs.image },
    { key: "lakeviewContemporary", image: "/images/projects/project3.webp", blur: blurs.image },
    { key: "mapleGrove", image: "/images/projects/project4.webp", blur: blurs.image },
    { key: "northgateRanch", image: "/images/projects/project5.webp", blur: blurs.image },
    { key: "stonebridge", image: "/images/projects/project6.webp", blur: blurs.image },
    { key: "blackpineEstate", image: "/images/projects/project7.webp", blur: blurs.image },
    { key: "greystoneFarmhouse", image: "/images/projects/project8.webp", blur: blurs.image },
    { key: "sunsetRidge", image: "/images/projects/project9.webp", blur: blurs.image },
  ],
};
