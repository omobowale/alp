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
import { insertInput } from "../helperfunctions/jsx";
import {
  extractResponses,
  getCurrentDetails,
  loadTemplate,
  saveCurrentDetails,
} from "../helperfunctions/templates";
import Layout from "../Layout";
import Start from "../pages/Start";

function Template23POACTI(props) {
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
  const nameOfDonorRef = useRef();
  const nameOfDoneeRef = useRef();
  const addressOfDonorRef = useRef();
  const addressOfDoneeRef = useRef();
  const item1Ref = useRef();
  const item2Ref = useRef();
  const item3Ref = useRef();
  const item4Ref = useRef();
  const item5Ref = useRef();


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

  const [nameOfDonor, setNameOfDonor] = useState(
    getCurrentValue("nameOfDonor")
  );
  const [nameOfDonee, setNameOfDonee] = useState(
    getCurrentValue("nameOfDonee")
  );
  const [addressOfDonor, setAddressOfDonor] = useState(
    getCurrentValue("addressOfDonor")
  );
  const [addressOfDonee, setAddressOfDonee] = useState(
    getCurrentValue("addressOfDonee")
  );
  const [item1, setItem1] = useState(getCurrentValue("item1"));
  const [item2, setItem2] = useState(getCurrentValue("item2"));
  const [item3, setItem3] = useState(getCurrentValue("item3"));
  const [item4, setItem4] = useState(getCurrentValue("item4"));
  const [item5, setItem5] = useState(getCurrentValue("item5"));

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
      question: "Enter the full name of company (donor)",
      action: setNameOfDonor,
      key: "nameOfDonor",
      response: nameOfDonor,
      ref: nameOfDonorRef,
    },
    {
      type: "input",
      question: "Enter the full address of company (donor)",
      action: setAddressOfDonor,
      key: "addressOfDonor",
      response: addressOfDonor,
      ref: addressOfDonorRef,
    },
    {
      type: "input",
      question: "Enter the full name of donee",
      action: setNameOfDonee,
      key: "nameOfDonee",
      response: nameOfDonee,
      ref: nameOfDoneeRef,
    },
    {
      type: "input",
      question: "Enter the full address of donee",
      action: setAddressOfDonee,
      key: "addressOfDonee",
      response: addressOfDonee,
      ref: addressOfDoneeRef,
    },

    {
      type: "input",
      question:
        "Enter the things that you want your donee to be able to do <br /> 1. ",
      action: setItem1,
      key: "item1",
      response: item1,
      ref: item1Ref,
    },
    {
      type: "input",
      question:
        "Enter the things that you want your donee to be able to do <br /> 2. ",
      action: setItem2,
      key: "item2",
      response: item2,
      ref: item2Ref,
    },
    {
      type: "input",
      question:
        "Enter the things that you want your donee to be able to do <br /> 3. ",
      action: setItem3,
      key: "item3",
      response: item3,
      ref: item3Ref,
    },
    {
      type: "input",
      question:
        "Enter the things that you want your donee to be able to do <br /> 4. ",
      action: setItem4,
      key: "item4",
      response: item4,
      ref: item4Ref,
    },
    {
      type: "input",
      question:
        "Enter the things that you want your donee to be able to do <br /> 5. ",
      action: setItem5,
      key: "item5",
      response: item5,
      ref: item5Ref,
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
                  className="template-container"
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
                          <font ref={dateRef}>
                            {insertInput(getDayOfMonth(getActualDate(date)))}{" "}
                            Day of{" "}
                            {insertInput(getMonthAndYear(getActualDate(date)))}
                          </font>
                          , I,
                        </font>
                      </font>
                      <font color="">
                        <font face="Garamond, serif">
                          {" "}
                          <font
                            size={3}
                            style={{ fontSize: "12pt" }}
                            ref={nameOfDonorRef}
                          >
                            {insertInput(nameOfDonor)}
                          </font>{" "}
                        </font>
                      </font>
                      <font face="Garamond, serif">
                        <font size={3} style={{ fontSize: "12pt" }}>
                          <font size={3} style={{ fontSize: "12pt" }}>
                            a company duly incorporated under the Companies{" "}
                            {"&"} Allied Matters Act 2020 , having its
                            registered office at
                          </font>{" "}
                        </font>
                      </font>
                      <font color="">
                        <font face="Garamond, serif">
                          <font
                            size={3}
                            style={{ fontSize: "12pt" }}
                            ref={addressOfDonorRef}
                          >
                            {insertInput(addressOfDonor)}
                          </font>
                        </font>
                      </font>
                      <font face="Garamond, serif">
                        <font size={3} style={{ fontSize: "12pt" }}>
                          {" "}
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
                          <b>APPOINT </b>
                        </font>
                      </font>
                      <font face="Garamond, serif">
                        <font
                          size={3}
                          style={{ fontSize: "12pt" }}
                          ref={nameOfDoneeRef}
                        >
                          {insertInput(nameOfDonee)}
                        </font>
                      </font>

                      <font face="Garamond, serif">
                        <font size={3} style={{ fontSize: "12pt" }}>
                          , of{" "}
                        </font>
                      </font>
                      <font color="">
                        <font face="Garamond, serif">
                          <font
                            size={3}
                            style={{ fontSize: "12pt" }}
                            ref={addressOfDoneeRef}
                          >
                            {insertInput(addressOfDonee)}{" "}
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
                          ) to be my lawful attorney and on my behalf and in my
                          name to do all and any of the following:
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
                          <font
                            size={3}
                            style={{ fontSize: "12pt" }}
                            ref={item1Ref}
                          >
                            {insertInput(item1)}
                          </font>
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
                          <font
                            size={3}
                            style={{ fontSize: "12pt" }}
                            ref={item2Ref}
                          >
                            {insertInput(item2)}
                          </font>
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
                          <font
                            size={3}
                            style={{ fontSize: "12pt" }}
                            ref={item3Ref}
                          >
                            {insertInput(item3)}
                          </font>
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
                          <font
                            size={3}
                            style={{ fontSize: "12pt" }}
                            ref={item4Ref}
                          >
                            {insertInput(item4)}
                          </font>
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
                          <font
                            size={3}
                            style={{ fontSize: "12pt" }}
                            ref={item5Ref}
                          >
                            {insertInput(item5)}
                          </font>
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
                          to do all and any other things necessary and
                          incidental for the carrying out of the powers created
                          above
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
                          I, the Donor, have executed this Power of Attorney in
                          the manner below the day and year first above written
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
                            WAS AFFIXED TO THIS DEED AND THE DEED WAS DULY
                            DELIVERED IN THE PRESENCE OF:
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
                  <p
                    align="justify"
                    style={{ lineHeight: "108%", marginBottom: "0.11in" }}
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

export default Template23POACTI;
