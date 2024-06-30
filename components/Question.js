
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
