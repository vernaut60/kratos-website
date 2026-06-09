import Image from "next/image";
import { ScrollReveal } from "@/components/scroll-reveal";
import { gallery } from "@/lib/content";

const [video, image] = gallery;

export function Gallery() {
  return (
    <section id="gallery" className="border-t border-border py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <ScrollReveal>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Gallery
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
            Training sessions, workshops, and life at the arena.
          </p>
        </ScrollReveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          <ScrollReveal className="lg:col-span-2">
            <figure className="overflow-hidden rounded-2xl border border-border bg-background">
              <video
                src={video.url}
                controls
                playsInline
                className="aspect-video w-full object-cover"
              />
              <figcaption className="px-5 py-4 text-sm font-medium">
                {video.title}
              </figcaption>
            </figure>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <figure className="overflow-hidden rounded-2xl border border-border bg-background">
              <div className="relative aspect-[4/5]">
                <Image
                  src={image.url}
                  alt={image.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <figcaption className="px-5 py-4 text-sm font-medium">
                {image.title}
              </figcaption>
            </figure>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
