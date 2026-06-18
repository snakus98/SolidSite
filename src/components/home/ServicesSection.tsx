import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import { SERVICES } from "@/data/home";
import {
  IconCybersecurity,
  IconCompliance,
  IconFramework,
  IconTraining,
  IconAdvisory,
} from "@/components/icons/ServiceIcons";

const ICON_MAP: Record<string, React.ReactNode> = {
  cybersecurity: <IconCybersecurity size={58} />,
  compliance: <IconCompliance size={58} />,
  framework: <IconFramework size={58} />,
  training: <IconTraining size={58} />,
  advisory: <IconAdvisory size={58} />,
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-6 md:py-7" aria-labelledby="services-heading">
      <Container>
        <SectionLabel>Our Services</SectionLabel>
        <h2
          id="services-heading"
          className="sr-only"
        >
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              className="
                group flex flex-col items-center text-center p-5 min-h-[225px] rounded-[9px]
                bg-[var(--bg-card)] border border-[var(--border-default)]
                transition-all duration-300
                hover:-translate-y-1.5
                hover:border-[var(--border-cyan)]
                hover:shadow-[0_0_32px_rgba(19,200,255,0.14)]
              "
            >
              {/* Icon */}
              <div className="mb-3">
                {ICON_MAP[service.icon]}
              </div>

              {/* Title */}
              <h3 className="text-[15.5px] font-bold text-[var(--text-primary)] mb-2 leading-snug">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[12.5px] text-[var(--text-secondary)] leading-relaxed flex-1 mb-3">
                {service.description}
              </p>

              {/* Learn more */}
              <Link
                href={service.href}
                className="
                  inline-flex items-center gap-1.5
                  text-[12.5px] font-medium text-[var(--cyan)]
                  transition-all duration-200
                  group-hover:gap-2.5
                "
              >
                Learn more
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
