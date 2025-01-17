import React, { useEffect, useState } from 'react'

export default function DigitalClock() {
    const [time,setTime] = useState(new Date());
    useEffect(()=>{
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return ()=>{
            clearInterval(intervalId);
        }
    },[]);

    function formatTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM":"AM";

        hours = hours%12 || 12;

        return `${prefixZeroes(hours)}:${prefixZeroes(minutes)}:${prefixZeroes(seconds)}:${meridiem}`;
    }

    function prefixZeroes(number){
        return number < 10 ? `0${number}`:number;
    }

  return (
    <div className='min-h-screen flex flex-col justify-center items-center bgGrid'>
        <h1 className=' font-bold text-4xl m-5 p-5'>Digital Clock</h1>
        <div className='text-6xl'>
            <span className='text-blue-500 font-bold font-mono text-shadow'>{formatTime()}</span>
        </div>
    </div>
  )
}
