import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";

const PRINCIPLES = [
  {
    icon: "/images/approach/flexible.png",
    title: "Flexible & Interoperable",
    description: "We build solutions on proven platforms that give you freedom and avoid vendor lock-in.",
    border: "border-[rgba(19,200,255,0.4)]",
    glow: "hover:shadow-[0_0_40px_rgba(19,200,255,0.18)] hover:border-[rgba(19,200,255,0.6)]",
  },
  {
    icon: "/images/approach/vendor.png",
    title: "Vendor-Neutral Guidance",
    description: "Solutions are designed around your needs—not around specific vendors.",
    border: "border-[rgba(155,107,255,0.4)]",
    glow: "hover:shadow-[0_0_40px_rgba(155,107,255,0.2)] hover:border-[rgba(155,107,255,0.6)]",
  },
  {
    icon: "/images/approach/collaborative.png",
    title: "Collaborative Partnerships",
    description: "We co-create strategy and roadmaps with your teams and deliver measurable results.",
    border: "border-[rgba(40,120,255,0.4)]",
    glow: "hover:shadow-[0_0_40px_rgba(40,120,255,0.18)] hover:border-[rgba(40,120,255,0.6)]",
  },
];

export default function AboutApproach() {
  return (
    <section className="py-12 md:py-16 section-rule" aria-labelledby="approach-heading">
      <Container>
        <SectionLabel>Our Approach</SectionLabel>

        {/* Header: heading left, intro right */}
        <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-10 mb-9">
          <h2
            id="approach-heading"
            className="flex-1 text-[clamp(26px,3vw,40px)] font-extrabold leading-[1.1] tracking-tight text-[var(--text-primary)]"
          >
            Transparent, Pragmatic
            <br className="hidden sm:block" /> &amp; Outcome-Focused
          </h2>
          <p className="flex-1 text-[14px] md:text-[15px] text-[var(--text-secondary)] leading-relaxed max-w-[520px]">
            We believe the best outcomes come from clarity, flexibility, and partnership. Our
            approach is built around three core principles that guide every engagement.
          </p>
        </div>

        {/* Principle cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PRINCIPLES.map((p) => (
            <div
              key={p.title}
              className={`
                flex items-center gap-5 p-6 rounded-large
                bg-[rgba(7,16,40,0.5)] border ${p.border} ${p.glow}
                transition-all duration-300 hover:-translate-y-1
              `}
            >
              <Image
                src={p.icon}
                alt={p.title}
                width={1254}
                height={1254}
                className="w-[68px] h-[68px] shrink-0 object-contain"
              />
              <div>
                <h3 className="text-[16px] font-bold text-[var(--text-primary)] mb-1.5 leading-snug">
                  {p.title}
                </h3>
                <p className="text-[12.5px] text-[var(--text-secondary)] leading-relaxed">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
