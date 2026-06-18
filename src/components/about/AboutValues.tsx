import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";

const VALUES = [
  { icon: "/images/values/integrity.png", title: "Integrity", description: "We do the right thing." },
  { icon: "/images/values/clarity.png", title: "Clarity", description: "We make complexity understandable." },
  { icon: "/images/values/accountability.png", title: "Accountability", description: "We own outcomes and commitments." },
  { icon: "/images/values/excellence.png", title: "Excellence", description: "We pursue high quality in everything we do." },
  { icon: "/images/values/impact.png", title: "Impact", description: "We focus on what drives real value." },
];

export default function AboutValues() {
  return (
    <section className="pt-0 pb-12 md:pb-16" aria-labelledby="values-heading">
      <Container>
        <div className="rounded-large border border-[var(--border-default)] bg-[rgba(7,16,40,0.45)] p-7 md:p-9">
          <SectionLabel>How We Work</SectionLabel>
          <h2 id="values-heading" className="sr-only">How We Work</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 mt-5 divide-y sm:divide-y-0 lg:divide-x divide-[var(--border-default)]">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="flex items-start gap-3.5 py-4 lg:py-0 lg:px-5 first:lg:pl-0 last:lg:pr-0"
              >
                <Image
                  src={v.icon}
                  alt={v.title}
                  width={1254}
                  height={1254}
                  className="w-12 h-12 shrink-0 object-contain"
                />
                <div>
                  <h3 className="text-[16px] font-bold text-[var(--text-primary)] mb-1 leading-snug">
                    {v.title}
                  </h3>
                  <p className="text-[12.5px] text-[var(--text-secondary)] leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
