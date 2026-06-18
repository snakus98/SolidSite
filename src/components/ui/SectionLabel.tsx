interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <p
      className={`text-[10px] sm:text-[11px] tracking-[0.2em] uppercase font-bold text-[var(--cyan)] mb-2.5 ${className}`}
    >
      {children}
    </p>
  );
}
