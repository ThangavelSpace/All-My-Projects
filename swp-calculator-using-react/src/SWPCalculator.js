import React, { Component } from "react";
import "./SWPCalculator.css"; // Import the CSS file for styling

class SWPCalculator extends Component {
  constructor() {
    super();
    this.state = {
      totalInvestments: 500000,
      withdrawalPerMonth: 10000,
      expectedReturnRate: 8,
      timePeriod: 5,
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  calculateSWP = () => {
    // Parse input values as numbers
    const totalInvestments = parseFloat(this.state.totalInvestments);
    const withdrawalPerMonth = parseFloat(this.state.withdrawalPerMonth);
    const expectedReturnRate = parseFloat(this.state.expectedReturnRate);
    const timePeriod = parseFloat(this.state.timePeriod);

    // Check for valid inputs
    if (
      isNaN(totalInvestments) ||
      isNaN(withdrawalPerMonth) ||
      isNaN(expectedReturnRate) ||
      isNaN(timePeriod)
    ) {
      return {
        totalInvestment: "Invalid Input",
        totalWithdrawals: "Invalid Input",
        finalValue: "Invalid Input",
      };
    }

    const monthlyReturnRate = (expectedReturnRate / 100) / 12;
    const totalMonths = timePeriod * 12;

    let finalValue = totalInvestments;
    let totalWithdrawals = 0;

    for (let month = 1; month <= totalMonths; month++) {
      finalValue -= withdrawalPerMonth;
      finalValue *= 1 + monthlyReturnRate;
      totalWithdrawals += withdrawalPerMonth;
    }

    return {
      totalInvestment: totalInvestments.toFixed(2),
      totalWithdrawals: totalWithdrawals.toFixed(2),
      finalValue: finalValue.toFixed(2),
    };
  };

  render() {
    const {
      totalInvestments,
      withdrawalPerMonth,
      expectedReturnRate,
      timePeriod,
    } = this.state;
    const { totalInvestment, totalWithdrawals, finalValue } =
      this.calculateSWP();

    return (
      <div className="swp-calculator">
        <h1>SWP Calculator</h1>
        <div className="input-container">
          <label>Total Investments:</label>
          <input
            type="range"
            name="totalInvestments"
            min="0"
            max="2000000"
            step="1000"
            value={totalInvestments}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="totalInvestments"
            value={totalInvestments}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="input-container">
          <label>Withdrawal Per Month:</label>
          <input
            type="range"
            name="withdrawalPerMonth"
            min="0"
            max="50000"
            step="1000"
            value={withdrawalPerMonth}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="withdrawalPerMonth"
            value={withdrawalPerMonth}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="input-container">
          <label>Expected Return Rate (p.a.):</label>
          <input
            type="range"
            name="expectedReturnRate"
            min="0"
            max="20"
            step="0.1"
            value={expectedReturnRate}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="expectedReturnRate"
            value={expectedReturnRate}
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
          <p>Total Investment: Rs.{totalInvestment}</p>
          <p>Total Withdrawals: Rs.{totalWithdrawals}</p>
          <p>Final Value: Rs.{finalValue}</p>
        </div>
      </div>
    );
  }
}

export default SWPCalculator;
