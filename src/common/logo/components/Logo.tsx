import Image from "next/image";
import { blurs } from "@/data/blurs";
import { layoutData } from "@/data/global/layout";
import { Link } from "@/i18n/navigation";

const { logo } = layoutData;

/* Logo badge + wordmark. */
export const Logo = () => {
  return (
    <Link
      href={logo.href}
      className="inline-grid grid-flow-col items-center gap-2.5 font-display text-xl font-extrabold text-foreground"
      aria-label={`${logo.name} home`}
    >
      <span className="relative size-10">
        <Image
          src={logo.src}
          alt=""
          fill
          sizes="40px"
          placeholder="blur"
          blurDataURL={blurs.logo}
          className="object-contain"
        />
      </span>
      <span>{logo.name}</span>
    </Link>
  );
};
