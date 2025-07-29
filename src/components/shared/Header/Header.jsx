import { Link } from "react-router-dom";
import "./Header.scss";
import { useContext } from "react";
import { LangContext } from "../../../context/LangContext";
import { HashLink } from "react-router-hash-link";

export const Header = () => {
  const { text, lang, changeLang } = useContext(LangContext);

  const handleLangChange = () => {
    const newLang = lang === "en" ? "fr" : "en";
    changeLang(newLang);
  };

  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <img  className="header__logo--image" src="./images/icons/icon-girl-with-laptop.png" alt="Image girl with laptop" />
        annaPoplavska
      </Link>

      <ul className="header__nav">
        {text.navigation.map((navLink) => {
          return (
            <li className="header__nav--item" key={navLink.title}>
              <HashLink to={`/${navLink.path}`} className="header__nav--link">
                {navLink.title}
              </HashLink>
            </li>
          );
        })}

        <li className="header__nav--item">
          <div className="header__nav--lang" onClick={handleLangChange}>
            {lang === "en" ? "français" : "english"}
          </div>
        </li>
      </ul>
    </header>
  );
};
