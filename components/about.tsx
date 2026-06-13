"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { about } from "@/lib/content";

export function About() {
  const reduce = useReducedMotion();
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageWrapRef,
    offset: ["start end", "end start"],
  });
  // Subtle vertical drift so the image moves slower than the surrounding text.
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-20">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {about.label}
            </p>
            <p className="mt-4 text-sm font-medium text-muted">{about.subtitle}</p>
            <h2 className="font-display mt-3 text-4xl font-extrabold italic leading-[1.0] tracking-[-0.02em] text-balance md:text-5xl">
              {about.editorialTitle}
            </h2>
            <p className="mt-3 text-sm text-accent">{about.tagline}</p>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {about.stats.map((stat) => (
                <div
                  key={stat.value}
                  className="rounded-2xl border border-border bg-surface p-5"
                >
                  <p className="font-display text-3xl font-bold text-accent md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-10 text-base font-medium text-foreground">{about.lead}</p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              {about.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {about.features.map((feature) => (
                <span
                  key={feature}
                  className="rounded-full border border-border bg-surface px-4 py-2 text-xs font-medium"
                >
                  {feature}
                </span>
              ))}
            </div>

            <Link
              href="#programs"
              className="mt-10 inline-flex rounded-full border border-accent px-6 py-3 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-background"
            >
              Know more
            </Link>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                {about.memberAvatars.map((initials) => (
                  <span
                    key={initials}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface-elevated text-[10px] font-semibold text-accent"
                  >
                    {initials}
                  </span>
                ))}
              </div>
              <p className="text-sm text-muted">{about.memberCount}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="lg:sticky lg:top-24">
            <div
              ref={imageWrapRef}
              className="relative aspect-[4/5] overflow-hidden rounded-3xl"
            >
              <motion.div
                className="absolute inset-0 scale-110"
                style={reduce ? undefined : { y: parallaxY }}
              >
                <Image
                  src={about.image}
                  alt="Athletes training at Kratos Calisthenics Arena"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
