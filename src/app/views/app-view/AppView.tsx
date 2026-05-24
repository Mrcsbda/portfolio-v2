import { useEffect } from "react";
import { HeroView } from "../../../modules/hero/views";
import { AppHeader } from "../../components";
import "./AppView.css";

export const App = () => {
  useEffect(() => {
    document.documentElement.classList.remove("no-transition");
  }, []);

  return (
    <>
      <AppHeader />
      <HeroView />
    </>
  );
};
