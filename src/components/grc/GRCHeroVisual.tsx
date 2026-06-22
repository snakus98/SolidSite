// Self-contained SVG of the GRC operating model — a central "GRC" core with
// eight labelled nodes (policies, risks, controls, audits, evidence, third
// parties, incidents, board reporting) on a dashed orbit. No image asset needed.

const C = 300; // center
const R = 200; // node orbit radius

const st = (c: string, w = 2) => ({
  stroke: c,
  strokeWidth: w,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  fill: "none",
});

/* ── node icons, drawn in a 0..32 box ── */
function Doc({ c }: { c: string }) {
  return (
    <g {...st(c, 1.9)}>
      <path d="M9 4 H20 L24 8 V28 H9 Z" />
      <path d="M20 4 V8 H24" strokeWidth={1.5} />
      <path d="M13 14 H20 M13 18 H20 M13 22 H18" strokeWidth={1.5} />
    </g>
  );
}
function Triangle({ c }: { c: string }) {
  return (
    <g {...st(c, 1.9)}>
      <path d="M16 5 L28 26 H4 Z" />
      <path d="M16 13 V19" />
      <circle cx="16" cy="22.5" r="1" fill={c} stroke="none" />
    </g>
  );
}
function ShieldCheck({ c }: { c: string }) {
  return (
    <g {...st(c, 1.9)}>
      <path d="M16 4 L26 8 V16 C26 23 16 28 16 28 C16 28 6 23 6 16 V8 Z" />
      <path d="M11 16 l4 4 l6 -7" />
    </g>
  );
}
function Search({ c }: { c: string }) {
  return (
    <g {...st(c, 1.9)}>
      <circle cx="14" cy="14" r="8" />
      <path d="M20 20 L27 27" />
      <path d="M14 11 V15" />
      <circle cx="14" cy="17.5" r="0.9" fill={c} stroke="none" />
    </g>
  );
}
function Folder({ c }: { c: string }) {
  return (
    <g {...st(c, 1.9)}>
      <path d="M5 9 H13 L16 12 H27 V25 H5 Z" />
      <path d="M5 14 H27" strokeWidth={1.4} />
    </g>
  );
}
function People({ c }: { c: string }) {
  return (
    <g {...st(c, 1.8)}>
      <circle cx="12" cy="12" r="4" />
      <path d="M5 26 c0 -5 3.5 -8 7 -8 c3.5 0 7 3 7 8" />
      <path d="M21 9 a3.6 3.6 0 0 1 0 7" />
      <path d="M21 18 c3.2 0 6 2.6 6 7" />
    </g>
  );
}
function Bell({ c }: { c: string }) {
  return (
    <g {...st(c, 1.9)}>
      <path d="M16 8 C11 8 9 11 9 16 C9 20 7.5 21.5 6.5 22.5 H25.5 C24.5 21.5 23 20 23 16 C23 11 21 8 16 8 Z" />
      <path d="M13.5 22.5 a2.6 2.2 0 0 0 5 0" />
      <path d="M16 8 V6" />
    </g>
  );
}
function Chart({ c }: { c: string }) {
  return (
    <g {...st(c, 1.9)}>
      <path d="M7 5 V27 H28" />
      <rect x="11" y="18" width="3.4" height="6" rx="1" strokeWidth={1.6} />
      <rect x="17" y="14" width="3.4" height="10" rx="1" strokeWidth={1.6} />
      <rect x="23" y="10" width="3.4" height="14" rx="1" strokeWidth={1.6} />
    </g>
  );
}

type Node = { label: string[]; angle: number; Icon: (p: { c: string }) => React.ReactElement; accent: string };

const CYAN = "var(--cyan)";
const PURPLE = "var(--purple)";

const NODES: Node[] = [
  { label: ["Policies"], angle: 0, Icon: Doc, accent: CYAN },
  { label: ["Controls"], angle: 45, Icon: ShieldCheck, accent: CYAN },
  { label: ["Audits"], angle: 90, Icon: Search, accent: CYAN },
  { label: ["Evidence"], angle: 135, Icon: Folder, accent: CYAN },
  { label: ["Third", "Parties"], angle: 180, Icon: People, accent: CYAN },
  { label: ["Incidents"], angle: 225, Icon: Bell, accent: PURPLE },
  { label: ["Board", "Reporting"], angle: 270, Icon: Chart, accent: CYAN },
  { label: ["Risks"], angle: 315, Icon: Triangle, accent: PURPLE },
];

function pos(angle: number, r: number) {
  const a = (angle * Math.PI) / 180;
  return { x: C + r * Math.sin(a), y: C - r * Math.cos(a) };
}

export default function GRCHeroVisual() {
  return (
    <svg
      viewBox="0 0 600 600"
      className="w-full h-auto max-w-[640px]"
      role="img"
      aria-label="GRC operating model connecting policies, risks, controls, audits, evidence, third parties, incidents, and board reporting"
    >
      <defs>
        <linearGradient id="grcRing" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--cyan)" />
          <stop offset="50%" stopColor="var(--blue)" />
          <stop offset="100%" stopColor="var(--purple)" />
        </linearGradient>
        <radialGradient id="grcCore" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(40,120,255,0.55)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>

      {/* connectors */}
      {NODES.map((n) => {
        const p = pos(n.angle, R);
        return (
          <line
            key={`l-${n.angle}`}
            x1={C}
            y1={C}
            x2={p.x}
            y2={p.y}
            stroke="rgba(101,131,220,0.28)"
            strokeWidth="1"
            strokeDasharray="3 5"
          />
        );
      })}

      {/* dashed orbit + dots */}
      <circle cx={C} cy={C} r={R} fill="none" stroke="rgba(101,131,220,0.22)" strokeWidth="1" strokeDasharray="2 8" />
      {NODES.map((n) => {
        const p = pos(n.angle + 22.5, R);
        return <circle key={`d-${n.angle}`} cx={p.x} cy={p.y} r="2.5" fill="var(--cyan)" />;
      })}

      {/* core glow + hexagon + GRC */}
      <circle cx={C} cy={C} r="86" fill="url(#grcCore)" />
      <path
        d="M300 240 L352 270 L352 330 L300 360 L248 330 L248 270 Z"
        fill="rgba(8,18,46,0.92)"
        stroke="url(#grcRing)"
        strokeWidth="2.4"
      />
      <text
        x={C}
        y={C}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="40"
        fontWeight="800"
        letterSpacing="1"
        fill="var(--text-primary)"
        fontFamily="Manrope, system-ui, sans-serif"
      >
        GRC
      </text>

      {/* nodes */}
      {NODES.map((n) => {
        const p = pos(n.angle, R);
        return (
          <g key={n.label.join("-")}>
            <circle
              cx={p.x}
              cy={p.y}
              r="30"
              fill="rgba(7,16,40,0.85)"
              stroke={n.accent}
              strokeWidth="1.4"
              strokeDasharray="3 3"
              style={{ filter: `drop-shadow(0 0 8px ${n.accent === PURPLE ? "rgba(113,70,255,0.35)" : "rgba(19,200,255,0.3)"})` }}
            />
            <g transform={`translate(${p.x - 12.8}, ${p.y - 12.8}) scale(0.8)`}>
              <n.Icon c={n.accent} />
            </g>
            <text
              x={p.x}
              y={p.y + 46}
              textAnchor="middle"
              fontSize="13"
              fontWeight="700"
              letterSpacing="1.2"
              fill="var(--text-secondary)"
              fontFamily="Manrope, system-ui, sans-serif"
              style={{ textTransform: "uppercase" }}
            >
              {n.label.length === 1 ? (
                n.label[0]
              ) : (
                <>
                  <tspan x={p.x} dy="0">{n.label[0]}</tspan>
                  <tspan x={p.x} dy="15">{n.label[1]}</tspan>
                </>
              )}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
