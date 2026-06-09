export type InstagramPost = {
  url: string;
  caption: string;
};

const INSTAGRAM_APP_ID = "936619743392459";

export function toInstagramPermalink(url: string): string {
  const match = url.match(/instagram\.com\/(?:[^/]+\/)?(reel|p)\/([^/?#]+)/i);

  if (match) {
    return `https://www.instagram.com/${match[1]}/${match[2]}/`;
  }

  return url;
}

function postTypeFromNode(node: {
  is_video?: boolean;
  product_type?: string;
}): "reel" | "p" {
  if (node.product_type === "clips" || node.is_video) {
    return "reel";
  }

  return "p";
}

export async function fetchRecentInstagramPosts(
  username: string,
  limit = 6,
): Promise<InstagramPost[]> {
  const response = await fetch(
    `https://www.instagram.com/api/v1/users/web_profile_info/?username=${encodeURIComponent(username)}`,
    {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "X-IG-App-ID": INSTAGRAM_APP_ID,
        "X-Requested-With": "XMLHttpRequest",
      },
      next: { revalidate: 3600 },
    },
  );

  if (!response.ok) {
    throw new Error(`Instagram profile fetch failed for @${username}`);
  }

  const data = (await response.json()) as {
    data?: {
      user?: {
        edge_owner_to_timeline_media?: {
          edges?: Array<{
            node: {
              shortcode: string;
              is_video?: boolean;
              product_type?: string;
              edge_media_to_caption?: {
                edges?: Array<{ node: { text: string } }>;
              };
            };
          }>;
        };
      };
    };
  };

  const edges = data.data?.user?.edge_owner_to_timeline_media?.edges ?? [];

  return edges.slice(0, limit).map(({ node }) => {
    const type = postTypeFromNode(node);
    const caption =
      node.edge_media_to_caption?.edges?.[0]?.node.text?.trim() ?? "";

    return {
      url: `https://www.instagram.com/${type}/${node.shortcode}/`,
      caption,
    };
  });
}
