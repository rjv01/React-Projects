import React, { useState } from 'react';
import Block from './Block';

export default function TicTacToe() {
  const [state, setState] = useState(Array(9).fill(null));
  const [currentTurn, setCurrentTurn] = useState("X");
  const [winner, setWinner] = useState(null);

  function checkWinner() {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < winPatterns.length; i++) {
      const [a, b, c] = winPatterns[i];
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a]; // Return the winner (X or O)
      }
    }
    return null;
  }

  const handleBlockClick = (index) => {
    if (state[index] || winner) return; // Prevent clicking on filled or after game over
    const newState = [...state];
    newState[index] = currentTurn;
    
    
    const win = checkWinner();
    if (win) {
      setWinner(win);
      return;
    }
    setState(newState);
    setCurrentTurn(currentTurn === "X" ? "O" : "X");
  };

  const resetGame = () => {
    setState(Array(9).fill(null));
    setCurrentTurn("X");
    setWinner(null);
  };

  return (
    <div className="min-h-screen bgGrid flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-6">Tic Tac Toe Game</h1>
      <div className="text-white bg-blue-400 transition duration-300 grid grid-cols-3 gap-4 p-6">
        {state.map((value, index) => (
          <Block
            key={index}
            value={value}
            onClick={() => handleBlockClick(index)}
          />
        ))}
      </div>
      {winner && (
        <div className="mt-4 text-2xl font-bold text-green-500">
          {winner} wins the game!
        </div>
      )}
      {!winner && state.every((cell) => cell) && (
        <div className="mt-4 text-2xl font-bold text-yellow-500">
          It's a Draw!
        </div>
      )}
      <button
        onClick={resetGame}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Reset Game
      </button>
    </div>
  );
}
