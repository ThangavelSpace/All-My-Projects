// src/components/LoanAmountInput.js
import React from 'react';

const LoanAmountInput = ({ loanAmount, onLoanAmountChange }) => (
  <div>
    <label>Loan Amount:</label>
    <input
      type="number"
      min="100000"
      max="10000000"
      step="50000"
      value={loanAmount}
      onChange={(e) => onLoanAmountChange(e.target.value)}
    />
    <input
      type="range"
      min="100000"
      max="10000000"
      step="50000"
      value={loanAmount}
      onChange={(e) => onLoanAmountChange(e.target.value)}
    />
  </div>
);

export default LoanAmountInput;
