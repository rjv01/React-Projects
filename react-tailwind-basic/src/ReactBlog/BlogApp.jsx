import React from 'react'
import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';
import BlogHome from './BlogHome';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import {useState,useEffect} from 'react';


export default function BlogApp() {
    return (
        <div className='bgGrid'>
            <Header />
            <Navbar />
            <Router>
                <Route path='/'>
                    <BlogHome />
                </Route>
                <Footer />
                <NewPost />
                <PostPage />
            </Router>
            <About />
            <Missing />
        </div>
    )
}
