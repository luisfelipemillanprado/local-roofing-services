import { Tabs } from "@/common/tabs/components/Tabs";
import { ProductAbout } from "@/features/shop/detail/components/molecules/ProductAbout";
import { ProductSpecTable } from "@/features/shop/detail/components/molecules/ProductSpecTable";
import { ProductFeatures } from "@/features/shop/detail/components/molecules/ProductFeatures";
import type { ProductTabsProps } from "@/features/shop/detail/types";

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
      /* every key is compared, so renaming one in the data breaks the build */
      panel: (
        <>
          {key === "description" && <ProductAbout paragraphs={paragraphs} />}
          {key === "specifications" && <ProductSpecTable rows={specRows} />}
          {key === "features" && (
            <ProductFeatures
              compatibleLabel={compatibleLabel}
              compatible={compatible}
              checklists={checklists}
            />
          )}
        </>
      ),
    }))}
  />
);
