"use client"; /* client by design; counterpart to the server link Button */

import { ArrowRight } from "lucide-react";
import { Text } from "@/common/text/components/Text";
import type { ActionButtonProps } from "@/common/call-to-actions/types";

export const ActionButton = ({ label, disabled = false }: ActionButtonProps) => (
  <button
    type="submit"
    disabled={disabled}
    className="group inline-grid grid-flow-col items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 transition-all duration-300 hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-70"
  >
    <Text as="span" size="body" weight="semibold" tone="white" text={label} />
    <ArrowRight className="size-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
  </button>
);
