import type { Icon } from "@phosphor-icons/react";
import {
  Barbell,
  PersonSimpleRun,
  PersonSimpleTaiChi,
  Ticket,
  Trophy,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/section-heading";
import { TiltCard } from "@/components/tilt-card";
import { programs, sections } from "@/lib/content";
import { hasPublicAsset } from "@/lib/media";

const categoryIcons: Record<string, Icon> = {
  kids: PersonSimpleTaiChi,
  combo: Barbell,
  group: UsersThree,
  self: PersonSimpleRun,
  pass: Ticket,
  personal: Trophy,
};

export function Programs() {
  return (
    <section id="programs" className="border-t border-border bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal>
          <SectionHeading
            label={sections.programs.label}
            title={sections.programs.title}
            description={sections.programs.description}
          />
        </ScrollReveal>

        <div className="hide-scrollbar mt-12 flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
          {programs.map((program, index) => {
            const Glyph = categoryIcons[program.categoryId] ?? Barbell;
            const hasImage = hasPublicAsset(program.image);
            return (
              <ScrollReveal
                key={program.title}
                delay={index * 0.09}
                className="w-[min(85vw,320px)] shrink-0 snap-start"
              >
                <TiltCard className="relative h-full">
                  <article className="group relative flex h-full min-h-[24rem] flex-col overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-surface-elevated via-surface to-background p-6 transition-colors duration-300 hover:border-accent/40">
                    {hasImage ? (
                      <>
                        <Image
                          src={program.image}
                          alt=""
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 85vw, 320px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-background/10" />
                      </>
                    ) : (
                      <>
                        {/* ambient corner glow */}
                        <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-accent/10 blur-3xl transition-opacity duration-300 group-hover:bg-accent/20" />
                        {/* oversized watermark glyph */}
                        <Glyph
                          weight="thin"
                          className="pointer-events-none absolute -bottom-6 -right-4 text-foreground/[0.05]"
                          size={180}
                        />
                      </>
                    )}

                    <div className="relative flex items-center justify-between">
                      <span className="inline-flex items-center justify-center rounded-2xl border border-accent/30 bg-accent/10 p-3 text-accent backdrop-blur-sm">
                        <Glyph weight="duotone" size={26} />
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent">
                        {program.tag}
                      </span>
                    </div>

                    <div className="relative mt-auto pt-10">
                      <h3 className="font-display text-2xl font-bold italic tracking-[-0.01em]">
                        {program.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {program.description}
                      </p>
                      <div className="mt-5 flex items-end justify-between gap-3 border-t border-border pt-4">
                        <p className="font-display text-xl font-bold text-accent">
                          {program.priceFrom}
                          {program.period ? (
                            <span className="font-sans text-xs font-normal text-muted">
                              {program.period}
                            </span>
                          ) : null}
                        </p>
                        <Link
                          href="#pricing"
                          className="text-[11px] font-bold uppercase tracking-[0.1em] text-foreground transition-colors hover:text-accent"
                        >
                          View plans
                        </Link>
                      </div>
                    </div>
                  </article>
                </TiltCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
