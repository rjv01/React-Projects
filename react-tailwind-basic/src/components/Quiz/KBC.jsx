import React, { useState } from 'react';
import questions from './Ques';

export default function KBC() {
    const [selectedOptions, setSelectedOptions] = useState({});
    const [score, setScore] = useState(0);
    const [submitted, setSubmitted] = useState(false);

    const handleOptions = (option, index) => {
        setSelectedOptions({
            ...selectedOptions,
            [index]: option,
        });
    };

    const handleSubmit = () => {
        if (Object.keys(selectedOptions).length === questions.length) {
            let points = 0;
            for (let i = 0; i < questions.length; i++) {
                if (selectedOptions[i] === questions[i].answer) {
                    points++;
                }
            }
            setScore(points);
            setSubmitted(true);
        } else {
            alert("Please complete all questions!");
        }
    };

    return (
        <div className='min-h-screen flex flex-col justify-center items-center bgGrid to-blue-100 p-6'>
            <h1 className='text-4xl font-bold mb-6 text-purple-800'>💼 Welcome to KMP (Kisko Milega Placement)</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {
                    questions.map((ques, index) => (
                        <div key={index} className='bg-white shadow-lg rounded-lg p-6 border-2 border-purple-300'>
                            <h2 className='text-xl font-semibold mb-4 text-gray-800'>{index + 1}. {ques.que}</h2>
                            <div className='grid grid-cols-2 gap-4'>
                                {
                                    ques.options.map((opt, idx) => (
                                        <button
                                            key={idx}
                                            className={`p-3 rounded-lg border-2 font-medium 
                                                ${selectedOptions[index] === opt ? 'bg-blue-600 text-white border-blue-800' : 'bg-blue-100 hover:bg-blue-200'}
                                            `}
                                            onClick={() => handleOptions(opt, index)}
                                        >
                                            {opt}
                                        </button>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>

            <button
                className='mt-8 bg-red-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-red-700 duration-200'
                onClick={handleSubmit}
            >
                Submit
            </button>

            {
                submitted &&
                <div className='mt-6 px-8 py-4 border-4 border-green-600 rounded-xl bg-green-100 text-center shadow-xl'>
                    <h2 className='text-3xl font-bold text-green-800'>🎉 Quiz Completed!</h2>
                    <p className='text-xl mt-2'>Your Score: <span className="font-semibold">{score} / {questions.length}</span></p>
                </div>
            }
        </div>
    );
}
