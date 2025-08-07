import { createContext, useEffect, useState } from "react";
import enTranslation from "../data/enTranslation.json";
import frTranslation from "../data/frTranslation.json";

// eslint-disable-next-line react-refresh/only-export-components
export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const translations = {
    en: enTranslation,
    fr: frTranslation,
  };
  const [lang, setLang] = useState('en');
  const [darkTheme, setDarkTheme] = useState(true);

  useEffect(() => {
    const browserLang = navigator.language.slice(0, 2);
    const supportedLangs = ["en", "fr"];
    const defaultLang = supportedLangs.includes(browserLang)
      ? browserLang
      : "en";

    setLang(defaultLang);
  }, []);

  const toggleTheme = () => {
    setDarkTheme(prevState => !prevState);
  };

  const changeLang = () => {
    setLang(prevLang => prevLang === 'en' ? 'fr' : 'en');
  };

  const text = translations[lang];

  const value = { darkTheme, toggleTheme, lang, changeLang, text };

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};
