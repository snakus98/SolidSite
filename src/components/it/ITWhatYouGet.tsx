import Image from "next/image";
import { Check, CalendarDays } from "lucide-react";
import Container from "@/components/ui/Container";

const PURPLE = "#9b6bff";
const CYAN = "#19c8ff";

/* ── Neon line icons ── */
type IconProps = { c: string };
const S = (c: string) => ({ stroke: c, strokeWidth: 2.1, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, fill: "none" });

function IconCloudOpt({ c }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <path d="M16 32 a8 8 0 0 1 -1 -16 a11 11 0 0 1 21 3 a7 7 0 0 1 -2 13 Z" {...S(c)} />
      <path d="M19 26 l3 -4 l4 3 l4 -6" {...S(c)} strokeWidth={1.9} />
    </svg>
  );
}
function IconIdentity({ c }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <circle cx="24" cy="17" r="7" {...S(c)} />
      <path d="M11 39 c0 -8 6 -12 13 -12 c7 0 13 4 13 12" {...S(c)} />
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
function IconSupport({ c }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <path d="M9 11 H39 V31 H22 L14 38 V31 H9 Z" {...S(c)} />
      <path d="M16 19 H32 M16 24 H27" {...S(c)} strokeWidth={1.8} />
    </svg>
  );
}
function IconGear({ c }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <circle cx="24" cy="24" r="6" {...S(c)} />
      <path d="M24 6 V11 M24 37 V42 M6 24 H11 M37 24 H42 M11.5 11.5 L15 15 M33 33 L36.5 36.5 M36.5 11.5 L33 15 M15 33 L11.5 36.5" {...S(c)} strokeWidth={1.9} />
    </svg>
  );
}
function IconChart({ c }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <path d="M8 8 V40 H40" {...S(c)} />
      <rect x="14" y="26" width="5" height="10" rx="1.2" {...S(c)} strokeWidth={1.8} />
      <rect x="23" y="20" width="5" height="16" rx="1.2" {...S(c)} strokeWidth={1.8} />
      <rect x="32" y="14" width="5" height="22" rx="1.2" {...S(c)} strokeWidth={1.8} />
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
  { Icon: IconCloudOpt, accent: CYAN, title: "Infrastructure & cloud optimisation", desc: "Optimise cloud spend, right-size resources, and improve performance, availability, and scalability." },
  { Icon: IconIdentity, accent: PURPLE, title: "Identity, endpoint & access management", desc: "Strengthen identity controls, manage endpoints securely, and simplify access for users." },
  { Icon: IconShield, accent: CYAN, title: "Monitoring, continuity & resilience", desc: "Build visibility, detect issues early, and ensure continuity through backups and disaster readiness." },
  { Icon: IconSupport, accent: PURPLE, title: "Support workflows & operational reporting", desc: "Streamline support processes and deliver clear reporting for better decisions." },
];

const DELIVERY = [
  { title: "Discover", weeks: "Weeks 1–2", desc: "Assess environment, tools, users, and business objectives." },
  { title: "Design", weeks: "Weeks 3–4", desc: "Define target architecture, processes, and operating model." },
  { title: "Implement", weeks: "Weeks 5–10", desc: "Deploy solutions, integrate systems, and migrate with minimal risk." },
  { title: "Operate", weeks: "Weeks 11–14", desc: "Optimise performance, ensure resilience, and drive continuous improvement." },
];

const DELIVERABLES = [
  { t: "IT operating model", c: CYAN },
  { t: "Support workflow design", c: PURPLE },
  { t: "Asset & service inventory", c: CYAN },
  { t: "Monitoring & continuity pack", c: PURPLE },
  { t: "Cloud optimisation roadmap", c: CYAN },
  { t: "Executive dashboard", c: PURPLE },
];

const ENABLEMENT = [
  { n: 5, Icon: IconGear, accent: PURPLE, title: "Automation & standardisation", desc: "Automate repetitive tasks, enforce standards, and reduce manual effort." },
  { n: 6, Icon: IconChart, accent: CYAN, title: "Operational reporting & training", desc: "Provide dashboards, documentation, and training for your teams." },
];

const panelCls =
  "rounded-large border border-[var(--border-default)] bg-[rgba(7,14,34,0.5)] p-6 md:p-7 h-full flex flex-col";

export default function ITWhatYouGet() {
  return (
    <section className="py-12 md:py-16 section-rule" aria-labelledby="it-wyg-heading">
      <Container>
        {/* Header */}
        <div className="border-l-2 border-[var(--purple)] pl-5 mb-9">
          <h2 id="it-wyg-heading" className="text-[clamp(32px,4vw,52px)] font-extrabold leading-[1.02] tracking-tight text-[var(--text-primary)] mb-3">
            What you <span className="text-grad-purple">get</span>
          </h2>
          <p className="text-[14px] md:text-[15px] text-[var(--text-secondary)] leading-relaxed max-w-[560px]">
            Outcomes, delivery workstreams, and the operating layer that turns IT into a practical,
            scalable management system.
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
                {/* illustration + delivery badge */}
                <div className="sm:w-[52%] flex flex-col items-center justify-center gap-5">
                  <Image
                    src="/images/it-delivery.png"
                    alt="IT delivery model illustration with cloud, servers, monitoring, and security shield"
                    width={1254}
                    height={1254}
                    className="w-full h-auto max-w-[300px] mix-blend-lighten"
                    unoptimized
                  />
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
