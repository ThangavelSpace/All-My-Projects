import React, { useState } from 'react';
import './App.css';

function App() {
  const [salary, setSalary] = useState('');
  const [employeeContribution, setEmployeeContribution] = useState('');
  const [employerContribution, setEmployerContribution] = useState('');
  const [epsContribution, setEPSContribution] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const calculateEPF = () => {
    const maxBasicSalary = 15000;
    const maxDA = 1250;

    if (salary === '') {
      setErrorMessage('Salary is required.');
      return;
    }

    const parsedSalary = parseFloat(salary);

    if (isNaN(parsedSalary)) {
      setErrorMessage('Invalid input. Please enter a numeric value for the salary.');
      return;
    }

    const calculatedSalary = Math.min(parsedSalary, maxBasicSalary + maxDA);

    const employeeContribution = calculatedSalary * 0.12;
    const employerContribution = calculatedSalary * 0.12;
    const epsContribution = Math.min(calculatedSalary, maxDA);

    setEmployeeContribution(employeeContribution.toFixed(2));
    setEmployerContribution(employerContribution.toFixed(2));
    setEPSContribution(epsContribution.toFixed(2));
    setErrorMessage('');
  };

  return (
    <div className="App">
      <h1>EPF Calculator</h1>
      <div className="calculator">
        <div className="input-container">
          <label htmlFor="salary">Salary (including DA):</label>
          <input
            type="number"
            id="salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
        </div>
        <button onClick={calculateEPF}>Calculate</button>
        {errorMessage && <div className="error">{errorMessage}</div>}
        <div className="results">
          <p>Employee Contribution: Rs. {employeeContribution}</p>
          <p>Employer Contribution: Rs. {employerContribution}</p>
          <p>EPS Contribution: Rs. {epsContribution}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
