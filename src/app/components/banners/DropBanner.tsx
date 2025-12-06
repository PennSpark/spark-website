"use client";

import React, {
  useRef,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import {
  Engine,
  Render,
  World,
  Bodies,
  Runner,
  Body,
  Svg,
  type Vector,
} from "matter-js";

type ShapeType = "rect" | "pill" | "round" | "half" | "l" | "path";

type ShapeConfig = {
  key: string;
  texture: string;
  type: ShapeType;
  width: number;
  height: number;
};

const SHAPES: ShapeConfig[] = [
  // blue
  { key: "blue-l", texture: "/brand-icons/blue-l.svg", type: "l", width: 140, height: 100 },
  { key: "blue-pill", texture: "/brand-icons/blue-pill.svg", type: "pill", width: 140, height: 50 },
  { key: "blue-rect", texture: "/brand-icons/blue-rect.svg", type: "rect", width: 110, height: 70 },
  { key: "blue-half", texture: "/brand-icons/blue-half.svg", type: "path", width: 60, height: 100 },
  { key: "blue-round", texture: "/brand-icons/blue-round.svg", type: "round", width: 80, height: 80 },

  // red
  { key: "red-l", texture: "/brand-icons/red-l.svg", type: "l", width: 140, height: 100 },
  { key: "red-pill", texture: "/brand-icons/red-pill.svg", type: "pill", width: 140, height: 50 },
  { key: "red-rect", texture: "/brand-icons/red-rect.svg", type: "rect", width: 110, height: 70 },
  { key: "red-half", texture: "/brand-icons/red-half.svg", type: "rect", width: 100, height: 60 }, // upgrade later
  { key: "red-round", texture: "/brand-icons/red-round.svg", type: "round", width: 80, height: 80 },

  // yellow
  { key: "yellow-l", texture: "/brand-icons/yellow-l.svg", type: "l", width: 140, height: 100 },
  { key: "yellow-pill", texture: "/brand-icons/yellow-pill.svg", type: "pill", width: 140, height: 50 },
  { key: "yellow-rect", texture: "/brand-icons/yellow-rect.svg", type: "rect", width: 110, height: 70 },
  { key: "yellow-half", texture: "/brand-icons/yellow-half.svg", type: "rect", width: 100, height: 60 }, // upgrade later
  { key: "yellow-round", texture: "/brand-icons/yellow-round.svg", type: "round", width: 80, height: 80 },
];

const SHAPE_SVG_META: Record<
  string,
  { path: string; viewWidth: number; viewHeight: number }
> = {
  "blue-half": {
    path: "M47.4438 49.6143C47.4438 62.3814 42.4402 74.622 33.5405 83.6436C26.9458 90.3285 18.6117 94.8401 9.6206 96.7285C5.36271 97.6226 1.50066 94.031 1.50048 89.2285L1.50049 10C1.50049 5.19737 5.36266 1.60504 9.62061 2.49902C18.6118 4.38744 26.9457 8.89989 33.5405 15.585C42.4402 24.6066 47.4438 36.8471 47.4438 49.6143Z",
    viewWidth: 49,
    viewHeight: 100,
  },
  "blue-l": {
    path: "M1.50049 84.5464L1.50048 12.0005C1.50048 6.20151 6.20149 1.50049 12.0005 1.50049L84.5464 1.50048C90.3454 1.50048 95.0464 6.20149 95.0464 12.0005L95.0464 36.2729C95.0464 42.0719 90.3454 46.7729 84.5464 46.7729L60.2739 46.7729C52.8182 46.7729 46.7741 52.8172 46.7739 60.2729L46.7739 84.5464C46.7739 90.3453 42.0728 95.0462 36.2739 95.0464L12.0005 95.0464C6.2015 95.0464 1.50049 90.3454 1.50049 84.5464Z",
    viewWidth: 97,
    viewHeight: 97,
  },
  "blue-pill": {
    path: "M85.4462 46.0403L52.3035 95.7029C45.3638 106.102 31.3079 108.906 20.9091 101.966C10.5103 95.0264 7.70606 80.9705 14.6458 70.5717L47.7885 20.9091C54.7282 10.5103 68.7841 7.70618 79.183 14.6458C89.5818 21.5856 92.386 35.6415 85.4462 46.0403Z",
    viewWidth: 101,
    viewHeight: 117,
  },
  "blue-rect": {
    path: "M1.5 84.5464L1.5 12.0005C1.5 6.20151 6.20101 1.50049 12 1.50049L36.2734 1.50049C42.0723 1.50063 46.7734 6.20158 46.7734 12.0005L46.7734 84.5464C46.7734 90.3453 42.0723 95.0462 36.2734 95.0464L12 95.0464C6.20101 95.0464 1.5 90.3454 1.5 84.5464Z",
    viewWidth: 49,
    viewHeight: 97,
  },
  "blue-round": {
    path: "M56.5951 2.3916C47.6541 0.600609 38.3861 1.51977 29.9633 5.0332C21.5403 8.54669 14.3399 14.4979 9.27283 22.1348C4.20578 29.7716 1.50045 38.7508 1.50037 47.9375V80.876C1.50041 88.3318 7.54455 94.376 15.0004 94.376H47.6029C56.7187 94.3759 65.631 91.654 73.2123 86.5527C80.7935 81.4514 86.704 74.1993 90.1947 65.7129C93.6854 57.2262 94.5984 47.8861 92.8187 38.876C91.039 29.8661 86.6469 21.5913 80.1986 15.0977C73.7504 8.604 65.5361 4.18262 56.5951 2.3916Z",
    viewWidth: 96,
    viewHeight: 96,
  },

  // red
  "red-half": {
    path: "M47.4438 49.6143C47.4438 62.3814 42.4402 74.622 33.5405 83.6436C26.9458 90.3285 18.6117 94.8401 9.6206 96.7285C5.36271 97.6226 1.50066 94.031 1.50048 89.2285L1.50049 10C1.50049 5.19737 5.36266 1.60504 9.62061 2.49902C18.6118 4.38744 26.9457 8.89989 33.5405 15.585C42.4402 24.6066 47.4438 36.8471 47.4438 49.6143Z",
    viewWidth: 49,
    viewHeight: 100,
  },
  "red-l": {
    path: "M95.0464 12L95.0464 84.5459C95.0464 90.3449 90.3454 95.0459 84.5464 95.0459L12.0005 95.0459C6.2015 95.0459 1.50048 90.3449 1.50048 84.5459L1.50049 60.2734C1.50049 54.4745 6.20149 49.7734 12.0005 49.7734L36.2729 49.7734C43.7287 49.7734 49.7728 43.7292 49.7729 36.2734L49.7729 12C49.7729 6.2011 54.4741 1.50015 60.2729 1.5L84.5464 1.5C90.3454 1.5 95.0464 6.20101 95.0464 12Z",
    viewWidth: 97,
    viewHeight: 97,
  },
  "red-pill": {
    path: "M85.4462 46.0403L52.3035 95.7029C45.3638 106.102 31.3079 108.906 20.9091 101.966C10.5103 95.0264 7.70606 80.9705 14.6458 70.5717L47.7885 20.9091C54.7282 10.5103 68.7841 7.70618 79.183 14.6458C89.5818 21.5856 92.386 35.6415 85.4462 46.0403Z",
    viewWidth: 101,
    viewHeight: 117,
  },
  "red-rect": {
    path: "M12.0002 1.5H84.5461C90.3451 1.5 95.0461 6.20101 95.0461 12V36.2734C95.046 42.0723 90.345 46.7734 84.5461 46.7734H12.0002C6.20134 46.7734 1.50039 42.0723 1.50024 36.2734V12C1.50024 6.20101 6.20125 1.5 12.0002 1.5Z",
    viewWidth: 97,
    viewHeight: 49,
  },
  "red-round": {
    path: "M56.5951 2.3916C47.6541 0.600609 38.3861 1.51977 29.9633 5.0332C21.5403 8.54669 14.3399 14.4979 9.27283 22.1348C4.20578 29.7716 1.50045 38.7508 1.50037 47.9375V80.876C1.50041 88.3318 7.54455 94.376 15.0004 94.376H47.6029C56.7187 94.3759 65.631 91.654 73.2123 86.5527C80.7935 81.4514 86.704 74.1993 90.1947 65.7129C93.6854 57.2262 94.5984 47.8861 92.8187 38.876C91.039 29.8661 86.6469 21.5913 80.1986 15.0977C73.7504 8.604 65.5361 4.18262 56.5951 2.3916Z",
    viewWidth: 96,
    viewHeight: 96,
  },

  // yellow
  "yellow-half": {
    path: "M47.4438 49.6143C47.4438 62.3814 42.4402 74.622 33.5405 83.6436C26.9458 90.3285 18.6117 94.8401 9.6206 96.7285C5.36271 97.6226 1.50066 94.031 1.50048 89.2285L1.50049 10C1.50049 5.19737 5.36266 1.60504 9.62061 2.49902C18.6118 4.38744 26.9457 8.89989 33.5405 15.585C42.4402 24.6066 47.4438 36.8471 47.4438 49.6143Z",
    viewWidth: 49,
    viewHeight: 100,
  },
  "yellow-l": {
    path: "M12 1.5H84.5459C90.3449 1.5 95.0459 6.20101 95.0459 12V84.5459C95.0459 90.3449 90.3449 95.0459 84.5459 95.0459H60.2734C54.4745 95.0459 49.7734 90.3449 49.7734 84.5459V60.2734C49.7734 52.8177 43.7292 46.7736 36.2734 46.7734H12C6.2011 46.7734 1.50015 42.0723 1.5 36.2734V12C1.5 6.20101 6.20101 1.5 12 1.5Z",
    viewWidth: 97,
    viewHeight: 97,
  },
  "yellow-pill": {
    path: "M85.4462 46.0403L52.3035 95.7029C45.3638 106.102 31.3079 108.906 20.9091 101.966C10.5103 95.0264 7.70606 80.9705 14.6458 70.5717L47.7885 20.9091C54.7282 10.5103 68.7841 7.70618 79.183 14.6458C89.5818 21.5856 92.386 35.6415 85.4462 46.0403Z",
    viewWidth: 101,
    viewHeight: 117,
  },
  "yellow-rect": {
    path: "M12 1.5H84.5459C90.3449 1.5 95.0459 6.20101 95.0459 12V36.2734C95.0458 42.0723 90.3448 46.7734 84.5459 46.7734H12C6.2011 46.7734 1.50015 42.0723 1.5 36.2734V12C1.5 6.20101 6.20101 1.5 12 1.5Z",
    viewWidth: 97,
    viewHeight: 49,
  },
  "yellow-round": {
    path: "M56.5951 2.3916C47.6541 0.600609 38.3861 1.51977 29.9633 5.0332C21.5403 8.54669 14.3399 14.4979 9.27283 22.1348C4.20578 29.7716 1.50045 38.7508 1.50037 47.9375V80.876C1.50041 88.3318 7.54455 94.376 15.0004 94.376H47.6029C56.7187 94.3759 65.631 91.654 73.2123 86.5527C80.7935 81.4514 86.704 74.1993 90.1947 65.7129C93.6854 57.2262 94.5984 47.8861 92.8187 38.876C91.039 29.8661 86.6469 21.5913 80.1986 15.0977C73.7504 8.604 65.5361 4.18262 56.5951 2.3916Z",
    viewWidth: 96,
    viewHeight: 96,
  },
};

type DropBannerProps = {
  className?: string;
  children?: ReactNode;
};

type Size = { width: number; height: number };

type Walls = {
  ground?: Body;
  left?: Body;
  right?: Body;
  ceiling?: Body;
};

const WALL_THICKNESS = 80;

function verticesFromSvgMeta(pathData: string, sampleLength = 15): Vector[] {
  try {
    const svgNS = "http://www.w3.org/2000/svg";
    const pathEl = document.createElementNS(svgNS, "path");
    pathEl.setAttribute("d", pathData);

    const rawVerts = Svg.pathToVertices(pathEl, sampleLength) as Vector[];
    if (!rawVerts || rawVerts.length === 0) return [];

    let minX = Infinity,
      maxX = -Infinity,
      minY = Infinity,
      maxY = -Infinity;

    rawVerts.forEach((v) => {
      if (v.x < minX) minX = v.x;
      if (v.x > maxX) maxX = v.x;
      if (v.y < minY) minY = v.y;
      if (v.y > maxY) maxY = v.y;
    });

    const cx = (minX + maxX) / 2;
    const cy = (minY + maxY) / 2;

    return rawVerts.map((v) => ({
      x: v.x - cx,
      y: v.y - cy,
    }));
  } catch (e) {
    console.warn("SVG → vertices failed", e);
    return [];
  }
}

export default function DropBanner({ className, children }: DropBannerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const engineRef = useRef<Engine | null>(null);
  const renderRef = useRef<Render | null>(null);
  const runnerRef = useRef<Runner | null>(null);
  const sizeRef = useRef<Size>({ width: 0, height: 0 });
  const wallsRef = useRef<Walls>({});

  const createOrUpdateWalls = useCallback((w: number, h: number) => {
    const engine = engineRef.current;
    if (!engine) return;

    const world = engine.world;

    // remove previous walls
    const { ground, left, right, ceiling } = wallsRef.current;
    const oldWalls = [ground, left, right, ceiling].filter(Boolean) as Body[];
    if (oldWalls.length) {
      World.remove(world, oldWalls);
    }

    const thickness = WALL_THICKNESS;

    const newGround = Bodies.rectangle(
      w / 2,
      h + thickness / 2,
      w + thickness,
      thickness,
      { isStatic: true, render: { visible: false } }
    );
    const newLeft = Bodies.rectangle(
      -thickness / 2,
      h / 2,
      thickness,
      h + thickness,
      { isStatic: true, render: { visible: false } }
    );
    const newRight = Bodies.rectangle(
      w + thickness / 2,
      h / 2,
      thickness,
      h + thickness,
      { isStatic: true, render: { visible: false } }
    );
    const newCeiling = Bodies.rectangle(
      w / 2,
      -thickness / 2,
      w + thickness,
      thickness,
      { isStatic: true, render: { visible: false } }
    );

    World.add(world, [newGround, newLeft, newRight, newCeiling]);
    wallsRef.current = {
      ground: newGround,
      left: newLeft,
      right: newRight,
      ceiling: newCeiling,
    };
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    if (typeof window === "undefined") return;

    if (engineRef.current) return;

    const engine = Engine.create();
    engine.gravity.y = 1;
    engineRef.current = engine;

    const rect = containerRef.current.getBoundingClientRect();
    sizeRef.current = { width: rect.width, height: rect.height };

    const render = Render.create({
      element: containerRef.current,
      engine,
      options: {
        width: rect.width,
        height: rect.height,
        wireframes: false,
        background: "transparent",
        pixelRatio: window.devicePixelRatio || 1,
      },
    });
    renderRef.current = render;

    // initial walls
    createOrUpdateWalls(rect.width, rect.height);

    const runner = Runner.create();
    runnerRef.current = runner;

    Runner.run(runner, engine);
    Render.run(render);

    Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: rect.width, y: rect.height },
    });

    const handleResize = () => {
      if (!containerRef.current || !renderRef.current) return;
      const r = containerRef.current.getBoundingClientRect();
      sizeRef.current = { width: r.width, height: r.height };

      const dpr = window.devicePixelRatio || 1;
      const render = renderRef.current;

      render.canvas.width = r.width * dpr;
      render.canvas.height = r.height * dpr;
      render.options.width = r.width;
      render.options.height = r.height;

      Render.lookAt(render, {
        min: { x: 0, y: 0 },
        max: { x: r.width, y: r.height },
      });

      createOrUpdateWalls(r.width, r.height);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (renderRef.current) {
        Render.stop(renderRef.current);
        renderRef.current.canvas.remove();
        renderRef.current.textures = {};
      }
      if (runnerRef.current && engineRef.current) {
        Runner.stop(runnerRef.current);
      }
      if (engineRef.current) {
        World.clear(engineRef.current.world, false);
        Engine.clear(engineRef.current);
      }
      engineRef.current = null;
      renderRef.current = null;
      runnerRef.current = null;
      wallsRef.current = {};
    };
  }, [createOrUpdateWalls]);

  const spawnShape = useCallback(() => {
    const engine = engineRef.current;
    if (!engine) return;
    if (!SHAPES.length) return;

    const { width, height } = sizeRef.current;
    if (!width || !height) return;

    const cfg = SHAPES[Math.floor(Math.random() * SHAPES.length)];
    const world = engine.world;

    const marginX = Math.max(cfg.width, 60);
    const x = marginX + Math.random() * Math.max(10, width - marginX * 2);
    const y = 40 + Math.random() * 60;

    const baseOptions = {
      restitution: 0.6,
      friction: 0.2,
      frictionAir: 0.02,
      render: {
        sprite: {
          texture: cfg.texture,
          xScale: 1,
          yScale: 1,
        },
      },
    };

    let body: Body;

    if (cfg.type === "path") {
      const meta = SHAPE_SVG_META[cfg.key];
      if (meta) {
        const verts = verticesFromSvgMeta(meta.path, 15);
        if (verts.length > 0) {
          body = Bodies.fromVertices(
            x,
            y,
            [verts],
            baseOptions,
            true
          ) as Body;
        } else {
          body = Bodies.rectangle(x, y, cfg.width, cfg.height, baseOptions);
        }
      } else {
        body = Bodies.rectangle(x, y, cfg.width, cfg.height, baseOptions);
      }
    } else if (cfg.type === "round") {
      const radius = Math.max(cfg.width, cfg.height) / 2;
      body = Bodies.circle(x, y, radius, baseOptions);
    } else if (cfg.type === "pill") {
      body = Bodies.rectangle(x, y, cfg.width, cfg.height, {
        ...baseOptions,
        chamfer: { radius: cfg.height / 2 },
      });
    } else {
      body = Bodies.rectangle(x, y, cfg.width, cfg.height, baseOptions);
    }

    Body.setVelocity(body, {
      x: (Math.random() - 0.5) * 1.5,
      y: 1.5 + Math.random() * 1.5,
    });
    Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.1);

    World.add(world, body);
  }, []);

  const handleClickBanner = () => {
    spawnShape();
  };

  return (
    <section
      className={`relative flex bg-[#F4F4F4] flex-col w-full h-[100svh] items-start justify-center px-8 md:px-32 lg:px-42 ${className ?? ""}`}
      onClick={handleClickBanner}
    >
      <div
        ref={containerRef}
        className="pointer-events-none absolute inset-0 z-10"
      />
      <div className="relative z-20">
        {children}
      </div>
    </section>
  );
}
