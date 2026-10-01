import { Tabs } from "@/common/tabs/components/Tabs";
import { ProductAbout } from "@/features/shop/detail/components/molecules/ProductAbout";
import { ProductSpecTable } from "@/features/shop/detail/components/molecules/ProductSpecTable";
import { ProductFeatures } from "@/features/shop/detail/components/molecules/ProductFeatures";
import type { ProductTabsProps } from "@/features/shop/detail/types";

/* the product panels, built on the server and handed to the tab shell */
export const ProductTabs = ({
  descriptionLabel,
  specificationsLabel,
  featuresLabel,
  paragraphs,
  specRows,
  compatibleLabel,
  compatible,
  checklists,
}: ProductTabsProps) => (
  <Tabs
    tabs={[
      { key: "description", label: descriptionLabel, panel: <ProductAbout paragraphs={paragraphs} /> },
      { key: "specifications", label: specificationsLabel, panel: <ProductSpecTable rows={specRows} /> },
      {
        key: "features",
        label: featuresLabel,
        panel: (
          <ProductFeatures
            compatibleLabel={compatibleLabel}
            compatible={compatible}
            checklists={checklists}
          />
        ),
      },
    ]}
  />
);
