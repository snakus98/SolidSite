"use client";
import { Fragment, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import { PROCESS_STEPS } from "@/data/home";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const ICON_SRC: Record<string, string> = {
  assessment: "/images/process/assessment.png",
  design: "/images/process/design.png",
  implement: "/images/process/implement.png",
  operate: "/images/process/operate.png",
  train: "/images/process/train.png",
  improve: "/images/process/improve.png",
};

export default function EngagementProcessSection() {
  const [active, setActive] = useState(PROCESS_STEPS.length - 1);
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        obs.disconnect();
        if (reduced) { setActive(PROCESS_STEPS.length - 1); return; }
        PROCESS_STEPS.forEach((_, i) => {
          setTimeout(() => setActive(i), i * 200 + 300);
        });
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [reduced]);

  return (
    <section className="py-6 md:py-7 section-rule" aria-labelledby="process-heading">
      <Container>
        <SectionLabel>Our Capabilities &amp; Engagement Approach</SectionLabel>
        <h2 id="process-heading" className="sr-only">Our Capabilities &amp; Engagement Approach</h2>

        <div
          ref={ref}
          className="border border-[var(--border-default)] rounded-[9px] p-5 bg-[rgba(4,12,34,0.72)]"
        >
          {/* Progress line — desktop */}
          <div className="hidden lg:flex items-center mb-3 px-8" aria-hidden="true">
            {PROCESS_STEPS.map((step, i) => (
              <Fragment key={step.id}>
                {/* Dot */}
                <div
                  className={`
                    w-2.5 h-2.5 rounded-full border-2 shrink-0 transition-all duration-500
                    ${i <= active
                      ? "bg-[var(--cyan)] border-[var(--cyan)] shadow-[0_0_10px_var(--glow-cyan)]"
                      : "bg-transparent border-[var(--border-default)]"
                    }
                  `}
                />
                {/* Line segment */}
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="flex-1 h-[1.5px] mx-1 bg-[var(--border-default)] relative overflow-hidden">
                    <div
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-[var(--cyan)] to-[var(--blue)] transition-all duration-500"
                      style={{ width: i < active ? "100%" : "0%" }}
                    />
                  </div>
                )}
              </Fragment>
            ))}
          </div>

          {/* Steps grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
            {PROCESS_STEPS.map((step, i) => (
              <div
                key={step.id}
                className={`
                  flex flex-col transition-all duration-500
                  items-center text-center lg:border-r lg:last:border-r-0 border-[var(--border-default)] lg:px-3 lg:last:pr-0
                  ${i <= active ? "opacity-100 translate-y-0" : "opacity-40 translate-y-1"}
                `}
              >
                {/* Mobile step indicator */}
                <div className="flex items-center gap-2 mb-3 lg:hidden" aria-hidden="true">
                  <div className={`
                    w-2 h-2 rounded-full transition-all duration-300
                    ${i <= active ? "bg-[var(--cyan)]" : "bg-[var(--border-default)]"}
                  `} />
                  <div className={`
                    flex-1 h-[1px] transition-all duration-500
                    ${i <= active ? "bg-[var(--cyan)]" : "bg-[var(--border-default)]"}
                  `} />
                </div>

                <div className={`
                  mb-2 flex items-center justify-center transition-all duration-500
                  ${i <= active ? "opacity-100" : "opacity-40"}
                `}>
                  <Image
                    src={ICON_SRC[step.icon]}
                    alt={step.title}
                    width={1254}
                    height={1254}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <h3 className="text-[13px] font-bold text-[var(--text-primary)] mb-1 leading-snug">
                  {step.title}
                </h3>
                <p className="text-[11px] text-[var(--text-muted)] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
