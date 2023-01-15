import React, { useEffect, useRef, useState } from "react";
import Dialog from "../commons/Custom/Dialog";
import { blueColor } from "../constants/colors";
import { placeholderMarker } from "../constants/strings";
import TemplateIcon from "../assets/frame_1.png";

import { insertInput } from "../helperfunctions/jsx";
import {
  extractResponses,
  getCurrentDetails,
  loadTemplate,
  saveCurrentDetails,
} from "../helperfunctions/templates";
import Layout from "../Layout";
import Start from "../pages/Start";

function Template30WTOS(props) {
  //question index
  const [index, setIndex] = useState(0);

  
  //refs
  const [templateLoading, setTemplateLoading] = useState(false);
  const [templateDetails, setTemplateDetails] = useState(null);
  const [showStart, setShowStart] = useState(true);
  const currentDetails = getCurrentDetails();
  const [targetRef, setRef] = useState();
  const nameOfAppRef = useRef();
  const collectiveNameOfAppRef = useRef();

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
  const [nameOfApp, setNameOfApp] = useState(getCurrentValue("nameOfApp"));
  const [collectiveNameOfApp, setCollectiveNameOfApp] = useState(
    getCurrentValue("collectiveNameOfApp")
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
      type: "input",
      question: "Enter the name of the app",
      action: setNameOfApp,
      key: "nameOfApp",
      response: nameOfApp,
      ref: nameOfAppRef,
    },

    {
      type: "input",
      question: "Enter the collective name of the app",
      action: setCollectiveNameOfApp,
      key: "collectiveNameOfApp",
      response: collectiveNameOfApp,
      ref: collectiveNameOfAppRef,
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
                        <b>TERMS OF SERVICE</b>
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
                        The following terms and conditions (“Terms”) govern all
                        use of the
                        <font ref={collectiveNameOfAppRef}>
                          {insertInput(collectiveNameOfApp)}
                        </font>{" "}
                        website and the{" "}
                        <font ref={nameOfAppRef}>{insertInput(nameOfApp)}</font>{" "}
                        app, and all content, services, and products available
                        at or through the website and/or the app. Our Services
                        are offered subject to your acceptance without
                        modification of all of the terms and conditions
                        contained herein and all other operating rules, policies
                        (including, without limitation,
                        {insertInput(collectiveNameOfApp)} ’s Privacy Policy)
                        and procedures that may be published from time to time
                        by {insertInput(collectiveNameOfApp)} (collectively, the
                        “Agreement”). You agree that we may automatically
                        upgrade our Services, and these Terms will apply to any
                        upgrades.
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
                        Please read this Agreement carefully before accessing or
                        using our Services. By accessing or using any part of
                        our Services, you agree to become bound by the Terms of
                        this Agreement. If you do not agree to all the Terms of
                        this Agreement, then you may not access or use any of
                        our Services. If these Terms are considered an offer by
                        {insertInput(collectiveNameOfApp)}, acceptance is
                        expressly limited to these Terms.
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
                        Our Services are not directed to children younger than
                        18, and access and use of our Services is only offered
                        to users 18 years of age or older. If you are under 18
                        years old, please do not register to use our Services.
                        Any person who registers as a user or provides their
                        personal information to our Services represents that
                        they are 18 years of age or older.
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
                        Use of our Services requires a{" "}
                        {insertInput(collectiveNameOfApp)} account. You agree to
                        provide us with complete and accurate information when
                        you register for an account. You will be solely
                        responsible and liable for any activity that occurs
                        under your username. You are responsible for keeping
                        your password secure.
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
                        <b>Payment and Renewal</b>
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
                        General Payment Terms.
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
                        By selecting an in-app payment, you agree to pay{" "}
                        {insertInput(collectiveNameOfApp)} the monthly or annual
                        subscription fees indicated for that service. Payments
                        will be charged on a pre-pay basis on the day you sign
                        up and will cover the use of that service for a monthly
                        or annual subscription period as indicated.
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
                        Automatic Renewal.
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
                        Unless you notify {insertInput(collectiveNameOfApp)}{" "}
                        before the end of the applicable subscription period
                        that you want to cancel your subscription, the
                        subscription will automatically renew and you authorize
                        us to collect the then-applicable annual or monthly
                        subscription fee for such subscription (as well as any
                        taxes) using any credit card or other payment mechanism
                        we have on record for you. Subscriptions can be canceled
                        at any time.
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
                        <b>Validity of Information</b>
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
                        {insertInput(collectiveNameOfApp)} goes to great lengths
                        to review all of the material on our website and in our
                        app, and we make every effort to ensure that our
                        information is always up-to-date and accurate. However,
                        this information is subject to change and we cannot be
                        responsible for any discrepancies or inaccuracies. By
                        operating our Services,
                        {insertInput(collectiveNameOfApp)} does not represent or
                        imply that it endorses the material there posted, or
                        that it believes such material to be accurate, useful,
                        or non-harmful. You are responsible for taking
                        precautions as necessary to protect yourself and your
                        computer systems from viruses, worms, Trojan horses, and
                        other harmful or destructive content.{" "}
                        {insertInput(collectiveNameOfApp)} disclaims any
                        responsibility for any harm resulting from the use by
                        visitors of our Services, or from any downloading by
                        those visitors of content there posted.
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
                        <b>Content Posted on Other Websites</b>
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
                        We have not reviewed, and cannot review, all of the
                        material, including computer software, made available
                        through the websites and webpages to which{" "}
                        {insertInput(collectiveNameOfApp)} links, and that link
                        to {insertInput(collectiveNameOfApp)}.
                        {insertInput(collectiveNameOfApp)} does not have any
                        control over those non-{" "}
                        {insertInput(collectiveNameOfApp)}
                        websites, and is not responsible for their contents or
                        their use. By linking to a non-{" "}
                        {insertInput(collectiveNameOfApp)} website,{" "}
                        {insertInput(collectiveNameOfApp)} does not represent or
                        imply that it endorses such website. You are responsible
                        for taking precautions as necessary to protect yourself
                        and your computer systems from viruses, worms, Trojan
                        horses, and other harmful or destructive content.{" "}
                        {insertInput(collectiveNameOfApp)} disclaims any
                        responsibility for any harm resulting from your use of
                        non-
                        {insertInput(collectiveNameOfApp)} websites and
                        webpages.
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
                        <b>Third Party Services</b>
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
                        If you use any Third Party Services which you may have
                        found information about or contacted via{" "}
                        {insertInput(collectiveNameOfApp)}, you understand that:
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
                        Third Party Services are not vetted, endorsed, or
                        controlled by
                        {insertInput(collectiveNameOfApp)}.
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
                        Any use of a Third Party Service is at your own risk,
                        and we shall not be responsible or liable to anyone for
                        Third Party Services.
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
                        Your use is solely between you and the respective third
                        party (“Third Party”) and will be governed by the Third
                        Party’s terms and policies. It is your responsibility to
                        review the Third Party’s terms and policies before using
                        a Third Party Service.
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
                        Some Third Party Services may request or require access
                        to your (yours, your visitors’, or customers’) data. If
                        you grant access, your data will handled in accordance
                        with the Third Party’s privacy policy and practices. We
                        do not have control over how a Third Party Service may
                        use your data. You should carefully review Third Party
                        Services’ data collection, retention, and use policies
                        and practices before enabling Third Party Services.
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
                        If you have questions or concerns about how a Third
                        Party Service operates, or need support, please contact
                        the Third Party directly.
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
                        <b>Copyright Infringement</b>
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
                        As {insertInput(collectiveNameOfApp)} asks others to
                        respect its intellectual property rights, it respects
                        the intellectual property rights of others. If you
                        believe that material located on or linked to by{" "}
                        {insertInput(collectiveNameOfApp)}
                        violates your copyright, you are encouraged to notify{" "}
                        {insertInput(collectiveNameOfApp)}
                        immediately. {insertInput(collectiveNameOfApp)} will
                        respond to all such notices, including as required or
                        appropriate by removing the infringing material or
                        disabling all links to the infringing material.
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
                        <b>Intellectual Property</b>
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
                        This Agreement does not transfer from{" "}
                        {insertInput(collectiveNameOfApp)} to you any
                        {insertInput(collectiveNameOfApp)} or third party
                        intellectual property, and all right, title, and
                        interest in and to such property will remain (as between
                        the parties) solely with{" "}
                        {insertInput(collectiveNameOfApp)} .{" "}
                        {insertInput(collectiveNameOfApp)}, the{" "}
                        {insertInput(collectiveNameOfApp)}
                        logo, and all other trademarks, service marks, graphics
                        and logos used in connection with{" "}
                        {insertInput(collectiveNameOfApp)} or our Services, are
                        trademarks or registered trademarks of{" "}
                        {insertInput(collectiveNameOfApp)} or{" "}
                        {insertInput(collectiveNameOfApp)}’s licensors. Other
                        trademarks, service marks, graphics and logos used in
                        connection with our Services may be the trademarks of
                        other third parties. Your use of our Services grants you
                        no right or license to reproduce or otherwise use any{" "}
                        {insertInput(collectiveNameOfApp)} or third-party
                        trademarks.
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
                        <b>Changes</b>
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
                        We are constantly updating our Services, and that means
                        sometimes we have to change the legal terms under which
                        our Services are offered. If we make changes that are
                        material, we will let you know by posting on one of our
                        blogs, or by sending you an email or other communication
                        before the changes take effect. The notice will
                        designate a reasonable period of time after which the
                        new terms will take effect. If you disagree with our
                        changes, then you should stop using our Services within
                        the designated notice period. Your continued use of our
                        Services will be subject to the new terms.
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
                        <b>Termination</b>
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
                        {insertInput(collectiveNameOfApp)} may terminate your
                        access to all or any part of our Services at any time,
                        with or without cause, with or without notice, effective
                        immediately. If you wish to terminate this Agreement or
                        your {insertInput(collectiveNameOfApp)} account (if you
                        have one), you may simply discontinue using our
                        Services. All provisions of this Agreement which by
                        their nature should survive termination shall survive
                        termination, including, without limitation, ownership
                        provisions, warranty disclaimers, indemnity and
                        limitations of liability.
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
                        <b>Disclaimer of Warranties</b>
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
                        Our Services are provided “as is.”{" "}
                        {insertInput(collectiveNameOfApp)} and its suppliers and
                        licensors hereby disclaim all warranties of any kind,
                        express or implied, including, without limitation, the
                        warranties of merchantability, fitness for a particular
                        purpose and non-infringement. Neither{" "}
                        {insertInput(collectiveNameOfApp)} nor its suppliers and
                        licensors, makes any warranty that our Services will be
                        error free or that access thereto will be continuous or
                        uninterrupted. You understand that you download from, or
                        otherwise obtain content or services through, our
                        Services at your own discretion and risk.
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
                        <b>Jurisdiction and Applicable Law</b>
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
                        Except to the extent that applicable law, if any,
                        provides otherwise, this Agreement and any access to or
                        use of our Services will be governed by and construed in
                        accordance with the laws of Nigeria without regard to
                        the principles of conflicts of law.
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
                        <b>Limitation of Liability</b>
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
                        In no event will {insertInput(collectiveNameOfApp)} , or
                        its suppliers or licensors, be liable with respect to
                        any subject matter of this Agreement under any contract,
                        negligence, strict liability or other legal or equitable
                        theory for: (i) any special, incidental or consequential
                        damages; (ii) the cost of procurement for substitute
                        products or services; (iii) for interruption of use or
                        loss or corruption of data; or (iv) for any amounts that
                        exceed the fees paid by you to
                        {insertInput(collectiveNameOfApp)} under this Agreement
                        during the twelve (12) month period prior to the cause
                        of action. {insertInput(collectiveNameOfApp)} shall have
                        no liability for any failure or delay due to matters
                        beyond their reasonable control. The foregoing shall not
                        apply to the extent prohibited by applicable law.
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
                        <b>General Representation and Warranty</b>
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
                        You represent and warrant that (i) your use of our
                        Services will be in strict accordance with the{" "}
                        {insertInput(collectiveNameOfApp)} Privacy Policy, with
                        this Agreement, and with all applicable laws and
                        regulations (including without limitation any local laws
                        or regulations in your country, state, city, or other
                        governmental area, regarding online conduct and
                        acceptable content, and including all applicable laws
                        regarding the transmission of technical data exported
                        from the United Kingdom or the country in which you
                        reside) and (ii) your use of our Services will not
                        infringe or misappropriate the intellectual property
                        rights of any third party.
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
                        <b>Indemnification</b>
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
                        You agree to indemnify and hold harmless{" "}
                        {insertInput(collectiveNameOfApp)} , its contractors,
                        and its licensors, and their respective directors,
                        officers, employees, and agents from and against any and
                        all claims and expenses, including attorneys’ fees,
                        arising out of your use of our Services, including but
                        not limited to your violation of this Agreement.
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
                        <b>Miscellaneous</b>
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
                        This Agreement constitutes the entire agreement between{" "}
                        {insertInput(collectiveNameOfApp)}
                        and you concerning the subject matter hereof, and they
                        may only be modified by a written amendment signed by an
                        authorized executive of
                        {insertInput(collectiveNameOfApp)}, or by the posting by{" "}
                        {insertInput(collectiveNameOfApp)} of a revised version.
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
                        If any part of this Agreement is held invalid or
                        unenforceable, that part will be construed to reflect
                        the parties’ original intent, and the remaining portions
                        will remain in full force and effect. A waiver by either
                        party of any term or condition of this Agreement or any
                        breach thereof, in any one instance, will not waive such
                        term or condition or any subsequent breach thereof.
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
                        You may assign your rights under this Agreement to any
                        party that consents to, and agrees to be bound by, its
                        terms and conditions;
                        {insertInput(collectiveNameOfApp)} may assign its rights
                        under this Agreement without condition. This Agreement
                        will be binding upon and will inure to the benefit of
                        the parties, their successors and permitted assigns.
                      </font>
                    </font>
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

export default Template30WTOS;
