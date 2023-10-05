import React, { useState } from 'react';
import './cicalculator.css';

const CompoundInterestCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [result, setResult] = useState('');

  const calculateInterest = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(time);

    const compoundInterest = p * Math.pow(1 + r, t) - p;
    setResult(compoundInterest.toFixed(2));
  };

  const resetCalculator = () => {
    setPrincipal('');
    setRate('');
    setTime('');
    setResult('');
  };

  return (
    <div className="calculator-container">
      <h1>Compound Interest Calculator</h1>
      <div className="input-container">
        <label>Principal Amount:</label>
        <input
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Annual Interest Rate (%):</label>
        <input
          type="number"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Time (years):</label>
        <input
          type="number"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <div className="result-container">
        <button onClick={calculateInterest}>Calculate</button>
        <button onClick={resetCalculator}>Reset</button>
        {result && <p>Compound Interest: Rs.{result}</p>}
      </div>
    </div>
  );
};

export default CompoundInterestCalculator;
