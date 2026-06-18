export const INDUSTRIES = [
  {
    id: "manufacturing-iiot",
    eyebrow: "Manufacturing & Industrial IoT",
    title: "Manufacturing & Industrial IoT (IIoT)",
    description:
      "Protect operational technology (OT), industrial control systems (ICS), and connected IIoT devices from disruption — without slowing down production.",
    points: [
      "OT/ICS network segmentation and security architecture",
      "IIoT device hardening and lifecycle management",
      "IEC 62443 alignment and risk assessments",
      "Supply chain and third-party risk management",
    ],
    icon: "manufacturing",
  },
  {
    id: "ngos",
    eyebrow: "Non-Profit & NGO Sector",
    title: "Security & Privacy for NGOs",
    description:
      "Safeguard donor data, beneficiary records, and field operations with pragmatic, budget-conscious security tailored to mission-driven organizations.",
    points: [
      "Data protection and privacy program design (GDPR-aligned)",
      "Secure handling of donor and beneficiary data",
      "Cost-effective security tooling and architecture",
      "Staff awareness training for distributed teams",
    ],
    icon: "ngo",
  },
  {
    id: "healthcare",
    eyebrow: "Healthcare & Life Sciences",
    title: "Security & Compliance for Healthcare Providers",
    description:
      "Protect patient data, medical devices, and clinical systems while meeting healthcare regulatory requirements.",
    points: [
      "Patient data protection and access controls",
      "Medical device and connected health security",
      "Healthcare regulatory compliance (HIPAA, GDPR health data)",
      "Ransomware resilience and incident response readiness",
    ],
    icon: "healthcare",
  },
] as const;
