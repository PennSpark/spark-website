'use client';

import { assetUrl } from '../../utils';
import { Link } from 'react-router-dom';
import { useState, useMemo, type KeyboardEvent } from 'react';
import { allProjects } from '../../data/allProjects';

const TAG_FILTERS = ['Coding', 'Design', 'Creative', 'Client'] as const;
type TagFilter = (typeof TAG_FILTERS)[number];

// newest semester first
function compareSemesterDesc(a: string, b: string) {
  const [sa, yaStr] = a.split(' ');
  const [sb, ybStr] = b.split(' ');
  const ya = parseInt(yaStr, 10);
  const yb = parseInt(ybStr, 10);
  if (ya !== yb) return yb - ya;

  const rank = (s: string) => (s === 'Spring' ? 1 : 2); // Fall after Spring in same year
  return rank(sb) - rank(sa); // Fall 2024 before Spring 2024
}

export default function ProjectList() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeTags, setActiveTags] = useState<TagFilter[]>([]);

  const toggleTag = (tag: TagFilter) => {
    setOpenIndex(null);
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const projects = useMemo(() => {
    const sorted = [...allProjects].sort((a, b) =>
      compareSemesterDesc(a.semester, b.semester)
    );

    if (activeTags.length === 0) return sorted;

    return sorted.filter((p) =>
      activeTags.every((tag) => p.tags.includes(tag))
    );
  }, [activeTags]);

  const handleToggle = (i: number, isOpen: boolean) => {
    setOpenIndex(isOpen ? null : i);
  };

  const handleKeyDown = (
    e: KeyboardEvent<HTMLDivElement>,
    i: number,
    isOpen: boolean
  ) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggle(i, isOpen);
    }
  };

  return (
    <div className="w-full">
      <div className="mb-4 flex flex-wrap gap-3">
        <h3>Filter</h3>
        {TAG_FILTERS.map((tag) => {
          const isActive = activeTags.includes(tag);
          return (
            <label
              key={tag}
              onClick={() => toggleTag(tag)}
              className={[
                'h-fit select-none cursor-pointer',
                'transition-colors duration-200',
                isActive
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-black hover:bg-black hover:text-white',
              ].join(' ')}
            >
              {tag}
            </label>
          );
        })}
      </div>

      {/* Project rows */}
      {projects.map((p, i) => {
        const isOpen = openIndex === i;

        return (
          <div
            key={p.pageKey}
            className={[
              'w-full group cursor-pointer px-7 my-5 border-box',
              'transition-[padding,background-color] duration-300 ease-out',
              isOpen ? 'py-7 bg-[#FFD552]' : 'py-4 bg-white',
            ].join(' ')}
            onMouseEnter={() => setOpenIndex(i)}
            onMouseLeave={() => setOpenIndex(null)}
            onClick={() => handleToggle(i, isOpen)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => handleKeyDown(e, i, isOpen)}
          >
            <div
              className={[
                'grid items-start text-start overflow-hidden',
                'transition-[grid-template-columns] duration-300 ease-out',
                isOpen ? 'grid-cols-[8rem_1fr] gap-6' : 'grid-cols-[0rem_1fr]',
              ].join(' ')}
            >
              <div className="overflow-hidden rounded-xl">
                <div className="relative w-full aspect-[1/1] border-box overflow-hidden bg-neutral-200">
                  {isOpen && p.headerImage && (
                    <img
                      src={assetUrl(p.headerImage)}
                      alt={`${p.title} header`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>


              <div>
                <Link
                  to={"/projects" + p.pageKey}
                  className="flex flex-row justify-between items-start gap-x-2 gap-y-1 mb-1">
                    <h3 className="text-xl font-semibold">{p.title}</h3>
                    <div className="flex flex-wrap gap-2">
                    {p.tags?.length > 0 && (
                      p.tags.map((tag) => (
                        <label key={tag}>
                          {tag}
                        </label>
                      )))}
                  </div>
                </Link>

                <p
                  className={[
                    'text-sm transition-all duration-200',
                    isOpen ? 'line-clamp-none' : 'line-clamp-1',
                  ].join(' ')}
                >
                  {p.description}
                </p>

                {/* extra copy expands under title/description */}
                {p.team && (
                  <div
                    className={[
                      'grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out',
                      isOpen ? 'grid-rows-[1fr] mt-2' : 'grid-rows-[0fr]',
                    ].join(' ')}
                  >
                    <div className="min-h-0 text-xs text-neutral-800">
                      {p.team}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}

      {projects.length === 0 && (
        <p className="mt-6 text-sm text-neutral-500">
          No projects match the current filters.
        </p>
      )}
    </div>
  );
}
