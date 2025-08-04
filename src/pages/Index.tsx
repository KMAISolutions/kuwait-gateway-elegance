
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { LandSection } from "@/components/sections/LandSection";
import { PeopleSection } from "@/components/sections/PeopleSection";
import { EconomySection } from "@/components/sections/EconomySection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-40">
        <HeroSection />
        <LandSection />
        <PeopleSection />
        <EconomySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
