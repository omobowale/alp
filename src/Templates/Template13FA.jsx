import React, { useEffect, useState, useRef } from "react";
import TemplateIcon from "../assets/frame_1.png";
import { blueColor } from "../constants/colors";
import { placeholderMarker } from "../constants/strings";
import {
  getActualDate,
  getDayOfMonth,
  getMonthAndYear,
} from "../helperfunctions/date";
import { insertInput } from "../helperfunctions/jsx";
import {
  extractResponses,
  getCurrentDetails,
  loadTemplate,
  saveCurrentDetails,
} from "../helperfunctions/templates";
import Layout from "../Layout";
import Start from "../pages/Start";
import Dialog from "../commons/Custom/Dialog";

function Template13FA(props) {
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
  const nameOfFranchisorRef = useRef();
  const addressOfFranchisorRef = useRef();
  const nameOfFranchiseeRef = useRef();
  const addressOfFranchiseeRef = useRef();
  const areaOfExpertiseRef = useRef();
  const lengthOfAgreementRef = useRef();
  const dateOfCommencementRef = useRef();
  const dateOfCommencementOfBusinessRef = useRef();
  const openingTimeRef = useRef();
  const closingTimeRef = useRef();
  const monthlyServiceFeeRef = useRef();

  const nameOfFranchisorWitnessRef = useRef();
  const addressOfFranchisorWitnessRef = useRef();
  const occupationOfFranchisorWitnessRef = useRef();
  const dateOfFranchisorWitnessRef = useRef();
  const nameOfFranchiseeWitnessRef = useRef();
  const addressOfFranchiseeWitnessRef = useRef();
  const occupationOfFranchiseeWitnessRef = useRef();
  const dateOfFranchiseeWitnessRef = useRef();

  const getCurrentValue = (key) => {
    let result = placeholderMarker;
    if (currentDetails) {
      result = currentDetails.find((detail) => detail.key == key)?.response;
      if (result) {
        return result;
      }
    }

    return placeholderMarker;
  };

  //fields to be filled
  const [date, setDate] = useState(getCurrentValue("date"));
  const [nameOfFranchisor, setNameOfFranchisor] = useState(
    getCurrentValue("nameOfFranchisor")
  );
  const [addressOfFranchisor, setAddressOfFranchisor] = useState(
    getCurrentValue("addressOfFranchisor")
  );
  const [nameOfFranchisee, setNameOfFranchisee] = useState(
    getCurrentValue("nameOfFranchisee")
  );
  const [addressOfFranchisee, setAddressOfFranchisee] = useState(
    getCurrentValue("addressOfFranchisee")
  );
  const [areaOfExpertise, setAreaOfExpertise] = useState(
    getCurrentValue("areaOfExpertise")
  );
  const [lengthOfAgreement, setLengthOfAgreement] = useState(
    getCurrentValue("lengthOfAgreement")
  );
  const [dateOfCommencement, setDateOfCommencement] = useState(
    getCurrentValue("dateOfCommencement")
  );
  const [dateOfCommencementOfBusiness, setDateOfCommencementOfBusiness] =
    useState(getCurrentValue("dateOfCommencementOfBusiness"));
  const [openingTime, setOpeningTime] = useState(
    getCurrentValue("openingTime")
  );
  const [closingTime, setClosingTime] = useState(
    getCurrentValue("closingTime")
  );
  const [monthlyServiceFee, setMonthlyServiceFee] = useState(
    getCurrentValue("monthlyServiceFee")
  );
  const [nameOfFranchisorWitness, setNameOfFranchisorWitness] = useState(
    getCurrentValue("nameOfFranchisorWitness")
  );
  const [addressOfFranchisorWitness, setAddressOfFranchisorWitness] = useState(
    getCurrentValue("addressOfFranchisorWitness")
  );
  const [occupationOfFranchisorWitness, setOccupationOfFranchisorWitness] =
    useState(getCurrentValue("occupationOfFranchisorWitness"));
  const [dateOfFranchisorWitness, setDateOfFranchisorWitness] = useState(
    getCurrentValue("dateOfFranchisorWitness")
  );
  const [nameOfFranchiseeWitness, setNameOfFranchiseeWitness] = useState(
    getCurrentValue("nameOfFranchiseeWitness")
  );
  const [addressOfFranchiseeWitness, setAddressOfFranchiseeWitness] = useState(
    getCurrentValue("addressOfFranchiseeWitness")
  );
  const [occupationOfFranchiseeWitness, setOccupationOfFranchiseeWitness] =
    useState(getCurrentValue("occupationOfFranchiseeWitness"));
  const [dateOfFranchiseeWitness, setDateOfFranchiseeWitness] = useState(
    getCurrentValue("dateOfFranchiseeWitness")
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
      question: "Enter the date of this agreement",
      action: setDate,
      key: "date",
      response: date,
      ref: dateRef,
    },
    {
      type: "input",
      question: "Enter the full name of Franchisor",
      action: setNameOfFranchisor,
      key: "nameOfFranchisor",
      response: nameOfFranchisor,
      ref: nameOfFranchisorRef,
    },
    {
      type: "input",
      question: "Enter the address of Franchisor",
      action: setAddressOfFranchisor,
      key: "addressOfFranchisor",
      response: addressOfFranchisor,
      ref: addressOfFranchisorRef,
    },
    {
      type: "input",
      question: "Enter the full name of Franchisee",
      action: setNameOfFranchisee,
      key: "nameOfFranchisee",
      response: nameOfFranchisee,
      ref: nameOfFranchiseeRef,
    },
    {
      type: "input",
      question: "Enter the address of Franchisee",
      action: setAddressOfFranchisee,
      key: "addressOfFranchisee",
      response: addressOfFranchisee,
      ref: addressOfFranchiseeRef,
    },
    {
      type: "input",
      question: "Enter the area of expertise of Franchisor",
      action: setAddressOfFranchisee,
      key: "addressOfFranchisee",
      response: addressOfFranchisee,
      ref: addressOfFranchiseeRef,
    },
    {
      type: "number",
      question: "How long will the agreement be for?",
      action: setLengthOfAgreement,
      key: "lengthOfAgreement",
      response: lengthOfAgreement,
      ref: lengthOfAgreementRef,
    },
    {
      type: "date",
      question: "Select date of commencement of agreement",
      action: setDateOfCommencement,
      key: "dateOfCommencement",
      response: dateOfCommencement,
      ref: dateOfCommencementRef,
    },
    {
      type: "date",
      question: "Select date of commencement of business",
      action: setDateOfCommencementOfBusiness,
      key: "dateOfCommencementOfBusiness",
      response: dateOfCommencementOfBusiness,
      ref: dateOfCommencementOfBusinessRef,
    },
    {
      type: "time",
      question: "Select business opening time each day",
      action: setOpeningTime,
      key: "openingTime",
      response: openingTime,
      ref: openingTimeRef,
    },
    {
      type: "time",
      question: "Select business closing time each day",
      action: setClosingTime,
      key: "closingTime",
      response: closingTime,
      ref: closingTimeRef,
    },

    {
      type: "number",
      question: "Enter monthly service fee (in %)",
      action: setMonthlyServiceFee,
      key: "monthlyServiceFee",
      response: monthlyServiceFee,
      ref: monthlyServiceFeeRef,
    },
    {
      type: "input",
      question: "Enter full name of Franchisor's witness",
      action: setNameOfFranchisorWitness,
      key: "nameOfFranchisorWitness",
      response: nameOfFranchisorWitness,
      ref: nameOfFranchisorWitnessRef,
    },
    {
      type: "input",
      question: "Enter address of Franchisor's witness",
      action: setAddressOfFranchisorWitness,
      key: "addressOfFranchisorWitness",
      response: addressOfFranchisorWitness,
      ref: addressOfFranchisorWitnessRef,
    },
    {
      type: "input",
      question: "Enter occupation of Franchisor's witness",
      action: setOccupationOfFranchisorWitness,
      key: "occupationOfFranchisorWitness",
      response: occupationOfFranchisorWitness,
      ref: occupationOfFranchisorWitnessRef,
    },
    {
      type: "date",
      question: "Enter Franchisor's witness date",
      action: setDateOfFranchisorWitness,
      key: "dateOfFranchisorWitness",
      response: dateOfFranchisorWitness,
      ref: dateOfFranchisorWitnessRef,
    },
    {
      type: "input",
      question: "Enter full name of Franchisee's witness",
      action: setNameOfFranchiseeWitness,
      key: "nameOfFranchiseeWitness",
      response: nameOfFranchiseeWitness,
      ref: nameOfFranchiseeWitnessRef,
    },
    {
      type: "input",
      question: "Enter address of Franchisee's witness",
      action: setAddressOfFranchiseeWitness,
      key: "addressOfFranchiseeWitness",
      response: addressOfFranchiseeWitness,
      ref: addressOfFranchiseeWitnessRef,
    },
    {
      type: "input",
      question: "Enter occupation of Franchisee's witness",
      action: setOccupationOfFranchiseeWitness,
      key: "occupationOfFranchiseeWitness",
      response: occupationOfFranchiseeWitness,
      ref: occupationOfFranchiseeWitnessRef,
    },
    {
      type: "date",
      question: "Enter Franchisee's witness date",
      action: setDateOfFranchiseeWitness,
      key: "dateOfFranchiseeWitness",
      response: dateOfFranchiseeWitness,
      ref: dateOfFranchiseeWitnessRef,
    },
  ];

  return (
    <Layout>
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
            />
          )}
          {!showStart && (
            <div className="flex justify-between gap-20">
              <Dialog
                questions={questions}
                index={index}
                incrementIndex={incrementIndex}
                decrementIndex={decrementIndex}
                templateDetails={templateDetails}
                responseList={extractResponses(questions)}
                saveCurrentDetails={() => saveCurrentDetails(questions)}
                setRef={setTargetRef}
              />

              <div className="w-3/5">
                <div className="flex justify-between mb-3">
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
                  <head>
                    <meta
                      httpEquiv="content-type"
                      content="text/html; charset=utf-8"
                    />
                    <title />
                    <meta
                      name="generator"
                      content="LibreOffice 7.3.6.2 (Linux)"
                    />
                    <meta name="author" content="Chinwe Uchenna" />
                    <meta name="created" content="2021-11-10T19:34:00" />
                    <meta name="changedby" content="Chinwe Uchenna" />
                    <meta name="changed" content="2021-11-18T17:07:00" />
                    <meta name="AppVersion" content="16.0000" />
                    <style>
                      {`@page { size: 8.5in 11in; margin: 1in }
      		p { line-height: 115%; text-align: left; orphans: 2; widows: 2; margin-bottom: 0.1in; direction: ltr; background: transparent }`}
                    </style>
                  </head>

                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        <b>THIS AGREEMENT</b>
                      </font>
                    </font>
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        is made this{" "}
                        <font ref={dateRef}>
                          {insertInput(getDayOfMonth(getActualDate(date)))} day
                          of {insertInput(getMonthAndYear(getActualDate(date)))}
                        </font>
                      </font>
                    </font>
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        <b>BETWEEN</b>
                      </font>
                    </font>
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        <font ref={nameOfFranchisorRef}>
                          {insertInput(nameOfFranchisor)}
                        </font>
                        <font> of </font>
                        <font ref={addressOfFranchisorRef}>
                          {insertInput(addressOfFranchisor)} (hereinafter called
                          “
                        </font>
                      </font>
                    </font>
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        <b>the Franchisor</b>
                      </font>
                    </font>
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        ”) of the first part
                      </font>
                    </font>
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        <b>AND</b>
                      </font>
                    </font>
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        <font ref={nameOfFranchiseeRef}>
                          {insertInput(nameOfFranchisee)}
                        </font>
                        of{" "}
                        <font ref={addressOfFranchiseeRef}>
                          {insertInput(addressOfFranchisee)} (hereinafter called
                          “
                        </font>
                      </font>
                    </font>
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        <b>the Franchisee</b>
                      </font>
                    </font>
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        ”) of the second part;
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        <b>WHEREAS:</b>
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        A. The Franchisor has spent time money and effort in
                        obtaining and developing knowledge of and expertise (“
                      </font>
                    </font>
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        <b>the Know-How</b>
                      </font>
                    </font>
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        ”) in{" "}
                        <font ref={areaOfExpertiseRef}>
                          {insertInput(areaOfExpertise)}{" "}
                        </font>
                        hereinafter called “
                      </font>
                    </font>
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        <b>The Services</b>
                      </font>
                    </font>
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        ”.
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        B. The Franchisor wishes to expand the provision of the
                        Services and is willing to grant to the Franchisee the
                        rights set out herein.
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        C. The Franchisee desires the right during the
                        continuance of this Agreement to provide the Services
                        from the premises specified in Schedule One hereto (“
                      </font>
                    </font>
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        <b>the Premises</b>
                      </font>
                    </font>
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        ”) under the Marks (detailed in Schedule Two), as
                        directed in the operation manual (“
                      </font>
                    </font>
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        <b>the Manual</b>
                      </font>
                    </font>
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        ”).
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        D. The business of providing and marketing the Services
                        is hereafter called “
                      </font>
                    </font>
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        <b>the Business</b>
                      </font>
                    </font>
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        ”.
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        E. The equipment from time to time required by the
                        Franchisee for use in the Business is hereafter called “
                      </font>
                    </font>
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        <b>the Equipment</b>
                      </font>
                    </font>
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        ”.
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        <b>NOW IT IS AGREED AS FOLLOWS:</b>
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        <b>1. Rights Granted</b>
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        1.1 The Franchisor grants to the Franchisee during the
                        period of this Agreement and subject to the terms and
                        conditions hereof the rights to carry on the Business in
                        accordance with this Agreement from the Premises, to
                        utilise the Know-How and to use the Marks.
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        <b>2. Term</b>
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        2.1 Subject as herein appears this Agreement shall be
                        for a period of{" "}
                        <font ref={lengthOfAgreementRef}>
                          {insertInput(lengthOfAgreement)}{" "}
                        </font>
                        years, commencing the{" "}
                        <font ref={dateOfCommencementRef}>
                          {insertInput(
                            getDayOfMonth(getActualDate(dateOfCommencement))
                          )}{" "}
                          day of{" "}
                          {insertInput(getMonthAndYear(dateOfCommencement))}
                        </font>
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        <b>3. Renewal</b>
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        3.1 If the Franchisee gives written notice of his desire
                        to renew the Agreement, then provided that at the time
                        such notice is given this Agreement is valid and
                        subsisting and the Franchisee shall not be in breach of
                        his obligations under this Agreement, the Franchisor and
                        the Franchisee will enter into a new standard Agreement
                        in such form as is currently being offered to new
                        Franchisees at that time, to operate from the date of
                        the expiry of this Agreement.
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        <b>4. Franchisor’ s obligations</b>
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        4.1 The Franchisor shall:-
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        (a) Assist the Franchisee to establish and efficiently
                        operate the Business from the Premises and to provide
                        him with a Manual, the copyright in which shall at all
                        times remain the property of the Franchisor;
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        (b) Train the Franchisee and the Franchisee’s staff in
                        the correct operation of the Business at the cost
                        specified in Schedule Three.
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        (c) Train the Franchisee and the Franchisee’s new and
                        existing staff in the Services. The cost of this
                        training shall be as detailed in Schedule Three.
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        (d) Give the Franchisee such reasonable continuing
                        assistance and advice as the Franchisor considers
                        necessary for the efficient running of the Business.
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        (e) Ensure that the Manual shall be kept up to date with
                        any alterations and/or improvements in or to the
                        operation of the Business.
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        <b>5. Franchisee’s obligations concerning the Marks</b>
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        5.1 The Franchisor authorises the Franchisee to use the
                        Marks solely for the purpose of promoting the Business
                        and any usage will be in accordance with the reasonable
                        directions of the Franchisor.
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        5.2 The Franchisee undertakes not to do anything to
                        prejudice or damage the goodwill in the Marks or the
                        reputation of the Franchisor but may challenge the
                        Franchisor’s intellectual property rights.
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        5.3 If the Franchisee becomes aware of any infringement
                        of the Marks by any other party trading with Marks
                        similar or identical to the Marks, the Franchisee shall
                        immediately notify the Franchisor thereof in writing.
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        5.4 The Franchisee shall use only the Marks in
                        connection with the Services.
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        5.5 The Franchisee shall comply with all reasonable
                        requirements from time to time laid down by the
                        Franchisor as regards the use and presentation of the
                        Marks.
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        5.6 The Franchisee shall ensure that any items of
                        equipment regularly used by the Franchisee in carrying
                        out the Services, shall carry such words devices and/or
                        designs and in such prominence and colour, as may be
                        specified by the Franchisor.
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        5.7 Where required by the Franchisor the Franchisee
                        shall join with the Franchisor at the Franchisor’s cost
                        and expense in making or to make application to become
                        the registered user of the Marks and to conform to the
                        terms of the said registered user agreement.
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        <b>
                          6. The Franchisee’s obligations concerning the
                          Equipment
                        </b>
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        6.1 The Franchisee agrees in order to protect the
                        Franchisor’s intellectual property rights and maintain
                        the common identity and reputation of the network to
                        comply with quality specifications laid down for the
                        Equipment.
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        <b>7. The Franchisee’s general obligations</b>
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        7.1 In order to maintain the uniform high standards of
                        the Services, and to protect the Franchisor’s
                        intellectual property rights and maintain the common
                        identity and reputation of the franchise network, the
                        Franchisee hereby agrees;
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        (a) To carry on the Business under the Marks and no
                        other name.
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        (b) Not to carry on the Business from any location other
                        than the Premises without the Franchisor’s prior written
                        consent.
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        (c) To commence the business from the{" "}
                        <font ref={dateOfCommencementOfBusinessRef}>
                          {insertInput(
                            getDayOfMonth(
                              getActualDate(dateOfCommencementOfBusiness)
                            )
                          )}{" "}
                          day of{" "}
                          {insertInput(
                            getMonthAndYear(
                              getActualDate(dateOfCommencementOfBusiness)
                            )
                          )}{" "}
                        </font>
                        and to carry it on as a legally and economically
                        independent party.
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        (d) To provide the Services from the Premises at least
                        between the hours of{" "}
                        <font ref={openingTimeRef}>
                          {insertInput(openingTime)}{" "}
                        </font>
                        and{" "}
                        <font ref={closingTimeRef}>
                          {insertInput(closingTime)}{" "}
                        </font>
                        on Monday to Friday inclusive.
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        (e) To use his best endeavours and the highest standards
                        in all matters connected with the Business and to carry
                        on the business diligently and in a manner in all
                        material respects to the reasonable satisfaction of the
                        Franchisor and as may be reasonably required by the
                        Franchisor from time to time in accordance with its
                        image and reputation.
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        (f) To ensure that all personnel employed by him in the
                        Business shall at all times be clean and tidily clothed
                        in any designated clothing or otherwise. The Franchisee
                        shall ensure that they comply with all of the
                        Franchisor’s requirements as regards cleanliness,
                        clothing, appearance, or demeanour.
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        (g) To ensure that all his employees are trained by the
                        Franchisor before actually working in the business.
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        (h) To permit the Franchisor and or his agent without
                        any further or other authority or notice, to speak to
                        customers and the Franchisee’s staff about the Services
                        being provided by the Franchisee.
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        (i) To comply with all reasonable requirements
                        consistent with the terms of this Agreement as are from
                        time to time notified by the Franchisor for the
                        efficient conduct of the Business.
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        (j) To insure with a major reputable insurance company
                        in an adequate sum against all normal and reasonably
                        foreseeable risks relating to the conduct of the
                        Business including product liability howsoever arising
                        negligence or other acts or omissions by the Franchisee
                        or any person for whom the Franchisee is responsible and
                        cover all public and employees liability and death of or
                        injury to any customer or any other person or damage to
                        any motor vehicle used by the Franchisee and provide
                        copies of such insurance policies and proof of premium
                        payments to the Franchisor upon its request and the
                        Franchisee will provide to each insurer full and
                        complete information relevant to or which may be
                        required in respect of any insurance policy and, ensure
                        that he does nothing which in any way invalidates it.
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        (k) To clearly indicate on all literature and
                        correspondence and by way of a prominently displayed
                        notice board at the Premises the fact that it is an
                        independent franchisee of the franchisor and is in no
                        other way connected with it.
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        (l) To indemnify and keep indemnified the Franchisor
                        from and against all loss damage or liability suffered
                        by it as a result of the Franchisee’s acts or omissions.
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        <b>8. The Franchisee’s financial obligations</b>
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        8.1 The Franchisee shall pay to the Franchisor the
                        following sums;
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        (a) Immediately upon signing this agreement a franchise
                        fee in the sum specified in Schedule Three below.
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        (b) Upon the Franchisor’s request and prior to receiving
                        initial training to pay the Franchisor for the initial
                        and continuous training referred to in clause 4 above.
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        (c) A monthly Service Management Fee equivalent to{" "}
                        <font ref={monthlyServiceFeeRef}>
                          {insertInput(monthlyServiceFee)}
                        </font>
                        % of the previous month’s turnover.
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        (d) Subject to clause 9 below at the request of the
                        Franchisor, a contribution to the Franchisor’s
                        Advertising and Promotion Fund.
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        <b>9. Promotion and advertising</b>
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        9.1 The Franchisee shall upon receiving written notice
                        from the Franchisor pay on a monthly basis, a sum
                        equivalent to …. % of the previous month’s gross
                        turnover or
                      </font>
                    </font>
                    <font face="Times New Roman, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        ₦………..
                      </font>
                    </font>
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        per annum whichever is the higher into the Franchisor’s
                        Promotion and Advertising Fund.
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        9.2 The Franchisor shall keep records of the fund and
                        shall pay the monies into a separate designated bank
                        account in the name of the “Advertising and Promotion
                        Fund” The Franchisor shall use these funds solely for
                        the national and regional advertising of the services.
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        <b>10. Franchisee’s accounts</b>
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        10.1 The Franchisee shall maintain proper books of
                        account relating to the business and shall employ a
                        Chartered/Certified Accountant to prepare annual
                        accounts for the business and the Franchisee shall
                        supply the Franchisor:
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        (a) Within thirty days after the end of each financial
                        year with an audited certificate as to the Franchisee’s
                        gross turnover during such period calculated in
                        accordance with this Agreement.
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        (b) Within ninety days after the end of each financial
                        year with a certified copy of the audited profit and
                        loss accounts and balance sheet of the Franchisee’s
                        Business and such other accounting and financial
                        information relating to it as may reasonably be required
                        by the Franchisor.
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        (c) The Franchisee shall provide to the Franchisor any
                        certificates etc. set out in (a) and (b) above which
                        shall be prepared after the termination of this
                        Agreement, but which shall relate to any financial
                        period of the Franchisee which falls in whole or in part
                        within the period of this Agreement.
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        <b>11. Audit</b>
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        11.1 The Franchisor or its Auditor or authorised
                        representative shall be entitled to inspect and audit
                        the books of account and all supporting documentation of
                        the Franchisee relating to the Franchisee’s Business at
                        any time in respect of the whole or any part of the
                        period of this Agreement and within six months after the
                        receipt by the Franchisor of the audited accounts for
                        the year or other period of this Agreement up to the
                        termination or surrender of this Agreement or sale or
                        transmission of the Franchisee’s Business to a new
                        Franchisee by the Franchisor giving written notice to
                        the Franchisee such inspection or audit to be during
                        reasonable business hours;
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        11.2 If the audit (or any other periodic inspection not
                        being a full audit) shows that the accounting of the
                        Franchisee as to the calculation of the payments due
                        under this agreement, and/or any other financial matter
                        is incorrect, the Franchisee undertakes promptly to
                        rectify the defect in the amount accounted for and/or
                        the accounting system defect as the case may be.
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <br />
                    <br />
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <br />
                    <br />
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        <b>12. The sale of the business</b>
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        12.1 The Franchisee may not assign or delegate his
                        Franchise or any other right or obligation under this
                        Agreement, but may sell his Business with the prior
                        written consent of the Franchisor and subject to the
                        conditions listed in sub-clause12.2 below, the
                        Franchisor undertakes to grant to a purchaser of the
                        Franchisee’s Business who is acceptable to the
                        Franchisor, an Agreement for the period of not less than
                        ….. years commencing on the date of the sale of the said
                        Business such Agreement to be in the form of the
                        standard Agreement offered by the Franchisor to its
                        Franchisee’s current at that time.
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        12.2 The conditions required to obtain the written
                        consent of the Franchisor to the sale of the
                        Franchisee’s Business shall be:
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        (a) any proposed purchaser shall meet the Franchisor’s
                        standards in all respects;
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        (b) the Franchisee shall pay to the Franchisor the sum
                        of ….% of the sale price if the Franchisor has
                        introduced the purchaser, and ….% otherwise (except that
                        where the Franchisor exercises these options under
                        sub-clause 12.3 below to purchase the business, no such
                        payment shall be due to the Franchisor);
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        (c) the Franchisee must not be in breach of any
                        obligations to the Franchisor under the terms of this
                        Agreement.
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        (d) the sale must be completed in time to enable the
                        Franchisor to enter into a replacement Franchise
                        Agreement with the purchaser before the expiry of this
                        Agreement.
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        12.3(a) The Franchisee shall submit to the Franchisor a
                        copy of the proposed purchaser’s written offer (the
                        Purchase Offer) to purchase the said Business from the
                        Franchisee together with a financial statement of
                        affairs and a business history of the proposed purchaser
                        and any further information which the Franchisor may
                        reasonably require.
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        (b) Upon receipt of the Purchase Offer accompanied by
                        such items the Franchisor shall have in addition to its
                        other rights hereunder, an option to purchase the said
                        Business for the same amount and on the same terms as
                        those set out in the purchase offer such option to be
                        exercised by notice in writing given to the Franchisee
                        within twenty-eight days after the receipt by the
                        Franchisor of the purchase offer during which period the
                        terms of the Purchase Offer cannot be altered.
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        (c) If the Franchisor does not exercise such option and
                        consents to the proposed purchase a condition thereof is
                        that the proposed purchaser shall deposit twenty-five
                        percent of the purchase price with the Franchisor and
                        that upon completion of the sale the purchaser shall pay
                        the balance of the purchase price to the Franchisor’s
                        solicitor (as agent for the Franchisee) subject to a
                        lien for any monies owed to the Franchisor by the
                        Franchisee, and the Franchisor shall deduct from the
                        said purchase price the amount of any unpaid obligations
                        of the Franchisee to the Franchisor together with the
                        amount due in accordance with this agreement and shall
                        remit any outstanding balance of the purchase price to
                        the Franchisee within thirty days after the date of the
                        receipt of the final amount of the purchase price by the
                        Franchisor.
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <br />
                    <br />
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        (d) if the sale of the business proceeds under
                        sub-clause 12.3(c) above, it is a condition of the
                        consent of the Franchisor that the terms of the offer
                        notice are the terms of the sale and if the sale price
                        or any other significant term of the offer notice is
                        changed the amended terms shall constitute a new offer
                        notice which shall be submitted to the Franchisor to be
                        processed under this sub-clause in place of the original
                        offer notice.
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        12.4 This Agreement is only granted to the Franchisee on
                        the condition (which is of the essence of this
                        Agreement) that it is granted to him as an individual
                        person and if the Franchisee intends to change the
                        structure of his trading style to a partnership or to a
                        Limited Company or in any other manner it is agreed that
                        any such intended change shall be deemed to be an
                        assignment of this Agreement which shall require the
                        prior written consent of the Franchisor under this
                        Clause.
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        12.5 The Franchisor shall be entitled to assign the
                        benefit of this Agreement to any other party at any time
                        and shall inform the Franchisee thereof in writing
                        within a reasonable time thereafter.
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        <b>13. The death of the franchisee</b>
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        13.1 In the event of the Franchisee dying during the
                        period of this Agreement and if a replacement Franchisee
                        nominated in writing by the personal representative of
                        the Franchisee and who is acceptable to the Franchisor
                        as set out in Clause 12 above enters into a written
                        undertaking with the Franchisor within twenty-eight days
                        from the date of the death of the Franchisee to observe
                        and perform all the obligations imposed on the
                        Franchisee by this Agreement then this Agreement shall
                        continue in force with the substitution of the new
                        Franchisee. In the event of no replacement Franchisee
                        being nominated or accepted or in the event of him
                        declining to undertake with the Franchisor as aforesaid
                        then:
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        (a) The Franchisor shall manage the business on behalf
                        of the personal representative of the Franchisee until
                        such time as a new Franchisee is appointed or the
                        Franchisor terminates this Agreement pursuant to this
                        Clause and during such management period, the Franchisor
                        shall be entitled to the Caretaker fee specified in
                        Schedule 4 below together with the cost of the travel
                        accommodation and subsistence of any employee or other
                        representative of the Company engaged in such management
                        and entitled to …% of the pre-tax profits of the
                        business (such profits to be calculated in accordance
                        with generally accepted accounting policies applied on a
                        consistent basis).
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        (b) Both the Franchisor and the Franchisee’s personal
                        representatives shall try to find a purchaser who shall
                        be acceptable to the Franchisor and if a purchaser is
                        found the Franchisor shall grant to him an Agreement
                        according to Clause 12 above and the Franchisee’s estate
                        shall be entitled to such sum as the purchaser is
                        willing to pay for the grant of such Agreement (after
                        deducting …% thereof which shall be payable to the
                        Franchisor).
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        (c) If such a replacement Agreement has not been entered
                        into within six months from the date of the death of the
                        Franchisee, the Franchisor shall have the option at any
                        time thereafter to terminate this Agreement on paying to
                        the Franchisee’s personal representatives a sum equal to
                        …% of the annual turnover of the last accounting period.
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <br />
                    <br />
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <br />
                    <br />
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        <b>14. Termination</b>
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        14.1 The Franchisor may terminate this Agreement
                        forthwith by notice in writing to the Franchisee:
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        (a) If the Franchisee shall have committed any material
                        breach of his obligations hereunder or shall have failed
                        to remedy any remediable breach within a period of
                        twenty-eight days of the receipt of a notice in writing
                        of the Franchisor requiring him to do so;
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        (b) If the Franchisee shall commit an act of bankruptcy
                        or have a receiving order made against him or make any
                        arrangement or assignment with or for the benefit of his
                        creditors or suffer distress or execution to be levied
                        or threatened on any of its properties;
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        (c) If any sum or document required under the terms of
                        this Agreement is not paid or submitted at the latest
                        within twenty-one days following its due date;
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        (d) If the Franchisee ceases or takes any steps to cease
                        his business;
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        (e) If the Franchisee challenges the Franchisor’s
                        intellectual property rights.
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        14.2 The termination or expiry of this Agreement shall
                        be without prejudice to any rights and obligations
                        conferred or imposed by this Agreement in respect of any
                        period after such termination and shall also be without
                        prejudice to the rights of either party against the
                        other in respect of any antecedent breach of any of the
                        terms and conditions hereof.
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        <b>15. Post termination provisions</b>
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        15.1 In the event of the termination of this Agreement
                        howsoever arising. In order to protect the Franchisor’s
                        intellectual property rights and reputation:
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        (a) the Franchisee shall forthwith return to the
                        Franchisor all stationery and signs bearing the Marks
                        then in its possession whether or not supplied by the
                        Franchisor;
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        (b) the Franchisee shall not at anytime thereafter:
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        (i) disclose or use any confidential information or
                        Know-How related to the business acquired by him during
                        or as a result of this Agreement (save that it shall be
                        allowed to use such Know-How that has come into the
                        public domain by means other than the Franchisee’s
                        breach);
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        (ii) make any use of the Marks;
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        (iii) purport to be a Franchisee of or otherwise
                        associated with the Franchisor;
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        (iv) use any recommendation or reference provided as a
                        result of his work as a Franchisee;
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        15.2 The Franchisee shall not for a period of one year
                        thereafter directly or indirectly be engaged concerned
                        or interested in a business which competes with the
                        Services within a radius often miles from the Premises
                        (save for a financial interest which does not allow it
                        to influence the economic conduct of such a business).
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <br />
                    <br />
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        15.3 The Franchisee shall not for a period of one year
                        thereafter directly or indirectly be engaged concerned
                        or interested in a business similar to the Business
                        which operates within a radius of ten miles from any
                        premises in the United Kingdom from which the Business
                        is being carried on by any franchisee of the Franchisor
                        or by the Franchisor itself (save for a financial
                        interest which does not allow it to influence the
                        economic conduct of such a business).
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        <b>16. Copyright</b>
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        16.1 The copyright and all other rights in the text of
                        the Manual photographs all other documents supplied by
                        the Franchisor and all secret or confidential
                        information contained therein are the property of the
                        Franchisor and the Franchisee undertakes not to copy the
                        Manual photographs and other documents supplied by the
                        Franchisor or to disclose any of its contents or
                        concepts to any other party and not himself to make any
                        direct or indirect use thereof otherwise in providing
                        the Services.
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        16.2 For the purpose of this Clause:
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        (a) The Manual shall be deemed to include the Manual as
                        originally provided to the Franchisee together with all
                        additions and amendments thereto from time to time;
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        (b) Secret or confidential information shall include all
                        confidential information provided to the Franchisee from
                        time to time by memorandum or correspondence or
                        otherwise howsoever appertaining to the provision of the
                        Services and the business of the Franchisor (save for
                        that which has come into the public domain other than
                        through the Franchisee’s own breach).
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        <b>17. Entire agreement</b>
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        17.1 This Agreement and the Manual expresses the entire
                        agreement between the parties hereto which supersedes
                        any other negotiations or agreements on the subject
                        matter hereof and;
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        (a) the parties confirm that the whole of their
                        negotiations and intentions have been included herein
                        within the context of and expressing clearly the
                        requirements of the parties.
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        (b) there are no warranties representations or other
                        matters relied upon by the Franchisee causing his
                        signature hereto which have not been satisfied herein;
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        (c) this Agreement shall not be modified in any way
                        except by a written instrument signed by both parties
                        hereto.
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        <b>18. Waiver</b>
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        18.1 The failure of the Franchisor to exercise any power
                        given to it hereunder or to insist upon strict
                        compliance by the Franchisee with any obligation
                        hereunder and no custom or practice of the parties shall
                        constitute any waiver of any of the Franchisor’s rights
                        under this Agreement. Waiver by the Franchisor of any
                        particular default by the Franchisee shall not affect or
                        impair the Franchisor’s rights in respect of any
                        subsequent default of any kind by the Franchisee nor
                        shall any delay by or omission of the Franchisor to
                        exercise any rights arising from any default of the
                        Franchisee affect or impair the Franchisor’s rights in
                        respect of the said default or any default of any kind.
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <br />
                    <br />
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        <b>19. Severability</b>
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        19.1 If any item or provision contained in this
                        Agreement or any part thereof (in this Clause called the
                        “offending provision”) shall be declared or become
                        unenforceable invalid or illegal for any reason
                        whatsoever, the other terms and provisions of this
                        Agreement shall remain in full force and effect as if
                        this Agreement had been executed without the offending
                        provision appearing herein. In the event that the
                        exclusion of any offending provisions shall in the
                        opinion of the Franchisor adversely affect either the
                        Franchisor’s right to receive payment of fees or
                        remuneration by whatever means payable to the Franchisor
                        or the Franchisor’s Marks and Known-How methods of the
                        business then the Franchisor shall have the right to
                        terminate this Agreement on thirty days’ notice in
                        writing to the Franchisee.
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        <b>20. Warranties</b>
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        20.1 The Franchisee shall make no statements
                        representations or claims and shall give no warranties
                        to any customer or potential customers in respect of the
                        Business save such as may have been specifically
                        authorised by the Franchisor such authority to be given
                        either in writing or in the Manual in force at the
                        relevant time. The Franchisee hereby undertakes with the
                        Franchisor to keep it fully and effectively indemnified
                        against all claims demands losses expenses and costs
                        which the Franchisor may incur as a result of any breach
                        by the Franchisee of this provision or of any other
                        provision contained in this Agreement.
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        <b>21. Improvements</b>
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        21.1 The Franchisee shall use all reasonable endeavours
                        to conceive and develop new and improved methods of
                        carrying out the Services and improvements in the
                        apparatus operating procedure and other additions or
                        modifications to the Services (hereinafter referred to
                        as “Improvements”). The Franchisee agrees to disclose
                        fully any Improvements to the Franchisor and the
                        Franchisor shall determine the feasibility and
                        desirability of incorporating them into the relevant
                        Services. Any non-patentable Improvement approved by the
                        Franchisor may be used by the Franchisor and all
                        Franchisees of the Franchisor without any obligation to
                        the Franchisee for royalties or otherwise;
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        21.2 The Franchisee shall give the Franchisor the right
                        of first refusal at a fair price (to be fixed by an
                        appropriate independent arbitrator in the event of
                        disagreement) of all rights in any Improvement which is
                        capable of being patented.
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        <b>22. Force majeure</b>
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        22.1 This Agreement shall be suspended during the period
                        and to the extent of such period that the Franchisor
                        reasonably believes any party to this agreement is
                        prevented or hindered from complying with its
                        obligations under any part of it, by any cause beyond
                        its reasonable control including but not restricted to
                        strikes, war, civil disorder, and natural disasters. If
                        such a period of suspension exceeds 180 days, then the
                        Franchisor shall upon giving written notice to the
                        Franchisee, be able to require that:
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        (a) all money due to the Franchisor shall be paid
                        immediately, and
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        (b) the Franchisee shall immediately cease trading,
                        until further notice from the Franchisor.
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        <b>23. Arbitration</b>
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        23.1 The parties shall use their best efforts to
                        negotiate in good faith and settle amicably any question
                        or dispute, including any claim, construction, meaning
                        or effect of this Agreement or concerning the rights and
                        liabilities of the parties thereto or any other matter
                        connected to this Agreement.
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        23.2 If the parties are unable to resolve such question
                        or dispute within 30 days (or such further period as the
                        parties shall agree in writing), the question or dispute
                        shall be settled finally by arbitration in accordance
                        with the Arbitration and Conciliation Act, Chapter A18,
                        Laws of the Federation of Nigeria, 2004 (or any
                        amendment thereto) and the Arbitration Rules connected
                        thereto.
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        23.3 The arbitral tribunal shall be constituted by a
                        sole arbitrator to be appointed jointly by the parties
                        in writing; if the parties are unable to agree on the
                        choice of the sole arbitrator within seven days after
                        the service of a notice of arbitration by one party to
                        the other, on the application of either party, the sole
                        arbitrator shall be appointed by the Chartered Institute
                        of Arbitrators Nigeria Limited by Guarantee (trading as
                        Nigerian Institute of Chartered Arbitrators).
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        23.4 The place of the arbitration shall be Lagos,
                        Nigeria; and the arbitration shall be governed by the
                        laws of the Federal Republic of Nigeria. The language of
                        the arbitration shall be English Language.
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        23.5 The parties hereto agree to be bound by the terms
                        of such arbitration and to bear the costs of such
                        arbitration in equal shares.
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        <b>24. Notices</b>
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        24.1 Any notice required to be given for the purposes of
                        this Agreement shall be given by sending the same by
                        prepaid First-Class post, e-mail, or fascimilie to, or
                        by delivering the same by hand at, the relevant address
                        shown in this Agreement or such other address as shall
                        have been notified (in accordance with this Clause) by
                        the party concerned as being its address for the
                        purposes of this Clause.
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        24.2 Any notice so sent by post shall be deemed to have
                        been served two days after posting and in proving this
                        service it shall be sufficient proof that the Notice was
                        properly addressed and stamped and put into the post.
                        Any notice sent by e-mail or fascimilie shall be deemed
                        to have been served on the next day following the date
                        of despatch thereof which is a business day.
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <br />
                    <br />
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        <b>IN WITNESS OF WHICH</b>
                      </font>
                    </font>
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        the parties have executed this Agreement in the manner
                        below the day and year first above written.
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <br />
                    <br />
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        <b>SIGNED </b>
                      </font>
                    </font>
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        by the within named{" "}
                      </font>
                    </font>
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        <b>FRANCHISOR</b>
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    ..............................
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    {insertInput(nameOfFranchisor)}
                  </p>

                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <br />
                    <br />
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        <b>IN THE PRESENCE OF:</b>
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        Name: {" "}
                          <font ref={nameOfFranchisorWitnessRef}>
                            {insertInput(nameOfFranchisorWitness)}
                          </font>
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        Address: {" "}
                          <font ref={addressOfFranchisorRef}>
                            {insertInput(addressOfFranchisor)}
                          </font>
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        Occupation: {" "}
                          <font ref={occupationOfFranchisorWitnessRef}>
                            {insertInput(occupationOfFranchisorWitness)}
                          </font>
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        Signature: ………………………………………………………
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        Date: {" "}
                          <font ref={dateOfFranchisorWitnessRef}>
                            {insertInput(dateOfFranchisorWitness)}
                          </font>
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <br />
                    <br />
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        <b>SIGNED</b>
                      </font>
                    </font>
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        by the within named
                      </font>
                    </font>
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        <b>FRANCHISEE</b>
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    …………………………………………
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        .
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font>{insertInput(nameOfFranchisee)}</font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <br />
                    <br />
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        <b>IN THE PRESENCE OF:</b>
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        Name: {" "}
                          <font ref={nameOfFranchiseeWitnessRef}>
                            {insertInput(nameOfFranchiseeWitness)}
                          </font>
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        Address: {" "}
                          <font ref={addressOfFranchiseeWitnessRef}>
                            {insertInput(addressOfFranchiseeWitness)}
                          </font>
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        Occupation: {" "}
                          <font ref={occupationOfFranchiseeWitnessRef}>
                            {insertInput(occupationOfFranchiseeWitness)}
                          </font>
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        Signature: ……………………………………………………..
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        Date: {" "}
                          <font ref={dateOfFranchiseeWitnessRef}>
                            {insertInput(dateOfFranchiseeWitness)}
                          </font>
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <br />
                    <br />
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <br />
                    <br />
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <br />
                    <br />
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <br />
                    <br />
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <br />
                    <br />
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <br />
                    <br />
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <br />
                    <br />
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <br />
                    <br />
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <br />
                    <br />
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <br />
                    <br />
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <br />
                    <br />
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <br />
                    <br />
                  </p>
                  <p
                    align="center"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        <b>FIRST SCHEDULE</b>
                      </font>
                    </font>
                  </p>
                  <p
                    align="center"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        <b>(“The Premises”)</b>
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <br />
                    <br />
                  </p>
                  <p
                    align="center"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        <b>2ND SCHEDULE</b>
                      </font>
                    </font>
                  </p>
                  <p
                    align="center"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        <b>(“The Marks”)</b>
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <br />
                    <br />
                  </p>
                  <p
                    align="center"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        <b>THIRD SCHEDULE</b>
                      </font>
                    </font>
                  </p>
                  <p
                    align="center"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        <b>(“Payments”)</b>
                      </font>
                    </font>
                  </p>
                  <p
                    align="center"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <br />
                    <br />
                  </p>
                  <p
                    align="center"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        <b>FOURTH SCHEDULE</b>
                      </font>
                    </font>
                  </p>
                  <p
                    align="center"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        <b>(“Caretaker Fee”)</b>
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </Layout>
  );
}

export default Template13FA;
