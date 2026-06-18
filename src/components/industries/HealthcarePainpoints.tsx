"use client";
import { useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { ChevronLeft, ChevronRight } from "lucide-react";

const g = (id: string) => (
  <defs>
    <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#19c8ff" />
      <stop offset="100%" stopColor="#9b6bff" />
    </linearGradient>
  </defs>
);

function IconClinical() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-11 h-11" strokeLinecap="round" strokeLinejoin="round">
      {g("pw1")}
      <path d="M18 8 L30 12.5 V24 C30 31 18 38 18 38 C18 38 6 31 6 24 V12.5 Z" stroke="url(#pw1)" strokeWidth="2" />
      <path d="M9 24 H13 L15 19 L18.5 29 L21 23 L23 24 H27" stroke="url(#pw1)" strokeWidth="1.8" />
      <rect x="31" y="6" width="12" height="12" rx="3.5" stroke="url(#pw1)" strokeWidth="1.8" />
      <path d="M37 9.5 V14.5 M34.5 12 H39.5" stroke="url(#pw1)" strokeWidth="1.8" />
    </svg>
  );
}

function IconDoc() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-11 h-11" strokeLinecap="round" strokeLinejoin="round">
      {g("pw2")}
      <path d="M11 7 H27 L35 15 V41 H11 Z" stroke="url(#pw2)" strokeWidth="2" />
      <path d="M27 7 V15 H35" stroke="url(#pw2)" strokeWidth="1.6" />
      <path d="M16 19 H29 M16 25 H29 M16 31 H23" stroke="url(#pw2)" strokeWidth="1.6" />
      <circle cx="33" cy="34" r="8" fill="#0a1430" stroke="url(#pw2)" strokeWidth="1.8" />
      <path d="M29.5 34 L32 36.5 L37 30.5" stroke="url(#pw2)" strokeWidth="1.9" />
    </svg>
  );
}

function IconDevice() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-11 h-11" strokeLinecap="round" strokeLinejoin="round">
      {g("pw3")}
      <rect x="5" y="9" width="28" height="20" rx="2.5" stroke="url(#pw3)" strokeWidth="2" />
      <path d="M9 20 H13 L15 16 L18 24 L20 19 L22 20 H25" stroke="url(#pw3)" strokeWidth="1.6" />
      <path d="M19 29 V33 M14 33 H24" stroke="url(#pw3)" strokeWidth="1.8" />
      <path d="M34 23 L42 26 V32 C42 36.5 34 41 34 41 C34 41 26 36.5 26 32 V26 Z" fill="#0a1430" stroke="url(#pw3)" strokeWidth="1.8" />
      <rect x="31" y="31.5" width="6" height="5" rx="1" stroke="url(#pw3)" strokeWidth="1.4" />
      <path d="M32 31.5 V30 A2 2 0 0 1 36 30 V31.5" stroke="url(#pw3)" strokeWidth="1.3" />
    </svg>
  );
}

function IconBoards() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-11 h-11" strokeLinecap="round" strokeLinejoin="round">
      {g("pw4")}
      <rect x="5" y="8" width="38" height="31" rx="3" stroke="url(#pw4)" strokeWidth="2" />
      <path d="M5 15 H43" stroke="url(#pw4)" strokeWidth="1.6" />
      <circle cx="9.5" cy="11.5" r="1" fill="url(#pw4)" />
      <circle cx="13.5" cy="11.5" r="1" fill="url(#pw4)" />
      <path d="M14 22 L19 24 V28 C19 31.5 14 34.5 14 34.5 C14 34.5 9 31.5 9 28 V24 Z" stroke="url(#pw4)" strokeWidth="1.6" />
      <path d="M26 34 V25 M31 34 V20 M36 34 V28" stroke="url(#pw4)" strokeWidth="1.8" />
    </svg>
  );
}

type PP = { icon: React.ReactNode; title: string; risk: string[]; deliver: string[] };

const PAINPOINTS: PP[] = [
  {
    icon: <IconClinical />,
    title: "Clinical environments demand tailored security",
    risk: [
      "Standard playbooks fail in theatres, wards, imaging suites and labs where downtime is limited and estates are heterogeneous.",
      "Rotating clinicians, contractors and legacy devices make access and patching difficult.",
    ],
    deliver: [
      "Controls embedded in clinical workflows, compensating measures, and downtime playbooks that keep care running.",
      "Role appropriate access, vendor gateways and monitored segments that reduce exposure without slowing staff.",
    ],
  },
  {
    icon: <IconDoc />,
    title: "NIS2 obligations and deadlines",
    risk: [
      "Essential and important entities must implement Article 21 measures and meet strict reporting timelines.",
      "Early warning after twenty four hours, status after seventy two hours and a final report after one month.",
    ],
    deliver: [
      "Article 21 mapped to your environment with an evidence pack and a governance rhythm for board oversight.",
      "Incident workflows, templates and exercises that operationalise reporting without derailing investigations.",
    ],
  },
  {
    icon: <IconDevice />,
    title: "Unpatchable and life critical devices",
    risk: [
      "Medical devices and IoMT often run unsupported systems where patching can affect certification.",
      "Vendors require remote access while clinical networks must remain available at all times.",
    ],
    deliver: [
      "Segmentation, monitored choke points and least privilege access for vendors and clinical teams.",
      "Documented compensating controls, risk acceptance and monitoring evidence when patches are not possible.",
    ],
  },
  {
    icon: <IconBoards />,
    title: "Boards and regulators expect proof",
    risk: [
      "Management is accountable under NIS2 and weak governance attracts penalties.",
      "Authorities and funders expect operating controls rather than policy binders.",
    ],
    deliver: [
      "Automated evidence, residual risk dashboards and management reviews that demonstrate effectiveness.",
      "Integrated privacy, safeguarding and cyber reporting to meet GDPR and NIS2 without duplicate effort.",
    ],
  },
];

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((t, i) => (
        <li key={i} className="flex gap-3 text-[14px] text-[var(--text-secondary)] leading-relaxed">
          <span className="mt-[8px] h-1.5 w-1.5 rounded-full bg-[var(--text-muted)] shrink-0" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

export default function HealthcarePainpoints() {
  const [active, setActive] = useState(0);
  const total = PAINPOINTS.length;
  const p = PAINPOINTS[active];
  const go = (d: number) => setActive((a) => (a + d + total) % total);

  return (
    <section className="py-12 md:py-16 section-rule" aria-labelledby="hc-pp-heading">
      <Container>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
          {/* Left */}
          <div className="lg:w-[32%] shrink-0">
            <p className="text-[12px] font-semibold tracking-wide text-[var(--cyan)] mb-4">Methodology / Process</p>
            <h2 id="hc-pp-heading" className="text-[clamp(30px,3.4vw,46px)] font-extrabold leading-[1.05] tracking-tight text-[var(--text-primary)] mb-5">
              Key painpoints<br className="hidden sm:block" /> we solve
            </h2>
            <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed mb-6 max-w-[380px]">
              A focused sequence of recurring challenges — and how our approach addresses each with clarity and momentum.
            </p>
            <Link href="/contact" className="inline-block text-[13px] font-semibold text-[var(--cyan)] border-b border-[var(--cyan)] pb-0.5 hover:opacity-80 transition-opacity">
              See case studies
            </Link>

            <div className="flex items-center gap-5 mt-10">
              <button onClick={() => go(-1)} aria-label="Previous painpoint" className="grid place-items-center w-10 h-10 rounded-full border border-[var(--border-default)] text-[var(--text-secondary)] transition-all duration-200 hover:text-[var(--text-primary)] hover:border-[var(--border-cyan)] hover:bg-[rgba(19,200,255,0.06)]">
                <ChevronLeft size={20} />
              </button>
              <button onClick={() => go(1)} aria-label="Next painpoint" className="grid place-items-center w-10 h-10 rounded-full border border-[var(--border-default)] text-[var(--text-primary)] transition-all duration-200 hover:border-[var(--border-cyan)] hover:bg-[rgba(19,200,255,0.06)]">
                <ChevronRight size={20} />
              </button>
              <div className="flex-1 h-[3px] rounded-full bg-[var(--border-default)] overflow-hidden max-w-[200px]">
                <div className="h-full rounded-full transition-all duration-300 ease-out" style={{ width: `${((active + 1) / total) * 100}%`, background: "linear-gradient(90deg, var(--cyan), var(--blue))" }} />
              </div>
              <span className="text-[13px] tabular-nums text-[var(--text-muted)]">{active + 1} / {total}</span>
            </div>
          </div>

          {/* Right card */}
          <div className="flex-1 min-w-0">
            <div
              key={active}
              className="rounded-large p-[1.5px] bg-gradient-to-br from-[rgba(19,200,255,0.6)] via-[rgba(60,100,220,0.3)] to-[rgba(155,107,255,0.65)]"
              style={{ animation: "hcpp-fade 0.45s ease both" }}
            >
              <div className="rounded-large bg-[#070e22] p-7 md:p-9 min-h-[460px]">
                {/* header */}
                <div className="flex items-center gap-5 mb-7">
                  <span className="p-[1.5px] rounded-[18px] bg-gradient-to-br from-[var(--cyan)] to-[var(--purple)] shrink-0">
                    <span className="grid place-items-center w-[80px] h-[80px] rounded-[16px] bg-[#0a1430]">
                      {p.icon}
                    </span>
                  </span>
                  <h3 className="text-[22px] md:text-[27px] font-bold text-[var(--text-primary)] leading-snug">
                    {p.title}
                  </h3>
                </div>

                <p className="text-[12px] font-bold tracking-[0.16em] uppercase text-[var(--purple)] mb-3">Risk:</p>
                <Bullets items={p.risk} />

                <p className="text-[12px] font-bold tracking-[0.16em] uppercase text-[var(--purple)] mt-7 mb-3">What we deliver:</p>
                <Bullets items={p.deliver} />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <style>{`@keyframes hcpp-fade { from { opacity: 0; transform: translateY(10px) } to { opacity: 1; transform: translateY(0) } }`}</style>
    </section>
  );
}
