import type { Metadata } from "next";
import "./globals.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/manrope/800.css";

export const metadata: Metadata = {
  title: "Punic Systems | Cybersecurity. Compliance. Trust.",
  description:
    "Pragmatic solutions, proven frameworks, and expert guidance to build resilient, compliant, and future-ready organizations.",
  keywords: ["cybersecurity", "compliance", "ISO 27001", "SOC 2", "NIS 2", "GDPR", "Tunisia"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
