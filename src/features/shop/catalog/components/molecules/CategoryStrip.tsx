import clsx from "clsx";
import { Media } from "@/common/media/components/Media";
import { Text } from "@/common/text/components/Text";
import type { CategoryStripProps } from "@/features/shop/catalog/types";

/* category chips: native horizontal scroll; a focused chip is brought into view by the browser */
export const CategoryStrip = ({ categories, active, onSelect }: CategoryStripProps) => (
  /* items-start, or a chip shorter than the row spreads its photo and label apart */
  <div className="grid scrollbar-none grid-flow-col items-start justify-start gap-4 overflow-x-auto sm:gap-6">
    {categories.map(({ key, label, image }) => (
      <button
        key={key}
        type="button"
        aria-pressed={key === active}
        onClick={() => onSelect(key)}
        className="group grid w-20 justify-items-center gap-2 sm:w-24"
      >
        <span
          className={clsx(
            "size-16 overflow-hidden rounded-full border-2 transition-colors sm:size-20",
            key === active ? "border-primary" : "border-line group-hover:border-primary",
          )}
        >
          {/* decorative: the chip's own label carries the meaning */}
          <Media src={image} alt="" shape="thumb" sizes="(max-width: 640px) 64px, 80px" />
        </span>
        <Text
          as="span"
          size="note"
          weight="semibold"
          tone={key === active ? "default" : "muted"}
          text={label}
        />
      </button>
    ))}
  </div>
);
