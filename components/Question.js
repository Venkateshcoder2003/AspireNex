
// // // import React, { useState } from 'react';
// // // import './Question.css';

// // // function Question({ question, handleAnswer }) {
// // //     const [selectedOption, setSelectedOption] = useState(null);
// // //     const [isCorrect, setIsCorrect] = useState(null);

// // //     const handleOptionClick = (choice) => {
// // //         const correct = choice === question.correctAnswer;
// // //         setSelectedOption(choice);
// // //         setIsCorrect(correct);
// // //         handleAnswer(correct);
// // //     };

// // //     return (
// // //         <div className="question">
// // //             <h3>{question.questionText}</h3>
// // //             {question.choices.map((choice, index) => (
// // //                 <button
// // //                     key={index}
// // //                     className={`option ${selectedOption === choice ? (isCorrect ? 'correct' : 'incorrect') : ''}`}
// // //                     onClick={() => handleOptionClick(choice)}
// // //                     disabled={selectedOption !== null}
// // //                 >
// // //                     {choice}
// // //                 </button>
// // //             ))}
// // //         </div>
// // //     );
// // // }

// // // export default Question;
// // import React, { useState } from 'react';
// // import './Question.css';

// // function Question({ question, handleAnswer }) {
// //     const [selectedOption, setSelectedOption] = useState(null);
// //     const [isCorrect, setIsCorrect] = useState(null);

// //     const handleOptionClick = (choice) => {
// //         const correct = choice === question.correctAnswer;
// //         setSelectedOption(choice);
// //         setIsCorrect(correct);
// //         handleAnswer(correct);
// //     };

// //     return (
// //         <div className="question">
// //             <h3>{question.questionText}</h3>
// //             {question.choices.map((choice, index) => (
// //                 <button
// //                     key={index}
// //                     className={`option ${selectedOption === choice ? (isCorrect ? 'correct' : 'incorrect') : ''}`}
// //                     onClick={() => handleOptionClick(choice)}
// //                     disabled={selectedOption !== null}
// //                 >
// //                     {choice}
// //                 </button>
// //             ))}
// //         </div>
// //     );
// // }

// // export default Question;
// import React, { useState } from 'react';
// import './Question.css';

// function Question({ question, handleAnswer }) {
//     const [selectedOption, setSelectedOption] = useState(null);

//     const handleOptionClick = (choice) => {
//         if (selectedOption === null) {
//             setSelectedOption(choice);
//             const correct = choice === question.correctAnswer;
//             handleAnswer(correct);
//         }
//     };

//     return (
//         <div className="question">
//             <h3>{question.questionText}</h3>
//             {question.choices.map((choice, index) => (
//                 <button
//                     key={index}
//                     className={`option ${selectedOption === choice ? (choice === question.correctAnswer ? 'correct' : 'incorrect') : ''}`}
//                     onClick={() => handleOptionClick(choice)}
//                     disabled={selectedOption !== null}
//                 >
//                     {choice}
//                 </button>
//             ))}
//         </div>
//     );
// }

// export default Question;
// src/components/Question.js
import React from 'react';

const Question = ({ question, handleAnswer, selectedOption }) => {
    const handleOptionClick = (choice) => {
        const isCorrect = choice === question.correctAnswer;
        handleAnswer(isCorrect);
    };

    return (
        <div className="question">
            <h3>{question.questionText}</h3>
            {question.choices.map((choice, index) => (
                <button
                    key={index}
                    className={selectedOption === choice ? (selectedOption === question.correctAnswer ? 'correct' : 'incorrect') : ''}
                    onClick={() => handleOptionClick(choice)}
                    disabled={selectedOption !== null}
                >
                    {choice}
                </button>
            ))}
        </div>
    );
};

export default Question;
