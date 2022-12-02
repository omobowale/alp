import React from "react";
import { blueColor } from "../../constants/colors";
import { font10, font12 } from "../../constants/fonts";
import CustomButton from "../Custom/CustomButton";
import TemplateIcon from "../../assets/document-icon.png";

function UserSavedTemplateItem(props) {
  return (
    <a href={props.link}>
      <div className="m-auto" style={{ textAlign: "center" }}>
        <div className="flex justify-center">
          <img src={TemplateIcon} alt={props.label} />
        </div>
        <div className="my-2" style={{ fontSize: font10 }}>
          {props.title}
        </div>
        <div style={{ color: blueColor, fontSize: font12 }}>N{props.price}</div>
        <div className="w-1/2 mx-auto">
          <CustomButton label="Edit" textColor="white" bgColor={blueColor} />
        </div>
      </div>
    </a>
  );
}

export default UserSavedTemplateItem;
