// COMPONENTS
import { AppText } from "@/app/components";
import { JourneyAnimationOne } from "@journey/components/journey-animation-one/JourneyAnimationOne";
import { JourneyAnimationThree } from "@journey/components/journey-animation-three/JourneyAnimationThree";
import { JourneyAnimationTwo } from "@journey/components/journey-animation-two/JourneyAnimationTwo";
// TRANSLATION
import { Trans, useTranslation } from "react-i18next";
// TYPES
import { ENUM_STEP_ANIMATION } from "@journey/types";
//CSS
import "./JourneyStep.css";

interface IData {
  date: string;
  titleKey: string;
  companyKey: string;
  descriptionKey: string;
  animation: string;
  isActive: boolean;
}

interface IJourneyStepProps {
  data: IData;
}
export const JourneyStep = ({ data }: IJourneyStepProps) => {
  const { t } = useTranslation("journey");

  const animationToShow = () => {
    switch (data.animation) {
      case ENUM_STEP_ANIMATION.STEP_ONE:
        return <JourneyAnimationOne />;
      case ENUM_STEP_ANIMATION.STEP_TWO:
        return <JourneyAnimationTwo />;
      default:
        return <JourneyAnimationThree />;
    }
  };

  return (
    <div className={`journey-step${data.isActive ? "__active" : ""}`}>
      <div className={`journey-step__content`}>
        <AppText
          tag="h4"
          type={"rol-timeline"}
          children={data.date}
          className="journey-step__date"
        />
        <AppText
          tag="h2"
          type={"rol-title"}
          children={t(data.titleKey)}
          className="journey-step__title"
        />
        <AppText
          tag="h3"
          type={"rol-company"}
          children={t(data.companyKey)}
          className="journey-step__company"
        />
        <AppText
          tag="p"
          type={"description"}
          className="journey-step__description"
          children={
            <Trans
              t={t}
              i18nKey={data.descriptionKey}
              components={{
                bold: (
                  <strong className="journey-step__description--bold">
                    ''
                  </strong>
                ),
              }}
            />
          }
        />
      </div>
      <div className="journey-step__animation">{animationToShow()}</div>
    </div>
  );
};
