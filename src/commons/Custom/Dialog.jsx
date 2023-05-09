import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { blueColor } from "../../constants/colors";
import { fontWeight500 } from "../../constants/fonts";
import CheckoutPage from "../../pages/CheckoutPage";
import axiosTemplate from "../../utils/axiosTemplate";
import SaveAndContinueLater from "../fragments/SaveAndContinueLater";
import CustomButton from "./CustomButton";
import {
  extractResponses,
  saveTemplate,
} from "../../helperfunctions/templates";
import CustomQuestionResponse from "./CustomQuestionResponse";
import { getLoggedInUser } from "../../helperfunctions/user";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  DATATOBESAVED,
  TEMPLATE_SAVED,
  TOBESAVED,
} from "../../helperfunctions/strings";

function Dialog(props) {
  const {
    docId,
    index,
    questions,
    decrementIndex,
    incrementIndex,
    responseList,
    saveCurrentDetails,
    saveToDb,
    setRef,
  } = props;
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const saveAndContinue = () => {
    saveCurrentDetails();
    let data = {
      docId,
      email: getLoggedInUser()?.email,
      userResponse: extractResponses(questions),
    };
    if (user) {
      saveTemplate(data).then((res) => {
        toast.success(TEMPLATE_SAVED);
        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
      });
    } else {
      navigate("/login");
      localStorage.setItem(DATATOBESAVED, JSON.stringify(data));
    }
  };

  return (
    <>
      <div className="w-2/5">
        {index < questions.length &&
          questions.map((question, ind) => (
            <div style={{ display: `${ind == index ? "block" : "none"}` }}>
              <CustomQuestionResponse
                setRef={setRef}
                key={ind}
                questionResponse={question}
              />{" "}
            </div>
          ))}

        {index < questions.length && (
          <>
            <div className="flex justify-between gap-20">
              <div className="w-1/2">
                <CustomButton
                  bgColor={index === 0 ? "transparent" : blueColor}
                  textColor={index === 0 ? "black" : "white"}
                  label="Previous"
                  onClick={decrementIndex}
                />
              </div>
              <div className="w-1/2">
                <CustomButton
                  bgColor={
                    index === questions.length - 1 ? "transparent" : blueColor
                  }
                  textColor={index === questions.length - 1 ? "black" : "white"}
                  label="Next"
                  onClick={incrementIndex}
                />
              </div>
            </div>
            <SaveAndContinueLater saveAndContinue={saveAndContinue} />
          </>
        )}
        <div
          style={{
            display: `${index === questions.length ? "block" : "none"}`,
          }}
        >
          <CheckoutPage
            name={props.templateDetails.name}
            id={props.templateDetails.docId}
            cost={props.templateDetails.cost}
            vat={props.templateDetails.vat}
            onBackButtonClicked={decrementIndex}
            responseList={responseList}
            saveAndContinue={saveAndContinue}
          />
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Dialog;
