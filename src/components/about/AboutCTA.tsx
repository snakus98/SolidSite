import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { Calendar } from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="pb-14 md:pb-20" aria-labelledby="about-cta-heading">
      <Container>
        <div
          className="
            relative overflow-hidden rounded-large border border-[rgba(40,90,200,0.35)]
            bg-gradient-to-br from-[#0a1340] via-[#070f2c] to-[#03081a]
            shadow-[0_0_60px_rgba(40,120,255,0.12),inset_0_0_90px_rgba(19,200,255,0.04)]
            flex flex-col md:flex-row items-center gap-6 md:gap-8 p-6 md:px-9 md:py-7
          "
        >
          {/* Handshake hologram */}
          <div className="w-[150px] md:w-[190px] shrink-0 z-10">
            <Image
              src="/images/partner.png"
              alt="Partnership handshake hologram"
              width={1254}
              height={1254}
              className="w-full h-auto"
              unoptimized
            />
          </div>

          {/* Copy */}
          <div className="flex-1 text-center md:text-left z-10">
            <h2
              id="about-cta-heading"
              className="text-[clamp(26px,3vw,38px)] font-extrabold text-[var(--text-primary)] leading-tight mb-2"
            >
              Partner with us
            </h2>
            <p className="text-[14px] md:text-[15px] text-[var(--text-secondary)] max-w-[440px] leading-relaxed">
              Let&apos;s connect to discuss how we can help you achieve your goals and create
              lasting impact.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3 shrink-0 z-10 w-full sm:w-auto md:min-w-[260px]">
            <Link
              href="/contact"
              className="
                inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-[10px]
                text-[15px] font-semibold text-white whitespace-nowrap
                bg-gradient-to-r from-[var(--purple)] to-[var(--blue)]
                border border-[rgba(113,70,255,0.5)]
                shadow-[0_0_26px_rgba(113,70,255,0.4)]
                transition-all duration-200 group
                hover:-translate-y-px hover:shadow-[0_0_40px_rgba(113,70,255,0.6)]
              "
            >
              Contact us
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/contact"
              className="
                inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-[10px]
                text-[15px] font-semibold text-[var(--text-primary)]
                bg-[rgba(7,17,44,0.5)] backdrop-blur-sm
                border border-[var(--border-default)]
                transition-all duration-200
                hover:border-[var(--border-cyan)] hover:bg-[rgba(19,200,255,0.06)]
              "
            >
              <Calendar size={17} aria-hidden="true" />
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
