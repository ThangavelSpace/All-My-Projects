// src/App.js

import React from 'react';
import './App.css';
import Quiz from './components/Quiz'; // Corrected import path
import './Quiz.css';

function App() {
  return (
    <div className="App">
      <h1>Quiz App</h1>
      <Quiz />
    </div>
  );
}

export default App;
