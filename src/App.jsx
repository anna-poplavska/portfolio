import { Outlet } from "react-router-dom";
import "./App.scss";
import { Header } from "./components/shared/Header";
import { Footer } from "./components/shared/Footer";
import { Particles } from "./components/shared/Particles";
import { ClickSpark } from "./components/shared/ClickSpark";

const App = () => {
  return (
    <div className="app">
      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <Header />
        <Outlet />
        <Footer />
      </ClickSpark>
    </div>
  );
};

export default App;
