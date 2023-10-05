// NPSInput.js
import React, { useState } from 'react';

function NPSInput({ onInputChange }) {
  const [investment, setInvestment] = useState(0);
  const [returnRate, setReturnRate] = useState(0);
  const [age, setAge] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Update the state based on the input name
    if (name === 'investment') setInvestment(value);
    if (name === 'returnRate') setReturnRate(value);
    if (name === 'age') setAge(value);

    // Pass the input values to the parent component for calculation
    onInputChange({
      investment: parseFloat(investment),
      returnRate: parseFloat(returnRate),
      age: parseFloat(age),
    });
  };

  return (
    <div>
      <h2>NPS Calculator</h2>
      <label>
        Monthly Investment (₹):
        <input
          type="number"
          name="investment"
          value={investment}
          onChange={handleInputChange}
        />
        <input
          type="range"
          min="0"
          max="100000"
          name="investment"
          value={investment}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Expected Return (%):
        <input
          type="number"
          name="returnRate"
          value={returnRate}
          onChange={handleInputChange}
        />
        <input
          type="range"
          min="0"
          max="15"
          name="returnRate"
          value={returnRate}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Age:
        <input
          type="number"
          name="age"
          value={age}
          onChange={handleInputChange}
        />
        <input
          type="range"
          min="18"
          max="70"
          name="age"
          value={age}
          onChange={handleInputChange}
        />
      </label>
      <br />
    </div>
  );
}

export default NPSInput;
