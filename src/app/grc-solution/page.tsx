import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GRCHero from "@/components/grc/GRCHero";
import GRCPainpoints from "@/components/grc/GRCPainpoints";
import GRCWhatYouGet from "@/components/grc/GRCWhatYouGet";
import GRCCTA from "@/components/grc/GRCCTA";

export const metadata = {
  title: "GRC Solution | Punic Systems",
  description:
    "Bring policies, risks, controls, audits, evidence, and regulatory obligations into one operating model — aligned with ISO 27001, NIS2, GDPR, and SOC 2.",
};

export default function GRCSolutionPage() {
  return (
    <>
      <Header />
      <main>
        <GRCHero />
        <GRCPainpoints />
        <GRCWhatYouGet />
        <GRCCTA />
      </main>
      <Footer />
    </>
  );
}
