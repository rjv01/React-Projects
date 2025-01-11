import React from 'react'
import {Link} from 'react-router-dom';

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col items-center bgGrid'>
        <h1 className='text-5xl'>Home Page</h1>
        <div className='flex flex-col m-5 text-3xl'>
          <Link className='flex flex-col justify-center items-center m-5 underline hover:text-blue-700 duration-200' to={'/counter'}>Counter Application</Link>
          <Link className='flex flex-col justify-center items-center m-5 underline hover:text-blue-700 duration-200' to={'/stopwatch'}>StopWatch</Link>
          <Link className='flex flex-col justify-center items-center m-5 underline hover:text-blue-700 duration-200' to={'/todo'}>Todo List</Link>
          <Link className='flex flex-col justify-center items-center m-5 underline hover:text-blue-700 duration-200' to={'/tictactoe'}>TicTacToe</Link>
          <Link className='flex flex-col justify-center items-center m-5 underline hover:text-blue-700 duration-200' to={'/colorpicker'}>ColorPicker</Link>
          <Link className='flex flex-col justify-center items-center m-5 underline hover:text-blue-700 duration-200' to={'/addfoods'}>AddFoods</Link>
          <Link className='flex flex-col justify-center items-center m-5 underline hover:text-blue-700 duration-200' to={'/list'}>List</Link>
          <Link className='flex flex-col justify-center items-center m-5 underline hover:text-blue-700 duration-200' to={'/addcar'}>AddCar</Link>
        </div>
    </div>
  )
}
