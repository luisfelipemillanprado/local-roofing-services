import Image from "next/image";
import { blurs } from "@/data/blurs";
import type { MediaProps, MediaShape } from "@/common/media/types";

/* full-bleed width + per-shape clamped height; breakpoints follow each consumer's grid columns */
const shapes: Record<MediaShape, string> = {
  /* section cards: 1 col → md 2 cols → lg 3 cols */
  wide: "h-[clamp(14rem,calc(3.7rem_+_43.8vw),16rem)] md:h-[clamp(16rem,calc(13rem_+_6.3vw),17rem)] lg:h-[clamp(17rem,calc(13rem_+_6.3vw),18rem)]",
  /* about hero: full-width 1 col → lg half column */
  feature:
    "h-[clamp(24rem,calc(3.5rem_+_87vw),28rem)] md:h-[clamp(42rem,calc(-5rem_+_97vw),46rem)] lg:h-[clamp(28rem,calc(-20rem_+_75vw),40rem)]",
};

export const Media = ({ src, alt, sizes, shape }: MediaProps) => (
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
  </div>
);
