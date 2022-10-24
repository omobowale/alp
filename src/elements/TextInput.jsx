import React, { useContext } from "react";
import { FormContext } from "../features/template/form";

export default function TextInput({name, value=""}) {
  const formContext = useContext(FormContext);
  const {handleFormChange} = formContext;
  return (
    <>
      <input className="form-input" type="text" name={name} value={value} onChange={handleFormChange}/>
    </>
  );
}
