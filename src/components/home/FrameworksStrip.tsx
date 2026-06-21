import Image from "next/image";
import type { CSSProperties } from "react";
import Container from "@/components/ui/Container";
import { FRAMEWORKS } from "@/data/home";

export default function FrameworksStrip() {
  return (
    <section
      id="frameworks"
      className="frameworks-strip shrink-0 border-t border-b border-[var(--border-default)] py-3 sm:py-4 lg:py-5 bg-[rgba(4,12,34,0.7)]"
      aria-label="Trusted expertise across global frameworks"
    >
      <Container>
        <p className="text-[10px] sm:text-[11px] tracking-[0.22em] uppercase font-bold text-[var(--cyan)] mb-3 sm:mb-4">
          Trusted Expertise Across Global Frameworks
        </p>
        <div className="grid grid-cols-3 lg:grid-cols-6 items-center">
          {FRAMEWORKS.map(({ label, image, width, height, displayHeight }) => (
            <div
              key={label}
              className="flex items-center justify-center px-2 py-2 sm:px-4 sm:py-3 group border-r border-[var(--border-default)] [&:nth-child(3n)]:border-r-0 lg:[&:nth-child(3n)]:border-r lg:last:border-r-0"
            >
              <Image
                src={image}
                alt={label}
                width={width}
                height={height}
                style={{
                  "--framework-logo-height": `${displayHeight}px`,
                  "--framework-logo-height-mobile": `${Math.max(24, Math.round(displayHeight * 0.72))}px`,
                  "--framework-logo-height-compact": `${Math.max(22, Math.round(displayHeight * 0.62))}px`,
                } as CSSProperties}
                className="h-[var(--framework-logo-height-mobile)] w-auto object-contain mix-blend-lighten transition-transform duration-200 group-hover:scale-105 sm:h-[var(--framework-logo-height)]"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
