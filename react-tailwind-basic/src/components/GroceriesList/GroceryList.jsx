import React, { useState, useEffect } from 'react'   
import AddItems from './AddItems';
import SearchItems from './SearchItems';
import Content from './Content';
import apiResquest from './apiRequest';


export default function GroceryList() {
    //CRUD API
    // const API_URL = 'http://localhost:3500/items';
    // const [items,setItems] = useState([]);
    // const [fetchError,setFetchError] = useState(null);
    // const [isLoading,setIsLoading] = useState(true);
    
    const [items, setItems] = useState(() => {
        return JSON.parse(localStorage.getItem('shoppinglist')) || [];
    });
    
    const [newItem,setNewItem] = useState('');
    const [search,setSearch] = useState('');

    //CRUD API
    // useEffect(()=>{
    //     const fetchItem = async()=>{
    //         try{
    //             const response = await fetch(API_URL);
    //             if(!response.ok)
    //                 throw Error('Did Not Receive Data');
    //             const listItems = await response.json();
    //             setItems(listItems);
    //             setFetchError(null);
    //         }catch(err){
    //             setFetchError(err.message);
    //         }finally{
    //             setIsLoading(false);
    //         }
    //     }
    //     setTimeout(()=>{
    //         (async () => await fetchItem())();
    //     },2000);

    // },[]);


    function setAndSaveItem(myItemList) {
        setItems(myItemList); 
        localStorage.setItem('shoppinglist', JSON.stringify(myItemList));
    }
    

    const addItem = async (item) =>{
        const id = items.length ? items[items.length-1].id + 1 : 1;
        const myNewItem = {id,checked:false,item};
        const myNewListItem = [...items,myNewItem];
        setAndSaveItem(myNewListItem);

        //CRUD API
        // const postOptions = {
        //     method:'POST',
        //     header:{
        //         'Content-Type':'application/json'
        //     },
        //     body:JSON.stringify(myNewItem)
        // }
        // const result = await apiResquest(API_URL,postOptions);
        // if(result)
        //     setFetchError(result);
    }

    function handleSubmit(e){
        e.preventDefault();
        if(!newItem)
            return;
        addItem(newItem)
        setNewItem('')
    }

    async function handleCheck(id){
        const listItems = items.map((item)=> item.id === id ? {...item,checked:!item.checked} : item );
        setAndSaveItem(listItems);
        
        //CRUD API
        // setItems(listItems);
        // const myItem = listItems.filter((item)=> item.id === id);
        // const updateOptions = {
        //     method:'PATCH', 
        //     headers:{
        //         'Content-Type':'application/json'
        //     },
        //     body:JSON.stringify({checked:myItem[0].checked})
        // }
        // console.log(listItems);
        // const reqUrl = `${API_URL}/${id}`;
        // const result = await apiResquest(reqUrl,updateOptions);
        // if(result)
        //     setFetchError(result);
    }

    async function handleDelete(id){
        const listItem = items.filter((item)=> item.id !== id);
        setAndSaveItem(listItem);
        
        //CRUD API
        // setItems(listItem);
        // const myItemDel = items.filter((item) => item.id !== id);
        // const deleteOptions = {
        //     method:"DELETE"
        // }
        // const reqUrl = `${API_URL}/${id}`;
        // const result = await apiResquest(reqUrl,deleteOptions);
        // if(result)
        //     setFetchError(result);
    }

    useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem('shoppinglist'));
        if (storedItems) {
            setItems(storedItems);
        }
    }, []);

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
                {/* CRUD API */}
                {/* {isLoading && <p className='text-4xl flex justify-center mt-4'>
                                <i className="fa-solid fa-gear animate-spin mt-3 "></i>
                              </p> } */}
                {/* {fetchError && <p style={{color:'red'}} >{`Error: ${fetchError}`}</p>} */}
                {/* {!fetchError && !isLoading && <Content */}

                <Content
                    items={items.filter(item => item?.item?.toLowerCase().includes(search.toLowerCase()))}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />

            </main>
        </div>
    )
}   