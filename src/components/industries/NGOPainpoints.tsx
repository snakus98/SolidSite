"use client";
import { useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* gradient def (cyan → purple) per icon */
const Grad = ({ id }: { id: string }) => (
  <defs>
    <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#19c8ff" />
      <stop offset="100%" stopColor="#9b6bff" />
    </linearGradient>
  </defs>
);
const sw = (id: string, w = 2) => ({ stroke: `url(#${id})`, strokeWidth: w, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, fill: "none" });

/* 1 — Sensitive data under active threat: shielded lock + people + orbit */
function IconData() {
  const id = "ngp1";
  return (
    <svg viewBox="0 0 48 48" className="w-16 h-16">
      <Grad id={id} />
      <circle cx="24" cy="20" r="17" {...sw(id, 1)} strokeDasharray="2 4" opacity="0.7" />
      <path d="M24 8 L33 11.5 V19 C33 25.5 24 30 24 30 C24 30 15 25.5 15 19 V11.5 Z" {...sw(id)} />
      <rect x="21" y="19" width="6" height="5.5" rx="1.2" {...sw(id, 1.6)} />
      <path d="M22 19 v-1.6 a2 2 0 0 1 4 0 V19" {...sw(id, 1.6)} />
      <circle cx="18" cy="37" r="2.3" {...sw(id, 1.6)} />
      <path d="M14 44 c0 -3 1.8 -4.6 4 -4.6 c2.2 0 4 1.6 4 4.6" {...sw(id, 1.6)} />
      <circle cx="30" cy="37" r="2.3" {...sw(id, 1.6)} />
      <path d="M26 44 c0 -3 1.8 -4.6 4 -4.6 c2.2 0 4 1.6 4 4.6" {...sw(id, 1.6)} />
    </svg>
  );
}
/* 2 — Attackers target stretched teams: target + person */
function IconTarget() {
  const id = "ngp2";
  return (
    <svg viewBox="0 0 48 48" className="w-16 h-16">
      <Grad id={id} />
      <circle cx="24" cy="25" r="15" {...sw(id, 1.8)} />
      <circle cx="24" cy="25" r="8.5" {...sw(id, 1.4)} opacity="0.7" />
      <path d="M24 4 v6 M24 40 v6 M4 25 h6 M38 25 h6" {...sw(id, 1.8)} />
      <circle cx="24" cy="22" r="3" {...sw(id, 1.6)} />
      <path d="M18.5 32 c0 -3.6 2.5 -5.6 5.5 -5.6 c3 0 5.5 2 5.5 5.6" {...sw(id, 1.6)} />
    </svg>
  );
}
/* 3 — Boards and funders demand assurance: certified compliance medal */
function IconAssurance() {
  const id = "ngp3";
  return (
    <svg viewBox="0 0 48 48" className="w-16 h-16">
      <Grad id={id} />
      <circle cx="24" cy="19" r="12" {...sw(id)} />
      <circle cx="24" cy="19" r="7.5" {...sw(id, 1.3)} opacity="0.6" />
      <path d="M20 19 l3 3 l5.5 -6" {...sw(id, 1.9)} />
      <path d="M17.5 29 L13.5 42 L20.5 38 M30.5 29 L34.5 42 L27.5 38" {...sw(id, 1.8)} />
    </svg>
  );
}
/* 4 — Controls must fit NGO reality: adjustable control sliders */
function IconFit() {
  const id = "ngp4";
  return (
    <svg viewBox="0 0 48 48" className="w-16 h-16">
      <Grad id={id} />
      <path d="M9 16 H39 M9 24 H39 M9 32 H39" {...sw(id, 1.8)} />
      <circle cx="19" cy="16" r="3.6" {...sw(id, 1.9)} fill="#0a1430" />
      <circle cx="30" cy="24" r="3.6" {...sw(id, 1.9)} fill="#0a1430" />
      <circle cx="15" cy="32" r="3.6" {...sw(id, 1.9)} fill="#0a1430" />
    </svg>
  );
}

type Painpoint = {
  Icon: () => React.ReactElement;
  accent: string;
  title: string;
  intro: string;
  reality: string[];
  help: string[];
};

const PAINPOINTS: Painpoint[] = [
  {
    Icon: IconData,
    accent: "#9b6bff",
    title: "Sensitive data under active threat",
    intro:
      "Beneficiary case notes, safeguarding information, and donor records sit squarely in GDPR scope and are increasingly targeted.",
    reality: [
      "Beneficiary case notes, safeguarding information, and donor records sit squarely in GDPR scope and are increasingly targeted — Welthungerhilfe faced Rhysida ransomware in 2025 and Extern Ireland suffered data theft in 2024.",
      "Humanitarian staff have been surveilled with government-approved spyware, proving NGOs are in attackers' sights.",
    ],
    help: [
      "We map and harden the data flows that matter, applying classification, DLP, and encryption built for Microsoft 365 and low-bandwidth environments.",
      "Backups, logging, and breach playbooks are engineered for headquarters and field offices so recovery does not depend on high-end infrastructure.",
    ],
  },
  {
    Icon: IconTarget,
    accent: "#3b82f6",
    title: "Attackers target stretched teams",
    intro:
      "ENISA highlights ransomware and availability attacks as top European threats — tactics that exploit resource-constrained teams.",
    reality: [
      "ENISA highlights ransomware and availability attacks as top European threats — tactics that exploit resource-constrained teams.",
      "Volunteers rotate every few months and shared devices are common, so corporate-style controls break down quickly.",
    ],
    help: [
      "Identity, MFA, and privileged access are configured for volunteer churn with automated onboarding and offboarding.",
      "We prioritise high-impact controls in the first 4–6 weeks — MFA, PAM, backups, logging, and basic detection.",
    ],
  },
  {
    Icon: IconAssurance,
    accent: "#19c8ff",
    title: "Boards and funders demand assurance",
    intro:
      "Generic policies no longer satisfy due diligence. Boards, regulators, and funders expect evidence that controls are operating.",
    reality: [
      "Generic policies no longer satisfy due diligence. Boards and regulators expect evidence that controls are operating, not just written down.",
      "Funders increasingly ask for proof of GDPR compliance and resilience as part of grant conditions.",
    ],
    help: [
      "Automated evidence from Microsoft 365, Azure, and security tooling feeds dashboards, risk registers, and board reports.",
      "We align operations to ISO 27001 so you can add certification later without rebuilding controls from scratch.",
    ],
  },
  {
    Icon: IconFit,
    accent: "#19d3c5",
    title: "Controls must fit NGO reality",
    intro:
      "Most consultants drop corporate frameworks that assume stable staffing, perfect connectivity, and big budgets.",
    reality: [
      "Most consultants drop corporate frameworks that assume stable staffing, perfect connectivity, and big budgets.",
      "You are left with shelfware policies and controls nobody can run between programme cycles.",
    ],
    help: [
      "We build controls that tolerate offline operation, shared devices, and consortium partners without added complexity.",
      "Training and handover focus on capability transfer so your team operates independently after we leave.",
    ],
  },
];

function Bullets({ items, accent }: { items: string[]; accent: string }) {
  return (
    <ul className="space-y-3">
      {items.map((t, i) => (
        <li key={i} className="flex gap-2.5 text-[13px] text-[var(--text-secondary)] leading-relaxed">
          <span className="mt-[7px] h-1.5 w-1.5 rounded-full shrink-0" style={{ background: accent }} />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

export default function NGOPainpoints() {
  const [active, setActive] = useState(0);
  const total = PAINPOINTS.length;
  const p = PAINPOINTS[active];
  const go = (dir: number) => setActive((a) => (a + dir + total) % total);

  return (
    <section className="py-12 md:py-16 section-rule" aria-labelledby="ngo-pp-heading">
      <Container>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
          {/* ── Left: title + controls ── */}
          <div className="lg:w-[34%] shrink-0">
            <p className="text-[12px] font-semibold tracking-wide text-[var(--blue)] mb-4">
              Methodology / Process
            </p>
            <h2
              id="ngo-pp-heading"
              className="text-[clamp(30px,3.4vw,46px)] font-extrabold leading-[1.05] tracking-tight text-[var(--text-primary)] mb-5"
            >
              Key painpoints
              <br className="hidden sm:block" /> we solve
            </h2>
            <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed mb-6 max-w-[400px]">
              A focused sequence of recurring challenges — and how our approach addresses each with
              clarity and momentum.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-[13px] font-semibold text-[var(--cyan)] border-b border-[var(--cyan)] pb-0.5 hover:opacity-80 transition-opacity"
            >
              See case studies <span aria-hidden="true">→</span>
            </Link>

            {/* Controls */}
            <div className="flex items-center gap-5 mt-10">
              <button
                onClick={() => go(-1)}
                aria-label="Previous painpoint"
                className="grid place-items-center w-10 h-10 rounded-full border border-[var(--border-default)] text-[var(--text-secondary)] transition-all duration-200 hover:text-[var(--text-primary)] hover:border-[var(--border-cyan)] hover:bg-[rgba(19,200,255,0.06)]"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => go(1)}
                aria-label="Next painpoint"
                className="grid place-items-center w-10 h-10 rounded-full border border-[var(--border-default)] text-[var(--text-primary)] transition-all duration-200 hover:border-[var(--border-cyan)] hover:bg-[rgba(19,200,255,0.06)]"
              >
                <ChevronRight size={20} />
              </button>

              {/* progress bar */}
              <div className="flex-1 h-[3px] rounded-full bg-[var(--border-default)] overflow-hidden max-w-[200px]">
                <div
                  className="h-full rounded-full transition-all duration-300 ease-out"
                  style={{
                    width: `${((active + 1) / total) * 100}%`,
                    background: "linear-gradient(90deg, var(--cyan), var(--blue))",
                  }}
                />
              </div>
              <span className="text-[13px] tabular-nums text-[var(--text-muted)]">
                {active + 1} / {total}
              </span>
            </div>
          </div>

          {/* ── Right: active painpoint card ── */}
          <div className="flex-1 min-w-0">
            <div
              key={active}
              className="relative overflow-hidden rounded-large border bg-[rgba(7,14,34,0.6)] p-7 md:p-8"
              style={{
                borderColor: `${p.accent}55`,
                boxShadow: `0 0 50px ${p.accent}1f`,
                animation: "pp-fade 0.45s ease both",
              }}
            >
              {/* top accent line */}
              <span
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: `linear-gradient(90deg, ${p.accent}, transparent 80%)` }}
              />
              {/* big watermark number */}
              <span
                className="absolute -top-4 right-4 font-extrabold leading-none pointer-events-none select-none"
                style={{ fontSize: 150, color: p.accent, opacity: 0.08 }}
              >
                {active + 1}
              </span>

              {/* header */}
              <div className="flex items-start gap-4 mb-5">
                <span
                  className="grid place-items-center w-[88px] h-[88px] rounded-2xl shrink-0"
                  style={{ background: `${p.accent}14`, border: `1px solid ${p.accent}40` }}
                >
                  <p.Icon />
                </span>
                <div>
                  <p className="text-[11px] font-bold tracking-[0.18em] uppercase mb-1.5" style={{ color: p.accent }}>
                    Painpoint {active + 1}
                  </p>
                  <h3 className="text-[20px] md:text-[23px] font-bold text-[var(--text-primary)] leading-snug">
                    {p.title}
                  </h3>
                </div>
              </div>

              <p className="text-[13.5px] text-[var(--text-secondary)] leading-relaxed mb-7 max-w-[760px]">
                {p.intro}
              </p>

              <div className="grid sm:grid-cols-2 gap-7">
                <div>
                  <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-[var(--text-muted)] mb-3">
                    The reality
                  </p>
                  <Bullets items={p.reality} accent={p.accent} />
                </div>
                <div>
                  <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-[var(--text-muted)] mb-3">
                    How we help
                  </p>
                  <Bullets items={p.help} accent={p.accent} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <style>{`
        @keyframes pp-fade { from { opacity: 0; transform: translateY(10px) } to { opacity: 1; transform: translateY(0) } }
      `}</style>
    </section>
  );
}
