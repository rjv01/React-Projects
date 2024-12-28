import React from 'react'

export default function StopWatch(props) {
    const {startTime,handleStart,handlePause,handleReset} = props;
  return (
    <div>
        <h1>Stop Watch</h1>
        <div>
            <span> {("0"+Math.floor((startTime/60000)%60)).slice(-2)}:</span>
            <span>{("0"+Math.floor((startTime/1000)%60)).slice(-2)}:</span>
            <span>{("0"+Math.floor((startTime/10)%100)).slice(-2)} </span>
        </div>
        <button onClick={handleStart} className='btn'>Start</button>
        <button onClick={handlePause} className='btn'>Pause</button>
        <button onClick={handleReset} className='btn'>Reset</button>
    </div>
  )
}
