import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { blueColor } from "../constants/colors";
import { font10, font11, fontWeight500 } from "../constants/fonts";
import { replaceSpaceWithSlash } from "../helperfunctions/strings";
import { getAllTemplates } from "../helperfunctions/templates";
import Layout from "../Layout";
import TemplateItem from "../others/TemplateItem";
import { templates } from "../template_registration";

function Home() {
 
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
            Choose a document below to fill out o
          </div>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
          {templates.map((template) => (
            <TemplateItem
              imagePath={template.imagePath}
              price={template.price}
              title={template.title}
              link={replaceSpaceWithSlash(template.title)}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Home;
