// ─── Site configuration ───────────────────────────────────────────────────────
// Update these values once Punic Systems' real contact data is available.
// All components import from this file — never hardcode contact info elsewhere.

export const SITE = {
  name: "Punic Systems",
  tagline: "Cybersecurity. Compliance. Trust.",
  description:
    "We help organizations modernize, secure, and scale their digital operations with clarity, pragmatism, and measurable results.",

  contact: {
    email: "hello@punic-systems.com",
    phone: "+216 XX XXX XXX",
    city: "Tunis, Tunisia",
  },

  social: {
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    youtube: "https://youtube.com",
  },

  legal: {
    privacy: "/privacy-policy",
    terms: "/terms-of-service",
    cookies: "/cookie-policy",
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Manufacturing & Industrial IoT (IIoT)", href: "/industries/manufacturing-iiot" },
      { label: "Security & Privacy for NGOs", href: "/industries/ngos" },
      { label: "Security & Compliance for Healthcare Providers", href: "/industries/healthcare" },
    ],
  },
] as const;
