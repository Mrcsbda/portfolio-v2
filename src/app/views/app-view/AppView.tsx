import { useEffect } from "react";
import { AppHeader } from "../../components";
import "./AppView.css";

export const App = () => {
  useEffect(() => {
    document.documentElement.classList.remove("no-transition");
  }, []);

  return (
    <>
      <AppHeader />
    </>
  );
};
