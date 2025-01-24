import React, { useState,useRef, useEffect } from 'react'   
import Footer from './Footer';
import AddItems from './AddItems';
import SearchItems from './SearchItems';
import Content from './Content';

export default function GroceryList() {
    const API_URL = 'http://localhost:3500/items';
    
    const [items,setItems] = useState([]);
    const [newItem,setNewItem] = useState('');
    const [fetchError,setFetchError] = useState(null);
    const [search,setSearch] = useState('');
    const [isLoading,setIsLoading] = useState(true);

    useEffect(()=>{
        const fetchItem = async()=>{
            try{
                const response = await fetch(API_URL);
                if(!response.ok)
                    throw Error('Did Not Receive Data');
                const listItems = await response.json();
                setItems(listItems);
                setFetchError(null);
            }catch(err){
                setFetchError(err.message);
            }finally{
                setIsLoading(false);
            }
        }
        setTimeout(()=>{
            (async () => await fetchItem())();
        },2000);

    },[]);

    function setAndSaveItem(myItemList) {
        setItems(myItemList); 
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
    return (
        <div className='bgGrid'>
            <AddItems 
                newItem={newItem}
                setNewItem={setNewItem}
                handleSubmit={handleSubmit}
            />
            <SearchItems 
                search={search}
                setSearch={setSearch}
            />
            <main>
                {isLoading && <p className='text-4xl flex justify-center mt-4'>
                                <i className="fa-solid fa-gear animate-spin mt-3 "></i>
                              </p> }
                {fetchError && <p style={{color:'red'}} >{`Error: ${fetchError}`}</p>}
                {!fetchError && !isLoading && <Content
                    items={items.filter(item => item.item.toLowerCase().includes(search.toLowerCase()))}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />}
            </main>
            {/* <Footer 
                length={items.length}
            /> */}
        </div>
    )
}