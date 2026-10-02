import { Search } from "lucide-react";
import type { ShopSearchBarProps } from "@/features/shop/catalog/types";

/* store bar: live search over the whole catalog */
export const ShopSearchBar = ({ value, onChange, label, placeholder }: ShopSearchBarProps) => (
  <span className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3 rounded-full border border-line bg-surface-panel px-5 py-3">
    <Search className="size-5 text-foreground-muted" />
    <input
      type="search"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
      aria-label={label}
      className="w-full bg-transparent text-foreground outline-none placeholder:text-foreground-muted"
    />
  </span>
);
