import fs from "node:fs";
import path from "node:path";

const FEED_URL = "https://pennspark.substack.com/feed";

const res = await fetch(FEED_URL, {
  headers: { "User-Agent": "pennspark-website-build" },
});
if (!res.ok) throw new Error(`Feed fetch failed: ${res.status}`);

const xml = await res.text();
const outDir = path.join(process.cwd(), "public");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "substack.xml"), xml, "utf8");

console.log("Wrote public/substack.xml");