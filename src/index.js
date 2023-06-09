import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import common_en from "./translations/en/common.json";
import common_spa from "./translations/spa/common.json";
import common_fil from "./translations/fil/common.json";

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: localStorage.getItem("language")
    ? localStorage.getItem("language")
    : "en", // language to use
  resources: {
    en: {
      common: common_en, // 'common' is our custom namespace
    },
    spa: {
      common: common_spa, // 'common' is our custom namespace
    },
    fil: {
      common: common_fil, // 'common' is our custom namespace
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
