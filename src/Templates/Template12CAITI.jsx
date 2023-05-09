import React, { useEffect, useRef, useState } from "react";
import CustomButton from "../commons/Custom/CustomButton";
import CustomQuestionResponse from "../commons/Custom/CustomQuestionResponse";
import { blueColor } from "../constants/colors";
import { placeholderMarker } from "../constants/strings";
import {
  getActualDate,
  getDayOfMonth,
  getMonthAndYear,
} from "../helperfunctions/date";
import { insertInput } from "../helperfunctions/jsx";
import Layout from "../Layout";
import CheckoutPage from "../pages/CheckoutPage";
import Start from "../pages/Start";
import TemplateIcon from "../assets/frame_1.png";
import {
  extractResponses,
  getCurrentDetails,
  loadTemplate,
  saveCurrentDetails,
} from "../helperfunctions/templates";
import Dialog from "../commons/Custom/Dialog";

function Template12CAITI(props) {
  //question index
  const [index, setIndex] = useState(0);

  //refs
  const [templateLoading, setTemplateLoading] = useState(false);
  const [templateDetails, setTemplateDetails] = useState(null);
  const [showStart, setShowStart] = useState(true);
  const currentDetails = getCurrentDetails();
  const [targetRef, setRef] = useState();
  const dateRef = useRef();
  const nameOfFirstCompanyRef = useRef();
  const addressOfConsultantRef = useRef();
  const nameOfSecondCompanyRef = useRef();
  const addressOfClientRef = useRef();
  const clientNeedsRef = useRef();
  const consultantServiceRef = useRef();
  const areaOfExpertiseRef = useRef();
  const consultantRatePerHourRef = useRef();
  const descriptionOfInformationToBeSharedRef = useRef();
  const dateOfTerminationOfAgreementRef = useRef();
  const consultantAddressOfCommunicationRef = useRef();
  const clientAddressOfCommunicationRef = useRef();
  const nameOfConsultantRef = useRef();
  const nameOfConsultantWitnessRef = useRef();
  const addressOfConsultantWitnessRef = useRef();
  const occupationOfConsultantWitnessRef = useRef();
  const dateOfConsultantWitnessRef = useRef();
  const nameOfClientRef = useRef();
  const nameOfClientWitnessRef = useRef();
  const addressOfClientWitnessRef = useRef();
  const occupationOfClientWitnessRef = useRef();
  const dateOfClientWitnessRef = useRef();

  const getCurrentValue = (key) => {
    let result = placeholderMarker;
    if (currentDetails) {
      result = currentDetails.find((detail) => detail.key == key)?.response;
    }

    return result;
  };

  //fields to be filled
  const [date, setDate] = useState(getCurrentValue("date"));
  const [nameOfFirstCompany, setNameOfFirstCompany] = useState(
    getCurrentValue("nameOfFirstCompany")
  );
  const [addressOfFirstCompany, setAddressOfFirstCompany] = useState(
    getCurrentValue("addressOfFirstCompany")
  );
  const [addressOfConsultant, setAddressOfConsultant] = useState(
    getCurrentValue("addressOfConsultant")
  );
  const [addressOfClient, setAddressOfClient] = useState(
    getCurrentValue("addressOfClient")
  );
  const [clientNeeds, setClientNeeds] = useState(
    getCurrentValue("clientNeeds")
  );
  const [consultantService, setConsultantService] = useState(
    getCurrentValue("consultantService")
  );
  const [areaOfExpertise, setAreaOfExpertise] = useState(
    getCurrentValue("areaOfExpertise")
  );
  const [consultantRatePerHour, setConsultantRatePerHour] = useState(
    getCurrentValue("consultantRatePerHour")
  );
  const [dateOfTerminationOfAgreement, setDateOfTerminationOfAgreement] =
    useState(getCurrentValue("dateOfTerminationOfAgreement"));
  const [
    descriptionOfInformationToBeShared,
    setDescriptionOfInformationToBeShared,
  ] = useState(getCurrentValue("descriptionOfInformationToBeShared"));
  const [
    consultantAddressOfCommunication,
    setConsultantAddressOfCommunication,
  ] = useState(getCurrentValue("consultantAddressOfCommunication"));
  const [clientAddressOfCommunication, setClientAddressOfCommunication] =
    useState(getCurrentValue("clientAddressOfCommunication"));

  const [nameOfConsultant, setNameOfConsultant] = useState(
    getCurrentValue("nameOfConsultant")
  );
  const [nameOfConsultantWitness, setNameOfConsultantWitness] = useState(
    getCurrentValue("nameOfConsultantWitness")
  );
  const [addressOfConsultantWitness, setAddressOfConsultantWitness] = useState(
    getCurrentValue("addressOfConsultantWitness")
  );
  const [occupationOfConsultantWitness, setOccupationOfConsultantWitness] =
    useState(getCurrentValue("occupationOfConsultantWitness"));
  const [dateOfConsultantWitness, setDateOfConsultantWitness] = useState(
    getCurrentValue("dateOfConsultantWitness")
  );

  const [nameOfClient, setNameOfClient] = useState(
    getCurrentValue("nameOfClient")
  );
  const [nameOfClientWitness, setNameOfClientWitness] = useState(
    getCurrentValue("nameOfClientWitness")
  );
  const [addressOfClientWitness, setAddressOfClientWitness] = useState(
    getCurrentValue("addressOfClientWitness")
  );
  const [occupationOfClientWitness, setOccupationOfClientWitness] = useState(
    getCurrentValue("occupationOfClientWitness")
  );
  const [dateOfClientWitness, setDateOfClientWitness] = useState(
    getCurrentValue("dateOfClientWitness")
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
      question: "Enter the full name of the consultant",
      action: setNameOfConsultant,
      key: "nameOfConsultant",
      response: nameOfConsultant,
      ref: nameOfConsultantRef,
    },
    {
      type: "input",
      question: "Enter the address of the consultant",
      action: setAddressOfConsultant,
      key: "addressOfConsultant",
      response: addressOfConsultant,
      ref: addressOfConsultantRef,
    },
    {
      type: "input",
      question: "Enter the full name of the client",
      action: setNameOfClient,
      key: "nameOfClient",
      response: nameOfClient,
      ref: nameOfClientRef,
    },
    {
      type: "input",
      question: "Enter the address of the client",
      action: setAddressOfClient,
      key: "addressOfClient",
      response: addressOfClient,
      ref: addressOfClientRef,
    },
    {
      type: "input",
      question: "Enter what the Client needs assistance with",
      action: setClientNeeds,
      key: "clientNeeds",
      response: clientNeeds,
      ref: clientNeedsRef,
    },
    {
      type: "input",
      question: "Enter Consultant's major service",
      action: setConsultantService,
      key: "consultantService",
      response: consultantService,
      ref: consultantServiceRef,
    },
    {
      type: "input",
      question: "Enter Consultant's area of service",
      action: setAreaOfExpertise,
      key: "areaOfExpertise",
      response: areaOfExpertise,
      ref: areaOfExpertiseRef,
    },
    {
      type: "number",
      question: "Enter Consultant's rate per hour in Naira.",
      action: setConsultantRatePerHour,
      key: "consultantRatePerHour",
      response: consultantRatePerHour,
      ref: consultantRatePerHourRef,
    },
    {
      type: "input",
      question: "Enter description of information to be shared",
      action: setDescriptionOfInformationToBeShared,
      key: "descriptionOfInformationToBeShared",
      response: descriptionOfInformationToBeShared,
      ref: descriptionOfInformationToBeSharedRef,
    },
    {
      type: "date",
      question: "Enter date of termination of agreement.",
      action: setDateOfTerminationOfAgreement,
      key: "dateOfTerminationOfAgreement",
      response: dateOfTerminationOfAgreement,
      ref: dateOfTerminationOfAgreementRef,
    },

    {
      type: "input",
      question:
        "If to Consultant, enter the mail/physical address of communication",
      action: setConsultantAddressOfCommunication,
      key: "consultantAddressOfCommunication",
      response: consultantAddressOfCommunication,
      ref: consultantAddressOfCommunicationRef,
    },
    {
      type: "input",
      question:
        "If to Client, enter the mail/physical address of communication",
      action: setClientAddressOfCommunication,
      key: "clientAddressOfCommunication",
      response: clientAddressOfCommunication,
      ref: clientAddressOfCommunicationRef,
    },
    {
      type: "input",
      question: "Enter full name of Consultant's witness",
      action: setNameOfConsultantWitness,
      key: "nameOfConsultantWitness",
      response: nameOfConsultantWitness,
      ref: nameOfConsultantWitnessRef,
    },
    {
      type: "input",
      question: "Enter address of Consultant's witness",
      action: setAddressOfConsultantWitness,
      key: "addressOfConsultantWitness",
      response: addressOfConsultantWitness,
      ref: addressOfConsultantWitnessRef,
    },
    {
      type: "date",
      question: "Enter Consultant's witness date",
      action: setDateOfConsultantWitness,
      key: "dateOfConsultantWitness",
      response: dateOfConsultantWitness,
      ref: dateOfConsultantWitnessRef,
    },

    {
      type: "input",
      question: "Enter full name of Client's witness",
      action: setNameOfClientWitness,
      key: "nameOfClientWitness",
      response: nameOfClientWitness,
      ref: nameOfClientWitnessRef,
    },
    {
      type: "input",
      question: "Enter address of Client's witness",
      action: setAddressOfClientWitness,
      key: "addressOfClientWitness",
      response: addressOfClientWitness,
      ref: addressOfClientWitnessRef,
    },
    {
      type: "date",
      question: "Enter Client's witness date",
      action: setDateOfClientWitness,
      key: "dateOfClientWitness",
      response: dateOfClientWitness,
      ref: dateOfClientWitnessRef,
    },
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
                        <b>THIS </b>
                      </font>
                    </font>
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      />
                    </font>
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        <b>CONSULTING AGREEMENT </b>
                      </font>
                    </font>
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        ("
                      </font>
                    </font>
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        <b>the Agreement</b>
                      </font>
                    </font>
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        ") is made this{" "}
                        <font ref={dateRef}>
                          {insertInput(getDayOfMonth(getActualDate(date)))} Day
                          of {insertInput(getMonthAndYear(getActualDate(date)))}
                          ,
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
                        <b> BETWEEN </b>
                      </font>
                    </font>
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      />
                    </font>
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      ></font>
                    </font>
                    <font>
                      <font face="Garamond, serif">
                        <font
                          size="3"
                          style={{
                            fontSize: "12pt",
                          }}
                          ref={nameOfConsultantRef}
                        >
                          {insertInput(nameOfConsultant)}
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
                        {" "}
                        of{" "}
                      </font>
                    </font>
                    <font>
                      <font face="Garamond, serif">
                        <font
                          size="3"
                          style={{
                            fontSize: "12pt",
                          }}
                          ref={addressOfConsultantRef}
                        >
                          {insertInput(addressOfConsultant)}
                        </font>
                      </font>
                    </font>
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      ></font>
                    </font>
                    <font face="Garamond, serif">
                      {" "}
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        ("
                      </font>
                    </font>
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        <b>the Consultant</b>
                      </font>
                    </font>
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        ") of the first part,
                      </font>
                    </font>
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      ></font>
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
                        <b> AND </b>
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
                      ></font>
                    </font>
                    <font>
                      <font face="Garamond, serif">
                        <font
                          size="3"
                          style={{
                            fontSize: "12pt",
                          }}
                          ref={nameOfClientRef}
                        >
                          {insertInput(nameOfClient)}
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
                        {" "}
                        of{" "}
                      </font>
                    </font>
                    <font>
                      <font face="Garamond, serif">
                        <font
                          size="3"
                          style={{
                            fontSize: "12pt",
                          }}
                          ref={addressOfClientRef}
                        >
                          {insertInput(addressOfClient)}
                        </font>{" "}
                      </font>
                    </font>
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      ></font>
                    </font>
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        ("
                      </font>
                    </font>
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        <b>the Client</b>
                      </font>
                    </font>
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        ") of the other part,
                      </font>
                    </font>
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      ></font>
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
                          lineHeight: "108%",
                          marginBottom: "0.11in",
                        }}
                      >
                        <b>WHEREAS </b>
                      </font>
                    </font>
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        the Client needs assistance in{" "}
                        <font ref={clientNeedsRef}>
                          {insertInput(clientNeeds)};
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
                        <b> AND WHEREAS</b>
                      </font>
                    </font>
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        , the Consultant has agreed to perform consulting work
                        for the Client in providing{" "}
                        <font ref={consultantServiceRef}>
                          {insertInput(consultantService)}
                        </font>
                        {""} and consulting services and other related
                        activities as directed by the Client;
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
                        <b>NOW, THEREFORE, THE PARTIES AGREE AS FOLLOWS:</b>
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
                        <b>1. Consultant's Services.</b>
                      </font>
                    </font>
                  </p>
                  <p
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      A. The Consultant shall be available and shall provide to
                      the Client professional consulting services in the area of{" "}
                      <font ref={areaOfExpertiseRef}>
                        {insertInput(areaOfExpertise)}
                      </font>{" "}
                      ("
                      <b>Consulting Services</b>
                      ") as requested.
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
                        <b>2. Consideration.</b>
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
                        A. In consideration for the Consulting Services to be
                        performed by the Consultant under this Agreement, the
                        Client will pay the Consultant at the rate of
                      </font>
                    </font>
                    <font face="Times New Roman, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        {" "}
                        <font ref={consultantRatePerHourRef}>
                          ₦{insertInput(consultantRatePerHour)}
                        </font>{" "}
                      </font>
                    </font>
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        per hour for time spent on Consulting Services.
                        Consultant shall submit written, signed reports of the
                        time spent performing Consulting Services, itemizing in
                        reasonable detail the dates on which services were
                        performed, the number of hours spent on such dates and a
                        brief description of the services rendered. The Client
                        shall pay the Consultant the amounts due pursuant to
                        submitted reports within 14 days after such reports are
                        received by the Client.
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
                        B. Additionally, the Client will pay the Consultant for
                        the following expenses incurred while the Agreement
                        between Consultant and the Client subsists:
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
                        (i) All travel expenses to and from all work sites;
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
                        (ii) Meal expenses;
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
                        (iii) Administrative expenses;
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
                        (iv) Lodging Expenses if work demands overnight stays;
                        and
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
                        (v) Miscellaneous travel-related expenses (parking and
                        tolls.)
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
                        The Consultant shall submit written documentation and
                        receipts where available itemizing the dates on which
                        expenses were incurred. The Client shall pay the
                        Consultant the amounts due pursuant to submitted reports
                        within 14 days after a report is received by the Client.
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  ></p>
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
                        <b>3. Independent Contractor.</b>
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
                        A. Nothing herein shall be construed to create an
                        employer-employee relationship between the Client and
                        the Consultant. The Consultant is an independent
                        contractor and not an employee of the Client or any of
                        its subsidiaries or affiliates. The consideration set
                        forth in Clause 2 shall be the sole consideration due
                        the Consultant for the services rendered hereunder. It
                        is understood that the Client will not withhold any
                        amounts for payment of taxes from the compensation of
                        the Consultant hereunder. The Consultant will not
                        represent to be or hold himself/herself out as an
                        employee of the Client.
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
                        <b>4. Confidentiality.</b>
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
                        A. In the course of performing Consulting Services, the
                        parties recognize that the Consultant may come in
                        contact with or become familiar with information which
                        the Client or its subsidiaries or affiliates may
                        consider confidential. This information may include, but
                        is not limited to, information pertaining to
                      </font>
                    </font>
                    <font>
                      <font face="Garamond, serif">
                        {" "}
                        <font
                          size="3"
                          style={{
                            fontSize: "12pt",
                          }}
                          ref={descriptionOfInformationToBeSharedRef}
                        >
                          {insertInput(descriptionOfInformationToBeShared)}
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
                        , which information may be of value to a competitor. The
                        Consultant agrees to keep all such information
                        confidential and not to discuss or divulge it to any
                        third party.
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
                        <b>5. Term.</b>
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
                        A. This Agreement shall commence from the date of
                        execution of this Agreement by the Parties and shall
                        terminate on{" "}
                        <font ref={dateOfTerminationOfAgreementRef}>
                          {insertInput(dateOfTerminationOfAgreement)}
                        </font>
                        , unless earlier terminated by either party hereto.
                        Either party may terminate this Agreement upon Thirty
                        (30) days prior written notice.
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
                        <b>6. Notice.</b>
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
                        A. All notices and other communications required or
                        permitted hereunder or necessary or convenient in
                        connection herewith shall be in writing and shall be
                        deemed to have been given when mailed by certified or
                        registered mail, postage prepaid, or by commercial
                        overnight delivery service addressed as follows.
                      </font>
                    </font>
                  </p>
                  <p
                    align="left"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <font face="Garamond, serif">
                      <font
                        size=""
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        If to the Consultant to:
                      </font>
                    </font>
                  </p>
                  <p
                    align="left"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                    ref={consultantAddressOfCommunicationRef}
                  >
                    {insertInput(consultantAddressOfCommunication)}
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      ></font>
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
                      ></font>
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
                        If to the Client to:
                      </font>
                    </font>
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                    ref={clientAddressOfCommunicationRef}
                  >
                    {insertInput(clientAddressOfCommunication)}
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      ></font>
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
                      ></font>
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
                        Or to such other address as identified by a party to the
                        other in writing.
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
                        <b>7. Miscellaneous.</b>
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
                        A. This Agreement constitutes the entire agreement of
                        the parties with regard to the subject matter hereof,
                        and replaces and supersedes all other agreements or
                        understandings, whether written or oral. No amendment or
                        extension of the Agreement shall be binding unless in
                        writing and signed by both parties.
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
                        B. This Agreement shall be binding upon and shall inure
                        to the benefit of the Consultant and the Client and to
                        the Client's successors and assigns. Nothing in this
                        Agreement shall be construed to permit the assignment by
                        the Consultant of any of its rights or obligations
                        hereunder, and such assignment is expressly prohibited
                        without the prior written consent of the Client.
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
                        <b>8. Severability.</b>
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
                        A. If any term of this Agreement is held by a court of
                        competent jurisdiction to be invalid or unenforceable,
                        then this Agreement, including all of the remaining
                        terms, will remain in full force and effect as if such
                        invalid or unenforceable term had never been included.
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
                        <b>9. Governing Law.</b>
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
                        A. The terms of this Agreement shall be construed and
                        enforced under the laws of the Federal Republic of
                        Nigeria.
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
                        <span lang="en-GB">
                          <b>IN WITNESS WHEREOF </b>
                        </span>
                      </font>
                    </font>
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        <span lang="en-GB">
                          the parties have executed this agreement on the day
                          and year first above written.
                        </span>
                      </font>
                    </font>
                  </p>
                  <p
                    lang="en-GB"
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <br />
                  </p>
                  <p
                    align="justify"
                    style={{
                      lineHeight: "108%",
                      marginBottom: "0.11in",
                    }}
                  >
                    <a name="Hlk88140083" />
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        <span lang="en-GB">
                          <b>SIGNED </b>
                        </span>
                      </font>
                    </font>
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        <span lang="en-GB" />
                      </font>
                    </font>
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        <span lang="en-GB"></span>
                      </font>
                    </font>
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        <span lang="en-GB">by the within named </span>
                      </font>
                    </font>
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        <span lang="en-GB">
                          <b>CONSULTANT</b>
                        </span>
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
                        <span lang="en-GB">
                          <b />
                        </span>
                      </font>
                    </font>
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      ></font>
                    </font>
                    <font>
                      <font face="Garamond, serif">
                        <font
                          size="3"
                          style={{
                            fontSize: "12pt",
                          }}
                          ref={nameOfConsultantRef}
                        >
                          {insertInput(nameOfConsultant, "underline bold")}
                        </font>
                      </font>
                    </font>
                    <br></br>
                    <br></br>
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      ></font>
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
                        <span lang="en-GB">
                          <b>In the presence of;</b>
                        </span>
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
                        Name:{" "}
                        <font ref={nameOfConsultantWitnessRef}>
                          {insertInput(nameOfConsultantWitness)}
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
                        Address:{" "}
                        <font ref={addressOfConsultantWitnessRef}>
                          {insertInput(addressOfConsultantWitness)}
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
                        Occupation:{" "}
                        <font ref={occupationOfConsultantWitnessRef}>
                          {insertInput(occupationOfConsultantWitness)}
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
                        Signature:
                        ............................................................
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
                        Date:{" "}
                        <font ref={dateOfConsultantWitnessRef}>
                          {insertInput(dateOfConsultantWitness)}
                        </font>
                      </font>
                    </font>
                  </p>

                  <p
                    lang="en-GB"
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
                        <span lang="en-GB">
                          <b>SIGNED </b>
                        </span>
                      </font>
                    </font>
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        <span lang="en-GB" />
                      </font>
                    </font>
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        <span lang="en-GB"></span>
                      </font>
                    </font>
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        <span lang="en-GB"> by the within named </span>
                      </font>
                    </font>
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        <span lang="en-GB">
                          <b>CLIENT</b>
                        </span>
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
                        <span lang="en-GB">
                          <b />
                        </span>
                      </font>
                    </font>
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      ></font>
                    </font>
                    <font>
                      <font face="Garamond, serif">
                        <font
                          size="3"
                          style={{
                            fontSize: "12pt",
                          }}
                          ref={nameOfClientRef}
                        >
                          {insertInput(nameOfClient, "underline bold")}
                        </font>
                      </font>
                    </font>
                    <font face="Garamond, serif">
                      <font
                        size="3"
                        style={{
                          fontSize: "12pt",
                        }}
                      ></font>
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
                        <span lang="en-GB">
                          <b>In the presence of;</b>
                        </span>
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
                        Name:{" "}
                        <font ref={nameOfClientWitnessRef}>
                          {insertInput(nameOfClientWitness)}
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
                        Address:{" "}
                        <font ref={addressOfClientWitnessRef}>
                          {insertInput(addressOfClientWitness)}
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
                        Occupation:{" "}
                        <font ref={occupationOfClientWitnessRef}>
                          {insertInput(occupationOfClientWitness)}
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
                        Signature:
                        ............................................................
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
                        Date:{" "}
                        <font ref={dateOfClientWitnessRef}>
                          {insertInput(dateOfClientWitness)}
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
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </Layout>
  );
}

export default Template12CAITI;
