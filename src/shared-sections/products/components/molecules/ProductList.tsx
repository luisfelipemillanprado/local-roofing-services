import { ProductCard } from "@/shared-sections/products/components/molecules/ProductCard";
import type { ProductListProps } from "@/shared-sections/products/types";

/* render loop: products → ProductCard grid */
export const ProductList = ({ products, viewLabel }: ProductListProps) => (
  <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
    {products.map(
      ({ slug, title, brand, image, priceLabel, unit, rating, reviews, availability, availabilityLabel }) => (
        <ProductCard
          key={slug}
          title={title}
          brand={brand}
          image={image}
          priceLabel={priceLabel}
          unit={unit}
          rating={rating}
          reviews={reviews}
          availability={availability}
          availabilityLabel={availabilityLabel}
          viewLabel={viewLabel}
          href={`/shop/${slug}`}
        />
      ),
    )}
  </div>
);
