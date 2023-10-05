// src/components/EMICalculator.js
import React, { useState } from 'react';
import LoanAmountInput from './LoanAmountInput';
import RateOfInterestInput from './RateOfInterestInput';
import LoanTenureInput from './LoanTenureInput';

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [rateOfInterest, setRateOfInterest] = useState(1);
  const [loanTenureMonths, setLoanTenureMonths] = useState(12); // Loan tenure in months

  const calculateEMI = () => {
    const monthlyInterestRate = (rateOfInterest / 100) / 12; // Convert annual interest rate to monthly and divide by 100 to convert to a decimal
    const numberOfPayments = loanTenureMonths; // Use the loan tenure in months
    const principal = loanAmount;

    const numerator = principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments);
    const denominator = Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1;
    const monthlyEMI = numerator / denominator;

    return monthlyEMI.toFixed(0);
  };

  const handleLoanAmountChange = (newValue) => {
    setLoanAmount(newValue);
  };

  const handleRateOfInterestChange = (newValue) => {
    setRateOfInterest(newValue);
  };

  const handleLoanTenureChange = (newValue) => {
    setLoanTenureMonths(newValue);
  };

  const monthlyEMI = calculateEMI();
  const totalInterest = (monthlyEMI * loanTenureMonths - loanAmount).toFixed(0);
  const totalAmount = (monthlyEMI * loanTenureMonths).toFixed(0);

  return (
    <div>
      <h2>Home Loan EMI Calculator</h2>
      <LoanAmountInput loanAmount={loanAmount} onLoanAmountChange={handleLoanAmountChange} />
      <RateOfInterestInput rateOfInterest={rateOfInterest} onRateOfInterestChange={handleRateOfInterestChange} />
      <LoanTenureInput loanTenure={loanTenureMonths} onLoanTenureChange={handleLoanTenureChange} />

      <div>
        <h3>Result:</h3>
        <p>Monthly EMI: Rs.{monthlyEMI}</p>
        <p>Principal Investment: Rs.{loanAmount}</p>
        <p>Total Interest: Rs.{totalInterest}</p>
        <p>Total Amount: Rs.{totalAmount}</p>
      </div>
    </div>
  );
};

export default EMICalculator;
