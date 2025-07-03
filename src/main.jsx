import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { LangProvider } from "./context/LangContext.jsx";
import { Route, Router, Routes } from "react-router-dom";

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
          </Route>
        </Routes>
      </Router>
    </LangProvider>
  </StrictMode>
);
