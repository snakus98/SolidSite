import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import ManufacturingVisual from "@/components/industries/ManufacturingVisual";
import PainpointsCarousel from "@/components/industries/PainpointsCarousel";
import WhatYouGet from "@/components/industries/WhatYouGet";
import ManufacturingCTA from "@/components/industries/ManufacturingCTA";

export default function ManufacturingIIoTPage() {
  return (
    <>
      <Header />
      <main>
        {/* ── Hero ── */}
        <section className="relative pt-[120px] pb-12 md:pt-[124px] md:pb-16 overflow-hidden" aria-labelledby="iiot-hero-heading">
          <div
            aria-hidden="true"
            className="absolute right-0 top-0 w-[55%] h-full pointer-events-none"
            style={{ background: "radial-gradient(820px 640px at 70% 35%, rgba(40,120,255,0.10), transparent 65%)" }}
          />

          <Container className="flex flex-col md:flex-row items-center gap-8 md:gap-6">
            {/* Left content */}
            <div className="flex-1 md:max-w-[46%] animate-fade-up">
              <p className="text-[11px] sm:text-[12px] tracking-[0.2em] font-bold text-[var(--cyan)] mb-5 uppercase">
                Security &amp; Resilience
              </p>

              <h1
                id="iiot-hero-heading"
                className="text-[clamp(32px,4vw,52px)] font-extrabold leading-[1.05] tracking-tight text-[var(--text-primary)] mb-5"
              >
                Manufacturing &amp; Industrial IoT (IIoT)
              </h1>

              <p className="text-[14px] sm:text-[15px] text-[var(--text-secondary)] leading-relaxed max-w-[540px]">
                Secure plants, connected products, and supply chains—without stopping the line.
                We help discrete and process manufacturers modernise securely across OT/IT/Cloud,
                align with NIS2 where in scope, prepare for the EU Cyber Resilience Act (CRA) if
                you ship connected products, and run evidence-backed programmes your board can trust.
              </p>
            </div>

            {/* Right illustration */}
            <div className="flex-1 md:max-w-[54%] w-full flex justify-center">
              <ManufacturingVisual />
            </div>
          </Container>
        </section>

        {/* ── Key painpoints ── */}
        <PainpointsCarousel />

        {/* ── What you get ── */}
        <WhatYouGet />

        {/* ── Plan your roadmap (CTA + booking) ── */}
        <ManufacturingCTA />
      </main>
      <Footer />
    </>
  );
}
