"use client";

import HeaderBanner from "../components/HeaderBanner";
import PixelGrid from "../components/PixelGrid";
import WorkWithUs from "../components/WorkWithUs";
import ClientsSection from "../components/ClientsSection";

export default function ClientsPage() {
  return (
    <>
      {/* Pixel grid hero at the top */}
      <HeaderBanner className="mb-20 bg-transparent relative overflow-hidden">
        {/* pixel grid background */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="w-full h-full scale-[1.1]">
            <PixelGrid />
          </div>
        </div>

        {/* text overlay */}
        <div className="absolute top-1/4 left-8 md:left-24 lg:left-32 z-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-xl leading-tight">
            Designing and building for real impact.
          </h1>
        </div>
      </HeaderBanner>

      {/* Section 2 – Work With Us */}
      <WorkWithUs />

      {/* Section 3 – Past Clients */}
      <ClientsSection />
    </>
  );
}
