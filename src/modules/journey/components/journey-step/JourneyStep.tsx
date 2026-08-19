//CSS
import "./JourneyStep.css";
// COMPONENTS
import { AppText } from "@/app/components";
// TRANSLATION
import { Trans, useTranslation } from "react-i18next";

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
    </div>
  );
};
