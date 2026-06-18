"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Painpoint = {
  icon: string;
  accent: string;
  title: string;
  intro: string;
  reality: string[];
  help: string[];
};

const PAINPOINTS: Painpoint[] = [
  {
    icon: "/images/painpoints/tap1.png",
    accent: "#3b82f6",
    title: "Factory realities defy generic programmes",
    intro:
      "Most programmes assume you can patch PLCs on demand, scan everything, and schedule downtime freely. Legacy controllers, certified equipment, weekend change windows, and vendor remote access say otherwise.",
    reality: [
      "Legacy OT and certified equipment cannot accept standard patches or scanning without risking availability and compliance.",
      "Vendor remote access, shared credentials, and ad-hoc connectivity create unmanaged exposure across plants.",
    ],
    help: [
      "We implement working controls for plants and connected products—zoning without downtime, safe scanning windows, compensating controls for unpatchable assets.",
      "Vendor JIT access, badge-to-IdP identity, and shared workstation hygiene close gaps that generic frameworks miss.",
    ],
  },
  {
    icon: "/images/painpoints/tap2.png",
    accent: "#9b6bff",
    title: "Regulation is expanding fast",
    intro:
      "NIS2 now covers key manufacturing subsectors, and the EU Cyber Resilience Act introduces baseline requirements for connected products.",
    reality: [
      "NIS2 covers these key manufacturing subsectors with Article 21 measures and incident reporting obligations.",
      "The EU Cyber Resilience Act introduces baseline requirements for connected products.",
    ],
    help: [
      "We confirm national scope, align Article 21 measures with OT and IIoT operations, and build board-level oversight with inspection-ready evidence.",
      "Connected-product teams get CRA readiness—secure defaults, SBOM and update policies, vulnerability handling, and incident reporting design.",
    ],
  },
  {
    icon: "/images/painpoints/tap3.png",
    accent: "#19c8ff",
    title: "Threats to OT and supply chain keep rising",
    intro:
      "ENISA highlights ransomware and availability attacks targeting manufacturing due to downtime sensitivity and sprawling supplier networks.",
    reality: [
      "ENISA highlights ransomware and availability attacks targeting manufacturing.",
      "Vendors, integrators, and remote engineers expand the attack surface while plants depend on reliable connectivity.",
    ],
    help: [
      "IEC 62443-aligned zones and conduits, monitored choke points, and vendor remote-access gateways with audit trails keep OT segmented without breaking workflows.",
      "Supplier due diligence, contractual controls, and FinOps rhythm reduce exposure across production partners and cloud estates.",
    ],
  },
  {
    icon: "/images/painpoints/tap4.png",
    accent: "#19d3c5",
    title: "Boards and partners demand proof",
    intro:
      "NIS2 holds management bodies accountable for cyber risk, and OEM/critical-supplier contracts now ask for evidence.",
    reality: [
      "NIS2 holds management bodies accountable for cyber risk.",
      "OEM and critical-supplier contracts ask for evidence of controls.",
    ],
    help: [
      "Board reporting, governance frameworks, and audit-ready documentation.",
      "Security training for leadership and operational teams—covering NIS2 governance, ISO 27001 operations, and secure development hygiene.",
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

export default function PainpointsCarousel() {
  const [active, setActive] = useState(0);
  const total = PAINPOINTS.length;
  const p = PAINPOINTS[active];

  const go = (dir: number) => setActive((a) => (a + dir + total) % total);

  return (
    <section className="py-12 md:py-16 section-rule" aria-labelledby="painpoints-heading">
      <Container>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
          {/* ── Left: title + controls ── */}
          <div className="lg:w-[34%] shrink-0">
            <p className="text-[12px] font-semibold tracking-wide text-[var(--blue)] mb-4">
              Methodology / Process
            </p>
            <h2
              id="painpoints-heading"
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
              className="inline-block text-[13px] font-semibold text-[var(--cyan)] border-b border-[var(--cyan)] pb-0.5 hover:opacity-80 transition-opacity"
            >
              See case studies
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
                  <Image src={p.icon} alt="" width={1254} height={1254} className="w-16 h-16 object-contain" />
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
