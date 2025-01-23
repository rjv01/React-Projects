import React from 'react';

export default function LineItem({ item, handleCheck, handleDelete }) {
  return (
    <div className='grid'>
      <div className="border shadow-lg w-full max-w-sm p-3 mt-3 flex items-center justify-between bg-white rounded-xl">
        <li className="flex items-center gap-3 w-full">
          <input
            className="w-6 h-6 border-blue-400 rounded cursor-pointer"
            type="checkbox"
            aria-label={`Mark ${item.item} as completed`}
            onChange={() => handleCheck(item.id)}
            checked={item.checked}
          />
          <label
            className={`flex-grow cursor-pointer ${
              item.checked ? 'line-through text-gray-500' : 'text-gray-800'
            }`}
            onDoubleClick={() => handleCheck(item.id)}
          >
            {item.item}
          </label>
          <button
            className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600 duration-200"
            aria-label={`Delete ${item.item}`}
            onClick={() => handleDelete(item.id)}
          >
            Delete
          </button>
        </li>
      </div>
    </div>
  );
}
