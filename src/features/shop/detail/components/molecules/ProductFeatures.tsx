import { ProductCompatible } from "@/features/shop/detail/components/molecules/ProductCompatible";
import { ProductChecklists } from "@/features/shop/detail/components/molecules/ProductChecklists";
import type { ProductFeaturesProps } from "@/features/shop/detail/types";

/* practical side of the product: what it pairs with, how it goes on, what is covered */
export const ProductFeatures = ({ compatibleLabel, compatible, checklists }: ProductFeaturesProps) => (
  <div className="grid gap-7">
    <ProductCompatible label={compatibleLabel} items={compatible} />
    <ProductChecklists lists={checklists} />
  </div>
);
