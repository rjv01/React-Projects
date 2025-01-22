import React from 'react'

export default function AddItems({newItem,setNewItem,handleSubmit}) {

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="addItem">Add Item</label>
                <input
                    autoFocus
                    type="text"
                    id='addItem'
                    placeholder='Add Item'
                    required
                    value={newItem}
                    onChange={(e)=> setNewItem(e.target.value)}
                />
                <button
                    type='submit'
                    onClick={handleSubmit}
                >
                    Add
                </button>
            </form>
        </div>
    )
}
