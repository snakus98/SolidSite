import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import FrameworksStrip from "@/components/home/FrameworksStrip";
import ServicesSection from "@/components/home/ServicesSection";
import BusinessOutcomesSection from "@/components/home/BusinessOutcomesSection";
import GlobalReachSection from "@/components/home/GlobalReachSection";
import EngagementProcessSection from "@/components/home/EngagementProcessSection";
import FinalCTASection from "@/components/home/FinalCTASection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FrameworksStrip />
        <ServicesSection />
        <BusinessOutcomesSection />
        <GlobalReachSection />
        <EngagementProcessSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
