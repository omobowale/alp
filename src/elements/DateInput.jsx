import React, { useContext } from 'react'
import { FormContext } from "../features/template/form";

const DateInput = ({name, value=""}) => {
  const formContext = useContext(FormContext);
  const {handleFormChange} = formContext;
  return (
    <>
        <input type="date" className='form-control' name={name} value={value} onChange={handleFormChange}/>
    </>
  )
}

export default DateInput