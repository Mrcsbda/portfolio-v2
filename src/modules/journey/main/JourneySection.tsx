// COMPONENTS
import { AppText } from "@/app/components";
// TYPES
import { SECTIONS } from "@app/types/data.types";
//CSS
import "./JourneySection.css";
// TRANSLATION
import { useTranslation } from "react-i18next";
import { JourneyStep } from "../components";

interface ITranslatedStep {
  STEP_TITLE: string;
  COMPANY: string;
  STEP_DESCRIPTION: string;
}

export const JourneySection = () => {
  const { t } = useTranslation("journey");

  // Metadatos no traducibles, alineados por índice con JOURNEY_STEPS
  const stepsMeta = [
    {
      date: `2024 – ${t("ACTUAL")}`,
      animation: "sttep-one",
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
      animation: "sttep-two",
      isActive: false,
      show: true,
    },
    { date: "2023", animation: "sttep-three", isActive: false, show: true },
  ];

  const translatedSteps = t("JOURNEY_STEPS", {
    returnObjects: true,
  }) as ITranslatedStep[];

  const steps = translatedSteps.map((step, index) => ({
    ...stepsMeta[index],
    title: step.STEP_TITLE,
    compamny: step.COMPANY,
    description: step.STEP_DESCRIPTION,
  }));

  return (
    <div className="journey-section" id={SECTIONS.JOURNEY}>
      <AppText
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
        type={"section-description"}
        children={t("JOURNEY_DESCRIPTION")}
        className="journey-section__description"
      />
      <div className="journey-section__timeline">
        {steps.map((step, index) => (
          <JourneyStep key={index} data={step} />
        ))}
      </div>
    </div>
  );
};
