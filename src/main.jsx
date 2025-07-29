import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.jsx";
import { LangProvider } from "./context/LangContext.jsx";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import { HomePage } from "./components/pages/HomePage";
import { ProjectPage } from "./components/pages/ProjectPage";
import { NotFoundPage } from "./components/pages/NotFoundPage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LangProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="project">
              <Route path=":projectId" element={<ProjectPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
    </LangProvider>
  </StrictMode>
);
