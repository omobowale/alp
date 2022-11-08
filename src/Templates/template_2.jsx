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

function Template2(props) {
  console.log(props);
  //question index
  const [index, setIndex] = useState(0);

  const [showCheckout, setShowCheckout] = useState(false);

  //fields to be filled
  const [date, setDate] = useState(placeholderMarker);
  const [day, setDay] = useState(placeholderMarker);
  const [month, setMonth] = useState(placeholderMarker);
  const [name_of_company, setNameOfCompany] = useState(placeholderMarker);
  const [company_address, setCompanyAddress] = useState(placeholderMarker);
  const [length_of_agency, setLengthOfAgency] = useState(placeholderMarker);
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
  const [in_the_presence_of_name, setInThePresenceOfName] =
    useState(placeholderMarker);
  const [in_the_presence_of_address, setInThePresenceOfAddress] =
    useState(placeholderMarker);

  //functions
  const incrementIndex = () => {
    // if (index < questions.length) {
      setIndex(index + 1);
    // }
  };

  const decrementIndex = () => {
    console.log("decrement")
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const questions = [
    {
      type: "input",
      question: "Enter the full name of your company",
      action: setNameOfCompany,
    },
    {
      type: "date",
      question: "Select the date in which this agreement is made",
      action: setDate,
    },
    {
      type: "input",
      question: "Enter the full address of your company",
      action: setCompanyAddress,
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
          {index < questions.length && questions.map((question, ind) => (
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
          <div style={{ display: `${index === questions.length ? "block" : "none"}` }}>
            <CheckoutPage name={props.name} onBackButtonClicked={decrementIndex} />
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
            <span
              className="template-container"
              style={{
                fontSize: "12px",
                textAlign: "justify",
                color: "#828282",
              }}
            >
              <b>THIS AGENCY AGREEMENT</b> is made this{" "}
              <span style={{ color: blueColor }}>
                {getDayOfMonth(getActualDate(date))}
              </span>{" "}
              day of{" "}
              <span style={{ color: blueColor }}>
                {getMonthAndYear(getActualDate(date))}
              </span>{" "}
              BETWEEN{" "}
              <span style={{ color: blueColor }}>{name_of_company}</span> a
              company duly incorporated under the laws of the Federal Republic
              of Nigeria with its office at{" "}
              <span style={{ color: blueColor }}>{company_address}</span>{" "}
              (hereinafter referred to as “the Principal” of the first part;
              which expression shall where the context admits include its
              successors in title and assigns)
              <br />
              <span>AND</span>
              <br />
              <span style={{ color: blueColor }}>{name_of_company}</span> a
              company duly incorporated under the laws of the Federal Republic
              of Nigeria with its office at{" "}
              <span style={{ color: blueColor }}>{company_address}</span>{" "}
              (hereinafter referred to as “the Agent” of the other part; which
              expression shall where the context admits include its successors
              in title and assigns)
              <br />
              (Each referred to as a “Party”, and collectively as the “Parties”)
              <br />
              <br />
              WHEREBY IT IS AGREED BETWEEN THE PARTIES AS FOLLOWS:
              <br />
              <br />
              <b>1.</b> That the agent is hereby appointed as the sole agent of
              the principal for the purpose of making sales of the
              products/goods of the principal for a term of{" "}
              <span style={{ color: blueColor }}>{length_of_agency}</span> years
              commencing from the date hereof on the terms and conditions set
              forth hereunder.
              <br />
              <b>2.</b> That the agent shall not, while selling the
              products/goods of the principal make any representation in the
              trade or give any warranty other than those contained in the
              principal’s printed price list.
              <br />
              <b>3.</b> That the agent shall be allowed to deduct and retain as
              his agency commission with himself{" "}
              <span style={{ color: blueColor }}>{percentage_commission}</span>{" "}
              per cent of the list price of all products/goods sold on behalf of
              the principal. The agent shall keep a record of all sales and
              shall regularly remit to the principal on each Saturday all sums
              received by the agent in respect of such sales less{" "}
              <span style={{ color: blueColor }}>{remit_percentage}</span> per
              cent his agency commission. All sales shall be made for cash
              against delivery of goods unless the principal’s consent in
              writing to give credit to any particular purchaser be in any case
              first obtained and in the case of such credit sales the principal
              may direct for such increase in the price of his products/goods
              over and above the current list price of the principal.
              <br />
              <b>4.</b> That the agent shall not make purchases on behalf of or
              in any manner pledge the credit of the principal without the
              consent in writing of the principal.
              <br />
              <b>5.</b> That the agent shall, at the expense of the principal,
              take on rent and occupy for the purpose of the agency, suitable
              premises with prior approval of the principal and shall keep
              insured for full value against all available risks, all the goods
              entrusted to his custody by the principal under this agreement and
              on request, shall produce to the principal, receipts, for the
              rent, rates and taxes of the said premises and for the premiums on
              insurance policies showing that the same have been paid on or
              about their respective due dates. That the agent shall bear all
              expenses relating to or incidental to the said agency.
              <br />
              <b>6.</b> That the agent shall, in all his commercial dealings and
              on documents and on the name-plate or letter-head indicating his
              place of business, describe himself as selling agent for the
              principal.
              <br />
              <b>7.</b> That the principal shall keep with the agent a stock of
              his goods free of all expenses of delivery to the value of{" "}
              <span style={{ color: blueColor }}>{principal_agent_amount}</span>{" "}
              according to the principal’s current price list and the principal
              further undertakes to replenish such stock on the close of each
              month so as to keep it at the agreed value. Provided always that
              the agent shall have no right of action against the principal for
              delay resulting from shortage of stock, delays in transit,
              accidents, strikes or other unavoidable occurrences in
              replenishing such stock. The principal shall always have the
              right, without any prior notice, to cause a stock checking of the
              said products/goods and on any shortage or deficiency found on
              such stock-taking the agent shall on demand pay to the principal
              the list price of such shortage or deficiency less the deduction
              by way of commission or rebate receivable by the agent. The agent
              shall not alter, remove, or tamper with the marks or numbers on
              the products/goods so entrusted into his custody.
              <br />
              <b>8.</b> That the agent shall not sell the goods of the principal
              to any purchaser except at current price list of the principal
              conveyed by him from time to time. The agent may, however, allow a
              discount or rebate of{" "}
              <span style={{ color: blueColor }}>{allowable_discount}</span> per
              cent.
              <br />
              <b>9.</b> That in the event of any dispute arising between the
              agent and a purchaser of the products/goods of the principal, the
              agent shall immediately inform the principal of the same and shall
              not without the principal’s approval or consent in writing take
              any legal proceedings in respect of or compromise such dispute or
              grant a release to any purchaser of the products/goods of the
              principal.
              <br />
              <b>10.</b> That either party may terminate this agreement at his
              option at any time after the expiration of{" "}
              <span style={{ color: blueColor }}>{expiration_in_years}</span>{" "}
              years by giving the other one month’s notice in writing.
              <br />
              <b>11.</b> That the benefits under this agreement shall not be
              assignable to any other person.
              <br />
              <b>12.</b> That the agent shall always, during the existence of
              this agreement, devote his whole business time and energy for
              pushing the sale of the products/goods of the principal and shall
              in all such dealings act honestly and faithfully to the principal
              and shall carry out orders and instructions and shall not engage
              or be interested either directly or indirectly as agent or servant
              in any other business or trade without the prior consent in
              writing of the principal.
              <br />
              <b>13.</b> That on the termination of this agreement for any
              reason whatsoever, the agent shall not for the period of one year
              solicit trade orders from the persons who had been purchasers of
              the products/goods of the principal any time
              within.................. years immediately preceding the date of
              such termination and the agent shall not for a period of one year
              engage or be interested as agent or servant in any business, firm
              or company manufacturing, selling or dealing in products/goods
              similar to those of the principal.
              <br />
              <b>14.</b> That all products/goods shall be sold by the agent for
              delivery at agent’s place of business but the agent shall, at his
              own expense, have the right to deliver products/goods to
              purchasers at their places of business.
              <br />
              <b>15.</b> That without prejudice to any other remedy he may have
              against the agent for any breach or non-performance of any part of
              this agreement, the principal shall have the right summarily to
              terminate this agreement:
              <br />
              <ul className="ml-3">
                <li>
                  (i) on the agent being found guilty of a breach of its
                  provisions or being guilty of misconduct or negligence of his
                  duties; or
                </li>

                <li>
                  (ii) on the agent absenting himself from his business duties
                  entrusted to him under this agreement for{" "}
                  <span style={{ color: blueColor }}>
                    {termination_timeline}
                  </span>{" "}
                  days without the principal’s prior permission in writing; or
                </li>

                <li>(iii) on the agent committing an act of bankruptcy.</li>
              </ul>
              <b>16.</b> That in the event of any dispute arising out of or in
              relation to or touching upon the agreement, the same shall be
              decided by arbitration in accordance with the Arbitration and
              Conciliation Act, Chapter A18, Laws of the Federation of Nigeria,
              2004 (or any amendment thereto) and the Arbitration Rules
              connected thereto, by the Arbitrator appointed with mutual
              consent. The award of the Arbitrator shall be final, conclusive,
              and binding upon the Parties.
              <br />
              <b>17.</b> That the principal shall be entitled to terminate this
              agreement by one month’s notice in writing to the agent in the
              event of his ceasing to carry on the said business of the
              principal.
              <br />
              <b>18.</b> That on the termination of this agreement for whatever
              reason, the agent shall forthwith deliver to the principal all the
              unsold stock of products/goods and shall pay to the principal for
              the shortages of deficiency of stock at price list less commission
              and rebate allowable to the agent. The agent shall also deliver to
              the charge of the principal all books of account and documents of
              the agency, cash, cheques, bills of exchange or other securities
              he may have received during the normal course as a result of sales
              of the products/goods of the principal and shall transfer, assign
              or negotiate in favour of the principal all such securities on
              demand.
              <br />
              <br />
              IN WITNESS WHEREOF the parties have signed this Agreement on the
              day and year first above written.
              <br />
              SIGNED FOR AND ON BEHALF OF THE PRINCIPAL
              <br />
              {name_of_designated_person_as_principal}
              <br />
              In the presence of:
              <br />
              Name: {name_of_witness}
              <br />
              Address: {address_of_witness}
              <br />
              Occupation: {occupation_of_witness}
              <br />
              Signature: _____________________
              <br />
              Date: {signature_date}
              <br />
              SIGNED FOR AND ON BEHALF OF THE AGENT
              <br />
              {name_of_agent}
              In the presence of:
              <br />
              Name: {in_the_presence_of_name}
              <br />
              Address: {in_the_presence_of_address}
              <br />
            </span>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Template2;
