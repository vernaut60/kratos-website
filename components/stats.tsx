import { ScrollReveal } from "@/components/scroll-reveal";
import { stats } from "@/lib/content";

export function Stats() {
  return (
    <section className="border-y border-border bg-surface/50">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-px bg-border md:grid-cols-3">
        {stats.map((item, index) => (
          <ScrollReveal
            key={item.label}
            delay={index * 0.08}
            className="bg-background px-6 py-10 text-center md:py-12"
          >
            <p className="text-4xl font-semibold tracking-tight text-accent md:text-5xl">
              {item.value}
            </p>
            <p className="mt-2 text-sm text-muted">{item.label}</p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
