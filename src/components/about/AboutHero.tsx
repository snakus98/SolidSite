"use client";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { useReducedMotion } from "@/hooks/useReducedMotion";

// Pin positions in the munich-tunis.png image (viewBox 0 0 1402 1122)
const MUNICH = { x: 393, y: 258 };
const TUNIS = { x: 421, y: 909 };
// Curved route between them (matches the baked line: gentle rightward bulge over Italy)
const ROUTE = `M${MUNICH.x},${MUNICH.y} C 415,470 525,600 470,710 C 435,800 421,855 ${TUNIS.x},${TUNIS.y}`;

export default function AboutHero() {
  const reduced = useReducedMotion();

  return (
    <section className="relative pt-[120px] pb-10 md:pt-[124px] md:pb-12 overflow-hidden" aria-labelledby="about-hero-heading">
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 w-[55%] h-full pointer-events-none"
        style={{ background: "radial-gradient(820px 620px at 70% 35%, rgba(40,120,255,0.10), transparent 65%)" }}
      />

      <Container className="flex flex-col md:flex-row items-center gap-8 md:gap-6">
        {/* ── Left content ── */}
        <div className="flex-1 md:max-w-[46%] animate-fade-up">
          <p className="text-[10px] sm:text-[11px] tracking-[0.2em] font-bold text-[var(--cyan)] mb-4 uppercase">
            About Punic Systems
          </p>

          <h1
            id="about-hero-heading"
            className="text-[clamp(32px,3.8vw,50px)] font-extrabold leading-[1.08] tracking-tight text-[var(--text-primary)] mb-5"
          >
            We help organizations{" "}
            <span className="text-grad-cyan">modernize</span>
            {", "}
            <span className="text-grad-purple">secure</span>
            {","}
            <br className="hidden sm:block" />
            {" and "}
            <span className="text-grad-cyan">scale</span> their digital operations.
          </h1>

          <p className="text-[13px] sm:text-[14px] text-[var(--text-secondary)] leading-relaxed mb-4 max-w-[480px]">
            Born from a passion for clarity and pragmatic delivery in complex transformations.
          </p>
          <p className="text-[13px] sm:text-[14px] text-[var(--text-secondary)] leading-relaxed mb-6 max-w-[480px]">
            We combine engineering rigor with a collaborative, human approach to create measurable impact.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="
                inline-flex items-center gap-2 px-5 py-2.5 rounded-[7px]
                text-[13px] font-semibold text-white
                bg-gradient-to-r from-[var(--purple)] to-[var(--blue)]
                border border-[rgba(113,70,255,0.5)]
                shadow-[0_0_24px_rgba(113,70,255,0.32)]
                transition-all duration-200 group
                hover:-translate-y-px hover:shadow-[0_0_36px_rgba(113,70,255,0.5)]
              "
            >
              Contact us
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/#services"
              className="
                inline-flex items-center gap-2 px-5 py-2.5 rounded-[7px]
                text-[13px] font-semibold text-[var(--text-primary)]
                bg-[rgba(7,17,44,0.6)] backdrop-blur-sm
                border border-[var(--border-default)]
                transition-all duration-200 group
                hover:border-[var(--border-cyan)] hover:bg-[rgba(19,200,255,0.06)]
              "
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" strokeWidth="2"
                stroke="var(--cyan)" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10" /><path d="M10 8l6 4-6 4z" fill="var(--cyan)" stroke="none" />
              </svg>
              Explore Services
            </Link>
          </div>
        </div>

        {/* ── Right illustration ── */}
        <div
          className="flex-1 md:max-w-[54%] w-full relative mix-blend-lighten"
          style={{ animation: "fade-up 0.8s 0.15s ease both" }}
        >
          <Image
            src="/images/munich-tunis.png"
            alt="Map connecting Munich, Germany and Tunis, Tunisia"
            width={1402}
            height={1122}
            className="w-full h-auto"
            priority
            unoptimized
          />

          {!reduced && (
            <svg
              viewBox="0 0 1402 1122"
              className="absolute inset-0 w-full h-full pointer-events-none"
              fill="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="route-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#19c8ff" />
                  <stop offset="100%" stopColor="#9b6bff" />
                </linearGradient>
                <radialGradient id="munich-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#19c8ff" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#19c8ff" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="tunis-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#9b6bff" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#9b6bff" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* flowing dashes along the route */}
              <path
                d={ROUTE}
                stroke="url(#route-grad)"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeDasharray="2 16"
                style={{ animation: "route-flow 1.4s linear infinite" }}
              />

              {/* traveling pulse along the route */}
              <circle r="6" fill="#bfefff">
                <animateMotion dur="3.2s" repeatCount="indefinite" path={ROUTE} rotate="auto" />
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="3.2s" repeatCount="indefinite" />
              </circle>

              {/* Munich pulsing ring */}
              <circle cx={MUNICH.x} cy={MUNICH.y} r="34" fill="url(#munich-glow)"
                style={{ animation: "about-pulse 2.6s ease-in-out infinite", transformBox: "fill-box", transformOrigin: "center" }} />
              <circle cx={MUNICH.x} cy={MUNICH.y} r="20" fill="none" stroke="#19c8ff" strokeWidth="2.5"
                style={{ animation: "about-ping 2.6s ease-out infinite", transformBox: "fill-box", transformOrigin: "center" }} />

              {/* Tunis pulsing ring */}
              <circle cx={TUNIS.x} cy={TUNIS.y} r="34" fill="url(#tunis-glow)"
                style={{ animation: "about-pulse 2.6s ease-in-out 0.6s infinite", transformBox: "fill-box", transformOrigin: "center" }} />
              <circle cx={TUNIS.x} cy={TUNIS.y} r="20" fill="none" stroke="#9b6bff" strokeWidth="2.5"
                style={{ animation: "about-ping 2.6s ease-out 0.6s infinite", transformBox: "fill-box", transformOrigin: "center" }} />
            </svg>
          )}
        </div>
      </Container>

      <style>{`
        @keyframes route-flow { to { stroke-dashoffset: -18 } }
        @keyframes about-pulse { 0%,100% { opacity: 0.5; transform: scale(0.85) } 50% { opacity: 1; transform: scale(1.15) } }
        @keyframes about-ping { 0% { opacity: 0.8; transform: scale(0.6) } 75%,100% { opacity: 0; transform: scale(1.9) } }
      `}</style>
    </section>
  );
}
