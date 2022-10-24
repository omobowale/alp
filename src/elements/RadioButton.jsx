import React, { useContext } from "react";
import { FormContext } from "../features/template/form";

const RadioButton = ({ name, options, value }) => {
  const formContext = useContext(FormContext);
  const {handleFormChange } = formContext;
  return (
    <>
      {options.map((ele) => (
        <div className="form-check" key={options.indexOf(ele)}>
          <input
            className="form-check-input"
            type="radio"
            name={name}
            value={ele}
            checked={value === ele}
            style={{ width: "20px", height: "20px" }}
            onChange={handleFormChange}
          />
          <label className="form-check-label ml-2" style={{ fontSize: "20px" }}>
            {ele}
          </label>
        </div>
      ))}
    </>
  );
};

export default RadioButton;
