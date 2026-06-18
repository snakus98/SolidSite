import Image from "next/image";
import Container from "@/components/ui/Container";
import { FRAMEWORKS } from "@/data/home";

export default function FrameworksStrip() {
  return (
    <section
      id="frameworks"
      className="border-t border-b border-[var(--border-default)] py-5 bg-[rgba(4,12,34,0.7)]"
      aria-label="Trusted expertise across global frameworks"
    >
      <Container>
        <p className="text-[11px] tracking-[0.22em] uppercase font-bold text-[var(--cyan)] mb-4">
          Trusted Expertise Across Global Frameworks
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 items-center">
          {FRAMEWORKS.map(({ label, image, width, height, displayHeight }) => (
            <div
              key={label}
              className="flex items-center justify-center px-4 py-3 group border-r border-[var(--border-default)] last:border-r-0"
            >
              <Image
                src={image}
                alt={label}
                width={width}
                height={height}
                style={{ height: displayHeight, width: "auto" }}
                className="object-contain mix-blend-lighten transition-transform duration-200 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
