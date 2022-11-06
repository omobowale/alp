import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Switch,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import Template1 from "./Templates/template_1";
import { templates } from "./template_registration";
import { replaceSpaceWithSlash } from "./helperfunctions/strings";
import Start from "./pages/Start";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {templates.map((template) => {
          return (
            <Route path={'/'+replaceSpaceWithSlash(template.title)} element={template.component} />
             
          );
        })}
      </Routes>
    </Router>
  </React.StrictMode>
);
