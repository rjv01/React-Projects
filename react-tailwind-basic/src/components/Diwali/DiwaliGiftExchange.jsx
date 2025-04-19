import React, { useState } from 'react';

export default function DiwaliGiftExchange() {
  const Gifts = [
    "Box of Ferrero Rocher",
    "Scented Candle Set",
    "Silver Coin",
    "Customized Coffee Mug",
    "Dry Fruit Hamper",
    "Bluetooth Speaker",
    "Handcrafted Diya Set",
    "Personalized Diary & Pen Set",
    "Diwali Sweets Box"
  ];

  const [name, setName] = useState("");
  const [nameArr, setNameArr] = useState(["raj shekhar verma"]);
  const [assignedGifts, setAssignedGifts] = useState({});
  const [isGiftsAssigned,setIsGiftsAssigned] = useState(false);

  const handleNameSubmit = () => {
    if (name.trim() === "") return;
    setNameArr([...nameArr, name]);
    setName("");
  };

  const handleRemoveName = (naam) => {
    setNameArr(nameArr.filter(item => item !== naam));
    const updatedGifts = { ...assignedGifts };
    delete updatedGifts[naam];
    setAssignedGifts(updatedGifts);
  };

  const handleAssignGifts = () => {
    if(isGiftsAssigned)
      return ;
    let availableGifts = [...Gifts];
    const newAssignments = {};

    for (let i = 0; i < nameArr.length; i++) {
      const randIndex = Math.floor(Math.random() * availableGifts.length);
      newAssignments[nameArr[i]] = availableGifts[randIndex];
      availableGifts.splice(randIndex, 1); // remove used gift
    }

    setAssignedGifts(newAssignments);
    setIsGiftsAssigned(true);
  };

  const handleShuffleGifts = () => {
    // Shuffle only after first assignment
    if (!setAssignedGifts) return;

    let availableGifts = [...Gifts];
    const shuffledAssignments = {};

    for (let i = 0; i < nameArr.length; i++) {
      const randIndex = Math.floor(Math.random() * availableGifts.length);
      shuffledAssignments[nameArr[i]] = availableGifts[randIndex];
      availableGifts.splice(randIndex, 1);
    }

    setAssignedGifts(shuffledAssignments);
  };

  const handleResetGifts = () => {
    setAssignedGifts({});
    setIsGiftsAssigned(false);
  };

  return (
    <div className='min-h-screen bgGrid flex flex-col justify-center items-center'>
      <h1 className='text-3xl font-sarif font-bold m-2 p-2'>Assign Gifts</h1>
      <div className='flex'>
        <input
          type="text"
          className='m-2 p-4 border-2 border-black rounded-md text-xl'
          autoFocus
          placeholder='Enter Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          className='border-2 m-2 p-4 text-xl font-semibold rounded-md bg-red-400 hover:bg-red-500 duration-200'
          onClick={handleNameSubmit}
        >Add Person</button>
      </div>

      <ul className='flex flex-row'>
        {nameArr.map((item, index) => (
          <div 
            key={index} 
            className='border-2 border-black m-4 p-4'>
            <h1 className='capitalize m-2 p-2 text-xl font-semibold'>{item}</h1>
            <button
              className='mb-4 border-2 mt-2 p-2 text-md font-semibold rounded-md bg-red-400 hover:bg-red-500 duration-200'
              onClick={() => handleRemoveName(item)}
            >Remove</button>
            <div className='text-lg text-green-600'>
              {assignedGifts[item] ? assignedGifts[item] : "No Gift Assigned"}
            </div>
          </div>
        ))}
      </ul>

      <div className='flex'>
        <button
          className='border-2 m-2 p-4 text-xl font-semibold rounded-md bg-red-400 hover:bg-red-500 duration-200'
          onClick={handleAssignGifts}
        >Assign Gifts</button>
        <button
          className='border-2 m-2 p-4 text-xl font-semibold rounded-md bg-red-400 hover:bg-red-500 duration-200'
          onClick={handleShuffleGifts}
        >Shuffle Gifts</button>
        <button
          className='border-2 m-2 p-4 text-xl font-semibold rounded-md bg-red-400 hover:bg-red-500 duration-200'
          onClick={handleResetGifts}
        >Reset</button>
      </div>
    </div>
  );
}
