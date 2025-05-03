import React, { useState } from 'react'

export default function RedoUndoHome() {
    const [value,setValue] = useState(0);
    const [history,setHistory] = useState([]);
    const [redoList,setRedoList] = useState([]);
    const [undoCount,setUndoCount] = useState(0);

    const maintainHistory=(key,prev,curr)=>{
        console.log(key,prev,curr);
        const obj = {
            action:key,
            prev,
            curr,
        }
        const copyHistory = [...history];
        copyHistory.unshift(obj);
        setHistory(copyHistory);
    }

    const handleClick=(key)=>{
        const addSub = parseInt(key);
        maintainHistory(key,value,addSub+value);
        setValue((prev=> prev+addSub));
    }
    const handleRest=()=>{
        setValue(0);
        setHistory([]);
    }
    const handleRedo=()=>{
        if(history.length){
            if(undoCount+1 > 5){
                alert("Limit reached undo count=5");
            }
            setUndoCount((prev)=>prev+1);
            const copyHist = [...history];
            const firstItem = copyHist.shift();
            // console.log(firstItem);
            setHistory(copyHist);
            
            setValue(firstItem.prev);
            const copyRedoList = [...redoList];
            copyRedoList.push(firstItem);
            setRedoList(copyRedoList);
        }
    }
    const handleUndo=()=>{
        if(redoList.length){
            const copyRedoList = [...redoList];
            const poppedValue = copyRedoList.pop();
            setRedoList(copyRedoList);
            const {action,prev,curr} = poppedValue;
            setValue(curr);
            maintainHistory(action,prev,curr);
        }
    }
    return (
        <div className='min-h-screen bgGrid flex flex-col items-center'>
            <div className=''>
                <h1 className='text-4xl font-bold font-sans p-4 m-3'>Undoable Counter</h1>
            </div>
            
            <div >
                <button 
                    className='border-2 border-black p-2 m-4 gap-2 bg-red-400 hover:bg-red-500 duration-150 rounded-lg shadow-lg text-white text-2xl'
                    onClick={handleRedo}
                >Undo</button>
                <button 
                    className='border-2 border-black p-2 m-2 gap-2  bg-blue-400 hover:bg-blue-500 duration-150 rounded-lg shadow-lg text-white text-2xl'
                    onClick={handleUndo}
                >Redo</button>
            </div>

            <div className='flex gap-2 space-x-4 text-2xl text-white'>
                {
                    [-100,-10,-1].map((btn,index)=>{
                        return(
                            <button
                            key={index} 
                                className='border-2 border-black p-2 m-2 bg-pink-400 hover:bg-pink-500 duration-150 rounded-xl'
                                onClick={()=>handleClick(btn)}
                            >{btn}</button>
                        )
                    })
                }
                <div className='text-6xl'>
                    <h1 
                        className='text-red-600'
                        name={value}
                    >{value}</h1>
                </div>
                {
                    ['+1','+10','+100'].map((btn,index)=>{
                        return(
                            <button 
                                key={index}    
                                className='border-2 border-black p-2 m-2 bg-pink-400 hover:bg-pink-500 duration-150 rounded-xl'
                                onClick={()=>handleClick(btn)}
                            >{btn}</button>
                        )
                    })
                }
            </div>
            <div>
                <button
                    className='border-2 border-black p-3 m-2 bg-slate-500 hover:bg-slate-700 text-white text-xl rounded-lg shadow-lg duration-150'
                    onClick={handleRest}
                >Reset</button>
            </div>
            <div className='text-center border-2 bg-slate-300 border-black w-[450px] h-[350px] m-4 p-2 overflow-y-auto rounded-2xl'>
                <h1 className='text-2xl text-red-500'>History</h1>
                <div className='grid grid-cols-4 text-2xl'>
                    <p>Action</p>
                    <p>prev</p>
                    <p>to</p>
                    <p>curr</p>
                </div>
                {
                    history.map((item,index)=>{
                        return(
                            <div
                                key={index}
                                className='grid grid-cols-4 text-2xl text-purple-500 font-semibold'
                            >
                                <p>{item.action}</p> <p>{item.prev}</p>{"->"}  <p>{item.curr}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
