# IMPLEMENTATION_PLAN_HOME.md

## Sprint breakdown (already executed)

### Phase 1 — Foundation
- [x] Package.json, tsconfig, next.config, postcss, tailwind
- [x] Design tokens → globals.css CSS variables + Tailwind mapping
- [x] Site config (lib/config.ts) — single source of truth
- [x] Shared UI: Container, SectionLabel, Button, GlowCard
- [x] useReducedMotion hook

### Phase 2 — Layout
- [x] Header (sticky, blur on scroll, active underline, mobile menu)
- [x] Footer (6-column)

### Phase 3 — Illustrations & icons
- [x] PunicLogo (SVG mark + full lockup)
- [x] ServiceIcons (5 custom SVG)
- [x] OutcomeIcons (5 custom SVG)
- [x] ProcessIcons (6 custom SVG)
- [x] TrustIcons (3 custom SVG)
- [x] SecurityShieldDiagram (animated SVG, GSAP-free rAF loop)
- [x] AnimatedMap (SVG, IntersectionObserver-triggered)
- [x] CTAShield (SVG)

### Phase 4 — Home sections
- [x] HeroSection
- [x] FrameworksStrip
- [x] ServicesSection
- [x] BusinessOutcomesSection
- [x] GlobalReachSection
- [x] EngagementProcessSection
- [x] FinalCTASection

### Phase 5 — Routing & stubs
- [x] /about (stub)
- [x] /industries (stub)
- [x] /contact (stub)
- [x] /privacy-policy, /terms-of-service, /cookie-policy (stubs)

### Phase 6 — Tests & docs
- [x] Playwright config
- [x] home.spec.ts (functional + screenshot)
- [x] DESIGN_ANALYSIS_HOME.md
- [x] ASSET_INVENTORY_HOME.md
- [x] README.md

## Next steps (future sprints)
1. Visual QA: run `npm run dev` + Playwright screenshots → compare to reference image
2. Replace SVG logo mark with official vector when client provides it
3. Replace framework badges with licensed official marks when approved
4. Populate real contact data in lib/config.ts
5. Develop /about page
6. Develop /industries page + sub-pages per industry
7. Add GSAP ScrollTrigger for richer scroll animations
8. Implement real /contact form with validation
9. Add analytics
10. Lighthouse audit + a11y pass
