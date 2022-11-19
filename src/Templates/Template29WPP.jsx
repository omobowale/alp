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
import { insertInput } from "../helperfunctions/jsx";
import Layout from "../Layout";
import Checkout from "../pages/Checkout";
import CheckoutPage from "../pages/CheckoutPage";

function Template29WPP(props) {
  console.log(props);
  //question index
  const [index, setIndex] = useState(0);



  //fields to be filled
  const [nameOfApp, setNameOfApp] = useState(placeholderMarker)
  const [collectiveNameOfApp, setCollectiveNameOfApp] = useState(placeholderMarker)
  const [domainName, setDomainName] = useState(placeholderMarker)

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
      type: "input",
      question: "Enter the name of the app",
      action: setNameOfApp,
    },

    {
      type: "input",
      question: "Enter the collective name of the app",
      action: setCollectiveNameOfApp,
    },
    {
      type: "input",
      question: "Enter the domain name of the app",
      action: setDomainName,
    },

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
          <div className="template-container py-2 px-4" style={{ height: "70vh", overflow: "scroll" }}>
            <p
              align='justify'
              style={{
                lineHeight: '108%',
                marginBottom: '0.11in',
              }}
            >
              <font face='Garamond, serif'>
                <font
                  size='3'
                  style={{
                    fontSize: '12pt',
                  }}
                >
                  <b>PRIVACY POLICY</b>
                </font>
              </font>
            </p>
            <p
              align='justify'
              style={{
                lineHeight: '108%',
                marginBottom: '0.11in',
              }}
            >
              {insertInput(nameOfApp)}
              <font face='Garamond, serif'>
                <font
                  size='3'
                  style={{
                    fontSize: '12pt',
                  }}
                >
                  {" "}app and websites (collectively “{insertInput(collectiveNameOfApp)}” in this document) refer
                  to apps and webpages hosted on the
                </font>
              </font>
              <font face='Garamond, serif'>
                <font
                  size='3'
                  style={{
                    fontSize: '12pt',
                  }}
                >
                  <i> (</i>
                </font>
              </font>
              <font>
                <font face='Garamond, serif'>
                  <font
                    size='3'
                    style={{
                      fontSize: '12pt',
                    }}
                  >
                    <i>{insertInput(domainName)}</i>
                  </font>
                </font>
              </font>
              <font face='Garamond, serif'>
                <font
                  size='3'
                  style={{
                    fontSize: '12pt',
                  }}
                >
                  <i>) </i>
                </font>
              </font>
              <font face='Garamond, serif'>
                <font
                  size='3'
                  style={{
                    fontSize: '12pt',
                  }}
                >
                  domain and on other related domains and subdomains.
                </font>
              </font>
            </p>
            <p
              align='justify'
              style={{
                lineHeight: '108%',
                marginBottom: '0.11in',
              }}
            >
              <font face='Garamond, serif'>
                <font
                  size='3'
                  style={{
                    fontSize: '12pt',
                  }}
                >
                  <b>Website Visitors</b>
                </font>
              </font>
            </p>
            <p
              align='justify'
              style={{
                lineHeight: '108%',
                marginBottom: '0.11in',
              }}
            >
              <font face='Garamond, serif'>
                <font
                  size='3'
                  style={{
                    fontSize: '12pt',
                  }}
                >
                  Like most website operators, {insertInput(collectiveNameOfApp)} collects non-personally
                  identifying information of the sort that web browsers and servers
                  typically make available, such as the browser type, language
                  preference, referring site, and the date and time of each visitor
                  request. {insertInput(collectiveNameOfApp)}’s purpose in collecting non-personally
                  identifying information is to better understand how {insertInput(collectiveNameOfApp)}’s
                  visitors use its website. From time to time, {insertInput(collectiveNameOfApp)} may
                  release non-personally-identifying information in the aggregate,
                  e.g., by publishing a report on trends in the usage of its
                  website.
                </font>
              </font>
            </p>
            <p
              align='justify'
              style={{
                lineHeight: '108%',
                marginBottom: '0.11in',
              }}
            >
              <font face='Garamond, serif'>
                <font
                  size='3'
                  style={{
                    fontSize: '12pt',
                  }}
                >
                  {insertInput(collectiveNameOfApp)} also collects potentially personally-identifying
                  information like Internet Protocol (IP) addresses. {insertInput(collectiveNameOfApp)} does
                  not use such information to identify its visitors, however, and
                  does not disclose such information, other than under the same
                  circumstances that it uses and discloses personally-identifying
                  information, as described below.
                </font>
              </font>
            </p>
            <p
              align='justify'
              style={{
                lineHeight: '108%',
                marginBottom: '0.11in',
              }}
            >
              <font face='Garamond, serif'>
                <font
                  size='3'
                  style={{
                    fontSize: '12pt',
                  }}
                >
                  <b>
                    Gathering of Personally-Identifying Information & Data Sharing
                  </b>
                </font>
              </font>
            </p>
            <p
              align='justify'
              style={{
                lineHeight: '108%',
                marginBottom: '0.11in',
              }}
            >
              <font face='Garamond, serif'>
                <font
                  size='3'
                  style={{
                    fontSize: '12pt',
                  }}
                >
                  Certain visitors to {insertInput(collectiveNameOfApp)} choose to interact with {insertInput(collectiveNameOfApp)} {" "} 
                  in ways that require {insertInput(collectiveNameOfApp)} to gather personally-identifying
                  information. The amount and type of information that {insertInput(collectiveNameOfApp)} {" "}
                  gathers depends on the nature of the interaction. For example, we
                  ask visitors who use our app to provide a username and email
                  address. In each case, {insertInput(collectiveNameOfApp)} collects such information only
                  insofar as is necessary or appropriate to fulfil the purpose of
                  the visitor’s interaction with {insertInput(collectiveNameOfApp)}. {insertInput(collectiveNameOfApp)} does not
                  disclose personally-identifying information other than as
                  described below. And visitors can always refuse to supply
                  personally-identifying information, with the caveat that it may
                  prevent them from engaging in certain website-related or
                  app-related activities.
                </font>
              </font>
            </p>
            <p
              align='justify'
              style={{
                lineHeight: '108%',
                marginBottom: '0.11in',
              }}
            >
              <font face='Garamond, serif'>
                <font
                  size='3'
                  style={{
                    fontSize: '12pt',
                  }}
                >
                  <b>Aggregated Statistics</b>
                </font>
              </font>
            </p>
            <p
              align='justify'
              style={{
                lineHeight: '108%',
                marginBottom: '0.11in',
              }}
            >
              <font face='Garamond, serif'>
                <font
                  size='3'
                  style={{
                    fontSize: '12pt',
                  }}
                >
                  {insertInput(collectiveNameOfApp)} may collect statistics about the behaviour of visitors
                  to its website. For instance, {insertInput(collectiveNameOfApp)} may reveal how many
                  downloads a particular version got. However, {insertInput(collectiveNameOfApp)} does not
                  disclose personally-identifying information other than as
                  described below.
                </font>
              </font>
            </p>
            <p
              align='justify'
              style={{
                lineHeight: '108%',
                marginBottom: '0.11in',
              }}
            >
              <font face='Garamond, serif'>
                <font
                  size='3'
                  style={{
                    fontSize: '12pt',
                  }}
                >
                  <b>Protection of Certain Personally-Identifying Information</b>
                </font>
              </font>
            </p>
            <p
              align='justify'
              style={{
                lineHeight: '108%',
                marginBottom: '0.11in',
              }}
            >
              <font face='Garamond, serif'>
                <font
                  size='3'
                  style={{
                    fontSize: '12pt',
                  }}
                >
                  {insertInput(collectiveNameOfApp)} discloses potentially personally-identifying and
                  personally-identifying information only to those of its employees,
                  contractors, and affiliated organizations that (i) need to know
                  that information in order to process it on {insertInput(collectiveNameOfApp)}’s behalf or
                  to provide services available at {insertInput(collectiveNameOfApp)}, and (ii) that have
                  agreed not to disclose it to others. Some of those employees,
                  contractors and affiliated organizations may be located outside of
                  your home country; by using {insertInput(collectiveNameOfApp)}, you consent to the
                  transfer of such information to them. {insertInput(collectiveNameOfApp)} will not rent or
                  sell potentially personally-identifying and personally-identifying
                  information to anyone. Other than to its employees, contractors,
                  and affiliated organizations, as described above, {insertInput(collectiveNameOfApp)} only
                  discloses potentially personally identifying and
                  personally-identifying information when required to do so by law,
                  or when {insertInput(collectiveNameOfApp)} believes in good faith that disclosure is
                  reasonably necessary to protect the property or rights of
                  {insertInput(collectiveNameOfApp)}, third parties, or the public at large.
                </font>
              </font>
            </p>
            <p
              align='justify'
              style={{
                lineHeight: '108%',
                marginBottom: '0.11in',
              }}
            >
              <font face='Garamond, serif'>
                <font
                  size='3'
                  style={{
                    fontSize: '12pt',
                  }}
                >
                  <b>Emails and Notifications</b>
                </font>
              </font>
            </p>
            <p
              align='justify'
              style={{
                lineHeight: '108%',
                marginBottom: '0.11in',
              }}
            >
              <font face='Garamond, serif'>
                <font
                  size='3'
                  style={{
                    fontSize: '12pt',
                  }}
                >
                  If you are a registered user of {insertInput(collectiveNameOfApp)}’s website and have
                  supplied your email address, {insertInput(collectiveNameOfApp)} may occasionally send you
                  emails to inform you about new features, to solicit your feedback,
                  or just to keep you up to date with what’s going on with
                  {insertInput(collectiveNameOfApp)} and our products. We intend to primarily use our blog
                  to communicate this type of information, so we expect to keep
                  emails to a minimum.
                </font>
              </font>
            </p>
            <p
              align='justify'
              style={{
                lineHeight: '108%',
                marginBottom: '0.11in',
              }}
            >
              <font face='Garamond, serif'>
                <font
                  size='3'
                  style={{
                    fontSize: '12pt',
                  }}
                >
                  If you send us a request (for example via a support email or via
                  one of our feedback mechanisms), we reserve the right to publish
                  it in order to help us clarify or respond to your request or to
                  help us support other users. {insertInput(collectiveNameOfApp)} takes all measures
                  reasonably necessary to protect against the unauthorized access,
                  use, alteration, or destruction of potentially
                  personally-identifying and personally-identifying information.
                </font>
              </font>
            </p>
            <p
              align='justify'
              style={{
                lineHeight: '108%',
                marginBottom: '0.11in',
              }}
            >
              <font face='Garamond, serif'>
                <font
                  size='3'
                  style={{
                    fontSize: '12pt',
                  }}
                >
                  {insertInput(collectiveNameOfApp)} may also display in-app notifications and send push
                  notifications to your device to inform you about new features. The
                  settings for push notifications, together with the email settings,
                  can be amended in the app settings, and users may also unsubscribe
                  from emails at any time via the link at the bottom of each email.
                </font>
              </font>
            </p>
            <p
              align='justify'
              style={{
                lineHeight: '108%',
                marginBottom: '0.11in',
              }}
            >
              <font face='Garamond, serif'>
                <font
                  size='3'
                  style={{
                    fontSize: '12pt',
                  }}
                >
                  <b>Cookies</b>
                </font>
              </font>
            </p>
            <p
              align='justify'
              style={{
                lineHeight: '108%',
                marginBottom: '0.11in',
              }}
            >
              <font face='Garamond, serif'>
                <font
                  size='3'
                  style={{
                    fontSize: '12pt',
                  }}
                >
                  A cookie is a string of information that a website stores on a
                  visitor’s computer, and that the visitor’s browser provides to the
                  website each time the visitor returns. {insertInput(collectiveNameOfApp)} uses cookies to
                  help identify and track visitors, their usage of {insertInput(collectiveNameOfApp)}, and
                  their website access preferences. {insertInput(collectiveNameOfApp)} visitors who do not
                  wish to have cookies placed on their computers should set their
                  browsers to refuse cookies before using {insertInput(collectiveNameOfApp)}’s websites,
                  with the drawback that certain features of {insertInput(collectiveNameOfApp)}’s websites
                  may not function properly without the aid of cookies.
                </font>
              </font>
            </p>
            <p
              align='justify'
              style={{
                lineHeight: '108%',
                marginBottom: '0.11in',
              }}
            >
              <font face='Garamond, serif'>
                <font
                  size='3'
                  style={{
                    fontSize: '12pt',
                  }}
                >
                  <b>SECURITY</b>
                </font>
              </font>
            </p>
            <p
              align='justify'
              style={{
                lineHeight: '108%',
                marginBottom: '0.11in',
              }}
            >
              <font face='Garamond, serif'>
                <font
                  size='3'
                  style={{
                    fontSize: '12pt',
                  }}
                >
                  We take data security very seriously. Please see below for
                  details.
                </font>
              </font>
            </p>
            <p
              align='justify'
              style={{
                lineHeight: '108%',
                marginBottom: '0.11in',
              }}
            >
              <font face='Garamond, serif'>
                <font
                  size='3'
                  style={{
                    fontSize: '12pt',
                  }}
                >
                  We have measures in place to protect all the data held on our
                  systems from loss, misuse, and unauthorized access, disclosure,
                  alteration, or destruction. We take all necessary measures to
                  protect the personal data of our end-users
                </font>
              </font>
            </p>
            <p
              align='justify'
              style={{
                lineHeight: '108%',
                marginBottom: '0.11in',
              }}
            >
              <font face='Garamond, serif'>
                <font
                  size='3'
                  style={{
                    fontSize: '12pt',
                  }}
                >
                  <b>Privacy Policy Changes</b>
                </font>
              </font>
            </p>
            <p
              align='justify'
              style={{
                lineHeight: '108%',
                marginBottom: '0.11in',
              }}
            >
              <font face='Garamond, serif'>
                <font
                  size='3'
                  style={{
                    fontSize: '12pt',
                  }}
                >
                  Although most changes are likely to be minor, {insertInput(collectiveNameOfApp)} may
                  update its Privacy Policy from time to time, and in {insertInput(collectiveNameOfApp)}’s
                  sole discretion. {insertInput(collectiveNameOfApp)} encourages visitors to check this page
                  regularly for any changes to its Privacy Policy. Your continued
                  use of this site after any change in this Privacy Policy will
                  constitute your acceptance of such change.
                </font>
              </font>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Template29WPP;
