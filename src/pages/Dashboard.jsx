import React, { useEffect, useState } from "react";
import UserSavedTemplateItem from "../commons/fragments/UserSavedTemplateItem";
import { bgColorFaintWhite } from "../constants/colors";
import {
  DATATOBESAVED,
  replaceSpaceWithSlash,
  TEMPLATE_SAVED,
} from "../helperfunctions/strings";
import { saveTemplate } from "../helperfunctions/templates";
import { getLoggedInUser } from "../helperfunctions/user";
import Layout from "../Layout";
import { templates } from "../template_registration";
import axiosTemplate from "../utils/axiosTemplate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Dashboard(props) {
  const user = JSON.parse(localStorage.getItem("user"));
  const [userTemplates, setUserTemplates] = useState([]);
  const [templatesLoading, setTemplatesLoading] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const dataToBeSaved = localStorage.getItem(DATATOBESAVED);
    console.log(dataToBeSaved);
    if (dataToBeSaved && count === 0) {
      let data = {
        ...JSON.parse(dataToBeSaved),
        email: getLoggedInUser()?.email,
      };
      saveTemplate(data).then((res) => {
        toast.success(TEMPLATE_SAVED);
        localStorage.removeItem(DATATOBESAVED);
        console.log("local storage item has been remove");
        setCount(1);
      });
    }
  }, []);

  useEffect(() => {
    setTemplatesLoading(true);
    localStorage.removeItem("edit");
    axiosTemplate(
      "/api/UserTemplate/GetAll",
      "GET",
      null,
      localStorage.getItem("token"),
      null
    )
      .then((response) => {
        console.log(response);
        setUserTemplates(response?.data?.data);
      })
      .catch((err) => console.log(err, "err"))
      .finally(() => {
        setTemplatesLoading(false);
      });
  }, []);

  return (
    <Layout showLoader={templatesLoading}>
      <div className="flex gap-20">
        <div
          style={{ fontSize: "11px", backgroundColor: bgColorFaintWhite }}
          className="w-1/12 mr-4"
        >
          <span style={{ fontWeight: "700" }}>Welcome</span>
          <br />
          {user?.email}
        </div>
        {userTemplates.length === 0 && !templatesLoading && (
          <div
            className="flex justify-center items-center font-semibold w-11/12"
            style={{ height: "40vh" }}
          >
            You do not have any saved templates
          </div>
        )}
        {userTemplates?.length > 0 && (
          <div className="grid md:grid-cols-3 grid-cols-1 w-11/12 gap-3">
            {userTemplates.map((template) => {
              return (
                <div className="border mb-3 shadow-sm p-2">
                  <UserSavedTemplateItem
                    title={"Test"}
                    userResponse={template?.userResponse}
                    price={"1500"}
                    link={
                      "/templates/" +
                      replaceSpaceWithSlash(
                        templates?.find((t) => t.docId === template.docId)
                          ?.title
                      )
                    }
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
      <ToastContainer />
    </Layout>
  );
}

export default Dashboard;
