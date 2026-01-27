'use client';

import { assetUrl } from "../../utils";

import { useRef, useEffect, useState, useCallback } from "react";

type DrawBannerProps = { className?: string; id?: string; children?: React.ReactNode };
type P = { x: number; y: number; t: number };

export default function DrawBanner({ className, children }: DrawBannerProps) {
    // (1) setup HiDPI canvas, (2) read pointer from window, (3) stabilize target, (4) stamp radial gradient with head/tail fade
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const rafRef = useRef<number | null>(null);
    const [initialized, setInitialized] = useState(false);
    const rawRef = useRef<P | null>(null);
    const smoothRef = useRef<P | null>(null);
    const pathRef = useRef<P[]>([]);

    // knobs
    const BRUSH_PX = 24;
    const HARDNESS = 0.1;
    const STABILIZE = 0.1;
    const STEP_DIST = 0.2;
    const MAX_TRAIL_PX = 200;
    const FADE_PX = 0;
    const BASE_ALPHA = 1.0;

    useEffect(() => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext("2d");
        if (!canvas || !ctx) return;

        const resize = () => {
            const dpr = Math.max(1, window.devicePixelRatio || 1);
            const { width: cssW, height: cssH } = canvas.getBoundingClientRect();
            canvas.width = Math.round(cssW * dpr);
            canvas.height = Math.round(cssH * dpr);
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            ctx.globalCompositeOperation = "source-over";
            ctx.fillStyle = "#F4F4F4";
            ctx.fillRect(0, 0, cssW, cssH);
            ctx.globalCompositeOperation = "destination-out";
        };

        resize();
        const ro = new ResizeObserver(resize);
        ro.observe(canvas);
        requestAnimationFrame(() => setInitialized(true));
        return () => ro.disconnect();
    }, []);

    const now = () => performance.now();
    const dist = (a: P, b: P) => Math.hypot(b.x - a.x, b.y - a.y);

    const getXYFromWindow = useCallback((canvas: HTMLCanvasElement, e: PointerEvent): P | null => {
        const r = canvas.getBoundingClientRect();
        const x = e.clientX - r.left, y = e.clientY - r.top;
        if (x < 0 || y < 0 || x > r.width || y > r.height) return null;
        return { x, y, t: now() };
    }, []);

    // NEW: touch coordinates helper
    const getXYFromTouch = useCallback((canvas: HTMLCanvasElement, e: TouchEvent): P | null => {
        const touch = e.touches[0] ?? e.changedTouches[0];
        if (!touch) return null;
        const r = canvas.getBoundingClientRect();
        const x = touch.clientX - r.left;
        const y = touch.clientY - r.top;
        if (x < 0 || y < 0 || x > r.width || y > r.height) return null;
        return { x, y, t: now() };
    }, []);

    const trimTrail = useCallback((pts: P[], maxLen: number) => {
        if (pts.length < 2) return pts;
        let total = 0;
        for (let i = pts.length - 2; i >= 0; i--) {
            total += dist(pts[i], pts[i + 1]);
            if (total >= maxLen) return pts.slice(i + 1);
        }
        return pts;
    }, []);

    const stamp = useCallback((ctx: CanvasRenderingContext2D, x: number, y: number, radius: number, alpha: number) => {
        const g = ctx.createRadialGradient(x, y, radius * HARDNESS, x, y, radius);
        g.addColorStop(0, `rgba(0,0,0,${alpha})`);
        g.addColorStop(1, `rgba(0,0,0,0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
    }, [HARDNESS]);

    const paint = useCallback(() => {
        rafRef.current = null;
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext("2d")!;
        const raw = rawRef.current;
        if (!raw) return;

        const prev = smoothRef.current ?? raw;
        const k = 1 - STABILIZE;
        const s: P = { x: prev.x + (raw.x - prev.x) * k, y: prev.y + (raw.y - prev.y) * k, t: raw.t };
        smoothRef.current = s;

        pathRef.current.push(s);
        pathRef.current = trimTrail(pathRef.current, MAX_TRAIL_PX);

        const pts = pathRef.current;
        if (pts.length < 2) return;

        const L: number[] = [0];
        for (let i = 1; i < pts.length; i++) L[i] = L[i - 1] + dist(pts[i - 1], pts[i]);
        const totalLen = L[L.length - 1] || 0.0001;

        const radius = BRUSH_PX * 0.5;
        const stepPx = Math.max(1, radius * STEP_DIST);

        for (let i = 0; i < pts.length - 1; i++) {
            const a = pts[i], b = pts[i + 1];
            const segLen = dist(a, b);
            const steps = Math.max(1, Math.floor(segLen / stepPx));
            for (let sIdx = 1; sIdx <= steps; sIdx++) {
                const t = sIdx / steps;
                const x = a.x + (b.x - a.x) * t;
                const y = a.y + (b.y - a.y) * t;
                const along = L[i] + segLen * t;
                const fadeTail = Math.min(1, along / FADE_PX);
                const fadeHead = Math.min(1, (totalLen - along) / FADE_PX);
                const alpha = BASE_ALPHA * Math.min(fadeTail, fadeHead);
                if (alpha > 0) stamp(ctx, x, y, radius, alpha);
            }
        }
    }, [STABILIZE, MAX_TRAIL_PX, FADE_PX, BASE_ALPHA, STEP_DIST, BRUSH_PX, stamp, trimTrail]);

    //clear on click
    const clearCanvas = useCallback(() => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext("2d");
        if (!canvas || !ctx) return;
        const { width: cssW, height: cssH } = canvas.getBoundingClientRect();
        ctx.globalCompositeOperation = "source-over";
        ctx.fillStyle = "#F4F4F4";
        ctx.fillRect(0, 0, cssW, cssH);
        ctx.globalCompositeOperation = "destination-out";
    }, []);

    const schedule = useCallback(() => {
        if (rafRef.current == null) rafRef.current = requestAnimationFrame(paint);
    }, [paint]);

    useEffect(() => {
        const canvas = canvasRef.current!;
        if (!canvas) return;

        // --- ORIGINAL POINTER HANDLERS (unchanged) ---
        const down = (e: PointerEvent) => {
            const p = getXYFromWindow(canvas, e);
            if (!p) return;
            clearCanvas();
            rawRef.current = p;
            smoothRef.current = p;
            pathRef.current = [p];
            schedule();
        };

        const move = (e: PointerEvent) => {
            const p = getXYFromWindow(canvas, e);
            if (!p) return;
            rawRef.current = p;
            schedule();
        };

        const up = () => {
            rawRef.current = null;
            smoothRef.current = null;
            pathRef.current = [];
        };

        window.addEventListener("pointerdown", down, { passive: true });
        window.addEventListener("pointermove", move, { passive: true });
        window.addEventListener("pointerup", up, { passive: true });
        window.addEventListener("pointercancel", up, { passive: true });

        const touchStart = (e: TouchEvent) => {
            const p = getXYFromTouch(canvas, e);
            if (!p) return;
            e.preventDefault();
            clearCanvas();
            rawRef.current = p;
            smoothRef.current = p;
            pathRef.current = [p];
            schedule();
        };

        const touchMove = (e: TouchEvent) => {
            if (!rawRef.current) return;
            const p = getXYFromTouch(canvas, e);
            if (!p) return;
            e.preventDefault();
            rawRef.current = p;
            schedule();
        };

        const touchEnd = () => {
            if (!rawRef.current) return;
            rawRef.current = null;
            smoothRef.current = null;
            pathRef.current = [];
        };

        canvas.addEventListener("touchstart", touchStart, { passive: false });
        canvas.addEventListener("touchmove", touchMove, { passive: false });
        canvas.addEventListener("touchend", touchEnd, { passive: true });
        canvas.addEventListener("touchcancel", touchEnd, { passive: true });

        return () => {
            window.removeEventListener("pointerdown", down);
            window.removeEventListener("pointermove", move);
            window.removeEventListener("pointerup", up);
            window.removeEventListener("pointercancel", up);
            canvas.removeEventListener("touchstart", touchStart);
            canvas.removeEventListener("touchmove", touchMove);
            canvas.removeEventListener("touchend", touchEnd);
            canvas.removeEventListener("touchcancel", touchEnd);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [getXYFromWindow, getXYFromTouch, schedule, stamp, paint, clearCanvas]);

    return (
        <section className={`relative flex flex-col items-start justify-center w-full h-[100svh] px-8 md:px-32 lg:px-42 ${className ?? ""}`}>
            {initialized && (
                <img
                    src={assetUrl("/project-images/moving-gradient.svg")}
                    alt="Moving Gradient"
                    width={144}
                    height={42}
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />
            )}
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-10 pointer-events-none" />
            <div className="relative z-20">{children}</div>
        </section>
    );
}
