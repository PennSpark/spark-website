// substack feed fetching and parsing helpers
// defaults to a local file updated on build, refreshing with live data if possible
// related files: public/substack.xml, scripts/fetchSubstackFeed.mjs

const FEED_URL = "https://pennspark.substack.com/feed";
const LOCAL_CACHE_URL = `${import.meta.env.BASE_URL}substack.xml`;

function corsProxy(url: string) {
  return `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`;
}

export type FeedItem = {
  title: string;
  link: string;
  date: string;
  excerpt: string;
  thumbnail: string | null;
};

function textFrom(el: Element | null) {
  return el?.textContent?.trim() ?? "";
}

// Faster: regex first, DOM fallback only if needed
function firstImgFromHtml(html: string) {
  if (!html) return null;

  const m1 = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  if (m1?.[1]) return m1[1];

  const m2 = html.match(/<img[^>]+data-src=["']([^"']+)["']/i);
  if (m2?.[1]) return m2[1];

  const m3 = html.match(/srcset=["']([^"']+)["']/i);
  if (m3?.[1]) return m3[1].split(",")[0]?.trim()?.split(" ")?.[0] ?? null;

  try {
    const tmp = document.implementation.createHTMLDocument("");
    tmp.body.innerHTML = html;
    const img = tmp.querySelector("img");
    if (!img) return null;
    return (
      img.getAttribute("src") ||
      img.getAttribute("data-src") ||
      img.getAttribute("srcset")?.split(",")?.[0]?.trim()?.split(" ")?.[0] ||
      null
    );
  } catch {
    return null;
  }
}

async function fetchWithTimeout(url: string, ms: number) {
  const ctrl = new AbortController();
  const t = window.setTimeout(() => ctrl.abort(), ms);
  try {
    return await fetch(url, { cache: "no-store", signal: ctrl.signal });
  } finally {
    window.clearTimeout(t);
  }
}

function parseFeed(xmlText: string): FeedItem[] {
  const doc = new DOMParser().parseFromString(xmlText, "text/xml");
  if (doc.querySelector("parsererror")) {
    throw new Error("RSS parse error (received non-XML response)");
  }

  return Array.from(doc.querySelectorAll("item")).map((item) => {
    const title = textFrom(item.querySelector("title"));
    const link = textFrom(item.querySelector("link"));
    const date =
      textFrom(item.querySelector("pubDate")) ||
      textFrom(item.querySelector("dc\\:date")) ||
      "";

    const encoded =
      textFrom(item.querySelector("content\\:encoded")) ||
      textFrom(item.querySelector("description"));

    const excerpt = textFrom(item.querySelector("description")) || encoded;

    const enclosureUrl = item.querySelector("enclosure")?.getAttribute("url") ?? "";
    const thumbnail = enclosureUrl || firstImgFromHtml(encoded) || null;

    return { title, link, date, excerpt, thumbnail };
  });
}

export async function getCachedSubstackItems(): Promise<FeedItem[]> {
  const res = await fetch(LOCAL_CACHE_URL);
  if (!res.ok) throw new Error(`Cached feed missing: ${res.status}`);
  const xml = await res.text();
  return parseFeed(xml);
}

export async function getLiveSubstackItems(opts?: { timeoutMs?: number }): Promise<FeedItem[]> {
  const timeoutMs = opts?.timeoutMs ?? 1500;
  const url = corsProxy(FEED_URL);
  const res = await fetchWithTimeout(url, timeoutMs);

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Live feed failed: ${res.status} ${body.slice(0, 120)}`);
  }

  const xml = await res.text();
  return parseFeed(xml);
}