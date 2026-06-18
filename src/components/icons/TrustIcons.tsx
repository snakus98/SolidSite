interface IconProps { className?: string; size?: number }
const base = (s: number) => ({
  width: s, height: s, viewBox: "0 0 24 24", fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
});

export function IconTrustShield({ size = 18, className = "" }: IconProps) {
  return (
    <svg {...base(size)} className={className} aria-hidden="true">
      <path d="M12 2 L20 6 L20 13 C20 17.4 16 21 12 22 C8 21 4 17.4 4 13 L4 6 Z" stroke="var(--cyan)" strokeWidth="1.8" />
      <path d="M9 12 L11 14 L15 10" stroke="var(--cyan)" strokeWidth="1.8" />
    </svg>
  );
}

export function IconTrustTarget({ size = 18, className = "" }: IconProps) {
  return (
    <svg {...base(size)} className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8" stroke="var(--purple)" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="var(--blue)" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="1.5" fill="var(--cyan)" />
    </svg>
  );
}

export function IconTrustGlobe({ size = 18, className = "" }: IconProps) {
  return (
    <svg {...base(size)} className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8" stroke="var(--cyan)" strokeWidth="1.8" />
      <ellipse cx="12" cy="12" rx="4" ry="8" stroke="var(--blue)" strokeWidth="1.4" />
      <line x1="4" y1="12" x2="20" y2="12" stroke="var(--cyan)" strokeWidth="1.4" />
    </svg>
  );
}
