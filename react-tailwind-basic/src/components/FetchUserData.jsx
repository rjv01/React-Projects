import React, { useEffect, useState } from 'react';

const API_URL = "https://randomuser.me/api/?results=20";

export default function FetchUserData(){
    const [users,setUsers] = useState([]);
    const [loading,setLoading] = useState(true);


    useEffect(()=>{
        const FetchData = async()=>{
            try{
                const response = await fetch(API_URL);
                const data = await response.json();
                console.log(data);
                setUsers(data.results);
                setLoading(false);
            }catch(error){
                console.log("Error in Fetching Data",error);
            }
        };
        FetchData();
    },[]);

return (
    <div className="min-h-screen flex flex-col bgGrid">
      <h1>Random User Data</h1>
      <div className='flex justify-center items-center'>
        <ul>
            {/* {users.map((user, index) => (
            <li key={index}>
                Full Name:{user.name.first} {user.name.last} p 
                Gender - {user.gender}
            </li>
            ))} */}
            { loading == true ? "Loading..." : 
                <table border="1" className="border-8 rounded-lg table-auto w-full text-left">
                <thead>
                <tr className=''>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Gender</th>
                    <th className="px-4 py-2">Email</th>
                    <th className="px-4 py-2">Country</th>
                    <th className="px-4 py-2">Location</th>
                </tr>
                </thead>
                <tbody >
                {users.map((user, index) => (
                    <tr className='border-8'
                    key={index}>
                    <td className="px-4 py-2">{user.name.first} {user.name.last}</td>
                    <td className="px-4 py-2">
                        {user.gender.toLowerCase() === "female"
                            ? <li className='text-red-700'>{user.gender} </li> 
                            : <li className='text-blue-700'>{user.gender} </li>}
                    </td>
                    <td className="px-4 py-2">{user.email}</td>
                    <td className="px-4 py-2">{user.location.country}</td>
                    <td className="px-4 py-2">{user.location.street.number}, {user.location.street.name} </td>
                    </tr>
                ))}
                </tbody>
            </table>
            }
        </ul>
      </div>
    </div>
  );
}