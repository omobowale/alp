import React, { useState } from "react";
import "./NavBar.css";
import CompanyLogo from "../../assets/alphalex-logo.png";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

function NavBar() {
  const sessionUser = localStorage.getItem("user") ?? null;
  const user = JSON.parse(sessionUser);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const logUserOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className="flex lg:justify-start md:justify-between items-center lg:pl-28 pl-12 justify-around mb-5">
      <div
        className="nav flex lg:gap-28 gap-10 py-3 justify-between lg:w-auto md:w-1/2 items-center"
        style={{ fontWeight: "500" }}
      >
        <div>
          <img
            style={{ width: "3.5em", height: "2em" }}
            src={CompanyLogo}
            alt="Alphalex logo"
          />
        </div>
        <div className="flex ">
          <div
            className={`lg:flex lg:flex-row flex-col lg:gap-5 md:gap-2 gap-1 hidden`}
          >
            {" "}
            <a href="https://nuvomedia.online/alphalex/index.php">
              Alphalex Home
            </a>
            <a href="https://nuvomedia.online/alphalex/index.php/">
              Start a business
            </a>
            <Link to="/templates">Templates</Link>
            <a href="https://nuvomedia.online/alphalex/index.php/elementor-141/">
              The Hub
            </a>
            <a href="https://nuvomedia.online/alphalex/index.php/about-us/">
              About Us
            </a>
            <a href="https://nuvomedia.online/alphalex/index.php/contact-us/">
              Contact Us
            </a>
          </div>
          <AiOutlineMenu
            className="cursor-pointer lg:hidden block"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          />
          {
            <div className="relative">
              <div
                className={`flex flex-col lg:hidden shadow-t-sm flex-col lg:gap-5 md:gap-2 gap-1`}
                style={{
                  position: "absolute",
                  width: "15em",
                  backgroundColor: "whitesmoke",
                }}
              >
                {showMobileMenu && (
                  <>
                    <div className="p-2 hover:bg-white border-b-2">
                      <a
                        onClick={() => setShowMobileMenu(false)}
                        href="https://nuvomedia.online/alphalex/index.php"
                      >
                        Alphalex Home
                      </a>
                    </div>
                    <div className="p-2 hover:bg-white border-b-2">
                      <a
                        onClick={() => setShowMobileMenu(false)}
                        href="https://nuvomedia.online/alphalex/index.php/"
                      >
                        Start a business
                      </a>
                    </div>
                    <div className="p-2 hover:bg-white border-b-2">
                      <Link
                        onClick={() => setShowMobileMenu(false)}
                        to="/templates"
                      >
                        Templates
                      </Link>
                    </div>
                    <div className="p-2 hover:bg-white border-b-2">
                      <a
                        onClick={() => setShowMobileMenu(false)}
                        href="https://nuvomedia.online/alphalex/index.php/elementor-141/"
                      >
                        The Hub
                      </a>
                    </div>
                    <div className="p-2 hover:bg-white border-b-2">
                      <a
                        onClick={() => setShowMobileMenu(false)}
                        href="https://nuvomedia.online/alphalex/index.php/about-us/"
                      >
                        About Us
                      </a>
                    </div>
                    <div className="p-2 hover:bg-white border-b-2">
                      <a
                        onClick={() => setShowMobileMenu(false)}
                        href="https://nuvomedia.online/alphalex/index.php/contact-us/"
                      >
                        Contact Us
                      </a>
                    </div>
                  </>
                )}
              </div>
            </div>
          }
        </div>
      </div>
      {user && (
        <div className="flex lg:gap-3 gap-2 sm:w-auto w-1/2 items-center ml-3">
          <span className="md:block hidden" style={{ fontSize: "10px" }}>
            {user?.email}
          </span>
          <span
            onClick={() => logUserOut()}
            className="cursor-pointer px-2 py-1 bg-red-100 rounded-md"
            style={{ fontSize: "10px", fontWeight: "600" }}
          >
            Logout
          </span>
        </div>
      )}
    </div>
  );
}

export default NavBar;
