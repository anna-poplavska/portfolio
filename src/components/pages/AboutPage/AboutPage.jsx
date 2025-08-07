import "./AboutPage.scss";
import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import stack from "../../../data/stack.json";

export const AboutPage = () => {
  const { text } = useContext(GlobalContext);

  return (
    <div className="about">
      <h2 className="about__title">{text.about.title}</h2>
      <div className="about__container">
        <section className="about__info">
          {text.about.description.map((descriptionPart) => (
            <p className="about__info--text">{descriptionPart}</p>
          ))}
        </section>
        <section className="about__stack">
          {stack.map((stackPart) => (
            <>
            <div className="about__stack--technologies">
              <h3 className="about__stack--title">{stackPart.title}</h3>
              <ul className="about__stack--list">
                {stackPart.list.map((technology) => (
                  <li className="about__stack--item">
                    <div className="about__stack--icon-box">
                      <img
                        className="about__stack--icon"
                        src={technology.icon}
                        alt={`Icon ${technology.name}`}
                      />
                    </div>
                    <p className="about__stack--text">{technology.name}</p>
                  </li>
                ))}
              </ul>
              </div>
            </>
          ))}
        </section>
      </div>
    </div>
  );
};
