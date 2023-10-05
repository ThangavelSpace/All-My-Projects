// src/components/Question.js

import React, { useState } from 'react';

function Question({ question, options, handleAnswerClick }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    handleAnswerClick(selectedOption);
  };

  return (
    <div>
      <h2>{question}</h2>
      <form>
        {options.map((option, index) => (
          <div key={index}>
            <label>
              <input
                type="radio"
                value={option}
                checked={selectedOption === option}
                onChange={handleOptionChange}
              />
              {option}
            </label>
          </div>
        ))}
      </form>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Question;
