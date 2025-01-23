import React, { useState,useRef, useEffect } from 'react'   
import Footer from './Footer';
import ItemList from './ItemList';
import AddItems from './AddItems';
import SearchItems from './SearchItems';

export default function Content() {
    const [items,setItems] = useState(
        ()=> JSON.parse(localStorage.getItem('shoppinglist'))|| [] );
        
    const [newItem,setNewItem] = useState('');
    const [search,setSearch] = useState('');

    function setAndSaveItem(myItemList) {
        setItems(myItemList); // Update the items state
        localStorage.setItem('shoppinglist', JSON.stringify(myItemList));
    }
    

    const addItem = (item) =>{
        const id = items.length ? items[items.length-1].id + 1 : 1;
        const myNewItem = {id,checked:false,item};
        const myNewListItem = [...items,myNewItem];
        setAndSaveItem(myNewListItem);
    }

    function handleSubmit(e){
        e.preventDefault();
        if(!newItem)
            return;
        addItem(newItem)
        setNewItem('')
    }

    function handleCheck(id){
        const listItems = items.map((item)=> item.id === id ? {...item,checked:!item.checked} : {...item} )
        setAndSaveItem(listItems);
    }

    function handleDelete(id){
        const listItem = items.filter((item)=> item.id !== id);
        setAndSaveItem(listItem);
    }
    
    return(
        <div className='min-h-screen flex flex-col items-center bgGrid'>
            <div className='border-8 rounded-xl border-red-600 m-3 p-8'>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-2xl font-mono font-bold'>Grocery List</h1>
                </div>
                <AddItems 
                    newItem={newItem}
                    setNewItem={setNewItem}
                    handleSubmit={handleSubmit}
                />
                {/* <SearchItems 
                    search={search}
                    setSearch={setSearch}
                /> */}
                <div className='font-bold text-lg'>
                    {items.length ? (
                        <ItemList 
                            items={items} 
                            handleCheck={handleCheck} 
                            handleDelete={handleDelete}
                        />
                        ):(
                            <h1 className=' text-red-500'>Empty List</h1>
                        )
                    }
                        <Footer 
                        length={items.length}
                />
                </div>
            </div>
        </div>
    )
}
