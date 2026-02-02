"use client";

import { useEffect, useState } from "react";
import { getCachedSubstackItems, getLiveSubstackItems, type FeedItem } from "../../lib/substackFeed";

export default function SubstackGrid() {
  const [posts, setPosts] = useState<FeedItem[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let alive = true;

    (async () => {
      // access cache first
      let hasCached = false;
      try {
        const cached = await getCachedSubstackItems();
        if (!alive) return;
        setPosts(cached);
        setReady(true);
        hasCached = cached.length > 0;
      } catch {
        // no cache
      }

      // live refresh
      if (!alive) return;

      try {
        const live = await getLiveSubstackItems({ timeoutMs: 1500 });
        if (!alive) return;
        setPosts(live);
        setReady(true);
      } catch {
        // if nothing in cache, return to show something
        if (!alive) return;
        if (!hasCached) setReady(true);
      }
    })();

    return () => {
      alive = false;
    };
  }, []);

  if (!ready) return <p>Loading Substack posts…</p>;
  if (!posts.length) return null;

  return (
    <section className="content-section w-full">
      <div className="flex items-baseline justify-between mb-8">
        <h2 className="mb-0">Newsletter</h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-left">
        {posts.slice(0, 6).map((post) => (
          <a
            key={post.link}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col overflow-hidden"
          >
            <div className="relative w-full interactive-border-box aspect-[1] overflow-hidden">
              {post.thumbnail ? (
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="object-cover min-h-full"
                  sizes="(min-width:1024px) 20rem, (min-width:640px) 50vw, 100vw"
                  loading="lazy"
                />
              ) : (
                <div className="relative w-full interactive-border-box aspect-[1] bg-neutral-200" />
              )}
            </div>

            <div className="pt-2 flex flex-col">
              <h3 className="line-clamp-1 leading-tight">{post.title}</h3>
              <p className="text-neutral-500">
                {post.date ? new Date(post.date).toLocaleDateString() : ""}
              </p>
              {post.excerpt ? <p className="text-neutral-700 line-clamp-2">{post.excerpt}</p> : null}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}