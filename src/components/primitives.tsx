import type { CSSProperties } from "react";

type Hue = "sapphire" | "emerald" | "ruby" | "obsidian" | "chrome";

const CRYSTAL: Record<Hue, { core: string; halo: string }> = {
  sapphire: {
    core: "conic-gradient(from 200deg at 50% 45%, #1947D6 0deg, #0E2A6B 70deg, #0A0B45 130deg, #2853C8 200deg, #B7C8FF 260deg, #FFFFFF 290deg, #1947D6 340deg)",
    halo: "radial-gradient(circle, #2853C8, transparent 65%)",
  },
  emerald: {
    core: "conic-gradient(from 200deg at 50% 45%, #1F9266 0deg, #0F5A40 70deg, #073422 130deg, #1F9266 200deg, #BFEBD9 260deg, #FFFFFF 290deg, #1F9266 340deg)",
    halo: "radial-gradient(circle, #1F9266, transparent 65%)",
  },
  ruby: {
    core: "conic-gradient(from 200deg at 50% 45%, #C12347 0deg, #5A0E22 70deg, #2A0610 130deg, #C12347 200deg, #FFC4D2 260deg, #FFFFFF 290deg, #C12347 340deg)",
    halo: "radial-gradient(circle, #C12347, transparent 65%)",
  },
  obsidian: {
    core: "conic-gradient(from 200deg at 50% 45%, #2A2D33 0deg, #0A0B0E 70deg, #000 130deg, #2A2D33 200deg, #6B6F77 260deg, #B8BCC2 290deg, #2A2D33 340deg)",
    halo: "radial-gradient(circle, #2A2D33, transparent 65%)",
  },
  chrome: {
    core: "conic-gradient(from 200deg at 50% 45%, #FFFFFF 0deg, #B8BCC2 70deg, #4A4D52 130deg, #B8BCC2 200deg, #FFFFFF 260deg, #E8EAEC 290deg, #B8BCC2 340deg)",
    halo: "radial-gradient(circle, #B8BCC2, transparent 65%)",
  },
};

const STREAK_HUES: Record<Exclude<Hue, "obsidian">, { c1: string; c2: string }> = {
  sapphire: { c1: "#1947D6", c2: "#B7C8FF" },
  emerald: { c1: "#1F9266", c2: "#BFEBD9" },
  ruby: { c1: "#C12347", c2: "#FFC4D2" },
  chrome: { c1: "#B8BCC2", c2: "#FFFFFF" },
};

const CLIP =
  "polygon(50% 0%, 88% 20%, 100% 55%, 78% 100%, 22% 100%, 0% 55%, 12% 20%)";

export function Crystal({
  x, y, size = 360, hue = "sapphire", rot = 0, opacity = 1, blur = 0,
}: {
  x: number | string; y: number | string; size?: number; hue?: Hue;
  rot?: number; opacity?: number; blur?: number;
}) {
  const p = CRYSTAL[hue];
  const wrap: CSSProperties = {
    position: "absolute", left: x, top: y, width: size, height: size,
    opacity, pointerEvents: "none", transform: `rotate(${rot}deg)`,
    filter: blur ? `blur(${blur}px)` : "none",
  };
  return (
    <div aria-hidden style={wrap}>
      <div style={{ position: "absolute", inset: "-20%", background: p.halo, filter: "blur(50px)", opacity: 0.7 }} />
      <div style={{ position: "absolute", inset: 0, background: p.core, clipPath: CLIP, boxShadow: "inset 0 0 40px rgba(0,0,0,0.45)" }} />
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at 30% 25%, rgba(255,255,255,0.85), transparent 35%)",
        clipPath: CLIP, mixBlendMode: "screen",
      }} />
    </div>
  );
}

export function Streak({
  x, y, w = 600, hue = "sapphire", rot = -18, opacity = 1, blur = 0,
}: {
  x: number | string; y: number | string; w?: number;
  hue?: keyof typeof STREAK_HUES; rot?: number; opacity?: number; blur?: number;
}) {
  const c = STREAK_HUES[hue];
  return (
    <div aria-hidden style={{
      position: "absolute", left: x, top: y, width: w, height: w * 0.18,
      transform: `rotate(${rot}deg)`, opacity,
      filter: blur ? `blur(${blur}px)` : "none", pointerEvents: "none",
    }}>
      <div style={{
        position: "absolute", inset: 0,
        background: `linear-gradient(90deg, transparent 0%, ${c.c1}33 25%, ${c.c1}99 60%, ${c.c2} 92%, #FFFFFF 100%)`,
        filter: "blur(14px)", borderRadius: "50%",
      }} />
      <div style={{
        position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)",
        width: w * 0.16, height: w * 0.16, borderRadius: "50%",
        background: `radial-gradient(circle at 35% 30%, #FFFFFF 0%, ${c.c2} 25%, ${c.c1} 60%, #000 110%)`,
        boxShadow: `0 0 60px 10px ${c.c1}80`,
      }} />
    </div>
  );
}

export function Fog({
  x, y, size = 600, color = "#2853C8", opacity = 0.4, blur = 80,
}: {
  x: number | string; y: number | string; size?: number;
  color?: string; opacity?: number; blur?: number;
}) {
  return (
    <div aria-hidden style={{
      position: "absolute", left: x, top: y, width: size, height: size,
      borderRadius: "50%", background: `radial-gradient(circle, ${color}, transparent 65%)`,
      filter: `blur(${blur}px)`, opacity, pointerEvents: "none",
    }} />
  );
}

/* ============== SPARKLE ============== */
type SparkleHue = "white" | "sapphire" | "ruby" | "emerald" | "gold";
const SPARKLE_TONES: Record<SparkleHue, { c: string; glow: string }> = {
  white:    { c: "#FFFFFF", glow: "rgba(255,255,255,0.55)" },
  sapphire: { c: "#B7C8FF", glow: "rgba(40,83,200,0.55)" },
  ruby:     { c: "#FFC4D2", glow: "rgba(193,35,71,0.5)" },
  emerald:  { c: "#BFEBD9", glow: "rgba(31,146,102,0.5)" },
  gold:     { c: "#FFE9B0", glow: "rgba(232,182,76,0.55)" },
};

export function Sparkle({
  x, y, size = 14, delay = 0, duration = 3.4, hue = "white",
}: {
  x: number | string; y: number | string;
  size?: number; delay?: number; duration?: number; hue?: SparkleHue;
}) {
  const t = SPARKLE_TONES[hue];
  return (
    <span
      aria-hidden
      className="sparkle"
      style={
        {
          left: x, top: y, width: size, height: size,
          animationDelay: `${delay}s`, animationDuration: `${duration}s`,
          ["--spk" as string]: t.c,
          ["--spk-glow" as string]: t.glow,
        } as CSSProperties
      }
    >
      <span className="glow" />
    </span>
  );
}

/* Pre-positioned sparkle field. variant=hero|dense|subtle */
export function SparkleField({
  variant = "hero",
}: {
  variant?: "hero" | "dense" | "subtle" | "jewel";
}) {
  const sets: Record<string, Array<{
    x: string; y: string; size: number; delay: number; duration?: number;
    hue?: SparkleHue;
  }>> = {
    hero: [
      { x: "18%", y: "22%", size: 14, delay: 0,   hue: "white" },
      { x: "82%", y: "16%", size: 10, delay: 0.7, hue: "sapphire" },
      { x: "55%", y: "38%", size: 18, delay: 1.4, hue: "white" },
      { x: "32%", y: "55%", size: 8,  delay: 2.0, hue: "ruby" },
      { x: "70%", y: "72%", size: 12, delay: 1.1, hue: "white" },
      { x: "10%", y: "78%", size: 9,  delay: 0.4, hue: "emerald" },
      { x: "92%", y: "55%", size: 11, delay: 2.4, hue: "white" },
      { x: "45%", y: "12%", size: 7,  delay: 1.8, hue: "sapphire" },
    ],
    dense: [
      { x: "8%",  y: "20%", size: 10, delay: 0.0,  hue: "white" },
      { x: "20%", y: "70%", size: 14, delay: 0.6,  hue: "sapphire" },
      { x: "40%", y: "30%", size: 9,  delay: 1.2,  hue: "white" },
      { x: "55%", y: "80%", size: 12, delay: 1.8,  hue: "ruby" },
      { x: "70%", y: "40%", size: 16, delay: 2.4,  hue: "white" },
      { x: "85%", y: "75%", size: 10, delay: 0.3,  hue: "emerald" },
      { x: "92%", y: "20%", size: 8,  delay: 1.5,  hue: "sapphire" },
      { x: "30%", y: "50%", size: 7,  delay: 2.7,  hue: "white" },
    ],
    subtle: [
      { x: "15%", y: "30%", size: 8,  delay: 0.0,  hue: "white" },
      { x: "75%", y: "60%", size: 9,  delay: 1.4,  hue: "white" },
      { x: "50%", y: "25%", size: 7,  delay: 2.6,  hue: "sapphire" },
    ],
    jewel: [
      { x: "20%", y: "20%", size: 18, delay: 0.0,  hue: "white" },
      { x: "75%", y: "30%", size: 14, delay: 0.6,  hue: "sapphire" },
      { x: "55%", y: "55%", size: 22, delay: 1.2,  hue: "white" },
      { x: "30%", y: "75%", size: 12, delay: 1.8,  hue: "emerald" },
      { x: "85%", y: "70%", size: 16, delay: 2.4,  hue: "white" },
      { x: "60%", y: "15%", size: 10, delay: 1.5,  hue: "white" },
      { x: "12%", y: "55%", size: 14, delay: 2.0,  hue: "sapphire" },
    ],
  };
  const items = sets[variant] || sets.hero;
  return (
    <>
      {items.map((s, i) => (
        <Sparkle
          key={i}
          x={s.x}
          y={s.y}
          size={s.size}
          delay={s.delay}
          duration={s.duration ?? 3.4 + (i % 3) * 0.4}
          hue={s.hue ?? "white"}
        />
      ))}
    </>
  );
}

/* ============== FLOATER — drifting jewel dot ============== */
const FLOATER_TONES = {
  sapphire: { bg: "radial-gradient(circle, #B7C8FF 0%, #2853C8 60%, transparent 80%)", shadow: "0 0 14px rgba(40,83,200,0.55)" },
  ruby:     { bg: "radial-gradient(circle, #FFC4D2 0%, #C12347 60%, transparent 80%)", shadow: "0 0 14px rgba(193,35,71,0.55)" },
  emerald:  { bg: "radial-gradient(circle, #BFEBD9 0%, #1F9266 60%, transparent 80%)", shadow: "0 0 14px rgba(31,146,102,0.55)" },
  white:    { bg: "radial-gradient(circle, #FFFFFF 0%, #B8BCC2 60%, transparent 85%)", shadow: "0 0 12px rgba(255,255,255,0.55)" },
};
type FloaterHue = keyof typeof FLOATER_TONES;

export function Floater({
  x, y, size = 6, delay = 0, duration = 9, drift = 30, hue = "sapphire",
}: {
  x: number | string; y: number | string; size?: number;
  delay?: number; duration?: number; drift?: number; hue?: FloaterHue;
}) {
  const t = FLOATER_TONES[hue];
  return (
    <span
      aria-hidden
      className="floater"
      style={
        {
          left: x, top: y, width: size, height: size,
          background: t.bg, boxShadow: t.shadow,
          animationDelay: `${delay}s`,
          ["--drift-x" as string]: `${drift}px`,
          ["--drift-d" as string]: `${duration}s`,
        } as CSSProperties
      }
    />
  );
}

export function FloaterField() {
  const dots: Array<{ x: string; y: string; size: number; delay: number; duration: number; drift: number; hue: FloaterHue }> = [
    { x: "12%", y: "85%", size: 6,  delay: 0,    duration: 10, drift: 25,  hue: "sapphire" },
    { x: "28%", y: "92%", size: 5,  delay: 1.5,  duration: 12, drift: -20, hue: "white" },
    { x: "45%", y: "88%", size: 7,  delay: 3,    duration: 11, drift: 35,  hue: "ruby" },
    { x: "62%", y: "95%", size: 4,  delay: 0.8,  duration: 13, drift: -28, hue: "emerald" },
    { x: "78%", y: "90%", size: 6,  delay: 2.2,  duration: 10, drift: 18,  hue: "sapphire" },
    { x: "88%", y: "85%", size: 5,  delay: 4,    duration: 14, drift: -32, hue: "white" },
  ];
  return (
    <>
      {dots.map((d, i) => <Floater key={i} {...d} />)}
    </>
  );
}
