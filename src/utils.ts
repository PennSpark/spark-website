export function assetUrl(path: string) {
  const p = path.startsWith("/") ? path.slice(1) : path;
  const base = new URL(import.meta.env.BASE_URL, window.location.origin);
  return new URL(p, base).toString();
}
