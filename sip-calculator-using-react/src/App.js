// src/App.js

import React from "react";
import SIPCalculator from "./components/SIPCalculator";
import "./App.css"; // Import the CSS file

function App() {
  return (
    <div className="App">
      <div className="container"> {/* Add the container div */}
        <h1>SIP Calculator</h1>
        <SIPCalculator />
      </div>
    </div>
  );
}

export default App;
