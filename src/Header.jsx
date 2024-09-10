import React from 'react'
import './header.css' 

const Header = ({segmentName,setSegmentName}) => {
  return (
    <div className='header'>
        <h2 className=''>Saving Segment</h2>
        <p>Enter the Name of the Segment </p>
        <input
          type="text"
          placeholder='Name of the Segment'
          value={segmentName}
          onChange={(e) => setSegmentName(e.target.value)}
        />
    </div>
  )
}

export default Header
