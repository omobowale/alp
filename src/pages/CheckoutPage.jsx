import React from "react";
import Checkout from "./Checkout";

function CheckoutPage(props) {
  return (
    <Checkout
      name={props.name}
      id={props.id}
      cost={props.cost}
      vat={props.vat}
      onBackButtonClicked={props.onBackButtonClicked}
      responseList={props.responseList}
      saveAndContinue={props.saveAndContinue}
    />
  );
}

export default CheckoutPage;