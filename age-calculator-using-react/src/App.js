import React, { useState } from 'react';
import './App.css';

function App() {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    const birthYear = new Date(birthDate).getFullYear();
    const currentYear = new Date().getFullYear();
    const calculatedAge = currentYear - birthYear;
    setAge(calculatedAge);
  };

  return (
    <div className="app">
      <h1>Age Calculator</h1>
      <div className="input-container">
        <label htmlFor="birthDate">Enter your birthdate:</label>
        <input
          type="date"
          id="birthDate"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
      </div>
      <button onClick={calculateAge}>Calculate</button>
      {age && <p>Your age is: {age} years</p>}
    </div>
  );
}

export default App;
