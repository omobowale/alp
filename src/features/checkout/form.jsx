import React from "react";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const nav = useNavigate()
  return (
    <div>
      <form>
        <div className="mb-1">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Your email address"
          />
        </div>
        <div className="mb-2">
          <label className="form-label">Card Number</label>
          <input
            type="text"
            className="form-control"
            name="card-number"
            placeholder="Number on your debit/credit card"
          />
        </div>

        <div className="mb-2">
          <label className="form-label">Card Expiration Date</label>
          <input type="date" className="form-control" name="expiry-date" />
        </div>

        <div className="mb-2">
          <label className="form-label">CVV</label>
          <input
            type="password"
            className="form-control"
            name="expiry-date"
            placeholder="***"
          />
        </div>

        <div>
          <img src="assets/image9.png" alt="logo" />
        </div>

        <div className="d-flex justify-content-between mt-3">
          <button className="btn btn-light" disabled={true}>
            Previous
          </button>
          <button className="btn paymentButton" onClick={() => nav("/success")}>
            Make Payment and download
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
