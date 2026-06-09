import Link from "next/link";
import { SiteLogo } from "@/components/site-logo";
import { gymHours, navLinks, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <SiteLogo className="h-10 w-auto object-contain" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">
              {site.footerTagline}
            </p>
            <div className="mt-6 flex gap-5 text-sm">
              <Link
                href={site.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent"
              >
                Facebook
              </Link>
              <Link
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent"
              >
                {site.instagramHandle}
              </Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">
              Quick links
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">
              Visit
            </p>
            <ul className="mt-5 space-y-3 text-sm text-muted">
              <li>
                <Link
                  href={site.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-relaxed hover:text-foreground"
                >
                  {site.address}
                </Link>
              </li>
              <li>
                <Link href={site.phoneHref} className="hover:text-foreground">
                  {site.phone}
                </Link>
              </li>
              <li>
                <Link href={`mailto:${site.email}`} className="hover:text-foreground">
                  {site.email}
                </Link>
              </li>
            </ul>
            <div className="mt-8 space-y-2 text-sm text-muted">
              <p className="text-foreground">Facility hours</p>
              {gymHours.map((row) => (
                <p key={row.days}>
                  {row.days}: {row.time}
                </p>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-16 text-xs text-muted">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
