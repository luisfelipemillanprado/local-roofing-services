import { Search } from "lucide-react";
import { SearchButton } from "@/common/call-to-actions/components/SearchButton";
import type { ShopSearchBarProps } from "@/features/shop/catalog/types";

/* store bar: icon, field and button read as one control, so the box belongs to the bar */
export const ShopSearchBar = ({
  value,
  onChange,
  onSubmit,
  label,
  placeholder,
  submitLabel,
}: ShopSearchBarProps) => (
  /* the bar owns the height, so a border cannot push it out of line with the sort control */
  <span className="grid h-14 grid-cols-[auto_minmax(0,1fr)_auto] gap-3 rounded-xl border border-line bg-surface-panel pl-5 has-[input:focus-visible]:outline-2 has-[input:focus-visible]:outline-offset-2 has-[input:focus-visible]:outline-primary-light">
    <Search className="size-5 self-center text-foreground-muted" />
    {/* sr-only is absolute, so the label claims no column of its own */}
    <label htmlFor="shop-search" className="sr-only">
      {label}
    </label>
    {/* type=search draws the browser's own clear control; no second one is added here */}
    <input
      id="shop-search"
      type="search"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      onKeyDown={(event) => event.key === "Enter" && onSubmit()}
      placeholder={placeholder}
      /* the bar wears the ring for it, so the whole control reads as one */
      className="text-foreground outline-none placeholder:text-foreground-muted"
    />
    <SearchButton label={submitLabel} onClick={onSubmit} />
  </span>
);
