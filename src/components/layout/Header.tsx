"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { NAV_LINKS } from "@/lib/config";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLElement | null>(null);
  const pathname = usePathname();

  // Close any open dropdown when navigating
  useEffect(() => { setOpenMenu(null); }, [pathname]);

  // Close dropdown on click outside the nav
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenMenu(null);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setMobileOpen(false); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 h-[88px]
        border-b border-white/10
        backdrop-blur-2xl backdrop-saturate-150
        transition-all duration-300
        ${scrolled ? "bg-[rgba(8,21,40,0.62)]" : "bg-[rgba(8,21,40,0.40)]"}
      `}
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.015) 32%, rgba(8,21,40,0.10) 100%)",
        boxShadow: scrolled
          ? "0 10px 34px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.16), inset 0 -1px 0 rgba(19,200,255,0.10)"
          : "0 6px 24px rgba(0,0,0,0.30), inset 0 1px 0 rgba(255,255,255,0.12)",
        WebkitBackdropFilter: "blur(24px) saturate(150%)",
      }}
    >
      <Container className="flex items-center justify-between h-full">
        {/* Logo */}
        <Link href="/" aria-label="Punic Systems home">
          <Image
            src="/images/punic-logo.png"
            alt="Punic Systems"
            width={1050}
            height={429}
            priority
            className="h-[58px] w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav ref={navRef} className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
          {NAV_LINKS.map((item) => {
            const active =
              isActive(item.href) ||
              ("children" in item && item.children.some((child) => isActive(child.href)));

            if ("children" in item) {
              const isOpen = openMenu === item.href;
              const dropdownWidth = item.children.length <= 2 ? "w-max min-w-[136px]" : "w-[320px]";
              return (
                <div key={item.href} className="relative group">
                  <button
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={isOpen}
                    onClick={() => setOpenMenu(isOpen ? null : item.href)}
                    className={`
                      relative flex items-center gap-1 text-[15px] font-medium tracking-wide py-1
                      transition-colors duration-200
                      ${active
                        ? "text-[var(--text-primary)]"
                        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                      }
                    `}
                  >
                    {item.label}
                    <ChevronDown
                      size={13}
                      className={`transition-transform duration-200 group-hover:rotate-180 ${isOpen ? "rotate-180" : ""}`}
                    />
                    <span
                      className={`
                        absolute bottom-0 left-0 right-0 h-[2px] rounded-full
                        bg-gradient-to-r from-[var(--cyan)] to-[var(--purple)]
                        transition-all duration-300
                        ${active ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}
                      `}
                      style={{ transformOrigin: "left" }}
                    />
                  </button>

                  {/* Dropdown panel */}
                  <div
                    className={`
                      absolute top-full left-1/2 -translate-x-1/2 pt-3 ${dropdownWidth}
                      transition-all duration-200
                      group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                      ${isOpen
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible translate-y-1"
                      }
                    `}
                  >
                    <div
                      className="
                        rounded-[10px] border border-[var(--border-default)]
                        bg-[var(--bg-card)] backdrop-blur-md p-2
                        shadow-[0_16px_40px_rgba(0,0,0,0.45)]
                      "
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpenMenu(null)}
                          className="
                            block px-3.5 py-2.5 rounded-[7px] text-[12px] leading-snug
                            text-[var(--text-secondary)]
                            transition-colors duration-200
                            hover:text-[var(--text-primary)] hover:bg-[rgba(19,200,255,0.06)]
                          "
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  relative text-[15px] font-medium tracking-wide py-1
                  transition-colors duration-200
                  ${active
                    ? "text-[var(--text-primary)]"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }
                `}
              >
                {item.label}
                {/* Active underline */}
                <span
                  className={`
                    absolute bottom-0 left-0 right-0 h-[2px] rounded-full
                    bg-gradient-to-r from-[var(--cyan)] to-[var(--purple)]
                    transition-all duration-300
                    ${active ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}
                  `}
                  style={{ transformOrigin: "left" }}
                />
              </Link>
            );
          })}
        </nav>

        {/* CTA — desktop */}
        <Link
          href="/contact"
          className="
            hidden lg:inline-flex items-center gap-2
            px-6 py-3 rounded-[8px]
            text-[14px] font-semibold text-white
            bg-gradient-to-r from-[var(--purple)] to-[var(--blue)]
            border border-[rgba(113,70,255,0.45)]
            shadow-[0_0_20px_rgba(113,70,255,0.28)]
            transition-all duration-200
            hover:-translate-y-px hover:shadow-[0_0_32px_rgba(113,70,255,0.48)]
            group
          "
        >
          Book a Consultation
          <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </Link>

        {/* Hamburger — mobile */}
        <button
          className="lg:hidden text-[var(--text-primary)] p-2 rounded-md focus-visible:outline-[var(--cyan)]"
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>
    </header>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`
          lg:hidden fixed inset-0 top-[88px] z-40
          bg-[rgba(2,7,24,0.97)] backdrop-blur-lg
          flex flex-col p-6 gap-4 overflow-y-auto
          transition-all duration-300
          ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        {NAV_LINKS.map((item) => {
          const active =
            isActive(item.href) ||
            ("children" in item && item.children.some((child) => isActive(child.href)));

          if ("children" in item) {
            return (
              <div key={item.href}>
                <p
                  className={`
                    block text-xl font-semibold py-3 border-b border-[var(--border-default)]
                    ${active ? "text-[var(--cyan)]" : "text-[var(--text-secondary)]"}
                  `}
                >
                  {item.label}
                </p>
                <div className="flex flex-col pl-4">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="
                        text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)]
                        py-2.5 border-b border-[var(--border-default)]
                        transition-colors duration-200
                      "
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            );
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`
                text-xl font-semibold py-3 border-b border-[var(--border-default)]
                transition-colors duration-200
                ${active ? "text-[var(--cyan)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"}
              `}
            >
              {item.label}
            </Link>
          );
        })}
        <Link
          href="/contact"
          onClick={() => setMobileOpen(false)}
          className="
            mt-4 flex items-center justify-center gap-2
            px-6 py-4 rounded-[10px]
            text-base font-semibold text-white
            bg-gradient-to-r from-[var(--purple)] to-[var(--blue)]
            shadow-[0_0_24px_rgba(113,70,255,0.35)]
          "
        >
          Book a Consultation →
        </Link>
      </div>
    </>
  );
}
