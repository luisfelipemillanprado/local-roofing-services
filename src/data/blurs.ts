/**
 * Generic blur placeholders for `<Image placeholder="blur" blurDataURL={…}>`.
 *
 * Since the site references images by string `src` (`/images/…`), Next.js can't
 * auto-generate a blur, so we provide a small, generic one per image type
 * (a tiny solid-colour PNG that Next scales + blurs).
 */
export const blurs = {
  /** Dark blue-grey — content/section/project/service imagery. */
  image:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAEUlEQVR4nGPQMrTCihiGlgQAipolQQ9xxUMAAAAASUVORK5CYII=",
  /** Mid grey — testimonial avatars. */
  avatar:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAEUlEQVR4nGOoqGnCihiGlgQAhmRdgbNoafUAAAAASUVORK5CYII=",
} as const;
