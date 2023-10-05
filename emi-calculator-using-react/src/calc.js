import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [principal, setPrincipal] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [tenure, setTenure] = useState('');
  const [emi, setEmi] = useState('');
  
  const calculateEMI = () => {
    // Calculate EMI logic here
    // You can use a formula or a library like 'emi-calculator'
    // For simplicity, let's assume a fixed EMI formula here
    const p = parseFloat(principal);
    const r = parseFloat(interestRate) / 12 / 100; // Monthly interest rate
    const n = parseFloat(tenure) * 12; // Monthly tenure
    const emiAmount = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setEmi(emiAmount.toFixed(2));
  };

  const resetForm = () => {
    setPrincipal('');
    setInterestRate('');
    setTenure('');
    setEmi('');
  };

  return (
    <div className="calculator">
      <h1>EMI Calculator</h1>
      <div className="input-container">
        <label>Principal Amount (Rs.):</label>
        <input
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Interest Rate (% per annum):</label>
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Tenure (years):</label>
        <input
          type="number"
          value={tenure}
          onChange={(e) => setTenure(e.target.value)}
        />
      </div>
      <div className="result">
        {emi && <p>Your EMI: Rs.{emi}</p>}
      </div>
      <div className="button-container">
        <button onClick={calculateEMI}>Calculate EMI</button>
        <button onClick={resetForm}>Reset</button>
      </div>
    </div>
  );
}

export default Calculator;
