// Self-contained SVG of the GRC assurance visual — a glowing shield rising from
// a layered podium, ringed by small governance nodes. No image asset needed.

export default function GRCDeliveryVisual({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 360 300" className={`w-full h-auto ${className}`} role="img" aria-label="GRC assurance — shield on a podium">
      <defs>
        <linearGradient id="grcdRing" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--cyan)" />
          <stop offset="55%" stopColor="var(--blue)" />
          <stop offset="100%" stopColor="var(--purple)" />
        </linearGradient>
        <radialGradient id="grcdGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(40,120,255,0.5)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <linearGradient id="grcdShield" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(40,120,255,0.28)" />
          <stop offset="100%" stopColor="rgba(19,200,255,0.10)" />
        </linearGradient>
      </defs>

      {/* ambient glow */}
      <ellipse cx="180" cy="150" rx="150" ry="110" fill="url(#grcdGlow)" />

      {/* podium — stacked ellipses */}
      <ellipse cx="180" cy="232" rx="118" ry="34" fill="rgba(10,24,60,0.7)" stroke="rgba(113,70,255,0.4)" strokeWidth="1.4" />
      <ellipse cx="180" cy="222" rx="96" ry="27" fill="rgba(8,18,46,0.85)" stroke="rgba(40,120,255,0.5)" strokeWidth="1.4" />
      <ellipse cx="180" cy="214" rx="72" ry="20" fill="none" stroke="url(#grcdRing)" strokeWidth="1.8" />
      <ellipse cx="180" cy="210" rx="46" ry="12" fill="none" stroke="rgba(19,200,255,0.55)" strokeWidth="1.2" strokeDasharray="3 5" />

      {/* shield */}
      <g style={{ filter: "drop-shadow(0 0 16px rgba(40,120,255,0.5))" }}>
        <path
          d="M180 96 L222 112 V152 C222 188 180 208 180 208 C180 208 138 188 138 152 V112 Z"
          fill="url(#grcdShield)"
          stroke="url(#grcdRing)"
          strokeWidth="2.6"
          strokeLinejoin="round"
        />
        <path
          d="M163 152 l12 12 l22 -26"
          fill="none"
          stroke="var(--text-primary)"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* orbiting governance nodes */}
      {[
        { x: 70, y: 96, c: "var(--cyan)" },
        { x: 292, y: 104, c: "var(--purple)" },
        { x: 300, y: 176, c: "var(--cyan)" },
        { x: 60, y: 168, c: "var(--purple)" },
      ].map((n, i) => (
        <g key={i}>
          <line x1="180" y1="150" x2={n.x} y2={n.y} stroke="rgba(101,131,220,0.25)" strokeWidth="1" strokeDasharray="2 5" />
          <circle cx={n.x} cy={n.y} r="11" fill="rgba(7,16,40,0.9)" stroke={n.c} strokeWidth="1.4" />
          <circle cx={n.x} cy={n.y} r="3.2" fill={n.c} />
        </g>
      ))}
    </svg>
  );
}
