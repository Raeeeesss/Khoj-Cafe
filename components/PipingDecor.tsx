"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";

/* SVG wave path that "pipes" in — simulates frosting from a piping bag */
export function PipingWave({
  color = "#C8973B",
  width = 320,
  className = "",
}: {
  color?: string;
  width?: number;
  className?: string;
}) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <svg
      ref={ref}
      width={width}
      height={36}
      viewBox={`0 0 ${width} 36`}
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d={`M 0 18 C 20 6, 40 30, 60 18 C 80 6, 100 30, 120 18 C 140 6, 160 30, 180 18 C 200 6, 220 30, 240 18 C 260 6, 280 30, ${width} 18`}
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        style={{
          strokeDasharray: width * 1.6,
          strokeDashoffset: inView ? 0 : width * 1.6,
          transition: "stroke-dashoffset 1.6s cubic-bezier(0.4, 0, 0.2, 1)",
          opacity: inView ? 1 : 0,
          transitionProperty: "stroke-dashoffset, opacity",
        }}
      />
    </svg>
  );
}

/* Spiral piping — circular swirl effect */
export function PipingSpiral({
  color = "#0AAFA8",
  size = 48,
  className = "",
}: {
  color?: string;
  size?: number;
  className?: string;
}) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-5% 0px" });

  return (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M 24 24 C 24 16, 32 10, 38 16 C 44 22, 40 34, 30 36 C 18 38, 8 28, 12 18 C 16 8, 28 6, 36 12"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        style={{
          strokeDasharray: 200,
          strokeDashoffset: inView ? 0 : 200,
          transition: "stroke-dashoffset 1.4s ease 0.2s",
          opacity: inView ? 1 : 0,
          transitionProperty: "stroke-dashoffset, opacity",
        }}
      />
    </svg>
  );
}

/* Horizontal divider with piping ornament in the center */
export function PipingDivider({
  label,
  color = "#C8973B",
}: {
  label?: string;
  color?: string;
}) {
  return (
    <div className="flex items-center justify-center gap-4 my-2">
      <PipingWave color={color} width={180} />
      {label && (
        <span
          className="text-sm px-3 shrink-0"
          style={{ color, fontFamily: "var(--font-great-vibes)", fontSize: "1.25rem" }}
        >
          {label}
        </span>
      )}
      <PipingWave color={color} width={180} className="scale-x-[-1]" />
    </div>
  );
}

/* Corner piping swirls for decorative panels */
export function CornerPipe({
  color = "#C8973B",
  className = "",
}: {
  color?: string;
  className?: string;
}) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <svg
      ref={ref}
      width={60}
      height={60}
      viewBox="0 0 60 60"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M 4 4 Q 30 4 56 4 Q 56 30 56 56"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        style={{
          strokeDasharray: 120,
          strokeDashoffset: inView ? 0 : 120,
          transition: "stroke-dashoffset 1.2s ease",
          opacity: 0.5,
        }}
      />
      <circle cx="4"  cy="4"  r="3" fill={color} style={{ opacity: inView ? 0.6 : 0, transition: "opacity 0.3s ease 1.2s" }} />
      <circle cx="56" cy="56" r="3" fill={color} style={{ opacity: inView ? 0.6 : 0, transition: "opacity 0.3s ease 1.2s" }} />
    </svg>
  );
}
