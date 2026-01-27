"use client";

import { assetUrl } from "../../utils";

import {
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
  Composite,
  Events,
  Vector,
  type IChamferableBodyDefinition,
} from "matter-js";

type ShapeType = "rect" | "pill" | "round" | "half" | "l";

type ShapeConfig = {
  key: string;
  texture: string;
  type: ShapeType;
  width: number;
  height: number;
};

const SHAPES: ShapeConfig[] = [
  // blue
  { key: "blue-l", texture: assetUrl("/brand-icons/blue-l.svg"), type: "l", width: 115, height: 125 },
  { key: "blue-pill", texture: assetUrl("/brand-icons/blue-pill.svg"), type: "pill", width: 50, height: 140 },
  { key: "blue-rect", texture: assetUrl("/brand-icons/blue-rect.svg"), type: "rect", width: 110, height: 70 },
  { key: "blue-half", texture: assetUrl("/brand-icons/blue-half.svg"), type: "half", width: 50, height: 100 },
  { key: "blue-round", texture: assetUrl("/brand-icons/blue-round.svg"), type: "round", width: 80, height: 80 },

  // red
  { key: "red-l", texture: assetUrl("/brand-icons/red-l.svg"), type: "l", width: 115, height: 125 },
  { key: "red-pill", texture: assetUrl("/brand-icons/red-pill.svg"), type: "pill", width: 50, height: 140 },
  { key: "red-rect", texture: assetUrl("/brand-icons/red-rect.svg"), type: "rect", width: 110, height: 70 },
  { key: "red-half", texture: assetUrl("/brand-icons/red-half.svg"), type: "half", width: 50, height: 100 },
  { key: "red-round", texture: assetUrl("/brand-icons/red-round.svg"), type: "round", width: 80, height: 80 },

  // yellow
  { key: "yellow-l", texture: assetUrl("/brand-icons/yellow-l.svg"), type: "l", width: 115, height: 125 },
  { key: "yellow-pill", texture: assetUrl("/brand-icons/yellow-pill.svg"), type: "pill", width: 50, height: 140 },
  { key: "yellow-rect", texture: assetUrl("/brand-icons/yellow-rect.svg"), type: "rect", width: 110, height: 70 },
  { key: "yellow-half", texture: assetUrl("/brand-icons/yellow-half.svg"), type: "half", width: 50, height: 100 },
  { key: "yellow-round", texture: assetUrl("/brand-icons/yellow-round.svg"), type: "round", width: 80, height: 80 },
];

type DropBannerProps = {
  className?: string;
  children?: ReactNode;
};

// for window size
type Size = { width: number; height: number };

type Walls = {
  ground?: Body;
  left?: Body;
  right?: Body;
  ceiling?: Body;
};

const WALL_THICKNESS = 80;
//toggle for seeing physics bosy outlines - turn false for deployment
const DEBUG_OUTLINES = false;

export default function DropBanner({ className, children }: DropBannerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const engineRef = useRef<Engine | null>(null);
  const renderRef = useRef<Render | null>(null);
  const runnerRef = useRef<Runner | null>(null);
  const sizeRef = useRef<Size>({ width: 0, height: 0 });
  const wallsRef = useRef<Walls>({});

  // create static boundaries
  const createOrUpdateWalls = useCallback((w: number, h: number) => {
    const engine = engineRef.current;
    if (!engine) return;

    const world = engine.world;

    const { ground, left, right, ceiling } = wallsRef.current;
    const oldWalls = [ground, left, right, ceiling].filter(Boolean) as Body[];
    if (oldWalls.length) {
      World.remove(world, oldWalls);
    }

    const t = WALL_THICKNESS;

    const newGround = Bodies.rectangle(
      w / 2,
      h + t / 2,
      w + t,
      t,
      { isStatic: true, render: { visible: false } }
    );
    const newLeft = Bodies.rectangle(
      -t / 2,
      h / 2,
      t,
      h + t,
      { isStatic: true, render: { visible: false } }
    );
    const newRight = Bodies.rectangle(
      w + t / 2,
      h / 2,
      t,
      h + t,
      { isStatic: true, render: { visible: false } }
    );
    const newCeiling = Bodies.rectangle(
      w / 2,
      -t / 2,
      w + t,
      t,
      { isStatic: true, render: { visible: false } }
    );

    World.add(world, [newGround, newLeft, newRight, newCeiling]);
    wallsRef.current = { ground: newGround, left: newLeft, right: newRight, ceiling: newCeiling };
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

    const dpr = window.devicePixelRatio || 1;

    const render = Render.create({
      element: containerRef.current,
      engine,
      options: {
        width: rect.width,
        height: rect.height,
        wireframes: false,
        background: "transparent",
        pixelRatio: dpr,
      },
    });
    renderRef.current = render;

    render.bounds.min.x = 0;
    render.bounds.min.y = 0;
    render.bounds.max.x = rect.width;
    render.bounds.max.y = rect.height;

    render.canvas.width = rect.width * dpr;
    render.canvas.height = rect.height * dpr;
    render.canvas.style.width = `${rect.width}px`;
    render.canvas.style.height = `${rect.height}px`;

    createOrUpdateWalls(rect.width, rect.height);

    const runner = Runner.create();
    runnerRef.current = runner;

    Runner.run(runner, engine);
    Render.run(render);

    // debug physics outlines
    if (DEBUG_OUTLINES) {
      Events.on(render, "afterRender", () => {
        const localEngine = engineRef.current;
        if (!localEngine) return;

        const ctx = render.context;
        const bodies = Composite.allBodies(localEngine.world);

        ctx.save();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "rgba(0,0,0,0.8)";

        for (const body of bodies) {
          if (body.isStatic) continue;

          const parts =
            body.parts && body.parts.length > 1 ? body.parts.slice(1) : [body];

          for (const part of parts) {
            const verts = part.vertices;
            if (!verts || verts.length === 0) continue;

            ctx.beginPath();
            ctx.moveTo(verts[0].x, verts[0].y);
            for (let i = 1; i < verts.length; i++) {
              ctx.lineTo(verts[i].x, verts[i].y);
            }
            ctx.closePath();
            ctx.stroke();
          }
        }

        ctx.restore();
      });
    }

    const handleResize = () => {
      if (!containerRef.current || !renderRef.current) return;
      const r = containerRef.current.getBoundingClientRect();
      const dprNow = window.devicePixelRatio || 1;
      const renderCurrent = renderRef.current;

      sizeRef.current = { width: r.width, height: r.height };

      renderCurrent.options.width = r.width;
      renderCurrent.options.height = r.height;

      renderCurrent.bounds.min.x = 0;
      renderCurrent.bounds.min.y = 0;
      renderCurrent.bounds.max.x = r.width;
      renderCurrent.bounds.max.y = r.height;

      renderCurrent.canvas.width = r.width * dprNow;
      renderCurrent.canvas.height = r.height * dprNow;
      renderCurrent.canvas.style.width = `${r.width}px`;
      renderCurrent.canvas.style.height = `${r.height}px`;

      Render.setPixelRatio(renderCurrent, dprNow);

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

  function createHalfCircleBody(
  x: number,
  y: number,
  cfg: ShapeConfig,
  options: IChamferableBodyDefinition
): Body {
  const w = cfg.width;
  const h = cfg.height;
  const r = h / 2;
  const steps = 24;

  const verts: Vector[] = [];
  verts.push({ x: -w / 2, y:  h / 2 });
  verts.push({ x: -w / 2, y: -h / 2 });

  const cx = -w / 2; // move circle center right from flat side
  const cy = 0;

  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const angle = -Math.PI / 2 + t * Math.PI;
    verts.push({
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle),
    });
  }

  const body = Bodies.fromVertices(
    x,
    y,
    [verts],
    options,
    true
  ) as Body;

  return body;
  }



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

    const baseOptions: IChamferableBodyDefinition = {
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

    if (cfg.type === "half") {
      body = createHalfCircleBody(x, y, cfg, baseOptions);
    } else if (cfg.type === "l") {
      body = Bodies.rectangle(x, y, cfg.width / 1.2, cfg.height / 1.4, baseOptions);
    } else if (cfg.type === "round") {
      const radius = Math.max(cfg.width, cfg.height) / 1.7;
      body = Bodies.circle(x, y, radius, baseOptions);
    } else if (cfg.type === "pill") {
      body = Bodies.rectangle(x, y, cfg.width, cfg.height / 1.3, {
        ...baseOptions,
        chamfer: { radius: cfg.width / 2 },
      });
    } else {
      body = Bodies.rectangle(x, y, cfg.width / 1.2, cfg.height / 1.4, baseOptions);
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
      <div className="relative z-20 pointer-events-none select-none">
        {children}
      </div>
    </section>
  );
}
