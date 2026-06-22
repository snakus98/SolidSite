import Link from "next/link";
import { CalendarDays } from "lucide-react";
import Container from "@/components/ui/Container";

const CYAN = "#19c8ff";
const PURPLE = "#9b6bff";

const stroke = (c: string) => ({
  stroke: c,
  strokeWidth: 2.1,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  fill: "none",
});

function IconPeople({ c }: { c: string }) {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <circle cx="19" cy="17" r="6" {...stroke(c)} />
      <path d="M8 38 c0 -7 5 -11 11 -11 c6 0 11 4 11 11" {...stroke(c)} />
      <path d="M32 13 a5.5 5.5 0 0 1 0 11" {...stroke(c)} strokeWidth={1.9} />
      <path d="M33 28 c5 0 9 4 9 10" {...stroke(c)} strokeWidth={1.9} />
    </svg>
  );
}
function IconRoadmap({ c }: { c: string }) {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <path d="M18 8 L8 12 V40 L18 36 L30 40 L40 36 V8 L30 12 Z" {...stroke(c)} />
      <path d="M18 8 V36 M30 12 V40" {...stroke(c)} strokeWidth={1.7} />
    </svg>
  );
}
function IconDocCheck({ c }: { c: string }) {
  return (
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <path d="M13 6 H29 L37 14 V42 H13 Z" {...stroke(c)} />
      <path d="M29 6 V14 H37" {...stroke(c)} strokeWidth={1.7} />
      <path d="M18 20 H32 M18 25 H32" {...stroke(c)} strokeWidth={1.7} />
      <circle cx="25" cy="33" r="6" {...stroke(c)} strokeWidth={1.8} />
      <path d="M22 33 l2 2 l4 -4.5" {...stroke(c)} strokeWidth={1.8} />
    </svg>
  );
}

const STEPS = [
  { Icon: IconPeople, accent: CYAN, text: "Share your environment, priorities, and constraints." },
  { Icon: IconRoadmap, accent: PURPLE, text: "We map a phased roadmap covering cloud, endpoints, support, and continuity." },
  { Icon: IconDocCheck, accent: CYAN, text: "Leave with a costed proposal and practical next steps." },
];

const inputCls =
  "w-full rounded-[10px] bg-[rgba(6,14,34,0.7)] border border-[var(--border-default)] px-4 py-3.5 text-[14px] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] outline-none transition-colors duration-200 focus:border-[var(--border-cyan)]";

export default function ITCTA() {
  return (
    <section className="py-12 md:py-16" aria-labelledby="it-cta-heading">
      <Container>
        {/* gradient border wrapper */}
        <div className="rounded-large p-[1.5px] bg-gradient-to-br from-[rgba(19,200,255,0.5)] via-[rgba(40,90,200,0.25)] to-[rgba(155,107,255,0.5)]">
          <div className="rounded-large bg-[#040b1e] px-7 py-9 md:py-12 md:pl-7 md:pr-12">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
              {/* ── Left ── */}
              <div className="flex flex-col border-l-2 border-[var(--purple)] pl-6">
                <h2
                  id="it-cta-heading"
                  className="text-[clamp(28px,3.4vw,40px)] font-extrabold leading-[1.08] tracking-tight text-[var(--text-primary)] mb-3"
                >
                  Plan your IT roadmap with specialists who connect infrastructure, resilience, and
                  business performance.
                </h2>
                <p className="text-[15px] md:text-[16px] font-semibold text-grad-purple mb-8">
                  Talk to us about your requirements
                </p>

                <div className="flex-1 flex flex-col">
                  {STEPS.map((s, i) => (
                    <div key={i} className="flex gap-5 flex-1">
                      <div className="flex flex-col items-center">
                        <span
                          className="grid place-items-center w-[68px] h-[68px] rounded-full shrink-0"
                          style={{ background: `${s.accent}14`, border: `1px solid ${s.accent}55` }}
                        >
                          <span style={{ width: 38, height: 38, filter: `drop-shadow(0 0 5px ${s.accent}cc)` }}>
                            <s.Icon c={s.accent} />
                          </span>
                        </span>
                        {i < STEPS.length - 1 && (
                          <span className="w-px flex-1 my-2 border-l border-dashed border-[var(--border-default)]" />
                        )}
                      </div>
                      <p className="text-[14.5px] text-[var(--text-secondary)] leading-relaxed pt-4 max-w-[440px]">
                        {s.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Right: form ── */}
              <div className="lg:border-l lg:border-[var(--border-default)] lg:pl-12">
                <h3 className="text-[22px] md:text-[28px] font-bold text-center text-[var(--text-primary)] mb-8">
                  Book a 30-minute session
                </h3>

                <form className="space-y-5">
                  <div>
                    <label htmlFor="it-name" className="block text-[14px] text-[var(--text-secondary)] mb-2">Full name</label>
                    <input id="it-name" name="name" type="text" placeholder="Enter your full name" className={inputCls} />
                  </div>
                  <div>
                    <label htmlFor="it-email" className="block text-[14px] text-[var(--text-secondary)] mb-2">Work email</label>
                    <input id="it-email" name="email" type="email" placeholder="Enter your work email" className={inputCls} />
                  </div>
                  <div>
                    <label htmlFor="it-session" className="block text-[14px] text-[var(--text-secondary)] mb-2">Book a session</label>
                    <div className="relative">
                      <select id="it-session" name="session" defaultValue="" className={`${inputCls} appearance-none pr-10 cursor-pointer`}>
                        <option value="" disabled>Select a date &amp; time</option>
                        <option>This week — morning</option>
                        <option>This week — afternoon</option>
                        <option>Next week — morning</option>
                        <option>Next week — afternoon</option>
                      </select>
                      <svg className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="
                      mt-2 flex items-center justify-center gap-3 w-full px-6 py-4 rounded-[12px]
                      text-[16px] font-semibold text-white text-center
                      bg-gradient-to-r from-[var(--purple)] to-[var(--blue)]
                      border border-[rgba(113,70,255,0.5)]
                      shadow-[0_0_30px_rgba(113,70,255,0.4)]
                      transition-all duration-200 hover:-translate-y-px hover:shadow-[0_0_44px_rgba(113,70,255,0.6)]
                    "
                  >
                    <CalendarDays size={24} className="text-white shrink-0" strokeWidth={2} />
                    Book IT consultation
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
