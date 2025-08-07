import { Outlet } from "react-router-dom";
import "./App.scss";
import { useContext, useEffect } from "react";
import { GlobalContext } from "./context/GlobalContext";
import { Header } from "./components/shared/Header";
import { Footer } from "./components/shared/Footer";
import { Particles } from "./components/shared/Particles";
import { ClickSpark } from "./components/shared/ClickSpark";

const App = () => {
  const { darkTheme } = useContext(GlobalContext);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkTheme ? "dark" : "light"
    );
  }, [darkTheme]);

  return (
    <ClickSpark
      sparkColor="#fff"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
    <div className="app">
      <Particles />
      <div className="app__container">
        <div className="app__window">
        <Header />
        <main className="app__main">
          <Outlet />
        </main>
        <Footer />
        </div>
      </div>
    </div>
    </ClickSpark>
  );
};

export default App;
