'use client';

import { useState } from 'react';
import Image from 'next/image';
import { allProjects } from './AllProjects';

export default function ProjectList() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full">
      {allProjects.map((p, i) => {
        const isOpen = openIndex === i;

        return (
          <div
            key={i}
            className={`w-full group cursor-pointer px-7 my-5 border-[1.5px] rounded-[1.5rem] transition-[padding,background-color] duration-300 ease-out ${isOpen ? 'py-7 bg-[#FFD552]' : 'py-4 bg-white'}`}
            onMouseEnter={() => setOpenIndex(i)}
            onMouseLeave={() => setOpenIndex(null)}
            onClick={() => setOpenIndex(isOpen ? null : i)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setOpenIndex(isOpen ? null : i);
              }
            }}
          >
            {/* animated grid that expands to reveal image and more text */}
            <div
              className={
                `grid items-start text-start overflow-hidden transition-[grid-template-columns] duration-300 ease-out ${isOpen ? 'grid-cols-[8rem_1fr] gap-6' : 'grid-cols-[0rem_1fr]'} `}
            >
                {/* left image: height linked to width */}
                <div className="overflow-hidden rounded-xl">
                    <div className="relative w-full aspect-[1/1] border-[1.5px] rounded-[1.2rem] overflow-hidden">
                    <Image
                        src='/project-images/stride/cover.png'
                        alt={`${p.title} header`}
                        fill
                        className="object-cover"
                        priority={i === 0}
                    />
                    </div>
                </div>

              {/* right text */}
              <div>
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p>{p.description}</p>

                {/* optional extra copy expands under title/description */}
                {p.extra && (
                  <div
                    className={[
                      'grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out',
                      isOpen ? 'grid-rows-[1fr] mt-2' : 'grid-rows-[0fr]',
                    ].join(' ')}
                  >
                    <div className="min-h-0 text-sm">
                      {p.extra}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
