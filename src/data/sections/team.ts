/* Team section: ordered items (image), text by key */
export const teamData = {
  /* CTA per variant: i18n key (text) + href (destination) */
  ctaHref: {
    viewAll: { key: "action.viewAll", href: "/about" },
    contact: { key: "action.contact", href: "#contact" },
  },
  /* slug = detail-page route id (/team/[slug]) */
  items: [
    { key: "rodger", slug: "rodger-struck", image: "/images/team/team1.webp" },
    { key: "marcus", slug: "marcus-hale", image: "/images/team/team2.webp" },
    { key: "devin", slug: "devin-cole", image: "/images/team/team3.webp" },
    { key: "travis", slug: "travis-boone", image: "/images/team/team4.webp" },
    { key: "elena", slug: "elena-vargas", image: "/images/team/team5.webp" },
    { key: "caleb", slug: "caleb-foster", image: "/images/team/team6.webp" },
  ],
} as const;
