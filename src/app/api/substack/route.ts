import { NextResponse } from "next/server";
import Parser from "rss-parser";

type SubstackItem = {
  title?: string;
  link?: string;
  isoDate?: string;
  pubDate?: string;
  content?: string;
  contentSnippet?: string;
  "content:encoded"?: string;
  enclosure?: { url?: string };
};

type SubstackFeed = {
  items: SubstackItem[];
};

type FeedItem = {
  enclosure?: {
    url?: string | null;
  } | null;
  contentEncoded?: string | null;
  "content:encoded"?: string | null;
  content?: string | null;
};

const parser: Parser<SubstackFeed, SubstackItem> = new Parser({
  customFields: {
    item: [
      ["content:encoded", "contentEncoded"],
      ["enclosure", "enclosure"],
    ],
  },
});


const SUBSTACK_FEED_URL = "https://pennspark.substack.com/feed";

function extractThumbnail(item: FeedItem): string | null {
  if (item.enclosure?.url) return item.enclosure.url;

  const html = item.contentEncoded || item["content:encoded"] || item.content || "";
  const match = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  if (match?.[1]) return match[1];

  return null;
}

export async function GET() {
  try {
    const feed = await parser.parseURL(SUBSTACK_FEED_URL);

    const items = (feed.items || []).map((item) => {
      const thumbnail = extractThumbnail(item);

      return {
        title: item.title ?? "",
        link: item.link ?? "",
        date: item.isoDate ?? item.pubDate ?? "",
        excerpt: item.contentSnippet ?? "",
        thumbnail,
      };
    });

    return NextResponse.json({ items });
  } catch (err) {
    console.error("[Substack] error fetching feed", err);
    return NextResponse.json(
      { error: "Failed to fetch Substack feed" },
      { status: 500 }
    );
  }
}
