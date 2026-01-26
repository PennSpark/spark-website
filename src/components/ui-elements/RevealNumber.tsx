import React from "react";

export default function RevealNumber({
  value,
  clipPath,
  className = "",
  baseColor,
}: {
  value: React.ReactNode;
  clipPath: string;
  baseColor: string;
  className?: string;
}) {
  return (
    <span id='thin-header-spark-text' className={`relative inline-block leading-none ${className}`}>
      {/* base colored number */}
      <span style={{ color: baseColor }}>{value}</span>
      {/* white clip path*/}
      <span
        aria-hidden
        className="absolute inset-0 text-white"
        style={{ clipPath }}
      >
        {value}
      </span>
    </span>
  );
}
