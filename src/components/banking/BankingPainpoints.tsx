"use client";
import { useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { ChevronLeft, ChevronRight } from "lucide-react";

const S = (c: string) => ({
  stroke: c,
  strokeWidth: 2.1,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  fill: "none",
});

/* ── Painpoint icons (neon line) ── */
function IconEye({ c }: { c: string }) {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <path d="M6 24 C12 14 36 14 42 24 C36 34 12 34 6 24 Z" {...S(c)} />
      <circle cx="24" cy="24" r="6" {...S(c)} />
    </svg>
  );
}
function IconShield({ c }: { c: string }) {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <path d="M24 6 L38 11 V23 C38 33 24 42 24 42 C24 42 10 33 10 23 V11 Z" {...S(c)} />
      <path d="M17 24 l5 5 l9 -11" {...S(c)} />
    </svg>
  );
}
function IconFingerprint({ c }: { c: string }) {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <path d="M24 8 C15 8 9 14 9 23 V30" {...S(c)} />
      <path d="M39 30 V23 C39 18 36 14 31 11" {...S(c)} />
      <path d="M16 32 V23 a8 8 0 0 1 16 0 V30" {...S(c)} />
      <path d="M22 34 V23 a2 2 0 0 1 4 0 V31" {...S(c)} />
    </svg>
  );
}
function IconChart({ c }: { c: string }) {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <path d="M8 8 V40 H40" {...S(c)} />
      <rect x="14" y="26" width="5" height="10" rx="1.2" {...S(c)} strokeWidth={1.8} />
      <rect x="23" y="20" width="5" height="16" rx="1.2" {...S(c)} strokeWidth={1.8} />
      <rect x="32" y="14" width="5" height="22" rx="1.2" {...S(c)} strokeWidth={1.8} />
    </svg>
  );
}

type Painpoint = {
  Icon: (p: { c: string }) => React.ReactElement;
  accent: string;
  title: string;
  intro: string;
  reality: string[];
  help: string[];
};

const PAINPOINTS: Painpoint[] = [
  {
    Icon: IconEye,
    accent: "#19c8ff",
    title: "Regulated banking environments demand stronger control",
    intro:
      "Financial institutions operate under intense pressure to secure customer data, maintain uptime, and meet rising compliance expectations.",
    reality: [
      "Legacy systems and modern digital channels create fragmented risk exposure.",
      "Audit, compliance, and security evidence are hard to consolidate quickly.",
      "Third-party, fraud, and identity risks require tighter oversight.",
    ],
    help: [
      "Map critical systems, controls, and regulatory obligations.",
      "Strengthen resilience, governance, and evidence-backed reporting.",
      "Improve visibility across identity, fraud, third-party, and operational risk.",
    ],
  },
  {
    Icon: IconShield,
    accent: "#9b6bff",
    title: "Critical systems need continuous resilience",
    intro:
      "Banking operations depend on platforms that must remain available, secure, and compliant across branches, cloud, mobile, and core banking environments.",
    reality: [
      "Downtime can directly impact customer trust and business continuity.",
      "Security controls are often distributed across multiple teams and tools.",
      "Incident response readiness is difficult to prove without structured evidence.",
    ],
    help: [
      "Assess resilience across critical applications, infrastructure, and support processes.",
      "Define recovery, monitoring, and incident response workflows.",
      "Build dashboards and evidence packs for operational and executive oversight.",
    ],
  },
  {
    Icon: IconFingerprint,
    accent: "#2878ff",
    title: "Identity, access, and fraud risks are converging",
    intro:
      "Banks need to control who accesses what, detect suspicious activity, and protect customer accounts without slowing down operations.",
    reality: [
      "Privileged access, employee access, and third-party access create exposure.",
      "Fraud signals are often reviewed separately from identity and operational risk.",
      "Manual reviews increase delays and reduce consistency.",
    ],
    help: [
      "Strengthen identity governance, access reviews, and privileged access controls.",
      "Connect fraud, identity, and third-party risk into a shared control model.",
      "Improve traceability for access decisions, exceptions, and remediation actions.",
    ],
  },
  {
    Icon: IconChart,
    accent: "#19d3c5",
    title: "Compliance reporting is too manual",
    intro:
      "Regulatory, audit, and board reporting require reliable evidence, but teams often depend on spreadsheets, emails, and repeated manual consolidation.",
    reality: [
      "Compliance status is difficult to prove in real time.",
      "Evidence collection starts too late before audits or regulatory reviews.",
      "Leadership lacks a unified view of risks, controls, gaps, and remediation.",
    ],
    help: [
      "Structure evidence collection around controls, risks, and obligations.",
      "Prepare audit-ready reports for ISO 27001, NIST CSF, PCI DSS, GDPR, and local banking requirements.",
      "Deliver executive dashboards covering resilience, compliance, audit, and risk posture.",
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

export default function BankingPainpoints() {
  const [active, setActive] = useState(0);
  const total = PAINPOINTS.length;
  const p = PAINPOINTS[active];
  const go = (dir: number) => setActive((a) => (a + dir + total) % total);

  return (
    <section className="py-12 md:py-16 section-rule" aria-labelledby="banking-painpoints-heading">
      <Container>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
          {/* ── Left: title + controls ── */}
          <div className="lg:w-[34%] shrink-0">
            <p className="text-[12px] font-semibold tracking-wide text-[var(--blue)] mb-4">
              Methodology / Process
            </p>
            <h2
              id="banking-painpoints-heading"
              className="text-[clamp(30px,3.4vw,46px)] font-extrabold leading-[1.05] tracking-tight text-[var(--text-primary)] mb-5"
            >
              Key painpoints
              <br className="hidden sm:block" /> we solve
            </h2>
            <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed mb-6 max-w-[400px]">
              A focused sequence of recurring banking challenges — and how our approach addresses them
              with clarity, control, and resilience.
            </p>
            <Link
              href="/our-projects"
              className="inline-block text-[13px] font-semibold text-[var(--cyan)] border-b border-[var(--cyan)] pb-0.5 hover:opacity-80 transition-opacity"
            >
              See case studies →
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

              <div className="flex-1 h-[3px] rounded-full bg-[var(--border-default)] overflow-hidden max-w-[200px]">
                <div
                  className="h-full rounded-full transition-all duration-400 ease-out"
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
                animation: "banking-pp-fade 0.45s ease both",
              }}
            >
              <span
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: `linear-gradient(90deg, ${p.accent}, transparent 80%)` }}
              />
              <span
                className="absolute -top-4 right-4 font-extrabold leading-none pointer-events-none select-none"
                style={{ fontSize: 150, color: p.accent, opacity: 0.08 }}
              >
                {active + 1}
              </span>

              <div className="flex items-start gap-4 mb-5">
                <span
                  className="grid place-items-center w-[84px] h-[84px] rounded-2xl shrink-0"
                  style={{ background: `${p.accent}14`, border: `1px solid ${p.accent}40` }}
                >
                  <span style={{ width: 44, height: 44, filter: `drop-shadow(0 0 6px ${p.accent}cc)` }}>
                    <p.Icon c={p.accent} />
                  </span>
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
        @keyframes banking-pp-fade { from { opacity: 0; transform: translateY(10px) } to { opacity: 1; transform: translateY(0) } }
      `}</style>
    </section>
  );
}
