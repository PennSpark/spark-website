'use client'
import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { allProjects } from "./data/allProjects";

const Cover = lazy(() => import("./pages/Cover"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Community = lazy(() => import("./pages/Community"));
const Clients = lazy(() => import("./pages/Clients"));
const Join = lazy(() => import("./pages/Join"));

type PageModule = { default: React.ComponentType };

function PageFallback() {
  return <div className="w-full min-h-[100svh] py-16 flex justify-center items-center">Loading…</div>;
}

const projectModules = import.meta.glob<PageModule>("./pages/projects-pages/**/*.tsx");

function modulePathFor(pageKey: string) {
  return `./pages/projects-pages${pageKey}.tsx`;
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <div className="app">
      <main>
        <Navbar />
        <ScrollToTop />
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<Cover />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/community" element={<Community />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/join" element={<Join />} />

            {allProjects.map((project) => {
              const p = modulePathFor(project.pageKey);
              const importer = projectModules[p];

              if (!importer) {
                console.warn("Missing project page module:", p);
                return null;
              }

              const ProjectPage = lazy(async () => {
                const mod: PageModule = await importer();
                return { default: mod.default };
              });

              return (
                <Route
                  key={project.pageKey}
                  path={`/projects${project.pageKey}`}
                  element={<ProjectPage />}
                />
              );
            })}
          </Routes>
        </Suspense>

        <Footer />
      </main>
    </div>
  );
}
