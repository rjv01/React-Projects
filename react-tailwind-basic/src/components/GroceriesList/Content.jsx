import React from 'react'   
import ItemList from './ItemList';
import Footer from './Footer';

export default function Content({items,handleCheck,handleDelete}) {
    return(
        <div className='min-h-screen flex flex-col items-center'>
            <div className='border-8 rounded-xl border-red-600 m-3 p-8'>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-2xl font-mono font-bold'>Grocery List</h1>
                </div>
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
