import React, { useEffect, useState } from "react";
import UserSavedTemplateItem from "../commons/fragments/UserSavedTemplateItem";
import { bgColorFaintWhite } from "../constants/colors";
import Layout from "../Layout";
import axiosTemplate from "../utils/axiosTemplate";

function Dashboard(props) {
  const user = JSON.parse(localStorage.getItem("user"));
  const [userTemplates, setUserTemplates] = useState([]);

  useEffect(() => {
    axiosTemplate("/api/UserTemplate/GetAll", "GET", null, localStorage.getItem("token"), null)
      .then((response) => console.log(response))
      .catch((err) => console.log(err, "err"));
  }, []);

  return (
    <Layout>
      <div className="flex gap-20">
        <div
          style={{ fontSize: "11px", backgroundColor: bgColorFaintWhite }}
          className="w-1/12"
        >
          <span style={{ fontWeight: "700" }}>Welcome</span>
          <br />
          {user?.email}
        </div>
        <div className="grid grid-cols-3 w-11/12">
          <UserSavedTemplateItem title={"Test"} price={"1500"} />
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
