import React from "react";
import { blueColor } from "../../constants/colors";
import { fontWeight500 } from "../../constants/fonts";

function SaveAndContinueLater(props) {
  return (
    <div
      className="mt-5 cursor-pointer"
      style={{
        fontSize: "12px",
        color: blueColor,
        fontWeight: fontWeight500,
      }}
    >
      <span onClick={() => props.saveAndContinue()} style={{ color: blueColor }}>
        Save and continue later
      </span>
    </div>
  );
}

export default SaveAndContinueLater;
