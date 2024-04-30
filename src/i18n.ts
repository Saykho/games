import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translation from "./translation.json";

i18n.use(initReactI18next).init({
  resources: {
    ru: {
      translation,
    },
  },
  lng: "ru",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
