import { blurs } from "@/data/blurs";

/** Keys must match `review.items.<key>` in the messages (literal union → type-safe `t()`). */
export type ReviewKey = "paula" | "dennis" | "howard" | "grace" | "greg" | "tyler";

export type ReviewItem = {
  key: ReviewKey;
  avatar: string;
  blur: string;
  rating: number;
};

/**
 * Shared "Testimonials" (reviews) section. The ordered list (with avatar/blur/rating)
 * lives here; the text is resolved by `key` from next-intl — no positional index merge.
 */
export const reviewsSection: { items: ReviewItem[] } = {
  items: [
    { key: "paula", avatar: "/images/avatars/avatar1.webp", blur: blurs.avatar, rating: 5 },
    { key: "dennis", avatar: "/images/avatars/avatar2.webp", blur: blurs.avatar, rating: 5 },
    { key: "howard", avatar: "/images/avatars/avatar3.webp", blur: blurs.avatar, rating: 5 },
    { key: "grace", avatar: "/images/avatars/avatar4.webp", blur: blurs.avatar, rating: 5 },
    { key: "greg", avatar: "/images/avatars/avatar5.webp", blur: blurs.avatar, rating: 5 },
    { key: "tyler", avatar: "/images/avatars/avatar6.webp", blur: blurs.avatar, rating: 5 },
  ],
};
