import { blurs } from "@/data/blurs";

/** Keys must match `team.members.<key>` in the messages (literal union → type-safe `t()`). */
export type TeamKey = "rodger" | "marcus" | "devin" | "travis" | "elena" | "caleb";

export type TeamMember = {
  key: TeamKey;
  image: string;
  blur: string;
};

/**
 * Shared "Team" section. The ordered list (with image/blur) lives here;
 * the text is resolved by `key` from next-intl — no positional index merge.
 */
export const teamSection: { members: TeamMember[] } = {
  members: [
    { key: "rodger", image: "/images/team/team1.webp", blur: blurs.image },
    { key: "marcus", image: "/images/team/team2.webp", blur: blurs.image },
    { key: "devin", image: "/images/team/team3.webp", blur: blurs.image },
    { key: "travis", image: "/images/team/team4.webp", blur: blurs.image },
    { key: "elena", image: "/images/team/team5.webp", blur: blurs.image },
    { key: "caleb", image: "/images/team/team6.webp", blur: blurs.image },
  ],
};
