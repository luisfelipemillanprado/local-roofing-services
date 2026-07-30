import { Media } from "@/common/media/components/Media";
import type { ProductGalleryProps } from "@/features/shop/types";

/* main product image + vertical thumbnail strip (recycled placeholders) */
export const ProductGallery = ({ images, active, onSelect, alt }: ProductGalleryProps) => (
  <div className="grid content-start gap-4">
    <div className="overflow-hidden rounded-card border border-line">
      <Media src={images[active]} alt={alt} shape="thumb" sizes="(max-width: 1024px) 100vw, 45vw" />
    </div>
    <div className="grid grid-cols-5 gap-3">
      {images.map((src, index) => (
        <button
          key={`${src}-${index}`}
          type="button"
          onClick={() => onSelect(index)}
          aria-label={`${alt} — ${index + 1}`}
          className={`overflow-hidden rounded-card border-2 transition-colors ${
            index === active ? "border-primary" : "border-line hover:border-primary"
          }`}
        >
          <Media src={src} alt={alt} shape="thumb" sizes="(max-width: 1024px) 18vw, 9vw" />
        </button>
      ))}
    </div>
  </div>
);
