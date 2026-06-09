import Image from "next/image";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/section-heading";
import { blogPosts, sections } from "@/lib/content";

export function Blog() {
  return (
    <section id="blog" className="border-t border-border bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              label={sections.blog.label}
              title={sections.blog.title}
              description={sections.blog.description}
            />
            <button
              type="button"
              className="rounded-full border border-accent px-5 py-2.5 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-background"
            >
              View all
            </button>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {blogPosts.map((post, index) => (
            <ScrollReveal key={post.slug} delay={index * 0.06}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface-elevated">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between gap-3 text-xs">
                    <p className="font-semibold uppercase tracking-wider text-accent">
                      {post.category}
                    </p>
                    <time className="text-muted">{post.date}</time>
                  </div>
                  <h3 className="font-display mt-4 text-xl font-semibold leading-snug">
                    {post.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {post.excerpt}
                  </p>
                  <p className="mt-4 text-xs text-muted">By {post.author}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
