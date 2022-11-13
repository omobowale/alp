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

function TemplateFour(props) {
  console.log(props);
  //question index
  const [index, setIndex] = useState(0);

  const [showCheckout, setShowCheckout] = useState(false);

  //fields to be filled
  const [date, setDate] = useState(placeholderMarker);
  const [day, setDay] = useState(placeholderMarker);
  const [month, setMonth] = useState(placeholderMarker);
  const [nameOfPrincipalIndividual, setNameOfPrincipalIndividual] = useState(placeholderMarker);
  const [nameOfAgentIndividual, setNameOfAgentIndividual] = useState(placeholderMarker);
  const [addressOfAgentIndividual, setAddressOfAgentIndividual] =
    useState(placeholderMarker);
  const [addressOfPrincipalIndividual, setAddressOfPrincipalIndividual] =
    useState(placeholderMarker);
  const [nameOfCompany, setNameOfCompany] = useState(placeholderMarker);
  const [addressOfCompany, setAddressOfCompany] = useState(placeholderMarker);
  const [lengthOfAgency, setLengthOfAgency] = useState(placeholderMarker);

  const [inThePresenceOfName, setInThePresenceOfName] =
    useState(placeholderMarker);
  const [inThePresenceOfAddress, setInThePresenceOfAddress] =
    useState(placeholderMarker);
  const [inThePresenceOfOccupation, setInThePresenceOfOccupation] =
    useState(placeholderMarker);
  const [periodOfPower, setPeriodOfPower] = useState(placeholderMarker);

  const [percentageCommision, setPercentageCommission] =
    useState(placeholderMarker);
  const [remitPercentage, setRemitPercentage] = useState(placeholderMarker);
  const [principalAgentAmount, setPrincipalAgentAmount] =
    useState(placeholderMarker);
  const [allowableDiscount, setAllowableDiscount] = useState(placeholderMarker);
  const [expirationInYears, setExpirationInYears] = useState(placeholderMarker);
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
      question: "Enter the full name of the principal",
      action: setNameOfPrincipalIndividual,
    },
    {
      type: "input",
      question: "Enter the full address of principal",
      action: setAddressOfPrincipalIndividual,
    },
    {
      type: "input",
      question: "Enter the full name of agent",
      action: setNameOfAgentIndividual,
    },
    {
      type: "input",
      question: "Enter the full address of agent",
      action: setAddressOfAgentIndividual,
    },

    {
      type: "number",
      question: "For how long will this agency be (in years)?",
      action: setLengthOfAgency,
    },
    {
      type: "number",
      question: "What is the percentage commission?",
      action: setPercentageCommission,
    },
    {
      type: "number",
      question: "What is the percentage less of commission shall agent remit?",
      action: setRemitPercentage,
    },
    {
      type: "number",
      question: "How much shall the principal keep with the agent?",
      action: setPrincipalAgentAmount,
    },
    {
      type: "number",
      question: "How many percent discount shall the agent allow?",
      action: setAllowableDiscount,
    },
    {
      type: "number",
      question: "How long, in years, will the expiration of this agreement be?",
      action: setExpirationInYears,
    },
    {
      type: "number",
      question:
        "Within how many years after termination shall the agent not be allowed to trade with other principals?",
      action: setTerminationTimeline,
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
          <div
            className="template-container"
            style={{ height: "70vh", overflow: "scroll" }}
          >
            <div>
              <meta
                httpEquiv="content-type"
                content="text/html; charset=utf-8"
              />
              <title />
              <meta name="generator" content="LibreOffice 7.3.6.2 (Linux)" />
              <meta name="author" content="acer" />
              <meta name="created" content="2021-11-18T11:20:00" />
              <meta name="changedby" content="Chinwe Uchenna" />
              <meta name="changed" content="2021-11-18T11:32:00" />
              <meta name="AppVersion" content={16.0} />
              <meta
                name="ContentTypeId"
                content="0x0101000905571A7A6AED4C838CE7C6AA62DBF5"
              />
              <meta
                name="_dlc_DocIdItemGuid"
                content="cab37519-7da0-468a-ad11-f83a9570beaa"
              />
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html:
                    "\n\t\t@page { size: 8.5in 11in; margin-left: 1in; margin-right: 1in; margin-top: 0.44in; margin-bottom: 0.75in }\n\t\tp { line-height: 115%; text-align: left; orphans: 2; widows: 2; margin-bottom: 0.1in; direction: ltr; background: transparent }\n\t",
                }}
              />
              <p
                align="center"
                style={{ lineHeight: "200%", marginBottom: "0in" }}
              ></p>
              <p style={{ lineHeight: "100%", marginBottom: "0in" }}>
                <br />
              </p>
              <p
                align="justify"
                style={{ lineHeight: "108%", marginBottom: "0.11in" }}
              >
                <font face="Garamond, serif">
                  <font
                    face="Garamond, serif"
                    size={3}
                    style={{ fontSize: "12pt" }}
                  >
                    <span lang="en-GB" face="Garamond, serif">
                      <b>THIS AGENCY AGREEMENT</b>
                    </span>
                  </font>
                </font>
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    <span lang="en-GB">
                      is made this{" "}
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
                          {"    " +
                            getMonthAndYear(getActualDate(date)) +
                            "    "}
                        </u>
                      ) : (
                        <>
                          {"    " +
                            getMonthAndYear(getActualDate(date)) +
                            "    "}
                        </>
                      )}{" "}
                    </span>
                  </font>
                </font>
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    <span lang="en-GB">
                      <b>BETWEEN</b>
                    </span>
                  </font>
                </font>
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}></font>
                </font>
                <font color="">
                  <font face="Garamond, serif">
                    <font size={3} style={{ fontSize: "12pt" }}>
                      {nameOfPrincipalIndividual !== "" &&
                      nameOfPrincipalIndividual !== placeholderMarker ? (
                        <u>{"    " + nameOfPrincipalIndividual + "    "}</u>
                      ) : (
                        <>{"    " + nameOfPrincipalIndividual + "    "}</>
                      )}
                    </font>
                  </font>
                </font>
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    of 
                  </font>
                </font>
                <font color="">
                  <font face="Garamond, serif">
                    <font size={3} style={{ fontSize: "12pt" }}>
                      {addressOfPrincipalIndividual !== "" &&
                      addressOfPrincipalIndividual !== placeholderMarker ? (
                        <u>{"    " + addressOfPrincipalIndividual + "    "}</u>
                      ) : (
                        <>{"    " + addressOfPrincipalIndividual + "    "}</>
                      )}
                    </font>
                  </font>
                </font>
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}></font>
                </font>
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    <span lang="en-GB">(hereinafter referred to as </span>
                  </font>
                </font>
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    <span lang="en-GB">
                      <b>“the Principal” </b>
                    </span>
                  </font>
                </font>
                
              </p>
              <p
                align="justify"
                style={{ lineHeight: "108%", marginBottom: "0.11in" }}
              >
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    <span lang="en-GB">
                      <b>AND</b>
                    </span>
                  </font>
                </font>
              </p>
              <p
                align="justify"
                style={{ lineHeight: "108%", marginBottom: "0.11in" }}
              >
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}></font>
                </font>
                <font color="">
                  <font face="Garamond, serif">
                    <font size={3} style={{ fontSize: "12pt" }}>
                      {nameOfAgentIndividual !== "" &&
                      nameOfAgentIndividual !== placeholderMarker ? (
                        <u>{"    " + nameOfAgentIndividual + "    "}</u>
                      ) : (
                        <>{"    " + nameOfAgentIndividual + "    "}</>
                      )}
                    </font>
                  </font>
                </font>
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    of
                  </font>
                </font>
                <font color="">
                  <font face="Garamond, serif">
                    <font size={3} style={{ fontSize: "12pt" }}>
                      {addressOfAgentIndividual !== "" &&
                      addressOfAgentIndividual !== placeholderMarker ? (
                        <u>{"    " + addressOfAgentIndividual + "    "}</u>
                      ) : (
                        <>{"    " + addressOfAgentIndividual + "    "}</>
                      )}
                    </font>
                  </font>
                </font>
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}></font>
                </font>
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    <span lang="en-GB">(hereinafter referred to as </span>
                  </font>
                </font>
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    <span lang="en-GB">
                      <b>“the Agent” </b>
                    </span>
                  </font>
                </font>
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    <span lang="en-GB"></span>
                  </font>
                </font>
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    of the other part;
                  </font>
                </font>
              </p>
              <p
                align="justify"
                style={{ lineHeight: "108%", marginBottom: "0.11in" }}
              >
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    <span lang="en-GB">(Each referred to as a </span>
                  </font>
                </font>
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    <span lang="en-GB">
                      <b>“Party”,</b>
                    </span>
                  </font>
                </font>
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    <span lang="en-GB"> and collectively as the </span>
                  </font>
                </font>
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    <span lang="en-GB">
                      <b>“Parties”)</b>
                    </span>
                  </font>
                </font>
              </p>
              <p
                align="justify"
                style={{ lineHeight: "100%", marginBottom: "0in" }}
              >
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    <b>WHEREBY IT IS AGREED BETWEEN THE PARTIES AS FOLLOWS:</b>
                  </font>
                </font>
              </p>
              <p
                align="justify"
                style={{ lineHeight: "100%", marginBottom: "0in" }}
              >
                <br />
              </p>
              <p
                align="justify"
                style={{ lineHeight: "100%", marginBottom: "0in" }}
              >
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    <b>1.</b>
                  </font>
                </font>
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    That the agent is hereby appointed as the sole agent of the
                    principal for the purpose of making sales of the
                    products/goods of the principal for a term of{" "}
                    {lengthOfAgency !== "" &&
                    lengthOfAgency !== placeholderMarker ? (
                      <u>{"    " + lengthOfAgency + "    "}</u>
                    ) : (
                      <>{"    " + lengthOfAgency + "    "}</>
                    )}{" "}
                    years commencing from the date hereof on the terms and
                    conditions set forth hereunder.
                  </font>
                </font>
              </p>
              <p style={{ marginBottom: "0.14in" }}></p>
              <p
                align="justify"
                style={{ lineHeight: "100%", marginBottom: "0in" }}
              >
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    <b>2.</b>
                  </font>
                </font>
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    That the agent shall not, while selling the products/goods
                    of the principal make any representation in the trade or
                    give any warranty other than those contained in the
                    principal’s printed price list.
                  </font>
                </font>
              </p>
              <p
                align="justify"
                style={{ lineHeight: "100%", marginBottom: "0in" }}
              >
                <br />
              </p>
              <p
                align="justify"
                style={{ lineHeight: "100%", marginBottom: "0in" }}
              >
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    <b>3.</b>
                  </font>
                </font>
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    That the agent shall be allowed to deduct and retain as his
                    agency commission with himself
                    {percentageCommision !== "" &&
                    percentageCommision !== placeholderMarker ? (
                      <u>{"    " + percentageCommision + "    "}</u>
                    ) : (
                      <>{"    " + percentageCommision + "    "}</>
                    )}
                    per cent of the list price of all products/goods sold on
                    behalf of the principal. The agent shall keep a record of
                    all sales and shall regularly remit to the principal on each
                    Saturday all sums received by the agent in respect of such
                    sales less{" "}
                    {remitPercentage !== "" &&
                    remitPercentage !== placeholderMarker ? (
                      <u>{"    " + remitPercentage + "    "}</u>
                    ) : (
                      <>{"    " + remitPercentage + "    "}</>
                    )}{" "}
                    per cent his agency commission. All sales shall be made for
                    cash against delivery of goods unless the principal’s
                    consent in writing to give credit to any particular
                    purchaser be in any case first obtained and in the case of
                    such credit sales the principal may direct for such increase
                    in the price of his products/goods over and above the
                    current list price of the principal.
                  </font>
                </font>
              </p>
              <p
                align="justify"
                style={{ lineHeight: "100%", marginBottom: "0in" }}
              >
                <br />
              </p>
              <p
                align="justify"
                style={{ lineHeight: "100%", marginBottom: "0in" }}
              >
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    <b>4.</b>
                  </font>
                </font>
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    That the agent shall not make purchases on behalf of or in
                    any manner pledge the credit of the principal without the
                    consent in writing of the principal.
                  </font>
                </font>
              </p>
              <p
                align="justify"
                style={{ lineHeight: "100%", marginBottom: "0in" }}
              >
                <br />
              </p>
              <p
                align="justify"
                style={{ lineHeight: "100%", marginBottom: "0in" }}
              >
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    <b>5.</b>
                  </font>
                </font>
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    That the agent shall, at the expense of the principal, take
                    on rent and occupy for the purpose of the agency, suitable
                    premises with prior approval of the principal and shall keep
                    insured for full value against all available risks, all the
                    goods entrusted to his custody by the principal under this
                    agreement and on request, shall produce to the principal,
                    receipts, for the rent, rates and taxes of the said premises
                    and for the premiums on insurance policies showing that the
                    same have been paid on or about their respective due dates.
                    That the agent shall bear all expenses relating to or
                    incidental to the said agency.
                  </font>
                </font>
              </p>
              <p
                align="justify"
                style={{ lineHeight: "100%", marginBottom: "0in" }}
              >
                <br />
              </p>
              <p
                align="justify"
                style={{ lineHeight: "100%", marginBottom: "0in" }}
              >
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    <b>6.</b>
                  </font>
                </font>
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    That the agent shall, in all his commercial dealings and on
                    documents and on the name-plate or letter-head indicating
                    his place of business, describe himself as selling agent for
                    the principal.
                  </font>
                </font>
              </p>
              <p
                align="justify"
                style={{ lineHeight: "100%", marginBottom: "0in" }}
              >
                <br />
              </p>
              <p
                align="justify"
                style={{ lineHeight: "100%", marginBottom: "0in" }}
              >
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    <b>7.</b>
                  </font>
                </font>
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    That the principal shall keep with the agent a stock of his
                    goods free of all expenses of delivery to the value of
                    {principalAgentAmount !== "" &&
                    principalAgentAmount !== placeholderMarker ? (
                      <u>{"    " + principalAgentAmount + "    "}</u>
                    ) : (
                      <>{"    " + principalAgentAmount + "    "}</>
                    )}{" "}
                    according to the principal’s current price list and the
                    principal further undertakes to replenish such stock on the
                    close of each month so as to keep it at the agreed value.
                    Provided always that the agent shall have no right of action
                    against the principal for delay resulting from shortage of
                    stock, delays in transit, accidents, strikes or other
                    unavoidable occurrences in replenishing such stock. The
                    principal shall always have the right, without any prior
                    notice, to cause a stock checking of the said products/goods
                    and on any shortage or deficiency found on such stock-taking
                    the agent shall on demand pay to the principal the list
                    price of such shortage or deficiency less the deduction by
                    way of commission or rebate receivable by the agent. The
                    agent shall not alter, remove, or tamper with the marks or
                    numbers on the products/goods so entrusted into his custody.
                  </font>
                </font>
              </p>
              <p
                align="justify"
                style={{ lineHeight: "100%", marginBottom: "0in" }}
              >
                <br />
              </p>
              <p
                align="justify"
                style={{ lineHeight: "100%", marginBottom: "0in" }}
              >
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    <b>8.</b>
                  </font>
                </font>
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    That the agent shall not sell the goods of the principal to
                    any purchaser except at current price list of the principal
                    conveyed by him from time to time. The agent may, however,
                    allow a discount or rebate of{" "}
                    {allowableDiscount !== "" &&
                    allowableDiscount !== placeholderMarker ? (
                      <u>{"    " + allowableDiscount + "    "}</u>
                    ) : (
                      <>{"    " + allowableDiscount + "    "}</>
                    )}
                    per cent.
                  </font>
                </font>
              </p>
              <p
                align="justify"
                style={{ lineHeight: "100%", marginBottom: "0in" }}
              >
                <br />
              </p>
              <p
                align="justify"
                style={{ lineHeight: "100%", marginBottom: "0in" }}
              >
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    <b>9.</b>
                  </font>
                </font>
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    That in the event of any dispute arising between the agent
                    and a purchaser of the products/goods of the principal, the
                    agent shall immediately inform the principal of the same and
                    shall not without the principal’s approval or consent in
                    writing take any legal proceedings in respect of or
                    compromise such dispute or grant a release to any purchaser
                    of the products/goods of the principal.
                  </font>
                </font>
              </p>
              <p
                align="justify"
                style={{ lineHeight: "100%", marginBottom: "0in" }}
              >
                <br />
              </p>
              <p
                align="justify"
                style={{ lineHeight: "100%", marginBottom: "0in" }}
              >
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    <b>10.</b>
                  </font>
                </font>
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    That either party may terminate this agreement at his option
                    at any time after the expiration of{" "}
                    {expirationInYears !== "" &&
                    expirationInYears !== placeholderMarker ? (
                      <u>{"    " + expirationInYears + "    "}</u>
                    ) : (
                      <>{"    " + expirationInYears + "    "}</>
                    )}{" "}
                    years by giving the other one month’s notice in writing.
                  </font>
                </font>
              </p>
              <p
                align="justify"
                style={{ lineHeight: "100%", marginBottom: "0in" }}
              >
                <br />
              </p>
              <p
                align="justify"
                style={{ lineHeight: "100%", marginBottom: "0in" }}
              >
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    <b>11.</b>
                  </font>
                </font>
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    That the benefits under this agreement shall not be
                    assignable to any other person.
                  </font>
                </font>
              </p>
              <p
                align="justify"
                style={{ lineHeight: "100%", marginBottom: "0in" }}
              >
                <br />
              </p>
              <p
                align="justify"
                style={{ lineHeight: "100%", marginBottom: "0in" }}
              >
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    <b>12.</b>
                  </font>
                </font>
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    That the agent shall always, during the existence of this
                    agreement, devote his whole business time and energy for
                    pushing the sale of the products/goods of the principal and
                    shall in all such dealings act honestly and faithfully to
                    the principal and shall carry out orders and instructions
                    and shall not engage or be interested either directly or
                    indirectly as agent or servant in any other business or
                    trade without the prior consent in writing of the principal.
                  </font>
                </font>
              </p>
              <p
                align="justify"
                style={{ lineHeight: "100%", marginBottom: "0in" }}
              >
                <br />
              </p>
              <p
                align="justify"
                style={{ lineHeight: "100%", marginBottom: "0in" }}
              >
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    <b>13.</b>
                  </font>
                </font>
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    That on the termination of this agreement for any reason
                    whatsoever, the agent shall not for the period of one year
                    solicit trade orders from the persons who had been
                    purchasers of the products/goods of the principal any time
                    within.................. years immediately preceding the
                    date of such termination and the agent shall not for a
                    period of one year engage or be interested as agent or
                    servant in any business, firm or company manufacturing,
                    selling or dealing in products/goods similar to those of the
                    principal.
                  </font>
                </font>
              </p>
              <p
                align="justify"
                style={{ lineHeight: "100%", marginBottom: "0in" }}
              >
                <br />
              </p>
              <p
                align="justify"
                style={{ lineHeight: "100%", marginBottom: "0in" }}
              >
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    <b>14.</b>
                  </font>
                </font>
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    That all products/goods shall be sold by the agent for
                    delivery at agent’s place of business but the agent shall,
                    at his own expense, have the right to deliver products/goods
                    to purchasers at their places of business.
                  </font>
                </font>
              </p>
              <p
                align="justify"
                style={{ lineHeight: "100%", marginBottom: "0in" }}
              >
                <br />
              </p>
              <p
                align="justify"
                style={{ lineHeight: "100%", marginBottom: "0in" }}
              >
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    <b>15.</b>
                  </font>
                </font>
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    That without prejudice to any other remedy he may have
                    against the agent for any breach or non-performance of any
                    part of this agreement, the principal shall have the right
                    summarily to terminate this agreement:
                  </font>
                </font>
              </p>
              <p
                align="justify"
                style={{ lineHeight: "100%", marginBottom: "0in" }}
              >
                <br />
              </p>
              <p
                align="justify"
                style={{ lineHeight: "100%", marginBottom: "0in" }}
              >
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    (i) on the agent being found guilty of a breach of its
                    provisions or being guilty of{" "}
                  </font>
                </font>
              </p>
              <p
                align="justify"
                style={{ lineHeight: "100%", marginBottom: "0in" }}
              >
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    misconduct or negligence of his duties; or
                  </font>
                </font>
              </p>
              <p
                align="justify"
                style={{ lineHeight: "100%", marginBottom: "0in" }}
              >
                <br />
              </p>
              <p
                align="justify"
                style={{ lineHeight: "100%", marginBottom: "0in" }}
              >
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    (ii) on the agent absenting himself from his business duties
                    entrusted to him under{" "}
                  </font>
                </font>
              </p>
              <p
                align="justify"
                style={{ lineHeight: "100%", marginBottom: "0in" }}
              >
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    this agreement for......................................
                    days without the principal’s prior{" "}
                  </font>
                </font>
              </p>
              <p
                align="justify"
                style={{ lineHeight: "100%", marginBottom: "0in" }}
              >
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    permission in writing; or
                  </font>
                </font>
              </p>
              <p
                align="justify"
                style={{ lineHeight: "100%", marginBottom: "0in" }}
              >
                <br />
              </p>
              <p
                align="justify"
                style={{ lineHeight: "100%", marginBottom: "0in" }}
              >
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    (iii) on the agent committing an act of bankruptcy.
                  </font>
                </font>
              </p>
              <p
                align="justify"
                style={{ lineHeight: "100%", marginBottom: "0in" }}
              >
                <br />
              </p>
              <p align="justify" style={{ marginBottom: "0.14in" }}>
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    <b>16.</b>
                  </font>
                </font>
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    That in the event of any dispute arising out of or in
                    relation to or touching upon the agreement, the same shall
                    be decided by arbitration in accordance with{" "}
                  </font>
                </font>
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    the Arbitration and Conciliation Act, Chapter A18, Laws of
                    the Federation of Nigeria, 2004 (or any amendment thereto)
                    and the Arbitration Rules connected thereto,{" "}
                  </font>
                </font>
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    by the Arbitrator appointed with mutual consent.
                  </font>
                </font>
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}></font>
                </font>
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    The award of the Arbitrator shall be final, conclusive, and
                    binding upon the Parties.
                  </font>
                </font>
              </p>
              <p
                align="justify"
                style={{ lineHeight: "100%", marginBottom: "0in" }}
              >
                <br />
              </p>
              <p
                align="justify"
                style={{ lineHeight: "100%", marginBottom: "0in" }}
              >
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    <b>17.</b>
                  </font>
                </font>
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    That the principal shall be entitled to terminate this
                    agreement by one month’s notice in writing to the agent in
                    the event of his ceasing to carry on the said business of
                    the principal.
                  </font>
                </font>
              </p>
              <p
                align="justify"
                style={{ lineHeight: "100%", marginBottom: "0in" }}
              >
                <br />
              </p>
              <p
                align="justify"
                style={{ lineHeight: "100%", marginBottom: "0in" }}
              >
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    <b>18.</b>
                  </font>
                </font>
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    That on the termination of this agreement for whatever
                    reason, the agent shall forthwith deliver to the principal
                    all the unsold stock of products/goods and shall pay to the
                    principal for the shortages of deficiency of stock at price
                    list less commission and rebate allowable to the agent. The
                    agent shall also deliver to the charge of the principal all
                    books of account and documents of the agency, cash, cheques,
                    bills of exchange or other securities he may have received
                    during the normal course as a result of sales of the
                    products/goods of the principal and shall transfer, assign
                    or negotiate in favour of the principal all such securities
                    on demand.
                  </font>
                </font>
              </p>
              <p
                align="justify"
                style={{ lineHeight: "100%", marginBottom: "0in" }}
              >
                <br />
              </p>
              <p
                align="justify"
                style={{
                  lineHeight: "100%",
                  marginLeft: "0.75in",
                  textIndent: "-0.25in",
                  marginBottom: "0in",
                }}
              >
                <br />
              </p>
              <p
                align="justify"
                style={{ lineHeight: "100%", marginBottom: "0in" }}
              >
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    <b>IN WITNESS WHEREOF </b>
                  </font>
                </font>
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    the parties have signed this Agreement on the day and year
                    first above written.
                  </font>
                </font>
              </p>
              <p
                align="justify"
                style={{ lineHeight: "100%", marginBottom: "0in" }}
              >
                <br />
              </p>
              <p
                align="justify"
                style={{ lineHeight: "100%", marginBottom: "0in" }}
              >
                <br />
              </p>
              <p
                align="justify"
                style={{ lineHeight: "108%", marginBottom: "0.11in" }}
              >
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    <b>SIGNED by the PRINCIPAL </b>
                  </font>
                </font>
              </p>
              <p
                align="justify"
                style={{ lineHeight: "108%", marginBottom: "0.11in" }}
              >
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    ............................................................
                  </font>
                </font>
              </p>
              <p
                align="justify"
                style={{ lineHeight: "108%", marginBottom: "0.11in" }}
              >
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    [
                  </font>
                </font>
                <font color="">
                  <font face="Garamond, serif">
                    <font size={3} style={{ fontSize: "12pt" }}>
                      Name of designated person for principal
                    </font>
                  </font>
                </font>
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    ]{" "}
                  </font>
                </font>
              </p>
              <p
                align="justify"
                style={{ lineHeight: "108%", marginBottom: "0.11in" }}
              >
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    <b>In the presence of:</b>
                  </font>
                </font>
              </p>
              <p
                align="justify"
                style={{ lineHeight: "108%", marginBottom: "0.11in" }}
              >
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    Name:
                    ..................................................................
                  </font>
                </font>
              </p>
              <p
                align="justify"
                style={{ lineHeight: "108%", marginBottom: "0.11in" }}
              >
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    Address:
                    ...............................................................
                  </font>
                </font>
              </p>
              <p
                align="justify"
                style={{ lineHeight: "108%", marginBottom: "0.11in" }}
              >
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    Occupation:
                    ........................................................
                  </font>
                </font>
              </p>
              <p
                align="justify"
                style={{ lineHeight: "108%", marginBottom: "0.11in" }}
              >
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    Signature:
                    ............................................................
                  </font>
                </font>
              </p>
              <p
                align="justify"
                style={{ lineHeight: "108%", marginBottom: "0.11in" }}
              >
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    Date:
                    ............................................................
                  </font>
                </font>
              </p>
              <p
                align="justify"
                style={{ lineHeight: "108%", marginBottom: "0.11in" }}
              >
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    <b>SIGNED BY THE AGENT </b>
                  </font>
                </font>
              </p>
              <p
                align="justify"
                style={{ lineHeight: "108%", marginBottom: "0.11in" }}
              >
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    ............................................................
                  </font>
                </font>
              </p>
              <p
                align="justify"
                style={{ lineHeight: "108%", marginBottom: "0.11in" }}
              >
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    [
                  </font>
                </font>
                <font color="">
                  <font face="Garamond, serif">
                    <font size={3} style={{ fontSize: "12pt" }}>
                      Name of agent
                    </font>
                  </font>
                </font>
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    ]
                  </font>
                </font>
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    {" "}
                  </font>
                </font>
              </p>
              <p
                align="justify"
                style={{ lineHeight: "108%", marginBottom: "0.11in" }}
              >
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    <b>In the presence of:</b>
                  </font>
                </font>
              </p>
              <p
                align="justify"
                style={{ lineHeight: "108%", marginBottom: "0.11in" }}
              >
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    Name:
                    ..................................................................
                  </font>
                </font>
              </p>
              <p
                align="justify"
                style={{ lineHeight: "108%", marginBottom: "0.11in" }}
              >
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    Address:
                    ...............................................................
                  </font>
                </font>
              </p>
              <p
                align="justify"
                style={{ lineHeight: "108%", marginBottom: "0.11in" }}
              >
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    Occupation:
                    ........................................................
                  </font>
                </font>
              </p>
              <p
                align="justify"
                style={{ lineHeight: "108%", marginBottom: "0.11in" }}
              >
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    Signature:
                    ............................................................
                  </font>
                </font>
              </p>
              <p
                align="justify"
                style={{ lineHeight: "108%", marginBottom: "0.11in" }}
              >
                <font face="Garamond, serif">
                  <font size={3} style={{ fontSize: "12pt" }}>
                    Date:
                    ............................................................
                  </font>
                </font>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default TemplateFour;
