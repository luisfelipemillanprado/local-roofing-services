"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { SectionWrapper } from "@/common/section-wrapper/components/SectionWrapper";
import { Container } from "@/common/container/components/Container";
import { Stars } from "@/common/stars/components/Stars";
import { Text } from "@/common/text/components/Text";
import { TextNumber } from "@/common/text/components/TextNumber";
import { Title } from "@/common/title/components/Title";
import { Socials } from "@/common/social/components/Socials";
import { ProductGallery } from "@/features/shop/components/molecules/ProductGallery";
import { QuantityStepper } from "@/features/shop/components/molecules/QuantityStepper";
import { ProductTabs } from "@/features/shop/components/molecules/ProductTabs";
import { shopProductsData } from "@/data/shop/products";
import { productDetailData } from "@/data/shop/product-detail";
import type { ProductDetailProps } from "@/features/shop/types";

const { colors, sizes, tabs, sku, gallery, buyNowHref, addToCartHref } = productDetailData;

export const ProductDetail = ({ slug }: ProductDetailProps) => {
  const t = useTranslations("shop-page");
  const product = shopProductsData.items.find((item) => item.slug === slug);

  const [activeImage, setActiveImage] = useState(0);
  const [color, setColor] = useState(0);
  const [size, setSize] = useState<string>(sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [tab, setTab] = useState<string>(tabs[0]);

  if (!product) return null;

  const title = t(`catalog.${product.slug}.title`);
  const images = [product.image, ...gallery];
  /* placeholder discounted "was" price */
  const originalPriceLabel = `$${(product.price * 1.15).toFixed(2)}`;
  const tabItems = tabs.map((key) => ({
    key,
    label: t(`detail.tabs.${key}`),
    body: t(`detail.tabBody.${key}`),
  }));

  return (
    <>
      <SectionWrapper id="product" tone="muted">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <ProductGallery images={images} active={activeImage} onSelect={setActiveImage} alt={title} />

            <div className="grid content-between gap-8">
              <div className="grid content-start gap-5">
                <span className="justify-self-start rounded-full bg-surface-muted px-3 py-1">
                  <Text
                    as="span"
                    size="note"
                    weight="semibold"
                    tone="muted"
                    text={t(`categories.${product.category}`)}
                  />
                </span>

                <Title as="h1" size="page" weight="extrabold" text={title} />

                <div className="grid grid-flow-col items-center justify-start gap-2">
                  <Stars rating={product.rating} />
                  <Text
                    as="span"
                    size="caption"
                    tone="muted"
                    text={t("detail.reviewCount", { rating: product.rating, count: product.reviews })}
                  />
                </div>

                <div className="grid grid-flow-col items-end justify-start gap-3">
                  <TextNumber size="display" text={`$${product.price.toFixed(2)}`} />
                  <span className="mb-1 line-through">
                    <Text as="span" size="body" tone="muted" text={originalPriceLabel} />
                  </span>
                </div>

                <div className="grid gap-2">
                  <Text
                    as="span"
                    size="note"
                    weight="semibold"
                    tone="muted"
                    tracking="wide"
                    text={t("detail.color")}
                  />
                  <div className="flex gap-3">
                    {colors.map((swatch, index) => (
                      <button
                        key={swatch.key}
                        type="button"
                        aria-label={swatch.key}
                        onClick={() => setColor(index)}
                        style={{ backgroundColor: swatch.hex }}
                        className={`size-7 rounded-full border-2 transition-colors ${
                          index === color ? "border-primary" : "border-line"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="grid gap-2">
                  <Text
                    as="span"
                    size="note"
                    weight="semibold"
                    tone="muted"
                    tracking="wide"
                    text={t("detail.quantity")}
                  />
                  <QuantityStepper
                    value={quantity}
                    onChange={setQuantity}
                    decreaseLabel={t("detail.decrease")}
                    increaseLabel={t("detail.increase")}
                  />
                </div>

                <div className="grid gap-2">
                  <Text
                    as="span"
                    size="note"
                    weight="semibold"
                    tone="muted"
                    tracking="wide"
                    text={t("detail.size")}
                  />
                  <div className="flex flex-wrap gap-2.5">
                    {sizes.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setSize(option)}
                        className={`grid h-10 min-w-10 place-items-center rounded-full border px-3 transition-colors ${
                          option === size ? "border-primary bg-primary" : "border-line hover:border-primary"
                        }`}
                      >
                        <Text
                          as="span"
                          size="body"
                          weight="semibold"
                          tone={option === size ? "white" : "default"}
                          text={option}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <a href={buyNowHref.href} className="rounded-full bg-primary py-3.5 text-center">
                    <Text as="span" size="body" weight="semibold" tone="white" text={t(buyNowHref.key)} />
                  </a>
                  <a
                    href={addToCartHref.href}
                    className="rounded-full border border-line py-3.5 text-center transition-colors hover:border-primary"
                  >
                    <Text as="span" size="body" weight="semibold" text={t(addToCartHref.key)} />
                  </a>
                </div>
              </div>

              <div className="grid gap-2.5 border-t border-line pt-5">
                <div className="grid grid-flow-col items-center justify-start gap-2">
                  <Text as="span" size="caption" weight="semibold" text={`${t("detail.sku")}:`} />
                  <Text as="span" size="caption" tone="muted" text={sku} />
                </div>
                <div className="grid grid-flow-col items-center justify-start gap-2">
                  <Text as="span" size="caption" weight="semibold" text={`${t("detail.tags")}:`} />
                  <Text as="span" size="caption" tone="muted" text={t("detail.tagList")} />
                </div>
                <div className="grid grid-flow-col items-center justify-start gap-3">
                  <Text as="span" size="caption" weight="semibold" text={`${t("detail.share")}:`} />
                  <Socials />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper id="product-info" tone="base">
        <Container>
          <ProductTabs tabs={tabItems} active={tab} onSelect={setTab} />
        </Container>
      </SectionWrapper>
    </>
  );
};
