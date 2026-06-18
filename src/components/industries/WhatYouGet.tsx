import Image from "next/image";
import { Check, CalendarDays } from "lucide-react";
import Container from "@/components/ui/Container";

const BLUE = "#3b82f6";
const PURPLE = "#9b6bff";
const CYAN = "#19c8ff";

function IconBadge({ src, accent, size = 64 }: { src: string; accent: string; size?: number }) {
  return (
    <span
      className="grid place-items-center rounded-full shrink-0"
      style={{ width: size, height: size, background: `${accent}12`, border: `1px solid ${accent}40` }}
    >
      <Image src={src} alt="" width={1254} height={1254} style={{ width: size * 0.56, height: size * 0.56 }} className="object-contain" />
    </span>
  );
}

/* ── Hand-drawn SVG icons (accent-coloured) ── */
type IP = { c: string };
const st = (c: string, w = 2) => ({ stroke: c, strokeWidth: w, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, fill: "none" });

// Core 1 — Governance & assurance: balance scale
function IconGovernance({ c }: IP) {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <circle cx="24" cy="11" r="2" fill={c} />
      <path d="M24 13 V38" {...st(c)} />
      <path d="M17 40 H31" {...st(c)} />
      <path d="M11 16 H37" {...st(c)} />
      <path d="M11 16 L7 25 M11 16 L15 25 M3.5 25 Q11 31 18.5 25" {...st(c, 1.7)} />
      <path d="M37 16 L33 25 M37 16 L41 25 M29.5 25 Q37 31 44.5 25" {...st(c, 1.7)} />
    </svg>
  );
}
// Core 2 — Cloud excellence: cloud + check
function IconCloud({ c }: IP) {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <path d="M16 34 h17 a7 7 0 0 0 1.2 -13.9 a9.5 9.5 0 0 0 -18.2 -2.6 a7.5 7.5 0 0 0 0 16.5 Z" {...st(c)} />
      <path d="M19 26 l3.2 3.2 l6 -6.6" {...st(c, 2)} />
    </svg>
  );
}
// Core 3 — Integration & automation: interlocking gears
function IconGears({ c }: IP) {
  const teeth = (cx: number, cy: number, r: number, len: number) =>
    Array.from({ length: 8 }, (_, i) => {
      const a = (i * Math.PI) / 4;
      const x1 = cx + Math.cos(a) * r, y1 = cy + Math.sin(a) * r;
      const x2 = cx + Math.cos(a) * (r + len), y2 = cy + Math.sin(a) * (r + len);
      return `M${x1.toFixed(1)} ${y1.toFixed(1)} L${x2.toFixed(1)} ${y2.toFixed(1)}`;
    }).join(" ");
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <circle cx="19" cy="20" r="6.5" {...st(c, 1.9)} />
      <circle cx="19" cy="20" r="2.4" {...st(c, 1.6)} />
      <path d={teeth(19, 20, 7, 2.6)} {...st(c, 1.7)} />
      <circle cx="33" cy="33" r="4.5" {...st(c, 1.7)} />
      <circle cx="33" cy="33" r="1.6" {...st(c, 1.4)} />
      <path d={teeth(33, 33, 5, 2.2)} {...st(c, 1.5)} />
    </svg>
  );
}
// Core 4 — Customer experience: speech bubble + heart
function IconCX({ c }: IP) {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <path d="M10 11 H38 a2 2 0 0 1 2 2 V28 a2 2 0 0 1 -2 2 H22 L15 37 V30 H10 a2 2 0 0 1 -2 -2 V13 a2 2 0 0 1 2 -2 Z" {...st(c)} />
      <path d="M24 26 c-2 -1.6 -5.5 -3.4 -5.5 -6.4 c0 -2 1.6 -3.2 3.3 -3.2 c1.2 0 2 0.7 2.2 1.4 c0.2 -0.7 1 -1.4 2.2 -1.4 c1.7 0 3.3 1.2 3.3 3.2 c0 3 -3.5 4.8 -5.5 6.4 Z" {...st(c, 1.7)} />
    </svg>
  );
}
// Delivery 1 — Discover: magnifier
function IconDiscover({ c }: IP) {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <circle cx="21" cy="21" r="11" {...st(c)} />
      <path d="M29 29 L40 40" {...st(c, 2.4)} />
      <path d="M16.5 21 a4.5 4.5 0 0 1 4.5 -4.5" {...st(c, 1.6)} />
    </svg>
  );
}
// Delivery 2 — Build the foundation: layers
function IconFoundation({ c }: IP) {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <path d="M24 8 L40 16 L24 24 L8 16 Z" {...st(c)} />
      <path d="M8 23 L24 31 L40 23" {...st(c, 1.8)} />
      <path d="M8 30 L24 38 L40 30" {...st(c, 1.8)} />
    </svg>
  );
}
// Delivery 3 — Build resilience: shield + pulse
function IconResilience({ c }: IP) {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <path d="M24 7 L37 11.5 V22 C37 31 24 40 24 40 C24 40 11 31 11 22 V11.5 Z" {...st(c)} />
      <path d="M16 23 H20 L22 18 L26 28 L28 23 H32" {...st(c, 1.9)} />
    </svg>
  );
}
// Delivery 4 — Handoff & operate: handshake
function IconHandoff({ c }: IP) {
  return (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <g {...st(c, 1.6)}>
        <path d="m11 17 2 2a1 1 0 1 0 3-3" />
        <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
        <path d="m21 3 1 11h-2" />
        <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
        <path d="M3 4h8" />
      </g>
    </svg>
  );
}

function SvgBadge({ Icon, accent, size }: { Icon: (p: IP) => React.ReactElement; accent: string; size: number }) {
  return (
    <span
      className="grid place-items-center rounded-full shrink-0"
      style={{ width: size, height: size, background: `${accent}12`, border: `1px solid ${accent}40` }}
    >
      <span style={{ width: size * 0.64, height: size * 0.64, filter: `drop-shadow(0 0 3px ${accent}55)` }}>
        <Icon c={accent} />
      </span>
    </span>
  );
}

function PanelLabel({ children, color = CYAN }: { children: React.ReactNode; color?: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="text-[12px] font-bold tracking-[0.2em] uppercase" style={{ color }}>
        {children}
      </span>
      <span className="flex-1 h-px bg-[var(--border-default)]" />
    </div>
  );
}

const CORE = [
  { Icon: IconGovernance, accent: BLUE, title: "Governance & assurance", desc: "NIS2 mapped to OT/IIoT, ISO 27001 aligned to IEC 62443, and CRA readiness—with board-level oversight." },
  { Icon: IconCloud, accent: PURPLE, title: "Cloud excellence for manufacturing", desc: "Microsoft 365 identity and access, PAM, secure shared profiles, landing zones, IAM/KMS, secure VPC connectivity, and immutable backups." },
  { Icon: IconGears, accent: BLUE, title: "Integration & automation", desc: "Event-driven and API-led flows across MES, SCADA, historians, ERP, PLM, QMS, and data platforms." },
  { Icon: IconCX, accent: PURPLE, title: "Customer experience technology", desc: "Qualtrics connected to CRM and data warehouses to close the loop—feedback, text analytics, telemetry, and digital experience analytics." },
];

const DELIVERY = [
  { Icon: IconDiscover, accent: BLUE, title: "Discover", weeks: "Weeks 1–3", desc: "Discovery & plant walkdown." },
  { Icon: IconFoundation, accent: PURPLE, title: "Build the foundation", weeks: "Weeks 4–8", desc: "Foundation sprint and quick wins." },
  { Icon: IconResilience, accent: BLUE, title: "Build resilience", weeks: "Weeks 9–14", desc: "Resilience & readiness at scale." },
  { Icon: IconHandoff, accent: PURPLE, title: "Handoff & operate", weeks: "Weeks 15–16", desc: "Operate with confidence—evidence every step." },
];

const DELIVERABLES = [
  { t: "NIS2 control matrix", c: CYAN },
  { t: "OT zoning diagrams", c: CYAN },
  { t: "Asset inventory with vulnerability profile", c: CYAN },
  { t: "CRA readiness pack", c: CYAN },
  { t: "Cloud guardrails", c: PURPLE },
  { t: "Integration contracts", c: PURPLE },
  { t: "CX dashboards", c: PURPLE },
  { t: "ISMS documentation", c: PURPLE },
];

const ENABLEMENT = [
  { n: 5, icon: "/images/whatyouget/ca9.png", accent: PURPLE, title: "Security training & certification", desc: "PECB-accredited paths from awareness to Lead Implementer/Auditor for plant IT/OT, engineering, product, and leadership teams." },
  { n: 6, icon: "/images/whatyouget/ca10.png", accent: CYAN, title: "OT/IIoT controls that stick", desc: "IEC 62443 zones and conduits, badge-to-IdP identities, vendor JIT access, passive discovery, safe scanning, compensating controls, and secure product lifecycle." },
];

const panelCls =
  "rounded-large border border-[var(--border-default)] bg-[rgba(7,14,34,0.5)] p-6 md:p-7 h-full flex flex-col";

export default function WhatYouGet() {
  return (
    <section className="py-12 md:py-16 section-rule" aria-labelledby="wyg-heading">
      <Container>
        {/* Header */}
        <div className="border-l-2 border-[var(--purple)] pl-5 mb-9">
          <h2 id="wyg-heading" className="text-[clamp(32px,4vw,52px)] font-extrabold leading-[1.02] tracking-tight text-[var(--text-primary)] mb-3">
            What you <span className="text-grad-purple">get</span>
          </h2>
          <p className="text-[14px] md:text-[15px] text-[var(--text-secondary)] leading-relaxed max-w-[480px]">
            Outcomes and workstreams that secure plants, products, and cloud estates—without halting production.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-5 items-stretch">
          {/* ── ROW 1 — Core capabilities (2x2 cards) ── */}
          <div className={panelCls}>
            <PanelLabel color={CYAN}>Core Capabilities</PanelLabel>
            <div className="grid sm:grid-cols-2 gap-4 flex-1 [grid-auto-rows:1fr]">
              {CORE.map((c, i) => (
                <div
                  key={c.title}
                  className="rounded-large border bg-[rgba(7,16,40,0.5)] p-5 flex flex-col transition-all duration-300 hover:-translate-y-1"
                  style={{ borderColor: `${c.accent}3a` }}
                >
                  <SvgBadge Icon={c.Icon} accent={c.accent} size={60} />
                  <h3 className="text-[15px] font-bold text-[var(--text-primary)] mt-3 mb-1.5 leading-snug">
                    <span style={{ color: c.accent }}>{i + 1}.</span> {c.title}
                  </h3>
                  <p className="text-[12px] text-[var(--text-secondary)] leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── ROW 1 — Delivery model ── */}
          <div className={panelCls}>
            <PanelLabel color={PURPLE}>Delivery Model</PanelLabel>
            <div className="flex-1 flex flex-col justify-center">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-1">
                  {DELIVERY.map((d, i) => (
                    <div key={d.title} className="flex gap-3.5">
                      <div className="flex flex-col items-center">
                        <SvgBadge Icon={d.Icon} accent={d.accent} size={52} />
                        {i < DELIVERY.length - 1 && (
                          <span className="w-px flex-1 my-1 border-l border-dashed border-[var(--border-default)]" />
                        )}
                      </div>
                      <div className="pb-5">
                        <h4 className="text-[14.5px] font-bold text-[var(--text-primary)] leading-tight">
                          <span style={{ color: d.accent }} className="mr-1">{i + 1}</span> {d.title}
                        </h4>
                        <p className="text-[11px] text-[var(--text-muted)] mt-0.5">{d.weeks}</p>
                        <p className="text-[12px] text-[var(--text-secondary)] leading-relaxed mt-0.5">{d.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {/* hologram + badge */}
                <div className="sm:w-[48%] flex flex-col items-center justify-center gap-5">
                  <Image
                    src="/images/whatyouget/ca11.png"
                    alt="Factory hologram"
                    width={1254}
                    height={940}
                    className="w-full h-auto scale-110 mix-blend-lighten"
                    unoptimized
                  />
                  <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-[10px] border border-[var(--border-default)] bg-[rgba(7,17,44,0.6)]">
                    <CalendarDays size={18} className="text-[var(--cyan)]" />
                    <span className="text-[14px] font-semibold text-[var(--text-primary)]">
                      <span className="text-[var(--cyan)]">16-week</span> delivery
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── ROW 2 — Enablement ── */}
          <div className={panelCls}>
            <PanelLabel color={CYAN}>Enablement</PanelLabel>
            <div className="divide-y divide-[var(--border-default)] flex-1 flex flex-col justify-center">
              {ENABLEMENT.map((e) => (
                <div key={e.n} className="flex items-start gap-4 py-5 first:pt-0 last:pb-0">
                  <IconBadge src={e.icon} accent={e.accent} />
                  <div>
                    <h3 className="text-[16px] font-bold text-[var(--text-primary)] mb-1.5">
                      <span style={{ color: e.accent }}>{e.n}.</span> {e.title}
                    </h3>
                    <p className="text-[12.5px] text-[var(--text-secondary)] leading-relaxed">{e.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── ROW 2 — Example deliverables ── */}
          <div className={panelCls}>
            <PanelLabel color={CYAN}>Example Deliverables</PanelLabel>
            <div className="flex-1 flex items-center gap-5">
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                {DELIVERABLES.map((d) => (
                  <div key={d.t} className="flex items-start gap-2.5">
                    <span
                      className="grid place-items-center w-[18px] h-[18px] rounded-full shrink-0 mt-0.5"
                      style={{ border: `1.5px solid ${d.c}` }}
                    >
                      <Check size={11} style={{ color: d.c }} strokeWidth={3} />
                    </span>
                    <span className="text-[12.5px] text-[var(--text-secondary)] leading-snug">{d.t}</span>
                  </div>
                ))}
              </div>
              <Image
                src="/images/whatyouget/deliverables.png"
                alt="Deliverables document"
                width={1223}
                height={1286}
                style={{ width: 132, height: "auto" }}
                className="hidden md:block shrink-0"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
