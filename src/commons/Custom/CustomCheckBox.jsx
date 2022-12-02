import React from "react";
import { blueColor } from "../../constants/colors";
import { font10, font12 } from "../../constants/fonts";
import { insertValue } from "../../helperfunctions/templates";

function CustomCheckBox(props) {
  return (
    <div className="flex gap-5 border py-1 px-2 rounded-md my-2">
      <input
        value={insertValue(props.value)}
        id={props.name}
        name={props.name}
        type="checkbox"
        className="focus:outline-none focus:border-none focus:ring-0 p-0 m-0"
        style={{
          outline: "none",
          backgroundColor: "transparent",
          borderTop: 0,
          borderLeft: 0,
          borderRight: 0,
          borderBottom: `4px solid ${blueColor}`,
          fontSize: font12,
        }}
      />
      <div className="mt-1">
        <label for={props.name} style={{ fontSize: font10 }}>
          {props.label}
        </label>
      </div>
    </div>
  );
}

export default CustomCheckBox;
