import React, { useEffect, useState } from 'react';
import weatherApi from './apis/weatherApi';

export default function FinallyWeatherApi() {
  const [searchCity, setSearchCity] = useState('');
  const [loading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (searchCity) {
        try {
          const data = await weatherApi(searchCity);
          setWeatherData(data);
          setLoading(false);
        } catch (err) {
          console.log(err.message);
          setLoading(false);
        }
      }
    };
    if(searchCity)
        fetchWeatherData();
  }, [searchCity]);

  const handleSearchName = (e) => {
    setSearchCity(e.target.value);
    setLoading(true);
  };

  return (
    <div className='min-h-screen bgGrid flex flex-col justify-center items-center'>
    <h1 className='mb-4 text-4xl font-mono'>Weather Information</h1>
      <div className=''>
        <label>
          <input 
            type="text"
            placeholder='Type City Name'
            name='cityName'
            className='p-4 border-2 border-black rounded-xl gap-2 text-2xl'
            onChange={handleSearchName}
          />
        </label>
      </div>
      { searchCity && 
        <div className='text-3xl mt-8 border-2 border-black m-2 p-4 text-blue-700 rounded-2xl'>
            {loading ? (
            <p>Loading...</p>
            ) : (
            weatherData && (
                <div>
                <h2>{weatherData.location.name}</h2>
                <h2>{weatherData.location.region}</h2>
                <h2>{weatherData.location.country}</h2>
                <p>Temperature: {weatherData.current.temp_c}°C</p>
                <p>Condition: {weatherData.current.condition.text}</p>
                </div>
            )
            )}
        </div>
      }
    </div>
  );
}
