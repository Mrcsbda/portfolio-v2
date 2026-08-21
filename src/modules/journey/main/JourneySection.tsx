// COMPONENTS
import { AppText } from "@/app/components";
import { JourneyStep } from "@journey/components";
// TYPES
import { SECTIONS } from "@/app/types/data.types";
import { ENUM_STEP_ANIMATION } from "@journey/types";
// TRANSLATION
import { useTranslation } from "react-i18next";
//CSS
import "./JourneySection.css";

export const JourneySection = () => {
  const { t } = useTranslation("journey");

  const stepsMeta = [
    {
      date: `2024 – ${t("ACTUAL")}`,
      animation: ENUM_STEP_ANIMATION.STEP_ONE,
      isActive: true,
      show: true,
    },
    {
      date: `2024 – ${t("ACTUAL")}`,
      animation: "",
      isActive: false,
      show: false,
    },
    {
      date: "2023 – 2026",
      animation: ENUM_STEP_ANIMATION.STEP_TWO,
      isActive: false,
      show: true,
    },
    {
      date: "2023",
      animation: ENUM_STEP_ANIMATION.STEP_THREE,
      isActive: false,
      show: true,
    },
  ];

  const steps = stepsMeta.map((step, index) => ({
    ...step,
    titleKey: `JOURNEY_STEPS.${index}.STEP_TITLE`,
    companyKey: `JOURNEY_STEPS.${index}.COMPANY`,
    descriptionKey: `JOURNEY_STEPS.${index}.STEP_DESCRIPTION`,
  }));

  return (
    <div className="journey-section">
      <AppText
        id={SECTIONS.JOURNEY}
        tag="p"
        type={"section-tag"}
        children={t("JOURNEY")}
        className="journey-section__tag"
      />
      <AppText
        tag="p"
        type={"section-title"}
        children={t("JOURNEY_TITLE")}
        className="journey-section__title"
      />
      <AppText
        tag="p"
        type={"description"}
        children={t("JOURNEY_DESCRIPTION")}
        className="journey-section__description"
      />
      <div className="journey-section__timeline">
        {steps.map(
          (step, index) => step.show && <JourneyStep key={index} data={step} />,
        )}
      </div>
    </div>
  );
};
