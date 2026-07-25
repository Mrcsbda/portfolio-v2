// COMPONENTS
import { SECTIONS } from "../../../app/types/data.types";
import { HeroContent } from "../components/hero-content/HeroContent";
//CSS
import "./HeroSection.css";

export const HeroSection = () => {
  return (
    <div className="hero-section" id={SECTIONS.HERO}>
      <HeroContent />
    </div>
  );
};
