import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const initialInvestment = 100000;
  const initialInterestRate = 5.5;
  const initialPeriod = 1;

  const [investment, setInvestment] = useState(initialInvestment);
  const [interestRate, setInterestRate] = useState(initialInterestRate);
  const [period, setPeriod] = useState(initialPeriod);
  const [estimatedReturns, setEstimatedReturns] = useState(0);
  const [totalValue, setTotalValue] = useState(0);

  const calculateReturns = () => {
    const principal = investment;
    const rate = interestRate / 100;
    const time = period;
    const amount = principal * Math.pow(1 + rate, time);
    const interest = amount - principal;

    setEstimatedReturns(interest);
    setTotalValue(amount);
  };

  const resetValues = () => {
    setInvestment(initialInvestment);
    setInterestRate(initialInterestRate);
    setPeriod(initialPeriod);
    setEstimatedReturns(0);
    setTotalValue(0);
  };

  return (
    <div className="calculator-box">
      <h1>Fixed Deposit Calculator</h1>
      <div className="input-container">
        <label>Total Investment: Rs.{investment}</label>
        <input
          type="range"
          min="100000"
          max="1500000"
          step="50000"
          value={investment}
          onChange={(e) => setInvestment(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Rate of Interest: {interestRate}%</label>
        <input
          type="range"
          min="5.5"
          max="12"
          step="0.25"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Period (in years): {period}</label>
        <input
          type="range"
          min="1"
          max="10"
          step="0.5"
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
        />
      </div>
      <button onClick={calculateReturns}>Calculate Returns</button>
      <button onClick={resetValues}>Reset</button> {/* Add Reset button */}
      <div className="result-container">
        <p>Invested Amount : Rs.{investment}</p>
        <p>Estimated Returns: Rs.{estimatedReturns}</p>
        <p>Total Value: Rs.{totalValue}</p>
      </div>
    </div>
  );
}

export default Calculator;
