import React from "react";
import { Link } from "react-router-dom";
import { blueColor } from "../constants/colors";
import { font10, font11, fontWeight500 } from "../constants/fonts";
import { replaceSpaceWithSlash } from "../helperfunctions/strings";
import Layout from "../Layout";
import TemplateItem from "../others/TemplateItem";
import { templates } from "../template_registration";

function Templates() {
  return (
    <Layout>
      <div className="">
        <div className="" style={{ textAlign: "center" }}>
          <div
            className="mb-2"
            style={{ color: blueColor, fontWeight: fontWeight500 }}
          >
            Fill a template
          </div>
          <div className="mb-5" style={{ fontSize: font11 }}>
            Choose a document below to fill out
          </div>
        </div>
        <div className="grid grid-cols-4 gap-5">
          {templates.map((template) => (
            <TemplateItem
              imagePath={template.imagePath}
              price={template.price}
              title={template.title}
              link={"/templates/" + replaceSpaceWithSlash(template.title)}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Templates;
