import React from "react";
import { NavLink } from "react-router-dom";
import "./checkout.css";
import CheckoutForm from "./form";

const CheckoutPage = () => {
  return (
      <div className="d-flex" id="container">
        <div className="col-4 mb-1" id="leftCon" style={{ backgroundColor: "#f8fbfd" }}>
          <div id="checkCon">
            <div id="textHead">Checkout</div>
            <p>Please enter your details below to downlaod your document </p>

            <div className="mt-2 ">
              <div className="pt-2 billing-text">Billing Details</div>
              <div className="billing-details">
                <div className="d-flex justify-content-between">
                  <p>Power of Attorney</p>
                  <p>NGN4, 500</p>
                </div>

                <div className="d-flex justify-content-between">
                  <p>VAT</p>
                  <p>NGN 750</p>
                </div>

                <div className="d-flex justify-content-between">
                  <p>
                    <b>Total</b>
                  </p>
                  <p>
                    <b>NGN5, 250</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="line"></div>

          <div id="checkCon">
            <CheckoutForm />
          </div>
          
        </div>
        <div className="col-1"></div>
        <div
          className="col-7"
          id="rightSection"
          style={{ backgroundColor: "#f8fbfd", height: "80vh" }}
        >
          <div className="d-flex justify-content-between align-items-center">
            <div style={{ width: "290px" }} className="p-0 m-0">
              <div className="d-flex" id="textHead-con">
                <div className="mr-2">
                  <img src="assets/vector1.png" alt="logo" />
                </div>
                <div id="textHead">Power of Attorney</div>
              </div>
              <p>
                Here is a preview of your document. You can go back to edit if
                you have any changes.
              </p>
            </div>
            <NavLink className="d-flex justify-content-between align-items-center" to="/fill-template">
              <button className="editTemplate">Go back to edit Template</button>
            </NavLink>
          </div>

          <div className="mt-2 mb-4">
            <p className="lorem-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              _________ magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,
              consectetur _________ eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id es _________ rem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,
              consectet _________ trud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <p className="lorem-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              _________ magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,
              consectetur _________ eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id es _________ rem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,
              consectet _________ trud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
  );
};

export default CheckoutPage;
