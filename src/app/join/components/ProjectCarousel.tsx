'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll'; // optional
import Image from 'next/image';
import { allProjects } from './AllProjects';

const MAX_RECENT_PROJECTS = 7;

export default function ProjectCarousel() {
  const emblaOptions = useMemo(() => ({ loop: true }), []);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    emblaOptions,
    // [AutoScroll({ stopOnInteraction: true })]
  );

  const [selected, setSelected] = useState(0);
  const [snapCount, setSnapCount] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setSnapCount(emblaApi.scrollSnapList().length);
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;
    const viewportW = emblaApi.rootNode().getBoundingClientRect().width;
    const trackW = emblaApi.containerNode().getBoundingClientRect().width;
    console.log({ viewportW, trackW, canNext: emblaApi.canScrollNext(), canPrev: emblaApi.canScrollPrev() });
  }, [emblaApi]);


  return (
    <section className="w-full max-w-screen">
      <div ref={emblaRef} className=" w-full min-w-0">
        <div className="flex">
          {allProjects.slice(0, MAX_RECENT_PROJECTS).map((p, i) => {
            const isActive = i === selected;
            return (
              <article
                key={i}
                className="grow-0 shrink-0 basis-[20rem] mr-10"
                aria-current={isActive ? 'true' : 'false'}
                aria-hidden={!isActive}
              >
                <div
                  className={[
                    'relative h-[29rem] flex flex-col border-[1.5px] rounded-[3rem] shadow-xl overflow-hidden',
                    'transition-[padding,background-color] duration-300 ease-out'
                  ].join(' ')}
                  >
                    <div className="relative w-full aspect-[2/1] border-b-2 overflow-hidden">
                      <Image
                        src='/project-images/stride/cover.png'
                        alt={`${p.title} header`}
                        fill
                        className="object-cover"
                        priority={i === 0}
                      />
                    </div>
                    <div className='flex flex-col p-8'>
                      <h3 className="text-lg font-semibold">{p.title}</h3>
                      <h4>{p.semester}</h4>
                      <p>
                      { p.tags.map((tag, idx) => (
                        <span key={idx} className="inline-block text-xs font-medium mr-2 mb-2 px-2 py-0.5 rounded">{tag}</span>
                      ))
                      }
                      </p>
                      <p>{p.description}</p>
                    </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="mt-10 flex items-center justify-center gap-12">
        <button
          type="button" className='yellow-circular'
          onClick={() => emblaApi?.scrollPrev()}
        >
          ‹
        </button>
        <button
          type="button" className='yellow-circular'
          onClick={() => emblaApi?.scrollNext()}
        >
          ›
        </button>
      </div>
    </section>
  );
}
