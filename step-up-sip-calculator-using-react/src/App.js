import React, { useState } from 'react';
import './StepUpSIPCalculator.css'; // Import the CSS file

function StepUpSIPCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(0);
  const [annualStepUp, setAnnualStepUp] = useState(0);
  const [expectedReturnRate, setExpectedReturnRate] = useState(0);
  const [timePeriod, setTimePeriod] = useState(0);
  const [investedAmount, setInvestedAmount] = useState(0);
  const [estimatedReturns, setEstimatedReturns] = useState(0);
  const [totalValue, setTotalValue] = useState(0);

  const calculateSIP = () => {
    const months = timePeriod * 12;
    let updatedMonthlyInvestment = monthlyInvestment;
    let currentAmount = 0;
    let totalInvested = 0;

    for (let month = 1; month <= months; month++) {
      totalInvested += updatedMonthlyInvestment;
      currentAmount += updatedMonthlyInvestment;
      currentAmount *= (1 + expectedReturnRate / 1200);
      updatedMonthlyInvestment += (updatedMonthlyInvestment * annualStepUp / 100) / 12;
    }

    setInvestedAmount(totalInvested.toFixed(2));
    setEstimatedReturns((currentAmount - totalInvested).toFixed(2));
    setTotalValue(currentAmount.toFixed(2));
  };

  return (
    <div className="container">
      <h1>Step-up SIP Calculator</h1>
      <div>
        <label>Monthly Investment:</label>
        <input
          type="number"
          value={monthlyInvestment}
          onChange={(e) => setMonthlyInvestment(parseFloat(e.target.value))}
        />
      </div>
      <div>
        <label>Annual Step-up (%):</label>
        <input
          type="number"
          value={annualStepUp}
          onChange={(e) => setAnnualStepUp(parseFloat(e.target.value))}
        />
      </div>
      <div>
        <label>Expected Return Rate (%):</label>
        <input
          type="number"
          value={expectedReturnRate}
          onChange={(e) => setExpectedReturnRate(parseFloat(e.target.value))}
        />
      </div>
      <div>
        <label>Time Period (years):</label>
        <input
          type="number"
          value={timePeriod}
          onChange={(e) => setTimePeriod(parseFloat(e.target.value))}
        />
      </div>
      <button onClick={calculateSIP}>Calculate</button>
      <div>
        <h2>Results</h2>
        <p>Invested Amount: ₹{investedAmount}</p>
        <p>Estimated Returns: ₹{estimatedReturns}</p>
        <p>Total Value: ₹{totalValue}</p>
      </div>
    </div>
  );
}

export default StepUpSIPCalculator;
