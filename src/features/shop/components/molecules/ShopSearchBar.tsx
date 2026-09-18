import { Bookmark, Package, Search, ShoppingCart, User } from "lucide-react";
import { Text } from "@/common/text/components/Text";
import type { ShopSearchBarProps } from "@/features/shop/types";

/* store bar: live search plus the account row; the icons are still decoration */
export const ShopSearchBar = ({ value, onChange, label, placeholder, accountLabels }: ShopSearchBarProps) => (
  <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-8">
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

    <div className="grid grid-flow-col justify-start gap-7 lg:justify-end">
      <span className="grid justify-items-center gap-1.5">
        <Bookmark className="size-5 text-primary" />
        <Text as="span" size="note" weight="semibold" tone="muted" text={accountLabels.saved} />
      </span>
      <span className="grid justify-items-center gap-1.5">
        <User className="size-5 text-primary" />
        <Text as="span" size="note" weight="semibold" tone="muted" text={accountLabels.account} />
      </span>
      <span className="grid justify-items-center gap-1.5">
        <Package className="size-5 text-primary" />
        <Text as="span" size="note" weight="semibold" tone="muted" text={accountLabels.orders} />
      </span>
      <span className="grid justify-items-center gap-1.5">
        <ShoppingCart className="size-5 text-primary" />
        <Text as="span" size="note" weight="semibold" tone="muted" text={accountLabels.cart} />
      </span>
    </div>
  </div>
);
