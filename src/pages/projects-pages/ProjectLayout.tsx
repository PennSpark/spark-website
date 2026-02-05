import { assetUrl } from "../../utils";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
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

  const heroImg = img ?? project.headerImage;

  const demoUrlLabel = demoUrl ? "Demo Here!" : "";
  const sourcecodeLabel = sourcecodeUrl ? "Source Code" : "";

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
      <section className='content-section w-full'></section>
      <section id='header-section' className='relative w-full flex flex-col md:flex-row gap-10 md: gap-20 justify-center items-center md:items-start md:justify-start'
        style={{backgroundColor: bgColor || "transparent"}}
      >
        <div className='w-full md:w-48 h-full flex-shrink-0 flex flex-col md:flex-col-reverse justify-center items-center md:items-start md:justify-start gap-4'>
          <Link to={"/projects"} className='self-start '>
            <button className='aspect-square' style={{ borderRadius: '100rem', padding: '15px'}}>
              <img src={assetUrl("/icons/left-arrow.svg")} alt="Back to projects"/>
            </button>
          </Link>
          <img src={assetUrl(heroImg)} alt={`${project.title} header`} 
          className='border-box w-48 h-48 aspect-square object-cover object-center'
          />
        </div>

        <div className='w-full flex flex-col gap-5 md:text-left'>
        <h1>{project.title}</h1>
        <div className='justify-center md:justify-start flex flex-row gap-2'>
          {
            project.tags.map((tag) => (
              <label key={tag}>
                {tag}
              </label>
            ))
          }
        </div>
        <h3>{project.description}</h3>
        {project.team ? (
            <p className='-mt-6'>{project.semester} | {project.team}</p>
        ) : null}

        {(demoUrl || sourcecodeUrl) ? (
          <div className='w-full flex flex-row justify-center md:justify-start gap-2 mt-2'>
            {sourcecodeUrl ? (
              <button id="black-button" className='project-button'>
                <a href={sourcecodeUrl} target="_blank" rel="noopener noreferrer">
                  {sourcecodeLabel}
                </a>
              </button>
            ) : null}
            {demoUrl ? (
              <button className='project-button'>
                <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                  {demoUrlLabel}
                </a>
              </button>
            ) : null}
          </div>
        ) : null}
        </div>
      </section>

      {sections.map((s, i) => (
        <section key={`${i}-${s.title}`}
        className='content-section project-section w-full flex flex-col'
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
