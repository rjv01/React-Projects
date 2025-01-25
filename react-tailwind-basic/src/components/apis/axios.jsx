import axios from 'axios';

export const api = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
});

export const getPost = async ()=>{
    const response = await api.get('/posts')
    return response.data;
};

export const getPostsPage = async(pageParam=1,options = {})=>{
    const response = await api.get(`/posts?_page=${pageParam}`,options)
    return response.data;
};

export const getCommentsPage = async(pageParam=1,options={})=>{
    // const resp = await api.get(`/comments?_page=${pageParam}`,options);
    const response = await api.get('/comments');
    return response.data;
};

export const getAlbumsPage = async(pageParam=1,options={})=>{
    // const response = await api.get(`/albums?_page=${pageParam}`,options);
    const response = await api.get('/albums');
    return response.data;
};

export const getUsersPage = async()=>{
    const response = await api.get('/users');
    return response.data;
};  