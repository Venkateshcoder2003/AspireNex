// // // // import React, { useState } from 'react';
// // // // import './QuizCreator.css';

// // // // function QuizCreator({ addQuiz }) {
// // // //     const [title, setTitle] = useState('');
// // // //     const [questions, setQuestions] = useState([]);
// // // //     const [questionText, setQuestionText] = useState('');
// // // //     const [choices, setChoices] = useState(['', '', '', '']);
// // // //     const [correctAnswer, setCorrectAnswer] = useState('');

// // // //     const handleAddQuestion = () => {
// // // //         const newQuestion = {
// // // //             questionText,
// // // //             choices,
// // // //             correctAnswer,
// // // //         };
// // // //         setQuestions([...questions, newQuestion]);
// // // //         setQuestionText('');
// // // //         setChoices(['', '', '', '']);
// // // //         setCorrectAnswer('');
// // // //     };

// // // //     const handleCreateQuiz = () => {
// // // //         const newQuiz = {
// // // //             title,
// // // //             questions,
// // // //         };
// // // //         addQuiz(newQuiz);
// // // //         setTitle('');
// // // //         setQuestions([]);
// // // //     };

// // // //     return (
// // // //         <div className="quiz-creator">
// // // //             <h2>Create a Quiz</h2>
// // // //             <input
// // // //                 type="text"
// // // //                 placeholder="Quiz Title"
// // // //                 value={title}
// // // //                 onChange={(e) => setTitle(e.target.value)}
// // // //             />
// // // //             <div>
// // // //                 <input
// // // //                     type="text"
// // // //                     placeholder="Question"
// // // //                     value={questionText}
// // // //                     onChange={(e) => setQuestionText(e.target.value)}
// // // //                 />
// // // //                 {choices.map((choice, index) => (
// // // //                     <input
// // // //                         key={index}
// // // //                         type="text"
// // // //                         placeholder={`Choice ${index + 1}`}
// // // //                         value={choice}
// // // //                         onChange={(e) => {
// // // //                             const newChoices = [...choices];
// // // //                             newChoices[index] = e.target.value;
// // // //                             setChoices(newChoices);
// // // //                         }}
// // // //                     />
// // // //                 ))}
// // // //                 <input
// // // //                     type="text"
// // // //                     placeholder="Correct Answer"
// // // //                     value={correctAnswer}
// // // //                     onChange={(e) => setCorrectAnswer(e.target.value)}
// // // //                 />
// // // //                 <button className="btn1" onClick={handleAddQuestion}>Add Question</button>
// // // //             </div>
// // // //             <button className="btn2" conClick={handleCreateQuiz}>Create Quiz</button>
// // // //         </div>
// // // //     );
// // // // }

// // // // export default QuizCreator;
// // // import React, { useState } from 'react';
// // // import './QuizCreator.css';

// // // function QuizCreator({ addQuiz }) {
// // //     const [title, setTitle] = useState('');
// // //     const [questions, setQuestions] = useState([]);
// // //     const [questionText, setQuestionText] = useState('');
// // //     const [choices, setChoices] = useState(['', '', '', '']);
// // //     const [correctAnswer, setCorrectAnswer] = useState('');

// // //     const handleAddQuestion = () => {
// // //         const newQuestion = {
// // //             questionText,
// // //             choices,
// // //             correctAnswer,
// // //         };
// // //         setQuestions([...questions, newQuestion]);
// // //         setQuestionText('');
// // //         setChoices(['', '', '', '']);
// // //         setCorrectAnswer('');
// // //     };

// // //     const handleCreateQuiz = () => {
// // //         const newQuiz = {
// // //             title,
// // //             questions,
// // //         };
// // //         addQuiz(newQuiz);
// // //         setTitle('');
// // //         setQuestions([]);
// // //     };

// // //     return (
// // //         <div className="quiz-creator">
// // //             <h2>Create a Quiz</h2>
// // //             <input
// // //                 type="text"
// // //                 placeholder="Quiz Title"
// // //                 value={title}
// // //                 onChange={(e) => setTitle(e.target.value)}
// // //             />
// // //             <div>
// // //                 <input
// // //                     type="text"
// // //                     placeholder="Question"
// // //                     value={questionText}
// // //                     onChange={(e) => setQuestionText(e.target.value)}
// // //                 />
// // //                 {choices.map((choice, index) => (
// // //                     <input
// // //                         key={index}
// // //                         type="text"
// // //                         placeholder={`Choice ${index + 1}`}
// // //                         value={choice}
// // //                         onChange={(e) => {
// // //                             const newChoices = [...choices];
// // //                             newChoices[index] = e.target.value;
// // //                             setChoices(newChoices);
// // //                         }}
// // //                     />
// // //                 ))}
// // //                 <input
// // //                     type="text"
// // //                     placeholder="Correct Answer"
// // //                     value={correctAnswer}
// // //                     onChange={(e) => setCorrectAnswer(e.target.value)}
// // //                 />
// // //                 <button className="btn1" onClick={handleAddQuestion}>Add Question</button>
// // //             </div>
// // //             <button className="btn2" onClick={handleCreateQuiz}>Create Quiz</button>
// // //         </div>
// // //     );
// // // }

// // // export default QuizCreator;
// // import React, { useState } from 'react';
// // import './QuizCreator.css';

// // function QuizCreator({ addQuiz }) {
// //     const [title, setTitle] = useState('');
// //     const [questions, setQuestions] = useState([]);
// //     const [questionText, setQuestionText] = useState('');
// //     const [choices, setChoices] = useState(['', '', '', '']);
// //     const [correctAnswer, setCorrectAnswer] = useState('');

// //     const handleAddQuestion = () => {
// //         if (questionText && choices.every(choice => choice) && correctAnswer) {
// //             const newQuestion = {
// //                 questionText,
// //                 choices,
// //                 correctAnswer,
// //             };
// //             setQuestions([...questions, newQuestion]);
// //             setQuestionText('');
// //             setChoices(['', '', '', '']);
// //             setCorrectAnswer('');
// //         } else {
// //             alert("Please fill in all the fields for the question and choices.");
// //         }
// //     };

// //     const handleCreateQuiz = () => {
// //         if (title && questions.length > 0) {
// //             const newQuiz = {
// //                 title,
// //                 questions,
// //             };
// //             addQuiz(newQuiz);
// //             setTitle('');
// //             setQuestions([]);
// //         } else {
// //             alert("Please provide a title and at least one question for the quiz.");
// //         }
// //     };

// //     return (
// //         <div className="quiz-creator">
// //             <h2>Create a Quiz</h2>
// //             <input
// //                 type="text"
// //                 placeholder="Quiz Title"
// //                 value={title}
// //                 onChange={(e) => setTitle(e.target.value)}
// //             />
// //             <div>
// //                 <input
// //                     type="text"
// //                     placeholder="Question"
// //                     value={questionText}
// //                     onChange={(e) => setQuestionText(e.target.value)}
// //                 />
// //                 {choices.map((choice, index) => (
// //                     <input
// //                         key={index}
// //                         type="text"
// //                         placeholder={`Choice ${index + 1}`}
// //                         value={choice}
// //                         onChange={(e) => {
// //                             const newChoices = [...choices];
// //                             newChoices[index] = e.target.value;
// //                             setChoices(newChoices);
// //                         }}
// //                     />
// //                 ))}
// //                 <input
// //                     type="text"
// //                     placeholder="Correct Answer"
// //                     value={correctAnswer}
// //                     onChange={(e) => setCorrectAnswer(e.target.value)}
// //                 />
// //                 <button onClick={handleAddQuestion}>Add Question</button>
// //             </div>
// //             <button onClick={handleCreateQuiz}>Create Quiz</button>
// //         </div>
// //     );
// // }

// // export default QuizCreator;
// import React, { useState } from 'react';
// import './QuizCreator.css';

// function QuizCreator({ addQuiz }) {
//     const [title, setTitle] = useState('');
//     const [questions, setQuestions] = useState([]);
//     const [questionText, setQuestionText] = useState('');
//     const [choices, setChoices] = useState(['', '', '', '']);
//     const [correctAnswer, setCorrectAnswer] = useState('');

//     const handleAddQuestion = () => {
//         if (questionText && choices.every(choice => choice) && correctAnswer) {
//             const newQuestion = {
//                 questionText,
//                 choices: choices.filter(choice => choice.trim() !== ''), // Remove empty choices
//                 correctAnswer,
//             };
//             setQuestions([...questions, newQuestion]);
//             setQuestionText('');
//             setChoices(['', '', '', '']);
//             setCorrectAnswer('');
//         } else {
//             alert("Please fill in all the fields for the question and choices.");
//         }
//     };

//     const handleCreateQuiz = () => {
//         if (title && questions.length > 0) {
//             const newQuiz = {
//                 title,
//                 questions,
//             };
//             addQuiz(newQuiz);
//             setTitle('');
//             setQuestions([]);
//         } else {
//             alert("Please provide a title and at least one question for the quiz.");
//         }
//     };

//     return (
//         <div className="quiz-creator">
//             <h2>Create a Quiz</h2>
//             <input
//                 type="text"
//                 placeholder="Quiz Title"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//             />
//             <div>
//                 <input
//                     type="text"
//                     placeholder="Question"
//                     value={questionText}
//                     onChange={(e) => setQuestionText(e.target.value)}
//                 />
//                 {choices.map((choice, index) => (
//                     <input
//                         key={index}
//                         type="text"
//                         placeholder={`Choice ${index + 1}`}
//                         value={choice}
//                         onChange={(e) => {
//                             const newChoices = [...choices];
//                             newChoices[index] = e.target.value;
//                             setChoices(newChoices);
//                         }}
//                     />
//                 ))}
//                 <input
//                     type="text"
//                     placeholder="Correct Answer"
//                     value={correctAnswer}
//                     onChange={(e) => setCorrectAnswer(e.target.value)}
//                 />
//                 <button onClick={handleAddQuestion}>Add Question</button>
//             </div>
//             <button onClick={handleCreateQuiz}>Create Quiz</button>
//         </div>
//     );
// }

// export default QuizCreator;
// src/components/QuizCreator.js
import React, { useState } from 'react';

const QuizCreator = ({ addQuiz }) => {
    const [title, setTitle] = useState('');
    const [questions, setQuestions] = useState([]);
    const [questionText, setQuestionText] = useState('');
    const [choices, setChoices] = useState(['', '', '', '']);
    const [correctAnswer, setCorrectAnswer] = useState('');

    const handleAddQuestion = () => {
        const newQuestion = {
            questionText,
            choices,
            correctAnswer,
        };
        setQuestions([...questions, newQuestion]);
        setQuestionText('');
        setChoices(['', '', '', '']);
        setCorrectAnswer('');
    };

    const handleCreateQuiz = () => {
        const newQuiz = {
            title,
            questions,
        };
        addQuiz(newQuiz);
        setTitle('');
        setQuestions([]);
    };

    return (
        <div className="quiz-creator">
            <h2>Create a Quiz</h2>
            <input
                type="text"
                placeholder="Quiz Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <div>
                <input
                    type="text"
                    placeholder="Question"
                    value={questionText}
                    onChange={(e) => setQuestionText(e.target.value)}
                />
                {choices.map((choice, index) => (
                    <input
                        key={index}
                        type="text"
                        placeholder={`Choice ${index + 1}`}
                        value={choice}
                        onChange={(e) => {
                            const newChoices = [...choices];
                            newChoices[index] = e.target.value;
                            setChoices(newChoices);
                        }}
                    />
                ))}
                <input
                    type="text"
                    placeholder="Correct Answer"
                    value={correctAnswer}
                    onChange={(e) => setCorrectAnswer(e.target.value)}
                />
                <button onClick={handleAddQuestion}>Add Question</button>
            </div>
            <button onClick={handleCreateQuiz}>Create Quiz</button>
        </div>
    );
};

export default QuizCreator;
