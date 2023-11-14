import React, { useEffect, useState } from "react";
import UserSavedTemplateItem from "../commons/fragments/UserSavedTemplateItem";
import { bgColorFaintWhite } from "../constants/colors";
import {
  DATATOBESAVED,
  replaceSpaceWithSlash,
  TEMPLATE_SAVED,
} from "../helperfunctions/strings";
import { getUserTemplates, saveTemplate } from "../helperfunctions/templates";
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

  const getActualUserTemplates = (data) => {
    let templates = [];
    for (let d in data) {
      if (data[d].length > 0) {
        templates.push(data[d]);
      }
    }

    return templates;
  };

  useEffect(() => {
    const dataToBeSaved = localStorage.getItem(DATATOBESAVED);
    if (dataToBeSaved && count === 0) {
      let data = {
        ...JSON.parse(dataToBeSaved),
        email: getLoggedInUser()?.email,
        user_id: getLoggedInUser()?.id,
        temp_id: "",
        Template_data: JSON.parse(dataToBeSaved),
      };
      saveTemplate(data).then((res) => {
        toast.success(TEMPLATE_SAVED);
        localStorage.removeItem(DATATOBESAVED);
        setCount(1);
      });
    }
  }, []);

  useEffect(() => {
    setTemplatesLoading(true);
    localStorage.removeItem("edit");
    getUserTemplates(getLoggedInUser()?.id)
      .then((response) => {
        
        setUserTemplates(getActualUserTemplates(response.data));
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
            {userTemplates.map((t) => {
              return t.map((x) => {
                return (
                  <div className="border mb-3 shadow-sm p-2">
                    <UserSavedTemplateItem
                      templateId={x?.id}
                      title={x?.label.toUpperCase()}
                      name={x?.name?.toUpperCase()}
                      userResponse={x?.userResponse}
                      price={x?.price}
                      // link={
                      //   "/templates/" +
                      //   replaceSpaceWithSlash(
                      //     templates?.find((t) => t.docId === x.name)
                      //       ?.title
                      //   )
                      // }
                    />
                  </div>
                );
              });
            })}
          </div>
        )}
      </div>
      <ToastContainer />
    </Layout>
  );
}

export default Dashboard;
