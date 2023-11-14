import React, { useState } from "react";
import CustomButton from "../commons/Custom/CustomButton";
import { blueColor } from "../constants/colors";
import {
  fontWeight400,
  fontWeight500,
  fontWeight600,
} from "../constants/fonts";

import axiosTemplate from "../utils/axiosTemplate";
import { useNavigate } from "react-router-dom";
import Layout from "../Layout";
import { AiOutlineWarning } from "react-icons/ai";

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [passwordValid, setPasswordValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [registrationErrorMessage, setRegistrationErrorMessage] = useState("");

  const registerUser = async (email, password, confirmPassword) => {
    const userData = {
      email,
      password,
      confirmPassword,
    };
    const data = axiosTemplate(
      `/Users/signup`,
      "POST",
      userData,
      null
    );
    const response = await data
      .then((res) => {
        if (res.status === 200) {
          if (res.data.data) {
            localStorage.setItem(
              "user",
              JSON.stringify({ email: res.data.data.email, id: res.data.data.id })
            );
            localStorage.setItem("token", res.data.data.accessToken);
          }
          return res.data;
        }

        return null;
      })
      .catch((err) => {});

    return response;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateAndSetEmail(email);
    validateAndSetConfirmPassword(confirmPassword);
    validateAndSetPassword(password);
    if (
      Object.keys(errors).length === 0 &&
      passwordValid &&
      emailValid &&
      confirmPasswordValid
    ) {
      setIsRegistering(true);
      registerUser(email, password, confirmPassword)
        .then((response) => {
          setIsRegistering(false);
          if (response?.data) {
            navigate("/dashboard");
            setRegistrationErrorMessage("");
            window.location.reload();
          } else {
            setRegistrationErrorMessage(response?.error);
          }
        })
        .catch((err) => {
          setRegistrationErrorMessage(
            "Error! Could not sign up now. Please try again later."
          );
          setIsRegistering(false);
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

    let containsNumber = /^(?=.*[0-9])/;
    if (!containsNumber.test(pwd)) {
      passwordError = "Password must contain at least one number.";
    }

    let containsLowerCase = /^(?=.*[a-z])/;
    if (!containsLowerCase.test(pwd)) {
      passwordError = "Password must contain at least one lowercase letter.";
    }

    let containsUpperCase = /(?=.*[A-Z])/;
    if (!containsUpperCase.test(pwd)) {
      passwordError = "Password must contain at least one uppercase letter.";
    }

    let contains8Chars = 8;
    if (pwd.length < contains8Chars) {
      passwordError = "Password must contain a minimum of 8 characters.";
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

  const validateAndSetConfirmPassword = (cpassword) => {
    setConfirmPassword(cpassword);
    if (!cpassword || cpassword.length === 0) {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: "Please re-enter password",
      }));
      setConfirmPasswordValid(false);
    } else if (cpassword !== password) {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: "Passwords mismatch",
      }));
      setConfirmPasswordValid(false);
    } else {
      let oldObject = { ...errors };
      delete oldObject.confirmPassword;
      setErrors(oldObject);
      setConfirmPasswordValid(true);
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
                Register to get started or continue
              </p>
            </div>
            {registrationErrorMessage !== "" && (
              <div
                className="bg-red-200 py-1 px-3 mt-3 text-red-600 rounded-md flex items-center gap-2"
                style={{ fontSize: "11px" }}
              >
                <span>
                  <AiOutlineWarning />
                </span>
                <span>{registrationErrorMessage}</span>
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
                  <small className="text-red-300" style={{ fontSize: "10px" }}>
                    {errors.email && errors.email}
                  </small>
                </div>
                <div className="mb-3">
                  <label
                    className="flex flex-col"
                    style={{
                      fontSize: "12px",
                      fontWeight: fontWeight500,
                      color: blueColor,
                    }}
                  >
                    <span>Password </span>
                    <span className="text-gray-500" style={{ fontSize: "9px" }}>
                      (Min: 8 characters. Should contain at least 1 letter, 1
                      uppercase, 1 lowercase)
                    </span>
                  </label>
                  <input
                    type="password"
                    value={password}
                    placeholder="Please enter your password"
                    className="px-4 py-2 rounded-full w-full border-gray-400 border-1 mb-0"
                    style={{ border: "1px solid gray", fontSize: "11px" }}
                    onChange={(e) => validateAndSetPassword(e.target.value)}
                  />
                  <small className="text-red-300" style={{ fontSize: "10px" }}>
                    {errors.password && errors.password}
                  </small>
                </div>
                <div className="mb-3">
                  <label
                    style={{
                      fontSize: "12px",
                      fontWeight: fontWeight500,
                      color: blueColor,
                    }}
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    value={confirmPassword}
                    placeholder="Please re-enter your password"
                    className="px-4 py-2 rounded-full w-full border-gray-400 border-1"
                    style={{ border: "1px solid gray", fontSize: "11px" }}
                    onChange={(e) =>
                      validateAndSetConfirmPassword(e.target.value)
                    }
                  />
                  <small className="text-red-300" style={{ fontSize: "10px" }}>
                    {errors.confirmPassword && errors.confirmPassword}
                  </small>
                </div>
                <CustomButton
                  label={isRegistering ? "Please wait..." : "Register"}
                  type="submit"
                  bgColor={blueColor}
                  textColor={"white"}
                  disabled={
                    !(passwordValid && emailValid && confirmPasswordValid) ||
                    isRegistering
                  }
                />
              </form>
              <p className="flex justify-end mt-2">
                <a href="/login" style={{ color: blueColor, fontSize: "12px" }}>
                  Log in instead
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Register;
