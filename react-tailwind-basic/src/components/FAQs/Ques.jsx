import React, { useState } from 'react';

export default function Ques() {
    const ques = [
        {
            question: "Who am I",
            answer: "I am Batman"
        },
        {
            question: "Name",
            answer: "Raj Shekhar Verma (rjv01)"
        },
        {
            question: "Why are you creating this React project",
            answer: "To be seen by someone"
        },
        {
            question: "What motivates you?",
            answer: "The fear of being ordinary"
        },
        {
            question: "Where do you see yourself in 5 years?",
            answer: "On the top of my game, doing what I love"
        },
        {
            question: "What's your favorite programming language?",
            answer: "JavaScript – because it powers my ideas"
        },
        {
            question: "What keeps you up at night?",
            answer: "Thinking about what I haven't built yet"
        },
        {
            question: "What is your biggest strength?",
            answer: "I learn fast and never quit"
        },
        {
            question: "What is success to you?",
            answer: "Turning dreams into deployable code"
        },
        {
            question: "What do you do when you fail?",
            answer: "I debug myself and try again"
        }
    ];

    const [toggleAnswer, setToggleAnswer] = useState(Array(ques.length).fill(false));

    const handleToggleAnswer = (index) => {
        setToggleAnswer(prev => {
            const updated = [...prev];
            updated[index] = !updated[index];
            return updated;
        });
    };

    return (
        <div className="max-w-3xl mx-auto p-6">
            {ques.map((que, index) => (
                <div
                    key={index}
                    className="bg-white border border-gray-300 shadow-md rounded-xl p-6 mb-4 transition duration-300 ease-in-out hover:shadow-lg"
                >
                    <div className="flex items-center justify-between text-lg font-semibold text-gray-800">
                        <span>{index + 1}. {que.question}</span>
                        <button
                            className="text-blue-500 hover:text-blue-700 focus:outline-none"
                            onClick={() => handleToggleAnswer(index)}
                        >
                            {toggleAnswer[index] ? '↑ Hide' : '↓ Show'}
                        </button>
                    </div>
                    {toggleAnswer[index] && (
                        <div className="mt-4 text-green-600 font-medium animate-fade-in">
                            {que.answer}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
