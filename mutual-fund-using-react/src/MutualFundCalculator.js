import React, { Component } from "react";
import "./MutualFundCalculator.css"; // Import the CSS file for styling

class MutualFundCalculator extends Component {
  constructor() {
    super();
    this.state = {
      initialInvestment: 50000,
      annualRateOfReturn: 12,
      timePeriod: 5,
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  calculateReturns = () => {
    // Parse input values as numbers
    const initialInvestment = parseFloat(this.state.initialInvestment);
    const annualRateOfReturn = parseFloat(this.state.annualRateOfReturn);
    const timePeriod = parseFloat(this.state.timePeriod);

    // Check for valid inputs
    if (isNaN(initialInvestment) || isNaN(annualRateOfReturn) || isNaN(timePeriod)) {
      return {
        totalInvested: "Invalid Input",
        totalValue: "Invalid Input",
        totalReturns: "Invalid Input",
      };
    }

    const annualRate = annualRateOfReturn / 100;

    const totalValue = initialInvestment * Math.pow(1 + annualRate, timePeriod);

    const totalInvested = initialInvestment;
    const totalReturns = totalValue - totalInvested;

    return {
      totalInvested: totalInvested.toFixed(0),
      totalValue: totalValue.toFixed(0),
      totalReturns: totalReturns.toFixed(0),
    };
  };

  render() {
    const { initialInvestment, annualRateOfReturn, timePeriod } = this.state;
    const { totalInvested, totalValue, totalReturns } = this.calculateReturns();

    return (
      <div className="mutual-fund-calculator">
        <h1>Mutual Fund Returns Calculator</h1>
        <div className="input-container">
          <label>Initial Investment:</label>
          <input
            type="range"
            name="initialInvestment"
            min="0"
            max="100000"
            step="1000"
            value={initialInvestment}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="initialInvestment"
            value={initialInvestment}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="input-container">
          <label>Annual Rate of Return (%):</label>
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
            <p>Total Returns: Rs.{totalReturns}</p>
          <p>Total Value: Rs.{totalValue}</p>
        </div>
      </div>
    );
  }
}

export default MutualFundCalculator;
