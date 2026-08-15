import { company } from "@/data/site";

/* Testimonials section: ordered items (avatar), text by key */
export const testimonialsData = {
  heading: {
    eyebrow: "eyebrow",
    titleLead: "titleLead",
    titleAccent: "titleAccent",
    description: "description",
  },
  /* CTA per variant: i18n key (text) + href (destination) */
  ctaHref: {
    viewAll: { key: "action.viewAll", href: "/about" },
    contact: { key: "action.contact", href: "#contact" },
  },
  /* Google review badge: score plus review count with a + suffix */
  rating: { score: `${company.googleScore}`, count: `${company.googleReviews}+` },
  /* Google logo asset, rendered by the GoogleMark atom */
  google: "/images/google/google.webp",
  /* one card per avatar; three groups of six, gender mixed */
  items: [
    /* company: quality and commitment */
    { key: "paula", avatar: "/images/avatars/avatar-1.webp" },
    { key: "greg", avatar: "/images/avatars/avatar-9.webp" },
    { key: "vanessa", avatar: "/images/avatars/avatar-6.webp" },
    { key: "curtis", avatar: "/images/avatars/avatar-14.webp" },
    { key: "owen", avatar: "/images/avatars/avatar-18.webp" },
    { key: "marcus", avatar: "/images/avatars/avatar-11.webp" },
    /* services */
    { key: "carmen", avatar: "/images/avatars/avatar-3.webp" },
    { key: "dennis", avatar: "/images/avatars/avatar-7.webp" },
    { key: "sofia", avatar: "/images/avatars/avatar-5.webp" },
    { key: "howard", avatar: "/images/avatars/avatar-8.webp" },
    { key: "bradley", avatar: "/images/avatars/avatar-15.webp" },
    { key: "frank", avatar: "/images/avatars/avatar-17.webp" },
    /* projects */
    { key: "diana", avatar: "/images/avatars/avatar-2.webp" },
    { key: "victor", avatar: "/images/avatars/avatar-12.webp" },
    { key: "grace", avatar: "/images/avatars/avatar-4.webp" },
    { key: "nathan", avatar: "/images/avatars/avatar-16.webp" },
    { key: "elliot", avatar: "/images/avatars/avatar-13.webp" },
    { key: "tyler", avatar: "/images/avatars/avatar-10.webp" },
  ],
} as const;
