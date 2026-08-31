import { blurs } from "@/data/blurs";
import type { MediaVideoProps, MediaVideoShape } from "@/common/media-video/types";

/* full-width per-shape framed video; muted autoplay loop with controls */
const shapes: Record<MediaVideoShape, string> = {
  /* about feature: square 1:1; 4:3 on tablet so height does not follow full width */
  square: "aspect-square sm:aspect-[4/3] lg:aspect-square",
};

export const MediaVideo = ({ src, poster, alt, shape }: MediaVideoProps) => (
  <div className={`relative w-full overflow-hidden ${shapes[shape]}`}>
    {/* blurred placeholder until the poster and video paint over it */}
    <div
      aria-hidden
      className="absolute inset-0 scale-110 bg-cover bg-center blur-xl"
      style={{ backgroundImage: `url(${blurs.image})` }}
    />
    <video
      src={src}
      poster={poster}
      aria-label={alt}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className="absolute inset-0 size-full object-cover"
    />
  </div>
);
