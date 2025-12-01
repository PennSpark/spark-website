import React from "react";

type ResourceItem = {
  id: number;
  code: string;
  name: string;
  href: string;
};

interface ResourcesSectionProps {
  headerText: string;
  sectionTitle: string;
  items: ResourceItem[];
}

const ResourcesSection: React.FC<ResourcesSectionProps> = ({
  headerText,
  sectionTitle,
  items,
}) => {
  return (
      <div className="flex flex-col w-full">
        <h3 className='self-start'>
          {headerText}
        </h3>

        <section
          className="
            flex h-[30em] flex-col overflow-hidden rounded-[24px]
            border-box bg-[#f5f3f0] p-8 md:px-14 gap-3
          "
        >
          <h2 className='self-start'>
            {sectionTitle}
          </h2>

          <div className="flex-1 min-h-0 space-y-3 overflow-y-auto pr-2">
            {items.map((item) => (
              <article
                key={item.id}
                className="
                  flex items-center justify-between gap-2
                  border-box bg-white
                  px-5 py-4 box-border
                  max-sm:flex-col max-sm:items-start
                "
              >
                <div className="flex flex-col justify-start items-start">
                  <h2>
                    {item.code}
                  </h2>
                  <p>
                    {item.name}
                  </p>
                </div>

                <button id='black-button' style={{borderRadius: '100px'}}>
                  <a href={item.href}>
                  Redirect
                  </a>
                </button>
              </article>
            ))}
          </div>
        </section>
      </div>
  );
};

export default ResourcesSection;
