import React from 'react'
import { blueColor } from '../../constants/colors'
import { font12 } from '../../constants/fonts'

function CustomDropDown(props) {
  return (
      <select className='form-control focus:outline-none focus:border-none focus:ring-0 p-0 m-0' style={{ outline: "none", backgroundColor: "transparent", borderTop: 0, borderLeft: 0, borderRight: 0, borderBottom: `4px solid ${blueColor}`, fontSize: font12 }}>
        {props.options.map(option => <option value={option}>{option}</option>)}
      </select>
  )
}

export default CustomDropDown