"use client";

import { CaretDown, Play } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { GetAppButton } from "@/components/get-app-button";
import { hero, site } from "@/lib/content";

export function Hero({ hasPoster }: { hasPoster: boolean }) {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[100dvh] overflow-hidden">
      <video
        src={site.heroVideo}
        poster={hasPoster ? site.heroPoster : undefined}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover object-[center_35%]"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-black/10 to-black/20" />
      {/* gritty grain texture for an athletic, editorial feel */}
      <div className="hero-grain pointer-events-none absolute inset-0" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

      <div className="relative mx-auto flex min-h-[100dvh] max-w-7xl flex-col items-center justify-center px-6 pt-24 text-center lg:px-10">
        <motion.div
          className="max-w-4xl"
          initial={reduce ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            {hero.eyebrow} · {hero.location}
          </p>
          <h1 className="font-display mt-4 text-6xl font-black italic leading-[0.95] tracking-[-0.02em] md:text-8xl lg:text-[6.5rem]">
            {hero.title}
          </h1>
          <p className="mx-auto mt-5 text-xs font-bold uppercase tracking-[0.22em] text-accent">
            {site.bannerMessage}
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-300 md:text-lg">
            {hero.subtext}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <GetAppButton />
            <Link
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-line px-9 py-4 text-[12px] font-bold uppercase tracking-[0.12em] text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <Play size={16} weight="fill" />
              Watch how we work
            </Link>
          </div>
        </motion.div>

        <Link
          href="#about"
          className="absolute bottom-10 flex flex-col items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted transition-colors hover:text-accent"
        >
          Scroll down
          <CaretDown size={18} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
}
