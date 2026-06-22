import Image from "next/image";
import { company } from "@/data/site";
import { Link } from "@/i18n/navigation";

/* Logo badge (image) + wordmark; the text inherits currentColor from the parent (navbar/footer). */
export const Logo = () => {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2.5 font-display text-xl font-extrabold tracking-tight"
      aria-label={`${company.name} home`}
    >
      <span className="relative size-10 shrink-0">
        <Image src={company.logo} alt="" fill sizes="40px" className="object-contain" />
      </span>
      <span>{company.name}</span>
    </Link>
  );
};
