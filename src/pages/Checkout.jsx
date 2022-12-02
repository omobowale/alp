import React, { useState } from "react";
import { blueColor } from "../constants/colors";
import { font10, font11, font12, fontWeight500 } from "../constants/fonts";
import { PaystackButton } from "react-paystack";
import "./checkout.css";
import SaveAndContinueLater from "../commons/fragments/SaveAndContinueLater";
import axiosTemplate from "../utils/axiosTemplate";

function Checkout(props) {
  const user = JSON.parse(localStorage.getItem("user"));
  const [email, setEmail] = useState(user ? user.email : "");
  const [showPayStackButton, setShowPayStackButton] = useState(true);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  console.log(props, "checkout props");

  const calculateAmount = (cost, vat) => {
    return cost + vat;
  };

  const downloadTemplate = async () => {
    const templateData = {
      responses: props.responseList,
      docId: props.id,
      docName: props.name,
    };

    console.log(templateData, "template data");
    const data = axiosTemplate(
      `/api/Template/Download`,
      "POST",
      templateData,
      null
    );
    const response = await data
      .then((res) => {
        if (res.status === 200) {
          console.log("download data", res.data);
        }
      })
      .catch((err) => {
        console.log("download error", err);
      });

    return response;
  };

  const componentProps = {
    email: email,
    amount: calculateAmount(props.cost, props.vat) * 100,
    metadata: {
      name: "",
      phone: "",
    },
    publicKey: "pk_test_c7e41457f29c358f48dc4fcc9bc1cbd6c9fee09b",
    text: "Pay and download now",
    onSuccess: () => {
      handlePaymentSuccessful();
    },
    onClose: () => handlePaymentModalClosed(),
  };

  const handlePaymentSuccessful = () => {
    setSuccessMessage("Downloading template...");
    setShowPayStackButton(false);
    setErrorMessage("");
    setEmail("");
    downloadTemplate()
      .then((response) => {
        if (response) {
          setSuccessMessage("Downloading completed!");
          setErrorMessage("");
        } else {
          setErrorMessage("Something went wrong! Please contact support");
          setSuccessMessage("");
        }
      })
      .catch((err) => {
        setErrorMessage("Something went wrong! Please contact support");
        setSuccessMessage("");
      });
  };

  const handlePaymentModalClosed = () => {
    setErrorMessage("You have declined the transaction. You may try again!");
    setSuccessMessage("");
  };

  return (
    <>
      <div className="">
        <div
          className="flex gap-3 items-center"
          style={{ fontWeight: "600", fontSize: "16px", color: blueColor }}
        >
          <span
            onClick={props.onBackButtonClicked}
            style={{ fontSize: "30px", cursor: "pointer" }}
          >
            &lt;
          </span>
          <span>Checkout</span>
        </div>
        <div style={{ fontSize: font10 }}>
          Please enter your details below to download your document
        </div>
        {successMessage !== "" && (
          <div className="px-3 py-2 mt-3 w-full text-center flex items-center justify-center font-bold gap-3 text-sm bg-green-100">
            <span style={{ fontSize: font10 }}>{successMessage}</span>
          </div>
        )}

        {errorMessage !== "" && (
          <div className="px-3 py-2 mt-3 w-full text-center flex items-center justify-center font-bold gap-3 text-sm bg-red-100">
            <span style={{ fontSize: font10 }}>{errorMessage}</span>
          </div>
        )}
        <div className="mt-4">
          <div style={{ fontSize: font12 }}>Billing details</div>
          <div className="mt-2">
            <div
              className="flex justify-between mb-1"
              style={{ fontSize: font11 }}
            >
              <div>{props.name}</div>
              <div>NGN{props.cost}</div>
            </div>
            <div
              className="flex justify-between mb-1"
              style={{ fontSize: font11 }}
            >
              <div>VAT</div>
              <div>NGN{props.vat}</div>
            </div>
            <div
              className="flex justify-between mb-1"
              style={{ fontSize: font11, fontWeight: fontWeight500 }}
            >
              <div>TOTAL</div>
              <div>NGN{calculateAmount(props.cost, props.vat)}</div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div className="form-group">
            <label style={{ fontSize: font12, fontWeight: fontWeight500 }}>
              Email address
            </label>
            <input
              style={{ fontSize: font11 }}
              type="email"
              value={email}
              className="form-control"
              placeholder="Enter email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {showPayStackButton && (
            <PaystackButton
              className="w-full block bg-blue-900 text-sm mt-5 py-2 rounded-full text-white"
              {...componentProps}
            />
          )}
        </div>
        <SaveAndContinueLater saveAndContinue={props.saveAndContinue} />
      </div>
    </>
  );
}

export default Checkout;
