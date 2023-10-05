// App.js
import React, { useState } from 'react';
import './App.css';
import NPSBox from './NPSBox';
import NPSInput from './NPSInput';
import NPSCalculator from './NPSCalculator';

function App() {
  const [inputData, setInputData] = useState({
    investment: 0,
    returnRate: 0,
    age: 0,
  });

  const handleInputChange = (newData) => {
    setInputData(newData);
  };

  return (
    <div className="App">
      <NPSBox>
        <NPSInput onInputChange={handleInputChange} />
        <NPSCalculator inputData={inputData} />
      </NPSBox>
    </div>
  );
}

export default App;
