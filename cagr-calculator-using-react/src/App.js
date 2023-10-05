import React, { useState } from 'react';
import './App.css';

function App() {
  const [initialValue, setInitialValue] = useState('');
  const [finalValue, setFinalValue] = useState('');
  const [years, setYears] = useState('');
  const [cagr, setCAGR] = useState(null);

  const calculateCAGR = () => {
    if (initialValue && finalValue && years) {
      const initial = parseFloat(initialValue);
      const final = parseFloat(finalValue);
      const n = parseInt(years);
      const cagrValue = ((final / initial) ** (1 / n) - 1) * 100;
      setCAGR(cagrValue.toFixed(2) + '%');
    }
  };

  const resetCalculator = () => {
    setInitialValue('');
    setFinalValue('');
    setYears('');
    setCAGR(null);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>CAGR Calculator</h1>
        <div className="input-container">
          <label>Initial Value:</label>
          <input
            type="number"
            value={initialValue}
            onChange={(e) => setInitialValue(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label>Final Value:</label>
          <input
            type="number"
            value={finalValue}
            onChange={(e) => setFinalValue(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label>Number of Years:</label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(e.target.value)}
          />
        </div>
        <div className="result">
          {cagr !== null && <p className="cagr">CAGR: {cagr}</p>}
        </div>
        <button onClick={calculateCAGR}>Calculate CAGR</button>
        <button onClick={resetCalculator}>Reset</button>
      </div>
    </div>
  );
}

export default App;
