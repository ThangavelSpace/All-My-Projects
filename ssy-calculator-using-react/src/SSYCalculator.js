import React, { Component } from "react";
import "./SSYCalculator.css"; // Import the CSS file for styling

class SSYCalculator extends Component {
  constructor() {
    super();
    this.state = {
      yearlyInvestment: 250,
      girlsAge: 1,
      startPeriod: 2018,
      annualInterestRate: 8,
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  calculateSSY = () => {
    const { yearlyInvestment, startPeriod, annualInterestRate } = this.state;
    const principal = parseFloat(yearlyInvestment);
    const n = 1; // Yearly compounding
    const r = annualInterestRate / 100; // Convert interest rate to decimal
    const t = 21; // Maturity period in years (from 2018 to 2039)
  
    // Calculate the maturity value with compound interest formula
    let maturityValue = 0;
    let totalInvestment = 0;
  
    for (let year = 1; year <= t; year++) {
      if (year <= 15) {
        totalInvestment += principal;
      }
      maturityValue += principal * Math.pow(1 + r / n, n * year);
    }
  
    return {
      totalInvestment: totalInvestment.toFixed(2),
      totalInterest: (maturityValue - totalInvestment).toFixed(2),
      maturityYear: parseInt(startPeriod, 10) + t,
      maturityValue: maturityValue.toFixed(2),
    };
  };
  

  render() {
    const { yearlyInvestment, girlsAge, startPeriod, annualInterestRate } =
      this.state;
    const { totalInvestment, totalInterest, maturityYear, maturityValue } =
      this.calculateSSY();

    return (
      <div className="ssy-calculator">
        <h1>Sukanya Samriddhi Yojana Calculator</h1>
        <div className="input-container">
          <label>Yearly Investment:</label>
          <input
            type="range"
            name="yearlyInvestment"
            min="250"
            max="150000"
            step="250"
            value={yearlyInvestment}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="yearlyInvestment"
            value={yearlyInvestment}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="input-container">
          <label>Girl's Age:</label>
          <input
            type="range"
            name="girlsAge"
            min="1"
            max="10"
            step="1"
            value={girlsAge}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="girlsAge"
            value={girlsAge}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="input-container">
          <label>Start Period:</label>
          <input
            type="range"
            name="startPeriod"
            min="2018"
            max="2030"
            step="1"
            value={startPeriod}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="startPeriod"
            value={startPeriod}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="input-container">
          <label>Annual Interest Rate (%):</label>
          <input
            type="range"
            name="annualInterestRate"
            min="1"
            max="20"
            step="0.1"
            value={annualInterestRate}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="annualInterestRate"
            value={annualInterestRate}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="results">
          <p>Total Investment: ₹{totalInvestment}</p>
          <p>Total Interest: ₹{totalInterest}</p>
          <p>Maturity Year: {maturityYear}</p>
          <p>Maturity Value: ₹{maturityValue}</p>
        </div>
      </div>
    );
  }
}

export default SSYCalculator;
