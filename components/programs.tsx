import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/section-heading";
import { programs, sections } from "@/lib/content";

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
          {programs.map((program, index) => (
            <ScrollReveal
              key={program.title}
              delay={index * 0.05}
              className="w-[min(85vw,320px)] shrink-0 snap-start"
            >
              <article className="group overflow-hidden rounded-3xl border border-border bg-surface-elevated">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="320px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
                      {program.tag}
                    </p>
                    <h3 className="font-display mt-2 text-2xl font-semibold">
                      {program.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                      {program.description}
                    </p>
                    <div className="mt-4 flex items-end justify-between gap-3">
                      <p className="font-display text-xl font-bold text-accent">
                        {program.priceFrom}
                        {program.period ? (
                          <span className="font-sans text-xs font-normal text-zinc-400">
                            {program.period}
                          </span>
                        ) : null}
                      </p>
                      <Link
                        href={`#pricing`}
                        className="text-xs font-medium uppercase tracking-wider text-foreground transition-colors hover:text-accent"
                      >
                        View plans
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
