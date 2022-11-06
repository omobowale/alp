import React from 'react'
import CustomCheckBox from './CustomCheckBox'
import CustomDateRangeInput from './CustomDateRangeInput'
import CustomInput from './CustomInput'
import CustomRadioButton from './CustomRadioButton'
import CustomDropDown from './CustomDropDown'
import CustomDate from './CustomDate'
import CustomNumber from './CustomNumber'

function CustomQuestionResponse(props) {
    const getResponseInput = (type) => {
        if(type.toLowerCase() === "input") {
            return <CustomInput onChange={props.questionResponse.action} />
        }
        if(type.toLowerCase() === "number") {
            return <CustomNumber onChange={props.questionResponse.action} />
        }
        if(type.toLowerCase() === "date") {
            return <CustomDate onChange={props.questionResponse.action} />
        }
        if(type.toLowerCase() === "radio"){
            return props.questionResponse.options.map((option) => <CustomRadioButton name={Date.now()} label={option} />); 
        }
        if(type.toLowerCase() === "checkbox"){
            return props.questionResponse.options.map((option) => <CustomCheckBox name={Date.now()} label={option} />); 
        }
        if(type.toLowerCase() === "dropdown"){
            return <CustomDropDown options={props.questionResponse.options}  />; 
        }
        if(type.toLowerCase() === "date-range"){
            return <CustomDateRangeInput firstLabel={props.questionResponse.labelOne} secondLabel={props.questionResponse.labelTwo} /> 
        }
    }

    return (
        <>
            <div className='question mb-4'>
                {props.questionResponse.question}
            </div>
            <div className='answer'>
                {getResponseInput(props.questionResponse.type)}
            </div>
        </>
    )
}

export default CustomQuestionResponse