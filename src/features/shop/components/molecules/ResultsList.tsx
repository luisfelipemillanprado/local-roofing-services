import { ProductRow } from "@/features/shop/components/molecules/ProductRow";
import type { ResultsListProps } from "@/features/shop/types";

/* render loop: filtered products -> ProductRow grid (2 columns at xl) */
export const ResultsList = ({ products, viewLabel }: ResultsListProps) => (
  <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
    {products.map(
      ({ slug, title, brand, image, priceLabel, unit, rating, reviews, availability, availabilityLabel }) => (
        <ProductRow
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
