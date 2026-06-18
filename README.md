# Punic Systems — Website

Dark-tech cybersecurity landing page built with Next.js 14, TypeScript, Tailwind CSS, and GSAP.

## Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 14 App Router |
| Language | TypeScript strict |
| Styling | Tailwind CSS + CSS variables |
| Animations | GSAP / rAF + CSS transitions |
| Icons | Custom SVG + Lucide (nav/UI only) |
| Testing | Playwright |
| Font | Manrope (Google Fonts) |

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Install Playwright browsers (first time only)
npx playwright install chromium

# 3. Start dev server
npm run dev
# → http://localhost:3000
```

## Commands

```bash
npm run dev          # Development server
npm run build        # Production build
npm run start        # Production server
npm run typecheck    # TypeScript strict check (no emit)
npm run lint         # ESLint

npm run test:e2e     # Playwright headless tests
npm run test:e2e:ui  # Playwright UI mode
```

## Brand assets

| File | Notes |
|---|---|
| `public/brand/punic-systems-logo.png` | Official logo — client-supplied |
| `src/components/icons/PunicLogo.tsx` | SVG reconstruction — replace with official vector when available |

## Configuration

All brand name, contact details, and social links are centralised in:

```
src/lib/config.ts
```

Update this file to change email, phone, social URLs, and legal page links.

## Project structure

```
src/
├── app/                  # Next.js App Router pages
├── components/
│   ├── layout/           # Header, Footer
│   ├── home/             # One component per section
│   ├── illustrations/    # SecurityShieldDiagram, AnimatedMap, CTAShield
│   ├── icons/            # All custom SVG icons
│   └── ui/               # Button, Container, GlowCard, SectionLabel
├── data/home.ts          # All copy data for the home page
├── hooks/                # useReducedMotion
└── lib/config.ts         # Site-wide configuration

tests/
└── home.spec.ts          # Playwright E2E tests

public/
└── brand/                # Official brand assets
```

## Design tokens

All design tokens are CSS variables in `src/app/globals.css` and mapped
as Tailwind extensions in `tailwind.config.ts`.

## Accessibility

- Single `<h1>` per page
- Keyboard-navigable hamburger menu (Escape to close)
- `aria-hidden` on all decorative SVGs
- `prefers-reduced-motion` respected throughout
- Minimum 44px touch targets on interactive elements
- Visible `:focus-visible` ring (cyan)

## Notes on framework logos

The Frameworks Strip uses **typographic reconstructions** — not official vendor logos.
Official marks for ISO, SOC 2, PCI DSS, and CIS Controls require formal licensing.
Replace with licensed files once approved.
