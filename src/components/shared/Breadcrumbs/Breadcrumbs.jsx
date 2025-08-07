import "./Breadcrumbs.scss";
import { Link, useLocation } from "react-router-dom";

export const Breadcrumbs = () => {
  const currentPath = useLocation()
    .pathname.split("/")
    .filter((path) => path.length > 0);

  return (
    <div className="breadcrumbs">
      <span className="breadcrumbs__container">
        <div className="breadcrumbs__container--part">
          {currentPath.length === 0 ? (
            "anna-poplavska"
          ) : (
            <Link to="/" className="breadcrumbs__link">
              anna-poplavska
            </Link>
          )}
          <p className="breadcrumbs__slash">/</p>
        </div>

        <div className="breadcrumbs__container--part">
          {currentPath[0] && (
            <>
              {currentPath.length === 1 ? (
                currentPath[0]
              ) : (
                <Link to={`/${currentPath[0]}`} className="breadcrumbs__link">
                  {currentPath[0]}
                </Link>
              )}

              {currentPath[0] && currentPath[0] === "projects" && (
                <p className="breadcrumbs__slash">/</p>
              )}
            </>
          )}
        </div>

        <div className="breadcrumbs__container--part">{currentPath[1] && currentPath[1]}</div>
      </span>
    </div>
  );
};
