import React, { useEffect, useState } from 'react'
import { getPost } from './apis/axios'
import SearchInput from './SearchInput';
import ListPost from './ListPost';


export default function SearchBar() {
    const [posts,setPost] = useState([]);
    const [searchResults,setSearchResults] = useState([]);

    useEffect(()=>{
        getPost().then(json=>{
            setPost(json);
            setSearchResults(json);
        })
    },[]);

    return (
        <div className='min-h-screen bgGrid flex flex-col justify-center items-center'>
            <SearchInput posts={posts} setSearchResults={setSearchResults}/>
            <h1 className='font-xl text-2xl font-mono'>Search Filter</h1>
            <ListPost searchResults={searchResults} />
        </div>
    )
}
