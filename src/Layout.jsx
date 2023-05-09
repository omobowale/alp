import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./commons/footer/footer";
import NavBar from "./commons/NavBar/NavBar";
import { Puff } from "react-loader-spinner";

function Layout(props) {
  return (
    <>
      <div style={{ minHeight: "100vh" }}>
        <div>
          <NavBar />
        </div>
        <div className="mt-8"></div>
        {props.showLoader ? (
          <div className="flex justify-center items-center" style={{ height: "60vh" }}>
            <Puff
              height="80"
              width="80"
              radius={1}
              color="#4fa94d"
              ariaLabel="puff-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        ) : (
          <div className="w-4/5 m-auto">{props.children}</div>
        )}
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
