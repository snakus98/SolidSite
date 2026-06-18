import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: ReactNode;
  external?: boolean;
  type?: "button" | "submit";
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  icon,
  external = false,
  type = "button",
}: ButtonProps) {
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-[14px]",
    lg: "px-8 py-3.5 text-[15px]",
  };

  const variants = {
    primary: `
      relative inline-flex items-center gap-2 font-semibold text-white rounded-[10px]
      bg-gradient-to-r from-[var(--purple)] to-[var(--blue)]
      border border-[rgba(113,70,255,0.5)]
      shadow-[0_0_22px_rgba(113,70,255,0.3)]
      transition-all duration-200
      hover:-translate-y-[1px] hover:shadow-[0_0_32px_rgba(113,70,255,0.5)]
      focus-visible:outline-[var(--cyan)]
    `,
    outline: `
      relative inline-flex items-center gap-2 font-semibold text-[var(--text-primary)] rounded-[10px]
      bg-[rgba(7,17,44,0.6)] backdrop-blur-sm
      border border-[var(--border-default)]
      transition-all duration-200
      hover:border-[var(--border-cyan)] hover:bg-[rgba(19,200,255,0.06)] hover:-translate-y-[1px]
      focus-visible:outline-[var(--cyan)]
    `,
    ghost: `
      inline-flex items-center gap-1.5 font-semibold text-[var(--cyan)]
      transition-all duration-200
      hover:gap-2.5
      focus-visible:outline-[var(--cyan)]
    `,
  };

  const cls = `${variants[variant]} ${sizes[size]} ${className}`;
  const content = (
    <>
      {children}
      {icon && <span className="transition-transform duration-200 group-hover:translate-x-1">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={`group ${cls}`}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`group ${cls}`}>
      {content}
    </button>
  );
}
