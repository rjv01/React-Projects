import React, { useState } from 'react';

export default function RatingStar() {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [showRating, setShowRating] = useState(false);

    const handleReset = () => {
        setRating(0);
        setHover(0);
        setShowRating(false);
    };

    const handleRating = (num) => {
        setRating(num);
        setShowRating(true);
    };

    return (
        <div className='min-h-screen flex flex-col items-center justify-center bgGrid '>
            <h1 className='text-3xl text-red-500 font-bold mb-6'>Simple RatingStar Feature</h1>

            <div className='flex text-[90px] gap-8 mb-6'>
                {[1, 2, 3, 4, 5].map((num) => (
                    <button
                        key={num}
                        onClick={() => handleRating(num)}
                        onMouseOver={() => setHover(num)}
                        onMouseLeave={() => setHover(rating)}
                    >
                        <span
                            className={`rounded-full duration-200 hover:shadow-2xl ${
                                num <= (hover || rating)
                                    ? ''
                                    : 'text-slate-500'
                            }`}
                            style={{
                                color: num <= (hover || rating) ? '#39FF14' : undefined,
                            }}
                        >
                            &#9733;
                        </span>
                    </button>
                ))}
            </div>

            <div className='flex flex-col items-center gap-4'>
                {showRating && (
                    <p className='text-xl font-semibold'>{rating} / 5</p>
                )}
                <button
                    onClick={handleReset}
                    className='duration-200 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700'
                >
                    Reset
                </button>
            </div>
        </div>
    );
}
