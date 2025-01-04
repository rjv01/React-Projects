import React, { useEffect, useState } from 'react'

export default function Stopwatch() {
    const [time,setTime] = useState(0);
    const [running,setRunning] = useState(false);

    useEffect(()=>{
        let interval;
        if(running){
            interval = setInterval(()=>{
                setTime((prevTime)=> prevTime+10);
            },10);
        } else if(!running)
            clearInterval(interval);
        return () => clearInterval(interval);
    },[running]);

  return (
    <div className='min-h-screen flex flex-col justify-center items-center bgGrid'>
        <h1 className='text-4xl '>StopWatch</h1>
        <div className='text-3xl flex m-5 p-5'>
            <span> {('0'+Math.floor((time/60000)%60)).slice(-2)}:</span>
            <span> {('0'+Math.floor((time/1000)%60)).slice(-2)}:</span>
            <span> {('0'+Math.floor((time/10)%100)).slice(-2)}</span>
        </div>
        <div className=''>
            <button
            onClick={()=> setRunning(true)}
            className='text-white text-2xl m-5 p-5 bg-blue-400 border rounded-full hover:bg-blue-700'>
                Start</button>
            <button
            onClick={()=> setRunning(false)}
            className='text-white text-2xl m-5 p-5 bg-blue-400 border rounded-full hover:bg-blue-700'>
                Stop</button>
            <button
            onClick={()=> setTime(0)}
            className='text-white text-2xl m-5 p-5 bg-blue-400 border rounded-full hover:bg-blue-700'>
                Reset</button>
        </div>
    </div>
  )
}
