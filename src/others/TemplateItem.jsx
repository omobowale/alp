import React from "react";
import { blueColor } from "../constants/colors";
import { font10, font12 } from "../constants/fonts";

function TemplateItem(props) {
  return (
    // <a href={props.link}>
      <div className="m-auto" style={{ textAlign: "center" }}>
        <div className="flex justify-center">
          <img src={props.imagePath} alt={props.label} />
        </div>
        <div className="my-2" style={{ fontSize: font10 }}>
          {props.title}
        </div>
        <div style={{ color: blueColor, fontSize: font12 }}>N{props.price}</div>
      </div>
    // </a>
  );
}

export default TemplateItem;
