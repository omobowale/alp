import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { dispatch } from "../../app/store";
import { setFormData } from "../template/templateSlice";

const SuccessPage = () => {
  const nav = useNavigate();
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div
        className="d-flex justify-content-center align-items-center"
        id="success-con"
      >
        <div>
          <div className="d-flex justify-content-center align-items-center">
            <img src="assets/Frame.png" alt="logo" />
          </div>

          <div
            id="title"
            className="d-flex justify-content-center align-items-center"
          >
            Payment Successful
          </div>
          <div className="info">
            Your document Power of Attorney has been sent to your email address{" "}
            <br />
            tony@gmail.com
          </div>

          <div className="mt-5 info">
            {" "}
            Didn't get an email?{" "}
            <NavLink to="/" className="text-primary">
              Resend Now
            </NavLink>
          </div>

          <div className="d-flex justify-content-between mt-5">
            <NavLink id="btn-light" disabled={true} to="/">
              Back Home
            </NavLink>
            <button
              className="btn paymentButton"
              onClick={() => {
                nav("/fill-template")
                dispatch(setFormData([]))
              }}
            >
              Continue another template
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
