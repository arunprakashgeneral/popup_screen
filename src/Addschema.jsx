import React from 'react'
import Addedschema from './Addedschema'
import './addschema.css'; 

const Addschema = ({currentSchema,handleSchemaChange,availableSchemas,addNewSchema,selectedSchemas, setSelectedSchemas}) => {
  return (
    <div className='schemalist'>
        
       {/* Dropdown to select schema */}
       <p>To save your segment, you need to add the the schemas to build the query</p>
       <Addedschema
              availableSchemas={availableSchemas}
              selectedSchemas={selectedSchemas} 
              setSelectedSchemas={setSelectedSchemas}
       />
            <select value={currentSchema} onChange={handleSchemaChange} className='select'>
              <option value="" disabled>
                Select schema
              </option>
              {availableSchemas.map((schema) => (
                <option key={schema.value} value={schema.value}>
                  {schema.label}
                </option>
              ))}
            </select>

            {/* Add new schema link */}
            <button onClick={addNewSchema}>+ Add new schema</button>
            
    </div>
   
  )
}

export default Addschema
