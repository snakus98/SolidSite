# ASSET_INVENTORY_HOME.md

| Asset | Status | Notes |
|---|---|---|
| **Logo PNG** | ✅ Available | `/public/brand/punic-systems-logo.png` — official file supplied by client |
| **Logo SVG mark** | ✅ Created in SVG | `src/components/icons/PunicLogo.tsx` — vector reconstruction from PNG reference; use official file when vector source is provided |
| **Shield diagram** | ✅ Created in SVG | `src/components/illustrations/SecurityShieldDiagram.tsx` — fully custom, animated |
| **IDENTIFY card** | ✅ Created inline SVG | Inside SecurityShieldDiagram, bar-chart miniature |
| **DETECT card** | ✅ Created inline SVG | Inside SecurityShieldDiagram, line-chart miniature |
| **PROTECT card** | ✅ Created inline SVG | Inside SecurityShieldDiagram, padlock miniature |
| **RESPOND card** | ✅ Created inline SVG | Inside SecurityShieldDiagram, checkmarks miniature |
| **Orbital rings** | ✅ Created in SVG | Animated via GSAP rAF |
| **Hero trust icons** | ✅ Created in SVG | `src/components/icons/TrustIcons.tsx` |
| **Framework badges** | ⚠️ Reconstructed typographically | Official vector logos for ISO/SOC2/PCI/CIS require formal permission from standard bodies. Current implementation: pictogram + typography, clearly non-official |
| **Service icons (×5)** | ✅ Created in SVG | `src/components/icons/ServiceIcons.tsx` — coherent stroke system |
| **Outcome icons (×5)** | ✅ Created in SVG | `src/components/icons/OutcomeIcons.tsx` |
| **Process icons (×6)** | ✅ Created in SVG | `src/components/icons/ProcessIcons.tsx` |
| **Europe/Tunisia map** | ✅ Created in SVG | `src/components/illustrations/AnimatedMap.tsx` — stylized, not cartographically precise |
| **Tunisia pin marker** | ✅ Created inline SVG | Inside AnimatedMap |
| **CTA shield** | ✅ Created in SVG | `src/components/illustrations/CTAShield.tsx` — shield + padlock |
| **Social icons** | ✅ Lucide-react | LinkedIn, Twitter, YouTube — standard icon usage |
| **Contact icons** | ✅ Lucide-react | Mail, Phone, MapPin — standard |
| **Hamburger / Close** | ✅ Lucide-react | Menu, X |
| **Arrow icons** | ✅ Unicode → | Used as text characters for CTA labels |

## Missing / to provide
- Official vector logo (SVG/EPS) from Punic Systems brand guide
- Official framework logos (ISO, SOC2, PCI DSS, CIS) if licensed for use
- Real contact details (email, phone)
- Real social profile URLs
