import Image from "next/image";
import { Check, CalendarDays } from "lucide-react";
import Container from "@/components/ui/Container";

const BLUE = "#3b82f6";
const PURPLE = "#9b6bff";
const CYAN = "#19c8ff";

/* ── Hand-drawn neon icons ── */
type IconProps = { c: string };
const S = (c: string) => ({ stroke: c, strokeWidth: 2.1, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, fill: "none" });

function IconClipboard({ c }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <rect x="11" y="9" width="26" height="32" rx="3.5" {...S(c)} />
      <rect x="18" y="6" width="12" height="7" rx="2.5" {...S(c)} />
      <path d="M17 20 H31 M17 25 H31 M17 30 H27" {...S(c)} strokeWidth={1.7} />
      <path d="M16 34 l3 3 l6 -7" {...S(c)} />
    </svg>
  );
}
function IconShield({ c }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <path d="M24 6 L38 11 V23 C38 33 24 42 24 42 C24 42 10 33 10 23 V11 Z" {...S(c)} />
      <path d="M17 24 l5 5 l9 -11" {...S(c)} />
    </svg>
  );
}
function IconBell({ c }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <circle cx="24" cy="11" r="1.6" fill={c} />
      <path d="M24 13 V11" {...S(c)} />
      <path d="M24 13 C18.5 13 15 16.5 15 23 C15 28.5 13.5 30.5 12 32 H36 C34.5 30.5 33 28.5 33 23 C33 16.5 29.5 13 24 13 Z" {...S(c)} />
      <path d="M20.5 32 a3.5 3 0 0 0 7 0" {...S(c)} />
      <path d="M38 14 l3 -3 M10 14 l-3 -3" {...S(c)} strokeWidth={1.7} />
    </svg>
  );
}
function IconMonitor({ c }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <rect x="6" y="9" width="36" height="24" rx="3" {...S(c)} />
      <path d="M19 38 H29 M24 33 V38 M16 41 H32" {...S(c)} strokeWidth={1.8} />
      <path d="M13 26 V21 M19 26 V17 M25 26 l3 -4" {...S(c)} strokeWidth={1.8} />
      <path d="M25 26 h3 l2 -5 l3 9 l2 -4 h3" {...S(c)} strokeWidth={1.8} />
    </svg>
  );
}
function IconCap({ c }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <path d="M24 11 L42 19 L24 27 L6 19 Z" {...S(c)} />
      <path d="M13 22 V31 C13 31 17 35 24 35 C31 35 35 31 35 31 V22" {...S(c)} />
      <path d="M42 19 V29" {...S(c)} strokeWidth={1.8} />
      <circle cx="42" cy="31" r="1.6" fill={c} />
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

const ICONS: Record<string, (p: IconProps) => React.ReactElement> = {
  clipboard: IconClipboard,
  shield: IconShield,
  bell: IconBell,
  monitor: IconMonitor,
  cap: IconCap,
  handshake: IconHandshake,
};

function IconBadge({ name, accent, size = 64 }: { name: string; accent: string; size?: number }) {
  const Icon = ICONS[name];
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
  { icon: "clipboard", accent: CYAN, title: "Compliance by design", desc: "Article 21 mapped to real workflows with a complete evidence register and a board review cadence." },
  { icon: "shield", accent: PURPLE, title: "Clinical safe security controls", desc: "Segmentation for medical devices, secure vendor access, role appropriate access for rotating clinicians and privacy controls aligned to GDPR." },
  { icon: "bell", accent: CYAN, title: "Incident readiness and reporting", desc: "Ransomware and device compromise playbooks, early warning after twenty four hours, status after seventy two hours and a final report after one month with regulator communicators rehearsed." },
  { icon: "monitor", accent: PURPLE, title: "Evidence and monitoring", desc: "Automated evidence collection, residual risk dashboards and live compliance across your existing tooling." },
];

const DELIVERY = [
  { accent: PURPLE, title: "Discover", weeks: "Week 1–3", desc: "Assess current state and clinical constraints." },
  { accent: PURPLE, title: "Design", weeks: "Week 4–6", desc: "Prioritise safeguards, roles and workflows." },
  { accent: PURPLE, title: "Implement", weeks: "Week 7–12", desc: "Embed security controls and monitoring." },
  { accent: PURPLE, title: "Validate", weeks: "Week 13–16", desc: "Readiness review, evidence pack and handover." },
];

const DELIVERABLES = [
  { t: "NIS2 gap assessment and roadmap", c: CYAN },
  { t: "Vulnerability and patching", c: PURPLE },
  { t: "Risk and asset governance", c: CYAN },
  { t: "Security training and simulations", c: PURPLE },
  { t: "Business continuity and backup", c: CYAN },
  { t: "Sixteen week executive timeline", c: PURPLE },
  { t: "Supplier and vendor risk", c: CYAN },
  { t: "Partnerships and related services", c: PURPLE },
];

const ENABLEMENT = [
  { n: 5, icon: "cap", accent: PURPLE, title: "Security training and simulations", desc: "Role based training for clinicians, IT and executives plus phishing simulations tailored to clinical workflows." },
  { n: 6, icon: "handshake", accent: CYAN, title: "Partnerships and related services", desc: "Partnerships for healthcare ready security and automated evidence. Related services include ISO 27001 certification readiness and accredited training." },
];

const panelCls =
  "rounded-large border border-[var(--border-default)] bg-[rgba(7,14,34,0.5)] p-6 md:p-7 h-full flex flex-col";

export default function HealthcareWhatYouGet() {
  return (
    <section className="py-12 md:py-16 section-rule" aria-labelledby="hc-wyg-heading">
      <Container>
        {/* Header */}
        <div className="border-l-2 border-[var(--purple)] pl-5 mb-9">
          <h2 id="hc-wyg-heading" className="text-[clamp(32px,4vw,52px)] font-extrabold leading-[1.02] tracking-tight text-[var(--text-primary)] mb-3">
            What you <span className="text-grad-purple">get</span>
          </h2>
          <p className="text-[14px] md:text-[15px] text-[var(--text-secondary)] leading-relaxed max-w-[480px]">
            Executive outcomes and delivery workstreams that make NIS2 security workable for clinical teams.
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
                  <IconBadge name={c.icon} accent={c.accent} size={66} />
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
                        <span
                          className="grid place-items-center w-9 h-9 rounded-full shrink-0 text-[13px] font-bold"
                          style={{ border: `1.5px solid ${d.accent}`, color: d.accent }}
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
                  <Image
                    src="/images/healthcare-wyg/tar8.png"
                    alt="Hospital hologram"
                    width={1254}
                    height={1254}
                    className="w-full h-auto scale-[1.28] mix-blend-lighten"
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

          {/* ── ROW 2 — Example deliverables ── */}
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

          {/* ── ROW 2 — Enablement ── */}
          <div className={panelCls}>
            <PanelLabel color={CYAN}>Enablement</PanelLabel>
            <div className="divide-y divide-[var(--border-default)] flex-1 flex flex-col justify-center">
              {ENABLEMENT.map((e) => (
                <div key={e.n} className="flex items-start gap-4 py-5 first:pt-0 last:pb-0">
                  <IconBadge name={e.icon} accent={e.accent} size={72} />
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
