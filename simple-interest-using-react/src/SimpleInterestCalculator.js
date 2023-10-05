import React, { useState } from 'react';
import './SimpleInterestCalculator.css';

const SimpleInterestCalculator = () => {
  const [principal, setPrincipal] = useState(1000);
  const [rate, setRate] = useState(5);
  const [time, setTime] = useState(1);

  const calculateInterest = () => {
    const interest = (principal * rate * time) / 100;
    const totalAmount = principal + interest;
    return { interest, totalAmount };
  };

  const handlePrincipalChange = (event) => {
    setPrincipal(parseFloat(event.target.value));
  };

  const handleRateChange = (event) => {
    setRate(parseFloat(event.target.value));
  };

  const handleTimeChange = (event) => {
    setTime(parseFloat(event.target.value));
  };

  const { interest, totalAmount } = calculateInterest();

  return (
    <div className="calculator">
      <h2>Simple Interest Calculator</h2>
      <div className="input-container">
        <label>Principal Amount:</label>
        <input type="number" value={principal} onChange={handlePrincipalChange} />
      </div>
      <div className="input-container">
        <label>Rate of Interest (per annum %):</label>
        <input type="number" value={rate} onChange={handleRateChange} />
      </div>
      <div className="input-container">
        <label>Time Period (in years):</label>
        <input type="number" value={time} onChange={handleTimeChange} />
      </div>
      <div className="result">
        <p>Interest: {interest.toFixed(2)}</p>
        <p>Total Amount: {totalAmount.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default SimpleInterestCalculator;
