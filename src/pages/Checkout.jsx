import React from "react";
import { blueColor } from "../constants/colors";
import { font10, font11, font12, fontWeight500 } from "../constants/fonts";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CustomButton from "../commons/Custom/CustomButton";

function Checkout(props) {
  const customAppearance = {
    shapes: {
      borderRadius: 12,
      borderWidth: 0.5,
    },
    primaryButton: {
      shapes: {
        borderRadius: 20,
      },
    },
    colors: {
      primary: "#fcfdff",
      background: "#ffffff",
      componentBackground: "#f3f8fa",
      componentBorder: "#f3f8fa",
      componentDivider: "#000000",
      primaryText: "#000000",
      secondaryText: "#000000",
      componentText: "#000000",
      placeholderText: "#73757b",
    },
  };
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
      appearance: customAppearance,
    });
  };

  return (
    <>
      <div className="">
        <div className="flex gap-3 items-center" style={{ fontWeight: "600", fontSize: "16px", color: blueColor }}>
          <span onClick={props.onBackButtonClicked} style={{ fontSize: "30px", cursor: "pointer" }}>&lt;</span>
          <span>Checkout</span>
        </div>
        <div style={{ fontSize: font10 }}>
          Please enter your details below to download your document
        </div>

        <div className="mt-4">
          <div style={{ fontSize: font12 }}>Billing details</div>
          <div className="mt-2">
            <div
              className="flex justify-between mb-1"
              style={{ fontSize: font11 }}
            >
              <div>{props.name}</div>
              <div>N1500</div>
            </div>
            <div
              className="flex justify-between mb-1"
              style={{ fontSize: font11 }}
            >
              <div>VAT</div>
              <div>N200</div>
            </div>
            <div
              className="flex justify-between mb-1"
              style={{ fontSize: font11, fontWeight: fontWeight500 }}
            >
              <div>TOTAL</div>
              <div>N1700</div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label style={{ fontSize: font12, fontWeight: fontWeight500 }}>
                Email address
              </label>
              <input
                style={{ fontSize: font11 }}
                type="email"
                className="form-control"
                placeholder="Enter email address"
              />
            </div>

            <CardElement />
            <CustomButton
              type="submit"
              textColor="white"
              bgColor={blueColor}
              label="Pay and download template"
              disabled={!stripe || !elements}
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default Checkout;
