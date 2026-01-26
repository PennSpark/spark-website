import React, { useRef, useState } from "react";

type Reveal = {
  clipPath: string;
  cx: number;
  cy: number;
  r: number;
  active: boolean;
};

type PointerBoxProps = {
  className?: string;
  color?: string;
  children: (reveal: Reveal) => React.ReactNode;

  expandMs?: number;
  fadeMs?: number;
};

function maxRadiusToCoverRect(x: number, y: number, w: number, h: number) {
  const d1 = Math.hypot(x - 0, y - 0);
  const d2 = Math.hypot(x - w, y - 0);
  const d3 = Math.hypot(x - 0, y - h);
  const d4 = Math.hypot(x - w, y - h);
  return Math.max(d1, d2, d3, d4);
}

export default function PointerBox({
  className = "",
  color = "#2F80ED",
  children,
  expandMs = 520,
  fadeMs = 220,
}: PointerBoxProps) {
  const boxRef = useRef<HTMLDivElement>(null);

  const [cx, setCx] = useState(0);
  const [cy, setCy] = useState(0);
  const [r, setR] = useState(0);
  const [active, setActive] = useState(false);

  const onEnter = (e: React.PointerEvent<HTMLDivElement>) => {
    const br = boxRef.current;
    if (!br) return;

    const rect = br.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setCx(x);
    setCy(y);
    setActive(true);

    // reset radius to 0, then animate to cover the box
    setR(0);
    const maxR = maxRadiusToCoverRect(x, y, rect.width, rect.height);

    requestAnimationFrame(() => setR(maxR));
  };

  const onLeave = () => {
    // shrink back; background fades
    setR(0);
    setActive(false);
  };

  const clipPath = `circle(${r}px at ${cx}px ${cy}px)`;

  return (
    <div
      ref={boxRef}
      className={`relative overflow-hidden border-box ${className}`}
      onPointerEnter={onEnter}
      onPointerLeave={onLeave}
    >
      {/* growing background circle */}
      <div
        aria-hidden
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: color,
          clipPath,
          opacity: active ? 1 : 0,
          transition: `clip-path ${expandMs}ms cubic-bezier(0.2, 0.9, 0.15, 1), opacity ${fadeMs}ms ease`,
          willChange: "clip-path, opacity",
        }}
      />

      {/* content */}
      <div className="relative z-10">
        {children({ clipPath, cx, cy, r, active })}
      </div>
    </div>
  );
}
