interface IconProps { className?: string; size?: number }

const base = (s: number) => ({
  width: s, height: s, viewBox: "0 0 40 40", fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
});

export function IconManufacturing({ size = 36, className = "" }: IconProps) {
  return (
    <svg {...base(size)} className={className} aria-hidden="true">
      <path d="M6 34V18l7 5v-5l7 5v-5l7 5v11Z" stroke="var(--cyan)" strokeWidth="1.7" />
      <line x1="4" y1="34" x2="32" y2="34" stroke="var(--cyan)" strokeWidth="1.7" />
      <line x1="10" y1="18" x2="10" y2="10" stroke="var(--purple)" strokeWidth="1.7" />
      <circle cx="32" cy="8" r="2.6" stroke="var(--blue)" strokeWidth="1.6" />
      <path d="M30 10 L25 15" stroke="var(--blue)" strokeWidth="1.4" />
      <circle cx="25" cy="15" r="1.6" fill="var(--blue)" />
    </svg>
  );
}

export function IconNGO({ size = 36, className = "" }: IconProps) {
  return (
    <svg {...base(size)} className={className} aria-hidden="true">
      <path d="M20 4 L34 10 L34 22 C34 29 20 36 20 36 C20 36 6 29 6 22 L6 10 Z" stroke="var(--purple)" strokeWidth="1.7" />
      <path d="M20 27 C11 20 13.5 12.5 18.5 13.7 C19.4 13.9 20 14.7 20 15.6 C20 14.7 20.6 13.9 21.5 13.7 C26.5 12.5 29 20 20 27 Z" fill="var(--cyan)" />
    </svg>
  );
}

export function IconHealthcare({ size = 36, className = "" }: IconProps) {
  return (
    <svg {...base(size)} className={className} aria-hidden="true">
      <path d="M20 4 L34 10 L34 22 C34 29 20 36 20 36 C20 36 6 29 6 22 L6 10 Z" stroke="var(--cyan)" strokeWidth="1.7" />
      <path d="M20 12v16M12 20h16" stroke="var(--cyan)" strokeWidth="2.4" />
    </svg>
  );
}
