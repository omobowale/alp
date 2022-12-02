import React from "react";
import "./NavBar.css";
import CompanyLogo from "../../assets/alphalex-logo.png";
import { Link } from "react-router-dom";

function NavBar() {
  const sessionUser = localStorage.getItem("user") ?? null;
  const user = JSON.parse(sessionUser);

  const logUserOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className="flex justify-around items-center">
      <div
        className="nav flex lg:gap-20 gap-10 py-3 justify-center items-center"
        style={{ fontWeight: "500" }}
      >
        <div>
          <img
            style={{ width: "3.5em", height: "2em" }}
            src={CompanyLogo}
            alt="Alphalex logo"
          />
        </div>
        <div>
          {" "}
          <Link to="/templates">Templates</Link>
        </div>
      </div>
      {user && (
        <div className="flex gap-3 items-center">
          <span style={{ fontSize: "10px" }}>
            {"Logged in as: " + user?.email}
          </span>
          <span
            onClick={() => logUserOut()}
            className="cursor-pointer px-2 py-1 bg-red-100 rounded-md"
            style={{ fontSize: "10px", fontWeight: "600" }}
          >
            Logout
          </span>
        </div>
      )}
    </div>
  );
}

export default NavBar;
