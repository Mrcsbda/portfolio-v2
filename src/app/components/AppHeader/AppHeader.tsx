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

  return (
    <nav className="nav">
      <section className="nav__inner">
        <div className="nav__logo-container">
          <img
            className="nav__logo"
            src="/favicon.svg"
            alt="Logo"
            width={40}
            height={40}
          />
        </div>
      </section>
    </nav>
  );
};
