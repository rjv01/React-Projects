import React from 'react'

export default function SearchItems({search,setSearch}) {
  return (
    <div className='flex justify-center'>
        <form onSubmit={(e)=> e.preventDefault()}>
            <label htmlFor="search"></label>
            <input
                className='w-[387px] h-[51px] text-xl rounded-lg border shadow-lg'
                type="text"
                id='search'
                placeholder=' Search items'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </form>
    </div>
  )
}
