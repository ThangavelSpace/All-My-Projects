import React, { useState } from "react";
import "./App.css";

function App() {
  const [initialDeposit, setInitialDeposit] = useState(1000);
  const [interestRate, setInterestRate] = useState(5);
  const [timePeriod, setTimePeriod] = useState(1);
  const [finalAmount, setFinalAmount] = useState(0);

  const calculateAPY = () => {
    const rate = interestRate / 100;
    const amount = initialDeposit * Math.pow(1 + rate, timePeriod);
    setFinalAmount(amount.toFixed(2));
  };
  const initialDepositDefault = 0;
  const interestRateDefault = 0;
  const timePeriodDefault = 0;
  const resetForm = () => {
    setInitialDeposit(initialDepositDefault);
    setInterestRate(interestRateDefault);
    setTimePeriod(timePeriodDefault);
    setFinalAmount(0);
  };
  return (
    <div className="App">
      <h1>APY Calculator </h1>
      <p>(Annual Percentage Yield)</p>
      <div className="input-container">
        <label>Initial Deposit (Rupees):</label>
        <input
          type="number"
          value={initialDeposit}
          onChange={(e) => setInitialDeposit(parseFloat(e.target.value))}
        />
      </div>
      <div className="input-container">
        <label>Interest Rate (%):</label>
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(parseFloat(e.target.value))}
        />
      </div>
      <div className="input-container">
        <label>Time Period (years):</label>
        <input
          type="number"
          value={timePeriod}
          onChange={(e) => setTimePeriod(parseFloat(e.target.value))}
        />
      </div>
      <button onClick={calculateAPY}>Calculate</button>
      <button className="reset" onClick={resetForm}>Reset</button>
      <div className="result">
        <p>Annual Yield: Rs.{finalAmount}</p>
      </div>
    </div>
  );
}

export default App;
