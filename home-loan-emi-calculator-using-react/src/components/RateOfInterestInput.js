// src/components/RateOfInterestInput.js
import React from 'react';

const RateOfInterestInput = ({ rateOfInterest, onRateOfInterestChange }) => (
  <div>
    <label>Rate of Interest:</label>
    <input
      type="number"
      min="1"
      max="30"
      step="0.1"
      value={rateOfInterest}
      onChange={(e) => onRateOfInterestChange(e.target.value)}
    />
    <input
      type="range"
      min="1"
      max="30"
      step="0.1"
      value={rateOfInterest}
      onChange={(e) => onRateOfInterestChange(e.target.value)}
    />
    <span>%</span>
  </div>
);

export default RateOfInterestInput;
