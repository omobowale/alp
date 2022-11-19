import { Elements } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import CustomButton from "../commons/Custom/CustomButton";
import CustomQuestionResponse from "../commons/Custom/CustomQuestionResponse";
import { blueColor, greyWhiteColor } from "../constants/colors";
import { font12 } from "../constants/fonts";
import { placeholderMarker } from "../constants/strings";
import {
  getActualDate,
  getDayOfMonth,
  getMonthAndYear,
} from "../helperfunctions/date";
import Layout from "../Layout";
import Checkout from "../pages/Checkout";
import CheckoutPage from "../pages/CheckoutPage";

function Template22POACITI(props) {
  console.log(props);
  //question index
  const [index, setIndex] = useState(0);

  const [showCheckout, setShowCheckout] = useState(false);

  //fields to be filled
  const [date, setDate] = useState(placeholderMarker);
  const [day, setDay] = useState(placeholderMarker);
  const [month, setMonth] = useState(placeholderMarker);
  const [nameOfDonor, setNameOfDonor] = useState(placeholderMarker);
  const [nameOfDonee, setNameOfDonee] = useState(placeholderMarker);
  const [addressOfDonor, setAddressOfDonor] = useState(placeholderMarker);
  const [addressOfDonee, setAddressOfDonee] = useState(placeholderMarker);
  const [amountOfConsideration, setAmountOfConsideration] = useState(placeholderMarker);
  const [item1, setItem1] = useState(placeholderMarker);
  const [item2, setItem2] = useState(placeholderMarker);
  const [item3, setItem3] = useState(placeholderMarker);
  const [item4, setItem4] = useState(placeholderMarker);
  const [item5, setItem5] = useState(placeholderMarker);
  const [inThePresenceOfName, setInThePresenceOfName] =
    useState(placeholderMarker);
  const [inThePresenceOfAddress, setInThePresenceOfAddress] =
    useState(placeholderMarker);
  const [inThePresenceOfOccupation, setInThePresenceOfOccupation] =
    useState(placeholderMarker);
  const [periodOfPower, setPeriodOfPower] = useState(placeholderMarker);

  const [percentage_commission, setPercentageCommission] =
    useState(placeholderMarker);
  const [remit_percentage, setRemitPercentage] = useState(placeholderMarker);
  const [principal_agent_amount, setPrincipalAgentAmount] =
    useState(placeholderMarker);
  const [allowable_discount, setAllowableDiscount] =
    useState(placeholderMarker);
  const [expiration_in_years, setExpirationInYears] =
    useState(placeholderMarker);
  const [termination_timeline, setTerminationTimeline] =
    useState(placeholderMarker);
  const [
    name_of_designated_person_as_principal,
    setNameOfDesignatedPersonAsPrincipal,
  ] = useState(placeholderMarker);
  const [name_of_witness, setNameOfWitness] = useState(placeholderMarker);
  const [address_of_witness, setAddressOfWitness] = useState(placeholderMarker);
  const [occupation_of_witness, setOccupationOfWitness] =
    useState(placeholderMarker);
  const [signature_date, setSignatureDate] = useState(placeholderMarker);
  const [name_of_agent, setNameOfAgent] = useState(placeholderMarker);

  //functions
  const incrementIndex = () => {
    // if (index < questions.length) {
    setIndex(index + 1);
    // }
  };

  const decrementIndex = () => {
    console.log("decrement");
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const questions = [
    {
      type: "date",
      question: "Select the date in which this agreement is made",
      action: setDate,
    },
    {
      type: "input",
      question: "Enter the full name of donor",
      action: setNameOfDonor,
    },
    {
      type: "input",
      question: "Enter the full address of donor",
      action: setAddressOfDonor,
    },
    {
      type: "input",
      question: "Enter the full name of company",
      action: setNameOfDonee,
    },
    {
      type: "input",
      question: "Enter the full address of company",
      action: setAddressOfDonee,
    },

    {
      type: "input",
      question:
        "Enter the things that you want your donee to be able to do <br /> 1. ",
      action: setItem1,
    },
    {
      type: "input",
      question:
        "Enter the things that you want your donee to be able to do <br /> 2. ",
      action: setItem2,
    },
    {
      type: "input",
      question:
        "Enter the things that you want your donee to be able to do <br /> 3. ",
      action: setItem3,
    },
    {
      type: "input",
      question:
        "Enter the things that you want your donee to be able to do <br /> 4. ",
      action: setItem4,
    },
    {
      type: "input",
      question:
        "Enter the things that you want your donee to be able to do <br /> 5. ",
      action: setItem5,
    },
    {
      type: "number",
      question: "Enter the amount of consideration ",
      action: setAmountOfConsideration,
    },
    {
      type: "input",
      question: "Enter the period of power ",
      action: setPeriodOfPower,
    },
    {
      type: "input",
      question: "Enter the name of witness",
      action: setInThePresenceOfName,
    },
    {
      type: "input",
      question: "Enter the address of witness",
      action: setInThePresenceOfAddress,
    },
    {
      type: "input",
      question: "Enter the occupation of witness",
      action: setInThePresenceOfOccupation,
    },

    // {
    //     type: "radio",
    //     question: "Select your gender",
    //     options: ["male", "female"]
    // },

    // {
    //     type: "checkbox",
    //     question: "Select all that applies",
    //     options: ["good", "better", "best"]
    // },
    // {
    //     type: "date-range",
    //     question: "Select dates",
    //     labelOne: "Start Date",
    //     labelTwo: "End Date",
    // }
  ];

  return (
    <Layout>
      <div className="flex justify-between gap-20">
        <div className="w-2/5">
          {index < questions.length &&
            questions.map((question, ind) => (
              <div style={{ display: `${ind == index ? "block" : "none"}` }}>
                <CustomQuestionResponse key={ind} questionResponse={question} />{" "}
              </div>
            ))}

          {/* <CustomQuestionResponse questionResponse={questions[index]}/> */}
          {index < questions.length && (
            <div className="flex justify-between gap-20">
              <div className="w-1/2">
                <CustomButton
                  bgColor={index === 0 ? "transparent" : blueColor}
                  textColor={index === 0 ? "black" : "white"}
                  label="Previous"
                  onClick={decrementIndex}
                />
              </div>
              <div className="w-1/2">
                <CustomButton
                  bgColor={
                    index === questions.length - 1 ? "transparent" : blueColor
                  }
                  textColor={index === questions.length - 1 ? "black" : "white"}
                  label="Next"
                  onClick={incrementIndex}
                />
              </div>
            </div>
          )}
          <div
            style={{
              display: `${index === questions.length ? "block" : "none"}`,
            }}
          >
            <CheckoutPage
              name={props.name}
              onBackButtonClicked={decrementIndex}
            />
          </div>
        </div>

        <div className="w-3/5">
          <div className="flex justify-between mb-3">
            <div className="flex gap-2 items-center">
              <span>
                <img src="assets/frame_1.png" alt="frame" />
              </span>
              <span
                style={{
                  fontWeight: "600",
                  fontSize: "13px",
                  color: blueColor,
                }}
              >
                {props.name}
              </span>
            </div>
          </div>
          <div className="" style={{ height: "70vh", overflow: "scroll" }}>
            <div>
              <meta
                httpEquiv="content-type"
                content="text/html; charset=utf-8"
              />
              <title />
              <meta name="generator" content="LibreOffice 7.3.6.2 (Linux)" />
              <meta name="author" content="Chinwe Uchenna" />
              <meta name="created" content="2021-11-18T08:48:00" />
              <meta name="changedby" content="Chinwe Uchenna" />
              <meta name="changed" content="2021-11-18T08:48:00" />
              <meta name="AppVersion" content={16.0} />
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html:
                    "\n\t\t@page { size: 8.5in 11in; margin: 1in }\n\t\tp { line-height: 115%; text-align: left; orphans: 2; widows: 2; margin-bottom: 0.1in; direction: ltr; background: transparent }\n\t",
                }}
              />
              <p
                align="justify"
                style={{ lineHeight: "108%", marginBottom: "0.11in" }}
              >
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    <b>BY THIS POWER OF ATTORNEY </b>
                  </font>
                </font>
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    made this{" "}
                    {date !== "" && date !== placeholderMarker ? (
                      <u>
                        {"    " + getDayOfMonth(getActualDate(date)) + "    "}
                      </u>
                    ) : (
                      <>
                        {"    " + getDayOfMonth(getActualDate(date)) + "    "}
                      </>
                    )}{" "}
                    day of{" "}
                    {date !== "" && date !== placeholderMarker ? (
                      <u>
                        {"    " + getMonthAndYear(getActualDate(date)) + "    "}
                      </u>
                    ) : (
                      <>
                        {"    " + getMonthAndYear(getActualDate(date)) + "    "}
                      </>
                    )}
                    , I,
                  </font>
                </font>
                <font color="">
                  <font face="Garamond, serif">
                    <font size={3} style={{ fontSize: "12pt" }}>
                      {nameOfDonor !== "" &&
                        nameOfDonor !== placeholderMarker ? (
                        <u>{"    " + nameOfDonor + "    "}</u>
                      ) : (
                        <>{"    " + nameOfDonor + "    "}</>
                      )}
                    </font>
                  </font>
                </font>
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    {" "}
                    of
                  </font>
                </font>
                <font color="">
                  <font face="Garamond, serif">
                    <font size={3} style={{ fontSize: "12pt" }}>
                      {addressOfDonor !== "" &&
                        addressOfDonor !== placeholderMarker ? (
                        <u>{"    " + addressOfDonor + "    "}</u>
                      ) : (
                        <>{"    " + addressOfDonor + "    "}</>
                      )}
                    </font>
                  </font>
                </font>
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    (
                  </font>
                </font>
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    <b>DONOR</b>
                  </font>
                </font>
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    ) hereby{" "}
                  </font>
                </font>
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    <b>APPOINT</b>
                  </font>
                </font>
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    {nameOfDonee !== "" && nameOfDonee !== placeholderMarker ? (
                      <u>{"    " + nameOfDonee + "    "}</u>
                    ) : (
                      <>{"    " + nameOfDonee + "    "}</>
                    )}
                  </font>
                </font>

                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    , of
                  </font>
                </font>
                <font color="">
                  <font face="Garamond, serif">
                    <font size={3} style={{ fontSize: "12pt" }}>
                      {addressOfDonee !== "" &&
                        addressOfDonee !== placeholderMarker ? (
                        <u>{"    " + addressOfDonee + "    "}</u>
                      ) : (
                        <>{"    " + addressOfDonee + "    "}</>
                      )}
                    </font>
                  </font>
                </font>
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    (
                  </font>
                </font>
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    <b>DONEE</b>
                  </font>
                </font>
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    ) to be my lawful attorney and on my behalf and in my name
                    to do all and any of the following:
                  </font>
                </font>
              </p>
              <p
                align="justify"
                style={{ lineHeight: "108%", marginBottom: "0.11in" }}
              >
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    1.{" "}
                    {item1 !== "" && item1 !== placeholderMarker ? (
                      <u>{"    " + item1 + "    "}</u>
                    ) : (
                      <>{"    " + item1 + "    "}</>
                    )}
                    .
                  </font>
                </font>
              </p>
              <p
                align="justify"
                style={{ lineHeight: "108%", marginBottom: "0.11in" }}
              >
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    2.{" "}
                    {item2 !== "" && item2 !== placeholderMarker ? (
                      <u>{"    " + item2 + "    "}</u>
                    ) : (
                      <>{"    " + item2 + "    "}</>
                    )}
                    .
                  </font>
                </font>
              </p>
              <p
                align="justify"
                style={{ lineHeight: "108%", marginBottom: "0.11in" }}
              >
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    3.{" "}
                    {item3 !== "" && item3 !== placeholderMarker ? (
                      <u>{"    " + item3 + "    "}</u>
                    ) : (
                      <>{"    " + item3 + "    "}</>
                    )}
                    .
                  </font>
                </font>
              </p>
              <p
                align="justify"
                style={{ lineHeight: "108%", marginBottom: "0.11in" }}
              >
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    4.{" "}
                    {item4 !== "" && item4 !== placeholderMarker ? (
                      <u>{"    " + item4 + "    "}</u>
                    ) : (
                      <>{"    " + item4 + "    "}</>
                    )}
                    .
                  </font>
                </font>
              </p>
              <p
                align="justify"
                style={{ lineHeight: "108%", marginBottom: "0.11in" }}
              >
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    5.{" "}
                    {item5 !== "" && item5 !== placeholderMarker ? (
                      <u>{"    " + item5 + "    "}</u>
                    ) : (
                      <>{"    " + item5 + "    "}</>
                    )}
                    .
                  </font>
                </font>
              </p>
              <p
                align="justify"
                style={{ lineHeight: "108%", marginBottom: "0.11in" }}
              >
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    <b>AND </b>
                  </font>
                </font>
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    to do all and any other things necessary and incidental for
                    the carrying out of the powers created above
                  </font>
                </font>
              </p>
              <p
                align="justify"
                style={{ lineHeight: "108%", marginBottom: "0.11in" }}
              >
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    <b>IN CONSIDERATION </b>
                  </font>
                </font>
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    of the sum of
                  </font>
                </font>
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>

                    {amountOfConsideration !== "" && amountOfConsideration !== placeholderMarker ? (
                      <u>{"    " + amountOfConsideration + "    "}</u>
                    ) : (
                      <>{"    " + amountOfConsideration + "    "}</>
                    )}


                  </font>
                </font>

                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    paid by the Donee to the
                    Donor (the receipt of which the Donor acknowledges),
                  </font>
                </font>
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    <b> IT IS DECLARED THAT </b>
                  </font>
                </font>
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    this Power of Attorney shall be and remain
                  </font>
                </font>
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    <b> IRREVOCABLE.</b>
                  </font>
                </font>

              </p>
              <p
                align="justify"
                style={{ lineHeight: "108%", marginBottom: "0.11in" }}
              >
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    <b>IN WITNESS OF WHICH </b>
                  </font>
                </font>
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    I, the Donor, have executed this Power of Attorney in the
                    manner below the day and year first above written
                  </font>
                </font>
              </p>
              <p
                align="justify"
                style={{ lineHeight: "108%", marginBottom: "0.11in" }}
              >
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    <b>THE COMMON SEAL OF </b>
                  </font>
                </font>
                <font color="">
                  <font face="Garamond, serif">
                    <font size={3} style={{ fontSize: "12pt" }}>
                      {nameOfDonor !== "" &&
                        nameOfDonor !== placeholderMarker ? (
                        <u>{"    " + nameOfDonor + "    "}</u>
                      ) : (
                        <>{"    " + nameOfDonor + "    "}</>
                      )}
                    </font>
                  </font>
                </font>
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    <b>
                      WAS AFFIXED TO THIS DEED AND THE DEED WAS DULY DELIVERED
                      IN THE PRESENCE OF:
                    </b>
                  </font>
                </font>
              </p>
              <p
                align="justify"
                style={{ lineHeight: "108%", marginBottom: "0.11in" }}
              >
                <br />
                <br />
              </p>
              <div className="flex justify-between">
                <p
                  align="justify"
                  style={{ lineHeight: "108%", marginBottom: "0.11in" }}
                >
                  <font face="Garamond, serif">
                    <font size={3} style={{ fontSize: "12pt" }}>
                      ------------------------
                    </font>
                  </font>
                </p>
                <p
                  align="justify"
                  style={{ lineHeight: "108%", marginBottom: "0.11in" }}
                >
                  <font face="Garamond, serif">
                    <font size={3} style={{ fontSize: "12pt" }}>
                      -------------------------------
                    </font>
                  </font>
                </p>
              </div>
              <div className="flex justify-between">
                <p
                  align="justify"
                  style={{ lineHeight: "108%", marginBottom: "0.11in" }}
                >
                  <font face="Garamond, serif">
                    <font size={3} style={{ fontSize: "12pt" }}>
                      DIRECTOR
                    </font>
                  </font>
                </p>
                <p
                  align="justify"
                  style={{ lineHeight: "108%", marginBottom: "0.11in" }}
                >
                  <font face="Garamond, serif">
                    <font size={3} style={{ fontSize: "12pt" }}>
                      DIRECTOR/SECRETARY
                    </font>
                  </font>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Template22POACITI;
