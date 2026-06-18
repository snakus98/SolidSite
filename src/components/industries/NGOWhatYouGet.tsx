import Image from "next/image";
import { CalendarDays } from "lucide-react";
import Container from "@/components/ui/Container";

const CYAN = "#19c8ff";
const PURPLE = "#9b6bff";
const BLUE = "#3b82f6";
const accentFor = (i: number) => (i % 2 === 0 ? BLUE : PURPLE);

const s = (w = 2) => ({
  stroke: "currentColor",
  strokeWidth: w,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  fill: "none",
});

/* ── Hand-drawn icons (colour inherited from the badge via currentColor) ── */
function IconClipboardLock() {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <rect x="12" y="9" width="24" height="31" rx="3" {...s()} />
      <rect x="18" y="6" width="12" height="6.5" rx="2.5" {...s(1.7)} />
      <path d="M17 18 H31 M17 22 H27" {...s(1.6)} />
      <rect x="18.5" y="26" width="11" height="8" rx="1.6" {...s(1.7)} />
      <path d="M21 26 v-2 a3 3 0 0 1 6 0 V26" {...s(1.7)} />
    </svg>
  );
}
function IconPeople() {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <circle cx="19" cy="17" r="6" {...s()} />
      <path d="M8 38 c0 -7 5 -11 11 -11 c6 0 11 4 11 11" {...s()} />
      <path d="M32 13 a5.5 5.5 0 0 1 0 11" {...s(1.9)} />
      <path d="M33 28 c5 0 9 4 9 10" {...s(1.9)} />
    </svg>
  );
}
function IconShieldBars() {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <path d="M24 6 L38 11 V23 C38 33 24 42 24 42 C24 42 10 33 10 23 V11 Z" {...s()} />
      <path d="M19 30 V25 M24 30 V19 M29 30 V23" {...s(1.9)} />
    </svg>
  );
}
function IconPersonCheck() {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <circle cx="20" cy="16" r="6.5" {...s()} />
      <path d="M8 38 c0 -7 5.5 -12 12 -12 c2.1 0 4.1 0.5 5.8 1.4" {...s()} />
      <circle cx="33" cy="33" r="7.5" {...s(1.8)} />
      <path d="M29.5 33 l2.3 2.3 l4 -4.6" {...s(1.9)} />
    </svg>
  );
}
function IconDatabase() {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <ellipse cx="24" cy="11" rx="13" ry="4.5" {...s()} />
      <path d="M11 11 V21 C11 23.5 16.8 25.5 24 25.5 C31.2 25.5 37 23.5 37 21 V11" {...s()} />
      <path d="M11 21 V31 C11 33.5 16.8 35.5 24 35.5 C31.2 35.5 37 33.5 37 31 V21" {...s()} />
    </svg>
  );
}
function IconKey() {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <circle cx="15" cy="24" r="7.5" {...s()} />
      <circle cx="15" cy="24" r="2.6" {...s(1.6)} />
      <path d="M22.5 24 H40" {...s()} />
      <path d="M34 24 V30 M40 24 V29" {...s()} />
    </svg>
  );
}
function IconNetwork() {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <path d="M22 15 L13 31 M26 15 L35 31 M16 34 H32" {...s(1.8)} />
      <circle cx="24" cy="12" r="4.2" {...s()} fill="#0a1430" />
      <circle cx="12" cy="35" r="4.2" {...s()} fill="#0a1430" />
      <circle cx="36" cy="35" r="4.2" {...s()} fill="#0a1430" />
    </svg>
  );
}
function IconBell() {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <circle cx="24" cy="11" r="1.6" fill="currentColor" />
      <path d="M24 13 V11" {...s()} />
      <path d="M24 13 C18.5 13 15 16.5 15 23 C15 28.5 13.5 30.5 12 32 H36 C34.5 30.5 33 28.5 33 23 C33 16.5 29.5 13 24 13 Z" {...s()} />
      <path d="M20.5 32 a3.5 3 0 0 0 7 0" {...s()} />
      <path d="M38 14 l3 -3 M10 14 l-3 -3" {...s(1.7)} />
    </svg>
  );
}
function IconHandshake() {
  return (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <g {...s(1.6)}>
        <path d="m11 17 2 2a1 1 0 1 0 3-3" />
        <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
        <path d="m21 3 1 11h-2" />
        <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
        <path d="M3 4h8" />
      </g>
    </svg>
  );
}
function IconLaptopLock() {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <path d="M13 11 H35 V28 H13 Z" {...s()} />
      <path d="M8 33 H40 L37.5 28 H10.5 Z" {...s(1.8)} />
      <rect x="20" y="18" width="8" height="6.5" rx="1.4" {...s(1.6)} />
      <path d="M21.5 18 v-1.5 a2.5 2.5 0 0 1 5 0 V18" {...s(1.5)} />
    </svg>
  );
}
function IconDocReport() {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <path d="M13 6 H29 L35 12 V42 H13 Z" {...s()} />
      <path d="M29 6 V12 H35" {...s(1.6)} />
      <path d="M18 19 H30 M18 25 H30 M18 31 H26" {...s(1.7)} />
    </svg>
  );
}
function IconCap() {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <path d="M24 11 L42 19 L24 27 L6 19 Z" {...s()} />
      <path d="M13 22 V31 C13 31 17 35 24 35 C31 35 35 31 35 31 V22" {...s()} />
      <path d="M42 19 V29" {...s(1.8)} />
      <circle cx="42" cy="31" r="1.6" fill="currentColor" />
    </svg>
  );
}

function Badge({ children, size, accent }: { children: React.ReactNode; size: number; accent: string }) {
  return (
    <span
      className="grid place-items-center rounded-full shrink-0"
      style={{ width: size, height: size, background: `${accent}14`, border: `1px solid ${accent}50` }}
    >
      <span style={{ width: size * 0.56, height: size * 0.56, color: accent }}>
        {children}
      </span>
    </span>
  );
}

function PanelLabel({ children, color = CYAN }: { children: React.ReactNode; color?: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="text-[12px] font-bold tracking-[0.2em] uppercase" style={{ color }}>{children}</span>
      <span className="flex-1 h-px bg-[var(--border-default)]" />
    </div>
  );
}

const CORE = [
  { Icon: IconClipboardLock, title: "GDPR compliance built for operations", desc: "Data inventories, lawful bases, SCCs, retention policies, DSAR workflows, and privacy impact assessments." },
  { Icon: IconPeople, title: "Security that works with limited resources", desc: "Identity, device, and detection controls configured for volunteer churn, shared hardware, and bandwidth constraints." },
  { Icon: IconShieldBars, title: "Stakeholder assurance", desc: "Dashboards, evidence packs, and management reviews that prove to boards, funders, and regulators that controls are real." },
  { Icon: IconPersonCheck, title: "Your team stays in control", desc: "Hands-on enablement plus optional PECB-accredited training so operations—not consultants—run the security programme." },
];

const DELIVERY = [
  { title: "Discover", weeks: "Weeks 1–3", desc: "Understand where you operate, the data you protect, and your stakeholder realities." },
  { title: "Build the foundation", weeks: "Weeks 4–6", desc: "MFA, backups, logging, and core privacy/security controls." },
  { title: "Strengthen resilience", weeks: "Weeks 7–10", desc: "Resilience measures, incident drills, and third-party control hardening." },
  { title: "Handover & operate", weeks: "Weeks 11–12", desc: "Independent operation, reporting packs, and practical handover." },
];

// ordered so a 2-col row-flow grid yields the reference column layout
const WORKSTREAMS = [
  { Icon: IconDatabase, label: "Privacy & Data Protection Foundation" },
  { Icon: IconBell, label: "Incident Response & Safeguarding" },
  { Icon: IconKey, label: "Identity & Access for Volunteer Reality" },
  { Icon: IconHandshake, label: "Third-Party Risk Management" },
  { Icon: IconLaptopLock, label: "Endpoint & Data Security" },
  { Icon: IconDocReport, label: "Automated Evidence & Reporting" },
];

const ENABLEMENT = [
  { n: 5, Icon: IconNetwork, title: "Technology partnerships", desc: "Microsoft for nonprofit licensing, Vanta for automated monitoring, and security vendors selected for NGO fit." },
  { n: 6, Icon: IconCap, title: "Related services", desc: "PECB-Accredited Training for lasting capability and ISO 27001:2022 Certification Readiness when donor requirements demand it." },
];

const panelCls =
  "rounded-large border border-[var(--border-default)] bg-[rgba(7,14,34,0.5)] p-6 md:p-7 h-full flex flex-col";

export default function NGOWhatYouGet() {
  return (
    <section className="py-12 md:py-16 section-rule" aria-labelledby="ngo-wyg-heading">
      <Container>
        {/* Header */}
        <div className="border-l-2 border-[var(--purple)] pl-5 mb-9">
          <h2 id="ngo-wyg-heading" className="text-[clamp(32px,4vw,52px)] font-extrabold leading-[1.02] tracking-tight text-[var(--text-primary)] mb-3">
            What you <span className="text-grad-purple">get</span>
          </h2>
          <p className="text-[14px] md:text-[15px] text-[var(--text-secondary)] leading-relaxed max-w-[480px]">
            Outcomes, delivery workstreams, and the partnerships that keep NGO security grounded in reality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-5 items-stretch">
          {/* ── ROW 1 — Core capabilities (2x2 cards) ── */}
          <div className={panelCls}>
            <PanelLabel>Core Capabilities</PanelLabel>
            <div className="grid sm:grid-cols-2 gap-4 flex-1 [grid-auto-rows:1fr]">
              {CORE.map((c, i) => (
                <div
                  key={c.title}
                  className="rounded-large border bg-[rgba(7,16,40,0.5)] p-5 flex flex-col transition-all duration-300 hover:-translate-y-1"
                  style={{ borderColor: `${accentFor(i)}3a` }}
                >
                  <Badge size={54} accent={accentFor(i)}><c.Icon /></Badge>
                  <h3 className="text-[15px] font-bold text-[var(--text-primary)] mt-3 mb-1.5 leading-snug">
                    <span style={{ color: accentFor(i) }}>{i + 1}.</span> {c.title}
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
                          style={{ border: `1.5px solid ${accentFor(i)}`, color: accentFor(i) }}
                        >
                          {i + 1}
                        </span>
                        {i < DELIVERY.length - 1 && (
                          <span className="w-px flex-1 my-1 border-l border-dashed border-[var(--border-default)]" />
                        )}
                      </div>
                      <div className="pb-5">
                        <h4 className="text-[15px] font-bold text-[var(--text-primary)] leading-tight">{d.title}</h4>
                        <p className="text-[11px] font-semibold text-[var(--cyan)] mt-0.5">{d.weeks}</p>
                        <p className="text-[12px] text-[var(--text-secondary)] leading-relaxed mt-0.5">{d.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {/* image + badge */}
                <div className="sm:w-[54%] flex flex-col items-center justify-center gap-5">
                  <Image
                    src="/images/ngo-wyg/bar1.png"
                    alt="NGO security operations hologram"
                    width={1402}
                    height={1122}
                    className="w-full h-auto scale-[1.34] mix-blend-lighten"
                    unoptimized
                  />
                  <div className="inline-flex items-center gap-2.5 px-4 py-2.5 mt-6 rounded-[10px] border border-[var(--border-default)] bg-[rgba(7,17,44,0.6)]">
                    <CalendarDays size={18} className="text-[var(--cyan)]" />
                    <span className="text-[14px] font-semibold text-[var(--text-primary)]">
                      <span className="text-[var(--cyan)]">12-week</span> programme
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── ROW 2 — Delivery workstreams ── */}
          <div className={panelCls}>
            <PanelLabel>Delivery Workstreams</PanelLabel>
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 content-center">
              {WORKSTREAMS.map((w, i) => (
                <div key={w.label} className="flex items-center gap-3.5">
                  <Badge size={46} accent={accentFor(i)}><w.Icon /></Badge>
                  <span className="text-[13.5px] font-medium text-[var(--text-primary)] leading-snug">{w.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── ROW 2 — Enablement & technology partnerships ── */}
          <div className={panelCls}>
            <PanelLabel>Enablement &amp; Technology Partnerships</PanelLabel>
            <div className="divide-y divide-[var(--border-default)] flex-1 flex flex-col justify-center">
              {ENABLEMENT.map((e, i) => (
                <div key={e.n} className="flex items-start gap-4 py-5 first:pt-0 last:pb-0">
                  <Badge size={64} accent={accentFor(i)}><e.Icon /></Badge>
                  <div>
                    <h3 className="text-[16px] font-bold text-[var(--text-primary)] mb-1.5">
                      <span style={{ color: accentFor(i) }}>{e.n}.</span> {e.title}
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
