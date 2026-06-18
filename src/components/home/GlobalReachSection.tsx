import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

const REACH_ITEMS = [
  {
    title: "Tunisia Roots",
    description: "Local team, deep market understanding",
    icon: (
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden="true" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 14.5 L16 5 L27 14.5" stroke="var(--purple)" strokeWidth="1.7" />
        <path d="M8 13 L8 27 L24 27 L24 13" stroke="var(--purple)" strokeWidth="1.7" />
        <path d="M12.5 27 L12.5 20.5 C12.5 18.6 14 17 16 17 C18 17 19.5 18.6 19.5 20.5 L19.5 27" stroke="var(--purple)" strokeWidth="1.7" />
      </svg>
    ),
  },
  {
    title: "Europe Focus",
    description: "Serving clients across Europe and beyond",
    icon: (
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden="true" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="16" r="11" stroke="var(--purple)" strokeWidth="1.7" strokeDasharray="1.5 3" />
        <path d="M16 9 L17.9 13.8 L23 14.1 L19.1 17.4 L20.4 22.4 L16 19.6 L11.6 22.4 L12.9 17.4 L9 14.1 L14.1 13.8 Z"
          stroke="var(--purple)" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Global Standards",
    description: "Aligned with leading international frameworks",
    icon: (
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden="true" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="16" r="11" stroke="var(--purple)" strokeWidth="1.7" />
        <ellipse cx="16" cy="16" rx="5" ry="11" stroke="var(--purple)" strokeWidth="1.5" />
        <line x1="5" y1="16" x2="27" y2="16" stroke="var(--purple)" strokeWidth="1.5" />
      </svg>
    ),
  },
];

export default function GlobalReachSection() {
  return (
    <section className="py-7 md:py-8 section-rule" aria-labelledby="reach-heading">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-7">
          {/* Left content */}
          <div className="flex-1 md:max-w-[44%]">
            <SectionLabel>Global Perspective. Local Execution.</SectionLabel>

            <h2
              id="reach-heading"
              className="text-[clamp(28px,3.2vw,42px)] font-extrabold leading-[1.05] tracking-tight mb-3"
            >
              <span className="text-[var(--text-primary)]">Global reach.</span>
              <br />
              <span className="text-grad-purple">Local</span>{" "}
              <span className="text-[var(--text-primary)]">impact.</span>
            </h2>

            <p className="text-[12.5px] text-[var(--text-secondary)] leading-relaxed mb-6 max-w-[440px]">
              We combine international expertise with on-the-ground understanding to deliver
              solutions that work in the real world.
            </p>

            {/* Points with vertical dividers */}
            <div className="flex flex-col sm:flex-row mb-6 divide-y sm:divide-y-0 sm:divide-x divide-[var(--border-default)]">
              {REACH_ITEMS.map(({ title, description, icon }) => (
                <div key={title} className="flex items-start gap-2.5 py-3 sm:py-0 sm:px-3.5 first:sm:pl-0 last:sm:pr-0">
                  <div className="shrink-0 mt-0.5">{icon}</div>
                  <div>
                    <h3 className="text-[12px] font-bold text-[var(--text-primary)] mb-1 leading-tight">
                      {title}
                    </h3>
                    <p className="text-[10px] leading-relaxed text-[var(--text-muted)]">{description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button href="/about" variant="primary" size="md">
              Learn more about us →
            </Button>
          </div>

          {/* Right map */}
          <div className="flex-1 md:max-w-[56%] w-full border border-[var(--border-default)] rounded-[12px] overflow-hidden">
            <Image
              src="/images/global-reach-map.png"
              alt="Dotted map of Europe with glowing connections converging on Tunisia — Serving Europe and beyond"
              width={1672}
              height={941}
              className="w-full h-auto"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
