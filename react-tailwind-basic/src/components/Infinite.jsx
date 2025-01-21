import React, { useEffect, useState } from 'react';
import { getPost } from './apis/axios';
import Posts from './Posts';

export default function Infinite() {
    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        getPost().then(json=>{
            setPosts(json);
        });
    },[]);
    return (
        <div className='min-h-screen bgGrid m-5 p-5'>
            <h1 className='flex justify-center text-3xl font-bold font-mono'>Infinite Scroll</h1>
            <div className='grid grid-cols-3 capitalize gap-3'>
                {posts.map(post => <Posts key={post.id} post={post} />)}
            </div>
        </div>
    );
}