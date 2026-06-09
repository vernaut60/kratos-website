import Image from "next/image";
import { site } from "@/lib/content";

type SiteLogoProps = {
  className?: string;
  priority?: boolean;
};

export function SiteLogo({
  className = "h-10 w-auto object-contain",
  priority = false,
}: SiteLogoProps) {
  return (
    <Image
      src={site.logo}
      alt={site.name}
      width={160}
      height={48}
      className={className}
      priority={priority}
    />
  );
}
