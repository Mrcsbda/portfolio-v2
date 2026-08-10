//CSS
import "./JourneyStep.css";
// TRANSLATION
import { useTranslation } from "react-i18next";

interface IData {
  date: string;
  title: string;
  compamny: string;
  description: string;
  animation: string;
  isActive: boolean;
}

interface IJourneyStepProps {
  data: IData;
}
export const JourneyStep = ({ data }: IJourneyStepProps) => {
  const { t } = useTranslation("journey");

  return <div>{data.title}</div>;
};
