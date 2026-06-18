import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import { OUTCOMES } from "@/data/home";
import {
  IconReduceRisk,
  IconEnsureCompliance,
  IconImprovePerformance,
  IconBuildResilience,
  IconDriveGrowth,
} from "@/components/icons/OutcomeIcons";

const ICON_MAP: Record<string, React.ReactNode> = {
  risk: <IconReduceRisk size={40} />,
  compliance: <IconEnsureCompliance size={40} />,
  performance: <IconImprovePerformance size={40} />,
  resilience: <IconBuildResilience size={40} />,
  growth: <IconDriveGrowth size={40} />,
};

export default function BusinessOutcomesSection() {
  return (
    <section
      className="py-5 bg-[rgba(4,12,34,0.7)] border-t border-b border-[var(--border-default)]"
      aria-labelledby="outcomes-heading"
    >
      <Container>
        <SectionLabel>Measurable Business Outcomes</SectionLabel>
        <h2 id="outcomes-heading" className="sr-only">Measurable Business Outcomes</h2>

        <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-[var(--border-default)] rounded-[9px] border border-[var(--border-default)] px-4 py-3">
          {OUTCOMES.map((outcome) => (
            <div
              key={outcome.id}
              className="flex-1 flex items-start gap-2.5 py-4 sm:py-1 sm:px-4 first:pl-0 last:pr-0"
            >
              <div className="shrink-0 mt-0.5">{ICON_MAP[outcome.icon]}</div>
              <div>
                <h3 className="text-[13px] font-bold text-[var(--text-primary)] mb-0.5">
                  {outcome.title}
                </h3>
                <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">
                  {outcome.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
