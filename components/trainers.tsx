import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/section-heading";
import { sections, trainers } from "@/lib/content";

function TrainerAvatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="flex aspect-[3/4] w-full items-center justify-center rounded-3xl border border-border bg-gradient-to-b from-surface-elevated to-surface">
      <span className="font-display text-4xl font-bold text-accent">{initials}</span>
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
              delay={index * 0.05}
              className="w-[240px] shrink-0"
            >
              <article className="rounded-3xl border border-border bg-surface p-4 text-center">
                <TrainerAvatar name={trainer.name} />
                <h3 className="font-display mt-4 text-lg font-semibold">
                  {trainer.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-accent">{trainer.role}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted">{trainer.focus}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
