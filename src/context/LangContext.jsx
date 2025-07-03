import { createContext, useEffect, useState } from "react";
import translations from './language/translations.json';

// eslint-disable-next-line react-refresh/only-export-components
export const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const browserLang = navigator.language.slice(0, 2);
    const supportedLangs = ["en", "fr"];
    const defaultLang = supportedLangs.includes(browserLang)
      ? browserLang
      : "en";

    setLang(defaultLang);
  }, []);

  const changeLang = (newLang) => {
    setLang(newLang);
  };

  const text = translations[lang];

  const value = { lang, changeLang, text };

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
};
