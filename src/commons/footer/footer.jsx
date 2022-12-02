import React from "react";
import { blueColor } from "../../constants/colors";
import CompanyLogo from "../../assets/alphalex-logo.png";

function Footer() {
  return (
    <div
      className="text-white py-4 mt-10"
      style={{ backgroundColor: blueColor, fontSize: "12px" }}
    >
      <div className="py-6 flex gap-4 justify-around items-center">
        <div>
          <img src={CompanyLogo} alt="Alphalex logo" />
        </div>
        <div className="flex flex-col gap-2">
          <div
            style={{ borderTop: "1px solid grey" }}
            className="py-1 text-center"
          >
            <a
              style={{ color: "white" }}
              href="https://nuvomedia.online/alphalex/index.php/elementor-141/"
            >
              The Hub
            </a>
          </div>
          <div
            style={{ borderTop: "1px solid grey" }}
            className="py-1 text-center"
          >
            <a
              style={{ color: "white" }}
              href="https://nuvomedia.online/alphalex/index.php/about-us/"
            >
              About Us
            </a>
          </div>
          <div
            style={{ borderTop: "1px solid grey" }}
            className="py-1 text-center"
          >
            <a
              style={{ color: "white" }}
              href="https://nuvomedia.online/alphalex/index.php/contact-us/"
            >
              Contact Us
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="font-bold">Reach Us</div>
          <div>
            <p>15 Millitary Street, Onikan, Lagos Nigeria</p>
            <p>Phone: +234 1 700 2570-9</p>
            <p>Email: support@alphalex.com.ng</p>
          </div>
        </div>
      </div>
      <div style={{ fontSize: "11px" }} className="w-10/12 mx-auto">
        Copyright Alphalex {new Date().getFullYear()}
      </div>
    </div>
  );
}

export default Footer;
