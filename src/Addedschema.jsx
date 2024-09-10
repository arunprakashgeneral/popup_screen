import React from 'react'
import './addedschema.css'

const Addedschema = ({selectedSchemas,setSelectedSchemas,availableSchemas}) => {
  return (
    <div className='addedschema'>
              {selectedSchemas.length > 0 && (
                <div>
                  {selectedSchemas.map((schema, index) => (
                    <div key={index}>
                      <select
                        value={schema.value}
                        onChange={(e) => {
                          // Handle changing the selected schema
                          const updatedSchema = availableSchemas.find(
                            (option) => option.value === e.target.value
                          );
                          const updatedSchemas = [...selectedSchemas];
                          updatedSchemas[index] = updatedSchema;
                          setSelectedSchemas(updatedSchemas);
                        }}
                      >
                        <option value={schema.value}>
                          {schema.label} (selected)
                        </option>
                        {availableSchemas.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  ))}
                </div>
              )}
              </div>
  )
}

export default Addedschema
