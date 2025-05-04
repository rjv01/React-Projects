import React, { useEffect, useState } from 'react'

export default function ShoppingList() {
    const [food,setFood] = useState('');
    const [shoppingListArray,setShoppingListArray] = useState([]);
    const [bucketList,setBucketList] = useState([]);
    

    const handleInput=(e)=>{
        // console.log(e.target.value);
        setFood(e.target.value);
    }

    const fetchFoodItems = async(food)=>{
        const url = `https://api.frontendeval.com/fake/food/${food}`;
        const result = await fetch(url);
        const data = await result.json();
        console.log(data);
        setShoppingListArray(data);
    }

    useEffect(()=>{
        if(food.length>=2){
            //api calling
            fetchFoodItems(food);
        }
    },[food]);

    const handleShoppingList=(e)=>{
       try{
        const idx = e.target.getAttribute("data-id");
        if(idx){
            const obj={
                id:Date.now(),
                data:shoppingListArray[idx],
                isDone:false,
            }
            const copyBucketList = [...bucketList];
            copyBucketList.push(obj);
            setBucketList(copyBucketList);
        }
        else{
            setBucketList([]);
        }
       }catch(error){
        console.error("Failed to fetch food items:", error);
        setShoppingListArray([]);
       }
    }
    console.log(bucketList);

    const handleTick=(id)=>{
        const copyBucketList = [...bucketList];
        const newBucketList = copyBucketList.map((item,index)=>{
            if(item.id == id){
                item.isDone = !item.isDone;
            }
            return item;
        });
        setBucketList(newBucketList);
    }
    const handleDel=(foodItemId)=>{
        const filterBucketLis = bucketList.filter(item=>foodItemId!=item.id);
        setBucketList(filterBucketLis);
    }
    const handleTextClear=()=>{
        setFood('');
    }
    return (
        <div className='min-h-screen bgGrid flex flex-col  items-center'>
            <h1 className='m-3 text-4xl font-semibold'>ShoppingList</h1>
            <div>
                <input 
                    type="text"
                    onChange={handleInput}
                    value={food}
                    placeholder='Enter Food name'
                    className='text-2xl p-4 m-3 border-2 border-black rounded-lg shadow-lg'
                    autoFocus
                />
                <button onClick={handleTextClear}>X</button>
                <p className='m-1'>E.g. milk</p>
                {
                    food.length>=2 && <div className='border-2 text-lg border-black overflow-x-auto p-3 m-3 w-[350px] h-[350px] rounded-xl' 
                    onClick={handleShoppingList}>
                    {
                        shoppingListArray.map((item,index)=>{
                            return(
                                <p 
                                    key={item.id}
                                    data-id={index}
                                    className='bg-pink-100 p-3 m-3 hover:bg-pink-400 duration-200 cursor-pointer'
                                >
                                    {item}
                                </p>
                            )
                        })
                    }
                </div>
                }
                {
                    bucketList.length > 0 && <div>
                    <h1 className='text-center'>BucketList</h1>
                    {
                        bucketList.map((item,index)=>{
                            return(
                                <div 
                                    key={index}
                                    className='grid grid-cols-3 w-[350px] font-bold border-2 border-black p-3 m-3 text-center'
                                >
                                    <button 
                                        onClick={()=>handleTick(item.id)}
                                        className='text-green-400 hover:text-green-800 rounded-lg shadow-lg duration-200 text-lg p-3 m-1'
                                    >✔</button>
                                    <div
                                        className={item.isDone ? "line-through text-2xl font-mono p-3 m-1":"text-2xl font-mono p-3 m-1"}
                                    >{item.data}</div>
                                    <button 
                                        onClick={()=>handleDel(item.id)}
                                        className='text-red-400 hover:text-red-800 rounded-lg shadow-lg duration-200 text-lg p-3 m-1'
                                    >X</button>
                                </div>
                            )
                        })
                    }
                </div>
                }
            </div>
        </div>
    )
}
