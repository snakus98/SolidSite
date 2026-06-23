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
function IconCloud({ c }: { c: string }) {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <path d="M16 34 a8 8 0 0 1 -1 -16 a11 11 0 0 1 21 3 a7 7 0 0 1 -2 13 Z" {...S(c)} />
      <path d="M20 28 l3 3 l6 -7" {...S(c)} strokeWidth={1.9} />
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
function IconMonitor({ c }: { c: string }) {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <path d="M8 8 V40 H40" {...S(c)} />
      <path d="M13 30 l6 -8 l5 5 l8 -12" {...S(c)} strokeWidth={1.9} />
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
    title: "Fragmented IT environments slow decision-making",
    intro:
      "Tools, users, assets, support requests, cloud resources, and security controls are often managed in silos, creating operational friction and limited visibility.",
    reality: [
      "Limited visibility across assets, identities, services, and cloud resources.",
      "Reactive support processes and inconsistent operational ownership.",
      "Cloud, endpoint, network, and security decisions are not fully aligned.",
    ],
    help: [
      "Create a unified view of infrastructure, users, devices, services, and dependencies.",
      "Standardise workflows, ownership, support models, and operational controls.",
      "Introduce monitoring, optimisation, resilience, and security-by-design practices.",
    ],
  },
  {
    Icon: IconCloud,
    accent: "#9b6bff",
    title: "Cloud and Microsoft 365 environments are under-optimised",
    intro:
      "Many organisations use cloud platforms and Microsoft 365 every day, but without a clear architecture, governance model, licensing strategy, and security baseline.",
    reality: [
      "Cloud costs and software licenses are difficult to control.",
      "Microsoft 365, Teams, SharePoint, Intune, and identity services are not fully structured.",
      "Collaboration grows faster than governance, security, and data control.",
    ],
    help: [
      "Optimise cloud consumption, licensing, access, and collaboration environments.",
      "Design secure Microsoft 365 and endpoint management setups.",
      "Build a clear roadmap for cloud maturity, cost control, and operational efficiency.",
    ],
  },
  {
    Icon: IconShield,
    accent: "#2878ff",
    title: "Security and compliance are treated too late",
    intro:
      "Security often becomes a reaction after incidents, audits, client requirements, or compliance pressure — instead of being embedded into daily IT operations.",
    reality: [
      "Security controls are not consistently mapped to business risks.",
      "ISO 27001, GDPR, NIST, or client security requirements are difficult to translate into practical actions.",
      "Teams lack clear routines for access control, vulnerability management, awareness, and incident response.",
    ],
    help: [
      "Embed security-by-design into infrastructure, cloud, endpoint, and software decisions.",
      "Support ISO 27001 readiness, GDPR alignment, risk assessments, and security awareness.",
      "Strengthen vulnerability management, access control, and incident response readiness.",
    ],
  },
  {
    Icon: IconMonitor,
    accent: "#19d3c5",
    title: "IT operations lack continuity and measurable structure",
    intro:
      "Without a clear operating model, IT teams spend too much time reacting to requests instead of improving resilience, service quality, and business enablement.",
    reality: [
      "Support workflows are informal, inconsistent, or difficult to measure.",
      "Monitoring, backups, disaster recovery, and continuity plans are incomplete.",
      "Management lacks clear indicators to prioritise investments, risks, and improvement actions.",
    ],
    help: [
      "Design practical IT operating models, support workflows, and reporting structures.",
      "Implement monitoring, backup, continuity, and resilience practices.",
      "Provide executive dashboards and roadmaps for better IT decision-making.",
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

export default function ITPainpoints() {
  const [active, setActive] = useState(0);
  const total = PAINPOINTS.length;
  const p = PAINPOINTS[active];
  const go = (dir: number) => setActive((a) => (a + dir + total) % total);

  return (
    <section className="py-12 md:py-16 section-rule" aria-labelledby="it-painpoints-heading">
      <Container>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
          {/* ── Left: title + controls ── */}
          <div className="lg:w-[34%] shrink-0">
            <p className="text-[12px] font-semibold tracking-wide text-[var(--blue)] mb-4">
              Methodology / Process
            </p>
            <h2
              id="it-painpoints-heading"
              className="text-[clamp(30px,3.4vw,46px)] font-extrabold leading-[1.05] tracking-tight text-[var(--text-primary)] mb-5"
            >
              Key IT challenges
              <br className="hidden sm:block" /> we help you solve
            </h2>
            <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed mb-6 max-w-[400px]">
              A focused view of the recurring IT challenges that slow down organisations — and how
              Punic Systems turns them into structured, secure, and measurable improvement paths.
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
                animation: "it-pp-fade 0.45s ease both",
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
        @keyframes it-pp-fade { from { opacity: 0; transform: translateY(10px) } to { opacity: 1; transform: translateY(0) } }
      `}</style>
    </section>
  );
}
