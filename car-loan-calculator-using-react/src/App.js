import React, { useState } from 'react';
import './App.css';

function App() {
  const [principal, setPrincipal] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [emi, setEmi] = useState('');

  const calculateEMI = () => {
    const p = parseFloat(principal);
    const r = parseFloat(interestRate) / 100 / 12;
    const n = parseFloat(loanTerm) * 12;

    if (p && r && n) {
      const emiValue = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      setEmi(emiValue.toFixed(2));
    } else {
      setEmi('');
    }
  };

  const resetCalculator = () => {
    setPrincipal('');
    setInterestRate('');
    setLoanTerm('');
    setEmi('');
  };

  return (
    <div className="App">
      <h1>Car Loan EMI Calculator</h1>
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
        <label>Loan Term (years):</label>
        <input
          type="number"
          value={loanTerm}
          onChange={(e) => setLoanTerm(e.target.value)}
        />
      </div>
      <div className="result-container">
        <p>Monthly EMI: Rs.{emi}</p>
      </div>
      <div className="button-container">
        <button onClick={calculateEMI}>Calculate EMI</button>
        <button onClick={resetCalculator}>Reset</button>
      </div>
    </div>
  );
}

export default App;
