import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./commons/footer/footer";
import NavBar from "./commons/NavBar/NavBar";

function Layout(props) {
  return (
    <>
      <div style={{ minHeight: "100vh" }}>
        <div>
          <NavBar />
        </div>
        <div className="mt-8"></div>
        <div className="w-4/5 m-auto">{props.children}</div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
