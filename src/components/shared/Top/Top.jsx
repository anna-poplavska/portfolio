import "./Top.scss";
import { useContext } from "react";
import { LangContext } from "../../../context/LangContext";

export const Top = () => {
  const { text } = useContext(LangContext);

  return (
    <section id="home" className="top">
      <div className="top__container">
        <div className="top__image--box">
          <img src="images/my-photo.png" alt="Photo Anna Poplavska" />
        </div>
        <div className="top__info">
          <h1 className="top__info--title">{text.presentation.title}</h1>
          <p className="top__info--text">{text.presentation.description}</p>
          <a className="top__info--link" href={text.cv.path} download>
            {text.cv.button}
          </a>
        </div>
      </div>
    </section>
  );
};
