import i18next from "./translation/config.translation";
import { createRoot } from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import App from "./app/views/app-view/AppView.tsx";

const root: any = document.getElementById("root");

createRoot(root).render(
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>,
);
