import React from 'react'
import Header from './Header'
import Addschema from './Addschema'
import Save from './Save'
import './App.css'

const Popup = ({
    segmentName,
    setSegmentName,
    currentSchema,
    handleSchemaChange,
    handleSaveSegment,
    availableSchemas,
    addNewSchema,
    selectedSchemas,
    setSelectedSchemas,
    togglePopup
}) => {
  return (
    <div className='popup'>
        <Header 
            segmentName={segmentName} 
            setSegmentName={setSegmentName}
        />
        <Addschema
            currentSchema={currentSchema}
            handleSchemaChange={handleSchemaChange}
            availableSchemas={availableSchemas}
            addNewSchema={addNewSchema}  
            selectedSchemas={selectedSchemas}
            setSelectedSchemas={setSelectedSchemas}
        />
        <Save 
            handleSaveSegment={handleSaveSegment}
            togglePopup={togglePopup}
        />
    </div>
  )
}

export default Popup
