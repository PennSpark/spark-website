const FEED_URL = "https://pennspark.substack.com/feed";

function corsProxy(url: string) {
  return `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`;
}

type FeedItem = {
  title: string;
  link: string;
  date: string;
  excerpt: string;
  thumbnail: string | null;
};

function textFrom(el: Element | null) {
  return el?.textContent?.trim() ?? "";
}

function firstImgFromHtml(html: string) {
  const m = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return m?.[1] ?? null;
}

export async function fetchSubstackItems(): Promise<FeedItem[]> {
  const res = await fetch(corsProxy(FEED_URL), { cache: "no-store" });
  if (!res.ok) throw new Error(`Feed fetch failed: ${res.status}`);

  const xmlText = await res.text();
  const doc = new DOMParser().parseFromString(xmlText, "text/xml");

  const items = Array.from(doc.querySelectorAll("item")).map((item) => {
    const title = textFrom(item.querySelector("title"));
    const link = textFrom(item.querySelector("link"));
    const date =
      textFrom(item.querySelector("isoDate")) ||
      textFrom(item.querySelector("pubDate"));

    const encoded =
      textFrom(item.querySelector("content\\:encoded")) ||
      textFrom(item.querySelector("description"));

    const excerpt = textFrom(item.querySelector("description"));
    const enclosureUrl = item.querySelector("enclosure")?.getAttribute("url") ?? "";
    const thumbnail = enclosureUrl || firstImgFromHtml(encoded) || null;

    return { title, link, date, excerpt, thumbnail };
  });

  return items;
}
