import Container from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";

export default function FinalCTASection() {
  return (
    <section className="py-6 md:py-7 section-rule" aria-labelledby="cta-heading">
      <Container>
        <div
          className="
            relative overflow-hidden rounded-large border
            border-[rgba(113,70,255,0.45)]
            bg-gradient-to-br from-[#08103a] via-[#060e2c] to-[#030819]
            shadow-[0_0_60px_rgba(113,70,255,0.18),inset_0_0_80px_rgba(19,200,255,0.04)]
            flex flex-col md:flex-row items-center gap-6 p-5 md:px-7 md:py-4
          "
        >
          {/* Cyan glow corner */}
          <div
            aria-hidden="true"
            className="absolute top-0 left-0 w-64 h-40 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at top left, rgba(19,200,255,0.10), transparent 70%)",
            }}
          />

          {/* Shield illustration */}
          <div className="w-[120px] md:w-[150px] shrink-0 z-10 mix-blend-lighten">
            <Image
              src="/images/cta-shield.png"
              alt="Security shield protecting your organization"
              width={1254}
              height={1254}
              className="w-full h-auto"
              unoptimized
            />
          </div>

          {/* Copy */}
          <div className="flex-1 text-center md:text-left z-10">
            <h2
              id="cta-heading"
              className="text-[clamp(20px,2.5vw,28px)] font-extrabold text-[var(--text-primary)] leading-snug mb-1.5"
            >
              Ready to strengthen, secure, and scale?
            </h2>
            <p className="text-[11.5px] text-[var(--text-secondary)] max-w-[500px] leading-relaxed">
              Let&apos;s build a secure, compliant, and resilient future for your organization.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3 shrink-0 z-10 w-full md:w-auto">
            <Link
              href="/contact"
              className="
                inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-[7px]
                text-[11.5px] font-semibold text-white whitespace-nowrap
                bg-gradient-to-r from-[var(--purple)] to-[var(--blue)]
                border border-[rgba(113,70,255,0.5)]
                shadow-[0_0_22px_rgba(113,70,255,0.35)]
                transition-all duration-200 group
                hover:-translate-y-px hover:shadow-[0_0_36px_rgba(113,70,255,0.55)]
              "
            >
              Book a Consultation
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/contact"
              className="
                inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-[7px]
                text-[11.5px] font-semibold text-[var(--text-primary)]
                bg-[rgba(7,17,44,0.6)] backdrop-blur-sm
                border border-[var(--border-default)]
                transition-all duration-200 group
                hover:border-[var(--border-cyan)] hover:bg-[rgba(19,200,255,0.06)]
              "
            >
              <Calendar size={15} aria-hidden="true" />
              Schedule a Call
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
