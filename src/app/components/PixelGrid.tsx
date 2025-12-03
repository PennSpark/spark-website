"use client";

import React, { useState } from "react";

export default function PixelGrid() {
  // tweak these if you want more / fewer squares
  const rows = 14; // more rows = smaller squares
  const cols = 32; // more columns = smaller squares

  const totalCells = rows * cols;
  const colors = ["#F5654E", "#FFD552", "#246DED"];

  const [cellColors, setCellColors] = useState<string[]>(
    // white squares by default
    Array(totalCells).fill("#ffffff")
  );

  function handleHover(index: number) {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const newColors = [...cellColors];
    newColors[index] = randomColor;
    setCellColors(newColors);
  }

  return (
    // fills whatever box its parent gives it (hero section)
    <div className="w-full h-full">
      <div
        className="grid w-full h-full gap-0 border-t border-l border-r border-gray-300"
        style={{
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
        }}
      >
        {Array.from({ length: totalCells }).map((_, i) => (
          <div
            key={i}
            onMouseOver={() => handleHover(i)}
            className="border border-gray-300"
            style={{
              backgroundColor: cellColors[i],
              aspectRatio: "1 / 1",
            }}
          />
        ))}
      </div>
    </div>
  );
}
