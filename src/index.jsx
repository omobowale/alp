import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import Template1 from "./Templates/template_1";
import { templates } from "./template_registration";
import { replaceSpaceWithSlash } from "./helperfunctions/strings";

const router = createBrowserRouter(
  [
    {
      path: "",
      element: <Home />,
    },
    ...templates.map((template) => {
      return {
        path: replaceSpaceWithSlash(template.title),
        element: template.component,
      };
    }),
  ]

);

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
