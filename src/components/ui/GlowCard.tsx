import { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "cyan" | "purple" | "blue" | "none";
  hoverable?: boolean;
}

const glowMap = {
  cyan: "hover:shadow-[0_0_36px_rgba(19,200,255,0.18)] hover:border-[var(--border-cyan)]",
  purple: "hover:shadow-[0_0_36px_rgba(113,70,255,0.22)] hover:border-[var(--border-purple)]",
  blue: "hover:shadow-[0_0_36px_rgba(40,120,255,0.2)] hover:border-[rgba(40,120,255,0.5)]",
  none: "",
};

export default function GlowCard({
  children,
  className = "",
  glowColor = "cyan",
  hoverable = true,
}: GlowCardProps) {
  return (
    <div
      className={`
        bg-[var(--bg-card)] border border-[var(--border-default)] rounded-card
        transition-all duration-300
        ${hoverable ? `hover:-translate-y-1 ${glowMap[glowColor]}` : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
