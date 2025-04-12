import axios from 'axios';

export const api = axios.create({
    baseURL:'https://catfact.ninja'
})

export const getFact = async ()=>{
    const response = await api.get('/fact');
    return response.data;
}


