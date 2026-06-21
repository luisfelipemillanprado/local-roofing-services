import Image from "next/image";
import { blurs } from "@/data/blurs";
import type { MediaProps, MediaAspect, MediaOverlay } from "@/common/media/types";

/* Two content-driven shapes; width comes from the layout, aspect derives the height */
const aspects: Record<MediaAspect, string> = {
  portrait: "aspect-[4/4.5]" /* team, about — person shots */,
  landscape: "aspect-[4/3]" /* services, projects — scenery */,
};

/* Dark scrims over the photo (theme-independent) */
const overlays: Record<MediaOverlay, string> = { soft: "overlay-soft", strong: "overlay-strong" };

export const Media = ({ src, alt, sizes, aspect = "landscape", overlay }: MediaProps) => (
  <div className={`relative overflow-hidden ${aspects[aspect]}`}>
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
