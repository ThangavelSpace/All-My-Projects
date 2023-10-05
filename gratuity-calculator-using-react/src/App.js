import React, { useState } from 'react';
import './App.css';

function App() {
  const [salary, setSalary] = useState(10000);
  const [yearsOfService, setYearsOfService] = useState(5);
  const [gratuity, setGratuity] = useState(0);
  const handleRangeChange = (e) => {
    if (e.target.name === 'salaryRange') {
      setSalary(e.target.value);
    } else if (e.target.name === 'yearsOfServiceRange') {
      setYearsOfService(e.target.value);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'salaryInput') {
      setSalary(value);
    } else if (name === 'yearsOfServiceInput') {
      setYearsOfService(value);
    }
  };
  const calculateGratuity = () => {
    const gratuityAmount = (salary * yearsOfService*15) / 26;
    setGratuity(gratuityAmount.toFixed());
  };

  return (
    <div className="container">
      <h1>Gratuity Calculator</h1>
      <div className="input-container">
        <label>
          Monthly Salary (Basic + DA): Rs.{salary}
          <input
            type="range"
            name="salaryRange"
            min="10000"
            max="1000000"
            value={salary}
            onChange={handleRangeChange}
          />
        </label>
        <input
          type="number"
          name="salaryInput"
          min="10000"
          max="1000000"
          value={salary}
          onChange={handleInputChange}
        />
        <br />
        <label>
          Years of Service: {yearsOfService} years
          <input
            type="range"
            name="yearsOfServiceRange"
            min="5"
            max="40"
            value={yearsOfService}
            onChange={handleRangeChange}
          />
        </label>
        <input
          type="number"
          name="yearsOfServiceInput"
          min="5"
          max="40"
          value={yearsOfService}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={calculateGratuity}>Calculate Gratuity</button>
      {gratuity > 0 && (
        <div className="result">
          <p>Total Gratuity Payable: Rs.{gratuity}</p>
        </div>
      )}
    </div>
  );
}

export default App;
