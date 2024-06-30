// // // // // // src/App.js
// // // // // import React, { useState } from 'react';
// // // // // import QuizCreator from './components/QuizCreator';
// // // // // import QuizTaker from './components/QuizTaker';
// // // // // import './styles/App.css';

// // // // // function App() {
// // // // //   const [quizzes, setQuizzes] = useState([]);

// // // // //   const addQuiz = (quiz) => {
// // // // //     setQuizzes([...quizzes, quiz]);
// // // // //   };

// // // // //   return (
// // // // //     <div className="App">
// // // // //       <h1>Quiz App</h1>
// // // // //       <QuizCreator addQuiz={addQuiz} />
// // // // //       {quizzes.map((quiz, index) => (
// // // // //         <QuizTaker key={index} quiz={quiz} />
// // // // //       ))}
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default App;
// // // // import React, { useState } from 'react';
// // // // import QuizCreator from './components/QuizCreator';
// // // // import QuizTaker from './components/QuizTaker';
// // // // import './App.css'; // Assuming you have some global styles

// // // // function App() {
// // // //   const [quizzes, setQuizzes] = useState([]);
// // // //   const [currentQuiz, setCurrentQuiz] = useState(null);

// // // //   const addQuiz = (quiz) => {
// // // //     setQuizzes([...quizzes, quiz]);
// // // //   };

// // // //   const startQuiz = (quiz) => {
// // // //     setCurrentQuiz(quiz);
// // // //   };

// // // //   return (
// // // //     <div>
// // // //       <h1>Quiz App</h1>
// // // //       {currentQuiz ? (
// // // //         <QuizTaker quiz={currentQuiz} />
// // // //       ) : (
// // // //         <div>
// // // //           <QuizCreator addQuiz={addQuiz} />
// // // //           <div>
// // // //             {quizzes.map((quiz, index) => (
// // // //               <button key={index} onClick={() => startQuiz(quiz)}>
// // // //                 Start {quiz.title}
// // // //               </button>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // }

// // // // export default App;
// // // import React, { useState } from 'react';
// // // import QuizCreator from './components/QuizCreator';
// // // import QuizTaker from './components/QuizTaker';
// // // import './App.css';

// // // function App() {
// // //   const [quizzes, setQuizzes] = useState([]);
// // //   const [currentQuiz, setCurrentQuiz] = useState(null);

// // //   const addQuiz = (quiz) => {
// // //     setQuizzes([...quizzes, quiz]);
// // //   };

// // //   const startQuiz = (quiz) => {
// // //     setCurrentQuiz(quiz);
// // //   };

// // //   return (
// // //     <div>
// // //       <h1>Quiz App</h1>
// // //       {currentQuiz ? (
// // //         <QuizTaker quiz={currentQuiz} />
// // //       ) : (
// // //         <div>
// // //           <QuizCreator addQuiz={addQuiz} />
// // //           <div>
// // //             {quizzes.map((quiz, index) => (
// // //               <button key={index} onClick={() => startQuiz(quiz)}>
// // //                 Start {quiz.title}
// // //               </button>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // }

// // // export default App;
// // import React, { useState } from 'react';
// // import QuizCreator from './components/QuizCreator';
// // import QuizTaker from './components/QuizTaker';
// // import './App.css';

// // function App() {
// //   const [quizzes, setQuizzes] = useState([]);
// //   const [currentQuiz, setCurrentQuiz] = useState(null);

// //   const addQuiz = (quiz) => {
// //     setQuizzes([...quizzes, quiz]);
// //   };

// //   const startQuiz = (quiz) => {
// //     setCurrentQuiz(quiz);
// //   };

// //   return (
// //     <div>
// //       <h1>Quiz App</h1>
// //       {currentQuiz ? (
// //         <QuizTaker quiz={currentQuiz} />
// //       ) : (
// //         <div>
// //           <QuizCreator addQuiz={addQuiz} />
// //           <div>
// //             {quizzes.map((quiz, index) => (
// //               <button key={index} onClick={() => startQuiz(quiz)}>
// //                 Start {quiz.title}
// //               </button>
// //             ))}
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default App;
// import React, { useState } from 'react';
// import QuizCreator from './components/QuizCreator';
// import QuizTaker from './components/QuizTaker';
// import './App.css';

// function App() {
//   const [quizzes, setQuizzes] = useState([]);
//   const [currentQuiz, setCurrentQuiz] = useState(null);

//   const addQuiz = (quiz) => {
//     setQuizzes([...quizzes, quiz]);
//   };

//   const startQuiz = (quiz) => {
//     setCurrentQuiz(quiz);
//   };

//   return (
//     <div className="app">
//       <h1>Quiz App</h1>
//       {currentQuiz ? (
//         <QuizTaker quiz={currentQuiz} />
//       ) : (
//         <div>
//           <QuizCreator addQuiz={addQuiz} />
//           <div>
//             {quizzes.map((quiz, index) => (
//               <button key={index} onClick={() => startQuiz(quiz)}>
//                 Start {quiz.title}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
// src/App.js
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
