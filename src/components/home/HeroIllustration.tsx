"use client";
import Image from "next/image";
import { useReducedMotion } from "@/hooks/useReducedMotion";

// Approximate positions (as % of the illustration box) of the features in the
// raster image — used to overlay animated glows so it reads as a live diagram.
const CARDS = [
  { left: "30%", top: "16%", color: "rgba(19,200,255,0.55)", delay: "0s" },   // IDENTIFY
  { left: "73%", top: "15%", color: "rgba(19,200,255,0.55)", delay: "1s" },   // DETECT
  { left: "22%", top: "43%", color: "rgba(113,70,255,0.5)", delay: "2s" },    // PROTECT
  { left: "80%", top: "41%", color: "rgba(113,70,255,0.5)", delay: "3s" },    // RESPOND
];

const NODES = [
  { left: "14%", top: "78%", delay: "0.2s" },   // People
  { left: "40%", top: "90%", delay: "0.8s" },   // Process
  { left: "62%", top: "90%", delay: "1.4s" },   // Technology
  { left: "88%", top: "78%", delay: "2s" },     // Governance
];

export default function HeroIllustration() {
  const reduced = useReducedMotion();

  return (
    <div
      className="relative w-full max-w-[680px]"
      style={{ animation: "fade-up 0.8s 0.15s ease both" }}
    >
      <Image
        src="/images/security-framework-diagram.png"
        alt="Cybersecurity framework diagram with shield, identify, detect, protect and respond modules"
        width={1448}
        height={1086}
        className="w-full h-auto"
        sizes="(max-width: 768px) 90vw, 680px"
        quality={100}
        priority
        unoptimized
      />

      {!reduced && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Pulsing aura behind the shield */}
          <span
            className="absolute rounded-full"
            style={{
              left: "52%",
              top: "44%",
              width: "34%",
              aspectRatio: "1",
              transform: "translate(-50%,-50%)",
              background:
                "radial-gradient(circle, rgba(19,200,255,0.35), rgba(19,200,255,0) 70%)",
              animation: "hero-pulse 3.2s ease-in-out infinite",
            }}
          />

          {/* Rotating ring glow under the shield base */}
          <span
            className="absolute rounded-full"
            style={{
              left: "52%",
              top: "63%",
              width: "30%",
              aspectRatio: "1",
              transform: "translate(-50%,-50%)",
              background:
                "conic-gradient(from 0deg, rgba(19,200,255,0) 0deg, rgba(19,200,255,0.28) 90deg, rgba(113,70,255,0.28) 180deg, rgba(19,200,255,0) 300deg)",
              filter: "blur(6px)",
              animation: "hero-spin 8s linear infinite",
            }}
          />

          {/* Sequential glow on each card */}
          {CARDS.map((c, i) => (
            <span
              key={i}
              className="absolute rounded-[14px]"
              style={{
                left: c.left,
                top: c.top,
                width: "20%",
                height: "16%",
                transform: "translate(-50%,-50%)",
                background: `radial-gradient(ellipse at center, ${c.color}, transparent 72%)`,
                animation: `hero-card 5s ease-in-out ${c.delay} infinite`,
              }}
            />
          ))}

          {/* Twinkling pulses on the bottom nodes */}
          {NODES.map((n, i) => (
            <span
              key={i}
              className="absolute rounded-full"
              style={{
                left: n.left,
                top: n.top,
                width: "5%",
                aspectRatio: "1",
                transform: "translate(-50%,-50%)",
                background:
                  "radial-gradient(circle, rgba(120,225,255,0.7), transparent 65%)",
                animation: `hero-ping 2.8s ease-out ${n.delay} infinite`,
              }}
            />
          ))}

        </div>
      )}

      <style>{`
        @keyframes hero-pulse { 0%,100% { opacity: 0.45; transform: translate(-50%,-50%) scale(0.9) } 50% { opacity: 0.9; transform: translate(-50%,-50%) scale(1.08) } }
        @keyframes hero-spin { to { transform: translate(-50%,-50%) rotate(360deg) } }
        @keyframes hero-card { 0%,100% { opacity: 0.15 } 50% { opacity: 0.9 } }
        @keyframes hero-ping { 0% { opacity: 0.8; transform: translate(-50%,-50%) scale(0.6) } 70%,100% { opacity: 0; transform: translate(-50%,-50%) scale(2.4) } }
      `}</style>
    </div>
  );
}
