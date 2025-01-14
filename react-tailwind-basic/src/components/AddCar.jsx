import React, { useState } from 'react';

export default function AddCar() {
  const [carsArr, setCarsarr] = useState([]);
  const [carname, setCarname] = useState('');
  const [carYear, setCarYear] = useState('');

  function handleAddCar() {
    if (carname.trim() === '' || carYear.trim() === '') {
      alert('Please fill out both fields!');
      return;
    }

    const newCar = {
      year: carYear,
      name: carname,
    };
    setCarsarr((c) => [...c, newCar]);
    setCarYear('');
    setCarname('');
  }

  function handleCarName(e) {
    setCarname(e.target.value);
  }

  function handleCarYear(e) {
    setCarYear(e.target.value);
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bgGrid">
      <h1 className="text-4xl font-semibold mb-6">List of Car Objects</h1>

      <div className="w-full max-w-md bg-blue-400 p-[50px] rounded-lg shadow-xl space-y-6">
        <ul className="space-y-3 text-xl">
          {carsArr.map((car, index) => (
            <li key={index} className="flex justify-between">
              <span>{car.name}</span>
              <span>{car.year}</span>
            </li>
          ))}
        </ul>

        <div className="space-y-4">
          <input
            value={carname}
            onChange={handleCarName}
            type="text"
            placeholder="Car Name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            value={carYear}
            onChange={handleCarYear}
            type="text"
            placeholder="Car Year"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          className="w-full py-3 bg-white text-black font-bold rounded-lg hover:bg-blue-600 hover:text-white transition duration-300"
          onClick={handleAddCar}
        >
          Add Car
        </button>
      </div>
    </div>
  );
}
