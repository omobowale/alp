import React from "react";
import { Link } from "react-router-dom";
import { blueColor } from "../constants/colors";
import { font10 } from "../constants/fonts";
import TemplateIcon from "../assets/frame_1.png";
import TemplatePreviewImage from "../assets/homedoc.png";

function Start(props) {
  console.log(props);
  return (
    <div className="flex justify-around gap-20">
      <div className="w-3/4">
        <div className="flex justify-between items-center mb-3">
          <div className="flex gap-2 items-center">
            <span>
              <img src={TemplateIcon} alt="frame" />
            </span>
            <span
              style={{
                fontWeight: "600",
                fontSize: "10px",
                color: blueColor,
              }}
            >
              {props.details.name}
            </span>
          </div>
          <div style={{ fontWeight: "500", fontSize: "10px" }}>
            NGN {props.details.price}
          </div>
        </div>
        <div>
          <span
            className=""
            style={{
              fontSize: "10px",
              textAlign: "justify",
              color: "#828282",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </span>
        </div>
        <div className="mt-3">
          <p className="mb-2" style={{ fontWeight: "600", fontSize: "12px" }}>
            How to fill a template
          </p>
          <ul
            className="ml-3"
            style={{
              color: "#828282",
              fontSize: "10px",
              textAlign: "left",
              listStyleType: "disc",
              lineHeight: 2.0,
            }}
          >
            <li>
              <span>Click the `fill template` button</span>
            </li>
            <li>
              <span>Follow prompts to complete the document</span>
            </li>
            <li>
              <span>Review and pay. Document will be sent to your email</span>
            </li>
          </ul>
        </div>
        <div className="mt-3">
          <button
            className="btn rounded-full px-8"
            style={{
              color: "white",
              backgroundColor: blueColor,
              fontSize: font10,
            }}
            onClick={() => props.setShowStart(false)}
          >
            Fill template
          </button>
        </div>
      </div>
      <div className="w-1/2 bg-red-100">
        <img className="w-full" src={TemplatePreviewImage} alt={props.details.name} />
      </div>
    </div>
  );
}

export default Start;
