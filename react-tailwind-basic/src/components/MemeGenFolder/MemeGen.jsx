import React, { useState } from 'react';

import img1 from '../Media/meme-img1.png';
import img2 from '../Media/meme-img2.png';
import img3 from '../Media/meme-img3.png';
import img4 from '../Media/meme-img4.png';
import img5 from '../Media/meme-img5.png';
import img6 from '../Media/meme-img6.png';
import img7 from '../Media/meme-img7.png';
import img8 from '../Media/meme-img8.png';
import img9 from '../Media/meme-img9.png';
import img10 from '../Media/meme-img10.png';

export default function MemeGen(){
    const memeCollection = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10];
    let len = memeCollection.length;
    const [randomNumber,setRandomNumber] = useState(0);

    const handleGenMeme =()=>{
        const randNum = Math.floor(Math.random()*len)+1;
        setRandomNumber(randNum);
        console.log(randomNumber);
    }
    return(
        <div className='min-h-screen bgGrid flex flex-col justify-center items-center'>
            <h1 className='text-4xl font-semibold p-2 font-sans'>Random Meme Generator</h1>
            <div className='m-2 p-2 '>
                <img
                    className='p-2 w-[500px] h-[500px] border-2 border-black rounded-xl shadow-lg' 
                    src={memeCollection[randomNumber]} alt="Img"/>
            </div>
            <button 
                className="bg-red-400 m-2 p-4 text-2xl font-mono rounded-lg hover:bg-red-500 duration-200 shadow-xl"
                onClick={handleGenMeme}    
            >Genrate Meme</button>
        </div>
    )
}