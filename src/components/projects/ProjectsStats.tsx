import Container from "@/components/ui/Container";
import { ShieldCheck, Users, Globe, LineChart } from "lucide-react";

const CYAN = "#19c8ff";
const PURPLE = "#9b6bff";

const STATS = [
  { Icon: ShieldCheck, accent: PURPLE, value: "50+", label: "Projects delivered" },
  { Icon: Users, accent: CYAN, value: "30+", label: "Satisfied clients" },
  { Icon: Globe, accent: PURPLE, value: "4", label: "Countries served" },
  { Icon: LineChart, accent: CYAN, value: "100%", label: "Commitment to security & quality" },
];

export default function ProjectsStats() {
  return (
    <section className="py-6 md:py-8" aria-label="Project impact statistics">
      <Container>
        <div className="rounded-large border border-[var(--border-default)] bg-[rgba(7,17,44,0.5)] px-6 py-7 md:px-10 md:py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-7 lg:gap-5">
            {STATS.map((s) => (
              <div key={s.label} className="flex items-center gap-4">
                <span
                  className="grid place-items-center w-12 h-12 rounded-full shrink-0"
                  style={{ background: `${s.accent}14`, border: `1px solid ${s.accent}55` }}
                >
                  <s.Icon size={22} style={{ color: s.accent }} strokeWidth={2} />
                </span>
                <div>
                  <p className="text-[26px] md:text-[30px] font-extrabold leading-none text-grad-purple">
                    {s.value}
                  </p>
                  <p className="text-[12.5px] text-[var(--text-secondary)] mt-1.5">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
