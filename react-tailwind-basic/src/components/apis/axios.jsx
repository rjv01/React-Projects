import axios from 'axios';

export const api = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
});

export const getPost = async ()=>{
    const repsone = await api.get('/posts')
    return repsone.data;
};

export const getPostsPage = async(pageParam=1,options = {})=>{
    const resp = await api.get(`/posts?_page=${pageParam}`,options)
    return resp.data;
}