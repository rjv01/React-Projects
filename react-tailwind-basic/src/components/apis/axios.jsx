import axios from 'axios';

export const api = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
});

export const getPost = async ()=>{
    const repsone = await api.get('/posts')
    return repsone.data;
};

