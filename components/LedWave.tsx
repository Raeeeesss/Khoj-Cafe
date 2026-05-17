"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

/* ─── Replicates the golden LED wave strips from Khoj's interior walls ───── */

interface LedWaveProps {
  color?:     string;
  className?: string;
  animate?:   boolean;
  height?:    number;
  waves?:     number; /* number of wave cycles */
}

export function LedWave({
  color     = "#FFD060",
  className = "",
  animate   = true,
  height    = 40,
  waves     = 4,
}: LedWaveProps) {
  const ref    = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-5% 0px" });

  const W = 1200;
  const H = height;
  const amp = H * 0.38;        /* wave amplitude */
  const cy  = H / 2;           /* center Y */
  const step = W / (waves * 2);/* horizontal step per half-wave */

  /* Build a smooth sine-like SVG path */
  const pts: string[] = [];
  pts.push(`M 0 ${cy}`);
  for (let i = 0; i < waves; i++) {
    const x1 = (2 * i + 1) * step;
    const x2 = (2 * i + 2) * step;
    pts.push(`C ${(2 * i) * step + step * 0.5} ${cy - amp}, ${x1 - step * 0.5} ${cy - amp}, ${x1} ${cy}`);
    pts.push(`C ${x1 + step * 0.5} ${cy + amp}, ${x2 - step * 0.5} ${cy + amp}, ${x2} ${cy}`);
  }
  const pathD = pts.join(" ");

  const totalLen = 800; /* approximate stroke length */
  const dashLen  = totalLen;

  return (
    <svg
      ref={ref}
      viewBox={`0 0 ${W} ${H}`}
      width="100%"
      height={height}
      fill="none"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      {/* Glow shadow path */}
      <path
        d={pathD}
        stroke={color}
        strokeWidth="6"
        strokeOpacity="0.22"
        strokeLinecap="round"
        filter="blur(4px)"
      />
      {/* Main stroke */}
      <path
        d={pathD}
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        style={
          animate
            ? {
                strokeDasharray: dashLen,
                strokeDashoffset: inView ? 0 : dashLen,
                transition: "stroke-dashoffset 2s cubic-bezier(0.4,0,0.2,1) 0.2s, opacity 0.3s ease",
                opacity: inView ? 1 : 0,
              }
            : { opacity: 1 }
        }
      />
    </svg>
  );
}

/* ─── Horizontal section divider with centered text ── */
export function LedDivider({
  label,
  color = "#FFD060",
}: {
  label?: string;
  color?: string;
}) {
  return (
    <div className="flex items-center justify-center gap-6 my-2">
      <div className="flex-1 max-w-52">
        <LedWave color={color} height={28} waves={3} />
      </div>
      {label && (
        <span
          className="text-sm shrink-0 px-2 font-semibold tracking-widest uppercase"
          style={{ color, textShadow: `0 0 12px ${color}80` }}
        >
          {label}
        </span>
      )}
      <div className="flex-1 max-w-52 scale-x-[-1]">
        <LedWave color={color} height={28} waves={3} />
      </div>
    </div>
  );
}

/* ─── Full-width banner wave (like the actual Khoj wall strips) ── */
export function LedBanner({
  color   = "#FFD060",
  opacity = 0.65,
  height  = 32,
  waves   = 8,
}: {
  color?:   string;
  opacity?: number;
  height?:  number;
  waves?:   number;
}) {
  return (
    <div style={{ opacity }} aria-hidden="true">
      <LedWave color={color} height={height} waves={waves} animate={false} />
    </div>
  );
}
