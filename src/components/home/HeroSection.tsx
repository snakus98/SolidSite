"use client";
import Link from "next/link";
import Container from "@/components/ui/Container";
import HeroIllustration from "@/components/home/HeroIllustration";
import { IconTrustShield, IconTrustTarget, IconTrustGlobe } from "@/components/icons/TrustIcons";

const TRUST_ITEMS = [
  { icon: <IconTrustShield size={18} />, label: "Industry-leading expertise" },
  { icon: <IconTrustTarget size={18} />, label: "Pragmatic & outcome-driven" },
  { icon: <IconTrustGlobe size={18} />, label: "Global standards, local impact" },
];

export default function HeroSection() {
  return (
    <section
      className="home-hero relative flex flex-1 items-center pt-[104px] pb-4 md:pt-[108px] md:pb-5 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background radial glow centered on shield */}
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 w-[54%] h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(800px 600px at 70% 30%, rgba(40,120,255,0.11), transparent 65%)",
        }}
      />

      <Container className="flex flex-col md:flex-row items-stretch md:items-center gap-4 md:gap-2">
        {/* ── Left content ── */}
        <div className="flex-1 min-w-0 md:max-w-[47%] animate-fade-up">
          {/* Eyebrow */}
          <p className="text-[10px] sm:text-[11px] tracking-[0.2em] font-bold text-[var(--cyan)] mb-3 md:mb-4 uppercase">
            Cybersecurity. Compliance. Trust.
          </p>

          {/* Headline */}
          <h1
            id="hero-heading"
            className="text-[clamp(31px,4vw,51px)] font-extrabold leading-[1.08] text-[var(--text-primary)] mb-3 md:mb-4"
          >
            We help organizations{" "}
            <span className="text-grad-cyan">modernize</span>
            {", "}
            <span className="text-grad-purple">secure</span>
            {","}
            <br className="hidden sm:block" />
            {" and "}
            <span className="text-grad-cyan">scale</span>
            {" their digital"}
            <br />
            operations.
          </h1>

          {/* Description */}
          <p className="text-[13px] sm:text-[14px] text-[var(--text-secondary)] leading-relaxed mb-4 md:mb-5 max-w-[510px]">
            Pragmatic solutions, proven frameworks, and expert guidance to build resilient,
            compliant, and future-ready organizations.
          </p>

          {/* CTAs */}
          <div className="home-hero-actions flex flex-wrap gap-3 mb-4 md:mb-5">
            <Link
              href="/contact"
              className="
                inline-flex items-center gap-2 px-5 py-2.5 rounded-[7px]
                text-[12px] font-semibold text-white
                bg-gradient-to-r from-[var(--purple)] to-[var(--blue)]
                border border-[rgba(113,70,255,0.5)]
                shadow-[0_0_24px_rgba(113,70,255,0.32)]
                transition-all duration-200 group
                hover:-translate-y-px hover:shadow-[0_0_36px_rgba(113,70,255,0.5)]
              "
            >
              Book a Consultation
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
            <a
              href="#services"
              className="
                inline-flex items-center gap-2 px-5 py-2.5 rounded-[7px]
                text-[12px] font-semibold text-[var(--text-primary)]
                bg-[rgba(7,17,44,0.6)] backdrop-blur-sm
                border border-[var(--border-default)]
                transition-all duration-200 group
                hover:border-[var(--border-cyan)] hover:bg-[rgba(19,200,255,0.06)]
              "
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" strokeWidth="2"
                stroke="var(--cyan)" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" />
              </svg>
              Explore Our Services
            </a>
          </div>

          {/* Trust items */}
          <div className="home-trust-items flex flex-wrap items-center gap-x-3 gap-y-2 lg:gap-x-3.5">
            {TRUST_ITEMS.map(({ icon, label }) => (
              <div key={label} className="flex items-center gap-1.5 shrink-0">
                {icon}
                <span className="text-[12px] text-[var(--text-muted)] whitespace-nowrap">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right illustration ── */}
        <div className="home-hero-visual flex-1 hidden md:flex justify-center items-center w-full md:max-w-[46%] md:scale-[1.08] mix-blend-lighten">
          <HeroIllustration />
        </div>
      </Container>
    </section>
  );
}
