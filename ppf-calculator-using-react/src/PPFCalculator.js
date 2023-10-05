import React, { useState, useEffect } from 'react';
import './PPFCalculator.css'; // Import the CSS file

function PPFCalculator() {
  const [yearlyInvestment, setYearlyInvestment] = useState(1000);
  const [timePeriod, setTimePeriod] = useState(5);
  const [interestRate, setInterestRate] = useState(7);
  const [totalInvestedAmount, setTotalInvestedAmount] = useState(0);
  const [totalInterestAmount, setTotalInterestAmount] = useState(0);
  const [totalMaturityAmount, setTotalMaturityAmount] = useState(0);

  useEffect(() => {
    calculatePPFAmounts();
  }, [yearlyInvestment, timePeriod, interestRate]);

  const calculatePPFAmounts = () => {
    const principal = yearlyInvestment;
    const rate = interestRate / 100;
    const years = timePeriod;

    // Calculate the total invested amount
    const totalInvested = principal * years;

    // Calculate the total interest amount with annual compounding
    let totalInterest = 0;
    let balance = 0; // Initial balance at the beginning of the first year

    for (let year = 1; year <= years; year++) {
      balance += principal; // Add the yearly investment to the balance at the beginning of the year
      const interestForYear = balance * rate;
      totalInterest += interestForYear;
      balance += interestForYear; // Add the interest to the balance at the end of the year
    }

    // Calculate the total maturity amount
    const totalMaturity = totalInvested + totalInterest;

    setTotalInvestedAmount(totalInvested);
    setTotalInterestAmount(totalInterest.toFixed(0)); // Round to two decimal places
    setTotalMaturityAmount(totalMaturity.toFixed(0)); // Round to two decimal places
  };

  return (
    <div className="box-model-container">
      <h2>PPF Calculator</h2>
      <div className="input-container">
        {/* Yearly Investment (Manual Input) */}
        <div className="input-group">
          <label>Yearly Investment (Manual Input):</label>
          <input
            type="number"
            min="500"
            max="150000"
            step="500"
            value={yearlyInvestment}
            onChange={(e) => setYearlyInvestment(parseInt(e.target.value))}
          />
        </div>

        {/* Yearly Investment (Range Slider) */}
        <div className="input-group">
          <label>Yearly Investment (Range Slider):</label>
          <input
            type="range"
            min="500"
            max="150000"
            step="500"
            value={yearlyInvestment}
            onChange={(e) => setYearlyInvestment(parseInt(e.target.value))}
          />
        </div>

        {/* Time Period (Manual Input) */}
        <div className="input-group">
          <label>Time Period (Manual Input) (Years):</label>
          <input
            type="number"
            min="1"
            max="15"
            step="1"
            value={timePeriod}
            onChange={(e) => setTimePeriod(parseInt(e.target.value))}
          />
        </div>

        {/* Time Period (Range Slider) */}
        <div className="input-group">
          <label>Time Period (Range Slider) (Years):</label>
          <input
            type="range"
            min="1"
            max="15"
            step="1"
            value={timePeriod}
            onChange={(e) => setTimePeriod(parseInt(e.target.value))}
          />
        </div>

        {/* Rate of Interest (Manual Input) */}
        <div className="input-group">
          <label>Rate of Interest (Manual Input) (%):</label>
          <input
            type="number"
            min="1"
            max="15"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(parseFloat(e.target.value))}
          />
        </div>

        {/* Rate of Interest (Range Slider) */}
        <div className="input-group">
          <label>Rate of Interest (Range Slider) (%):</label>
          <input
            type="range"
            min="1"
            max="15"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(parseFloat(e.target.value))}
          />
        </div>
      </div>

      <div className="result-container">
        <h3>PPF Amount Details</h3>
        <p>Total Invested Amount: ₹{totalInvestedAmount}</p>
        <p>Total Interest Amount: ₹{totalInterestAmount}</p>
        <p>Total Maturity Amount: ₹{totalMaturityAmount}</p>
      </div>
    </div>
  );
}

export default PPFCalculator;
