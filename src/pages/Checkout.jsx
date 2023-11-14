import React, { useState, useEffect } from "react";
import { blueColor } from "../constants/colors";
import { font10, font11, font12, fontWeight500 } from "../constants/fonts";
import { PaystackButton } from "react-paystack";
import "./checkout.css";
import SaveAndContinueLater from "../commons/fragments/SaveAndContinueLater";
import axiosTemplate from "../utils/axiosTemplate";
import {
  getAPIKeys,
  handleTemplateDownload,
  removeCurrentDetailsFromLocalStorage,
  saveTemplate,
} from "../helperfunctions/templates";
import { useNavigate } from "react-router-dom";
import { getLoggedInUser } from "../helperfunctions/user";
import { TEST_PUBLIC_KEY, VAT } from "../constants/strings";

function Checkout(props) {
  const user = JSON.parse(localStorage.getItem("user"));
  const vat = props.vat ? props.vat : VAT;
  const navigate = useNavigate();
  const [email, setEmail] = useState(user ? user.email : "");
  const [apiKeys, setApiKeys] = useState({});
  const [showPayStackButton, setShowPayStackButton] = useState(true);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    getAPIKeys()
      .then((response) => {
        setApiKeys({
          // livePublicKey: response?.data?.data?.test_public_key,
          livePublicKey: TEST_PUBLIC_KEY,
        });
      })
      .catch((err) => {});

    return () => {};
  }, [email]);

  const calculateAmount = (cost, vat) => {
    return Number(cost) + Number(vat);
  };

  const downloadTemplate = async () => {
    let docId = props.id;
    let docName = props.name;
    let userId = getLoggedInUser()?.id || 1;
    let email = getLoggedInUser()?.email || "stigawithfun@gmail.com";
    const templateData = {
      responses: props.responseList,
      docId,
      docName,
    };

    let requestData = {
      temp_id: docId,
      user_id: userId,
      email,
      Template_data: props.responseList,
    };

    let saveResult = await saveTemplate(requestData, docName);

    const savedTempId = saveResult?.data?.data?.id;

    if (saveResult?.data?.error == "") {
      return handleTemplateDownload(docName, savedTempId, email).then((res) => {
        if (res === -1) {
          return null;
        } else {
          return res;
        }
      });
    } else {
      return undefined;
    }
  };

  const componentProps = {
    email: email,
    amount: calculateAmount(props.cost, vat) * 100,
    metadata: {
      name: "",
      phone: "",
    },
    publicKey: apiKeys.livePublicKey,
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
          handleDownloadSuccess("Download completed! Redirecting...");
          // return;
          redirect();
        } else {
          handleDownloadError(
            "Something went wrong when downloading! Please contact support"
          );
        }
      })
      .catch((err) => {
        handleDownloadError("Something went wrong! Please contact support");
      });
  };

  const redirect = () => {
    setTimeout(() => {
      if (user) {
        navigate("/dashboard");
      } else {
        navigate("/templates");
      }
    }, 5000);
  };

  const handleDownloadSuccess = (message) => {
    setSuccessMessage(message);
    setErrorMessage("");
    removeCurrentDetailsFromLocalStorage();
  };

  const handleDownloadError = (errorMessage) => {
    setErrorMessage(errorMessage);
    setSuccessMessage("");
  };

  const handlePaymentModalClosed = () => {
    setErrorMessage("You have declined the transaction. You may try again!");
    setSuccessMessage("");
    setShowPayStackButton(true);
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
              <div>{props.label}</div>
              <div>NGN{props.cost}</div>
            </div>
            <div
              className="flex justify-between mb-1"
              style={{ fontSize: font11 }}
            >
              <div>VAT</div>
              <div>NGN{vat}</div>
            </div>
            <div
              className="flex justify-between mb-1"
              style={{ fontSize: font11, fontWeight: fontWeight500 }}
            >
              <div>TOTAL</div>
              <div>NGN{calculateAmount(props.cost, vat)}</div>
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
