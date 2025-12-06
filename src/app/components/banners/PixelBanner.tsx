"use client";

import React, {
  useState,
  useEffect,
  useRef,
  type ReactNode,
} from "react";

type PixelBannerProps = {
  className?: string;
  children?: ReactNode;
};

export default function PixelBanner({ className, children }: PixelBannerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [gridDims, setGridDims] = useState({ rows: 0, cols: 0 });
  const [cellColors, setCellColors] = useState<string[]>([]);

  const colors = ["#F5654E", "#FFD552", "#246DED"];

  useEffect(() => {
    function computeGrid() {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();

      const targetPixelSize = 24;

      const cols = Math.max(1, Math.floor(rect.width / targetPixelSize));
      const rows = Math.max(1, Math.floor(rect.height / targetPixelSize));

      setGridDims((prev) => {
        if (prev.rows === rows && prev.cols === cols) return prev;
        return { rows, cols };
      });
    }

    computeGrid();
    window.addEventListener("resize", computeGrid);
    return () => window.removeEventListener("resize", computeGrid);
  }, []);

  useEffect(() => {
    const total = gridDims.rows * gridDims.cols;
    if (!total) return;

    setCellColors((prev) => {
      if (prev.length === total) return prev;
      const next = Array<string>(total).fill("#ffffff");
      for (let i = 0; i < Math.min(prev.length, total); i++) {
        next[i] = prev[i];
      }
      return next;
    });
  }, [gridDims.rows, gridDims.cols]);

  const totalCells = gridDims.rows * gridDims.cols;

  function handleHover(index: number) {
    if (!totalCells) return;
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setCellColors((prev) => {
      if (!prev.length) return prev;
      const copy = [...prev];
      copy[index] = randomColor;
      return copy;
    });
  }

  return (
    <section
      className={`relative flex bg-[#F4F4F4] w-full h-[100svh] items-center justify-start ${className ?? ""}`}
    >
      {/* pixel background */}
      <div
        ref={containerRef}
        className="absolute inset-0 z-10"
      >
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
                onMouseOver={() => handleHover(i)}
                className="border border-gray-300"
                style={{
                    borderWidth: "0.2px",
                  backgroundColor: cellColors[i],
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
