import React, { Component } from "react";
import "./SIPCalculator.css"; // Import the CSS file for styling

class SIPCalculator extends Component {
  constructor() {
    super();
    this.state = {
      monthlyInvestment: 1000,
      annualRateOfReturn: 12,
      timePeriod: 10,
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  calculateSIP = () => {
    // Parse input values as numbers
    const monthlyInvestment = parseFloat(this.state.monthlyInvestment);
    const annualRateOfReturn = parseFloat(this.state.annualRateOfReturn);
    const timePeriod = parseFloat(this.state.timePeriod);

    // Check for valid inputs
    if (isNaN(monthlyInvestment) || isNaN(annualRateOfReturn) || isNaN(timePeriod)) {
      return {
        totalInvested: "Invalid Input",
        totalValue: "Invalid Input",
        totalInterestEarned: "Invalid Input",
      };
    }

    const monthlyRate = (annualRateOfReturn / 100) / 12;
    const totalMonths = timePeriod * 12;

    let totalValue = 0;

    for (let month = 1; month <= totalMonths; month++) {
      totalValue += monthlyInvestment;
      totalValue *= 1 + monthlyRate;
    }

    const totalInvested = monthlyInvestment * totalMonths;
    const totalInterestEarned = totalValue - totalInvested;

    return {
      totalInvested: totalInvested.toFixed(0),
      totalValue: totalValue.toFixed(0),
      totalInterestEarned: totalInterestEarned.toFixed(0),
    };
  };

  render() {
    const { monthlyInvestment, annualRateOfReturn, timePeriod } = this.state;
    const { totalInvested, totalValue, totalInterestEarned } =
      this.calculateSIP();

    return (
      <div className="sip-calculator">
        <h1>SIP Calculator</h1>
        <div className="input-container">
          <label>Monthly Investment:</label>
          <input
            type="range"
            name="monthlyInvestment"
            min="0"
            max="10000"
            step="100"
            value={monthlyInvestment}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="monthlyInvestment"
            value={monthlyInvestment}
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
          <p>Total Invested Amount:Rs.{totalInvested}</p>
          <p>Interest Earned: Rs.{totalInterestEarned}</p>
          <p>Total Value: Rs.{totalValue}</p>
        </div>
      </div>
    );
  }
}

export default SIPCalculator;
