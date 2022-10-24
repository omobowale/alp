import React, { useContext } from "react";
import { FormContext } from "../features/template/form";

const SelectInput = ({name, options, value}) => {
  const formContext = useContext(FormContext);
  const {handleFormChange} = formContext;
  return (
    <>
      <select className="form-control" name={name} onChange={handleFormChange}  value={value}>
        <option>Select...</option>
        {options.map((ele) => <option value={ele.value} key={options.indexOf(ele)} >{ele}</option>)}
      </select>
    </>
  );
};

export default SelectInput;
