import { useEffect } from "react";
import { AppHeader } from "../../components";
import { SECTIONS } from "../../types/data.types";
import "./AppView.css";

export const App = () => {
  useEffect(() => {
    document.documentElement.classList.remove("no-transition");
  }, []);

  return (
    <>
      <AppHeader />
      <p style={{ paddingTop: "var(--nav-h)" }} id={SECTIONS.CONTACT}>
        App
      </p>
    </>
  );
};
