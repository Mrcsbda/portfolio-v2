import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useAppStore } from "../../store";
import { ENUM_THEME } from "../../types/data.types";
import "./AppView.css";

export const App = () => {
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
    <button
      onClick={() =>
        changeTheme(
          theme.get() === ENUM_THEME.LIGHT ? ENUM_THEME.DARK : ENUM_THEME.LIGHT,
        )
      }
    >
      {theme.use()} {""} {t("NAVBAR.ABOUT")}
    </button>
  );
};

export default App;
