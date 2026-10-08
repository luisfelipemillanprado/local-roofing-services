import { Search } from "lucide-react";
import { SearchButton } from "@/common/call-to-actions/components/SearchButton";
import type { ShopSearchBarProps } from "@/features/shop/catalog/types";

/* store bar: the query only reaches the list on submit, never on keystroke */
export const ShopSearchBar = ({
  value,
  onChange,
  onSubmit,
  label,
  placeholder,
  submitLabel,
}: ShopSearchBarProps) => (
  /* the bar owns the height, so a border cannot push it out of line with the sort control */
  <span className="grid h-14 grid-cols-[auto_minmax(0,1fr)_auto] items-stretch gap-3 rounded-xl border border-line bg-surface-panel pl-5 has-[input:focus-visible]:outline-2 has-[input:focus-visible]:outline-offset-2 has-[input:focus-visible]:outline-primary-light">
    <Search className="size-5 self-center text-foreground-muted" />
    {/* type=search draws the browser's own clear control; no second one is added here */}
    <input
      type="search"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      onKeyDown={(event) => event.key === "Enter" && onSubmit()}
      placeholder={placeholder}
      aria-label={label}
      /* the bar wears the ring for it, so the whole control reads as one */
      className="w-full bg-transparent text-foreground outline-none placeholder:text-foreground-muted"
    />
    <SearchButton label={submitLabel} onClick={onSubmit} />
  </span>
);
