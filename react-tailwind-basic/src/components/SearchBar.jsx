import React, { useEffect, useState } from 'react'
import { getPost } from './apis/axios'
import SearchInput from './SearchInput';
import ListPost from './ListPost';


export default function SearchBar() {
    const [posts,setPost] = useState([]);
    const [searchResults,setSearchresults] = useState([]);

    useEffect(()=>{
        getPost().then(json=>{
            setPost(json);
            setSearchresults(json);
        })
    },[]);

    return (
        <div>
            <SearchInput posts={posts} setSearchresults={setSearchresults}/>
            <ListPost searchResults={searchResults} />
        </div>
    )
}
