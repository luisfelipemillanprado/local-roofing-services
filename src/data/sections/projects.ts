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
  highlighted?: boolean;
};

/** Shared "Projects" gallery; ordered list (image), text resolved by key. */
export const projectsData: { items: ProjectItem[] } = {
  items: [
    { key: "cedarHeights", image: "/images/projects/project1.webp" },
    { key: "summitBungalow", image: "/images/projects/project2.webp", highlighted: true },
    { key: "lakeviewContemporary", image: "/images/projects/project3.webp" },
    { key: "mapleGrove", image: "/images/projects/project4.webp" },
    { key: "northgateRanch", image: "/images/projects/project5.webp" },
    { key: "stonebridge", image: "/images/projects/project6.webp" },
    { key: "blackpineEstate", image: "/images/projects/project7.webp" },
    { key: "greystoneFarmhouse", image: "/images/projects/project8.webp" },
    { key: "sunsetRidge", image: "/images/projects/project9.webp" },
  ],
};
