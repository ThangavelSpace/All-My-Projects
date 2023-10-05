import React, { useState } from 'react';
import Question from './Question';
import { quizData } from '../quizData';
import '../Quiz.css';

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAnswerClick = (selectedOption) => {
    const currentQuizItem = quizData[currentQuestion];

    if (selectedOption === currentQuizItem.correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < quizData.length - 1) {
      setSelectedOption(null);
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // End of the quiz
      setQuizCompleted(true);
    }
  };

  const handleRestartClick = () => {
    setCurrentQuestion(0);
    setScore(0);
    setQuizCompleted(false);
    setSelectedOption(null);
  };

  return (
    <div>
      {quizCompleted ? (
        <div>
          <h2>Quiz Completed!</h2>
          <p>Your Score: {score}/{quizData.length}</p>
          <button onClick={handleRestartClick}>Restart Quiz</button>
        </div>
      ) : (
        <div>
          <Question
            question={quizData[currentQuestion].question}
            options={quizData[currentQuestion].options}
            handleAnswerClick={handleAnswerClick}
          />
        </div>
      )}
    </div>
  );
}

export default Quiz;
