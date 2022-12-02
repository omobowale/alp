import React from "react";
import { useNavigate } from "react-router-dom";
import { blueColor } from "../../constants/colors";
import { fontWeight500 } from "../../constants/fonts";
import CheckoutPage from "../../pages/CheckoutPage";
import SaveAndContinueLater from "../fragments/SaveAndContinueLater";
import CustomButton from "./CustomButton";
import CustomQuestionResponse from "./CustomQuestionResponse";

function Dialog(props) {
  const {
    index,
    questions,
    decrementIndex,
    incrementIndex,
    responseList,
    saveCurrentDetails,
    saveToDb,
  } = props;
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const saveAndContinue = () => {
    if (user) {
      saveCurrentDetails();
      alert("saved");
    } else {
      saveCurrentDetails();
      navigate("/login");
    }
  };

  return (
    <>
      <div className="w-2/5">
        {index < questions.length &&
          questions.map((question, ind) => (
            <div style={{ display: `${ind == index ? "block" : "none"}` }}>
              <CustomQuestionResponse key={ind} questionResponse={question} />{" "}
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
            saveAndContinue={() => saveAndContinue()}
          />
        </div>
      </div>
    </>
  );
}

export default Dialog;
