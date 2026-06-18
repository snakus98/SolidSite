"use client";
import Image from "next/image";
import { useReducedMotion } from "@/hooks/useReducedMotion";

// Smooth closed loop passing through the six nodes — drives the travelling dots.
const ORBIT =
  "M598,120 C768,120 1043,301 1128,440 C1213,579 1197,847 1108,952 " +
  "C1019,1057 752,1072 596,1072 C441,1072 257,1057 175,952 " +
  "C93,847 35,579 105,440 C176,301 428,120 598,120 Z";

export default function ManufacturingVisual() {
  const reduced = useReducedMotion();

  return (
    <div
      className="relative w-full max-w-[620px] mix-blend-lighten"
      style={{ animation: "fade-up 0.8s 0.15s ease both" }}
    >
      <Image
        src="/images/iot-manufacturing.png"
        alt="Manufacturing and Industrial IoT diagram connecting cloud, secure plants, connected products, OT, IT and supply chains"
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
            <radialGradient id="iiot-core" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#19c8ff" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#19c8ff" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* central factory glow */}
          <circle cx="610" cy="415" r="205" fill="url(#iiot-core)"
            style={{ animation: "iiot-pulse 3.4s ease-in-out infinite", transformBox: "fill-box", transformOrigin: "center" }} />

          {/* travelling dots along the orbit */}
          <circle r="7" fill="#bfefff">
            <animateMotion dur="9s" repeatCount="indefinite" path={ORBIT} />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.05;0.95;1" dur="9s" repeatCount="indefinite" />
          </circle>
          <circle r="6" fill="#b79bff">
            <animateMotion dur="9s" begin="-4.5s" repeatCount="indefinite" path={ORBIT} />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.05;0.95;1" dur="9s" begin="-4.5s" repeatCount="indefinite" />
          </circle>
        </svg>
      )}

      <style>{`
        @keyframes iiot-pulse { 0%,100% { opacity: 0.45; transform: scale(0.85) } 50% { opacity: 1; transform: scale(1.12) } }
      `}</style>
    </div>
  );
}
