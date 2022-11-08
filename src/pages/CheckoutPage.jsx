import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import Checkout from "./Checkout";

function CheckoutPage(props) {
  const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");
  return (
    <Elements stripe={stripePromise}>
      <Checkout name={props.name} onBackButtonClicked={props.onBackButtonClicked} />
    </Elements>
  );
}

export default CheckoutPage;
