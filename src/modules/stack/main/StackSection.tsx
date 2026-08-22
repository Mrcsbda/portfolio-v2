// COMPONENTS
import { AppText } from "@/app/components";
// TYPES
import { SECTIONS } from "@/app/types/data.types";
import { ENUM_STACK_STATE } from "@stack/types";
// TRANSLATION
import { useTranslation } from "react-i18next";
//CSS
import "./StackSection.css";

export const StackSection = () => {
  const { t } = useTranslation("stack");

  const stack = [
    {
      value: "HTML",
      state: ENUM_STACK_STATE.CURRENT,
    },
    {
      value: "CSS",
      state: ENUM_STACK_STATE.CURRENT,
    },
    {
      value: "Javascript",
      state: ENUM_STACK_STATE.CURRENT,
    },
    {
      value: "Typescript",
      state: ENUM_STACK_STATE.CURRENT,
    },
    {
      value: "Vue.js",
      state: ENUM_STACK_STATE.CURRENT,
    },
    {
      value: "React",
      state: ENUM_STACK_STATE.CURRENT,
    },
    {
      value: "React Native",
      state: ENUM_STACK_STATE.CURRENT,
    },
    {
      value: "Node.js",
      state: ENUM_STACK_STATE.LEARNING,
    },
    {
      value: "Firebase",
      state: ENUM_STACK_STATE.CURRENT,
    },
    {
      value: "Mongo DB",
      state: ENUM_STACK_STATE.CURRENT,
    },
    {
      value: "Git",
      state: ENUM_STACK_STATE.CURRENT,
    },
  ];

  return (
    <div className="stack-section">
      <AppText
        id={SECTIONS.STACK}
        tag="p"
        type={"section-tag"}
        children={t("STACK")}
        className="stack-section__tag"
      />
      <AppText
        tag="p"
        type={"section-title"}
        children={t("STACK_TITLE")}
        className="stack-section__title"
      />
      <div className="stack-section__items">
        {stack.map((item, index) => (
          <>
            <AppText
              key={index}
              tag="p"
              type={"tech-text"}
              children={item.value}
              className={`stack-section__item stack-section__item--${item.state.toLowerCase()}`}
            />
            {index !== stack.length - 1 && (
              <span className="stack-section__sep">·</span>
            )}
          </>
        ))}
      </div>
    </div>
  );
};
