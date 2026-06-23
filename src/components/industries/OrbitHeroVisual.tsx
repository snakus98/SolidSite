"use client";
import Image from "next/image";
import { useReducedMotion } from "@/hooks/useReducedMotion";

// Animated hero visual for industry pages: wraps a raster illustration whose
// nodes sit on a circular dotted ring, and overlays travelling dots + a pulsing
// core so the ring reads as a live diagram. Geometry assumes a 1254×1254 image
// with the ring centred at (627,627), radius ≈ 485 (≈39% of the box).
const CX = 627;
const CY = 627;
const R = 485;

// Full-circle path (two arcs), starting at the top.
const ORBIT = `M${CX},${CY - R} A${R},${R} 0 1,1 ${CX},${CY + R} A${R},${R} 0 1,1 ${CX},${CY - R}`;

export default function OrbitHeroVisual({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const reduced = useReducedMotion();

  return (
    <div className="relative w-full max-w-[640px] mix-blend-lighten">
      <Image
        src={src}
        alt={alt}
        width={1254}
        height={1254}
        className="w-full h-auto"
        priority
        unoptimized
      />

      {!reduced && (
        <svg
          viewBox="0 0 1254 1254"
          className="absolute inset-0 w-full h-full pointer-events-none"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <radialGradient id="orbit-core" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#19c8ff" stopOpacity="0.26" />
              <stop offset="100%" stopColor="#19c8ff" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* central pulsing glow behind the core */}
          <circle
            cx={CX}
            cy={CY}
            r="180"
            fill="url(#orbit-core)"
            style={{
              animation: "orbit-pulse 3.4s ease-in-out infinite",
              transformBox: "fill-box",
              transformOrigin: "center",
            }}
          />

          {/* rotating dashed ring tracing the circle */}
          <circle
            cx={CX}
            cy={CY}
            r={R}
            stroke="rgba(19,200,255,0.32)"
            strokeWidth="2"
            strokeDasharray="3 22"
            strokeLinecap="round"
            style={{
              animation: "orbit-rotate 22s linear infinite",
              transformBox: "fill-box",
              transformOrigin: "center",
            }}
          />

          {/* travelling dots along the ring */}
          <circle r="8" fill="#bfefff">
            <animateMotion dur="9s" repeatCount="indefinite" path={ORBIT} />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.05;0.95;1" dur="9s" repeatCount="indefinite" />
          </circle>
          <circle r="7" fill="#8fd0ff">
            <animateMotion dur="9s" begin="-3s" repeatCount="indefinite" path={ORBIT} />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.05;0.95;1" dur="9s" begin="-3s" repeatCount="indefinite" />
          </circle>
          <circle r="6" fill="#b6a8ff">
            <animateMotion dur="9s" begin="-6s" repeatCount="indefinite" path={ORBIT} />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.05;0.95;1" dur="9s" begin="-6s" repeatCount="indefinite" />
          </circle>
        </svg>
      )}

      <style>{`
        @keyframes orbit-pulse { 0%,100% { opacity: 0.45; transform: scale(0.85) } 50% { opacity: 1; transform: scale(1.12) } }
        @keyframes orbit-rotate { to { transform: rotate(360deg) } }
      `}</style>
    </div>
  );
}
