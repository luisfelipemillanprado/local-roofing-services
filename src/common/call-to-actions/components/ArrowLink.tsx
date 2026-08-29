import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { PulseRing } from "@/common/animations/components/PulseRing";
import type { ArrowLinkProps } from "@/common/call-to-actions/types";

/* circular icon link: a card's trailing "go" affordance (needs a group parent for hover) */
export const ArrowLink = ({ href, label, pulse = false }: ArrowLinkProps) => (
  <Link
    href={href}
    aria-label={label}
    className="relative isolate grid size-10 place-items-center rounded-full bg-primary shadow-md transition-transform duration-300 group-hover:translate-x-1"
  >
    {pulse && <PulseRing color="primary" rounded />}
    <ArrowRight className="size-5 -rotate-45 text-white" />
  </Link>
);
