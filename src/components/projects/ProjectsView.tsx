"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import ProjectsHeroVisual from "@/components/projects/ProjectsHeroVisual";
import { FileText, ArrowRight } from "lucide-react";

const CATEGORIES = [
  "All projects",
  "Cybersecurity",
  "Compliance",
  "Cloud",
  "Software",
  "Microsoft 365",
] as const;

type Category = Exclude<(typeof CATEGORIES)[number], "All projects">;

type Project = {
  category: Category;
  title: string;
  desc: string;
  image: string;
  accent: string;
};

const CYAN = "#19c8ff";
const PURPLE = "#9b6bff";
const BLUE = "#3b82f6";

const PROJECTS: Project[] = [
  {
    category: "Compliance",
    title: "Data Protection Compliance (GDPR)",
    desc: "Implemented a GDPR compliance framework, data mapping, and privacy governance program.",
    image: "/images/project-taz1.png",
    accent: PURPLE,
  },
  {
    category: "Cybersecurity",
    title: "Security Assessment & ISO 27001 Readiness",
    desc: "Performed a complete security assessment and built a roadmap toward ISO 27001 certification.",
    image: "/images/project-taz2.png",
    accent: CYAN,
  },
  {
    category: "Cloud",
    title: "Cloud Infrastructure Modernization",
    desc: "Migrated workloads to Azure, optimized architecture and reduced infrastructure costs.",
    image: "/images/project-taz4.png",
    accent: BLUE,
  },
  {
    category: "Microsoft 365",
    title: "Microsoft 365 Security & Adoption",
    desc: "Secured tenant configuration, implemented governance and improved user adoption.",
    image: "/images/project-taz5.png",
    accent: PURPLE,
  },
  {
    category: "Software",
    title: "Custom Business Management Platform",
    desc: "Designed and developed a tailored platform to automate key operations and improve data visibility.",
    image: "/images/project-taz3.png",
    accent: CYAN,
  },
  {
    category: "Cybersecurity",
    title: "Penetration Testing & Vulnerability Assessment",
    desc: "Identified critical vulnerabilities and provided remediation plan to strengthen security posture.",
    image: "/images/project-taz6.png",
    accent: BLUE,
  },
];

export default function ProjectsView() {
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>("All projects");
  const visible =
    filter === "All projects" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-[120px] pb-10 md:pt-[128px] overflow-hidden" aria-labelledby="projects-hero-heading">
        <div
          aria-hidden="true"
          className="absolute right-0 top-0 w-[60%] h-full pointer-events-none"
          style={{ background: "radial-gradient(820px 660px at 72% 36%, rgba(40,120,255,0.12), transparent 65%)" }}
        />

        <Container className="flex flex-col md:flex-row items-center gap-8">
          {/* Left */}
          <div className="flex-1 md:max-w-[48%] animate-fade-up">
            <p className="text-[11px] sm:text-[12px] tracking-[0.22em] font-bold text-[var(--cyan)] mb-5 uppercase">
              Our Projects
            </p>
            <h1
              id="projects-hero-heading"
              className="text-[clamp(34px,4.6vw,58px)] font-extrabold leading-[1.03] tracking-tight text-[var(--text-primary)] mb-5"
            >
              Real projects.
              <br />
              <span className="text-grad-purple">Measurable impact.</span>
            </h1>
            <p className="text-[14px] sm:text-[15px] text-[var(--text-secondary)] leading-relaxed mb-7 max-w-[520px]">
              Explore a selection of projects where we helped organizations strengthen security,
              ensure compliance, modernize IT, and build scalable digital solutions.
            </p>

            {/* Filter chips */}
            <div className="flex flex-wrap gap-2.5">
              {CATEGORIES.map((c) => {
                const active = filter === c;
                return (
                  <button
                    key={c}
                    onClick={() => setFilter(c)}
                    className={`
                      px-4 py-2 rounded-[8px] text-[13px] font-semibold transition-all duration-200
                      ${active
                        ? "text-white bg-gradient-to-r from-[var(--purple)] to-[var(--blue)] border border-[rgba(113,70,255,0.5)] shadow-[0_0_20px_rgba(113,70,255,0.3)]"
                        : "text-[var(--text-secondary)] bg-[rgba(7,17,44,0.6)] border border-[var(--border-default)] hover:text-[var(--text-primary)] hover:border-[var(--border-cyan)]"
                      }
                    `}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right illustration */}
          <div className="flex-1 md:max-w-[52%] w-full flex justify-center">
            <ProjectsHeroVisual />
          </div>
        </Container>
      </section>

      {/* ── Projects grid ── */}
      <section className="py-10 md:py-12" aria-label="Project case studies">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((p) => (
              <article
                key={p.title}
                className="group flex flex-col rounded-large border border-[var(--border-default)] bg-[var(--bg-card)] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-cyan)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    width={1448}
                    height={1086}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    unoptimized
                  />
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <p className="text-[11px] font-bold tracking-[0.18em] uppercase mb-2" style={{ color: p.accent }}>
                    {p.category}
                  </p>
                  <h3 className="text-[18px] font-bold text-[var(--text-primary)] leading-snug mb-2.5">
                    {p.title}
                  </h3>
                  <p className="text-[13px] text-[var(--text-secondary)] leading-relaxed mb-5">
                    {p.desc}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-auto inline-flex items-center gap-2 text-[13px] font-semibold text-[var(--cyan)] transition-all duration-200 hover:gap-3"
                  >
                    <FileText size={15} />
                    Read case study
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
