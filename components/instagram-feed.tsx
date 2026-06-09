import Link from "next/link";
import { InstagramEmbeds } from "@/components/instagram-embeds";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/section-heading";
import {
  fetchRecentInstagramPosts,
  type InstagramPost,
} from "@/lib/instagram";
import { instagramPosts, sections, site } from "@/lib/content";

const INSTAGRAM_USERNAME = "kratoscaliarena";
const POST_LIMIT = 6;

export async function InstagramFeed() {
  let posts: InstagramPost[] = [...instagramPosts];

  try {
    const livePosts = await fetchRecentInstagramPosts(
      INSTAGRAM_USERNAME,
      POST_LIMIT,
    );

    if (livePosts.length > 0) {
      posts = livePosts;
    }
  } catch {
    posts = [...instagramPosts];
  }

  return (
    <section id="instagram" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              label={sections.instagram.label}
              title={sections.instagram.title}
              description={sections.instagram.description}
            />
            <Link
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-accent px-5 py-2.5 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-background"
            >
              Follow {site.instagramHandle}
            </Link>
          </div>
        </ScrollReveal>

        {posts.length > 0 ? (
          <InstagramEmbeds posts={posts} />
        ) : (
          <div className="mt-12 rounded-2xl border border-border bg-surface p-8 text-center">
            <p className="text-muted">No Instagram posts available right now.</p>
            <Link
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex text-sm font-medium text-accent hover:underline"
            >
              View {site.instagramHandle} on Instagram
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
