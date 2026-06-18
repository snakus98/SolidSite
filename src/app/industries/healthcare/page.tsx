import Link from "next/link";
import { CalendarDays } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import HealthcareVisual from "@/components/industries/HealthcareVisual";
import HealthcarePainpoints from "@/components/industries/HealthcarePainpoints";
import HealthcareWhatYouGet from "@/components/industries/HealthcareWhatYouGet";
import HealthcareCTA from "@/components/industries/HealthcareCTA";

export default function HealthcarePage() {
  return (
    <>
      <Header />
      <main>
        {/* ── Hero ── */}
        <section className="relative pt-[120px] pb-12 md:pt-[124px] md:pb-16 overflow-hidden" aria-labelledby="healthcare-hero-heading">
          <div
            aria-hidden="true"
            className="absolute right-0 top-0 w-[55%] h-full pointer-events-none"
            style={{ background: "radial-gradient(820px 640px at 70% 40%, rgba(40,120,255,0.10), transparent 65%)" }}
          />

          <Container className="flex flex-col md:flex-row items-center gap-8 md:gap-6">
            {/* Left content */}
            <div className="flex-1 md:max-w-[46%] animate-fade-up">
              <p className="text-[11px] sm:text-[12px] tracking-[0.2em] font-bold text-[var(--cyan)] mb-5 uppercase">
                Security &amp; Compliance
              </p>

              <h1
                id="healthcare-hero-heading"
                className="text-[clamp(32px,4vw,52px)] font-extrabold leading-[1.05] tracking-tight text-[var(--text-primary)] mb-5"
              >
                Security &amp; Compliance for Healthcare Providers
              </h1>

              <p className="text-[14px] sm:text-[15px] text-[var(--text-secondary)] leading-relaxed mb-8 max-w-[540px]">
                NIS2-ready security that protects patient data and clinical systems without
                disrupting care. We implement proportionate controls, incident readiness, and
                audit evidence your board can trust.
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
                Book a NIS2 readiness review
              </Link>
            </div>

            {/* Right illustration */}
            <div className="flex-1 md:max-w-[54%] w-full flex justify-center">
              <HealthcareVisual />
            </div>
          </Container>
        </section>

        {/* ── Key painpoints ── */}
        <HealthcarePainpoints />

        {/* ── What you get ── */}
        <HealthcareWhatYouGet />

        {/* ── Plan your programme (CTA + booking) ── */}
        <HealthcareCTA />
      </main>
      <Footer />
    </>
  );
}
