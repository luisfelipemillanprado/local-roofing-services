import { blurs } from "@/data/blurs";
import type { MediaVideoProps } from "@/common/media-video/types";

/* muted autoplay loop that fills its frame; the parent owns the box and the clip */
export const MediaVideo = ({ src, poster, alt }: MediaVideoProps) => (
  <div className="relative size-full">
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
