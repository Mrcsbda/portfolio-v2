import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useAppStore } from "../../store";
import { ENUM_THEME } from "../../types/data.types";
import "./AppHeader.css";

export const AppHeader = () => {
  const { theme, changeTheme } = useAppStore();
  const { t } = useTranslation("header");

  useEffect(() => {
    const themeAux = localStorage.getItem("theme");
    if (!themeAux) {
      changeTheme(ENUM_THEME.LIGHT);
    } else {
      changeTheme(themeAux as ENUM_THEME);
    }
  }, []);

  return <nav></nav>;
};
