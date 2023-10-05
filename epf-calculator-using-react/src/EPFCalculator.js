import React, { useState } from 'react';

const EPFCalculator = ({ basicSalary, da }) => {
  // EPF Calculation Logic
  const maxBasicSalary = 15000; // As of my last update
  const employeeContribution = (basicSalary < maxBasicSalary ? basicSalary : maxBasicSalary) * 0.12;
  const employerContribution = (basicSalary < maxBasicSalary ? basicSalary : maxBasicSalary) * 0.12;
  const epsContribution = Math.min(da, 1250); // Maximum EPS contribution is 1250

  return (
    <div>
      <h2>EPF Calculation</h2>
      {/* Display calculated EPF contributions */}
      <p>Employee Contribution: Rs. {employeeContribution}</p>
      <p>Employer Contribution: Rs. {employerContribution}</p>
      <p>EPS Contribution: Rs. {epsContribution}</p>
    </div>
  );
};

export default EPFCalculator;
