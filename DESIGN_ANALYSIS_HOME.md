# DESIGN_ANALYSIS_HOME.md

## Sections (top → bottom)
1. Sticky Header (76px)
2. Hero — 2-col, full viewport height minus header
3. Frameworks Strip — compact band
4. Services — 5-card grid
5. Business Outcomes — horizontal 5-item band
6. Global Reach — 2-col with animated SVG map
7. Engagement Process — 6-step horizontal with animated line
8. Final CTA — dark card with shield, copy, 2 buttons
9. Footer — 6-column

## Grid & max-width
- Max content width: 1280px
- Horizontal padding: 20px (mobile) → 32px (sm) → 40px (lg)
- Gutter between columns: 16px standard, 24px on desktop

## Hero
- Desktop: 2 columns, ~50/50 split, min-height ~620px
- Title: clamp(36px, 5.5vw, 62px), extrabold, line-height 1.08
- Description: 17px, line-height 1.65
- Eyebrow: 12.5px, tracking 0.2em, uppercase, cyan

## Colors extracted from reference
| Token | Value |
|---|---|
| bg-main | #020718 |
| bg-secondary | #040c22 |
| bg-card | rgba(7,17,44,0.86) |
| text-primary | #f4f7ff |
| text-secondary | #a8b1c7 |
| text-muted | #78839d |
| cyan | #13c8ff |
| blue | #2878ff |
| purple | #7146ff |
| magenta | #ad4cff |
| border-default | rgba(101,131,220,0.27) |

## Gradients
- Shield border: cyan → blue → purple
- CTA button: purple → blue
- Text accents: cyan→blue (modernize, scale), purple→magenta (secure)
- Page ambient: radial blues top-right, purple bottom center

## Radii
- Card: 12px
- Large containers: 18px
- Button: 10px
- Icon badges: 8px

## Borders
- All cards: 1px solid rgba(101,131,220,0.27)
- Active/hover: 1px solid rgba(19,200,255,0.58) or rgba(113,70,255,0.58)
- Header bottom on scroll: 1px var(--border-default)

## Shadows / Halos
- Shield outer: radial rgba(40,120,255,0.35), r=120
- Cards hover: 0 0 32px rgba(19,200,255,0.14)
- CTA section: 0 0 60px rgba(113,70,255,0.18)
- Primary button: 0 0 22px rgba(113,70,255,0.32)

## Typography scale
| Role | Size | Weight |
|---|---|---|
| Eyebrow | 12–13px | 600, tracking 0.2em |
| Hero H1 | clamp(36,5.5vw,62px) | 800 |
| Section H2 | clamp(30,4vw,46px) | 800 |
| Card H3 | 15–16px | 700 |
| Body | 14–17px | 400 |
| Secondary | 13–14px | 400 |
| Labels/captions | 11–12px | 500–600 |

## Animations
- Shield: slow pulse glow (period ~3s), ring rotation 20deg/s (ring1), -14deg/s (ring2)
- Cards float: sin wave, 5px amplitude, period ~8s, staggered
- Map lines: stroke-dashoffset countdown, ~1.2s
- Process line: fills left to right on scroll enter
- Hero entrance: fade-up 0.6s
- Hover transitions: 200–300ms all

## Mobile adaptations
- Hero: stacked (text first, then SVG)
- Services: 1 col → 2 col sm → 5 col lg
- Outcomes: vertical list
- Global Reach: stacked (content top, map bottom)
- Process: vertical timeline
- CTA: stacked
- Footer: 2-col grid → 6-col lg
