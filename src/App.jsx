import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import NavComponent from "./components/shared/NavComponent";

function App() {
  return (
    <div>
      <NavComponent />
      <div className="mt-5">
          <Outlet />
      </div>
    </div>
  );
}

export default App;
