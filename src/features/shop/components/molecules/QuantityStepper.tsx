import { Minus, Plus } from "lucide-react";
import { Text } from "@/common/text/components/Text";
import type { QuantityStepperProps } from "@/features/shop/types";

/* − value + stepper (min 1) */
export const QuantityStepper = ({ value, onChange, decreaseLabel, increaseLabel }: QuantityStepperProps) => (
  <div className="inline-grid grid-flow-col items-center gap-4 rounded-full border border-line px-2 py-1.5">
    <button
      type="button"
      aria-label={decreaseLabel}
      onClick={() => onChange(Math.max(1, value - 1))}
      className="grid size-8 place-items-center rounded-full bg-surface-muted transition-colors hover:text-primary"
    >
      <Minus className="size-4" />
    </button>
    <Text as="span" size="body" weight="semibold" text={`${value}`} />
    <button
      type="button"
      aria-label={increaseLabel}
      onClick={() => onChange(value + 1)}
      className="grid size-8 place-items-center rounded-full bg-surface-muted transition-colors hover:text-primary"
    >
      <Plus className="size-4" />
    </button>
  </div>
);
