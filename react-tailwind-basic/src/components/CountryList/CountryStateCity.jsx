import React, { useEffect, useState } from "react";
import { Country,State,City } from "country-state-city";
import CountryListI from "./CountryListI";
import {Link, Links, NavLink} from 'react-router-dom';


export default function CountryStateCity(){
    // console.log(Country.getAllCountries());
    // console.log(City.getAllCities());
    // console.log(State.getAllStates());
    console.log(City.getCitiesOfState("IN","AN"));


    const [countries,setCountries] = useState([]);
    const [loading,setLoading] = useState(true);

    const [search,setSearch] = useState("");

    const handleSearch = (e)=>{
        const searchCountry = e.target.value.toLowerCase();
        setSearch(searchCountry);
    }

    useEffect(()=>{
        const timeout = setTimeout(()=>{
            const getAllCountries = Country.getAllCountries();
            setCountries(getAllCountries);
            setLoading(false);
        },3000);

        return ()=> clearTimeout(timeout);

    },[])

    return(
        <div className="min-h-screen flex justify-center bgGrid">
            <div className="flex flex-col justify-start items-center ">
                <h1 className="p-2 mt-2">Search Country</h1>
                <input 
                    type="text"
                    onChange={(e)=>handleSearch(e)}
                    placeholder="Enter Country Name" 
                    className="border-2 border-black rounded-lg w-[350px] p-[20px]"
                    />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mt-6">
                    {
                        loading ? (
                            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-yellow-500 mx-auto my-4"></div>
                        ) : (
                        countries.filter((c) => c.name.toLowerCase().includes(search))
                            .map((country, index) => (
                            <div
                                key={index}
                                className="border-2 border-yellow-500 w-[300px] p-4 rounded-xl shadow-md text-center"
                            >
                                <div className="text-3xl">{country.flag}</div>
                                <h3 className="text-xl font-semibold">{country.name}</h3>
                                <p className="text-sm text-gray-500">+{country.phonecode}</p>
                                <Link
                                to={`/countrylisti/${country.isoCode}`}
                                className="text-blue-600 hover:underline mt-2 inline-block"
                                >
                                    
                                View Details
                                </Link>
                            </div>
                    )))}
                </div>
            </div>
        </div>
    )
}