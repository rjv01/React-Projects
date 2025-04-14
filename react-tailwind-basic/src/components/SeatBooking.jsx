import React, { useState } from 'react';

export default function SeatBooking() {
    const [bookedSeat, setBookedSeat] = useState([]);
    const [selectedSeats, setSelectedSeats] = useState([]);

    const handleSeat = (seatNumber) => {
        if (bookedSeat.includes(seatNumber)) return;

        if (selectedSeats.includes(seatNumber)) {
            setSelectedSeats(selectedSeats.filter(seat => seat !== seatNumber));
        } else {
            setSelectedSeats([...selectedSeats, seatNumber]);
        }
    };

    const handleConfirm = () => {
        if (selectedSeats.length === 0) return;

        const updatedSeats = [...new Set([...bookedSeat, ...selectedSeats])];
        alert(`Seats booked: ${selectedSeats.sort((a, b) => a - b).join(', ')}`);
        setBookedSeat(updatedSeats);
        setSelectedSeats([]);
    };

    const renderRow = (startNumber, label) => (
        <div className='mb-6 ml-8'>
            <h2 className='text-xl font-semibold mb-2'>{label}</h2>
            <div className='grid grid-cols-5 gap-4'>
                {[...Array(15   ).keys()].map((i) => {
                    const seatNumber = startNumber + i;
                    const isBooked = bookedSeat.includes(seatNumber);
                    const isSelected = selectedSeats.includes(seatNumber);

                    return (
                        <button
                            key={seatNumber}
                            onClick={() => handleSeat(seatNumber)}
                            disabled={isBooked}
                            className={`text-lg w-16 h-16 rounded-lg transition duration-200 font-semibold
                                ${isBooked
                                    ? 'bg-gray-300 text-gray-700 border border-gray-500 cursor-not-allowed'
                                    : isSelected
                                        ? 'bg-green-200 text-green-800 border-2 border-green-500'
                                        : 'bg-white border border-red-300 hover:bg-yellow-100 hover:border-yellow-400'}`}
                        >
                            {seatNumber}
                        </button>
                    );
                })}
            </div>
        </div>
    );

    return (
        <div className='min-h-screen bgGrid flex flex-col justify-center items-center px-4 py-8'>
            <h1 className='text-4xl font-bold mb-10 text-red-600'>🎟️ Seat Booking System</h1>

            <div className='w-full max-w-3xl p-6 bg-white rounded-xl shadow-lg'>
                {renderRow(1, "VIPs")}
                {renderRow(16, "General")}
                {renderRow(26, "Eco Lobby")}

                <div className='flex justify-center mt-8'>
                    <button
                        className={`px-6 py-3 text-xl font-bold rounded-xl transition duration-300 shadow-md
                            ${selectedSeats.length === 0
                                ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                                : 'bg-red-500 text-white hover:bg-red-600'}`}
                        onClick={handleConfirm}
                        disabled={selectedSeats.length === 0}
                    >
                        Confirm Booking
                    </button>
                </div>
            </div>
        </div>
    );
}
