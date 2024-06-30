
import React, { useState } from 'react';
import './App.css';
import QuizCreator from './components/QuizCreator';
import QuizTaker from './components/QuizTaker';
import './components/QuizCreator.css';
import './components/QuizTaker.css';
function App() {
  const [quizzes, setQuizzes] = useState([]);

  const addQuiz = (newQuiz) => {
    setQuizzes([...quizzes, newQuiz]);
  };

  return (
    <div className="App">
      <h1>Quiz Platform</h1>
      <QuizCreator addQuiz={addQuiz} />
      {quizzes.map((quiz, index) => (
        <QuizTaker key={index} quiz={quiz} />
      ))}
    </div>
  );
}

export default App;
