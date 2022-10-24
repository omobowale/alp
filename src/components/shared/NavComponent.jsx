import React from "react";
import { NavLink } from "react-router-dom";
import { VscSearch } from "react-icons/vsc";
import { BsFillCartFill } from "react-icons/bs";

export default function NavComponent() {
  return (
    <nav className="p-3 fixed" style={{ height: "65px" }}>
      <div className="container-fluid py-2 d-flex justify-content-around align-items-center">
        <div className="row col-10 d-flex justify-content-between align-items-center">
          <div className="col-8 d-flex justify-content-between align-items-center">
            <NavLink className="navbar-brand" to="/">
              <img src="assets/alp-logo.png" alt="Logo" />
            </NavLink>

            <NavLink className={({ isActive }) =>
              !isActive ? "nav-links" : "active-link"
            } to="/">
              Alphalex Home
            </NavLink>

            <NavLink className={({ isActive }) =>
              !isActive ? "nav-links" : "active-link"
            } to="/business">
              Start a Business
            </NavLink>

            <NavLink className={({ isActive }) =>
              !isActive ? "nav-links" : "active-link"
            } to="/templates">
              Templates
            </NavLink>

            <NavLink className={({ isActive }) =>
              !isActive ? "nav-links" : "active-link"
            } to="/hub">
              The Hub
            </NavLink>

            <NavLink className={({ isActive }) =>
              !isActive ? "nav-links" : "active-link"
            } to="/about">
              About Us
            </NavLink>

            <NavLink className={({ isActive }) =>
              !isActive ? "nav-links" : "active-link"
            } to="/contact">
              Contact Us
            </NavLink>
          </div>

          <div className="col-3 d-flex justify-content-around align-items-center">
            <div className="d-flex justify-content-between align-items-center">
              <div className="mr-3 d-flex align-items-center">
                <VscSearch />
              </div>
              <div className="d-flex align-items-center">
                <BsFillCartFill className="mr-2"/>
                <div id="cart-count">0</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
