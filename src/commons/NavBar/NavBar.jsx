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
    <div className="flex justify-start items-center pl-28 mb-5">
      <div
        className="nav flex lg:gap-28 gap-10 py-3 justify-center items-center"
        style={{ fontWeight: "500" }}
      >
        <div>
          <img
            style={{ width: "3.5em", height: "2em" }}
            src={CompanyLogo}
            alt="Alphalex logo"
          />
        </div>
        <div className="flex gap-5">
          {" "}
          <a href="https://nuvomedia.online/alphalex/index.php">
            Alphalex Home
          </a>
          <a href="https://nuvomedia.online/alphalex/index.php/">
            Start a business
          </a>
          <Link to="/templates">Templates</Link>
          <a href="https://nuvomedia.online/alphalex/index.php/elementor-141/">
            The Hub
          </a>
          <a href="https://nuvomedia.online/alphalex/index.php/about-us/">
            About Us
          </a>
          <a href="https://nuvomedia.online/alphalex/index.php/contact-us/">
            Contact Us
          </a>
        </div>
      </div>
      {user && (
        <div className="flex gap-3 items-center ml-3">
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
