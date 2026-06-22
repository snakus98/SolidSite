export const SERVICES = [
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description: "Strengthen your defenses across people, processes, and technology.",
    icon: "cybersecurity",
    href: "/industries",
  },
  {
    id: "compliance",
    title: "Compliance",
    description: "Achieve and maintain regulatory compliance with confidence.",
    icon: "compliance",
    href: "/industries",
  },
  {
    id: "framework",
    title: "Framework Implementation",
    description: "Implement ISO 27001, SOC 2, NIS 2 and more end-to-end.",
    icon: "framework",
    href: "/industries",
  },
  {
    id: "training",
    title: "Training",
    description: "Build skills and awareness with practical, role-based training programs.",
    icon: "training",
    href: "/industries",
  },
  {
    id: "advisory",
    title: "Advisory",
    description: "Strategic guidance to drive secure, resilient, and compliant growth.",
    icon: "advisory",
    href: "/industries",
  },
] as const;

export const OUTCOMES = [
  {
    id: "risk",
    number: "01",
    title: "Reduce Risk",
    description: "Identify, prioritize, and mitigate risks proactively.",
    icon: "risk",
    accent: "cyan",
  },
  {
    id: "compliance",
    number: "02",
    title: "Ensure Compliance",
    description: "Meet regulatory requirements and audit with confidence.",
    icon: "compliance",
    accent: "purple",
  },
  {
    id: "performance",
    number: "03",
    title: "Improve Performance",
    description: "Optimize operations and security for better efficiency.",
    icon: "performance",
    accent: "cyan",
  },
  {
    id: "resilience",
    number: "04",
    title: "Build Resilience",
    description: "Respond faster and recover stronger from disruptions.",
    icon: "resilience",
    accent: "purple",
  },
  {
    id: "growth",
    number: "05",
    title: "Drive Growth",
    description: "Enable innovation and scale with trust and assurance.",
    icon: "growth",
    accent: "blue",
  },
] as const;

export const FRAMEWORKS = [
  { label: "ISO 27001", image: "/images/frameworks/iso-27001.png", width: 764, height: 336, displayHeight: 36 },
  { label: "SOC 2 Type II", image: "/images/frameworks/soc2-type2.png", width: 674, height: 328, displayHeight: 42 },
  { label: "NIS 2", image: "/images/frameworks/nis2.png", width: 700, height: 682, displayHeight: 58 },
  { label: "GDPR", image: "/images/frameworks/gdpr.png", width: 746, height: 384, displayHeight: 46 },
  { label: "PCI DSS v4.0", image: "/images/frameworks/pci-dss.png", width: 802, height: 358, displayHeight: 42 },
  { label: "CIS Controls", image: "/images/frameworks/cis-controls.png", width: 798, height: 358, displayHeight: 42 },
] as const;

export const PROCESS_STEPS = [
  {
    id: "assess",
    title: "Assessment & Strategy",
    description: "Understand your landscape and define a clear roadmap.",
    icon: "assessment",
  },
  {
    id: "design",
    title: "Design & Build",
    description: "Architect secure, compliant solutions tailored to your needs.",
    icon: "design",
  },
  {
    id: "implement",
    title: "Implement & Integrate",
    description: "Execute with precision and integrate seamlessly with your operations.",
    icon: "implement",
  },
  {
    id: "operate",
    title: "Operate & Monitor",
    description: "Continuous monitoring and management for ongoing assurance.",
    icon: "operate",
  },
  {
    id: "train",
    title: "Train & Empower",
    description: "Enable your teams with the knowledge and skills to excel.",
    icon: "train",
  },
  {
    id: "improve",
    title: "Improve & Evolve",
    description: "Iterate and evolve to stay ahead of risks and regulations.",
    icon: "improve",
  },
] as const;
