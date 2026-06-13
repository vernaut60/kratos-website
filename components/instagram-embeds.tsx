import { InstagramLogo } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { toInstagramPermalink, type InstagramPost } from "@/lib/instagram";

type InstagramEmbedsProps = {
  posts: ReadonlyArray<InstagramPost>;
};

export function InstagramEmbeds({ posts }: InstagramEmbedsProps) {
  return (
    <div className="mt-12 grid grid-cols-2 gap-2 sm:grid-cols-3">
      {posts.map((post) => {
        const permalink = toInstagramPermalink(post.url);

        return (
          <a
            key={permalink}
            href={permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block aspect-[4/5] w-full overflow-hidden rounded-xl bg-surface"
          >
            {post.video ? (
              <video
                src={post.video}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : post.thumbnail ? (
              <Image
                src={post.thumbnail}
                alt={post.caption || "KCA on Instagram"}
                fill
                unoptimized
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, 33vw"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-surface-elevated via-surface to-background">
                <InstagramLogo size={40} weight="thin" className="text-foreground/15" />
              </div>
            )}
            <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/30" />
            <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-background/60 text-foreground backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
              <InstagramLogo size={18} weight="bold" />
            </span>
          </a>
        );
      })}
    </div>
  );
}
