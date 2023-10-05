// src/components/LoanTenureInput.js
import React from 'react';

const LoanTenureInput = ({ loanTenure, onLoanTenureChange }) => {
  const handleRangeChange = (e) => {
    const years = e.target.value;
    onLoanTenureChange(years * 12); // Convert years to months and update the state
  };

  const handleInputChange = (e) => {
    const years = e.target.value;
    onLoanTenureChange(years * 12); // Convert years to months and update the state
  };

  return (
    <div>
      <label>Loan Tenure (Years):</label>
      
      <input
        type="number"
        min="1"
        max="30" // Maximum value set to 30 years
        step="1"
        value={loanTenure / 12} // Display years in the manual input
        onChange={handleInputChange}
      />
      <span>years</span>
      <input
        type="range"
        min="1"
        max="30" // Maximum value set to 30 years
        step="1"
        value={loanTenure / 12} // Display years in the range input
        onChange={handleRangeChange}
      />
    </div>
  );
};

export default LoanTenureInput;
