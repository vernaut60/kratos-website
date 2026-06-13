"use client";

import { List, X } from "@phosphor-icons/react";
import Link from "next/link";
import { useState } from "react";
import { GetAppButton } from "@/components/get-app-button";
import { SiteLogo } from "@/components/site-logo";
import { navLinks, site } from "@/lib/content";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:h-20 lg:px-10">
        <Link href="/" className="flex min-w-0 shrink items-center gap-3">
          <SiteLogo priority className="h-9 w-auto shrink-0 object-contain lg:h-10" />
          <span className="font-display text-sm font-extrabold italic leading-tight tracking-tight sm:text-base">
            {site.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <GetAppButton variant="primary" className="!px-6 !py-2.5" />
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          className="lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={24} /> : <List size={24} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border bg-background px-6 py-8 lg:hidden">
          <nav className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-display text-lg"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <GetAppButton variant="mobile" onPress={() => setOpen(false)} />
          </nav>
        </div>
      ) : null}
    </header>
  );
}
