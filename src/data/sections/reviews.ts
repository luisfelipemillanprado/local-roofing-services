import { blurs } from "@/data/blurs";

/** Keys must match `review.items.<key>` in the messages (literal union → type-safe `t()`). */
export type ReviewKey = "paula" | "dennis" | "howard" | "grace" | "greg" | "tyler";

export type ReviewItem = {
  key: ReviewKey;
  avatar: string;
  blur: string;
};

/** Shared "Testimonials" section; ordered list (avatar/blur), text resolved by key. */
export const reviewsData: { items: ReviewItem[] } = {
  items: [
    { key: "paula", avatar: "/images/avatars/avatar1.webp", blur: blurs.avatar },
    { key: "dennis", avatar: "/images/avatars/avatar2.webp", blur: blurs.avatar },
    { key: "howard", avatar: "/images/avatars/avatar3.webp", blur: blurs.avatar },
    { key: "grace", avatar: "/images/avatars/avatar4.webp", blur: blurs.avatar },
    { key: "greg", avatar: "/images/avatars/avatar5.webp", blur: blurs.avatar },
    { key: "tyler", avatar: "/images/avatars/avatar6.webp", blur: blurs.avatar },
  ],
};
