import React, { useEffect, useState } from 'react';
import { getFact } from './apis/fact';

export default function CatFact() {
    const [fact,setFact] = useState('');
    const [loading,setLoading] = useState();

    
    async function handleFact(){
        setLoading(true);
        const json = await getFact();
        setFact(json);
        setLoading(false);
    }

    return (
        <div className='min-h-screen bgGrid flex justify-center items-center'>
            <div className='flex flex-col justify-center  text-xl  p-4 w-[300px] h-[350px] items-center'>
                <button
                    className='border-4 border-blue-500 m-3 p-3 font-semibold font-serif  rounded-lg hover:bg-blue-500 duration-300 hover:text-white'
                    onClick={handleFact}
                >
                    Get Random Cat Fact
                </button>
                <div className=' '>
                    {loading ? 
                        (
                            <p className='text-4xl'>
                                <i className="fa-solid fa-gear animate-spin mt-3 "></i>
                            </p>
                        ): fact ?(
                            <p className='mt-3'>{fact.fact}</p>
                        ):(
                            <p>Click the button to get Cat fact</p>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
