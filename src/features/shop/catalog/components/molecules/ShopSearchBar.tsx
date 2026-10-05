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
  /* no padding of its own: the input carries the height, the button fills it edge to edge */
  <span className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-stretch gap-3 rounded-xl bg-surface-panel pl-5">
    <Search className="size-5 self-center text-foreground-muted" />
    {/* type=search draws the browser's own clear control; no second one is added here */}
    <input
      type="search"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      onKeyDown={(event) => event.key === "Enter" && onSubmit()}
      placeholder={placeholder}
      aria-label={label}
      className="w-full self-center bg-transparent py-3 text-foreground outline-none placeholder:text-foreground-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light"
    />
    <SearchButton label={submitLabel} onClick={onSubmit} />
  </span>
);
