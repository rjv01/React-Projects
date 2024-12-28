import StopWatch from './components/StopWatch'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [startTime,setstartTime] = useState(0);
  const [running,setrunning] = useState(false);

  useEffect(()=>{
    let intervel;
    if(running){
      intervel = setInterval(() => {
        setstartTime((prevTime) => prevTime + 10);
      },10);
    }
    else{
      clearInterval(intervel);
    }
    return () => clearInterval(intervel);
  },[running])

  function handleStart(){
    setrunning(true);
  }

  function handlePause(){
    setrunning(false);
  }

  function handleReset(){
    setrunning(false);
    setstartTime(0);
  }
  return (
    <>
      <StopWatch
          startTime={startTime}
          setstartTime={setstartTime}
          handleStart={handleStart} 
          handlePause={handlePause} 
          handleReset={handleReset}
      />
    </>
  )
}

export default App
