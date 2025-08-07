import './Projects.scss';
import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";

export const Projects = () => {
    const { text } = useContext(GlobalContext);

    return (
        <section id="projects" className="projects">
         <h2 className='projects__title'>{text.projects.title}</h2>
         
        </section>
    );
};