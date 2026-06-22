import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import { OUTCOMES } from "@/data/home";
import {
  IconReduceRisk,
  IconEnsureCompliance,
  IconImprovePerformance,
  IconBuildResilience,
  IconDriveGrowth,
} from "@/components/icons/OutcomeIcons";

const ICON_MAP: Record<string, (s: number) => React.ReactNode> = {
  risk: (s) => <IconReduceRisk size={s} />,
  compliance: (s) => <IconEnsureCompliance size={s} />,
  performance: (s) => <IconImprovePerformance size={s} />,
  resilience: (s) => <IconBuildResilience size={s} />,
  growth: (s) => <IconDriveGrowth size={s} />,
};

type Accent = "cyan" | "blue" | "purple";

const ACCENT: Record<Accent, { color: string; soft: string; glow: string; border: string }> = {
  cyan: {
    color: "var(--cyan)",
    soft: "rgba(19,200,255,0.12)",
    glow: "rgba(19,200,255,0.22)",
    border: "rgba(19,200,255,0.55)",
  },
  blue: {
    color: "var(--blue)",
    soft: "rgba(40,120,255,0.12)",
    glow: "rgba(40,120,255,0.24)",
    border: "rgba(40,120,255,0.55)",
  },
  purple: {
    color: "var(--purple)",
    soft: "rgba(113,70,255,0.12)",
    glow: "rgba(113,70,255,0.26)",
    border: "rgba(173,76,255,0.55)",
  },
};

type Side = "left" | "right" | "bottom";

const CLIP: Record<Side, string> = {
  left: "polygon(0% 0%, 86% 0%, 100% 26%, 100% 74%, 86% 100%, 0% 100%)",
  right: "polygon(14% 0%, 100% 0%, 100% 100%, 14% 100%, 0% 74%, 0% 26%)",
  bottom: "polygon(8% 0%, 92% 0%, 100% 24%, 100% 100%, 0% 100%, 0% 24%)",
};

type Outcome = (typeof OUTCOMES)[number];

/* Inner content shared by every card — number, copy and icon badge. */
function CardBody({
  outcome,
  accent,
  reverse = false,
}: {
  outcome: Outcome;
  accent: { color: string; soft: string; border: string };
  reverse?: boolean;
}) {
  const badge = (
    <div
      className="shrink-0 grid place-items-center rounded-full"
      style={{
        width: 56,
        height: 56,
        color: accent.color,
        background: accent.soft,
        border: `1px solid ${accent.border}`,
        boxShadow: `0 0 18px ${accent.soft}`,
      }}
    >
      {ICON_MAP[outcome.icon](30)}
    </div>
  );

  const text = (
    <div className={reverse ? "text-right" : "text-left"}>
      <span className="text-[13px] font-bold tracking-wide" style={{ color: accent.color }}>
        {outcome.number}
      </span>
      <h3 className="mt-1 text-[16px] font-bold text-[var(--text-primary)] leading-snug">
        {outcome.title}
      </h3>
      <p className="mt-1.5 text-[12.5px] text-[var(--text-secondary)] leading-relaxed">
        {outcome.description}
      </p>
    </div>
  );

  return (
    <div className={`flex items-center gap-4 ${reverse ? "flex-row-reverse" : ""}`}>
      {badge}
      {text}
    </div>
  );
}

/* Hexagon card with a gradient border — used in the radial desktop layout. */
function HexCard({
  outcome,
  side,
  className = "",
}: {
  outcome: Outcome;
  side: Side;
  className?: string;
}) {
  const accent = ACCENT[outcome.accent as Accent];
  const reverse = side === "right";
  const padBySide =
    side === "left"
      ? "pl-6 pr-12"
      : side === "right"
      ? "pl-12 pr-6"
      : "px-9 pt-8 pb-6";

  return (
    <div
      className={`outcome-card ${className}`}
      style={{ filter: `drop-shadow(0 6px 22px ${accent.glow})` }}
    >
      {/* gradient border layer */}
      <div
        className="p-[1.5px]"
        style={{
          clipPath: CLIP[side],
          background: `linear-gradient(135deg, ${accent.border}, rgba(101,131,220,0.18) 55%, ${accent.border})`,
        }}
      >
        {/* card surface */}
        <div
          className={`relative ${padBySide} ${side === "bottom" ? "py-7" : "py-6"}`}
          style={{
            clipPath: CLIP[side],
            background:
              "linear-gradient(160deg, rgba(10,22,55,0.96), rgba(6,14,38,0.96))",
          }}
        >
          {/* accent wash toward the orbit */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                side === "right"
                  ? `radial-gradient(120px 120px at 0% 50%, ${accent.soft}, transparent 70%)`
                  : side === "bottom"
                  ? `radial-gradient(160px 120px at 50% 0%, ${accent.soft}, transparent 70%)`
                  : `radial-gradient(120px 120px at 100% 50%, ${accent.soft}, transparent 70%)`,
            }}
          />
          <div className="relative">
            <CardBody outcome={outcome} accent={accent} reverse={reverse} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* Plain rounded card — used in the stacked mobile / tablet layout. */
function FlatCard({ outcome }: { outcome: Outcome }) {
  const accent = ACCENT[outcome.accent as Accent];
  return (
    <div
      className="outcome-card rounded-[14px] p-[1.5px]"
      style={{
        background: `linear-gradient(135deg, ${accent.border}, rgba(101,131,220,0.16) 60%, ${accent.border})`,
      }}
    >
      <div
        className="h-full rounded-[12.5px] px-5 py-5"
        style={{ background: "linear-gradient(160deg, rgba(10,22,55,0.96), rgba(6,14,38,0.96))" }}
      >
        <CardBody outcome={outcome} accent={accent} />
      </div>
    </div>
  );
}

/* Central glowing orbit — concentric rings, drifting nodes and a core hexagon. */
function CenterOrbit() {
  return (
    <div className="relative mx-auto" style={{ width: 320, height: 320 }}>
      <svg
        viewBox="0 0 320 320"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="orbitRing" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--cyan)" />
            <stop offset="50%" stopColor="var(--blue)" />
            <stop offset="100%" stopColor="var(--purple)" />
          </linearGradient>
          <radialGradient id="orbitCore" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(40,120,255,0.55)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>

        {/* faint outer halos */}
        <circle cx="160" cy="160" r="150" fill="none" stroke="rgba(101,131,220,0.12)" strokeWidth="1" />
        <circle cx="160" cy="160" r="124" fill="none" stroke="rgba(101,131,220,0.16)" strokeWidth="1" />

        {/* soft core glow */}
        <circle cx="160" cy="160" r="96" fill="url(#orbitCore)" className="outcome-core-pulse" />

        {/* main rotating ring with nodes */}
        <g className="outcome-orbit-spin">
          <circle cx="160" cy="160" r="96" fill="none" stroke="url(#orbitRing)" strokeWidth="2.2" />
          <circle cx="160" cy="64" r="4.5" fill="var(--cyan)" />
          <circle cx="160" cy="256" r="4.5" fill="var(--blue)" />
          <circle cx="64" cy="160" r="3.5" fill="var(--cyan)" />
          <circle cx="256" cy="160" r="3.5" fill="var(--purple)" />
        </g>

        {/* inner counter-rotating ring */}
        <g className="outcome-orbit-spin-rev">
          <circle
            cx="160"
            cy="160"
            r="70"
            fill="none"
            stroke="rgba(19,200,255,0.4)"
            strokeWidth="1.2"
            strokeDasharray="4 10"
          />
        </g>

        {/* core security icon — shield with padlock */}
        <g fill="none" strokeLinecap="round" strokeLinejoin="round">
          {/* outer shield */}
          <path
            d="M160 113 L196 127 Q202 129 202 135 Q202 176 160 206 Q118 176 118 135 Q118 129 124 127 L160 113 Z"
            fill="rgba(40,120,255,0.14)"
            stroke="url(#orbitRing)"
            strokeWidth="2.6"
          />
          {/* inner shield outline */}
          <path
            d="M160 123 L190 135 Q193 136 193 139 Q193 172 160 196 Q127 172 127 139 Q127 136 130 135 L160 123 Z"
            stroke="rgba(19,200,255,0.55)"
            strokeWidth="1.5"
          />
          {/* padlock shackle */}
          <path
            d="M151 153 L151 145 A9 9 0 0 1 169 145 L169 153"
            stroke="var(--text-primary)"
            strokeWidth="2.4"
          />
          {/* padlock body */}
          <rect
            x="145"
            y="152"
            width="30"
            height="28"
            rx="6"
            fill="rgba(40,120,255,0.2)"
            stroke="var(--text-primary)"
            strokeWidth="2.4"
          />
          {/* keyhole */}
          <circle cx="160" cy="163" r="3.2" fill="var(--cyan)" />
          <path d="M160 163 L160 172" stroke="var(--cyan)" strokeWidth="2.6" />
        </g>
      </svg>
    </div>
  );
}

export default function BusinessOutcomesSection() {
  return (
    <section
      className="relative overflow-hidden py-16 md:py-20 border-t border-b border-[var(--border-default)] bg-[rgba(4,12,34,0.7)]"
      aria-labelledby="outcomes-heading"
    >
      {/* ambient floor glow, echoing the reference perspective */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2"
        style={{
          background:
            "radial-gradient(60% 100% at 50% 100%, rgba(40,120,255,0.12), transparent 70%)",
        }}
      />

      <Container className="relative">
        {/* Heading */}
        <div className="text-center">
          <SectionLabel className="mb-3">Measurable Business Outcomes</SectionLabel>
          <h2
            id="outcomes-heading"
            className="text-[28px] sm:text-[36px] lg:text-[44px] font-extrabold leading-[1.1] tracking-tight"
          >
            <span className="text-[var(--text-primary)]">Turning Security &amp; Compliance</span>
            <br />
            <span className="text-grad-cyan">Into Real </span>
            <span className="text-grad-purple">Business Value</span>
          </h2>
          <div className="mx-auto mt-5 h-[3px] w-16 rounded-full bg-gradient-to-r from-[var(--cyan)] to-[var(--purple)]" />
        </div>

        {/* ── Desktop: radial orbit layout ── */}
        <div className="mt-12 hidden lg:grid grid-cols-[minmax(0,1fr)_320px_minmax(0,1fr)] items-center gap-x-6 gap-y-8">
          <HexCard outcome={OUTCOMES[0]} side="left" className="col-start-1 row-start-1" />
          <div className="col-start-2 row-start-1 row-span-2 flex items-center justify-center">
            <CenterOrbit />
          </div>
          <HexCard outcome={OUTCOMES[2]} side="right" className="col-start-3 row-start-1" />

          <HexCard outcome={OUTCOMES[1]} side="left" className="col-start-1 row-start-2" />
          <HexCard outcome={OUTCOMES[3]} side="right" className="col-start-3 row-start-2" />

          <HexCard
            outcome={OUTCOMES[4]}
            side="bottom"
            className="col-start-2 row-start-3 mx-auto w-[340px]"
          />
        </div>

        {/* ── Mobile / tablet: stacked cards ── */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden">
          {OUTCOMES.map((outcome) => (
            <FlatCard key={outcome.id} outcome={outcome} />
          ))}
        </div>
      </Container>
    </section>
  );
}
