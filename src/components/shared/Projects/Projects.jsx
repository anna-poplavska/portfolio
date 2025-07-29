import './Projects.scss';
import { useContext } from "react";
import { LangContext } from "../../../context/LangContext";

export const Projects = () => {
    const { text } = useContext(LangContext);

    return (
        <section id="projects" className="projects">
         <h2 className='projects__title'>{text.projects.title}</h2>
         
        </section>
    );
};