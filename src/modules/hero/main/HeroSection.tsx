// COMPONENTS
import { SECTIONS } from "../../../app/types/data.types";
import { HeroContent } from "../components/hero-content/HeroContent";
import { HeroVisual } from "../components/hero-visual/HeroVisual";
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
