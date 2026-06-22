import { Check, CalendarDays } from "lucide-react";
import Container from "@/components/ui/Container";
import GRCDeliveryVisual from "@/components/grc/GRCDeliveryVisual";

const BLUE = "#3b82f6";
const PURPLE = "#9b6bff";
const CYAN = "#19c8ff";

/* ── Neon line icons ── */
type IconProps = { c: string };
const S = (c: string) => ({ stroke: c, strokeWidth: 2.1, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, fill: "none" });

function IconGovernance({ c }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <path d="M24 6 L40 14 H8 Z" {...S(c)} />
      <path d="M12 14 V34 M20 14 V34 M28 14 V34 M36 14 V34" {...S(c)} strokeWidth={1.9} />
      <path d="M7 34 H41 M9 40 H39" {...S(c)} />
    </svg>
  );
}
function IconRiskRegister({ c }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <path d="M24 8 L42 38 H6 Z" {...S(c)} />
      <path d="M24 19 V28" {...S(c)} />
      <circle cx="24" cy="33" r="1.4" fill={c} />
    </svg>
  );
}
function IconControlShield({ c }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <path d="M24 6 L38 11 V23 C38 33 24 42 24 42 C24 42 10 33 10 23 V11 Z" {...S(c)} />
      <path d="M17 24 l5 5 l9 -11" {...S(c)} />
    </svg>
  );
}
function IconAuditReport({ c }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <rect x="7" y="9" width="34" height="24" rx="3" {...S(c)} />
      <path d="M13 27 V22 M20 27 V17 M27 27 V20 M34 27 V14" {...S(c)} strokeWidth={1.9} />
      <path d="M18 38 H30 M24 33 V38" {...S(c)} strokeWidth={1.8} />
    </svg>
  );
}
function IconLayers({ c }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <path d="M24 7 L42 16 L24 25 L6 16 Z" {...S(c)} />
      <path d="M6 24 L24 33 L42 24" {...S(c)} strokeWidth={1.9} />
      <path d="M6 32 L24 41 L42 32" {...S(c)} strokeWidth={1.9} />
    </svg>
  );
}
function IconHandshake({ c }: IconProps) {
  const s = { stroke: c, strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, fill: "none" };
  return (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <path d="m11 17 2 2a1 1 0 1 0 3-3" {...s} />
      <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" {...s} />
      <path d="m21 3 1 11h-2" {...s} />
      <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" {...s} />
      <path d="M3 4h8" {...s} />
    </svg>
  );
}

function IconBadge({ Icon, accent, size = 64 }: { Icon: (p: IconProps) => React.ReactElement; accent: string; size?: number }) {
  return (
    <span
      className="grid place-items-center rounded-full shrink-0"
      style={{ width: size, height: size, background: `${accent}14`, border: `1px solid ${accent}55` }}
    >
      <span style={{ width: size * 0.62, height: size * 0.62, filter: `drop-shadow(0 0 5px ${accent}cc)` }}>
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
  { Icon: IconGovernance, accent: CYAN, title: "Governance & policy management", desc: "Maintain policies, review cycles, exceptions, and approvals in a clear governance structure." },
  { Icon: IconRiskRegister, accent: PURPLE, title: "Enterprise risk register", desc: "Capture risks, score impact and likelihood, assign treatment plans, and track residual risk." },
  { Icon: IconControlShield, accent: CYAN, title: "Control library & monitoring", desc: "Map controls to frameworks and monitor tests, gaps, incidents, and remediation." },
  { Icon: IconAuditReport, accent: PURPLE, title: "Audit, evidence & reporting", desc: "Organise evidence, findings, CAPAs, and board-ready dashboards across audits and reviews." },
];

const DELIVERY = [
  { title: "Discover", weeks: "Weeks 1–2", desc: "Assess obligations, stakeholders, and current maturity." },
  { title: "Design", weeks: "Weeks 3–4", desc: "Build the GRC taxonomy, risk model, and control library." },
  { title: "Implement", weeks: "Weeks 5–10", desc: "Configure workflows, evidence collection, dashboards, and approvals." },
  { title: "Operate", weeks: "Weeks 11–14", desc: "Launch review cycles, reporting packs, and continuous improvement." },
];

const DELIVERABLES = [
  { t: "GRC operating model", c: CYAN },
  { t: "Compliance obligations register", c: PURPLE },
  { t: "Risk register and treatment plan", c: CYAN },
  { t: "Policy & exception workflow", c: PURPLE },
  { t: "Control matrix", c: CYAN },
  { t: "Audit & evidence pack", c: PURPLE },
];

const ENABLEMENT = [
  { n: 5, Icon: IconLayers, accent: PURPLE, title: "Framework alignment & automation", desc: "Map ISO 27001, NIS2, GDPR, and SOC 2 requirements to a shared control set and automate recurring reviews." },
  { n: 6, Icon: IconHandshake, accent: CYAN, title: "Board-ready reporting & training", desc: "Provide management dashboards, committee packs, and role-based training so the programme stays alive." },
];

const panelCls =
  "rounded-large border border-[var(--border-default)] bg-[rgba(7,14,34,0.5)] p-6 md:p-7 h-full flex flex-col";

export default function GRCWhatYouGet() {
  return (
    <section className="py-12 md:py-16 section-rule" aria-labelledby="grc-wyg-heading">
      <Container>
        {/* Header */}
        <div className="border-l-2 border-[var(--purple)] pl-5 mb-9">
          <h2 id="grc-wyg-heading" className="text-[clamp(32px,4vw,52px)] font-extrabold leading-[1.02] tracking-tight text-[var(--text-primary)] mb-3">
            What you <span className="text-grad-purple">get</span>
          </h2>
          <p className="text-[14px] md:text-[15px] text-[var(--text-secondary)] leading-relaxed max-w-[560px]">
            Outcomes, delivery workstreams, and the operating layer that turns GRC into a practical
            management system.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-5 items-stretch">
          {/* ── Core capabilities (2x2) ── */}
          <div className={panelCls}>
            <PanelLabel color={CYAN}>Core Capabilities</PanelLabel>
            <div className="grid sm:grid-cols-2 gap-4 flex-1 [grid-auto-rows:1fr]">
              {CORE.map((c, i) => (
                <div
                  key={c.title}
                  className="rounded-large border bg-[rgba(7,16,40,0.5)] p-5 flex flex-col transition-all duration-300 hover:-translate-y-1"
                  style={{ borderColor: `${c.accent}3a` }}
                >
                  <IconBadge Icon={c.Icon} accent={c.accent} size={66} />
                  <h3 className="text-[15px] font-bold text-[var(--text-primary)] mt-3 mb-1.5 leading-snug">
                    <span style={{ color: c.accent }}>{i + 1}.</span> {c.title}
                  </h3>
                  <p className="text-[12px] text-[var(--text-secondary)] leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Delivery model ── */}
          <div className={panelCls}>
            <PanelLabel color={PURPLE}>Delivery Model</PanelLabel>
            <div className="flex-1 flex flex-col justify-center">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-1">
                  {DELIVERY.map((d, i) => (
                    <div key={d.title} className="flex gap-3.5">
                      <div className="flex flex-col items-center">
                        <span
                          className="grid place-items-center w-9 h-9 rounded-full shrink-0 text-[13px] font-bold"
                          style={{ border: `1.5px solid ${PURPLE}`, color: PURPLE }}
                        >
                          {i + 1}
                        </span>
                        {i < DELIVERY.length - 1 && (
                          <span className="w-px flex-1 my-1 border-l border-dashed border-[var(--border-default)]" />
                        )}
                      </div>
                      <div className="pb-5">
                        <h4 className="text-[15px] font-bold text-[var(--text-primary)] leading-tight">{d.title}</h4>
                        <p className="text-[11px] text-[var(--text-muted)] mt-0.5">{d.weeks}</p>
                        <p className="text-[12px] text-[var(--text-secondary)] leading-relaxed mt-0.5">{d.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {/* hologram + badge */}
                <div className="sm:w-[52%] flex flex-col items-center justify-center gap-5">
                  <GRCDeliveryVisual className="max-w-[300px]" />
                  <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-[10px] border border-[var(--border-default)] bg-[rgba(7,17,44,0.6)]">
                    <CalendarDays size={18} className="text-[var(--cyan)]" />
                    <span className="text-[14px] font-semibold text-[var(--text-primary)]">
                      <span className="text-[var(--cyan)]">14-week</span> delivery
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Example deliverables ── */}
          <div className={panelCls}>
            <PanelLabel color={CYAN}>Example Deliverables</PanelLabel>
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 content-center">
              {DELIVERABLES.map((d) => (
                <div key={d.t} className="flex items-start gap-2.5">
                  <span
                    className="grid place-items-center w-[18px] h-[18px] rounded-full shrink-0 mt-0.5"
                    style={{ border: `1.5px solid ${d.c}` }}
                  >
                    <Check size={11} style={{ color: d.c }} strokeWidth={3} />
                  </span>
                  <span className="text-[13px] text-[var(--text-secondary)] leading-snug">{d.t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Enablement ── */}
          <div className={panelCls}>
            <PanelLabel color={CYAN}>Enablement</PanelLabel>
            <div className="divide-y divide-[var(--border-default)] flex-1 flex flex-col justify-center">
              {ENABLEMENT.map((e) => (
                <div key={e.n} className="flex items-start gap-4 py-5 first:pt-0 last:pb-0">
                  <IconBadge Icon={e.Icon} accent={e.accent} size={72} />
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
        </div>
      </Container>
    </section>
  );
}
