"use client";

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
} from "matter-js";

type CommunityBannerProps = {
  className?: string;
  children?: ReactNode;
  images: string[];
};

type Size = { width: number; height: number };

type Walls = {
  ground?: Body;
  left?: Body;
  right?: Body;
  ceiling?: Body;
};

type ImageMeta = {
  width: number;
  height: number;
  ratio: number; // width / height
};

const WALL_THICKNESS = 80;

export default function CommunityBanner({
  className,
  children,
  images,
}: CommunityBannerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const engineRef = useRef<Engine | null>(null);
  const renderRef = useRef<Render | null>(null);
  const runnerRef = useRef<Runner | null>(null);
  const sizeRef = useRef<Size>({ width: 0, height: 0 });
  const wallsRef = useRef<Walls>({});
  const imageMetaRef = useRef<Record<string, ImageMeta>>({}); // 🔹 new

  const draggingRef = useRef<{
    body: Body;
    offset: { x: number; y: number };
  } | null>(null);

  const createOrUpdateWalls = useCallback((w: number, h: number) => {
    const engine = engineRef.current;
    if (!engine) return;

    const world = engine.world;

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
    if (typeof window === "undefined") return;
    if (!images || images.length === 0) return;

    let cancelled = false;
    const meta: Record<string, ImageMeta> = {};

    const promises = images.map(
      (src) =>
        new Promise<void>((resolve) => {
          const img = new window.Image();
          img.onload = () => {
            if (cancelled) return;
            const w = img.naturalWidth || 1;
            const h = img.naturalHeight || 1;
            meta[src] = { width: w, height: h, ratio: w / h };
            resolve();
          };
          img.onerror = () => resolve(); // skip on error
          img.src = src;
        })
    );

    Promise.all(promises).then(() => {
      if (cancelled) return;
      imageMetaRef.current = meta;
      // once sizes known, re-spawn photos if engine exists
      if (engineRef.current) {
        const world = engineRef.current.world;
        const allBodies = Composite.allBodies(world);
        const wallSet = new Set<Body>();
        Object.values(wallsRef.current).forEach((b) => b && wallSet.add(b));
        const toRemove = allBodies.filter((b) => !wallSet.has(b));
        if (toRemove.length) World.remove(world, toRemove);
        spawnPhotos(); // will use new meta
      }
    });

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images]);

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

    const handleResize = () => {
      if (!containerRef.current || !renderRef.current) return;
      const r = containerRef.current.getBoundingClientRect();
      const dprNow = window.devicePixelRatio || 1;
      const render = renderRef.current;

      sizeRef.current = { width: r.width, height: r.height };

      render.options.width = r.width;
      render.options.height = r.height;

      render.bounds.min.x = 0;
      render.bounds.min.y = 0;
      render.bounds.max.x = r.width;
      render.bounds.max.y = r.height;

      render.canvas.width = r.width * dprNow;
      render.canvas.height = r.height * dprNow;
      render.canvas.style.width = `${r.width}px`;
      render.canvas.style.height = `${r.height}px`;

      Render.setPixelRatio(render, dprNow);

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
      draggingRef.current = null;
    };
  }, [createOrUpdateWalls]);

  const spawnPhotos = useCallback(() => {
    const engine = engineRef.current;
    if (!engine) return;
    if (!images || images.length === 0) return;

    const { width, height } = sizeRef.current;
    if (!width || !height) return;

    const world = engine.world;

    const bodies: Body[] = [];

    const baseHeight = Math.max(80, Math.min(150, height / 6));
    const maxWidth = width / 3;

    images.forEach((texture, idx) => {
      const meta = imageMetaRef.current[texture];

      let bodyWidth = baseHeight;
      let bodyHeight = baseHeight;
      let xScale = 1;
      let yScale = 1;

      if (meta) {
        const ratio = meta.ratio || 1;
        bodyHeight = baseHeight;
        bodyWidth = baseHeight * ratio;

        if (bodyWidth > maxWidth) {
          const scaleDown = maxWidth / bodyWidth;
          bodyWidth *= scaleDown;
          bodyHeight *= scaleDown;
        }

        const scale = bodyHeight / meta.height;
        xScale = scale;
        yScale = scale;
      }

      const cols = Math.ceil(Math.sqrt(images.length));
      const spacingX = width / (cols + 1);
      const col = idx % cols;
      const spawnX = spacingX * (col + 1);
      const spawnY = 40 + (idx % 3) * (baseHeight * 0.4);

      const body = Bodies.rectangle(spawnX, spawnY, bodyWidth, bodyHeight, {
        restitution: 0.6,
        friction: 0.3,
        frictionAir: 0.03,
        render: {
          sprite: {
            texture,
            xScale,
            yScale,
          },
        },
      });

      Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.1);
      bodies.push(body);
    });

    World.add(world, bodies);
  }, [images]);

  useEffect(() => {
    if (!images || images.length === 0) return;
    if (!engineRef.current) return;

    const world = engineRef.current.world;
    const allBodies = Composite.allBodies(world);
    const wallSet = new Set<Body>();
    Object.values(wallsRef.current).forEach((b) => b && wallSet.add(b));

    const toRemove = allBodies.filter((b) => !wallSet.has(b));
    if (toRemove.length) World.remove(world, toRemove);

    spawnPhotos();
  }, [images, spawnPhotos]);


  // phone shake + tap-shake same as before...

  const handleTapShake = () => {
    const engine = engineRef.current;
    if (!engine) return;
    const world = engine.world;
    const bodies = Composite.allBodies(world);
    const wallSet = new Set<Body>();
    Object.values(wallsRef.current).forEach((b) => b && wallSet.add(b));

    bodies.forEach((b) => {
      if (wallSet.has(b)) return;
      Body.applyForce(b, b.position, {
        x: (Math.random() - 0.5) * 0.1,
        y: -0.02 - Math.random() * 1,
      });
    });
  };

  return (
    <section
      className={`relative flex bg-[#F4F4F4] flex-col w-full h-[100svh] items-start justify-center px-8 md:px-32 lg:px-42 ${
        className ?? ""
      }`}
      onClick={handleTapShake}
    >
      <div
        ref={containerRef}
        className="absolute inset-0 z-10"
      />
      <div className="relative z-20 pointer-events-none select-none">
        {children}
      </div>
    </section>
  );
}
