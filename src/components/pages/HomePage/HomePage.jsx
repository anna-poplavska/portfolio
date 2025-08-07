import "./HomePage.scss";
import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";

export const HomePage = () => {
  const { text } = useContext(GlobalContext);
  return (
    <div className="home">
      <section className="home__info">
        <h1 className="home__title">{text.home.title}</h1>
        <p className="home__description">{text.home.description}</p>
        <a className="home__cv" href={text.cv.path} download>
          {text.cv.button}
        </a>
      </section>
      <div className="home__image--effect">
        <div className="home__image--box">
          <img
            className="home__image"
            src="images/my-photo.png"
            alt="Photo Anna Poplavska"
          />
        </div>
      </div>
    </div>
  );
};
