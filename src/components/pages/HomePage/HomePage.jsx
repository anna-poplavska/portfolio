import { About } from "../../shared/About";
import { Menu } from "../../shared/Menu";
import { Projects } from "../../shared/Projects";
import { Top } from "../../shared/Top";
import "./HomePage.scss";

export const HomePage = () => {
  return (
    <>
      {/* <Menu /> */}
      <main className="home">
        <Top />
        <About />
        <Projects />
      </main>
    </>
  );
};
