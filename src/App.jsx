import React, { useState } from 'react';
import './App.css'; // Add your styles here
import Header from './Header';
import Addschema from './Addschema';
import Save from './Save';
import Popup from './Popup';



const schemaOptions = [
  { label: 'First Name', value: 'first_name' },
  { label: 'Last Name', value: 'last_name' },
  { label: 'Gender', value: 'gender' },
  { label: 'Age', value: 'age' },
  { label: 'Account Name', value: 'account_name' },
  { label: 'City', value: 'city' },
  { label: 'State', value: 'state' }
];

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [segmentName, setSegmentName] = useState('');
  const [selectedSchemas, setSelectedSchemas] = useState([]);
  const [availableSchemas, setAvailableSchemas] = useState(schemaOptions);
  const [currentSchema, setCurrentSchema] = useState('');

  // Open/close the popup
  const togglePopup = () => setIsOpen(!isOpen);

  // Handle schema dropdown change
  const handleSchemaChange = (e) => {
    setCurrentSchema(e.target.value);
  };

  // Add new schema to the list
  const addNewSchema = () => {
    if (!currentSchema) return;

    const selectedSchema = availableSchemas.find(
      (schema) => schema.value === currentSchema
    );
    setSelectedSchemas([...selectedSchemas, selectedSchema]);

    // Filter out the added schema from availableSchemas
    const updatedSchemas = availableSchemas.filter(
      (schema) => schema.value !== currentSchema
    );
    setAvailableSchemas(updatedSchemas);
    setCurrentSchema(''); // Reset dropdown
  };

  // Handle saving the segment
  const handleSaveSegment =  () => {
   
      const segmentData = {
        segment_name: segmentName,
        schema: selectedSchemas.map((schema) => ({
          [schema.value]: schema.label
        }))
      };
  
      console.log('Segment Data:', JSON.stringify(segmentData, null, 2));
     
        fetch("https://webhook.site/ea8c65e0-1d97-412c-b68f-dfe4bd157616", {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(segmentData)
      })
      
        .then(response => response)
      
        .then((data) => console.log('Success:', data))
       .catch((error)=>console.error('Error:', error))
   
    togglePopup(); // Close popup after saving
  };

  return (
    <div className="App">
      <button onClick={togglePopup} className='save-segment'>Save Segment</button>
      {isOpen && 
      <Popup 
      segmentName={segmentName} 
      setSegmentName={setSegmentName}
      currentSchema={currentSchema}        
      handleSchemaChange={handleSchemaChange}
      availableSchemas={availableSchemas}
      addNewSchema={addNewSchema}  
      selectedSchemas={selectedSchemas}
      setSelectedSchemas={setSelectedSchemas}
      handleSaveSegment={handleSaveSegment}
      togglePopup={togglePopup}
      /> }
    </div>
  );
};



export default App
