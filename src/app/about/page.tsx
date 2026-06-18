import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/about/AboutHero";
import AboutApproach from "@/components/about/AboutApproach";
import AboutServe from "@/components/about/AboutServe";
import AboutValues from "@/components/about/AboutValues";
import AboutCTA from "@/components/about/AboutCTA";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <AboutApproach />
        <AboutServe />
        <AboutValues />
        <AboutCTA />
      </main>
      <Footer />
    </>
  );
}
