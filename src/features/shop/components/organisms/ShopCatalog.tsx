import { SectionWrapper } from "@/common/section-wrapper/components/SectionWrapper";
import { Container } from "@/common/container/components/Container";
import { ShopBrowser } from "@/features/shop/components/organisms/ShopBrowser";

/* server shell; the interactive catalog lives in ShopBrowser (client) */
export const ShopCatalog = () => (
  <SectionWrapper id="catalog" tone="muted">
    <Container>
      <ShopBrowser />
    </Container>
  </SectionWrapper>
);
