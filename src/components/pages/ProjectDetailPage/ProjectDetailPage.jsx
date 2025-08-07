import "./ProjectDetailPage.scss";
import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import { useLocation } from "react-router-dom";

export const ProjectDetailPage = () => {
  const { text } = useContext(GlobalContext);

  const currentProjectId = useLocation()
    .pathname.split("/")
    .filter((path) => path.length > 0)[1];

  const currentProject = text.projects.list.find(
    (projects) => projects.id === currentProjectId
  );

  if (!currentProject) {
    return;
  }

  return (
    <div className="project-detail">
      <div className={currentProject.image ? "project-detail__container" : "project-detail__container--no-image"}>
        <div className="project-detail__info">
          <h2 className="project-detail__title">{currentProject.title}</h2>
          <p className="project-detail__links">
        {currentProject.repo && (
          <a className="project-detail__link" href={currentProject.repo}>
            {text.projects.repo}
          </a>
        )}
        {currentProject.repo && currentProject.website && " — "}
        {currentProject.website && (
          <a className="project-detail__link" href={currentProject.website}>
            {text.projects.website}
          </a>
        )}
      </p>
          <ul className="project-detail__technologies">
            {currentProject.technologies.map((technology) => (
              <li className="project-detail__technology" key={technology}>
                {technology}
              </li>
            ))}
          </ul>
          <p className="project-detail__text">{currentProject.description}</p>
        </div>

        {currentProject.image && (
          <div className="project-detail__image--box">
            <img
              className="project-detail__image"
              src={currentProject.image}
              alt={"Image of " + currentProject.title}
            />
          </div>
        )}
      </div>
    </div>
  );
};
