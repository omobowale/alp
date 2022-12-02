import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import { templates } from "./template_registration";
import { replaceSpaceWithSlash } from "./helperfunctions/strings";
import Register from "./pages/Register";
import Templates from "./pages/Templates";
import Dashboard from "./pages/Dashboard";

function App() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Templates />} />
          <Route path="/home" element={<Templates />} />
          <Route
            path="/dashboard"
            element={user ? <Dashboard /> : <Navigate to="/home" />}
          />
          <Route path="/templates" element={<Templates />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {templates.map((template) => {
            return (
              <Route
                path={"/templates/" + replaceSpaceWithSlash(template.title)}
                element={template.component}
              />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
