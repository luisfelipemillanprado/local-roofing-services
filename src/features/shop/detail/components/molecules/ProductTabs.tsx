import type { ReactNode } from "react";
import { Tabs } from "@/common/tabs/components/Tabs";
import { ProductAbout } from "@/features/shop/detail/components/molecules/ProductAbout";
import { ProductSpecTable } from "@/features/shop/detail/components/molecules/ProductSpecTable";
import { ProductFeatures } from "@/features/shop/detail/components/molecules/ProductFeatures";
import type { ProductTabKey, ProductTabsProps } from "@/features/shop/detail/types";

/* the product panels, built on the server and handed to the tab shell */
export const ProductTabs = ({
  tabs,
  paragraphs,
  specRows,
  compatibleLabel,
  compatible,
  checklists,
}: ProductTabsProps) => (
  <Tabs
    tabs={tabs.map(({ key, label }) => ({
      key,
      label,
      /* the data owns the tab set; satisfies makes this map match it exactly */
      panel: (
        {
          description: <ProductAbout paragraphs={paragraphs} />,
          specifications: <ProductSpecTable rows={specRows} />,
          features: (
            <ProductFeatures
              compatibleLabel={compatibleLabel}
              compatible={compatible}
              checklists={checklists}
            />
          ),
        } satisfies Record<ProductTabKey, ReactNode>
      )[key],
    }))}
  />
);
