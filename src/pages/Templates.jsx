import React, { useEffect, useMemo, useState } from "react";
import { blueColor } from "../constants/colors";
import { font11, fontWeight500 } from "../constants/fonts";
import { PAGE_SIZE, replaceSpaceWithSlash } from "../helperfunctions/strings";
import {
  getAllTemplates,
  getUserTemplates,
  removeCurrentDetailsFromLocalStorage,
  testLoadTemplate,
} from "../helperfunctions/templates";
import Layout from "../Layout";
import TemplateItem from "../others/TemplateItem";
import { templates } from "../template_registration";
import CustomPagination from "../commons/Custom/CustomPagination";

function Templates() {
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filterTemplate = (templates) => {
    return templates.filter((template) =>
      template.title.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PAGE_SIZE;
    const lastPageIndex = firstPageIndex + PAGE_SIZE;
    return filterTemplate(templates).slice(firstPageIndex, lastPageIndex);
  }, [currentPage, filter]);


  return (
    <Layout>
      <div className="">
        <div
          className="flex justify-around md:flex-row flex-col"
          style={{ textAlign: "" }}
        >
          <div className="w-1/3 lg:block hidden"></div>
          <div className="md:w-1/3 w-full md:text-left text-center">
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
          <div
            className="md:w-1/3 w-full md:mb-1 mb-4"
            style={{ fontSize: "12px" }}
          >
            <input
              value={filter}
              placeholder="Search for template"
              className="border py-1.5 px-3 rounded-full w-full"
              onChange={(e) => setFilter(e.target.value)}
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {currentTableData.map((template) => (
            <TemplateItem
              onClick={() => removeCurrentDetailsFromLocalStorage()}
              imagePath={template.imagePath}
              price={template.price}
              title={template.title}
              link={"/templates/" + replaceSpaceWithSlash(template.title)}
            />
          ))}
        </div>
        <div className="mt-5 flex justify-center">
          <CustomPagination
            currentPage={currentPage}
            totalCount={filterTemplate(templates).length}
            pageSize={PAGE_SIZE}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </Layout>
  );
}

export default Templates;
