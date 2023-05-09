import React, { useEffect, useRef, useState } from "react";
import Dialog from "../commons/Custom/Dialog";
import TemplateIcon from "../assets/frame_1.png";

import { blueColor } from "../constants/colors";
import { placeholderMarker } from "../constants/strings";
import {
  getActualDate,
  getDayOfMonth,
  getMonthAndYear,
} from "../helperfunctions/date";
import {
  extractResponses,
  getCurrentDetails,
  loadTemplate,
  saveCurrentDetails,
} from "../helperfunctions/templates";
import Layout from "../Layout";
import Start from "../pages/Start";
import { insertInput } from "../helperfunctions/jsx";

function Template1AACTC(props) {
  console.log(props);
  //question index
  const [index, setIndex] = useState(0);

  //refs
  const [templateLoading, setTemplateLoading] = useState(false);
  const [templateDetails, setTemplateDetails] = useState(null);
  const [showStart, setShowStart] = useState(true);
  const currentDetails = getCurrentDetails();
  const [targetRef, setRef] = useState();
  const dateRef = useRef();
  const nameOfPrincipalRef = useRef();
  const addressOfPrincipalRef = useRef();
  const nameOfAgentRef = useRef();
  const addressOfAgentRef = useRef();
  const lengthOfAgencyRef = useRef();

  const percentageCommissionRef = useRef();
  const remitPercentageRef = useRef();
  const principalAgentAmountRef = useRef();
  const allowableDiscountRef = useRef();
  const expirationInYearsRef = useRef();
  const terminationTimelineRef = useRef();
  const daysOfAbsentismRef = useRef();
  const nameOfPersonDesignatedAsPrincipalRef = useRef();
  const nameOfPersonDesignatedAsAgentRef = useRef();

  const nameOfPrincipalWitnessRef = useRef();
  const addressOfPrincipalWitnessRef = useRef();
  const occupationOfPrincipalWitnessRef = useRef();
  const dateOfPrincipalWitnessRef = useRef();
  const nameOfAgentWitnessRef = useRef();
  const addressOfAgentWitnessRef = useRef();
  const occupationOfAgentWitnessRef = useRef();
  const dateOfAgentWitnessRef = useRef();

  const getCurrentValue = (key) => {
    let result = placeholderMarker;
    if (currentDetails) {
      result = currentDetails.find((detail) => detail.key == key)?.response;
    }

    return result;
  };

  //fields to be filled
  const [date, setDate] = useState(getCurrentValue("date"));
  const [nameOfPrincipal, setNameOfPrincipal] = useState(
    getCurrentValue("nameOfPrincipal")
  );
  const [addressOfPrincipal, setAddressOfPrincipal] = useState(
    getCurrentValue("addressOfPrincipal")
  );
  const [nameOfAgent, setNameOfAgent] = useState(
    getCurrentValue("nameOfAgent")
  );
  const [addressOfAgent, setAddressOfAgent] = useState(
    getCurrentValue("addressOfAgent")
  );
  const [lengthOfAgency, setLengthOfAgency] = useState(
    getCurrentValue("lengthOfAgency")
  );

  const [percentageCommission, setPercentageCommission] = useState(
    getCurrentValue("percentageCommission")
  );
  const [remitPercentage, setRemitPercentage] = useState(
    getCurrentValue("remitPercentage")
  );
  const [principalAgentAmount, setPrincipalAgentAmount] = useState(
    getCurrentValue("principalAgentAmount")
  );
  const [allowableDiscount, setAllowableDiscount] = useState(
    getCurrentValue("allowableDiscount")
  );
  const [expirationInYears, setExpirationInYears] = useState(
    getCurrentValue("expirationInYears")
  );
  const [terminationTimeline, setTerminationTimeline] = useState(
    getCurrentValue("terminationTimeline")
  );
  const [daysOfAbsentism, setDaysOfAbsentism] = useState(
    getCurrentValue("daysOfAbsentism")
  );
  const [
    nameOfPersonDesignatedAsPrincipal,
    setNameOfPersonDesignatedAsPrincipal,
  ] = useState(getCurrentValue("nameOfPersonDesignatedAsPrincipal"));
  const [nameOfPersonDesignatedAsAgent, setNameOfPersonDesignatedAsAgent] =
    useState(getCurrentValue("nameOfPersonDesignatedAsAgent"));

  const [nameOfPrincipalWitness, setNameOfPrincipalWitness] = useState(
    getCurrentValue("nameOfPrincipalWitness")
  );
  const [addressOfPrincipalWitness, setAddressOfPrincipalWitness] = useState(
    getCurrentValue("addressOfPrincipalWitness")
  );
  const [occupationOfPrincipalWitness, setOccupationOfPrincipalWitness] =
    useState(getCurrentValue("occupationOfPrincipalWitness"));
  const [dateOfPrincipalWitness, setDateOfPrincipalWitness] = useState(
    getCurrentValue("dateOfPrincipalWitness")
  );

  const [nameOfAgentWitness, setNameOfAgentWitness] = useState(
    getCurrentValue("nameOfAgentWitness")
  );
  const [addressOfAgentWitness, setAddressOfAgentWitness] = useState(
    getCurrentValue("addressOfAgentWitness")
  );
  const [occupationOfAgentWitness, setOccupationOfAgentWitness] = useState(
    getCurrentValue("occupationOfAgentWitness")
  );
  const [dateOfAgentWitness, setDateOfAgentWitness] = useState(
    getCurrentValue("dateOfAgentWitness")
  );

  //other functions
  useEffect(() => {
    loadTemplate(props?.id, setTemplateLoading, setTemplateDetails);
  }, [props?.id]);

  const setTargetRef = (ref) => {
    setRef(ref);
    if (ref) {
      ref.current.style.backgroundColor = "green";
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "start",
      });
    } else {
      ref.current.style.backgroundColor = "transparent";
    }
  };

  const incrementIndex = () => {
    if (targetRef) {
      targetRef.current.style.backgroundColor = "transparent";
    }
    setIndex(index + 1);
    saveCurrentDetails(questions);
  };

  const decrementIndex = () => {
    if (targetRef) {
      targetRef.current.style.backgroundColor = "transparent";
    }
    if (index == 0) {
      setShowStart(true);
    }
    if (index > 0) {
      setIndex(index - 1);
    }
  };
  const questions = [
    {
      type: "date",
      question: "Select the date in which this agreement is made",
      action: setDate,
      key: "date",
      response: date,
      ref: dateRef,
    },
    {
      type: "input",
      question: "Enter the full name of the first company (Principal)",
      action: setNameOfPrincipal,
      key: "nameOfPrincipal",
      response: nameOfPrincipal,
      ref: nameOfPrincipalRef,
    },
    {
      type: "input",
      question: "Enter the full address of the first company (Principal)",
      action: setAddressOfPrincipal,
      key: "addressOfPrincipal",
      response: addressOfPrincipal,
      ref: addressOfPrincipalRef,
    },
    {
      type: "input",
      question: "Enter the full name of the other company (Agent)",
      action: setNameOfAgent,
      key: "nameOfAgent",
      response: nameOfAgent,
      ref: nameOfAgentRef,
    },
    {
      type: "input",
      question: "Enter the full address of the other company (Agent)",
      action: setAddressOfAgent,
      key: "addressOfAgent",
      response: addressOfAgent,
      ref: addressOfAgentRef,
    },

    {
      type: "number",
      question: "For how long will this agency be (in years)?",
      action: setLengthOfAgency,
      key: "lengthOfAgency",
      response: lengthOfAgency,
      ref: lengthOfAgencyRef,
    },
    {
      type: "number",
      question: "What is the percentage commission?",
      action: setPercentageCommission,
      key: "percentageCommission",
      response: percentageCommission,
      ref: percentageCommissionRef,
    },
    {
      type: "number",
      question: "What is the percentage less of commission shall agent remit?",
      action: setRemitPercentage,
      key: "remitPercentage",
      response: remitPercentage,
      ref: remitPercentageRef,
    },
    {
      type: "number",
      question: "How much shall the principal keep with the agent?",
      action: setPrincipalAgentAmount,
      key: "principalAgentAmount",
      response: principalAgentAmount,
      ref: principalAgentAmountRef,
    },
    {
      type: "number",
      question: "How many percent discount shall the agent allow?",
      action: setAllowableDiscount,
      key: "allowableDiscount",
      response: allowableDiscount,
      ref: allowableDiscountRef,
    },
    {
      type: "number",
      question: "How long, in years, will the expiration of this agreement be?",
      action: setExpirationInYears,
      key: "expirationInYears",
      response: expirationInYears,
      ref: expirationInYearsRef,
    },
    {
      type: "number",
      question:
        "Within how many years after termination shall the agent not be allowed to trade with other principals?",
      action: setTerminationTimeline,
      key: "terminationTimeline",
      response: terminationTimeline,
      ref: terminationTimelineRef,
    },
    {
      type: "number",
      question: "How many days can an agent be absent for?",
      action: setDaysOfAbsentism,
      key: "daysOfAbsentism",
      response: daysOfAbsentism,
      ref: daysOfAbsentismRef,
    },
    {
      type: "input",
      question: "Enter the name of the person designated as Principal",
      action: setNameOfPersonDesignatedAsPrincipal,
      key: "nameOfPersonDesignatedAsPrincipal",
      response: nameOfPersonDesignatedAsPrincipal,
      ref: nameOfPersonDesignatedAsPrincipalRef,
    },
    {
      type: "input",
      question: "Enter full name of Principal's witness",
      action: setNameOfPrincipalWitness,
      key: "nameOfPrincipalWitness",
      response: nameOfPrincipalWitness,
      ref: nameOfPrincipalWitnessRef,
    },
    {
      type: "input",
      question: "Enter address of Principal's witness",
      action: setAddressOfPrincipalWitness,
      key: "addressOfPrincipalWitness",
      response: addressOfPrincipalWitness,
      ref: addressOfPrincipalWitnessRef,
    },
    {
      type: "input",
      question: "Enter occupation of Principal's witness",
      action: setOccupationOfPrincipalWitness,
      key: "occupationOfPrincipalWitness",
      response: occupationOfPrincipalWitness,
      ref: occupationOfPrincipalWitnessRef,
    },
    {
      type: "date",
      question: "Enter Principal's witness date",
      action: setDateOfPrincipalWitness,
      key: "dateOfPrincipalWitness",
      response: dateOfPrincipalWitness,
      ref: dateOfPrincipalWitnessRef,
    },
    {
      type: "input",
      question: "Enter the name of the person designated as Agent",
      action: setNameOfPersonDesignatedAsAgent,
      key: "nameOfPersonDesignatedAsAgent",
      response: nameOfPersonDesignatedAsAgent,
      ref: nameOfPersonDesignatedAsAgentRef,
    },

    {
      type: "input",
      question: "Enter full name of Agent's witness",
      action: setNameOfAgentWitness,
      key: "nameOfAgentWitness",
      response: nameOfAgentWitness,
      ref: nameOfAgentWitnessRef,
    },
    {
      type: "input",
      question: "Enter address of Agent's witness",
      action: setAddressOfAgentWitness,
      key: "addressOfAgentWitness",
      response: addressOfAgentWitness,
      ref: addressOfAgentWitnessRef,
    },
    {
      type: "input",
      question: "Enter occupation of Agent's witness",
      action: setOccupationOfAgentWitness,
      key: "occupationOfAgentWitness",
      response: occupationOfAgentWitness,
      ref: occupationOfAgentWitnessRef,
    },
    {
      type: "date",
      question: "Enter Agent's witness date",
      action: setDateOfAgentWitness,
      key: "dateOfAgentWitness",
      response: dateOfAgentWitness,
      ref: dateOfAgentWitnessRef,
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
    <Layout showLoader={templateLoading}>
      {templateDetails && (
        <>
          {showStart && (
            <Start
              details={{
                price: templateDetails?.cost,
                name: templateDetails?.name,
              }}
              setShowStart={setShowStart}
              imagePath={props.imagePath}
              saveCurrentDetails={() => saveCurrentDetails(questions)}
            />
          )}
          {!showStart && (
            <div className="flex justify-between gap-20">
              <Dialog
                docId={props?.id}
                questions={questions}
                index={index}
                incrementIndex={incrementIndex}
                decrementIndex={decrementIndex}
                templateDetails={templateDetails}
                responseList={extractResponses(questions)}
                saveCurrentDetails={() => saveCurrentDetails(questions)}
                setRef={setTargetRef}
              />

              <div className="w-3/5 py-3 shadow-md border">
                <div className="flex justify-between mb-3 pl-4">
                  <div className="flex gap-2 items-center">
                    <span>
                      <img src={TemplateIcon} alt="frame" />
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
                  className="template-container py-2 px-4"
                  style={{ height: "70vh", overflow: "scroll" }}
                >
                  <div>
                    <meta
                      httpEquiv="content-type"
                      content="text/html; charset=utf-8"
                    />
                    <title />
                    <meta
                      name="generator"
                      content="LibreOffice 7.3.6.2 (Linux)"
                    />
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
                            <font ref={dateRef}>
                              {insertInput(getDayOfMonth(getActualDate(date)))}{" "}
                              Day of{" "}
                              {insertInput(
                                getMonthAndYear(getActualDate(date))
                              )}
                              ,
                            </font>
                          </span>
                        </font>
                      </font>
                      <font face="Garamond, serif">
                        <font size={3} style={{ fontSize: "12pt" }}>
                          <span lang="en-GB">
                            <b> BETWEEN </b>
                          </span>
                        </font>
                      </font>
                      <font face="Garamond, serif">
                        <font size={3} style={{ fontSize: "12pt" }}></font>
                      </font>
                      <font color="">
                        <font face="Garamond, serif">
                          <font
                            size={3}
                            style={{ fontSize: "12pt" }}
                            ref={nameOfPrincipalRef}
                          >
                            {insertInput(nameOfPrincipal)}
                          </font>
                        </font>
                      </font>
                      <font face="Garamond, serif">
                        <font size={3} style={{ fontSize: "12pt" }}>
                          {" "}
                          a company duly incorporated under the laws of the
                          Federal Republic of Nigeria with its office at{" "}
                        </font>
                      </font>
                      <font color="">
                        <font face="Garamond, serif">
                          <font
                            size={3}
                            style={{ fontSize: "12pt" }}
                            ref={addressOfPrincipalRef}
                          >
                            {insertInput(addressOfPrincipal)}
                          </font>
                        </font>
                      </font>
                      <font face="Garamond, serif">
                        <font size={3} style={{ fontSize: "12pt" }}></font>
                      </font>
                      <font face="Garamond, serif">
                        <font size={3} style={{ fontSize: "12pt" }}>
                          <span lang="en-GB">
                            {" "}
                            (hereinafter referred to as{" "}
                          </span>
                        </font>
                      </font>
                      <font face="Garamond, serif">
                        <font size={3} style={{ fontSize: "12pt" }}>
                          <span lang="en-GB">
                            <b>“the Principal” </b>
                          </span>
                        </font>
                      </font>
                      <font face="Garamond, serif">
                        <font size={3} style={{ fontSize: "12pt" }}>
                          of the first part; which expression shall where the
                          context admits include its successors in title and
                          assigns)
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
                          <font
                            size={3}
                            style={{ fontSize: "12pt" }}
                            ref={nameOfAgentRef}
                          >
                            {insertInput(nameOfAgent)}
                          </font>
                        </font>
                      </font>
                      <font face="Garamond, serif">
                        <font size={3} style={{ fontSize: "12pt" }}>
                          {" "}
                          a company duly incorporated under the laws of the
                          Federal Republic of Nigeria with its office at of{" "}
                        </font>
                      </font>
                      <font color="">
                        <font face="Garamond, serif">
                          <font
                            size={3}
                            style={{ fontSize: "12pt" }}
                            ref={addressOfAgentRef}
                          >
                            {insertInput(addressOfAgent)}{" "}
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
                          of the other part; which expression shall where the
                          context admits include its successors in title and
                          assigns)
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
                          <b>
                            WHEREBY IT IS AGREED BETWEEN THE PARTIES AS FOLLOWS:
                          </b>
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
                          That the agent is hereby appointed as the sole agent
                          of the principal for the purpose of making sales of
                          the products/goods of the principal for a term of{" "}
                          <span ref={lengthOfAgencyRef}>
                            {insertInput(lengthOfAgency)}{" "}
                          </span>
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
                          That the agent shall not, while selling the
                          products/goods of the principal make any
                          representation in the trade or give any warranty other
                          than those contained in the principal’s printed price
                          list.
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
                          That the agent shall be allowed to deduct and retain
                          as his agency commission with himself{" "}
                          <span ref={percentageCommissionRef}>
                            {insertInput(percentageCommission)}
                          </span>{" "}
                          per cent of the list price of all products/goods sold
                          on behalf of the principal. The agent shall keep a
                          record of all sales and shall regularly remit to the
                          principal on each Saturday all sums received by the
                          agent in respect of such sales less{" "}
                          <span ref={remitPercentageRef}>
                            {insertInput(remitPercentage)}
                          </span>{" "}
                          per cent his agency commission. All sales shall be
                          made for cash against delivery of goods unless the
                          principal’s consent in writing to give credit to any
                          particular purchaser be in any case first obtained and
                          in the case of such credit sales the principal may
                          direct for such increase in the price of his
                          products/goods over and above the current list price
                          of the principal.
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
                          That the agent shall not make purchases on behalf of
                          or in any manner pledge the credit of the principal
                          without the consent in writing of the principal.
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
                          That the agent shall, at the expense of the principal,
                          take on rent and occupy for the purpose of the agency,
                          suitable premises with prior approval of the principal
                          and shall keep insured for full value against all
                          available risks, all the goods entrusted to his
                          custody by the principal under this agreement and on
                          request, shall produce to the principal, receipts, for
                          the rent, rates and taxes of the said premises and for
                          the premiums on insurance policies showing that the
                          same have been paid on or about their respective due
                          dates. That the agent shall bear all expenses relating
                          to or incidental to the said agency.
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
                          That the agent shall, in all his commercial dealings
                          and on documents and on the name-plate or letter-head
                          indicating his place of business, describe himself as
                          selling agent for the principal.
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
                          That the principal shall keep with the agent a stock
                          of his goods free of all expenses of delivery to the
                          value of{" "}
                          <span ref={principalAgentAmountRef}>
                            {insertInput(principalAgentAmount)}
                          </span>{" "}
                          according to the principal’s current price list and
                          the principal further undertakes to replenish such
                          stock on the close of each month so as to keep it at
                          the agreed value. Provided always that the agent shall
                          have no right of action against the principal for
                          delay resulting from shortage of stock, delays in
                          transit, accidents, strikes or other unavoidable
                          occurrences in replenishing such stock. The principal
                          shall always have the right, without any prior notice,
                          to cause a stock checking of the said products/goods
                          and on any shortage or deficiency found on such
                          stock-taking the agent shall on demand pay to the
                          principal the list price of such shortage or
                          deficiency less the deduction by way of commission or
                          rebate receivable by the agent. The agent shall not
                          alter, remove, or tamper with the marks or numbers on
                          the products/goods so entrusted into his custody.
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
                          That the agent shall not sell the goods of the
                          principal to any purchaser except at current price
                          list of the principal conveyed by him from time to
                          time. The agent may, however, allow a discount or
                          rebate of{" "}
                          <span ref={allowableDiscountRef}>
                            {insertInput(allowableDiscount)}
                          </span>{" "}
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
                          That in the event of any dispute arising between the
                          agent and a purchaser of the products/goods of the
                          principal, the agent shall immediately inform the
                          principal of the same and shall not without the
                          principal’s approval or consent in writing take any
                          legal proceedings in respect of or compromise such
                          dispute or grant a release to any purchaser of the
                          products/goods of the principal.
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
                          That either party may terminate this agreement at his
                          option at any time after the expiration of{" "}
                          <span ref={expirationInYearsRef}>
                            {insertInput(expirationInYears)}
                          </span>{" "}
                          years by giving the other one month’s notice in
                          writing.
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
                          That the agent shall always, during the existence of
                          this agreement, devote his whole business time and
                          energy for pushing the sale of the products/goods of
                          the principal and shall in all such dealings act
                          honestly and faithfully to the principal and shall
                          carry out orders and instructions and shall not engage
                          or be interested either directly or indirectly as
                          agent or servant in any other business or trade
                          without the prior consent in writing of the principal.
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
                          That on the termination of this agreement for any
                          reason whatsoever, the agent shall not for the period
                          of one year solicit trade orders from the persons who
                          had been purchasers of the products/goods of the
                          principal any time within{" "}
                          <span ref={terminationTimelineRef}>
                            {insertInput(terminationTimeline)}
                          </span>{" "}
                          years immediately preceding the date of such
                          termination and the agent shall not for a period of
                          one year engage or be interested as agent or servant
                          in any business, firm or company manufacturing,
                          selling or dealing in products/goods similar to those
                          of the principal.
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
                          delivery at agent’s place of business but the agent
                          shall, at his own expense, have the right to deliver
                          products/goods to purchasers at their places of
                          business.
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
                          against the agent for any breach or non-performance of
                          any part of this agreement, the principal shall have
                          the right summarily to terminate this agreement:
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
                          (ii) on the agent absenting himself from his business
                          duties entrusted to him under{" "}
                        </font>
                      </font>
                    </p>
                    <p
                      align="justify"
                      style={{ lineHeight: "100%", marginBottom: "0in" }}
                    >
                      <font face="Garamond, serif">
                        <font size={3} style={{ fontSize: "12pt" }}>
                          this agreement for{" "}
                          <span ref={daysOfAbsentismRef}>
                            {insertInput(daysOfAbsentism)}
                          </span>{" "}
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
                          relation to or touching upon the agreement, the same
                          shall be decided by arbitration in accordance with{" "}
                        </font>
                      </font>
                      <font face="Garamond, serif">
                        <font size={3} style={{ fontSize: "12pt" }}>
                          the Arbitration and Conciliation Act, Chapter A18,
                          Laws of the Federation of Nigeria, 2004 (or any
                          amendment thereto) and the Arbitration Rules connected
                          thereto,{" "}
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
                          The award of the Arbitrator shall be final,
                          conclusive, and binding upon the Parties.
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
                          agreement by one month’s notice in writing to the
                          agent in the event of his ceasing to carry on the said
                          business of the principal.
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
                          reason, the agent shall forthwith deliver to the
                          principal all the unsold stock of products/goods and
                          shall pay to the principal for the shortages of
                          deficiency of stock at price list less commission and
                          rebate allowable to the agent. The agent shall also
                          deliver to the charge of the principal all books of
                          account and documents of the agency, cash, cheques,
                          bills of exchange or other securities he may have
                          received during the normal course as a result of sales
                          of the products/goods of the principal and shall
                          transfer, assign or negotiate in favour of the
                          principal all such securities on demand.
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
                          the parties have signed this Agreement on the day and
                          year first above written.
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
                          <b>SIGNED FOR AND ON BEHALF OF THE PRINCIPAL </b>
                        </font>
                      </font>
                    </p>
                    <p
                      align="justify"
                      style={{ lineHeight: "108%", marginBottom: "0.11in" }}
                    >
                      ............................................................
                    </p>
                    <p
                      align="justify"
                      style={{ lineHeight: "108%", marginBottom: "0.11in" }}
                    >
                      <font face="Garamond, serif">
                        <font
                          size={3}
                          style={{ fontSize: "12pt" }}
                          ref={nameOfPersonDesignatedAsPrincipalRef}
                        >
                          {insertInput(
                            nameOfPersonDesignatedAsPrincipal,
                            "bold"
                          )}
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
                          Name:{" "}
                          <font ref={nameOfPrincipalWitnessRef}>
                            {insertInput(nameOfPrincipalWitness)}
                          </font>
                        </font>
                      </font>
                    </p>
                    <p
                      align="justify"
                      style={{ lineHeight: "108%", marginBottom: "0.11in" }}
                    >
                      <font face="Garamond, serif">
                        <font size={3} style={{ fontSize: "12pt" }}>
                          Address:{" "}
                          <font ref={addressOfPrincipalWitnessRef}>
                            {insertInput(addressOfPrincipalWitness)}
                          </font>
                        </font>
                      </font>
                    </p>
                    <p
                      align="justify"
                      style={{ lineHeight: "108%", marginBottom: "0.11in" }}
                    >
                      <font face="Garamond, serif">
                        <font size={3} style={{ fontSize: "12pt" }}>
                          Occupation:{" "}
                          <font ref={occupationOfPrincipalWitnessRef}>
                            {insertInput(occupationOfPrincipalWitness)}
                          </font>
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
                          Date:{" "}
                          <font ref={dateOfPrincipalWitnessRef}>
                            {insertInput(dateOfPrincipalWitness)}
                          </font>
                        </font>
                      </font>
                    </p>
                    <p
                      align="justify"
                      style={{ lineHeight: "108%", marginBottom: "0.11in" }}
                    >
                      <font face="Garamond, serif">
                        <font size={3} style={{ fontSize: "12pt" }}>
                          <b>SIGNED FOR AND BEHALF OF THE AGENT </b>
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
                      {" "}
                      <font ref={nameOfPersonDesignatedAsAgentRef}>
                        {insertInput(nameOfPersonDesignatedAsAgent)}
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
                          Name:{" "}
                          <font ref={nameOfAgentWitnessRef}>
                            {insertInput(nameOfAgentWitness)}
                          </font>
                        </font>
                      </font>
                    </p>
                    <p
                      align="justify"
                      style={{ lineHeight: "108%", marginBottom: "0.11in" }}
                    >
                      <font face="Garamond, serif">
                        <font size={3} style={{ fontSize: "12pt" }}>
                          Address:{" "}
                          <font ref={addressOfAgentWitnessRef}>
                            {insertInput(addressOfAgentWitness)}
                          </font>
                        </font>
                      </font>
                    </p>
                    <p
                      align="justify"
                      style={{ lineHeight: "108%", marginBottom: "0.11in" }}
                    >
                      <font face="Garamond, serif">
                        <font size={3} style={{ fontSize: "12pt" }}>
                          Occupation:{" "}
                          <font ref={occupationOfAgentWitnessRef}>
                            {insertInput(occupationOfAgentWitness)}
                          </font>
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
                          Date:{" "}
                          <font ref={dateOfAgentWitnessRef}>
                            {insertInput(dateOfAgentWitness)}
                          </font>
                        </font>
                      </font>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </Layout>
  );
}

export default Template1AACTC;
