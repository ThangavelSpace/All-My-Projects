// src/App.js
import React from 'react';
import './App.css';
import EMICalculator from './components/EMICalculator';

function App() {
  const backgroundStyle = {
    backgroundImage: `url('/pexels-binyamin-mellish-106399.jpg')`, // Adjust the path to your background image
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed', // Optional: Fixed background
  };

  return (
    <div className="App" style={backgroundStyle}>
      <div className="container">
        <EMICalculator />
      </div>
    </div>
  );
}

export default App;
