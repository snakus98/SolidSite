import Link from "next/link";
import { CalendarDays } from "lucide-react";
import Container from "@/components/ui/Container";
import OrbitHeroVisual from "@/components/industries/OrbitHeroVisual";

export default function ITHero() {
  return (
    <section
      className="relative pt-[120px] pb-12 md:pt-[128px] md:pb-16 overflow-hidden"
      aria-labelledby="it-hero-heading"
    >
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 w-[60%] h-full pointer-events-none"
        style={{ background: "radial-gradient(820px 660px at 70% 38%, rgba(40,120,255,0.12), transparent 65%)" }}
      />

      <Container className="flex flex-col md:flex-row items-center gap-8 md:gap-8">
        {/* Left content */}
        <div className="flex-1 md:max-w-[44%] animate-fade-up">
          <p className="text-[11px] sm:text-[12px] tracking-[0.22em] font-bold text-[var(--cyan)] mb-5 uppercase">
            IT Infrastructure • Cloud • Security • Operations
          </p>

          <h1
            id="it-hero-heading"
            className="text-[clamp(30px,3.9vw,50px)] font-extrabold leading-[1.05] tracking-tight text-[var(--text-primary)] mb-5"
          >
            IT solutions for secure infrastructure, resilient operations, and scalable growth.
          </h1>

          <p className="text-[14px] sm:text-[15px] text-[var(--text-secondary)] leading-relaxed mb-8 max-w-[560px]">
            We help organisations modernise their IT foundations, secure their digital environments,
            optimise cloud and endpoint operations, and align infrastructure decisions with business
            continuity, security, and performance goals.
          </p>

          <Link
            href="/contact"
            className="
              inline-flex items-center gap-3 px-7 py-4 rounded-[12px]
              text-[15px] font-semibold text-white
              bg-gradient-to-r from-[var(--purple)] to-[var(--blue)]
              border border-[rgba(113,70,255,0.5)]
              shadow-[0_0_30px_rgba(113,70,255,0.4)]
              transition-all duration-200 group
              hover:-translate-y-px hover:shadow-[0_0_44px_rgba(113,70,255,0.6)]
            "
          >
            <CalendarDays size={22} className="text-white shrink-0" strokeWidth={2} />
            Book a 30-min IT consultation
          </Link>
        </div>

        {/* Right visual */}
        <div className="flex-1 md:max-w-[56%] w-full flex justify-center">
          <OrbitHeroVisual
            src="/images/it-hero.png"
            alt="IT operating model connecting cloud, endpoints, identity, networks, support, monitoring, data, and continuity around a core IT platform"
          />
        </div>
      </Container>
    </section>
  );
}
