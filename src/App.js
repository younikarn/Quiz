import React, { useState } from "react";
import "./App.css";

function App() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions =  [
    {
      text: "What is the capital of India?",
      options: [
        { id: 0, text: "New Delhi", isCorrect: true },
        { id: 1, text: "Mumbai", isCorrect: false },
        { id: 2, text: "Kolkata", isCorrect: false },
        { id: 3, text: "Chennai", isCorrect: false },
      ],
    },
    {
      text: "Who is known as the 'Father of the Nation' in India?",
      options: [
        { id: 0, text: "Jawaharlal Nehru", isCorrect: false },
        { id: 1, text: "Sardar Vallabhbhai Patel", isCorrect: false },
        { id: 2, text: "Bhagat Singh", isCorrect: false },
        { id: 3, text: "Mahatma Gandhi", isCorrect: true },
      ],
    },
    {
      text: "Which river is often referred to as the 'Ganga of the South' in India?",
      options: [
        { id: 0, text: "Yamuna", isCorrect: false },
        { id: 1, text: "Brahmaputra", isCorrect: false },
        { id: 2, text: "Krishna", isCorrect: false },
        { id: 3, text: "Godavari", isCorrect: true },
      ],
    },
    {
      text: "In which year did India gain independence from British rule?",
      options: [
        { id: 0, text: "1942", isCorrect: false },
        { id: 1, text: "1947", isCorrect: true },
        { id: 2, text: "1950", isCorrect: false },
        { id: 3, text: "1952", isCorrect: false },
      ],
    },
    {
      text: "Which festival is celebrated to mark the victory of light over darkness in India?",
      options: [
        { id: 0, text: "Holi", isCorrect: false },
        { id: 1, text: "Diwali", isCorrect: true },
        { id: 2, text: "Eid", isCorrect: false },
        { id: 3, text: "Christmas", isCorrect: false },
      ],
    },
  ];
  

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      {/* 1. Header  */}
      <h1>Let's see what you've got! </h1>

      {/* 2. Current Score  */}
      <h2>Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                  className="clickable"
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;


