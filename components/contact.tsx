"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/section-heading";
import { contact, sections, site } from "@/lib/content";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="border-t border-border bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal>
            <SectionHeading
              label={sections.contact.label}
              title={sections.contact.title}
              description={sections.contact.description}
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-90"
              >
                WhatsApp us
              </Link>
              <Link
                href={site.phoneHref}
                className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
              >
                Call {site.phone}
              </Link>
              <Link
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
              >
                {site.instagramHandle}
              </Link>
            </div>
            <form onSubmit={handleSubmit} className="mt-10 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm">
                  <span className="mb-2 block text-muted">First name</span>
                  <input
                    required
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-2xl border border-border bg-surface-elevated px-4 py-3 outline-none transition-colors placeholder:text-muted/60 focus:border-accent"
                  />
                </label>
                <label className="block text-sm">
                  <span className="mb-2 block text-muted">Email address</span>
                  <input
                    required
                    type="email"
                    placeholder={site.email}
                    className="w-full rounded-2xl border border-border bg-surface-elevated px-4 py-3 outline-none transition-colors placeholder:text-muted/60 focus:border-accent"
                  />
                </label>
              </div>
              <label className="block text-sm">
                <span className="mb-2 block text-muted">Phone number</span>
                <input
                  type="tel"
                  placeholder={site.phone}
                  className="w-full rounded-2xl border border-border bg-surface-elevated px-4 py-3 outline-none transition-colors placeholder:text-muted/60 focus:border-accent"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-2 block text-muted">Membership plan</span>
                <select className="w-full rounded-2xl border border-border bg-surface-elevated px-4 py-3 outline-none transition-colors focus:border-accent">
                  <option value="">Choose a plan</option>
                  {contact.planOptions.map((plan) => (
                    <option key={plan} value={plan}>
                      {plan}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block text-sm">
                <span className="mb-2 block text-muted">Message</span>
                <textarea
                  rows={4}
                  placeholder="Tell us about your goals and schedule..."
                  className="w-full resize-none rounded-2xl border border-border bg-surface-elevated px-4 py-3 outline-none transition-colors placeholder:text-muted/60 focus:border-accent"
                />
              </label>
              <button
                type="submit"
                className="w-full rounded-2xl bg-accent py-3.5 text-sm font-semibold text-background transition-opacity hover:opacity-90"
              >
                {submitted ? "Message received" : "Submit"}
              </button>
            </form>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <div className="relative min-h-[420px] overflow-hidden rounded-3xl lg:min-h-full">
              <Image
                src={contact.image}
                alt="KCA training floor"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                  Visit us
                </p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-200">
                  {site.address}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
