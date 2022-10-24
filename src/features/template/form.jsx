import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { dispatch } from "../../app/store";
import { GetInputType } from "../../Utils/GetInputType";
import { SetProgress } from "./templateAPI";
import { setFormData } from "./templateSlice";

export const FormContext = React.createContext({
  handleFormChange: () => {},
});

const Form = ({ formData }) => {
  const nav = useNavigate()
  const [count, setCount] = useState(0);
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [form, setForm] = useState(formData);

  const handleFormChange = (event) => {
    const { name, value } = event.currentTarget;

    form.map((ele) => {
      if (ele.name === name) {
       ele.value = value
      }
    });

    //check form progress
    dispatch(SetProgress(form));
    const updatedForm = [...form];
    // Update state
    setForm(updatedForm);
  };

  useEffect(() => {
    if (count === 0) {
      setPrevDisabled(true);
    } else {
      setPrevDisabled(false);
    }

  }, [count]);
  const content = GetInputType(formData[count]);
  const question = formData[count].question;

  const HandlerSubmit = () => {
    dispatch(setFormData(form))

    nav("/checkout")
  }

  return (
    <>
      <div>
        <p className="form-question">{question}?</p>
      </div>
      <div className="mt-4" style={{ width: "90%" }}>
        <FormContext.Provider value={{ handleFormChange }}>
          {content}
        </FormContext.Provider>
      </div>

      <div
        className="d-flex justify-content-between mt-1"
        style={{ width: "90%" }}
      >
        <button
          className="btn"
          id="btn"
          disabled={prevDisabled}
          onClick={() =>
            setCount((prev) => {
              return prev - 1;
            })
          }
        >
          Previous
        </button>

        <button
          className="btn"
          id="btn"
          onClick={() => count + 1 >= formData.length ? HandlerSubmit()  :
            setCount((prev) => {
              return prev + 1;
            })
          }
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Form;
