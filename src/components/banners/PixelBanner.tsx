"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type PixelBannerProps = {
  className?: string;
  children?: ReactNode;
};

export default function PixelBanner({ className, children }: PixelBannerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [gridDims, setGridDims] = useState({ rows: 0, cols: 0 });

  const colors = ["#F5654E", "#FFD552", "#246DED"] as const;
  const colorIdxRef = useRef(0);

  const [painted, setPainted] = useState<Map<number, string>>(() => new Map());

  useEffect(() => {
    function computeGrid() {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const targetPixelSize = 24;

      const cols = Math.max(1, Math.floor(rect.width / targetPixelSize));
      const rows = Math.max(1, Math.floor(rect.height / targetPixelSize));

      setGridDims((prev) =>
        prev.rows === rows && prev.cols === cols ? prev : { rows, cols }
      );
    }

    computeGrid();
    window.addEventListener("resize", computeGrid);
    return () => window.removeEventListener("resize", computeGrid);
  }, []);

  const totalCells = gridDims.rows * gridDims.cols;

  function handleHover(index: number) {
    if (!totalCells) return;

    const nextColor = colors[colorIdxRef.current];
    colorIdxRef.current = (colorIdxRef.current + 1) % colors.length;

    setPainted((prev) => {
      const next = new Map(prev);
      next.set(index, nextColor);
      return next;
    });
  }

  return (
    <section
      className={`relative flex bg-[#F4F4F4] w-full h-[100svh] items-center justify-start ${
        className ?? ""
      }`}
    >
      <div ref={containerRef} className="absolute inset-0 z-10">
        {totalCells > 0 && (
          <div
            className="grid w-full h-full gap-0 border-t border-l border-gray-100"
            style={{
              borderWidth: "0.2px",
              gridTemplateColumns: `repeat(${gridDims.cols}, minmax(0, 1fr))`,
              gridTemplateRows: `repeat(${gridDims.rows}, minmax(0, 1fr))`,
            }}
          >
            {Array.from({ length: totalCells }).map((_, i) => (
              <div
                key={i}
                onMouseEnter={() => handleHover(i)}
                className="border border-gray-300"
                style={{
                  borderWidth: "0.2px",
                  backgroundColor: painted.get(i) ?? "#F4F4F4",
                  aspectRatio: "1 / 1",
                }}
              />
            ))}
          </div>
        )}
      </div>

      <div className="relative z-20 w-full px-8 md:px-32 lg:px-42 pointer-events-none select-none">
        {children}
      </div>
    </section>
  );
}
