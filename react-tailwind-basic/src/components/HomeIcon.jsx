import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function HomeIcon() {
  const [isDarkMood,setIsDarkMood] = useState(false);
  
  function handleColorMood(){
    if(isDarkMood){
      document.body.style.filter = 'none';
      document.body.style.backgroundColor = 'white';
    }
    else{
      document.body.style.filter = 'invert(1)';
      document.body.style.backgroundColor = "#000";
    }
    setIsDarkMood(!isDarkMood);
  }

  return (
    <div className='flex justify-center items-center bgGrid'>
        <Link to={'/'}><i className="fa-solid fa-house text-3xl text-blue-500 hover:text-blue-700 duration-300 mt-5"></i></Link>
        <div className="absolute top-4 right-5">
          <button 
            className="p-5 m-5 font-bold text-xl text-black rounded-md hover:text-blue-500 transition duration-200"
            onClick={handleColorMood}
          >
            Light/Dark
          </button>
        </div>
    </div>
  )
}
