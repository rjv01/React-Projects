import React from 'react'

export default function SearchItems({search,setSearch}) {
  return (
    <div>
        <form onSubmit={(e)=> e.preventDefault()}>
            <label htmlFor="search">Search</label>
            <input 
                type="text"
                id='search'
                placeholder='Search items'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </form>
    </div>
  )
}
