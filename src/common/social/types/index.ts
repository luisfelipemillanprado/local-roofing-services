/* Semantic keys for the social profiles (used for the ICONS lookup). */
export type SocialKey = "facebook" | "x" | "instagram" | "youtube";

/* social profile entry from the data layer */
export type SocialData = { key: SocialKey; label: string; href: string };
