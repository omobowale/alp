import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dispatch } from "../../app/store";
import { GetInputType } from "../../Utils/GetInputType";
import { SetProgress } from "./templateAPI";
import { setFormData } from "./templateSlice";

export const FormContext = React.createContext({
  handleFormChange: () => {},
});

const Form = ({ formData, progress }) => {
  const nav = useNavigate()
  const [count, setCount] = useState(0);
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(true);
  const [form, setForm] = useState(formData);

  const handleFormChange = (event) => {
    const { name, value } = event.currentTarget;

    form.map((ele) => {
      if (ele.name === name) {
       ele.value = value
      }
      return ele
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

    if(count + 1 >= formData.length && progress !== 100){
      setNextDisabled(true)
    }else{setNextDisabled(false)}

  }, [count, progress]);

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
          disabled={nextDisabled}
          onClick={() => progress === 100 && count +1 >= formData.length ? HandlerSubmit()  :
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
