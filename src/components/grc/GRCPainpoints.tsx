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
function IconClock({ c }: { c: string }) {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <circle cx="24" cy="25" r="16" {...S(c)} />
      <path d="M24 16 V25 L31 29" {...S(c)} />
      <path d="M16 7 L9 12 M32 7 L39 12" {...S(c)} strokeWidth={1.8} />
    </svg>
  );
}
function IconLink({ c }: { c: string }) {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <path d="M20 28 a7 7 0 0 1 0 -10 l5 -5 a7 7 0 0 1 10 10 l-3 3" {...S(c)} />
      <path d="M28 20 a7 7 0 0 1 0 10 l-5 5 a7 7 0 0 1 -10 -10 l3 -3" {...S(c)} />
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
    title: "Siloed governance creates blind spots",
    intro:
      "Policies live in one place, risks in spreadsheets, evidence in email, and compliance status depends on manual follow-up.",
    reality: [
      "Control owners lack a single view of obligations, risks, and remediation.",
      "Audit evidence is scattered, slowing certification, internal reviews, and customer due diligence.",
      "Third-party, privacy, and security issues are tracked separately, weakening oversight.",
    ],
    help: [
      "Centralise obligations, policies, controls, issues, and evidence in one structured model.",
      "Define ownership, approval flows, and review cadences for consistent governance.",
      "Automate reminders, attestations, and dashboards for management and board reporting.",
    ],
  },
  {
    Icon: IconClock,
    accent: "#9b6bff",
    title: "Compliance work becomes reactive",
    intro:
      "Teams often respond to audits, client questionnaires, and regulatory requests only when deadlines are already close.",
    reality: [
      "Evidence collection starts too late and depends on individual memory.",
      "Control testing is not performed with a predictable cadence.",
      "Management lacks early visibility on upcoming compliance gaps.",
    ],
    help: [
      "Create a recurring compliance calendar with owners, due dates, and review cycles.",
      "Track control testing, evidence status, and exceptions continuously.",
      "Provide readiness dashboards before audits, certifications, or client reviews.",
    ],
  },
  {
    Icon: IconLink,
    accent: "#2878ff",
    title: "Risk decisions are not connected to controls",
    intro:
      "Risk registers exist, but they are not always linked to actual controls, incidents, remediation actions, or business owners.",
    reality: [
      "Risks are documented but not actively managed after workshops.",
      "Treatment plans are disconnected from control implementation.",
      "Leadership receives risk information without clear operational accountability.",
    ],
    help: [
      "Connect each risk to controls, owners, treatment actions, and review dates.",
      "Track residual risk and remediation progress in one operating view.",
      "Translate risk exposure into practical decisions for management committees.",
    ],
  },
  {
    Icon: IconChart,
    accent: "#19d3c5",
    title: "Board reporting lacks reliable evidence",
    intro:
      "Executives need clear reporting, but governance updates are often based on fragmented inputs and manually consolidated files.",
    reality: [
      "Status reports are rebuilt manually before each committee.",
      "Evidence quality varies across departments and control owners.",
      "Board-level reporting does not always show risk, compliance, incidents, and remediation together.",
    ],
    help: [
      "Structure reporting around obligations, risks, controls, evidence, and actions.",
      "Create repeatable dashboards for committees, auditors, and leadership teams.",
      "Turn GRC activity into traceable, evidence-backed management reporting.",
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

export default function GRCPainpoints() {
  const [active, setActive] = useState(0);
  const total = PAINPOINTS.length;
  const p = PAINPOINTS[active];
  const go = (dir: number) => setActive((a) => (a + dir + total) % total);

  return (
    <section className="py-12 md:py-16 section-rule" aria-labelledby="grc-painpoints-heading">
      <Container>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
          {/* ── Left: title + controls ── */}
          <div className="lg:w-[34%] shrink-0">
            <p className="text-[12px] font-semibold tracking-wide text-[var(--blue)] mb-4">
              Methodology / Process
            </p>
            <h2
              id="grc-painpoints-heading"
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
                animation: "grc-pp-fade 0.45s ease both",
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
        @keyframes grc-pp-fade { from { opacity: 0; transform: translateY(10px) } to { opacity: 1; transform: translateY(0) } }
      `}</style>
    </section>
  );
}
