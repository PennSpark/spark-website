import { assetUrl } from "../../utils";
import { Link } from "react-router-dom";
import { allProjects } from "../../data/allProjects";

export default function ProjectGrid() {
  const bySemester = allProjects.reduce<Record<string, typeof allProjects>>(
    (acc, project) => {
      (acc[project.semester] ??= []).push(project);
      return acc;
    },
    {}
  );

  const semesters = ["Fall 2024", "Spring 2024"]

  return (
    <section className="content-section w-full">
      <div className="flex flex-col gap-12">
        {semesters.map((semester) => {
          const projects = bySemester[semester];

          return (
            <div key={semester} className="w-full text-left">
              <h3>
                {semester}
              </h3>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                  <Link
                    key={project.pageKey}
                    to={"/projects" + project.pageKey}
                    rel="noopener noreferrer"
                    className="flex flex-col overflow-hidden"
                  >
                    <div className="relative w-full interactive-border-box aspect-[1] overflow-hidden">
                      {project.headerImage ? (
                        <img
                          src={assetUrl(project.headerImage)}
                          alt={project.title}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      ) : (
                        <div className="relative w-full interactive-border-box aspect-[1] bg-neutral-200" />
                      )}
                    </div>

                    {/* text block */}
                    <div className="pt-2 flex flex-col">
                      <p className="text-neutral-500 mb-0.5">
                        {semester}
                      </p>
                      <h3 className="line-clamp-1 leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-neutral-500 -mt-2">
                        {project.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
