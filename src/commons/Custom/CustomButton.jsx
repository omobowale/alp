import React from 'react'
import { font10 } from '../../constants/fonts'

function CustomButton(props) {
    
    return (
        <div className='mt-3'>
            <button type={props.type ? props.type : 'button'} disabled={props.disabled ? props.disabled : false} onClick={props.onClick} className='btn rounded-full px-8 border' style={{ color: props.textColor, backgroundColor: props.bgColor, fontSize: font10, width: "100%" }}>{props.label}</button>
        </div>
    )
}

export default CustomButton