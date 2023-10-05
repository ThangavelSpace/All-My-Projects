// NPSCalculator.js
import React, { useEffect, useState } from 'react';

function NPSCalculator({ inputData }) {
  const [totalInvestment, setTotalInvestment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [maturityAmount, setMaturityAmount] = useState(0);
  const [minAnnuityInvestment, setMinAnnuityInvestment] = useState(0);

  useEffect(() => {
    const { investment, returnRate, age } = inputData;

    // Assuming retirement age for NPS is 60
    const retirementAge = 60;
    const yearsToRetirement = retirementAge - age;

    // Calculate NPS values with compound interest
    const monthlyContribution = investment;
    const totalContributions = monthlyContribution * 12 * yearsToRetirement;
    const interestRate = returnRate / 100;

    // Calculate future value with compound interest formula
    const futureValue = totalContributions * Math.pow(1 + interestRate, yearsToRetirement);
    const maturityAmount = futureValue.toFixed(2);

    // Calculate totalInterest as the difference between maturityAmount and totalContributions
    const totalInterest = (maturityAmount - totalContributions).toFixed(2);

    // Calculate the minimum annuity investment assuming a 5% annuity rate
    const annuityRate = 0.05;
    const minAnnuityInvestment = (maturityAmount * annuityRate).toFixed(2);

    setTotalInvestment(totalContributions.toFixed(2));
    setTotalInterest(totalInterest);
    setMaturityAmount(maturityAmount);
    setMinAnnuityInvestment(minAnnuityInvestment);
  }, [inputData]);

  return (
    <div>
      <h2>NPS Results</h2>
      <p>Total Investment: ₹{totalInvestment.toLocaleString()}</p>
      <p>Total Interest Earned: ₹{totalInterest.toLocaleString()}</p>
      <p>Maturity Amount: ₹{maturityAmount.toLocaleString()}</p>
      <p>Min. Annuity Investment: ₹{minAnnuityInvestment.toLocaleString()}</p>
    </div>
  );
}

export default NPSCalculator;
