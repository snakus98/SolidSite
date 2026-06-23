"use client";
import Image from "next/image";
import { useReducedMotion } from "@/hooks/useReducedMotion";

// Approximate positions (as % of the illustration box) of the floating panels in
// project-taz7.png — used to overlay animated glows so it reads as a live diagram.
const PANELS = [
  { left: "23%", top: "24%", color: "rgba(19,200,255,0.5)", delay: "0s" },    // SECURITY
  { left: "80%", top: "23%", color: "rgba(113,70,255,0.5)", delay: "1s" },    // COMPLIANCE
  { left: "19%", top: "55%", color: "rgba(19,200,255,0.5)", delay: "2s" },    // CLOUD
  { left: "83%", top: "53%", color: "rgba(113,70,255,0.5)", delay: "3s" },    // PERFORMANCE
];

export default function ProjectsHeroVisual() {
  const reduced = useReducedMotion();

  return (
    <div
      className="relative w-full max-w-[620px] mix-blend-lighten"
      style={{ animation: "fade-up 0.8s 0.15s ease both" }}
    >
      <Image
        src="/images/project-taz7.png"
        alt="Projects overview illustration with security, compliance, cloud, and performance panels around a protected folder"
        width={1448}
        height={1086}
        className="w-full h-auto"
        sizes="(max-width: 768px) 90vw, 620px"
        quality={100}
        priority
        unoptimized
      />

      {!reduced && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Sequential glow on each floating panel only */}
          {PANELS.map((p, i) => (
            <span
              key={i}
              className="absolute rounded-[14px]"
              style={{
                left: p.left,
                top: p.top,
                width: "22%",
                height: "18%",
                transform: "translate(-50%,-50%)",
                background: `radial-gradient(ellipse at center, ${p.color}, transparent 72%)`,
                animation: `proj-card 5s ease-in-out ${p.delay} infinite`,
              }}
            />
          ))}
        </div>
      )}

      <style>{`
        @keyframes proj-card { 0%,100% { opacity: 0.15 } 50% { opacity: 0.9 } }
      `}</style>
    </div>
  );
}
