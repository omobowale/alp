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

function Template14LTITC(props) {
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
  const percentageOfTurnoverRef = useRef();
  const amountPerAnnumRef = useRef();

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
  const [percentageOfTurnover, setPercentageOfTurnover] = useState(
    getCurrentValue("percentageOfTurnover")
  );
  const [amountPerAnnum, setAmountPerAnnum] = useState(
    getCurrentValue("amountPerAnnum")
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
      action: setAreaOfExpertise,
      key: "areaOfExpertise",
      response: areaOfExpertise,
      ref: areaOfExpertiseRef,
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
      type: "number",
      question:
        "Enter % of previous month's gross turnover the Franchisee must pay on monthly basis",
      action: setPercentageOfTurnover,
      key: "percentageOfTurnover",
      response: percentageOfTurnover,
      ref: percentageOfTurnoverRef,
    },
    {
      type: "number",
      question:
        "Enter the amount per annum the Franchisee must pay upon receiving a written notice",
      action: setAmountPerAnnum,
      key: "amountPerAnnum",
      response: amountPerAnnum,
      ref: amountPerAnnumRef,
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
    <Layout showLoader={templateLoading}>
      {templateDetails && (
        <>
          {showStart && (
            <Start
              details={{
                price: templateDetails?.cost,
                name: templateDetails?.name,
                description: templateDetails?.description,
                label: templateDetails?.label,
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

                  <div>
                    <p>
                      This ****** ***** ********* (**** &ldquo;Trust&rdquo;)
                      made this ______ day of ______ 20 ___ BY AND BETWEEN,
                      __________________ of ________________________________,
                      (the &ldquo;Grantor&rdquo;), AND ________________________
                      ,a company duly incorporated under the laws of the Federal
                      ******** of Nigeria with its office at
                      ________________________ (the &ldquo;Trustee&rdquo;, which
                      expression shall where the context admits ******* its
                      successors in title and assigns)
                    </p>
                    <p>THIS AGREEMENT WITNESSES AS FOLLOWS:</p>
                    <p>PART I</p>
                    <p>TRUST PROPERTY</p>
                    <p>
                      *** Grantor has, or upon the execution of this Trust
                      immediately will, transfer the assets listed in Schedule A
                      hereto as a gift and without consideration.
                    </p>
                    <p>**** II</p>
                    <p>PURPOSE OF TRUST</p>
                    <p>
                      A. The purpose of this Trust is to: (Check all that apply)
                    </p>
                    <p>
                      ☐ Manage *** ******* the assets and property ** the
                      Grantor &nbsp;
                    </p>
                    <p>
                      ☐ ********** the assets and property of *** Grantor upon
                      the Grantor&rsquo;s death
                    </p>
                    <p>
                      ☐Other:
                      &nbsp;____________________________________________________________
                    </p>
                    <p>
                      B. During the ******** of *** Grantor, *** Trustee, as
                      defined herein, shall manage this ***** with *** interests
                      *** well-being of the Grantor in mind. Therefore, the
                      ******* goal ** the Trustee will ** to ******* the value
                      of the Grantor&apos;s assets and ******** and the
                      ********* goal **** ** to grow and ******** the value of
                      the Grantor&apos;s assets and property.
                    </p>
                    <p>PART III</p>
                    <p>FUNDING OF TRUST</p>
                    <p>
                      *** assets *** property listed in Schedule A have been
                      transferred or will be transferred by *** Grantor to this
                      Trust. All such ****** *** property transferred to this
                      Trust at any given time will be ****** &ldquo;Trust
                      Property&rdquo;.
                    </p>
                    <p>PART IV</p>
                    <p>AMENDMENT OR REVOCATION</p>
                    <p>
                      A. The Grantor expressly reserves *** right to revoke or
                      ***** this ***** at any **** during the Grantor&apos;s
                      lifetime. A revocation must be in writing or in any manner
                      allowed under law. Any ********* must ** in writing and
                      signed by the Grantor. **** power is personal to the
                      Grantor and cannot ** ******** unless the Grantor
                      specifically grants such authority in a power of attorney.
                      Upon *** death ** the Grantor, this ***** shall become
                      irrevocable and cannot be amended.
                    </p>
                    <p>
                      B. *** revocation or amendment shall only be valid ****
                      the delivery of such revocation or amendment by the
                      Grantor to the Trustee. The Trustee shall transfer or
                      ******* the Trust Property, ** take any other actions
                      necessary, to facilitate the Grantor&apos;s directions in
                      the revocation or amendment.
                    </p>
                    <p>**** V</p>
                    <p>TRUSTEE</p>
                    <p>A. The ******* trustee will be: (Check one)</p>
                    <p>
                      ☐ &nbsp; The Grantor. The ******* ******* will **
                      ________________________ (the &ldquo;Trustee&rdquo;). Upon
                      the death or incapacity of the Grantor, the ******* will
                      be ________________________ (*** &ldquo;Successor
                      Trustee&rdquo;).&nbsp;
                    </p>
                    <p>
                      ☐ &nbsp; A person ***** than the Grantor. The initial
                      trustee will be ________________________ (the
                      &ldquo;Trustee&rdquo;). If the Trustee is unable or
                      unwilling ** serve, *** trustee will be
                      ________________________ (the &ldquo;Successor
                      Trustee&rdquo;).&nbsp;
                    </p>
                    <p>
                      ☐ People other than the Grantor. The initial trustees will
                      be ___________________(collectively, the
                      &quot;Trustee&quot;), *** **** act as co-trustees of this
                      Trust. If the Trustee is unable ** ********* to serve, the
                      trustee will be ________________________ (the
                      &ldquo;Successor Trustee&rdquo;).&nbsp;
                    </p>
                    <p>
                      B. ** *** Successor ******* is unable or unwilling to
                      serve, the backup ********* trustee will be
                      ________________________ (&ldquo;Backup *********
                      Trustee&rdquo;).&nbsp;
                    </p>
                    <p>
                      C. As **** in this Trust, the term &ldquo;Trustee&rdquo;
                      includes all trustees and co-trustees, whether appointed
                      now or hereafter appointed.
                    </p>
                    <p>D. ************ (Check one)</p>
                    <p>
                      ☐ &nbsp; The Trustee shall NOT ** entitled to receive any
                      compensation for the services performed ***** this Trust.
                    </p>
                    <p>
                      ☐ &nbsp; The Trustee ***** be entitled to *******
                      reasonable compensation for the services performed under
                      this Trust.
                    </p>
                    <p>
                      ☐ The Trustee ***** be ******** to receive reasonable
                      compensation in the amount of ₦______________ for the
                      services performed under **** Trust.&nbsp;
                    </p>
                    <p>
                      E. All reasonable expenses properly incurred ** ***
                      ******* in the management of this Trust shall be
                      reimbursed ** the Trustee or paid out of *** ****** or
                      property of this Trust.
                    </p>
                    <p>F. The Trustee (Check one)</p>
                    <p>
                      ☐ shall not be required to furnish a **** ** other
                      security for *** faithful *********** of *** or *** ******
                      ** the Trustee.
                    </p>
                    <p>
                      ☐ shall be required to furnish a bond or other security
                      for *** faithful *********** ** his or her duties as the
                      Trustee.
                    </p>
                    <p>
                      G. The Trustee **** not be liable for any actions taken in
                      good ***** in the management of this ***** or for any act
                      or failure to act of a prior Trustee. Any exercise or
                      non-exercise of any discretionary powers by the Trustee
                      will be binding on *** parties.
                    </p>
                    <p>PART VI</p>
                    <p>TRUSTEE&rsquo;S POWERS</p>
                    <p>
                      A. The ******* *** discretionary power to act on behalf of
                      this Trust. This discretionary power **** be exercised in
                      good faith and ** accordance with the ***** and purposes
                      of this Trust. The ******* ***** always act in best
                      interests of this Trust.
                    </p>
                    <p>
                      B. *** ******* shall have all powers *** authority
                      conferred to a trustee by the State&rsquo;s law governing
                      this Trust.
                    </p>
                    <p>
                      C. The Trustee shall have all powers granted under this
                      Part EXCEPT the following powers: (Check all that
                      apply)&nbsp;
                    </p>
                    <p>
                      ☐ Collect Trust Property and accept or reject additions to
                      Trust Property from *** Grantor or *** other person.&nbsp;
                    </p>
                    <p>
                      ☐ Acquire or **** Trust Property, for cash ** on credit,
                      at public or private sale.&nbsp;
                    </p>
                    <p>
                      ☐ Exchange, partition, or otherwise ****** the character
                      of ***** Property.&nbsp;
                    </p>
                    <p>
                      ☐ Deposit ***** belonging to this Trust in an account in a
                      regulated financial-service institution, and open or close
                      such account.&nbsp;
                    </p>
                    <p>
                      ☐ Borrow money on behalf of this Trust, **** ** without
                      security, and mortgage or ****** Trust Property for a
                      ****** ****** ** extending beyond *** duration ** this
                      Trust.&nbsp;
                    </p>
                    <p>
                      ☐ **** respect to an interest of **** Trust in a
                      proprietorship, partnership, limited liability company,
                      ******** trust, corporation, or other form of business or
                      enterprise, continue the business or other enterprise and
                      take *** action that may be taken ** shareholders,
                      members, ** property owners, including merging,
                      dissolving, or otherwise changing the form of business
                      ************ or contributing additional capital.&nbsp;
                    </p>
                    <p>
                      ☐ With respect to ****** or other ********** owned ** ****
                      Trust, exercise the rights of ** absolute owner, including
                      the right to (a) vote, ** give proxies to vote, **** or
                      without power ** substitution, or enter into ** continue a
                      voting ***** agreement, (b) hold a ******** in the name of
                      a nominee or ** other form without disclosure of the trust
                      so **** ***** may pass by delivery, (c) pay calls,
                      assessments, and other sums chargeable or accruing against
                      the securities, and sell or exercise stock subscription or
                      conversion rights, and (d) deposit securities with a
                      depository or other ********* financial-service
                      institution. &nbsp;
                    </p>
                    <p>
                      ☐ With respect ** this Trust&rsquo;s interest ** real
                      property, construct, ** make ordinary ** extraordinary
                      repairs to, *********** to, or improvement in, buildings
                      ** other structures, demolish improvements, raze existing
                      or erect new party walls ** buildings, subdivide or
                      develop land, dedicate land to public use or grant public
                      or private easements, and make or vacate plats and adjust
                      boundaries. &nbsp;
                    </p>
                    <p>
                      ☐ Enter into a lease *** any purpose as lessor ** lessee,
                      including a ***** or other arrangement for exploration and
                      removal of natural resources, with or without the option
                      to purchase ** renew, for a period ****** or extending
                      beyond the ******** of **** Trust. &nbsp;
                    </p>
                    <p>
                      ☐ Grant an option ********* a sale, lease, or other
                      disposition of ***** Property or acquire ** option for the
                      acquisition of Trust Property, including an option
                      exercisable beyond the duration of this Trust, and
                      exercise an option so acquired.
                    </p>
                    <p>
                      ☐ Insure Trust Property against ****** or loss and ******
                      the Trustee, the Trustee&rsquo;s agents, and the
                      beneficiaries against liability arising from the
                      administration of this Trust. &nbsp;
                    </p>
                    <p>
                      ☐ ******* or decline to administer Trust ******** of no
                      value or of insufficient value to justify its collection
                      or continued administration.
                    </p>
                    <p>
                      ☐ With respect ** possible liability for violation of
                      ************* law, (a) inspect or investigate property the
                      Trustee holds or has been asked ** hold, ** property owned
                      or operated by an organization in which the Trustee holds
                      or *** **** ***** to **** an interest, for the purpose of
                      determining the application of environmental law with
                      ******* to *** property, (b) take action to prevent,
                      abate, or ********* ****** any actual or potential
                      violation of any ************* law affecting property held
                      directly or indirectly by the Trustee, whether taken
                      before or after the ********* of a ***** or the initiation
                      of governmental enforcement, (c) decline to accept
                      property **** this Trust or disclaim *** power with
                      respect to property that is or may ** burdened with
                      liability for violation of environmental law, (d)
                      compromise claims against this Trust ***** may ** asserted
                      for ** alleged violation of ************* law, and (e) pay
                      the ******* of *** inspection, review, abatement, or
                      remedial action to comply with environmental law. &nbsp;
                    </p>
                    <p>
                      ☐ Pay or ******* any claim, settle a claim by or against
                      this Trust, and release, in whole or ** part, a claim
                      belonging to this Trust.
                    </p>
                    <p>
                      ☐ Pay taxes, assessments, ************ of the Trustee and
                      ** employees and ****** of this Trust, and other ********
                      incurred in the administration of this Trust.
                    </p>
                    <p>
                      ☐ Exercise elections with respect to federal, state, and
                      local taxes.&nbsp;
                    </p>
                    <p>
                      ☐ Select a **** of payment ***** any employee benefit **
                      retirement plan, annuity, or life insurance payable to ***
                      Trustee, exercise rights thereunder, including exercise of
                      the right to *************** for expenses and against
                      liabilities, and take appropriate action to collect the
                      proceeds.&nbsp;
                    </p>
                    <p>
                      ☐ Make loans out of Trust Property, including loans to a
                      beneficiary on terms *** conditions the Trustee considers
                      ** be fair *** reasonable under circumstances, *** the
                      Trustee has a lien on future distributions for repayment
                      of those loans.&nbsp;
                    </p>
                    <p>
                      ☐ Pledge ***** Property to guarantee loans **** by others
                      to *** beneficiaries.&nbsp;
                    </p>
                    <p>
                      ☐ Appoint a ******* to act in another jurisdiction with
                      respect to Trust Property located in *** *****
                      jurisdiction, confer upon the appointed trustee all of the
                      ****** and duties of the Trustee, require that the
                      appointed trustee furnish security, and ****** any *******
                      so appointed. &nbsp;
                    </p>
                    <p>
                      ☐ *** an amount distributable to a beneficiary who is
                      under a ***** ********** or *** the Trustee reasonably
                      believes is incapacitated, by paying it ******** to ***
                      beneficiary or ******** it *** the beneficiary&rsquo;s
                      benefit or by (a) paying it to *** beneficiary&rsquo;s
                      conservator or guardian, (b) paying ** to the
                      beneficiary&rsquo;s custodian or custodial trustee, and
                      for that purpose, creating a custodianship or *********
                      trust, (c) if the Trustee does not know of a conservator,
                      guardian, custodian, or ********* trustee, paying ** ** an
                      adult ******** ** other person having legal or physical
                      care or ******* of the beneficiary, ** ** expended ** the
                      beneficiary&rsquo;s behalf, ** (d) managing ** as a
                      separate fund ** the beneficiary&rsquo;s behalf, *******
                      ** *** beneficiary&rsquo;s continuing right to ********
                      the distribution. &nbsp;
                    </p>
                    <p>
                      ☐ On distribution of Trust Property or the division or
                      termination of this Trust, **** distributions ** divided
                      or undivided interests, allocate particular assets in
                      proportionate or disproportionate shares, value the *****
                      Property for ***** purposes, and adjust for resulting
                      differences in valuation.
                    </p>
                    <p>
                      ☐ Resolve a dispute concerning the ************** ** this
                      Trust or *** administration by mediation, arbitration, or
                      other procedure for alternative dispute resolution.
                    </p>
                    <p>
                      ☐ Prosecute ** ****** an action, claim, or judicial
                      proceeding in any jurisdiction to protect Trust Property
                      *** the Trustee in the performance of *** Trustee&rsquo;s
                      duties.
                    </p>
                    <p>
                      ☐ Sign *** deliver contracts *** other instruments that
                      *** useful to achieve or facilitate the exercise of the
                      Trustee&rsquo;s powers.
                    </p>
                    <p>
                      ☐ On termination of this Trust, exercise the powers
                      appropriate to **** up the administration of this *****
                      *** ********** Trust Property to the persons entitled to
                      it. &nbsp;
                    </p>
                    <p>
                      ☐ ******** duties and powers, including hiring and/or
                      employing accounts, lawyers, and other experts.&nbsp;
                    </p>
                    <p>
                      ☐ Perform all other acts necessary for the management of
                      this Trust.
                    </p>
                    <p>
                      ☐ Other:
                      ________________________________________________________
                    </p>
                    <p>PART VII</p>
                    <p>CHANGE ** TRUSTEE</p>
                    <p>
                      A. The Trustee may resign at any **** by ****** at least
                      30 days&rsquo; notice ** the Grantor and the co-trustees,
                      ** any.
                    </p>
                    <p>
                      B. The Trustee may be removed ** the Grantor at any time
                      during the Grantor&apos;s lifetime by giving *******
                      notice to the ******* and the co-trustees, ** any. ***
                      Trustee may also be removed by a court or otherwise in
                      accordance with ********** state laws.
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>PART VIII</p>
                    <p>DISTRIBUTIONS DURING GRANTOR&apos;S LIFETIME</p>
                    <p>
                      During the lifetime of the Grantor, the Trustee shall
                      distribute to the ******* as much of the income or
                      interest of **** Trust ** requested ** the Grantor,
                      provided the Grantor is not incapacitated. If the Grantor
                      is incapacitated, the Trustee shall distribute an amount
                      that the Trustee ********** is ********** for the support
                      and *********** of the Grantor.
                    </p>
                    <p>PART IX</p>
                    <p>DEATH OF GRANTOR</p>
                    <p>
                      Upon the death of the Grantor, and after resolution and/**
                      payment of all legal obligations, and debts, *** Trustee
                      will ********** the Trust Property ** ********** with the
                      terms of this Trust.&nbsp;
                    </p>
                    <p>**** X</p>
                    <p>SPECIFIC GIFTS</p>
                    <p>(***** one)</p>
                    <p>☐ ******** gifts will NOT ** listed.</p>
                    <p>
                      ☐ A. Upon the death of the Grantor, the Grantor intends
                      the ******** Trust ******** listed in ******** B to be
                      distributed as described therein.
                    </p>
                    <p>
                      ☐ B. If a specific gift as listed in ******** B ** no
                      longer part of the Trust Property, such specific gift
                      shall be void.
                    </p>
                    <p>
                      ☐ C. If any beneficiary as ***** in ******** B is **
                      longer living at the time ** distribution, **** gift shall
                      become part of the residual assets of this ***** and be
                      *********** with the remaining residual assets.&nbsp;
                    </p>
                    <p>PART XI</p>
                    <p>CHILDREN&rsquo;S SUBTRUST</p>
                    <p>(Check one)</p>
                    <p>
                      ☐ The Grantor does NOT have children. / The Grantor has
                      children but does NOT want to include a sub-trust for the
                      Grantor&rsquo;s child(ren).
                    </p>
                    <p>☐ The Grantor has one child.</p>
                    <p>
                      A. Upon *** death of the Grantor, the Trust ********
                      listed in Schedule C of **** Trust shall be ****** in a
                      sub-trust (the &ldquo;Children&rsquo;s sub-trust&rdquo;)
                      *** *** Grantor&rsquo;s child, _________ until the child:
                      (Check one)
                    </p>
                    <p>
                      ☐ &nbsp; Reaches a certain age. Reaches the age of
                      __________.
                    </p>
                    <p>
                      ☐ &nbsp; Reaches a certain milestone.
                      _____________________________________________________
                      _____________________________________________________________
                      [Describe milestone]
                    </p>
                    <p>
                      ☐ &nbsp; ******* a ******* *** and milestone. Reaches the
                      age of __________ and _______________
                      _____________________________________________________________
                      [Describe milestone]
                    </p>
                    <p>
                      B. The Trustee shall ********** the principal or net
                      income from the Children&rsquo;s Sub-trust to the ***** as
                      the Trustee deems ** reasonable for their support,
                      maintenance, and education. The Trustee ***** make
                      distributions to the child in any amounts and at *** time,
                      at his or her discretion.
                    </p>
                    <p>
                      C. When the child reaches (***** one) ☐ the age ☐ the
                      milestone ☐ both the age and the ********* as described in
                      Section A above, the Trustee shall distribute the
                      principal and net income of the Children&rsquo;s Sub-trust
                      ** the child and the Children&rsquo;s Sub-trust **** be
                      terminated.
                    </p>
                    <p>
                      D. If *** child does not ******* the Grantor, the property
                      in the Children&rsquo;s Sub-trust ***** become part of the
                      residual assets of **** Trust.
                    </p>
                    <p>☐ &nbsp; The Grantor has more than one child.</p>
                    <p>
                      A. Upon the ***** of the Grantor, the ***** Property
                      listed in Schedule C ** this Trust shall ** placed in a
                      sub-trust (the &ldquo;Children&rsquo;s sub-trust&rdquo;)
                      for the Grantor&rsquo;s children, _________ ***** each
                      child: (Check one)
                    </p>
                    <p>
                      ☐ &nbsp; Reaches a certain age. ******* the age of
                      __________.
                    </p>
                    <p>
                      ☐ &nbsp; Reaches a certain milestone.
                      _____________________________________________________
                      _____________________________________________________________
                      [******** milestone]
                    </p>
                    <p>
                      ☐ &nbsp; Reaches a ******* *** and milestone. Reaches ***
                      *** of __________ and _______________
                      _____________________________________________________________
                      [******** milestone]
                    </p>
                    <p>
                      B. The Trustee shall distribute the principal or net
                      income from *** Children&rsquo;s Sub-trust to the children
                      as *** Trustee deems is reasonable *** their support,
                      maintenance, and education. The Trustee shall make
                      ************* to *** children in any amounts and ** ***
                      time, at his or *** discretion.
                    </p>
                    <p>
                      C. When the youngest child reaches (Check one) ☐ &nbsp;
                      the age &nbsp; ☐ &nbsp; the milestone &nbsp; ☐ &nbsp; ****
                      the age and the milestone as described in Section A above,
                      the Trustee shall distribute the principal *** *** income
                      of the Children&rsquo;s Sub-trust to the ******** ** equal
                      shares and the Children&rsquo;s Sub-trust will be
                      terminated.
                    </p>
                    <p>
                      D. If no children survive the Grantor, the property ** the
                      Children&rsquo;s Sub-trust shall become part of the
                      residual ****** of this Trust.
                    </p>
                    <p>PART XII</p>
                    <p>BENEFICIARIES</p>
                    <p>
                      A. Any Trust Property *** otherwise distributed under ***
                      terms of **** ***** or other residual assets of this *****
                      shall be distributed as described in Schedule D hereto.
                    </p>
                    <p>
                      B. Any beneficiary named in Schedule D must survive the
                      ******* by at least 30 days to receive the distribution of
                      Trust Property. If a beneficiary does not survive the
                      Grantor by at least 30 days, that beneficiary&rsquo;s
                      Trust Property shall ****** part ** the residual assets of
                      **** Trust.
                    </p>
                    <p>
                      C. If any Trust Property ** left ** two or more
                      beneficiaries, such beneficiaries share *** distribution
                      equally, unless stated otherwise.
                    </p>
                    <p>
                      D. ** any individual ** not left property or is otherwise
                      omitted from this Trust, such omission **
                      intentional.&nbsp;
                    </p>
                    <p>**** XIII</p>
                    <p>PET TRUST</p>
                    <p>(Check one)</p>
                    <p>
                      ☐ The Grantor does NOT **** pets. / Upon the death of the
                      Grantor, NO amount shall be taken from the Trust ********
                      *** set aside for *** care of the Grantor&rsquo;s
                      pets.&nbsp;
                    </p>
                    <p>
                      ☐ Upon the death of the Grantor, a sum ** the amount of
                      ₦______________ shall be taken from the Trust Property and
                      set aside for *** care of the Grantor&apos;s pets.&nbsp;
                    </p>
                    <p>PART XIV</p>
                    <p>MISCELLANEOUS</p>
                    <p>
                      A. All Trust Property will pass to the **********
                      beneficiary subject to any mortgage, encumbrance, or lien
                      on such Trust Property. The beneficiary ***** *** be
                      entitled to additional payment from this ***** to cover
                      such mortgage, encumbrance, or lien.
                    </p>
                    <p>
                      B. If the income or principal of the ***** Property is
                      insufficient to satisfy the distributions as prescribed in
                      this Trust, the Trustee shall, in *** or her sole
                      discretion, ********* the priority and ***** of
                      distributions.
                    </p>
                    <p>
                      C. The Trustee shall provide ** accounting to the
                      beneficiaries ** an annual ***** or as otherwise required
                      by law ********* *** income, payments, and *****
                      transactions of this Trust.
                    </p>
                    <p>
                      D. If the Trustee determines that *** income and/**
                      principal of the Trust ******** ** de minimus or
                      insufficient to justify the cost of administration, the
                      Trustee, in his or *** sole discretion, may terminate this
                      Trust. Upon terminating this Trust, the Trustee shall
                      ********** the proportionate shares of the Trust Property
                      to the designated ************* and relieved of his or her
                      duties herein.
                    </p>
                    <p>
                      E. Except as otherwise ******** herein ** by law, no
                      beneficiary&rsquo;s interest under this Trust may be
                      assigned, alienated, pledged, attached, or otherwise
                      encumbered, ********* claims of creditors or claims for
                      alimony or support, whether voluntary or involuntary,
                      until final distribution of such interest has been made by
                      the Trustee.
                    </p>
                    <p>
                      F. If the ***** Property includes *** Grantor&apos;s
                      principal residence, the Grantor will retain the right to
                      possess and occupy the residence free of charge (including
                      rent and taxes) ****** his or *** lifetime, so that the
                      Grantor may retain a beneficial interest in the residence
                      *** maintain eligibility for any state homestead tax
                      exemption he or she may qualify for.
                    </p>
                    <p>
                      G. The ******* may present a signed and notarized
                      certificate or trust ** abstract of trust as proof of ***
                      existence of this Trust and the facts ****** ** such
                      certificate or abstract when necessary for conducting the
                      business of **** Trust.
                    </p>
                    <p>
                      H. Throughout **** Trust, except where the *******
                      otherwise requires, *** masculine gender ***** be deemed
                      to ******* the feminine and the neuter, and *** singular
                      number shall be ****** to include the plural, and vice
                      versa.
                    </p>
                    <p>
                      I. *** remaining provisions of this ***** continue to **
                      in full force and effect ** any provisions of this Trust
                      are deemed unenforceable.
                    </p>
                    <p>
                      J. This Trust **** be construed in accordance **** the
                      laws of the Federal Republic of Nigeria.
                    </p>
                    <p>&nbsp;</p>
                    <p>
                      IN WITNESS WHEREOF, the parties hereto have caused this
                      Trust to be executed on the day and year first above
                      written.
                    </p>
                    <p>SIGNED, SEALED AND DELIVERED&nbsp;</p>
                    <p>BY THE WITHIN NAMED Grantor</p>
                    <p>&hellip;&hellip;&hellip;&hellip;</p>
                    <p>(Grantor)</p>
                    <p>In *** presence of;</p>
                    <p>
                      Name:
                      &hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;
                    </p>
                    <p>
                      Address:
                      &hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;
                    </p>
                    <p>
                      Occupation:
                      &hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;.&hellip;&hellip;
                    </p>
                    <p>
                      Signature:
                      &hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;
                    </p>
                    <p>
                      Date:
                      &hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;
                    </p>
                    <p>
                      THE COMMON SEAL OF [Insert *** company name] WAS *******
                      TO THIS DEED *** THE **** WAS DULY ********* IN THE
                      ******** OF:
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      &hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;..
                      <span>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                      </span>
                      &nbsp;
                      &nbsp;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;
                    </p>
                    <p>
                      &nbsp; &nbsp; &nbsp; [Name of Director]
                      <span>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                      </span>
                      [Name of Director/Secretary]
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>Schedule A</p>
                    <p>TRUST PROPERTY</p>
                    <p>
                      ●___________________________________________________________________________________________________________________________________________________________________________________________________________________
                      [*********** of property]&nbsp;
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      ●___________________________________________________________________________________________________________________________________________________________________________________________________________________
                      [Description of property]&nbsp;
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      ●__________________________________________________________________________________________________________________________________________________________________________________________________________________
                      &nbsp;[Description of property]&nbsp;
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      ●___________________________________________________________________________________________________________________________________________________________________________________________________________________
                      [Description ** property]&nbsp;
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      ●___________________________________________________________________________________________________________________________________________________________________________________________________________________
                      &nbsp;[Description of property]&nbsp;
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>&nbsp;</p>
                    <p>
                      <br />
                    </p>
                    <p>&emsp;</p>
                    <p>
                      <br />
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>Schedule B</p>
                    <p>SPECIFIC GIFTS</p>
                    <p>&nbsp;</p>
                    <p>
                      ●________________________ [Beneficiary] ***** receive
                      _____________________________
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      ●________________________ [Beneficiary] shall receive
                      _____________________________
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      ●________________________ [Beneficiary] ***** receive
                      _____________________________
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      ●________________________ [Beneficiary] shall receive
                      _____________________________
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      ●________________________ [Beneficiary] shall receive
                      _____________________________
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>&emsp;</p>
                    <p>
                      <br />
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>******** C</p>
                    <p>CHILDREN&rsquo;S SUB-TRUST</p>
                    <p>
                      ●____________________________________________________________________________________________________________________________________________________________________________________________________________
                      [*********** of sub-trust property]
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      ●____________________________________________________________________________________________________________________________________________________________________________________________________________
                      [Description of sub-trust property]
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      ●____________________________________________________________________________________________________________________________________________________________________________________________________________
                      [Description of sub-trust property]
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      ●____________________________________________________________________________________________________________________________________________________________________________________________________________
                      [Description of sub-trust property]
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      ●____________________________________________________________________________________________________________________________________________________________________________________________________________
                      [Description of sub-trust property]
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>Schedule D</p>
                    <p>BENEFICIARIES</p>
                    <p>
                      ● ___________________ [Beneficiary] shall *******
                      __________% of the remaining Trust Property.
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      ● ___________________ [Beneficiary] shall receive
                      __________% of the ********* Trust Property.
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      ● ___________________ [Beneficiary] shall receive
                      __________% of the remaining Trust Property.
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      ● ___________________ [Beneficiary] shall receive
                      __________% of the remaining Trust Property.
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      ● ___________________ [Beneficiary] shall receive
                      __________% of the remaining Trust Property.
                    </p>
                    <p>
                      <br />
                    </p>
                    <div style={{ color: "red" }}>
                      Created with{" "}
                      <a href="https://wordtohtml.net/">WordToHTML.net</a>{" "}
                      trial.
                    </div>
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

export default Template14LTITC;
