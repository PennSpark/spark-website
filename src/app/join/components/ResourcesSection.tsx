import React from "react";

type ResourceItem = {
  id: number;
  code: string;   // top line (e.g. CIS 4120)
  name: string;   // second line (e.g. Human-Computer Interaction)
  href: string;
};

interface ResourcesSectionProps {
  headerText: string;       // "Design Resources" / "Dev Resources"
  sectionTitle: string;     // e.g. "Penn Classes"
  items: ResourceItem[];
  headerId?: string;        // defaults to "header-section"
}

const ResourcesSection: React.FC<ResourcesSectionProps> = ({
  headerText,
  sectionTitle,
  items,
  headerId = "header-section",
}) => {
  return (
    <main className="design-resources-root">
      <div className="design-resources-container">
        {/* Page header (left-aligned, same left edge as box) */}
        <section id={headerId} className="design-resources-header">
          {headerText}
        </section>

        {/* Fixed-size panel with scrollable content (using your existing CSS) */}
        <section className="design-resources-panel">
          <h2 className="design-resources-section-title">{sectionTitle}</h2>

          <div className="design-resources-scroll">
            {items.map((item) => (
              <article key={item.id} className="course-card">
                <div className="course-card-text">
                  <div className="course-code">{item.code}</div>
                  <div className="course-name">{item.name}</div>
                </div>

                <a href={item.href} className="redirect-button">
                  Redirect
                </a>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default ResourcesSection;
