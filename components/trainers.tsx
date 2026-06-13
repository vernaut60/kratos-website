import Image from "next/image";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/section-heading";
import { TiltCard } from "@/components/tilt-card";
import { sections, trainers } from "@/lib/content";
import { hasPublicAsset } from "@/lib/media";

function TrainerPhoto({ name, image }: { name: string; image: string }) {
  return (
    <div className="relative flex aspect-[3/4] w-full items-center justify-center overflow-hidden rounded-3xl border border-border">
      <Image
        src={image}
        alt={`${name}, KCA coach`}
        fill
        className="object-cover"
        sizes="240px"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
    </div>
  );
}

function TrainerMonogram({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="relative flex aspect-[3/4] w-full items-center justify-center overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-surface-elevated via-surface to-background">
      {/* soft amber glow behind the monogram */}
      <div className="absolute -top-10 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" />
      {/* faint oversized watermark initial */}
      <span className="font-display pointer-events-none absolute -bottom-6 right-2 text-[7rem] font-black leading-none text-foreground/[0.04]">
        {initials.slice(0, 1)}
      </span>
      <span className="font-display relative flex h-20 w-20 items-center justify-center rounded-full border border-accent/30 bg-background/40 text-2xl font-extrabold text-accent backdrop-blur-sm">
        {initials}
      </span>
    </div>
  );
}

export function Trainers() {
  return (
    <section id="trainers" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal>
          <SectionHeading
            label={sections.trainers.label}
            title={sections.trainers.title}
            description={sections.trainers.description}
          />
        </ScrollReveal>

        <div className="hide-scrollbar mt-12 flex gap-6 overflow-x-auto pb-4">
          {trainers.map((trainer, index) => (
            <ScrollReveal
              key={trainer.name}
              delay={index * 0.07}
              className="w-[240px] shrink-0"
            >
              <TiltCard className="relative h-full" max={6}>
              <article className="h-full rounded-3xl border border-border bg-surface p-4 text-center transition-colors duration-300 hover:border-accent/40">
                {hasPublicAsset(trainer.image) ? (
                  <TrainerPhoto name={trainer.name} image={trainer.image} />
                ) : (
                  <TrainerMonogram name={trainer.name} />
                )}
                <h3 className="font-display mt-4 text-lg font-bold italic tracking-[-0.01em]">
                  {trainer.name}
                </h3>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.12em] text-accent">
                  {trainer.role}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-muted">{trainer.focus}</p>
              </article>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
