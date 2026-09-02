//REACT
import { useEffect } from "react";
// COMPONENTS
import { AppHeader } from "@app/components";
import { AppBackground } from "@app/components/app-background/AppBackground";
import { ContactSection } from "@contact/main/ContactSection";
import { HeroSection } from "@hero/main/HeroSection";
import { JourneySection } from "@journey/main/JourneySection";
import { ProjectsSection } from "@projects/main/ProjectsSection";
import { StackSection } from "@stack/main/StackSection";
// CSS
import "./AppView.css";

export const App = () => {
  useEffect(() => {
    document.documentElement.classList.remove("no-transition");
  }, []);

  return (
    <>
      <AppBackground />
      <AppHeader />
      <section className="app-content-container">
        <HeroSection />
        <JourneySection />
        <StackSection />
        <ProjectsSection />
        <ContactSection />
      </section>
    </>
  );
};
