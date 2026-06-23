import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { Headset } from "lucide-react";

export default function ProjectsCTA() {
  return (
    <section className="py-8 md:py-14" aria-labelledby="projects-cta-heading">
      <Container>
        <div className="rounded-large border border-[var(--border-default)] bg-[rgba(7,17,44,0.5)] px-6 py-7 md:px-9 md:py-8">
          <div className="flex flex-col lg:flex-row lg:items-center gap-7 lg:gap-10">
            {/* Left */}
            <div className="flex items-center gap-5 flex-1">
              <span className="grid place-items-center w-14 h-14 rounded-full shrink-0 bg-gradient-to-br from-[var(--purple)] to-[var(--blue)] shadow-[0_0_24px_rgba(113,70,255,0.4)]">
                <Headset size={26} className="text-white" strokeWidth={2} />
              </span>
              <div>
                <h2 id="projects-cta-heading" className="text-[20px] md:text-[24px] font-bold text-[var(--text-primary)] mb-1">
                  Have a similar project in mind?
                </h2>
                <p className="text-[13.5px] text-[var(--text-secondary)] leading-relaxed max-w-[460px]">
                  Let&apos;s discuss how we can help you achieve your goals with secure, scalable and
                  innovative solutions.
                </p>
              </div>
            </div>

            {/* Right buttons */}
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Button href="/contact" variant="primary" size="lg" icon={<span aria-hidden>→</span>}>
                Book a Consultation
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Contact us
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
