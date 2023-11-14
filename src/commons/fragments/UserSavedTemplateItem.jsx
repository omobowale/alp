import React from "react";
import { blueColor } from "../../constants/colors";
import { font10, font12 } from "../../constants/fonts";
import CustomButton from "../Custom/CustomButton";
import TemplateIcon from "../../assets/document-icon.png";
import {
  handleTemplateDownload,
  storeUserTemplateResponse,
} from "../../helperfunctions/templates";
import { getLoggedInUser } from "../../helperfunctions/user";

function UserSavedTemplateItem(props) {
  let docId = props.name;
  let templateId = props.templateId;
  let userId = getLoggedInUser()?.id || 1;
  let email = getLoggedInUser()?.email || "stigawithfun@gmail.com";

  return (
      <div className="m-auto" style={{ textAlign: "center" }}>
        <div className="flex justify-center">
          <img src={TemplateIcon} alt={props.label} />
        </div>
        <div className="my-2" style={{ fontSize: font10 }}>
          {props.title}
        </div>
        <div style={{ color: blueColor, fontSize: font12 }}>N{props.price}</div>
        <div className="w-1/2 mx-auto">
          <CustomButton
            label="Download"
            textColor="white"
            bgColor={blueColor}
            // onClick={() => storeUserTemplateResponse(props.userResponse)}
            onClick={() => handleTemplateDownload(docId, templateId, email)}
          />
        </div>
      </div>
  );
}

export default UserSavedTemplateItem;
