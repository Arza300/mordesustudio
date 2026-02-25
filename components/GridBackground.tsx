"use client";

import { useEffect, useRef } from "react";

const R = 38; // نصف قطر السداسي — المسافة بين نقطتين (أوسع من 28)
const REPEL_RADIUS = 320;
const JITTER = 14; // إزاحة عشوائية خفيفة لكل نقطة عشان الأشكال تبان مختلفة
const REPEL_STRENGTH = 1.4;
const SMOOTHING = 0.22;   // أسرع تتبع للماوس
const WAVE_AMOUNT = 2.2;
const WAVE_SPEED = 0.0008;
// حركة تلقائية تدوم 4 ثوانٍ ثم تتكرر فوراً في اتجاه مختلف
const AUTO_MOVE_DURATION = 4 * 60; // 4 ثوانٍ
const MARGIN = 80;

// إحداثيات شبكة سداسية (قمة مسطحة) — شكل خلية نحل مش مربعات
function hexToPixel(row: number, col: number): { x: number; y: number } {
  const x = R * 1.5 * col;
  const y = R * Math.sqrt(3) * (row + 0.5 * (col % 2));
  return { x, y };
}

type Point = {
  x: number;
  y: number;
  ox: number;
  oy: number;
  phase: number;
  row: number;
  col: number;
};

export default function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const targetRef = useRef({ x: -1000, y: -1000 });
  const pointsRef = useRef<Point[]>([]);
  const gridMapRef = useRef<Record<string, number>>({});
  const animationRef = useRef<number>(0);
  const timeRef = useRef(0);
  const phaseStartFrameRef = useRef(-1);
  const phaseStartPosRef = useRef({ x: 0, y: 0 });
  const phaseTargetPosRef = useRef({ x: 0, y: 0 });
  const autoPosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);

      const w = window.innerWidth;
      const h = window.innerHeight;
      const cols = Math.ceil(w / (R * 1.5)) + 3;
      const rows = Math.ceil(h / (R * Math.sqrt(3))) + 3;
      const points: Point[] = [];
      const gridMap: Record<string, number> = {};

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const { x, y } = hexToPixel(row, col);
          const jx = (Math.random() - 0.5) * JITTER;
          const jy = (Math.random() - 0.5) * JITTER;
          const px = x + jx;
          const py = y + jy;
          const phase = (row * cols + col) * 0.7;
          points.push({
            x: px,
            y: py,
            ox: px,
            oy: py,
            phase,
            row,
            col,
          });
          gridMap[`${row},${col}`] = points.length - 1;
        }
      }

      pointsRef.current = points;
      gridMapRef.current = gridMap;
    };

    const handleMouse = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleTouch = (e: TouchEvent) => {
      if (e.touches.length) {
        targetRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const getNeighborIndices = (row: number, col: number): number[] => {
      const gridMap = gridMapRef.current;
      const key = (r: number, c: number) => gridMap[`${r},${c}`];
      // الجيران الستة في الشبكة السداسية (قمة مسطحة)
      const neighbors = [
        [row, col - 1],
        [row, col + 1],
        [row - 1, col],
        [row + 1, col],
        [row - 1, col + 1],
        [row + 1, col - 1],
      ];
      return neighbors
        .map(([r, c]) => (key(r, c) !== undefined ? key(r, c) : -1))
        .filter((i) => i >= 0);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouse);
    window.addEventListener("touchmove", handleTouch, { passive: true });

    const animate = () => {
      timeRef.current += 1;
      const t = timeRef.current * WAVE_SPEED;
      const w = window.innerWidth;
      const h = window.innerHeight;

      mouseRef.current.x += (targetRef.current.x - mouseRef.current.x) * SMOOTHING;
      mouseRef.current.y += (targetRef.current.y - mouseRef.current.y) * SMOOTHING;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      ctx.clearRect(0, 0, w, h);

      const points = pointsRef.current;
      const frame = timeRef.current;

      if (phaseStartFrameRef.current < 0) {
        phaseStartFrameRef.current = frame;
        phaseStartPosRef.current = { x: w / 2, y: h / 2 };
        phaseTargetPosRef.current = {
          x: MARGIN + Math.random() * (w - 2 * MARGIN),
          y: MARGIN + Math.random() * (h - 2 * MARGIN),
        };
      }
      let progress = (frame - phaseStartFrameRef.current) / AUTO_MOVE_DURATION;
      if (progress >= 1) {
        phaseStartFrameRef.current = frame;
        phaseStartPosRef.current = { ...phaseTargetPosRef.current };
        phaseTargetPosRef.current = {
          x: MARGIN + Math.random() * (w - 2 * MARGIN),
          y: MARGIN + Math.random() * (h - 2 * MARGIN),
        };
        progress = 0;
      }
      const ease = progress * progress * (3 - 2 * progress);
      const ax =
        phaseStartPosRef.current.x +
        (phaseTargetPosRef.current.x - phaseStartPosRef.current.x) * ease;
      const ay =
        phaseStartPosRef.current.y +
        (phaseTargetPosRef.current.y - phaseStartPosRef.current.y) * ease;
      autoPosRef.current = { x: ax, y: ay };

      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        const baseX = p.ox;
        const baseY = p.oy;

        const waveX =
          Math.sin(t + p.phase) * WAVE_AMOUNT +
          Math.cos(t * 0.7 + p.phase * 0.5) * WAVE_AMOUNT * 0.5;
        const waveY =
          Math.cos(t * 1.1 + p.phase * 0.8) * WAVE_AMOUNT +
          Math.sin(t * 0.6 + p.phase) * WAVE_AMOUNT * 0.5;
        let targetX = baseX + waveX;
        let targetY = baseY + waveY;

        const dx = p.x - mx;
        const dy = p.y - my;
        let dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < REPEL_RADIUS && dist > 0) {
          const force = (1 - dist / REPEL_RADIUS) * REPEL_STRENGTH;
          const nx = dx / dist;
          const ny = dy / dist;
          targetX += nx * (REPEL_RADIUS - dist) * force * 0.35;
          targetY += ny * (REPEL_RADIUS - dist) * force * 0.35;
        }

        const dax = p.x - ax;
        const day = p.y - ay;
        dist = Math.sqrt(dax * dax + day * day);
        if (dist < REPEL_RADIUS && dist > 0) {
          const force = (1 - dist / REPEL_RADIUS) * REPEL_STRENGTH;
          const nax = dax / dist;
          const nay = day / dist;
          targetX += nax * (REPEL_RADIUS - dist) * force * 0.35;
          targetY += nay * (REPEL_RADIUS - dist) * force * 0.35;
        }

        p.x += (targetX - p.x) * 0.09;
        p.y += (targetY - p.y) * 0.09;
      }

      ctx.strokeStyle = "rgba(148, 163, 184, 0.24)";
      ctx.lineWidth = 0.7;

      const drawn = new Set<string>();
      const edgeKey = (a: number, b: number) => (a < b ? `${a},${b}` : `${b},${a}`);

      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        if (p.x < -40 || p.y < -40 || p.x > w + 40 || p.y > h + 40) continue;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 0.85, 0, Math.PI * 2);
        ctx.stroke();

        const neighbors = getNeighborIndices(p.row, p.col);
        for (const ni of neighbors) {
          if (drawn.has(edgeKey(i, ni))) continue;
          drawn.add(edgeKey(i, ni));
          const q = points[ni];
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.stroke();
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("touchmove", handleTouch);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ width: "100%", height: "100%" }}
      aria-hidden
    />
  );
}
