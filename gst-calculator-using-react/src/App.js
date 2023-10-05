import React, { useState } from 'react';
import './App.css';

function App() {
  const [amount, setAmount] = useState('');
  const [gstRate, setGstRate] = useState(5); // Default GST rate is set to 5%
  const [gstAmount, setGstAmount] = useState('');

  const calculateGST = () => {
    if (amount !== '' && gstRate !== '') {
      const amountValue = parseFloat(amount);
      const gstAmountValue = (amountValue * gstRate) / 100;
      setGstAmount(gstAmountValue.toFixed(2));
    } else {
      setGstAmount('');
    }
  };

  const clearForm = () => {
    setAmount('');
    setGstRate(5); // Reset GST rate to default (5%)
    setGstAmount('');
  };

  return (
    <div className="app-container">
      <div className="calculator-box">
        <h1>Indian GST Calculator</h1>
        <div className="input-container">
          <label>Enter Amount (INR):</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label>Select GST Rate (%):</label>
          <div className="radio-container">
            <label>
              <input
                type="radio"
                value={5}
                checked={gstRate === 5}
                onChange={() => setGstRate(5)}
              />
              5%
            </label>
            <label>
              <input
                type="radio"
                value={12}
                checked={gstRate === 12}
                onChange={() => setGstRate(12)}
              />
              12%
            </label>
            <label>
              <input
                type="radio"
                value={18}
                checked={gstRate === 18}
                onChange={() => setGstRate(18)}
              />
              18%
            </label>
            <label>
              <input
                type="radio"
                value={28}
                checked={gstRate === 28}
                onChange={() => setGstRate(28)}
              />
              28%
            </label>
          </div>
        </div>
        <div className="button-container">
          <button onClick={calculateGST}>Calculate GST</button>
          <button onClick={clearForm}>Clear</button>
        </div>
        {gstAmount !== '' && (
          <div className="result">
            <p>GST Amount: ₹{gstAmount}</p>
            <p>Total Amount (including GST): ₹{(parseFloat(amount) + parseFloat(gstAmount)).toFixed(2)}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
