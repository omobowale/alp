import React from "react";
import { blueColor } from "../constants/colors";
import { font10, font12 } from "../constants/fonts";

function TemplateItem(props) {
  return (
    <div onClick={props.onClick} className="hover:bg-blue-200 hover:opacity-60">
      <a href={props.link} className="hover:bg-blue-200">
        <div
          className="m-auto bg-blue-100 shadow-sm"
          style={{ textAlign: "center" }}
        >
          <div className="flex bg-red-100 justify-center h-1/2">
            <img
              className="w-full"
              src={props.imagePath}
              alt={props.label}
              style={{ height: "20em" }}
            />
          </div>
          <div className="flex flex-col justify-center px-2" style={{ height: "5em" }}>
            <div className="my-2" style={{ fontSize: font10, fontWeight: "bold" }}>
              {props.title}
            </div>
            <div style={{ color: blueColor, fontSize: font12, fontWeight: "bold" }}>
              N{props.price}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default TemplateItem;
