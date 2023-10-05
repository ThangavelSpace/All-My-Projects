import React, { Component } from "react";
import "./LumpSumCalculator.css"; // Import the CSS file for styling

class LumpSumCalculator extends Component {
  constructor() {
    super();
    this.state = {
      lumpSumAmount: 50000,
      annualRateOfReturn: 8,
      timePeriod: 5,
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  calculateLumpSum = () => {
    // Parse input values as numbers
    const lumpSumAmount = parseFloat(this.state.lumpSumAmount);
    const annualRateOfReturn = parseFloat(this.state.annualRateOfReturn);
    const timePeriod = parseFloat(this.state.timePeriod);

    // Check for valid inputs
    if (isNaN(lumpSumAmount) || isNaN(annualRateOfReturn) || isNaN(timePeriod)) {
      return {
        totalInvested: "Invalid Input",
        totalValue: "Invalid Input",
        totalInterestEarned: "Invalid Input",
      };
    }

    const annualRate = annualRateOfReturn / 100;

    const totalValue = lumpSumAmount * Math.pow(1 + annualRate, timePeriod);

    const totalInvested = lumpSumAmount;
    const totalInterestEarned = totalValue - totalInvested;

    return {
      totalInvested: totalInvested.toFixed(0),
      totalValue: totalValue.toFixed(0),
      totalInterestEarned: totalInterestEarned.toFixed(0),
    };
  };

  render() {
    const { lumpSumAmount, annualRateOfReturn, timePeriod } = this.state;
    const { totalInvested, totalValue, totalInterestEarned } =
      this.calculateLumpSum();

    return (
      <div className="lump-sum-calculator">
        <h1>Lump Sum Investment Calculator</h1>
        <div className="input-container">
          <label>Lump Sum Amount:</label>
          <input
            type="range"
            name="lumpSumAmount"
            min="0"
            max="100000"
            step="1000"
            value={lumpSumAmount}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="lumpSumAmount"
            value={lumpSumAmount}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="input-container">
          <label>Rate of Return (p.a.):</label>
          <input
            type="range"
            name="annualRateOfReturn"
            min="0"
            max="20"
            step="0.1"
            value={annualRateOfReturn}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="annualRateOfReturn"
            value={annualRateOfReturn}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="input-container">
          <label>Time Period (years):</label>
          <input
            type="range"
            name="timePeriod"
            min="1"
            max="30"
            step="1"
            value={timePeriod}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="timePeriod"
            value={timePeriod}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="results">
          <p>Total Invested Amount: Rs.{totalInvested}</p>     
          <p>Interest Earned: Rs.{totalInterestEarned}</p>
          <p>Total Value: Rs.{totalValue}</p>
        </div>
      </div>
    );
  }
}

export default LumpSumCalculator;
