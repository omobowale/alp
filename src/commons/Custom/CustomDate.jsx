import React from 'react'
import { blueColor } from '../../constants/colors'
import { font12 } from '../../constants/fonts'
import { insertPlaceHolderMarker } from '../../constants/strings';

function CustomDate(props) {

  const onChange = (event) => {
    props.onChange(insertPlaceHolderMarker(event.target.value));
  };
  return (
    <>
      <input min={1} placeholder="1" onChange={(event) => onChange(event)} type="date" className='form-control focus:outline-none focus:border-none focus:ring-0 p-0 m-0' style={{ outline: "none", backgroundColor: "transparent", borderTop: 0, borderLeft: 0, borderRight: 0, borderBottom: `4px solid ${blueColor}`, fontSize: font12 }} />
    </>
  )
}

export default CustomDate