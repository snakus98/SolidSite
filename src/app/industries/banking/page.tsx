import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BankingHero from "@/components/banking/BankingHero";
import BankingPainpoints from "@/components/banking/BankingPainpoints";
import BankingWhatYouGet from "@/components/banking/BankingWhatYouGet";
import BankingCTA from "@/components/banking/BankingCTA";

export const metadata = {
  title: "Banking & Financial Services | Punic Systems",
  description:
    "Security and resilience solutions for banking and financial services — protect critical systems and customer data, strengthen governance and compliance, and modernise operations without disrupting trust.",
};

export default function BankingPage() {
  return (
    <>
      <Header />
      <main>
        <BankingHero />
        <BankingPainpoints />
        <BankingWhatYouGet />
        <BankingCTA />
      </main>
      <Footer />
    </>
  );
}
