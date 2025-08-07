import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.jsx";
import { GlobalProvider } from "./context/GlobalContext.jsx";
import { Route, HashRouter as Router, Routes, Navigate } from "react-router-dom";
import { HomePage } from "./components/pages/HomePage";
import { AboutPage } from './components/pages/AboutPage';
import { ProjectsPage } from './components/pages/ProjectsPage'
import { ProjectDetailPage } from "./components/pages/ProjectDetailPage";
import { NotFoundPage } from "./components/pages/NotFoundPage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="home" element={<Navigate to="/" replace />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="projects">
              <Route index element={<ProjectsPage />} />
              <Route path=":projectId" element={<ProjectDetailPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
    </GlobalProvider>
  </StrictMode>
);
