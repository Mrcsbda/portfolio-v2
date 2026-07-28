//CSS
import "./HeroVisual.css";

export const HeroVisual = () => {
  return (
    <div className="hero-visual">
      <div className="hero-visual reveal" aria-hidden="true">
        <div className="hero-visual__circle-top-right"></div>
        <div className="hero-visual__circle-bottom-left"></div>
        <div className="hero-visual__ring"></div>
        <div className="hero-visual__tile glass">M</div>
      </div>
    </div>
  );
};
