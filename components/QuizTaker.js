// // import React, { useState } from 'react';
// // import Question from './Question';
// // import Result from './Result';
// // import './QuizTaker.css';

// // function QuizTaker({ quiz }) {
// //     const [currentQuestion, setCurrentQuestion] = useState(0);
// //     const [score, setScore] = useState(0);
// //     const [showResult, setShowResult] = useState(false);
// //     const [selectedOptions, setSelectedOptions] = useState(new Array(quiz.questions.length).fill(null));

// //     const handleAnswer = (isCorrect) => {
// //         const updatedSelectedOptions = [...selectedOptions];
// //         updatedSelectedOptions[currentQuestion] = isCorrect;
// //         setSelectedOptions(updatedSelectedOptions);

// //         if (isCorrect) {
// //             setScore(score + 1);
// //         }

// //         const nextQuestion = currentQuestion + 1;
// //         if (nextQuestion < quiz.questions.length) {
// //             setCurrentQuestion(nextQuestion);
// //         } else {
// //             setShowResult(true);
// //         }
// //     };

// //     const restartQuiz = () => {
// //         setCurrentQuestion(0);
// //         setScore(0);
// //         setShowResult(false);
// //         setSelectedOptions(new Array(quiz.questions.length).fill(null));
// //     };

// //     return (
// //         <div className="quiz-taker">
// //             <h2>{quiz.title}</h2>
// //             {showResult ? (
// //                 <div>
// //                     <Result score={score} total={quiz.questions.length} />
// //                     <button onClick={restartQuiz}>Restart Quiz</button>
// //                 </div>
// //             ) : (
// //                 <Question
// //                     question={quiz.questions[currentQuestion]}
// //                     handleAnswer={handleAnswer}
// //                     selectedOption={selectedOptions[currentQuestion]}
// //                 />
// //             )}
// //         </div>
// //     );
// // }

// // export default QuizTaker;
// import React, { useState } from 'react';
// import Question from './Question';
// import Result from './Result';
// import './QuizTaker.css';

// function QuizTaker({ quiz }) {
//     const [currentQuestion, setCurrentQuestion] = useState(0);
//     const [score, setScore] = useState(0);
//     const [showResult, setShowResult] = useState(false);
//     const [selectedOptions, setSelectedOptions] = useState(new Array(quiz.questions.length).fill(null));

//     const handleAnswer = (isCorrect) => {
//         const updatedSelectedOptions = [...selectedOptions];
//         updatedSelectedOptions[currentQuestion] = isCorrect;
//         setSelectedOptions(updatedSelectedOptions);

//         if (isCorrect) {
//             setScore(score + 1);
//         }

//         const nextQuestion = currentQuestion + 1;
//         if (nextQuestion < quiz.questions.length) {
//             setCurrentQuestion(nextQuestion);
//         } else {
//             setShowResult(true);
//         }
//     };

//     const restartQuiz = () => {
//         setCurrentQuestion(0);
//         setScore(0);
//         setShowResult(false);
//         setSelectedOptions(new Array(quiz.questions.length).fill(null));
//     };

//     const handleNextQuestion = () => {
//         setCurrentQuestion(currentQuestion + 1);
//     };

//     return (
//         <div className="quiz-taker">
//             <h2>{quiz.title}</h2>
//             {showResult ? (
//                 <div>
//                     <Result score={score} total={quiz.questions.length} />
//                     <button onClick={restartQuiz}>Restart Quiz</button>
//                 </div>
//             ) : (
//                 <Question
//                     question={quiz.questions[currentQuestion]}
//                     handleAnswer={handleAnswer}
//                     selectedOption={selectedOptions[currentQuestion]}
//                     hasNextQuestion={currentQuestion < quiz.questions.length - 1}
//                     handleNextQuestion={handleNextQuestion}
//                 />
//             )}
//         </div>
//     );
// }

// export default QuizTaker;
// src/components/QuizTaker.js
import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';

const QuizTaker = ({ quiz }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState(new Array(quiz.questions.length).fill(null));

    const handleAnswer = (isCorrect) => {
        const updatedSelectedOptions = [...selectedOptions];
        updatedSelectedOptions[currentQuestion] = isCorrect;
        setSelectedOptions(updatedSelectedOptions);

        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < quiz.questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowResult(true);
        }
    };

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowResult(false);
        setSelectedOptions(new Array(quiz.questions.length).fill(null));
    };

    return (
        <div className="quiz-taker">
            <h2>{quiz.title}</h2>
            {showResult ? (
                <div>
                    <Result score={score} total={quiz.questions.length} />
                    <button onClick={restartQuiz}>Restart Quiz</button>
                </div>
            ) : (
                <Question
                    question={quiz.questions[currentQuestion]}
                    handleAnswer={handleAnswer}
                    selectedOption={selectedOptions[currentQuestion]}
                />
            )}
        </div>
    );
};

export default QuizTaker;
