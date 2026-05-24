import { HeroContent, HeroVisual } from "../../components";
import "./HeroView.css";

export const HeroView = () => {
  return (
    <section className="hero-view">
      <div className="hero-view__content">
        <HeroContent />
        <HeroVisual />
      </div>
    </section>
  );
};
