import Image from "next/image";
import Link from "next/link";
import { CalendarDays } from "lucide-react";
import Container from "@/components/ui/Container";

const STEPS = [
  {
    icon: "/images/cta/tat1.png",
    accent: "#19c8ff",
    text: "Share your plants, connected products, supplier landscape, and regulatory pressures—we build the phased plan.",
  },
  {
    icon: "/images/cta/tat5.png",
    accent: "#9b6bff",
    text: "You receive a sequenced roadmap covering Article 21 measures, CRA milestones, and integration guardrails backed by evidence.",
  },
  {
    icon: "/images/cta/tat4.png",
    accent: "#19c8ff",
    text: "Leave with a costed proposal and executive-ready summary your board can approve.",
  },
];

const inputCls =
  "w-full rounded-[10px] bg-[rgba(6,14,34,0.7)] border border-[var(--border-default)] px-4 py-3.5 text-[14px] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] outline-none transition-colors duration-200 focus:border-[var(--border-cyan)]";

export default function ManufacturingCTA() {
  return (
    <section className="py-12 md:py-16" aria-labelledby="mfg-cta-heading">
      <Container>
        {/* gradient border wrapper */}
        <div className="rounded-large p-[1.5px] bg-gradient-to-br from-[rgba(19,200,255,0.5)] via-[rgba(40,90,200,0.25)] to-[rgba(155,107,255,0.5)]">
          <div className="rounded-large bg-[#040b1e] px-7 py-9 md:px-12 md:py-12">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
              {/* ── Left ── */}
              <div className="flex flex-col">
                <h2
                  id="mfg-cta-heading"
                  className="text-[clamp(28px,3.4vw,40px)] font-extrabold leading-[1.08] tracking-tight text-[var(--text-primary)] mb-2"
                >
                  Plan your manufacturing security, NIS2, and CRA roadmap
                </h2>
                <p className="text-[15px] md:text-[16px] text-[var(--text-secondary)] mb-8">
                  Talk to us about your requirements
                </p>

                {/* steps — evenly distributed to fill the column */}
                <div className="flex-1 flex flex-col">
                  {STEPS.map((s, i) => (
                    <div key={i} className="flex gap-5 flex-1">
                      <div className="flex flex-col items-center">
                        <span
                          className="grid place-items-center w-[76px] h-[76px] rounded-full shrink-0"
                          style={{ background: `${s.accent}12`, border: `1px solid ${s.accent}45` }}
                        >
                          <Image src={s.icon} alt="" width={1254} height={1254} className="w-12 h-12 object-contain" unoptimized />
                        </span>
                        {i < STEPS.length - 1 && (
                          <span className="w-px flex-1 my-2 border-l border-dashed border-[var(--border-default)]" />
                        )}
                      </div>
                      <p className="text-[14.5px] text-[var(--text-secondary)] leading-relaxed pt-3.5 max-w-[440px]">
                        {s.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Right: form ── */}
              <div className="lg:border-l lg:border-[var(--border-default)] lg:pl-12">
                <h3 className="text-[22px] md:text-[26px] font-bold text-[var(--text-primary)] mb-7">
                  Book a 30-minute session
                </h3>

                <form className="space-y-5">
                  <div>
                    <label htmlFor="cta-name" className="block text-[14px] text-[var(--text-secondary)] mb-2">Full name</label>
                    <input id="cta-name" name="name" type="text" placeholder="Full name" className={inputCls} />
                  </div>
                  <div>
                    <label htmlFor="cta-email" className="block text-[14px] text-[var(--text-secondary)] mb-2">Work email</label>
                    <input id="cta-email" name="email" type="email" placeholder="Work email" className={inputCls} />
                  </div>
                  <div>
                    <label htmlFor="cta-session" className="block text-[14px] text-[var(--text-secondary)] mb-2">Book a session</label>
                    <div className="relative">
                      <select id="cta-session" name="session" defaultValue="" className={`${inputCls} appearance-none pr-10 cursor-pointer`}>
                        <option value="" disabled>Select a date and time</option>
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
                      text-[16px] font-semibold text-white
                      bg-gradient-to-r from-[var(--purple)] to-[var(--blue)]
                      border border-[rgba(113,70,255,0.5)]
                      shadow-[0_0_30px_rgba(113,70,255,0.4)]
                      transition-all duration-200 hover:-translate-y-px hover:shadow-[0_0_44px_rgba(113,70,255,0.6)]
                    "
                  >
                    <CalendarDays size={26} className="text-white shrink-0" strokeWidth={2} />
                    Book a 30-minute session
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
