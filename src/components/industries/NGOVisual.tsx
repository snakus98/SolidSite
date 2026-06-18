"use client";
import Image from "next/image";
import { useReducedMotion } from "@/hooks/useReducedMotion";

// Outer dotted ring of ngo-illustration.png (viewBox 0 0 1254 1254) — drives the dots.
const ORBIT = "M627,95 A532,532 0 1,1 627,1159 A532,532 0 1,1 627,95";

export default function NGOVisual() {
  const reduced = useReducedMotion();

  return (
    <div className="relative w-full max-w-[640px] mix-blend-lighten">
      <Image
        src="/images/ngo-illustration.png"
        alt="NGO security diagram connecting beneficiary data, field offices, secure access, volunteers, partners and GDPR privacy around a central protected core"
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
            <radialGradient id="ngo-core" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#19c8ff" stopOpacity="0.24" />
              <stop offset="100%" stopColor="#19c8ff" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* central shield glow */}
          <circle cx="627" cy="600" r="175" fill="url(#ngo-core)"
            style={{ animation: "ngo-pulse 3.4s ease-in-out infinite", transformBox: "fill-box", transformOrigin: "center" }} />

          {/* travelling dots along the outer ring */}
          <circle r="7" fill="#bfefff">
            <animateMotion dur="9s" repeatCount="indefinite" path={ORBIT} />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.05;0.95;1" dur="9s" repeatCount="indefinite" />
          </circle>
          <circle r="6" fill="#a98bff">
            <animateMotion dur="9s" begin="-4.5s" repeatCount="indefinite" path={ORBIT} />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.05;0.95;1" dur="9s" begin="-4.5s" repeatCount="indefinite" />
          </circle>
        </svg>
      )}

      <style>{`
        @keyframes ngo-pulse { 0%,100% { opacity: 0.45; transform: scale(0.85) } 50% { opacity: 1; transform: scale(1.12) } }
      `}</style>
    </div>
  );
}
