"use client";

import { useEffect, useState } from "react";

type SubstackPost = {
  title: string;
  link: string;
  date: string;
  excerpt: string;
  thumbnail: string | null;
};

export default function SubstackGrid() {
  const [posts, setPosts] = useState<SubstackPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(new URL("api/substack", import.meta.env.BASE_URL));
        const data = await res.json();
        setPosts(data.items || []);
      } catch (e) {
        console.error("Error loading Substack posts", e);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (loading) {
    return (
      <p>
        Loading posts…
      </p>
    );
  }

  if (!posts.length) {
    return (
      <p>
        No posts found.
      </p>
    );
  }

  return (
    <section className="content-section w-full">
      <h2 className='mb-8'>
        Newsletter
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-left">
        {posts.slice(0, 6).map((post) => (
          <a
            key={post.link}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col overflow-hidden"
          >
            {/* thumbnail */}
            <div className="relative w-full interactive-border-box aspect-[1] overflow-hidden">
              {post.thumbnail ? (
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="object-cover"
                  sizes="(min-width:1024px) 20rem, (min-width:640px) 50vw, 100vw"
                />
              ) : (
                <div className="relative w-full interactive-border-box aspect-[1] bg-neutral-200" />
              )}
            </div>

            {/* text block */}
            <div className="pt-2 flex flex-col">
              <h3 className="line-clamp-1 leading-tight">
                {post.title}
              </h3>
              <p className="text-neutral-500">
                {post.date ? new Date(post.date).toLocaleDateString() : ""}
              </p>
              {post.excerpt && (
                <p className="text-neutral-700 line-clamp-2">
                  {post.excerpt}
                </p>
              )}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
