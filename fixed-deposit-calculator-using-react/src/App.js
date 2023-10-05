// src/App.js
import React from 'react';
import './App.css';
import Calculator from './components/Calculator';

function App() {
  const backgroundStyle = {
    backgroundImage: `url('/pexels-ann-h-4146006.jpg')`, // Adjust the path to your background image
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed', // Optional: Fixed background
  };

  return (
    <div className="container" style={backgroundStyle} >
      <Calculator />
    </div>
  );
}

export default App;
