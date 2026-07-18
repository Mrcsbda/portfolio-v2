import { useEffect } from "react";
import { AppHeader } from "../../components";
import { AppBackground } from "../../components/app-background/AppBackground";
import "./AppView.css";

export const App = () => {
  useEffect(() => {
    document.documentElement.classList.remove("no-transition");
  }, []);

  return (
    <>
      <AppBackground />
      <AppHeader />
    </>
  );
};
