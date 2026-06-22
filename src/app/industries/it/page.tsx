import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ITHero from "@/components/it/ITHero";
import ITPainpoints from "@/components/it/ITPainpoints";
import ITWhatYouGet from "@/components/it/ITWhatYouGet";
import ITCTA from "@/components/it/ITCTA";

export const metadata = {
  title: "IT Solutions | Punic Systems",
  description:
    "IT solutions for resilient infrastructure, modern operations, and secure growth — modernise core IT, optimise cloud and endpoints, and align infrastructure with business continuity, security, and performance.",
};

export default function ITPage() {
  return (
    <>
      <Header />
      <main>
        <ITHero />
        <ITPainpoints />
        <ITWhatYouGet />
        <ITCTA />
      </main>
      <Footer />
    </>
  );
}
