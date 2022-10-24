import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLoaderData } from "react-router-dom";
import { dispatch } from "../../app/store";
import Form from "./form";
import "./template.css";
import { setFormData } from "./templateSlice";

const TemplatePage = () => {
  const FormData = useLoaderData();

  const { progress } = useSelector((state) => state.template);

  return (
    <div className="d-flex" id="container">
      <div className="col-3" id="form">
     <Form formData={FormData} />
      </div>
      <div className="col-2"></div>
      <div
        className="col-7"
        id="rightSection"
        style={{ backgroundColor: "#f8fbfd", height: "70vh" }}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <div className="mr-2">
              <img src="assets/vector1.png" alt="logo" />
            </div>
            <p className="textHead">Power of Attorney</p>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <div className="d-flex align-items-baseline">
              <p className="completionText mr-2">
                Document Completion : {progress}%{" "}
              </p>

              <div className="progress mt-0">
                <div
                  className="progress-bar bg-success"
                  color="#0B2594"
                  role="progressbar"
                  style={{ width: `${progress}px` }}
                  aria-valuenow={progress}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2 mb-4">
          <p className="lorem-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            _________ magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Lorem ipsum dolor sit amet, consectetur
            _________ eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id es
            _________ rem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectet _________ trud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TemplatePage;
