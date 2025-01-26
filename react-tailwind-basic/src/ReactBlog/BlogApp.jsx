import React from 'react'
import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';
import BlogHome from './BlogHome';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';


export default function BlogApp() {
    return (
        <div className='bgGrid'>
            <Header />
            <Navbar />
            <BlogHome />
            <Footer />
            <NewPost />
            <About />
            <Missing />
            <PostPage />
        </div>
    )
}
