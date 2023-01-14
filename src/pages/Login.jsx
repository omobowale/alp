import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../commons/Custom/CustomButton";
import { blueColor } from "../constants/colors";
import {
  fontWeight400,
  fontWeight500,
  fontWeight600,
} from "../constants/fonts";
import Layout from "../Layout";
import axiosTemplate from "../utils/axiosTemplate";
import { AiOutlineWarning } from "react-icons/ai";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [passwordValid, setPasswordValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [loginErrorMessage, setLoginErrorMessage] = useState("");

  const loginUser = async (email, password) => {
    const userData = {
      email,
      password,
    };
    const data = axiosTemplate(
      `/api/authentication/login`,
      "POST",
      userData,
      null
    );
    const response = await data
      .then((res) => {
        if (res.status === 200) {
          if (res.data.data) {
            console.log(res, "res");
            localStorage.setItem("token", res.data.data.accessToken);
            localStorage.setItem(
              "user",
              JSON.stringify({ email: res.data.data.email })
            );
          }
          return res.data;
        }
        return null;
      })
      .catch((err) => {
        console.log("err", err);
      });

    return response;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateAndSetEmail(email);
    validateAndSetPassword(password);
    if (Object.keys(errors).length === 0 && passwordValid && emailValid) {
      setIsLoggingIn(true);
      loginUser(email, password)
        .then((response) => {
          console.log(response, "login response");
          setIsLoggingIn(false);
          if (response?.data) {
            setLoginErrorMessage("");
            navigate("/dashboard");
            window.location.reload();
          } else {
            console.log("here", response?.data);
            setLoginErrorMessage(response?.message);
          }
        })
        .catch((err) => {
          console.log(err, "This is the LOGIN error");
          setLoginErrorMessage(
            "Error! Could not log in. Please try again later"
          );
          setIsLoggingIn(false);
        });
    } else {
      return;
    }
  };

  const validateAndSetEmail = (email) => {
    setEmail(email);
    if (email && email.length > 0) {
      let oldObject = { ...errors };
      delete oldObject.email;
      setErrors(oldObject);
      setEmailValid(true);
    } else {
      setErrors((prev) => ({ ...prev, email: "Please enter valid email" }));
      setEmailValid(false);
    }
  };

  const validateAndSetPassword = (pwd) => {
    setPassword(pwd);
    let passwordError = "";
    if (pwd === "") {
      passwordError = "Please enter password.";
    }

    if (passwordError.length === 0) {
      let oldObject = { ...errors };
      delete oldObject.password;

      setErrors(oldObject);
      setPasswordValid(true);
    } else {
      setErrors((prev) => ({
        ...prev,
        password: passwordError,
      }));
      setPasswordValid(false);
    }
  };

  return (
    <Layout>
      <div className="flex" style={{ height: "100vh" }}>
        <div className="w-3/4 mx-auto flex items-center justify-center h-3/4">
          <div className="w-1/2">
            <div className="w-2/3 mx-auto">
              <p
                className="text-center"
                style={{ fontSize: "20px", fontWeight: fontWeight600 }}
              >
                Welcome
              </p>
              <p
                className="border-blue-800 border-b-4 text-center mx-auto flex justify-center my-2 pb-2"
                style={{ fontSize: "12px", fontWeight: fontWeight400 }}
              >
                Login to get started or continue
              </p>
            </div>
            {loginErrorMessage !== "" && (
              <div
                className="bg-red-200 py-1 px-3 mt-3 text-red-600 rounded-md flex items-center gap-2"
                style={{ fontSize: "11px" }}
              >
                <span>
                  <AiOutlineWarning />
                </span>
                <span>{loginErrorMessage}</span>
              </div>
            )}
            <div className="mt-3">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label
                    style={{
                      fontSize: "12px",
                      fontWeight: fontWeight500,
                      color: blueColor,
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    placeholder="Please enter email"
                    className="px-4 py-2 rounded-full w-full border-gray-400 border-1"
                    style={{ border: "1px solid gray", fontSize: "11px" }}
                    onChange={(e) => validateAndSetEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label
                    style={{
                      fontSize: "12px",
                      fontWeight: fontWeight500,
                      color: blueColor,
                    }}
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    placeholder="Please enter your password"
                    className="px-4 py-2 rounded-full w-full border-gray-400 border-1"
                    style={{ border: "1px solid gray", fontSize: "11px" }}
                    onChange={(e) => validateAndSetPassword(e.target.value)}
                  />
                </div>
                <CustomButton
                  label={isLoggingIn ? "Please wait..." : "Login"}
                  bgColor={blueColor}
                  textColor={"white"}
                  type="submit"
                  disabled={!(passwordValid && emailValid) || isLoggingIn}
                />
              </form>
              <p className="flex justify-end mt-2">
                <a
                  href="/register"
                  style={{ color: blueColor, fontSize: "12px" }}
                >
                  Sign up instead
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
