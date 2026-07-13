"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  r: number;
  a: number;
  twinkle: number;
};

type BurstParticle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  warm: boolean;
};

type StarBurst = {
  x: number;
  y: number;
  age: number;
  duration: number;
  particles: BurstParticle[];
};

type ShootingStar = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function seeded(index: number, salt: number) {
  const value = Math.sin(index * 127.1 + salt * 311.7) * 43758.5453123;
  return value - Math.floor(value);
}

export function BlackHoleBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let animationFrame = 0;
    let stars: Star[] = [];
    let bursts: StarBurst[] = [];
    let shootingStars: ShootingStar[] = [];
    let reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let visible = document.visibilityState === "visible";
    let lastFrame = performance.now();
    let nextBurstAt = lastFrame + random(1800, 4200);
    let nextShootingStarAt = lastFrame + random(1200, 3200);

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const buildStars = (width: number, height: number) => {
      const count = Math.floor((width * height) / 6200);
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: random(0.35, 1.9),
        a: random(0.12, 0.95),
        twinkle: random(0.45, 2.8),
      }));
    };

    const resize = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      const cssWidth = Math.max(1, window.innerWidth);
      const cssHeight = Math.max(1, window.innerHeight);
      const width = Math.max(1, Math.round(cssWidth * pixelRatio));
      const height = Math.max(1, Math.round(cssHeight * pixelRatio));

      canvas.width = width;
      canvas.height = height;
      canvas.style.width = `${cssWidth}px`;
      canvas.style.height = `${cssHeight}px`;

      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      buildStars(cssWidth, cssHeight);
    };

    const spawnBurst = (width: number, height: number) => {
      const marginX = width * 0.1;
      const marginY = height * 0.1;
      let x = random(marginX, width - marginX);
      let y = random(marginY, height - marginY);

      // Keep the explosions away from the black-hole core so both effects stay readable.
      const coreX = width * 0.5;
      const coreY = height * 0.43;
      const safeRadius = Math.min(width, height) * 0.34;
      let attempts = 0;

      while (Math.hypot(x - coreX, y - coreY) < safeRadius && attempts < 12) {
        x = random(marginX, width - marginX);
        y = random(marginY, height - marginY);
        attempts += 1;
      }

      const particleCount = Math.floor(random(34, 58));
      const particles: BurstParticle[] = Array.from({ length: particleCount }, (_, i) => {
        const angle = (i / particleCount) * Math.PI * 2 + random(-0.12, 0.12);
        const speed = random(28, 120);
        const maxLife = random(0.75, 1.55);

        return {
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: maxLife,
          maxLife,
          size: random(0.8, 2.8),
          warm: Math.random() > 0.35,
        };
      });

      bursts.push({
        x,
        y,
        age: 0,
        duration: 1.7,
        particles,
      });

      if (bursts.length > 4) {
        bursts = bursts.slice(-4);
      }
    };

    const spawnShootingStar = (width: number, height: number) => {
      const fromLeft = Math.random() > 0.5;
      const x = fromLeft ? random(-80, width * 0.25) : random(width * 0.75, width + 80);
      const y = random(height * 0.05, height * 0.5);
      const speed = random(420, 760);
      const direction = fromLeft ? 1 : -1;
      const maxLife = random(0.55, 1.0);

      shootingStars.push({
        x,
        y,
        vx: direction * speed,
        vy: speed * random(0.18, 0.34),
        life: maxLife,
        maxLife,
      });

      if (shootingStars.length > 4) {
        shootingStars = shootingStars.slice(-4);
      }
    };

    const drawBurst = (burst: StarBurst, delta: number) => {
      burst.age += delta;
      const progress = clamp(burst.age / burst.duration, 0, 1);
      const flashAlpha = Math.pow(1 - progress, 3);
      const ringRadius = 12 + progress * 120;

      const flash = ctx.createRadialGradient(
        burst.x,
        burst.y,
        0,
        burst.x,
        burst.y,
        38 + progress * 90,
      );
      flash.addColorStop(0, `rgba(255,255,255,${0.9 * flashAlpha})`);
      flash.addColorStop(0.14, `rgba(110,225,255,${0.75 * flashAlpha})`);
      flash.addColorStop(0.42, `rgba(139,92,246,${0.34 * flashAlpha})`);
      flash.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = flash;
      ctx.beginPath();
      ctx.arc(burst.x, burst.y, 130, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = `rgba(145,225,255,${0.42 * (1 - progress)})`;
      ctx.lineWidth = Math.max(0.8, 2.3 * (1 - progress));
      ctx.beginPath();
      ctx.arc(burst.x, burst.y, ringRadius, 0, Math.PI * 2);
      ctx.stroke();

      for (const particle of burst.particles) {
        particle.life -= delta;
        if (particle.life <= 0) continue;

        particle.x += particle.vx * delta;
        particle.y += particle.vy * delta;
        particle.vx *= Math.pow(0.985, delta * 60);
        particle.vy *= Math.pow(0.985, delta * 60);

        const life = clamp(particle.life / particle.maxLife, 0, 1);
        ctx.globalAlpha = life;
        ctx.fillStyle = particle.warm ? "#ffd37a" : "#8deaff";
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * (0.45 + life), 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
    };

    const drawShootingStar = (star: ShootingStar, delta: number) => {
      star.life -= delta;
      star.x += star.vx * delta;
      star.y += star.vy * delta;

      const life = clamp(star.life / star.maxLife, 0, 1);
      const speed = Math.hypot(star.vx, star.vy) || 1;
      const nx = star.vx / speed;
      const ny = star.vy / speed;
      const tail = 95 + 110 * life;

      const gradient = ctx.createLinearGradient(
        star.x,
        star.y,
        star.x - nx * tail,
        star.y - ny * tail,
      );
      gradient.addColorStop(0, `rgba(255,255,255,${0.95 * life})`);
      gradient.addColorStop(0.16, `rgba(101,224,255,${0.68 * life})`);
      gradient.addColorStop(1, "rgba(80,92,255,0)");

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2.1;
      ctx.beginPath();
      ctx.moveTo(star.x, star.y);
      ctx.lineTo(star.x - nx * tail, star.y - ny * tail);
      ctx.stroke();

      ctx.fillStyle = `rgba(255,255,255,${life})`;
      ctx.beginPath();
      ctx.arc(star.x, star.y, 2.4, 0, Math.PI * 2);
      ctx.fill();
    };

    const draw = (timeMs: number) => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const delta = clamp((timeMs - lastFrame) / 1000, 0, 0.05);
      lastFrame = timeMs;
      const time = reducedMotion ? 0 : timeMs * 0.001;

      ctx.fillStyle = "#01030a";
      ctx.fillRect(0, 0, width, height);

      const bg = ctx.createRadialGradient(
        width * 0.62,
        height * 0.36,
        width * 0.04,
        width * 0.5,
        height * 0.5,
        Math.max(width, height) * 0.8,
      );
      bg.addColorStop(0, "rgb(8, 26, 55)");
      bg.addColorStop(0.35, "rgb(7, 16, 36)");
      bg.addColorStop(0.7, "rgb(3, 7, 18)");
      bg.addColorStop(1, "rgb(1, 3, 10)");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, width, height);

      const nebula1 = ctx.createRadialGradient(
        width * 0.72,
        height * 0.18,
        0,
        width * 0.72,
        height * 0.18,
        width * 0.42,
      );
      nebula1.addColorStop(0, "rgba(47, 215, 255, 0.18)");
      nebula1.addColorStop(0.35, "rgba(40, 114, 255, 0.10)");
      nebula1.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = nebula1;
      ctx.fillRect(0, 0, width, height);

      const nebula2 = ctx.createRadialGradient(
        width * 0.36,
        height * 0.65,
        0,
        width * 0.36,
        height * 0.65,
        width * 0.36,
      );
      nebula2.addColorStop(0, "rgba(150, 73, 255, 0.10)");
      nebula2.addColorStop(0.45, "rgba(58, 35, 160, 0.05)");
      nebula2.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = nebula2;
      ctx.fillRect(0, 0, width, height);

      for (const star of stars) {
        const alpha = star.a * (0.75 + Math.sin(time * star.twinkle + star.x * 0.02) * 0.25);
        ctx.globalAlpha = clamp(alpha, 0.05, 1);
        ctx.fillStyle = "#dff6ff";
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      if (!reducedMotion) {
        if (timeMs >= nextBurstAt) {
          spawnBurst(width, height);
          nextBurstAt = timeMs + random(2400, 5200);
        }

        if (timeMs >= nextShootingStarAt) {
          spawnShootingStar(width, height);
          nextShootingStarAt = timeMs + random(1500, 4200);
        }
      }

      for (const star of shootingStars) {
        drawShootingStar(star, delta);
      }
      shootingStars = shootingStars.filter((star) => star.life > 0);

      for (const burst of bursts) {
        drawBurst(burst, delta);
      }
      bursts = bursts.filter((burst) => burst.age < burst.duration);

      const cx = width * 0.5;
      const cy = height * 0.43;
      const baseRadius = Math.min(width, height) * 0.17;
      const diskOuter = baseRadius * 2.5;
      const diskInner = baseRadius * 1.03;

      const lensGlow = ctx.createRadialGradient(cx, cy, baseRadius * 0.8, cx, cy, diskOuter * 1.38);
      lensGlow.addColorStop(0, "rgba(255, 255, 255, 0)");
      lensGlow.addColorStop(0.28, "rgba(68, 203, 255, 0.06)");
      lensGlow.addColorStop(0.55, "rgba(136, 82, 255, 0.07)");
      lensGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = lensGlow;
      ctx.beginPath();
      ctx.arc(cx, cy, diskOuter * 1.38, 0, Math.PI * 2);
      ctx.fill();

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(-0.22);
      ctx.scale(1, 0.34);

      for (let i = 0; i < 30; i += 1) {
        const p = i / 29;
        const radius = diskInner + (diskOuter - diskInner) * p;
        const alpha = 0.115 * (1 - p) + 0.02;
        ctx.strokeStyle = `rgba(${Math.floor(255 - p * 25)}, ${Math.floor(120 + p * 90)}, ${Math.floor(36 + p * 210)}, ${alpha.toFixed(3)})`;
        ctx.lineWidth = Math.max(1, baseRadius * 0.024 * (1 - p * 0.58));
        ctx.beginPath();
        ctx.arc(0, 0, radius, Math.PI * 0.08, Math.PI * 0.92);
        ctx.stroke();
      }
      ctx.restore();

      // Dense orbital dust and sparks around the accretion disk.
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(-0.22);
      ctx.scale(1, 0.36);

      for (let i = 0; i < 300; i += 1) {
        const s1 = seeded(i, 1);
        const s2 = seeded(i, 2);
        const s3 = seeded(i, 3);
        const ringT = Math.pow(s1, 0.72);
        const radius = diskInner + ringT * (diskOuter - diskInner);
        const speed = 0.34 + (1 - ringT) * 1.5 + s2 * 0.34;
        const angle = s3 * Math.PI * 2 + time * speed;
        const turbulence = Math.sin(time * (1.2 + s2) + i * 0.83) * baseRadius * 0.035;
        const x = Math.cos(angle) * (radius + turbulence);
        const y = Math.sin(angle) * (radius - turbulence * 0.45);
        const pulse = 0.5 + 0.5 * Math.sin(time * (1.8 + s2 * 2.3) + i);
        const size = 0.45 + s2 * 1.8 + pulse * 0.7;
        const alpha = 0.22 + (1 - ringT) * 0.55 + pulse * 0.12;

        ctx.fillStyle = i % 7 === 0
          ? `rgba(112,232,255,${alpha.toFixed(3)})`
          : `rgba(255,${Math.floor(126 + s2 * 105)},${Math.floor(50 + s3 * 115)},${alpha.toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      // Infalling particles spiral toward the event horizon.
      for (let i = 0; i < 145; i += 1) {
        const s1 = seeded(i, 7);
        const s2 = seeded(i, 8);
        const cycle = (time * (0.08 + s2 * 0.12) + s1) % 1;
        const radius = baseRadius * (1.15 + (1 - cycle) * 2.45);
        const angle = s2 * Math.PI * 2 + time * (0.7 + s1) + cycle * 7.0;
        const flatten = 0.48 + s1 * 0.22;
        const x = cx + Math.cos(angle) * radius;
        const y = cy + Math.sin(angle) * radius * flatten;
        const alpha = Math.sin(Math.PI * cycle) * 0.62;

        ctx.fillStyle = i % 5 === 0
          ? `rgba(102,225,255,${alpha.toFixed(3)})`
          : `rgba(221,152,255,${(alpha * 0.82).toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(x, y, 0.6 + s2 * 1.6, 0, Math.PI * 2);
        ctx.fill();
      }

      const ring = ctx.createRadialGradient(cx, cy, baseRadius * 0.86, cx, cy, baseRadius * 1.2);
      ring.addColorStop(0, "rgba(255, 140, 38, 0)");
      ring.addColorStop(0.42, "rgba(255, 130, 34, 0.3)");
      ring.addColorStop(0.58, "rgba(84, 221, 255, 0.4)");
      ring.addColorStop(0.82, "rgba(192, 92, 255, 0.2)");
      ring.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = ring;
      ctx.beginPath();
      ctx.arc(cx, cy, baseRadius * 1.22, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.beginPath();
      ctx.arc(cx, cy, baseRadius, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = "rgba(135, 228, 255, 0.25)";
      ctx.lineWidth = Math.max(1.5, baseRadius * 0.055);
      ctx.beginPath();
      ctx.arc(cx, cy, baseRadius * 1.02, 0, Math.PI * 2);
      ctx.stroke();

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(-0.22);
      ctx.scale(1, 0.34);

      for (let i = 0; i < 22; i += 1) {
        const p = i / 21;
        const radius = diskInner + (diskOuter - diskInner) * p;
        const alpha = 0.2 * (1 - p) + 0.04;
        ctx.strokeStyle = `rgba(${Math.floor(255 - p * 35)}, ${Math.floor(145 + p * 60)}, ${Math.floor(55 + p * 165)}, ${alpha.toFixed(3)})`;
        ctx.lineWidth = Math.max(1.2, baseRadius * 0.031 * (1 - p * 0.52));
        ctx.beginPath();
        ctx.arc(0, 0, radius, Math.PI * 1.08, Math.PI * 1.94);
        ctx.stroke();
      }
      ctx.restore();

      const flare = ctx.createRadialGradient(cx, cy - baseRadius * 0.08, 0, cx, cy, diskOuter);
      flare.addColorStop(0, "rgba(255, 255, 255, 0.09)");
      flare.addColorStop(0.2, "rgba(75, 215, 255, 0.11)");
      flare.addColorStop(0.55, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = flare;
      ctx.beginPath();
      ctx.arc(cx, cy, diskOuter, 0, Math.PI * 2);
      ctx.fill();

      if (!reducedMotion && visible) {
        animationFrame = window.requestAnimationFrame(draw);
      }
    };

    const start = () => {
      window.cancelAnimationFrame(animationFrame);
      lastFrame = performance.now();
      animationFrame = window.requestAnimationFrame(draw);
    };

    const handleVisibilityChange = () => {
      visible = document.visibilityState === "visible";
      if (visible) {
        start();
      } else {
        window.cancelAnimationFrame(animationFrame);
      }
    };

    const handleMotionChange = (event: MediaQueryListEvent) => {
      reducedMotion = event.matches;
      bursts = [];
      shootingStars = [];
      start();
    };

    resize();
    start();

    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    motionQuery.addEventListener("change", handleMotionChange);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      motionQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="block h-full w-full" />;
}
