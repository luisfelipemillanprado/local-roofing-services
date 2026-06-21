import Image from "next/image";
import { blurs } from "@/data/blurs";
import type { MediaProps, MediaShape, MediaOverlay } from "@/common/media/types";

/* Shape = full-bleed width + a per-tier clamped height (each device range grows min→max, then caps); breakpoints follow each consumer's grid columns */
const shapes: Record<MediaShape, string> = {
  /* services: 1 col → md 2 cols → lg 3 cols */
  wide: "h-[clamp(14rem,calc(3.7rem_+_43.8vw),16rem)] md:h-[clamp(16rem,calc(13rem_+_6.3vw),17rem)] lg:h-[clamp(17rem,calc(13rem_+_6.3vw),18rem)]",
  /* projects: 1 col → sm 2 cols → lg 4 cols */
  gallery:
    "h-[clamp(14rem,calc(3.7rem_+_43.8vw),16rem)] sm:h-[clamp(13rem,calc(4.6rem_+_20.9vw),18rem)] lg:h-[clamp(14rem,calc(6rem_+_12.5vw),16rem)]",
  /* team: 1 col → sm 2 cols → lg 3 cols */
  portrait:
    "h-[clamp(22rem,calc(1.4rem_+_87.7vw),26rem)] sm:h-[clamp(22rem,calc(13.6rem_+_20.9vw),27rem)] lg:h-[clamp(24rem,calc(12rem_+_18.8vw),27rem)]",
  /* about hero: full-width 1 col → lg half column */
  feature:
    "h-[clamp(24rem,calc(3.5rem_+_87vw),28rem)] md:h-[clamp(42rem,calc(-5rem_+_97vw),46rem)] lg:h-[clamp(28rem,calc(-20rem_+_75vw),40rem)]",
};

/* Dark scrims over the photo (theme-independent) */
const overlays: Record<MediaOverlay, string> = { soft: "overlay-soft", strong: "overlay-strong" };

export const Media = ({ src, alt, sizes, shape, overlay }: MediaProps) => (
  <div className={`relative w-full overflow-hidden ${shapes[shape]}`}>
    <Image
      src={src}
      alt={alt}
      fill
      placeholder="blur"
      blurDataURL={blurs.image}
      sizes={sizes}
      className="object-cover transition-transform duration-500 group-hover:scale-105"
    />
    {overlay && <div className={`absolute inset-0 ${overlays[overlay]}`} />}
  </div>
);
