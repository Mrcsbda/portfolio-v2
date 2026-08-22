// COMPONENTS
//CSS
import "./JourneyAnimationOne.css";

export const JourneyAnimationOne = () => {
  return (
    <div className="journey-animation-one">
      <div className="journey-animation-one__ring"></div>
      <div className="journey-animation-one__core">
        <p className="journey-animation-one__text">‹›</p>
      </div>
      <div className="journey-animation-one__spin">
        <i></i>
        <i></i>
        <i></i>
      </div>
    </div>
  );
};
