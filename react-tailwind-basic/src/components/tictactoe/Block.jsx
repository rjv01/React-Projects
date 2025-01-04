import React from 'react';

export default function Block({ value, onClick }) {
  return (
    <div
      onClick={onClick}
      className="flex justify-center items-center w-20 h-20 border text-2xl font-bold cursor-pointer hover:bg-red-600 transition duration-200"
    >
      {value}
    </div>
  );
}
