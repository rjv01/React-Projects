import React, { useState,useRef, useEffect } from 'react'
import Header from './Header';
import Footer from './Footer';

export default function Content() {
    const [items,setItems] = useState(()=>{
        const savedItems = localStorage.getItem('Gitems');
        return savedItems ? JSON.parse(savedItems):['apple','almond'];
    });

    const [checked,setChecked] = useState(()=>{
        const savedChecked = localStorage.getItem('checkGitems');
        return savedChecked ? JSON.parse(savedChecked):{};
    });

    const inputRef = useRef(null);

    function handleAddItems(){
        const itm = inputRef.current.value.trim();
        if(itm !== ""){
            setItems((i) => [...i,itm]);
        }
        else{
            alert('Enter items');
        }
        inputRef.current.value = "";
    }
    function handleCheckedItems(index) {
        setChecked((prevChecked) => ({
            ...prevChecked,
            [index]: !prevChecked[index],
        }));
    }

    function handleDeleteItems(index){
        setItems((i)=> i.filter((_,i)=> i !== index));
    }

    useEffect(()=>{
        localStorage.setItem('Gitems',JSON.stringify(items));
        localStorage.setItem('checkedGitems',JSON.stringify(checked));
    },[items,checked]);

return (
        <div className='min-h-screen bgGrid'>
        <Header />
            <div>
                <div className='flex justify-center'>
                    <input 
                    type="text"
                    ref={inputRef}
                    placeholder='Enter Item'
                    />
                    <button onClick={handleAddItems}>Add</button>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    {items.map((item,index)=>(
                        <li
                        key={index}
                        style={{
                            textDecoration: checked[index] ? 'line-through' : 'none',
                        }}
                        >
                        <button onClick={() => handleCheckedItems(index)}>Checked</button>
                        {item}
                        <button onClick={() => handleDeleteItems(index)}>Delete</button>
                    </li>
                    
                    ))}
                </div>
            </div>
        <Footer />
        </div>
    )
}
