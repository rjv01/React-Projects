import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Country, State, City } from "country-state-city";
import { Link } from 'react-router-dom';

export default function CountryListI() {
  const [selState, setSelState] = useState(false);
  const [selCity, setSelCity] = useState(false);

  const [stateName, setStateName] = useState(null);
  const [cityOfState, setCityOfState] = useState([]);

  const { countryCode } = useParams();

  const country = Country.getCountryByCode(countryCode);
  const city = City.getCitiesOfCountry(countryCode);
  const state = State.getStatesOfCountry(countryCode);

  if (!country) return <div>Country not found</div>;

  const handleState = () => {
    setSelCity(false);
    setSelState(true);
  }

  const handleCity = () => {
    setSelCity(true);
    setSelState(false);
  }

  const handleSeletedState = (e, stateCode) => {
    setStateName(stateCode);
    const cityState = City.getCitiesOfState(countryCode, stateCode);
    setCityOfState(cityState);
  }

  return (
    <div className="min-h-screen mt-8 mb-4 p-2 bgGrid text-gray-800">
      <div className="text-5xl border-4 rounded-xl p-6 border-gray-900 bg-white/60 shadow-lg grid grid-cols-3 gap-6 font-bold text-center">
        <h1>{country.name} {country.flag}</h1>
        <p className="text-3xl font-semibold">ISO: {country.isoCode}</p>
        <p className="text-3xl font-semibold">Phone: +{country.phonecode}</p>
        <p className="text-3xl font-semibold">Currency: {country.currency}</p>
        <p className="text-3xl font-semibold">Cities: {city.length}</p>
        <p className="text-3xl font-semibold">States: {state.length}</p>
      </div>

      <div className="p-4 text-2xl">
        <Link to={`/countrystatecity`} className="text-red-600 hover:underline">
          ← Back to Lists
        </Link>
      </div>

      <h2 className="text-4xl font-bold mt-8 mb-4">States of {country.name}</h2>
      <div className="flex gap-4 flex-wrap">
        <button className="bg-white shadow-md hover:bg-blue-600 hover:text-white transition duration-300 border border-blue-500 text-xl font-medium px-6 py-3 rounded-lg" onClick={handleState}>All States</button>
        <button className="bg-white shadow-md hover:bg-blue-600 hover:text-white transition duration-300 border border-blue-500 text-xl font-medium px-6 py-3 rounded-lg" onClick={handleCity}>All Cities</button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 p-4 gap-4">
        {
          selState && state.map((item, index) => (
            <li
              className="list-none bg-white/70 backdrop-blur-md border-2 border-blue-400 hover:bg-blue-500 hover:text-white transition duration-300 rounded-xl p-4 shadow-md cursor-pointer text-xl font-medium"
              key={index}
              onClick={(e) => handleSeletedState(e, item.isoCode)}
            >
              {item.name}
              <br />
              <span className="text-base font-normal">Code: {item.isoCode}</span>
            </li>
          ))
        }
      </div>

      {selState && stateName && (
        <>
          <h2 className="text-3xl font-semibold p-4 mt-6">
            Cities of {state.find(s => s.isoCode === stateName)?.name}
          </h2>
          <p className="text-xl font-medium px-4">
            Total Cities: {cityOfState.length}
          </p>
        </>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 p-4 gap-4">
        {
          selState && cityOfState.map((item, index) => (
            <li
              className="list-none bg-white/70 backdrop-blur-md border-2 border-purple-400 hover:bg-purple-500 hover:text-white transition duration-300 rounded-xl p-4 shadow-md text-xl font-medium"
              key={index}>
              {item.name}
            </li>
          ))
        }
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 p-4 gap-4">
        {
          selCity && city.map((item, index) => (
            <li
              className="list-none bg-white/70 backdrop-blur-md border-2 border-pink-400 hover:bg-pink-500 hover:text-white transition duration-300 rounded-xl p-4 shadow-md text-xl font-medium"
              key={index}>
              {item.name}
            </li>
          ))
        }
      </div>
    </div>
  );
}
