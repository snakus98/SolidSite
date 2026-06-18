import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import { INDUSTRIES } from "@/data/industries";
import {
  IconManufacturing,
  IconNGO,
  IconHealthcare,
} from "@/components/icons/IndustryIcons";

const ICON_MAP: Record<string, React.ReactNode> = {
  manufacturing: <IconManufacturing size={56} />,
  ngo: <IconNGO size={56} />,
  healthcare: <IconHealthcare size={56} />,
};

export default function IndustriesPage() {
  return (
    <>
      <Header />
      <main className="pt-[96px]">
        {/* Page intro */}
        <section className="py-12 md:py-16">
          <Container>
            <SectionLabel>Industries We Serve</SectionLabel>
            <h1 className="text-3xl md:text-4xl font-extrabold text-[var(--text-primary)] mb-4 max-w-2xl">
              Security and compliance built around your sector
            </h1>
            <p className="text-[var(--text-secondary)] text-sm md:text-base max-w-2xl leading-relaxed">
              Every industry faces a different risk landscape and regulatory environment.
              We tailor our cybersecurity and compliance programs to the operational realities
              of the sectors we work with.
            </p>
          </Container>
        </section>

        {/* Industry sections */}
        {INDUSTRIES.map((industry, index) => (
          <section
            key={industry.id}
            id={industry.id}
            className={`py-12 md:py-16 ${index % 2 === 1 ? "bg-[rgba(4,12,34,0.4)]" : ""}`}
          >
            <Container>
              <div
                className={`
                  flex flex-col md:flex-row gap-10 items-start
                  ${index % 2 === 1 ? "md:flex-row-reverse" : ""}
                `}
              >
                {/* Icon panel */}
                <div
                  className="
                    flex-shrink-0 w-full md:w-[180px]
                    flex items-center justify-center
                    py-8 rounded-card
                    bg-[var(--bg-card)] border border-[var(--border-default)]
                  "
                >
                  {ICON_MAP[industry.icon]}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <SectionLabel>{industry.eyebrow}</SectionLabel>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--text-primary)] mb-3">
                    {industry.title}
                  </h2>
                  <p className="text-[var(--text-secondary)] text-sm md:text-base leading-relaxed mb-5 max-w-2xl">
                    {industry.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl">
                    {industry.points.map((point) => (
                      <li
                        key={point}
                        className="
                          flex items-start gap-2.5 text-[12px] text-[var(--text-secondary)]
                          leading-relaxed
                        "
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--cyan)] flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Container>
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
}
