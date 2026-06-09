"use client";

import Script from "next/script";
import { useEffect } from "react";
import { toInstagramPermalink, type InstagramPost } from "@/lib/instagram";

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

function processEmbeds() {
  window.instgrm?.Embeds.process();
}

type InstagramEmbedsProps = {
  posts: ReadonlyArray<InstagramPost>;
};

export function InstagramEmbeds({ posts }: InstagramEmbedsProps) {
  useEffect(() => {
    processEmbeds();
    const timer = window.setTimeout(processEmbeds, 500);
    const timer2 = window.setTimeout(processEmbeds, 1500);

    return () => {
      window.clearTimeout(timer);
      window.clearTimeout(timer2);
    };
  }, [posts]);

  return (
    <>
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="afterInteractive"
        onLoad={processEmbeds}
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => {
          const permalink = toInstagramPermalink(post.url);

          return (
            <div
              key={permalink}
              className="[&_.instagram-media]:!m-0 [&_.instagram-media]:!w-full [&_.instagram-media]:!max-w-none"
            >
              <div className="min-h-[420px] overflow-hidden rounded-2xl bg-white">
                <blockquote
                  className="instagram-media"
                  data-instgrm-captioned
                  data-instgrm-permalink={permalink}
                  data-instgrm-version="14"
                  style={{
                    background: "#FFF",
                    border: 0,
                    borderRadius: "3px",
                    boxShadow:
                      "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                    margin: 0,
                    maxWidth: "100%",
                    minWidth: "326px",
                    padding: 0,
                    width: "100%",
                  }}
                >
                  <a href={permalink} target="_blank" rel="noopener noreferrer">
                    View this post on Instagram
                  </a>
                </blockquote>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
