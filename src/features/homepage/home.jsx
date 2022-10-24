import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import "./home.css";

const HomePage = () => {
  return (
    <div className="d-flex" id="container">
      <div className="main-content">
        <div className="col-7">
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <div className="mr-2">
                <img src="assets/vector1.png" alt="logo" />
              </div>
              <p className="textHead">Power of Attorney</p>
            </div>
            <div>
              <p className="amount">NGN 4,500</p>
            </div>
          </div>

          <div className="mt-2 mb-4">
            <p className="lorem-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <div className="mt-1">
            <p className="list-head">How to fill a template</p>
            <ul className="list-parent">
              <li>Click the 'Fill template' button</li>
              <li>Follow prompts to complete the document</li>
              <li>Review and pay. Document will be sent to your email</li>
            </ul>
          </div>

          <NavLink to="/fill-template">
            <button className="btn" id="template-button">Fill Template</button>
          </NavLink>
        </div>
        <div className="col-1"></div>
        <div className="col4">
          <img src="assets/homedoc.png" alt="document" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
