// Outcome icons — compact, 40x40 viewBox. Blue/cyan tones to match the
// "Measurable Business Outcomes" strip.

interface IconProps { className?: string; size?: number }

const base = (s: number) => ({
  width: s, height: s, viewBox: "0 0 40 40", fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
});

// ── Reduce Risk — shield with check ──
export function IconReduceRisk({ size = 36, className = "" }: IconProps) {
  return (
    <svg {...base(size)} className={className} aria-hidden="true">
      <path
        d="M20 4 L33 9 L33 21 C33 28 20 35 20 35 C20 35 7 28 7 21 L7 9 Z"
        fill="rgba(40,120,255,0.16)" stroke="var(--blue)" strokeWidth="1.7"
      />
      <path d="M14 20 L18 24 L26 15" stroke="var(--cyan)" strokeWidth="2.2" />
    </svg>
  );
}

// ── Ensure Compliance — circle check ──
export function IconEnsureCompliance({ size = 36, className = "" }: IconProps) {
  return (
    <svg {...base(size)} className={className} aria-hidden="true">
      <circle cx="20" cy="20" r="14" fill="rgba(40,120,255,0.16)" stroke="var(--blue)" strokeWidth="1.7" />
      <path d="M13 20 L18 25 L27 14" stroke="var(--cyan)" strokeWidth="2.2" />
    </svg>
  );
}

// ── Improve Performance — bar chart ──
export function IconImprovePerformance({ size = 36, className = "" }: IconProps) {
  return (
    <svg {...base(size)} className={className} aria-hidden="true">
      <rect x="6" y="25" width="5" height="9" rx="1" fill="var(--blue)" />
      <rect x="14" y="19" width="5" height="15" rx="1" fill="var(--blue)" />
      <rect x="22" y="13" width="5" height="21" rx="1" fill="var(--cyan)" />
      <rect x="30" y="7" width="5" height="27" rx="1" fill="var(--cyan)" />
    </svg>
  );
}

// ── Build Resilience — cloud ──
export function IconBuildResilience({ size = 36, className = "" }: IconProps) {
  return (
    <svg {...base(size)} className={className} aria-hidden="true">
      <path
        d="M13 30 C9.2 30 6 26.9 6 23.2 C6 20 8.2 17.4 11.2 16.7 C11.9 12.3 15.6 9 20.2 9 C24.5 9 28.1 11.9 29.1 15.8 C32.3 16.1 35 18.9 35 22.4 C35 26.6 31.6 30 27.6 30 Z"
        fill="rgba(40,120,255,0.16)" stroke="var(--blue)" strokeWidth="1.7"
      />
    </svg>
  );
}

// ── Drive Growth — upward arrow ──
export function IconDriveGrowth({ size = 36, className = "" }: IconProps) {
  return (
    <svg {...base(size)} className={className} aria-hidden="true">
      <polyline points="6,29 15,20 21,25 32,12" stroke="var(--blue)" strokeWidth="2.1" />
      <polyline points="24,12 32,12 32,20" stroke="var(--blue)" strokeWidth="2.1" />
    </svg>
  );
}
