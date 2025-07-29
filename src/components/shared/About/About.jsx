import "./About.scss";
import { useContext } from "react";
import { LangContext } from "../../../context/LangContext";

export const About = () => {
  const { text } = useContext(LangContext);

  return (
    <section id="about" className="about">
      <h2 className="about__title">{text.stack.title}</h2>
      <div className="about__container">
        <div className="about__info">
          <div className="about__text">
            {text.stack.description.map((experiencePart) => (
              <p className="about__text--part">{experiencePart}</p>
            ))}
          </div>

          <div className="about__border"></div>

          <div className="about__stack">
            {text.stack.tech.map((technology) => (
                  <span className="about__stack--part">{technology}</span>
                ))}
          </div>
        </div>
      </div>
    </section>
    // <section id="about" className="about">
    //   <div className="about__container">
    //     <div className="about__stack">
    //       <h2 className="about__title">{text.stack.title}</h2>
    //       <div className="stack">
    //         {text.stack.description.map((stackPart) => (
    //           <div className="stack__part">
    //             <h3 className="stack__part--title">{stackPart.title}</h3>
    //             <div className="stack__part--technologies">
    //               {stackPart.description.map((technology) => (
    //                 <span className="stack__part--technology">
    //                   {technology}
    //                 </span>
    //               ))}
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>

    //     <div className="about__experience">
    //       <h2 className="about__title">{text.experience.title}</h2>
    //       <div className="experience">
    //         {text.experience.description.map((experiencePart) => (
    //           <p className="experience__part">{experiencePart}</p>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};
