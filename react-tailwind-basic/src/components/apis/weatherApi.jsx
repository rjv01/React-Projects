import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.weatherapi.com/v1',
});

export const weatherApi = async (city) => {
  const cityName = city ;
  const resp = await api.get("/current.json", {
    params: {
      key: import.meta.env.VITE_WEATHER_KEY,
      q: cityName,
    },
  });
  return resp.data;
};

export default weatherApi;
