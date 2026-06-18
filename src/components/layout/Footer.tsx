import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { SITE } from "@/lib/config";
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border-default)] bg-[var(--bg-secondary)] mt-0">
      <Container className="pt-7 pb-5">
        {/* Main columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-7 mb-7">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <Image
              src="/images/punic-logo.png"
              alt="Punic Systems"
              width={1050}
              height={429}
              className="h-11 w-auto mb-3"
            />
            <p className="text-[10px] text-[var(--text-muted)] leading-relaxed max-w-[220px]">
              {SITE.description}
            </p>
            <div className="flex gap-2 mt-3">
              <a
                href={SITE.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-1.5 rounded-full border border-[var(--border-default)] text-[var(--text-muted)]
                  hover:border-[var(--border-cyan)] hover:text-[var(--cyan)] transition-colors duration-200"
              >
                <Linkedin size={15} />
              </a>
              <a
                href={SITE.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
                className="p-1.5 rounded-full border border-[var(--border-default)] text-[var(--text-muted)]
                  hover:border-[var(--border-cyan)] hover:text-[var(--cyan)] transition-colors duration-200"
              >
                <Twitter size={15} />
              </a>
              <a
                href={SITE.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="p-1.5 rounded-full border border-[var(--border-default)] text-[var(--text-muted)]
                  hover:border-[var(--border-cyan)] hover:text-[var(--cyan)] transition-colors duration-200"
              >
                <Youtube size={15} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[10.5px] font-semibold text-[var(--text-primary)] mb-3 tracking-wide">
              Services
            </h3>
            <ul className="space-y-1.5">
              {["Cybersecurity", "Compliance", "Framework Implementation", "Training", "Advisory"].map((s) => (
                <li key={s}>
                  <Link href="/industries"
                    className="text-[9.5px] text-[var(--text-muted)] hover:text-[var(--cyan)] transition-colors duration-200">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Frameworks */}
          <div>
            <h3 className="text-[10.5px] font-semibold text-[var(--text-primary)] mb-3 tracking-wide">
              Frameworks
            </h3>
            <ul className="space-y-1.5">
              {["ISO 27001", "SOC 2", "NIS 2", "GDPR", "PCI DSS", "CIS Controls"].map((f) => (
                <li key={f}>
                  <Link href="/industries"
                    className="text-[9.5px] text-[var(--text-muted)] hover:text-[var(--cyan)] transition-colors duration-200">
                    {f}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[10.5px] font-semibold text-[var(--text-primary)] mb-3 tracking-wide">
              Company
            </h3>
            <ul className="space-y-1.5">
              {[
                { label: "About Us", href: "/about" },
                { label: "Our Approach", href: "/about" },
                { label: "Careers", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href}
                    className="text-[9.5px] text-[var(--text-muted)] hover:text-[var(--cyan)] transition-colors duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-[10.5px] font-semibold text-[var(--text-primary)] mb-3 tracking-wide">
              Resources
            </h3>
            <ul className="space-y-1.5">
              {["Insights", "Guides", "Case Studies", "Events"].map((r) => (
                <li key={r}>
                  <Link href="#"
                    className="text-[9.5px] text-[var(--text-muted)] hover:text-[var(--cyan)] transition-colors duration-200">
                    {r}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[10.5px] font-semibold text-[var(--text-primary)] mb-3 tracking-wide">
              Contact
            </h3>
            <ul className="space-y-2">
              <li>
                <a href={`mailto:${SITE.contact.email}`}
                  className="flex items-start gap-2 text-[9.5px] text-[var(--text-muted)] hover:text-[var(--cyan)] transition-colors duration-200">
                  <Mail size={13} className="mt-0.5 shrink-0" />
                  {SITE.contact.email}
                </a>
              </li>
              <li>
                <a href={`tel:${SITE.contact.phone}`}
                  className="flex items-center gap-2 text-[9.5px] text-[var(--text-muted)] hover:text-[var(--cyan)] transition-colors duration-200">
                  <Phone size={13} className="shrink-0" />
                  {SITE.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-[9.5px] text-[var(--text-muted)]">
                <MapPin size={13} className="shrink-0" />
                {SITE.contact.city}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[var(--border-default)] pt-4 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[9px] text-[var(--text-muted)]">
            © {year} {SITE.name}. All rights reserved.
          </p>
          <div className="flex gap-5">
            {[
              { label: "Privacy Policy", href: SITE.legal.privacy },
              { label: "Terms of Service", href: SITE.legal.terms },
              { label: "Cookie Policy", href: SITE.legal.cookies },
            ].map(({ label, href }) => (
              <Link key={label} href={href}
                className="text-[9px] text-[var(--text-muted)] hover:text-[var(--cyan)] transition-colors duration-200">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
