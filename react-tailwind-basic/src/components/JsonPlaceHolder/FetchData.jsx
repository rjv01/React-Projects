import React, { useEffect, useState } from 'react';
import { getCommentsPage, getUsersPage } from '../apis/axios';
import Comments from './Comments';
import Albums from './Albums';
import Users from './Users';

export default function FetchData() {
    const [comments, setComments] = useState([]);
    const [albums,setAlbums] = useState([]);
    const [users,setUsers] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [activePage,setActivePage] = useState('');

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const data = await getCommentsPage();
                setComments(data);
                setFetchError(null);
            } catch (err) {
                setFetchError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchdata();
    }, []);

    useEffect(()=>{
        const fetchAlbumes = async()=>{
            try{
                const data = await getAlbumsPage();
                setAlbums(data);
                setFetchError(null);
            }catch(err){
                setFetchError(err.message);
            }finally{
                setIsLoading(false);
            }
        };
        fetchAlbumes();
    },[]);

    useEffect(()=>{
        const fetchUsers = async()=>{
            try{
                const data = await getUsersPage();
                setUsers(data);
                setFetchError(null);
            }catch(err){
                setFetchError(err.message);
            }finally{
                setIsLoading(false);
            }
        };
        fetchUsers();
    },[]);
    
    function handleActivePage(page){
        setActivePage(page)
    }

    return (
        <div className="min-h-screen bgGrid">
            {fetchError && <p className="text-red-500">Error: {fetchError}</p>}
            {isLoading ? (
                <div className='flex justify-center items-center'>
                    <p>Loading data...</p>
                </div>
            ) : (
                <div className='mt-5 text-2xl flex flex-col justify-center items-center'>
                    {/* <h1>Fetched Comments</h1> */}
                    <div className='grid grid-cols-3 m-3 p-3 gap-3'>
                        <button
                            className='border-2 m-3 p-3 rounded-lg shadow-lg text-2xl font-semibold hover:bg-blue-500 hover:text-white duration-200 border-blue-500'
                            onClick={()=> handleActivePage('Users')}>
                            Users
                        </button>

                        <button
                            className='border-2 m-3 p-3 rounded-lg shadow-lg text-2xl font-semibold hover:bg-blue-500 hover:text-white duration-200 border-blue-500'
                            onClick={()=> handleActivePage('Albums')}>
                            Albums
                        </button>

                        <button
                            className='border-2 m-3 p-3 rounded-lg shadow-lg text-2xl font-semibold hover:bg-blue-500 hover:text-white duration-200 border-blue-500'
                            onClick={()=> handleActivePage('Comments')}>
                            Comments
                        </button>
                    </div>
                    <div className='w-full'>
                        {activePage === 'Users' && <Users users={users} />}
                        {activePage === 'Comments' && <Comments comments={comments} />}
                        {activePage === 'Albums' && <Albums albums={albums} />}
                        {!activePage && <p>Select Page to view Content</p>}
                    </div>
                    {/* <Albums albums={albums}/> */}
                    {/* <Comments comments={comments}/> */}
                    {/* <Users users={users}/> */}
                </div>
            )}
        </div>
    );
}
