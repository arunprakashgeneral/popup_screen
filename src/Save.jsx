import React from 'react'
import './save.css' 

const Save = ({handleSaveSegment,togglePopup}) => {
  return (
    <div className='save'>
      <button onClick={handleSaveSegment} className='save-btn'>Save Segment</button>
      <button className="close-btn" onClick={togglePopup}>Close</button>
   
    </div>
  )
}

export default Save
