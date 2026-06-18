"use client";
import Image from "next/image";
import { useReducedMotion } from "@/hooks/useReducedMotion";

// Dotted ring of healthcare-illustration.png (viewBox 0 0 1254 1254) — drives the dots.
const ORBIT = "M627,67 A545,540 0 1,1 627,1152 A545,540 0 1,1 627,67";

export default function HealthcareVisual() {
  const reduced = useReducedMotion();

  return (
    <div className="relative w-full max-w-[620px] mix-blend-lighten">
      <Image
        src="/images/healthcare-illustration.png"
        alt="Healthcare security diagram connecting patient data, compliance and audit, secure access, incident response, clinical workflows and medical devices around a hospital"
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
            <radialGradient id="hc-core" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#19c8ff" stopOpacity="0.26" />
              <stop offset="100%" stopColor="#19c8ff" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* central shield glow */}
          <circle cx="620" cy="560" r="180" fill="url(#hc-core)"
            style={{ animation: "hc-pulse 3.4s ease-in-out infinite", transformBox: "fill-box", transformOrigin: "center" }} />

          {/* travelling dots along the ring */}
          <circle r="7" fill="#bfefff">
            <animateMotion dur="9s" repeatCount="indefinite" path={ORBIT} />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.05;0.95;1" dur="9s" repeatCount="indefinite" />
          </circle>
          <circle r="6" fill="#8fd0ff">
            <animateMotion dur="9s" begin="-4.5s" repeatCount="indefinite" path={ORBIT} />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.05;0.95;1" dur="9s" begin="-4.5s" repeatCount="indefinite" />
          </circle>
        </svg>
      )}

      <style>{`
        @keyframes hc-pulse { 0%,100% { opacity: 0.45; transform: scale(0.85) } 50% { opacity: 1; transform: scale(1.12) } }
      `}</style>
    </div>
  );
}
