import "./Header.scss";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../../context/GlobalContext";
import { Breadcrumbs } from "../Breadcrumbs/Breadcrumbs";
import classNames from "classnames";

export const Header = () => {
  let navigate = useNavigate();
  const { text, lang, changeLang, darkTheme, toggleTheme } =
    useContext(GlobalContext);

  const handleLangChange = () => {
    changeLang();
  };

  return (
    <header className="header">
      <Breadcrumbs />
        <ul className="header__navigation">
          {text.navigation.map((textNav) => (
            <li
              className="header__link"
              onClick={() => navigate(textNav.path)}
              key={textNav.title}
            >
              {textNav.title}
            </li>
          ))}
          <li className="header__lang" onClick={handleLangChange}>
            {lang === "en" ? "français" : "english"}
          </li>
          <li
            className={classNames("header__theme-switcher", {
              "header__theme-switcher--dark": darkTheme,
            })}
            onClick={toggleTheme}
          ></li>
        </ul>
    </header>
  );
};
