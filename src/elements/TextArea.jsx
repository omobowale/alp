import React, { useContext } from "react";
import { FormContext } from "../features/template/form";

const TextArea = ({ name, value = "" }) => {
  const formContext = useContext(FormContext);
  const {handleFormChange } = formContext;
  return (
    <>
      <textarea
        row="5"
        value={value}
        name={name}
        className="form-control"
        onChange={handleFormChange}
      ></textarea>
    </>
  );
};

export default TextArea;
