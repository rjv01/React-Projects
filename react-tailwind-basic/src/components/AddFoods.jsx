import React, { useState } from 'react'

export default function AddFoods() {
    const [foods,setFoods] = useState(["Apple","Pijjo","Cake"]);
    
    function handleAddFood(e){
        const newFood = document.getElementById("inputfood").value;
        if(!newFood==""){
            setFoods(f=>([...f,newFood]));
        }
        else
            alert("Enter Some Value");
        document.getElementById("inputfood").value="";
    }
    function handleRemoveFood(index){
        setFoods(foods.filter((_,i)=> i!== index));
    }

  return (
    <div className='min-h-screen flex flex-col justify-center items-center bgGrid'>
        <h1 className='text-5xl m-5'>Food Items</h1>
        <p className='text-lg underline m-5'>Click on items to remove it</p>
        <ul className='text-3xl'>
            {foods.map((food,index)=>
                <li className='flex flex-col justify-center items-center hover:bg-red-400 border rounded-lg w-[120px] h-[50px] m-5' key={index} onClick={()=> handleRemoveFood(index)}>
                        {food} 
                        </li>
            )}
        </ul>
        <div className='m-5 text-xl'>
            <input className='m-5 w-[250px] h-[40px]' type="text" name="" id="inputfood" placeholder='Enter Food Element'/>
            <button className=' border rounded-full w-[100px] h-[50px] bg-blue-400 hover:bg-blue-600 duration-200' onClick={handleAddFood}>Add</button>
        </div>
    </div>
  )
}
