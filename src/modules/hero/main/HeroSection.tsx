// COMPONENTS
import { SECTIONS } from "@app/types/data.types";
import { HeroContent, HeroVisual } from "@hero/components";
//CSS
import "./HeroSection.css";

export const HeroSection = () => {
  return (
    <div className="hero-section" id={SECTIONS.HERO}>
      <HeroContent />
      <HeroVisual />
    </div>
  );
};
