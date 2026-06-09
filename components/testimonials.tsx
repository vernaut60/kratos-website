"use client";

import { CaretLeft, CaretRight, Star } from "@phosphor-icons/react";
import Image from "next/image";
import { useState } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/section-heading";
import { sections, site, testimonials } from "@/lib/content";

function TestimonialVisual({ name, image }: { name: string; image: string | null }) {
  if (image) {
    return (
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
        <Image src={image} alt={name} fill className="object-cover" sizes="50vw" />
      </div>
    );
  }

  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-surface-elevated to-surface">
      <span className="font-display text-6xl font-bold text-accent/80">{initials}</span>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6">
        <p className="text-sm font-medium">{name}</p>
      </div>
    </div>
  );
}

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1 text-accent">
      {Array.from({ length: count }).map((_, index) => (
        <Star key={index} size={16} weight="fill" />
      ))}
    </div>
  );
}

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  function goPrev() {
    setIndex((value) => (value === 0 ? testimonials.length - 1 : value - 1));
  }

  function goNext() {
    setIndex((value) => (value === testimonials.length - 1 ? 0 : value + 1));
  }

  return (
    <section
      id="testimonials"
      className="border-t border-border bg-surface py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              label={sections.testimonials.label}
              title={sections.testimonials.title}
              description={sections.testimonials.description}
            />
            <div className="flex gap-3">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={goPrev}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border transition-colors hover:border-accent hover:text-accent"
              >
                <CaretLeft size={18} />
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={goNext}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border transition-colors hover:border-accent hover:text-accent"
              >
                <CaretRight size={18} />
              </button>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
            <TestimonialVisual name={current.name} image={current.image} />
            <div>
              <StarRating count={current.rating} />
              <blockquote className="font-display mt-6 text-2xl font-medium leading-snug tracking-tight md:text-3xl">
                &ldquo;{current.snippet}&rdquo;
              </blockquote>
              <p className="mt-6 text-sm leading-relaxed text-muted">{current.quote}</p>
              <footer className="mt-8 border-t border-border pt-6">
                <p className="font-display text-lg font-semibold">{current.name}</p>
                <p className="mt-1 text-sm text-muted">{current.role}</p>
              </footer>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex text-sm font-medium text-accent hover:underline"
              >
                Read more reviews on Google
              </a>
            </div>
          </div>

          <div className="mt-10 flex justify-center gap-2">
            {testimonials.map((item, i) => (
              <button
                key={item.name}
                type="button"
                aria-label={`Show testimonial from ${item.name}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-8 bg-accent" : "w-3 bg-border hover:bg-muted"
                }`}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
