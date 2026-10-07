import clsx from "clsx";
import { Media } from "@/common/media/components/Media";
import { Text } from "@/common/text/components/Text";
import type { CategoryStripProps } from "@/features/shop/catalog/types";

/* category chips: a focused chip is brought into view by the browser, so there are no arrows */
export const CategoryStrip = ({ categories, active, onSelect }: CategoryStripProps) => (
  /* the row never stretches a chip: a wrapped label would push a short one's text off its photo */
  <div className="grid scrollbar-none grid-flow-col items-start justify-start gap-3 overflow-x-auto sm:gap-4">
    {categories.map(({ key, label, image }) => (
      <button
        key={key}
        type="button"
        aria-pressed={key === active}
        onClick={() => onSelect(key)}
        /* the column cannot outgrow the button: a long word would drag the photo off centre */
        className="group grid w-26 grid-cols-[minmax(0,1fr)] justify-items-center gap-3"
      >
        <span
          className={clsx(
            "size-18 overflow-hidden rounded-full border-2 transition-colors sm:size-20",
            key === active ? "border-primary" : "border-line group-hover:border-primary",
          )}
        >
          {/* decorative: the chip's own label carries the meaning */}
          <Media src={image} alt="" shape="thumb" sizes="(max-width: 640px) 68px, 76px" />
        </span>
        <Text
          as="span"
          size="caption"
          weight="semibold"
          tone={key === active ? "default" : "muted"}
          text={label}
        />
      </button>
    ))}
  </div>
);
