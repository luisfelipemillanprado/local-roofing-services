import Image from "next/image";
import { company } from "@/data/site";
import { blurs } from "@/data/blurs";
import { layoutData } from "@/data/global/layout";
import { Link } from "@/i18n/navigation";

/* Logo badge + wordmark. */
export const Logo = () => {
  return (
    <Link
      href={layoutData.navbar.homeHref}
      className="inline-flex items-center gap-2.5 font-display text-xl font-extrabold tracking-tight"
      aria-label={`${company.name} home`}
    >
      <span className="relative size-10 shrink-0">
        <Image
          src={company.logo}
          alt=""
          fill
          sizes="40px"
          placeholder="blur"
          blurDataURL={blurs.logo}
          className="object-contain"
        />
      </span>
      <span>{company.name}</span>
    </Link>
  );
};
