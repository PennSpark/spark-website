import { assetUrl } from "../../utils";
import type { ReactNode } from "react";
import type { Project } from "../../data/allProjects";

import './project-layout.css'

export type ProjectSection = {
  title: string;
  content: ReactNode[];
};

export type ProjectLayoutProps = {
  project: Project;

  img?: string;
  bgColor?: string;

  demoUrl?: string;
  sourcecodeUrl?: string;
  demoVisuals?: ReactNode[];

  sections: ProjectSection[];
};

export default function ProjectLayout(props: ProjectLayoutProps) {
  const {
    project,
    img,
    bgColor,
    demoUrl,
    sourcecodeUrl,
    demoVisuals,
    sections,
  } = props;
  const projName = project.title;
  const blurb = project.description;
  const people = project.team;

  const heroImg = img ?? project.headerImage;

  const demoUrlLabel = demoUrl ? "Demo" : "";
  const sourcecodeLabel = sourcecodeUrl ? "Source Code" : "";
  const sourcecodeDivider = demoUrl && sourcecodeUrl ? " | " : "";

  const demoVisualsContent =
    demoVisuals && demoVisuals.length ? (
      <>
        <h2>Demo</h2>
        <div className='w-full'>{demoVisuals}</div>
        <br />
        <br />
      </>
    ) : null;

  return (
      <>
      <section id='header-section' className='relative w-full mt-[78px]'
        style={{backgroundColor: bgColor || "transparent"}}
      >
        <img src={assetUrl(heroImg)} alt={`${projName} header`} 
        className='absolute w-full h-full inset-0 -z-2 object-cover object-center'
        />

        {/* gradient overlay */}
        <div className='absolute w-full h-full inset-0 -z-1'
        style={{
          background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.9) 75%, rgba(255, 255, 255, 1) 100%)'
        }}
        ></div>

        <h1 className='header-spark-text mt-20'>{projName}</h1>
        <h3>{blurb}</h3>
        {people ? (
            <p>{people}</p>
        ) : null}

        {(demoUrl || sourcecodeUrl) ? (
          <p>
            <strong>
              {demoUrl ? (
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {demoUrlLabel}
                </a>
              ) : null}
            </strong>

            {demoUrl && sourcecodeUrl ? sourcecodeDivider : null}

            {sourcecodeUrl ? (
              <a
                href={sourcecodeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {sourcecodeLabel}
              </a>
            ) : null}
          </p>
        ) : null}
      </section>

      {sections.map((s, i) => (
        <section key={`${i}-${s.title}`}
        className='content-section project-section w-full flex sflex-col'
        >
          <h2 className='mb-4'>{s.title}</h2>
          <div>{s.content}</div>
        </section>
      ))}

      <section className='content-section w-full mb-20'>
        {demoVisualsContent}
      </section>
      </>
  );
}
