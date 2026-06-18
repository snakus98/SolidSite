import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";

const AUDIENCES = [
  {
    icon: "/images/approach/global.png",
    title: "Global Perspective",
    description: "We work with clients locally and remotely, aligning to their culture, regulations, and goals.",
    border: "border-[rgba(19,200,255,0.4)]",
    glow: "hover:shadow-[0_0_44px_rgba(19,200,255,0.18)] hover:border-[rgba(19,200,255,0.6)]",
  },
  {
    icon: "/images/approach/stage.png",
    title: "For Every Stage",
    description: "From early-stage programs to enterprise transformations, we adapt to your context and help you move forward.",
    border: "border-[rgba(155,107,255,0.4)]",
    glow: "hover:shadow-[0_0_44px_rgba(155,107,255,0.2)] hover:border-[rgba(155,107,255,0.6)]",
  },
];

export default function AboutServe() {
  return (
    <section className="py-12 md:py-16 section-rule" aria-labelledby="serve-heading">
      <Container>
        <SectionLabel>Who We Serve</SectionLabel>

        {/* Header: heading left, intro right */}
        <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-10 mb-9">
          <h2
            id="serve-heading"
            className="flex-1 text-[clamp(26px,3vw,40px)] font-extrabold leading-[1.1] tracking-tight text-[var(--text-primary)]"
          >
            Cross-Industry,
            <br className="hidden sm:block" /> Wherever You Are
          </h2>
          <p className="flex-1 text-[14px] md:text-[15px] text-[var(--text-secondary)] leading-relaxed max-w-[460px]">
            We support technology, operations, and leadership teams across industries and maturity levels.
          </p>
        </div>

        {/* Audience cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {AUDIENCES.map((a) => (
            <div
              key={a.title}
              className={`
                flex items-center gap-6 p-7 md:p-8 rounded-large
                bg-[rgba(7,16,40,0.5)] border ${a.border} ${a.glow}
                transition-all duration-300 hover:-translate-y-1
              `}
            >
              <Image
                src={a.icon}
                alt={a.title}
                width={1254}
                height={1254}
                className="w-[84px] h-[84px] shrink-0 object-contain"
              />
              <div>
                <h3 className="text-[19px] font-bold text-[var(--text-primary)] mb-2 leading-snug">
                  {a.title}
                </h3>
                <p className="text-[13.5px] text-[var(--text-secondary)] leading-relaxed">
                  {a.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
