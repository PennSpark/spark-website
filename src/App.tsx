import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Cover = lazy(() => import("./pages/Cover"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Community = lazy(() => import("./pages/Community"));
const Clients = lazy(() => import("./pages/Clients"));
const Join = lazy(() => import("./pages/Join"));

function PageFallback() {
  return <div className="w-full py-16 flex justify-center">Loading…</div>;
}

export default function App() {
  return (
    <div className="app">
      <main>
        <Navbar />

        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<Cover />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/community" element={<Community />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/join" element={<Join />} />
          </Routes>
        </Suspense>

        <Footer />
      </main>
    </div>
  );
}
