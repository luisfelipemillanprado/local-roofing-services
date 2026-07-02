/** Keys must match `team.members.<key>` in the messages (literal union → type-safe `t()`). */
export type TeamKey = "rodger" | "marcus" | "devin" | "travis" | "elena" | "caleb";

export type TeamMember = {
  key: TeamKey;
  image: string;
};

/** Shared "Team" section; ordered list (image), text resolved by key. */
export const teamData: { members: TeamMember[] } = {
  members: [
    { key: "rodger", image: "/images/team/team1.webp" },
    { key: "marcus", image: "/images/team/team2.webp" },
    { key: "devin", image: "/images/team/team3.webp" },
    { key: "travis", image: "/images/team/team4.webp" },
    { key: "elena", image: "/images/team/team5.webp" },
    { key: "caleb", image: "/images/team/team6.webp" },
  ],
};
