import Navigation from "@/components/Navigation";
import HomeSection from "@/components/HomeSection";
import AboutProjectSection from "@/components/AboutProjectSection";
import HowItWasBuiltSection from "@/components/HowItWasBuiltSection";
import NewResultsSection from "@/components/NewResultsSection";
import DemoSection from "@/components/DemoSection";
import LearningsSection from "@/components/LearningsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HomeSection />
      <AboutProjectSection />
      <HowItWasBuiltSection />
      <NewResultsSection />
      <DemoSection />
      <LearningsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
