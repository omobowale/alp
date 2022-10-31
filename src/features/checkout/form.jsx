import React, { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

const CheckoutForm = () => {
  const nav = useNavigate()
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('')
  const [expiryDate, setExpiryDate] = useState('')
  const [cvv, setCvv] = useState('');
  const [payDisabled, setPayDisabled] = useState(true)

  const EmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  const CardNumberRegex = /^\d{16}$/
  const CvvRegex = /^\d{3}$/

  useEffect(() => {
    if(EmailRegex.test(email) && CardNumberRegex.test(cardNumber) && expiryDate !== "" && CvvRegex.test(cvv)){
      setPayDisabled(false)
    }
    else{
      setPayDisabled(true)
    }
  }, [email, cardNumber, expiryDate,cvv])

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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label className="form-label">Card Number</label>
          <input
            type="text"
            className="form-control"
            name="card-number"
            placeholder="Number on your debit/credit card"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>

        <div className="mb-2">
          <label className="form-label">Card Expiration Date</label>
          <input type="date" className="form-control" name="expiry-date" value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}/>
        </div>

        <div className="mb-2">
          <label className="form-label">CVV</label>
          <input
            type="password"
            className="form-control"
            name="expiry-date"
            placeholder="***"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />
        </div>

        <div>
          <img src="assets/image9.png" alt="logo" />
        </div>

        <div className="d-flex justify-content-between mt-3">
          <NavLink className="btn btn-light" to="/fill-template">
            Previous
          </NavLink>
          <button className="btn paymentButton" disabled={payDisabled} onClick={() => nav("/success")}>
            Make Payment and download
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
