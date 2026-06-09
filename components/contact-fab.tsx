import { Phone, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { site } from "@/lib/content";

export function ContactFab() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <Link
        href={site.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
      >
        <WhatsappLogo size={24} weight="fill" />
      </Link>
      <Link
        href={site.phoneHref}
        aria-label={`Call ${site.phone}`}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-background shadow-lg transition-transform hover:scale-105"
      >
        <Phone size={22} weight="fill" />
      </Link>
    </div>
  );
}
