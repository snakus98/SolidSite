// Service icons — line-art, 48x48 viewBox. Colors matched to the brand palette
// via CSS vars (cyan / blue / purple / magenta).

interface IconProps {
  className?: string;
  size?: number;
}

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 48 48",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
});

// ── Cybersecurity — target / aim ──
export function IconCybersecurity({ size = 48, className = "" }: IconProps) {
  return (
    <svg {...base(size)} className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="13" stroke="var(--cyan)" strokeWidth="1.7" />
      <circle cx="24" cy="24" r="6.5" stroke="var(--blue)" strokeWidth="1.7" />
      <circle cx="24" cy="24" r="2.2" fill="var(--cyan)" />
      <line x1="24" y1="2" x2="24" y2="9" stroke="var(--cyan)" strokeWidth="1.7" />
      <line x1="24" y1="39" x2="24" y2="46" stroke="var(--cyan)" strokeWidth="1.7" />
      <line x1="2" y1="24" x2="9" y2="24" stroke="var(--cyan)" strokeWidth="1.7" />
      <line x1="39" y1="24" x2="46" y2="24" stroke="var(--cyan)" strokeWidth="1.7" />
      <path d="M20.5 8 L27.5 8 L24 12.5 Z" fill="var(--cyan)" />
    </svg>
  );
}

// ── Compliance — document with check badge ──
export function IconCompliance({ size = 48, className = "" }: IconProps) {
  return (
    <svg {...base(size)} className={className} aria-hidden="true">
      <rect x="11" y="6" width="22" height="34" rx="3.5" stroke="var(--magenta)" strokeWidth="1.7" />
      <line x1="16" y1="15" x2="28" y2="15" stroke="var(--magenta)" strokeWidth="1.5" />
      <line x1="16" y1="21" x2="28" y2="21" stroke="var(--magenta)" strokeWidth="1.5" />
      <line x1="16" y1="27" x2="24" y2="27" stroke="var(--magenta)" strokeWidth="1.5" />
      {/* check badge — bg fill masks the lines behind it */}
      <circle cx="33" cy="34" r="8" fill="var(--bg-card)" stroke="var(--cyan)" strokeWidth="1.7" />
      <path d="M29.5 34 L32 36.5 L37 31" stroke="var(--cyan)" strokeWidth="1.9" />
    </svg>
  );
}

// ── Framework Implementation — stacked layers ──
export function IconFramework({ size = 48, className = "" }: IconProps) {
  return (
    <svg {...base(size)} className={className} aria-hidden="true">
      <path d="M24 9 L40 17 L24 25 L8 17 Z" stroke="var(--cyan)" strokeWidth="1.7" />
      <path d="M8 24 L24 32 L40 24" stroke="var(--blue)" strokeWidth="1.7" />
      <path d="M8 31 L24 39 L40 31" stroke="var(--blue)" strokeWidth="1.7" />
    </svg>
  );
}

// ── Training — graduation cap ──
export function IconTraining({ size = 48, className = "" }: IconProps) {
  return (
    <svg {...base(size)} className={className} aria-hidden="true">
      <path d="M24 9 L43 18 L24 27 L5 18 Z" stroke="var(--magenta)" strokeWidth="1.7" />
      <path d="M13 22 L13 32 C13 32 17.5 37 24 37 C30.5 37 35 32 35 32 L35 22" stroke="var(--purple)" strokeWidth="1.7" />
      <line x1="43" y1="18" x2="43" y2="30" stroke="var(--magenta)" strokeWidth="1.7" />
      <circle cx="43" cy="32" r="1.9" fill="var(--magenta)" />
    </svg>
  );
}

// ── Advisory — compass ──
export function IconAdvisory({ size = 48, className = "" }: IconProps) {
  return (
    <svg {...base(size)} className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="15" stroke="var(--cyan)" strokeWidth="1.7" />
      <path d="M24 24 L31 15 L20 20 Z" fill="var(--magenta)" />
      <path d="M24 24 L17 33 L28 28 Z" fill="var(--blue)" />
      <circle cx="24" cy="24" r="1.9" fill="var(--cyan)" />
    </svg>
  );
}
