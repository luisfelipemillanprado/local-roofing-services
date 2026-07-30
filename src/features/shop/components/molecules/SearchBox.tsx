import { Search } from "lucide-react";
import type { SearchBoxProps } from "@/features/shop/types";

/* live search input for the results bar */
export const SearchBox = ({ value, onChange, placeholder, label }: SearchBoxProps) => (
  <span className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-2 rounded-full border border-line bg-surface-panel px-4 py-2">
    <Search className="size-4 text-foreground-muted" />
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
