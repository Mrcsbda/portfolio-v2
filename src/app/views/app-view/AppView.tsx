import { AppHeader } from "../../components";
import "./AppView.css";

export const App = () => {
  return (
    <>
      <AppHeader />
      <p style={{ paddingTop: "var(--nav-h)" }} id="about">
        App
      </p>
    </>
  );
};
