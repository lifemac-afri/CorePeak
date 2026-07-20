import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { BrandsSection } from "@/components/home/BrandsSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { AboutSection } from "@/components/home/AboutSection";
import { WhoWeWorkWithSection } from "@/components/home/WhoWeWorkWithSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { WorksSection } from "@/components/home/WorksSection";
import { ContactSection } from "@/components/home/ContactSection";

export default function Home() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar onScrollTo={scrollTo} />
      <main>
        <HeroSection onScrollTo={scrollTo} />
        <BrandsSection />
        <ServicesSection />
        <AboutSection />
        <WhoWeWorkWithSection />
        <ProcessSection />
        <WorksSection />
        <ContactSection />
      </main>
      <Footer onScrollTo={scrollTo} />
    </div>
  );
}
