import "./ProjectsPage.scss";
import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import { Link } from "react-router-dom";

export const ProjectsPage = () => {
  const { text } = useContext(GlobalContext);
  return (
    <div className="projects">
      <h2 className="projects__title">{text.projects.title}</h2>

      <p className="projects__info">{text.projects.description.top}</p>

      <ul className="projects__list">
        {text.projects.list.map((project) => (
          <li className="projects__list--item" key={project.id}>
            <Link to={`/projects/${project.id}`} className="projects__list--link">
              {"‣ " + project.title}
            </Link>
          </li>
        ))}
      </ul>
      <p className="projects__contact">{text.projects.description.bottom}</p>
    </div>
  );
};
