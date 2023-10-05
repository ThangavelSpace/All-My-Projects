import React, { useState } from 'react';
import './bmicalc.css';

function BmiCalculator() {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    if (age === '' || height === '' || weight === '') {
      alert('Please enter age, height, and weight.');
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = (
      weight / (heightInMeters * heightInMeters)
    ).toFixed(2);

    setBmi(bmiValue);
  };
  const resetCalculator = () => {
    setAge('');
    setGender('male');
    setHeight('');
    setWeight('');
    setBmi(null);
  };

  return (
    <div className="bmi-calculator">
      <h1>BMI Calculator</h1>
      <div className="input-container">
        <label>Age (years):</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Gender:</label>
        <div className="radio-container">
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={gender === 'male'}
            onChange={() => setGender('male')}
          />
          <label htmlFor="male">Male</label>

          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={gender === 'female'}
            onChange={() => setGender('female')}
          />
          <label htmlFor="female">Female</label>
        </div>
      </div>
      <div className="input-container">
        <label>Height (cm):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Weight (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <button onClick={calculateBMI}>Calculate BMI</button>
      <button className="reset" onClick={resetCalculator}>Reset</button>
      {bmi !== null && (
        <div className="result">
          <p>Your BMI is: {bmi}</p>
        </div>
      )}
    </div>
  );
}

export default BmiCalculator;
